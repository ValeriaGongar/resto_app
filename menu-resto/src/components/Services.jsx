import React from 'react'
import styled  from 'styled-components'
import Services1 from "../assets/servicio_a.svg";
import Services2 from "../assets/servicio_b.svg";
import Services3 from "../assets/servicio_c.svg";
import {TitleStyles} from "./ReusableStyles"
export default function Services() {
  return (
    <Section id="services"> 
    <div className= "title">
      <h1 className="yellow">What is Slow Food?</h1>
      <p>
     Very urge to eat and produce food as gastronomes and exercise the right to pleasure without harming the existence of others or the environmental equilibria of the planet we live on. 
      </p>
    </div>
    <div className="services">
      <div className="service">
       <img src={Services1} alt= " Service"/> 
       <p>Flavor and aroma is the fruit of the competence of the producer and of choice of raw materials and production methods.
       </p>
       <button> Read More</button>
      </div>
      <div className='service yellow'>
        <img src={Services2} alt="Service" />
        <p>
        Every stage in the agro-industrial production chain, should protect ecosystems and biodiversity, safeguarding the health of the consumer and the producer.
        </p>
        <button> Read More </button>
      </div>
      <div className='service'>
        <img src={Services3} alt="Service" />
        <p>
        Social justice should be pursued through the creation of conditions of labor respectful of man and his rights and capable of generating adequate rewards.
        </p>
        <button> Read More </button>
        
      </div>
    </div>


    </Section>
  )
}

const Section= styled.section`
margin:2rem 6rem;
${TitleStyles};
.services{
  display:grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10vw;
  margin-top: 4rem;
  .service {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1vw;
  padding: 0 3 vw;
  img {
    height: 2.8rem;
    
  }
  p{
    text-align: center;
    line-height: 2rem;
    font-size: 1.2rem;
      span{
          color:#AD0202 ;
      }
   
  }
  button{
    padding: 0.6rem 3rem;
    letter-spacing: 0.2rem;
    border-radius: 2rem;
    font-size: 1.1rem;
    border: none;
    color: white;
    background-color: #AD0202;
    transition: 0.3s ease-in-out;
    &:hover {
      background-color:#F46A06;
    }
  }
}
.yellow {
  button{
    background-color: #F46A06;
    &:hover {
      background-color:#AD0202; 
    }

  }
}

@media screen and (min-width: 260px) and (max-width: 1080px) {
  margin: 2rem;
  .services {
    grid-template-columns: 1fr;
  }
}
`;
