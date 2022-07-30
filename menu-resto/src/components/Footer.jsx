import React from 'react';
import styled from "styled-components";
import foodYummy from '../assets/emulsify04.svg';
import { AiFillInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF} from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";

export default function Footer() {
  return (
    <div className="footer">
      <Section>
        <div className= "brand container">
          <img src={foodYummy} alt="" />
          <p>
            Lorem ipsum la comida como procesos de recomposicion alquimica . 
          </p>
          <ul>
            <li>
              <AiFillInstagram/>
              </li>
              <li>
                <FaFacebookF/>
              </li>
              <li>
                <GrLinkedinOption/>
              </li>
              <li>
                <BsTwitter />
              </li>
              </ul> 
        </div>
        <div className='about container'>
          <div className="title">
            <h3>About Us</h3>
          </div>
          <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
            eligendi repellat laudantium blanditiis iure nulla, ut aliquam
            itaque unde nesciunt cum veritatis perferendis vel expedita!
          </p>
        </div>
        <div className= " contact container">
          <div className="title">
            <h3>Contact Us</h3>
          </div>
          <p>+5255821255</p>
          <p>emulsifysf@gmail.com</p>
          <p>@emulsifySF</p>
        </div>
      </Section>
      <LowerFooter className='lower_footer'>
        <h2>
          Copyright &copy; 2021 <span> Emulsify</span>
        </h2>
      </LowerFooter>
    </div>
  );
}

const Section= styled.footer`
margin:0;
background:linear-gradient(to right, #AD0202, #E2660C);
color:white;
display:grid;
grid-template-columns:repeat(3,1fr);
gap:10vw;
padding: 4vw;
p{
  font-size:1.1rem;
  line-height:2rem;
  letter-spacing:0.1rem;
}
ul{
  display:flex;
  list-style-type:none;
  gap:4vw;
  margin-top:2vw;
  li{
    padding:0.8rem;
    border-radius:2rem;
    background-color:white;
    transition:0.3s ease-in-out;
    cursor:pointer;
    &:hover{
      background-color:black;
      svg{
        transform:scale(1.2);
      }
    }
    svg{
      display:flex;
      justify-content:center;
      align-items:center;
      color:#fc4958;
      font-size: 1.6rem;
      transition: 0.3s ease-in-out;
      &:hover{

      }
    }
  }
}
img{
  filter:brightness(0) invert(1);
  width:10vw;

}
.container{
  display:flex;
  flex-direction:column;
  gap:0.5rem;
  h3{
    font-size:2rem;
  }
}
@media screen and (min-width: 260px) and (max-width: 1080px) {
  grid-template-columns: 1fr;
  .container {
    img {
      height: 4rem;
      width: 10rem;
    }
  }
}
`;

const LowerFooter = styled.div`
  margin: 0;
  text-align: center;
  background-color: black;
  color: white;
  padding: 1rem;
  h2 {
    span {
      color: #fc4958;
      text-transform: uppercase;
    }
  }
  @media screen and (min-width: 260px) and (max-width: 450px) {
    h2 {
      span {
        display: block;
      }
    }
  }
`;