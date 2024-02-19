// 
import React, { useState } from 'react'
import '../Admin/Adminstyles.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Adminlogin = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!email || !password) {
      setError('Please fill in all required fields.')
      return
    }

    try {
      const response = await axios.post('http://localhost:4000/auth/Adminlogin', { email, password })

      if (response.data.error) {
        setError(response.data.error)
      } else {
        // Redirect to dashboard page after successful login
        navigate('/')
        console.log(response.data)
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="login-form ">
      <h2 className="title">ADMIN</h2>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit" className="btn">
        Login
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  )
}

export default Adminlogin