import React from 'react'
import styled  from 'styled-components'
import hero from "../assets/cover_slow.svg";
import heroDesign from "../assets/coverDesign.svg"
export default function Hero() {
  return (
  <Section id = "home">
    <div className="background">
      <img src={hero} alt="Background" />
    </div>
    <div className="content">
      <div className="sale">
        <img src ={heroDesign} alt='Hero Design'/>
        <h1>
          BE PART <span>OF THE</span> <span>CHANGE</span>
        </h1>
        </div>
        <div className="info">
          <h2> SLOW FOOD</h2>
          <em>
            We deserve good, clean and fair food. Save biodiversity Save the planet!
          </em>
          <button> ORDENA AHORA</button>

        </div>
      </div>
    


  </Section>
   ); 
}

const Section = styled.section`
height:90vh;
widht:100vw;
position:relative;
.background {
  height: 100%;
  img {
    width: 100%;
    height :100%;
    object-fit:cover;
    filter:brightness(40%);
  }
}
.content{
  position:absolute;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  .sale{
    position: relative;
    left: 10%;
    img {
      height: 70vh;
    }
    h1 {
      color: white;
      position: absolute;
      top:17vh;
      left:-2vh;
      font-size:4.5rem;
      span {
        display:block;
        font-size: 5vw; 
        }
      }
    }
    .info {
      position: absolute;
      top:40%;
      right:10%;
      display:flex;
      flex-direction:column;
      align-items: flex-end;
      gap:1rem;
      h2{
        color:#F2893D;
        font-size:4rem;
        letter-spacing:0.5rem;
      }
      em {
        color: white;
        width: 60%;
        text-align: end;
        font-size:1.1rem;
        letter-spacing:0.1rem;
      }
      button {
        padding: 1rem 2rem;
        font-size: 1.4rem;
        background-color: #AD0202;
        border:none;
        color: white;
        font-weight:800;
        letter-spacing: 0.2rem;
        cursor: pointer;
        transition: 0.3s ease-in-out;
        &:hover{
          background-color:#F2893D;
        }


      }  
    }

    }
  }
}
`;