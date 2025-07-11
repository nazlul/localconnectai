'use client'

import { useEffect, useState } from 'react'

export default function Chatbot() {
  const [shouldRender, setShouldRender] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      const script = document.createElement('script')
      script.src = 'https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1'
      script.async = true
      document.body.appendChild(script)

      setShouldRender(true)
    }, 3000)

    return () => clearTimeout(timeout)
  }, [])

  if (!shouldRender) return null

  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `
        <df-messenger
          intent="WELCOME"
          chat-title="LocalConnectAI-Bot"
          agent-id="d6b5a482-47b0-4b97-bec1-9398eabcca07"
          language-code="en">
        </df-messenger>
        <style>
          df-messenger {
            position: fixed;
            bottom: 20px;
            left: 20px;
            z-index: 9999;
            overflow-x: hidden;
          }
        </style>
      `,
      }}
    />
  )
}
