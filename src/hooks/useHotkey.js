import { useEffect, useRef } from 'react'

const isMac =
  typeof navigator !== 'undefined' &&
  /Mac|iPod|iPhone|iPad/.test(navigator.platform)

const KEY_LABELS = {
  ctrl: isMac ? '⌘' : 'Ctrl',
  shift: 'Shift',
  alt: isMac ? '⌥' : 'Alt',
}

// Renders a shortcut string like "ctrl+c" as a human readable label, e.g. "Ctrl+C".
export const formatShortcut = (shortCut) => {
  if (!shortCut) return ''
  return shortCut
    .split('+')
    .map((part) => {
      const key = part.trim().toLowerCase()
      return KEY_LABELS[key] || key.toUpperCase()
    })
    .join('+')
}

// Binds a global keyboard shortcut (e.g. "g" or "ctrl+c") to the given handler.
export default function useHotkey(shortCut, handler) {
  const handlerRef = useRef(handler)

  useEffect(() => {
    handlerRef.current = handler
  }, [handler])

  useEffect(() => {
    if (!shortCut) return undefined

    const parts = shortCut.split('+').map((part) => part.trim().toLowerCase())
    const key = parts[parts.length - 1]
    const needsCtrl = parts.includes('ctrl')
    const needsShift = parts.includes('shift')
    const needsAlt = parts.includes('alt')

    const onKeyDown = (event) => {
      const target = event.target
      const isEditable =
        target &&
        (target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA' ||
          target.isContentEditable)
      if (isEditable) return

      const eventKey = event.key.toLowerCase()
      const ctrlPressed = event.ctrlKey || event.metaKey

      if (
        eventKey === key &&
        ctrlPressed === needsCtrl &&
        event.shiftKey === needsShift &&
        event.altKey === needsAlt
      ) {
        event.preventDefault()
        handlerRef.current(event)
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [shortCut])
}
