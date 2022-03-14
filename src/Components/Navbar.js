import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import {Login} from './Login'
export const Navbar = () => {
  let user = JSON.parse(localStorage.getItem('sanskarEmail'))
  const history = useHistory()
  function logOut(){

    localStorage.clear()
    history.push('/home')
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light d-inline-block align-top">
        <strong><h1 className='navbar-brand' style={{marginBottom:'15px',  fontSize:'30px'}}>Expenso</h1></strong>
        <div className="links">
          
          <>
            <Link to= "/home" id='navlink' style={{backgroundColor:'#100C08', color:'white',padding:'0px 10px', fontSize:'25px',margin: '0px 10px'}}>Home</Link>
            <Link to="/split" id='navlink' style={{backgroundColor:'#100C08', color:'white',padding:'0px 10px', fontSize:'25px', margin: '0px 10px'}}>Split Expenses</Link>
            <Link to="/expense" id='navlink' style={{backgroundColor:'#100C08', color:'white',padding:'0px 10px', fontSize:'25px', margin: '0px 10px'}}>Expense Tracker</Link>
            </>
          
            <>
            <Link to="/register" id='navlink' style={{backgroundColor:'#100C08', color:'white',padding:'0px 10px', fontSize:'25px', margin: '0px 10px'}}>Register</Link>
            <Link to="/login" id='navlink' style={{backgroundColor:'#100C08', color:'white',padding:'0px 10px', fontSize:'25px', margin: '0px 10px'}}>Login</Link>
            </>
            <>
            <Link to= "/home" id='navlink' style={{backgroundColor:'#100C08', color:'white',padding:'0px 10px', fontSize:'25px',margin: '0px 10px', 
            onclick: { logOut }
          }}>Logout</Link>
            </>
            </div>
        
        </nav>
  )
}
