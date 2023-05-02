import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const NewsCard = ({news}) => {
    console.log(news);
    return (
        <div className='my-5 '>
          <Card className='w-100'>
      <Card.Img variant="top" src={news.image_url
} />
      <Card.Body>
        <Card.Title>{news.title}</Card.Title>
        <Card.Text>
         {news.details}
        </Card.Text>
        <div className='btn btn-link'>See More</div>
      </Card.Body>
    </Card>
        </div>
    );
};

export default NewsCard;