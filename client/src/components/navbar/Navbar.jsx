import React from 'react'
import classes from './navbar.module.css'
import { Link } from 'react-router-dom'
import womanImg from '../../assets/woman.jpg'
import { useState } from 'react'
import { logout } from '../../redux/authSlice'
import { useDispatch } from 'react-redux';


const Navbar = () => {
  const [showModal, setShowModal] = useState(false)
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.left}>
          <Link to='/'>BLOGGY</Link>
        </div>
        <ul className={classes.center}>
          
        </ul>
        <div className={classes.right}>
          <img onClick={() => setShowModal(prev => !prev)} src={womanImg} className={classes.img} />
          {showModal &&
            <div className={classes.modal}>
              <Link to='/create'>Create</Link>
              <Link onClick={handleLogout}>Logout</Link>
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default Navbar