function NewsShow({ renderedNews }) {

    const title = renderedNews.title;
    const description = renderedNews.description;
    const redirectToArticle = renderedNews.url;
    const source = renderedNews.source.name;
    const image = renderedNews.urlToImage;

    return(
        <div>
            <div>
                <h1>{ title }</h1>
                <h3>{ description }</h3>
                <a href={ redirectToArticle } />
                <p>{ source }</p>
            </div>
            <div>
                <img src={ image } />
            </div>
        </div>
    );
}

export default NewsShow;