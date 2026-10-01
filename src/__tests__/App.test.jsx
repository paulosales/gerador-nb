import React from 'react'
import { render } from '@testing-library/react'
import App from '../components/App'
import { ToastProvider } from '../components/Toast'

test('renders Generate Button', () => {
  const { getByText } = render(
    <ToastProvider>
      <App />
    </ToastProvider>
  )
  const linkElement = getByText(/Gerar/i)
  expect(linkElement).toBeInTheDocument()
})
