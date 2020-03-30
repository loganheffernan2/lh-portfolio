import React from 'react'
import { Component } from 'react'
import { Link } from "gatsby"
import '../css/header.css'
import Toggle from './Toggle'

class Header extends Component {

  function () {
    const intoMe = document.getElementById('addtlInfo');
    intoMe.onclick("mE!");
  }

  render (){

    return (
        <div id="headerWrap">
            <p id="nameTitle"><Link to="/">Logan Heffernan</Link></p>
            <p id="addtlInfo"><Toggle id="homeLink"><Link to="/">Home</Link> <a id="contactLink" href="mailto:info@loganheffernan.com">Contact</a> </Toggle></p>
        </div>
    )
}
}

export default Header