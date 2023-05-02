import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';

const Category = () => {
  const   param = useParams();
  const news = useLoaderData();
  console.log(news);
    return (
        <div>
       {news.map(n=> <NewsCard news={n} > </NewsCard> )}  
        </div>
    );
};

export default Category;