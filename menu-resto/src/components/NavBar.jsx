import React from 'react'
import styled from 'styled-components'
import foodYummy from '../assets/emulsify04.svg'
export default function NavBar() {
  return <Nav>
    <div className = 'brand'>
        <img src={foodYummy} alt = ""/>
        <div className= "toggle"></div>
    </div>
    <ul className= 'links'>
        <li><a href= "#home" className= 'active'> 
        Home 
        </a>
        </li>
        <li><a href= "#services" > 
        Our Services  
        </a>
        </li>
        <li><a href= "#portfolio" > 
        Portfolio 
        </a>
        </li>
        <li><a href= "#testimonials" > 
        Testimonials 
        </a>
        </li>
        <li><a href= "#products" > 
        Products 
        </a>
        </li>
        <li><a href= "newsletter"> 
        Newsletter
        </a>
        </li>
    </ul>
  </Nav>
  
}
const Nav = styled.nav` 
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 4vw;
.brand {
  img{
    margin-top: 1rem;
    cursor: pointer;
  }
  .toggle{
    display : none;
  }
}
.links{
  display: flex;
  list-style-type:none;
  gap:2rem;
  li {
    a{
      color: #AD0202;
      font-weight: 600;
      text-decoration: none;
      text-transform: uppercase;
      letter-spacing: 0.2rem;
      transition: 0.3s ease-in-out;
      &:hover{
        color:#E2660C ;
      }
    }
    .active{
      color:#E2660C  ;
    }
  }
}
`
;