import React from 'react';
import styles from 'styled-components';
import bgImage from './images/bg.png';
import { Button } from './App';

const SearchFood = ({ data: foods }) => {
    const BASE_URL = 'http://localhost:9000';
    console.log(foods);
    return (
        <FoodContainer>
            <Container>
                <FoodCards>
                {
                    foods?.map(({ name, image, text, price }) => (
                        <FoodCard key={name}>
                            <div className='food-image'>
                                <img src={BASE_URL + image} alt='food_images' />
                            </div>
                            <div className="food_info">
                                <div className="info">
                                <h3>{name}</h3>
                                <p>{text}</p>
                                </div>
                                <Button>
                                    ${price.toFixed(2)}
                                </Button>
                            </div>
                        </FoodCard>
                    ))}
                    </FoodCards>
           </Container>
        </FoodContainer>
    );
};

export default SearchFood;

const FoodContainer = styles.section`
    height: 100vh;
    background-image: url(${bgImage}); 
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;

     padding: 20px; /* Added padding for extra space on smaller screens */

    @media (max-width: 768px) {
        height: auto; /* Allow the height to adjust based on content */
        padding: 40px 20px; /* Add extra padding to keep food items from touching the top */
    }
`;

const Container = styles.section``;

const FoodCards = styles.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 32px;
  column-gap: 20px;
  justify-content: center;
  align-items: center;

    @media (max-width: 768px) {
    /* Adjust spacing and layout for tablets */
    row-gap: 20px;
    column-gap: 15px;
  }

  @media (max-width: 480px) {
    /* Stack food cards vertically for mobile screens */
    flex-direction: column;
    gap: 15px;
  }
`;


const FoodCard = styles.div`
  width: 360px;
  height: 167px;
  border: 0.66px solid;

     transition: transform 0.2s;

    &:hover {
        transform: scale(1.05);
    }

    .food-image img {
  max-width: 100%;
  height: auto;
  object-fit: cover;
}


  border-image-source: radial-gradient(
      80.69% 208.78% at 108.28% 112.58%,
      #eabfff 0%,
      rgba(135, 38, 183, 0) 100%
    ),
    radial-gradient(
      80.38% 222.5% at -13.75% -12.36%,
      #98f9ff 0%,
      rgba(255, 255, 255, 0) 100%
    );

  background: url(.png),
    radial-gradient(
      90.16% 143.01% at 15.32% 21.04%,
      rgba(165, 239, 255, 0.2) 0%,
      rgba(110, 191, 244, 0.0447917) 77.08%,
      rgba(70, 144, 213, 0) 100%
    );
  background-blend-mode: overlay, normal;
  backdrop-filter: blur(13.1842px);

  border-radius: 20px;

  display: flex;
  padding: 8px;

  .food_info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: end;
    h3 {
      margin-top: 8px;
      font-size: 16px;
      font-weight: 500;
    }
    p {
      margin-top: 4px;
      font-size: 12px;
    }
    button {
       margin-top:5px;
      font-size: 15px;
    }
  }
  `;
