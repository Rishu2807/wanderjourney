import React from 'react';
// import Card from '../layout/card';
import Card from '../layout/Cards';
import Travel4 from '../assets/Travel4.jpg';
import Travel5 from '../assets/Travel5.jpg';
import Travel6 from '../assets/Travel6.jpg';
import Travel7 from '../assets/Travel7.jpg';
import travels8 from '../assets/travels8.jpg';
import travels6 from '../assets/travels6.jpg';
import Travel10 from '../assets/Travel10.jpg';
import travel11 from '../assets/travel11.jpg';

const MultipleCard =()=> {
  
    const cardsData = [
        {
          title: 'India',
          description: 'Description for Card 1',
          image: Travel4,
        },
        {
          title: 'Japan',
          description: 'Description for Card 2',
          image: travels6,
        },
        {
          title: 'France',
          description: 'Description for Card 3',
          image: travels8,
        },
        {
            title: 'Italy',
            description: 'Description for Card 3',
            image: Travel7,
          },
          {
            title: 'China',
            description: 'Description for Card 3',
            image: Travel6,
          },
          {
            title: 'Switzerland',
            description: 'Description for Card 3',
            image: travel11,
          },
          {
            title: 'Norway',
            description: 'Description for Card 3',
            image: Travel10,
          },
          {
            title: 'Newyork',
            description: 'Description for Card 3',
            image: Travel5,
          },
      ];
    return (
        <div >
            {cardsData.map((card, index) => (
            <Card key={index} {...card} />
      ))}
        </div>
    );
 };
 export default MultipleCard;