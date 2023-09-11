import './NewsShow.css';

function NewsShow({ renderedNews }) {

    const title = renderedNews.title;
    const description = renderedNews.description;
    const redirectToArticle = renderedNews.url;
    const source = renderedNews.source.name;
    const image = renderedNews.urlToImage;

    return (
        <div className='news-container'>
            <div className='news-content'>
                <h2>{ title }</h2>
                <p>{ description }</p>
                <p id='source-id'>{ source }</p>
                <a href={ redirectToArticle } target='_blank' rel='noreferrer'>View full article</a>
            </div>
            <div className='news-image'>
                <img src={ image } alt={ title } />
            </div>
        </div>
    );
}

export default NewsShow;