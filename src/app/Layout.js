import {Outlet} from 'react-router-dom';
import React from 'react'
import NavBar  from '../components/navBar';
import Footer from '../components/footer';





 const Layout = () => {

  return (
        <div>
            <NavBar className="navBar"> </NavBar>
            <Outlet className="container-general"/>
            <Footer></Footer>
        </div>
  )
}

export default Layout;