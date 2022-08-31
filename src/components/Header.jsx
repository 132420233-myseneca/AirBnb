import React from 'react'
import "./Header.css"
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PersonIcon from '@mui/icons-material/Person';
import {Link} from "react-router-dom"

function Header() {
  return (
    <div className="header">
       <Link to = "/">
      <img
                    className="header__icon"
                    src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
                    alt=""
                />
      </Link> 
        
      <div className="header__center">
                  <input type="text"/>
                  <SearchIcon/>
                </div>
                <div className='header__right'>
                  <div className="rm">
                  <p>Become a host</p>
                <LanguageIcon />
                  </div>
                <ExpandMoreIcon />
                <PersonIcon/>
            </div>
    </div>
  )
}

export default Header
