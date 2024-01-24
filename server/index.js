import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors({
  origin: 'https://cookies-lovat.vercel.app',
  credentials: true
}))
app.use(express.json())
app.use(cookieParser())

app.get('/get-cookie', (req, res) => {
  const values = ['hola', 'adios', 'beta', 'sigma']
  const num = Math.floor(Math.random() * values.length)

  res.cookie('test', values[num], {
    httpOnly: true,
    expires: new Date(Date.now() + 60 * 15 * 1000),
    sameSite: 'none',
    secure: true
  })

  res.json({ msg: 'generate cookie' })
})

app.get('/send-cookie', (req, res) => {
  console.log(req.cookies)
  res.json({ msg: 'server get cookie' })
})

app.get('/delete-cookie', (req, res) => {
  res.clearCookie('test')
  res.json({ msg: 'server get cookie' })
})


app.listen(PORT, () => console.log(`Server running on port: ${3000}`))