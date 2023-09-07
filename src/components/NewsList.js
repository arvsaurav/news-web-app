import NewsShow from "./NewsShow";

function NewsList({ response }) {
    const renderNews = response.map((news, key) => {
        return(
            <NewsShow renderedNews = { news } key = { key }/>
        );
    });

    return (
        <div>
            { renderNews } 
        </div>
    );
}

export default NewsList;