import NewsShow from "./NewsShow";

function NewsList({ response }) {
    const renderNews = response.map((news) => {
        return(
            <NewsShow renderedNews = { news } key = { news.publishedAt }/>
        );
    });

    return (
        <div>
            { renderNews } 
        </div>
    );
}

export default NewsList;