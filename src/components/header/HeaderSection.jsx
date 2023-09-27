import React, { useContext } from 'react'
import { DevolinContext } from '../../context/DevolinContext'
import { Link } from 'react-router-dom'

const HeaderSection = () => {
    const {
        openSidebarSection,
        sidebarRef,
        isDarkMode,
        toggleRtlMode,
        isRtlMode
    } = useContext(DevolinContext)
  return (
    <div className="header" ref={sidebarRef}>
    <div className="container">
        <div className="row justify-content-between align-items-center">
            <div className="col-6">
                <div className="logo">
                    <Link to="/">
                        <img id="logo" src={isDarkMode? "assets/images/logo-2.png":"assets/images/logo.png"} alt="LOGO"/>
                    </Link>
                </div>
            </div>
            <div className="col-6">
                <div className="nav-btn">
                    <a className="theme-btn" role='button' >{ ''}</a>
                   
                    <a role="button" id="sidebar" onClick={openSidebarSection}><i className="fa-thin fa-gear"></i></a>
                </div>
            </div>
        </div>
    </div>
</div> //onClick={toggleRtlMode} isRtlMode
  )
}

export default HeaderSection