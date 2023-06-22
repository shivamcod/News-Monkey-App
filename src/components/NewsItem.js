import React from 'react'

const NewsItem = (props) => {
    const {title, description, imageUrl, url, author, date, source} = props;
    return (
      <div className='my-3'>
        <div className="card">
        <div>
        <span className=" badge rounded-pill bg-danger" style={{display : 'flex', justifyContent : 'flex-end', position : 'absolute', right : 0}}>{source}</span>
        </div>
        <img src={!imageUrl ? "https://images.hindustantimes.com/tech/img/2023/06/18/1600x900/NASA_APOD_June_18_1687072090868_1687072100931.jpg": imageUrl} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-body-secondary">By {author} on {new Date(date).toUTCString()}</small></p>
            <a href={url} rel="noreferrer" target='_blank' className="btn btn-sm btn-dark">Read More</a>
        </div>
        </div>
      </div>
    )
}

export default NewsItem
