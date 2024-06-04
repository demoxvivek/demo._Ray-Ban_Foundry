import React from 'react'
import styled from 'styled-components'

const data1 = [
    { name: 'AVIATOR CLASSIC', image: 'https://india.ray-ban.com/media/wysiwyg/Rb_sunglasses_clp_opti/805289602057_render1-min.png' },
    { name: 'ORIGINAL WAYFARER CLASSIC', image: 'https://india.ray-ban.com/media/wysiwyg/Rb_sunglasses_clp_opti/805289602057_render1-min.png' },
    { name: 'CLUMBMASTER CLASSIC', image: 'https://india.ray-ban.com/media/wysiwyg/Rb_sunglasses_clp_opti/805289653653_render1-min.png' },
    { name: 'ROUND METAL', image: 'https://india.ray-ban.com/media/wysiwyg/Rb_sunglasses_clp_opti/805289439899_render1-min.png' },

]

const SunglassClp = () => {
    return (
        <Container>
            <div className='banner'>
                <img src="https://india.ray-ban.com/media/wysiwyg/Rb_sunglasses_clp_opti/07_Sunglasses_Page_Hero_Banner_Desktop_-_1920x800px.jpg" alt="" />
            </div>
            <PromotionContainer>
                <PromotionHeading>TO START, THE ICONS</PromotionHeading>
                <PromotionTitle>RAY-BAN SUNGLASSES</PromotionTitle>
                <PromotionDescription>
                    Iconic sunglasses are a declaration of belonging, style, and attitude.
                </PromotionDescription>
            </PromotionContainer>
            <div className='grid4'>
                {data1.map((el,ind)=>
                <Card>
                    <CardImage src={el.image} alt="Aviator Classic Sunglasses" />
                    <CardTitle>{el.name}</CardTitle>
                </Card>
                )}
            </div>
            <div className='banner'>
                <img src="https://india.ray-ban.com/media/wysiwyg/Rb_sunglasses_clp_opti/07_RB_Sunglasses_Page_Bottom_Banner_Desktop.jpg" alt="" />
            </div>
            <div className='text'>
                <h1>THE RAY-BAN SUNGLASSES COLLECTION</h1>
                <p>Discover our collection of Ray-Ban iconic sunglasses for men, women and kids at the official Ray-Ban online store.
                    Ray-Ban sunglasses are a declaration of belonging, style and attitude: choose among the latest iconic sunglasses models,
                    available in different styles, frames and lenses, including polarized sunglasses and prescription sunglasses.
                    Discover the most iconic Ray-Ban sunglasses frames, like Aviator, Wayfarer, Clubmaster, Round, New Wayfarer and many more.
                    In addition, create your one Ray-Ban sunglasses and customize them with Remix.</p>
            </div>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;

    .banner{
        width: 100%;
        img{
            width: 100%;
        
        }
    }
    .text{
        margin:50px;
        text-align: center;
    }
    .grid4{
        display: grid;
        grid-template-columns: repeat(4, 1fr);
    }

`
const PromotionContainer = styled.div`
    text-align: center;
    margin: 50px;
`;

const PromotionHeading = styled.div`
    font-size: 1.2em;
    letter-spacing: 0.2em;
    color: #333;
    margin-bottom: 10px;
`;

const PromotionTitle = styled.div`
    font-size: 2em;
    font-weight: bold;
    color: #000;
    margin: 0;
`;

const PromotionDescription = styled.div`
    font-size: 1em;
    color: #666;
    margin-top: 10px;
`;
const Card = styled.div`
  text-align: center;
  font-family: Arial, sans-serif;
  margin: 20px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  
  &:hover {
    transform: scale(1.05);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 5px;
`;

const CardTitle = styled.h2`
  font-size: 1em;
  font-weight: bold;
  margin-top: 10px;
  color: #333;
`;

export default SunglassClp