import {css} from 'styled-components';
export const imageZoomEffect= css `

img{
    transition: 0.8s ease-in-out;
    &:hover {
        transform: scale(1.2);
    }
}
`;
export const TitleStyles= css`
.title{
    text-align:center;
    display:flex;
    flex-direction:column;
    gap:2rem;
    h1{
        font-size: 4rem;
        text-transform:uppercase;
        span{
            color:#AD0202;
        }
    }

    .yellow{
        color: #F46A06;
    }
    p{
        padding: 0 10vw;
        font-size: 1.5rem;
        line-height: 2rem;
        letter-spacing: 0.1rem;
    }
}
@media screen and (min-width:260px) and (max-width:1080px){
.title {
    gap:1rem;
    h1{
        font-size: 1rem;
    }
    p{
        padding:0 1vw;
    }
  }
}
`;

