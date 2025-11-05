import { useState } from 'react'
import './App.css'

type Model = 'gpt-4' | 'gpt-3.5-turbo' | 'claude-3-opus' | 'claude-3-sonnet'

function App() {
  const [selectedModel, setSelectedModel] = useState<Model>('gpt-4')
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    setIsLoading(true)
    setOutput('')

    // Placeholder for API call - you'll integrate actual API later
    setTimeout(() => {
      setOutput(`Response from ${selectedModel}:\n\n${input}\n\n(This is a placeholder. Connect to actual API for real responses.)`)
      setIsLoading(false)
    }, 1000)
  }

  return (
    <div className="app">
      <div className="container">
        <h1>Model Picker</h1>
        
        <div className="model-selector">
          <label htmlFor="model-select">Select Model:</label>
          <select 
            id="model-select"
            value={selectedModel} 
            onChange={(e) => setSelectedModel(e.target.value as Model)}
          >
            <option value="gpt-4">GPT-4</option>
            <option value="gpt-3.5-turbo">GPT-3.5 Turbo</option>
            <option value="claude-3-opus">Claude 3 Opus</option>
            <option value="claude-3-sonnet">Claude 3 Sonnet</option>
          </select>
        </div>

        <form onSubmit={handleSubmit} className="chat-form">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter your message..."
            rows={4}
            disabled={isLoading}
          />
          <button type="submit" disabled={isLoading || !input.trim()}>
            {isLoading ? 'Processing...' : 'Send'}
          </button>
        </form>

        {output && (
          <div className="output">
            <h3>Response:</h3>
            <div className="output-content">
              {output}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
