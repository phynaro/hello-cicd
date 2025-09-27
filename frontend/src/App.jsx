import { useEffect, useState } from 'react'

export default function App() {
  const [message, setMessage] = useState('loading...')
  useEffect(() => {
    fetch('/api/hello')
      .then(r => r.json())
      .then(d => setMessage(d.message))
      .catch(() => setMessage('API unreachable'))
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center p-8 rounded-2xl shadow bg-white">
        <h1 className="text-2xl font-bold">Hello CI/CD 👋</h1>
        <p className="mt-2 text-gray-700">Backend says: {message}</p>
        <p className="mt-2 text-gray-700">Staging says: Staging is working!</p>
      </div>
    </div>
  )
}