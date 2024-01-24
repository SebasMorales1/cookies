function App() {
  const settings = {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    }
  }

  async function getCookie() {
    try {
      const res = await fetch('https://cookies-f9gu.onrender.com/get-cookie', settings)
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
