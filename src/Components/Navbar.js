import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav className="navbar">
        <h1>Expenso</h1>
        <div className="links">
            <Link to= "/home">Home</Link>
            <Link to="/split">Split Expenses</Link>
            <Link to="/expense">Expense Tracker</Link>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
            </div>
        </nav>
  )
}
