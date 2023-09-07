import axios from 'axios';
import { useState, useEffect } from 'react';

function NewsFetch() {
    const [news, setNews] = useState([]);
    const url = 'https://saurav.tech/NewsAPI/top-headlines/category/general/in.json';

    useEffect(() => {
        axios.get(url)
        .then(res => {
            setNews(res.data.articles);
            console.log(res.data.articles);
            console.log(news);
        })
        .catch(err => {
            console.log(err);
        });
    }, []);
    
    return (
        <div>
            
        </div>
    );
}

export default NewsFetch;