import React, {
  createContext,
  useCallback,
  useContext,
  useRef,
  useState,
} from 'react'
import PropTypes from 'prop-types'
import { ToastViewport, ToastItem } from './styles'

const ToastContext = createContext(null)

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([])
  const nextId = useRef(0)

  const showToast = useCallback((message, duration = 3000) => {
    const id = ++nextId.current
    setToasts((current) => [...current, { id, message }])
    window.setTimeout(() => {
      setToasts((current) => current.filter((toast) => toast.id !== id))
    }, duration)
  }, [])

  return (
    <ToastContext.Provider value={showToast}>
      {children}
      <ToastViewport aria-live="polite">
        {toasts.map((toast) => (
          <ToastItem key={toast.id}>{toast.message}</ToastItem>
        ))}
      </ToastViewport>
    </ToastContext.Provider>
  )
}

ToastProvider.propTypes = {
  children: PropTypes.node,
}

export function useToast() {
  const showToast = useContext(ToastContext)
  if (!showToast) {
    throw new Error('useToast must be used within a ToastProvider')
  }
  return showToast
}
