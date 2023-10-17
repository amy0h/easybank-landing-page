import React from 'react'
import { articles } from '../../constants'
import { Article } from '../../components/Article'
import './LatestArticle.css'

const LatestArticle = () => {
  return (
    <section className='latest-article'>
        <h2 className='title'>Latest Articles</h2>
        <div className='articles-container'>
            {articles.map((article, index) => (
                <Article key={index} {...article} />
            ))}
        </div>
    </section>
  )
}

export default LatestArticle