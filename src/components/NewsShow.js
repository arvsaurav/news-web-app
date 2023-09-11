import './NewsShow.css';

function NewsShow({ renderedNews }) {

    const title = renderedNews.title;
    const description = renderedNews.description;
    const redirectToArticle = renderedNews.url;
    const source = renderedNews.source.name;
    const image = renderedNews.urlToImage;

    const handleClick = () => {
        window.open(redirectToArticle, '_blank', 'noreferrer');
    };

    return (
        <div className='news-container'>
            <div className='news-content' onClick={ handleClick }>
                <h2>{ title }</h2>
                <p>{ description }</p>
                <p id='source-id'>{ source }</p>
            </div>
            <div className='news-image'>
                <img src={ image } alt={ title } />
            </div>
        </div>
    );
}

export default NewsShow;