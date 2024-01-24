function App() {
  const settings = {
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    }
  }

  async function getCookie() {
    try {
      const res = await fetch('http://127.0.0.1:3000/get-cookie', settings)
      const data = await res.json()

      console.log(data)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div style={{
      display: 'flex',
      gap: '10px'
    }}>
      <button onClick={getCookie}>
        Get cookie
      </button>
      <button>
        Send cookie
      </button>
    </div>
  )
}

export default App
