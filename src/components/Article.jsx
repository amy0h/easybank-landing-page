import React from 'react'

export const Article = ({ img, author, title, content }) => {
    return (
        <div className="article">
            <img
                src={img}
                className='article-img'
                alt='article image'
            />
            <div className='article-content'>
                <h4 className='article-author'>By {author}</h4>
                <h4 className='article-title'>{title}</h4>
                <p className='article-desc'>{content}</p>
            </div>
        </div>
      )
}

export default Article