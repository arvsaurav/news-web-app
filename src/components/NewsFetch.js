import axios from 'axios';
import { useState, useEffect } from 'react';
import NewsList from './NewsList';

function NewsFetch() {
    const [newsResponse, setNewsResponse] = useState([]);
    const url = 'https://saurav.tech/NewsAPI/top-headlines/category/general/in.json';

    useEffect(() => {
        axios.get(url)
        .then(res => {
            setNewsResponse(res.data.articles);
            console.log(res.data.articles);
            console.log(newsResponse);
        })
        .catch(err => {
            console.log(err);
        });
    }, []);
    
    return (
        <div>
            <NewsList response = { newsResponse } />
        </div>
    );
}

export default NewsFetch;