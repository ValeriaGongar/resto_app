import React from 'react'
import styled from "styled-components";
import { TitleStyles } from './ReusableStyles';
export default function Reservation() {
  return (
    <Section id="reservation">
      <div className="title">
        <h1>
          <span> Reserve</span>Here!
        </h1>
        <p>
        Book in advance and live the experience of a completely personalized dinner. Allow us to guarantee the availability of space and delve into this new way of living the kitchen.
        </p>
      </div>
      <div className="container">
        
        <button>Reservation</button>
      </div>
    </Section>
  )
}

const Section= styled.section `
border: 0.01rem solid black;
margin-left:2rem;
margin-right:2rem;
padding: 4rem;
display: flex;
flex-direction: column;
gap:2rem;
align-items:center;
${TitleStyles};
.container{
  background:linear-gradient(to right, #AD0202, #ED8032, #AD0202);
  padding: 0.3vw;
  input{
    border: none;
    padding:1.5rem 15rem 1.5rem 1rem;
    font-size:1rem;
    &:focus{
      outline:none;
    }
  }
button{
  padding:1rem 5rem;
  background-color: transparent;
  border:none;
  font-size:1.6rem;
  color:white;
  text-transform:uppercase;
  letter-spacing:0.3rem;
  transition:0.3s ease-in-out;
  cursor:pointer;
  &:hover{
    letter-spacing:0.6rem;
    padding:1rem 4.7rem;


    }
  }
}

@media screen and (min-width: 260px) and (max-width: 1080px) {
  .container {
    padding: 0.8rem;
    border-radius: 0.5rem;
    input {
      width: 75vw;
      padding: 0.5rem;
      border-radius: 0.5rem;
    }
    button {
      margin-top: 0.5rem;
      width: 100%;
      padding: 0.5rem;
      &:hover {
        padding: 0.5rem 1rem;
      }
    }
  }
}

`;

