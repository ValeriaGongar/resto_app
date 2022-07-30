import React from 'react';
import styled from "styled-components";
import product1 from "../assets/prod04.svg";
import product2 from "../assets/prod02.svg";
import product3 from "../assets/prod01.svg";
import product4 from "../assets/prod03.svg";
import { imageZoomEffect, TitleStyles } from './ReusableStyles';
export default function Products() {
  const data= [
    {
      image:product1,
      name: "Salmon with fresh herbs",
      price: "$224 mn",
    },
    {
      image:product2,
      name:"Farm Eggs with lechon ",
      price: "$55 mn",
    },
    {
      image:product3,
      name:"Arugula purple potatoes",
      price: "$80 mn",
    },
    {
      image:product4,
      name: "Homemade Icecream",
      price:"$150 mn"
    }
  ];
  return (
    <Section id="products">
      <div className="title">
        <h1>
          <span>Favourites</span> All the time!
        </h1>
      </div>
      <div className="products">
        {data.map((product)=> {
            return (
              <div className="product">
                <div className="image">
                  <img src={product.image} alt="" />
                </div>
                <h2>{product.name}</h2>
                <h3>{product.price}</h3>
                <p>
                Our lives are interdependent, as are our challenges. Everyone, everywhere, should stand up for peace. 
                </p>
                <button>Buy Now</button>
.              </div>
            );
          })}
      </div>
    </Section>
  );
}
const Section = styled.section `
${TitleStyles};
.products {
  display:grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3rem;
  margin-top:3rem;
  .product {
      display: flex;
      flex-direction:column;
      gap:0.6rem;
      justify-content:center;
      align-items: center;
      h3{
          color:#ED8032;
      }
      p{
          text-align:center;
          font-size: 1rem;
          line-height: 1.8rem;
          letter-spacing: 0.1rem;
          margin-left:.5rem;
      }
      ${imageZoomEffect};
      .image{
          max-height: 20rem;
          overflow: hidden;
          border-radius: 1rem;
          img{
              height:20rem;
              width:15rem;
              object-fit:cover;
          }
      }
      button {
          border: none;
          padding: .6rem 4rem;
          font-size: 1rem;
          color: white;
          border-radius: 4rem;
          transition: 1s ease-in-out;
          cursor: pointer;
          background:linear-gradient(to right, #AD0202, #ED8032);
          text-transform: uppercase;
          &:hover {
            background:linear-gradient(to left, #AD0202, #ED8032);
          }
        }
      }
    }
    @media screen and (min-width: 280px) and (max-width: 720px) {
      .products {
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      }
    }
    @media screen and (min-width: 720px) and (max-width: 1080px) {
      .products {
        grid-template-columns: repeat(2, 1fr);
      }
    }

`;