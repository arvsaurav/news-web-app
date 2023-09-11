import axios from 'axios';
import { useState, useEffect } from 'react';
import NewsList from './NewsList';
import Errors from './Errors';

function NewsFetch() {
    const [newsResponse, setNewsResponse] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const url = 'https://saurav.tech/NewsAPI/top-headlines/category/general/in.json';

    useEffect(() => {
        axios.get(url)
        .then(res => {
            setNewsResponse(res.data.articles);
        })
        .catch(err => {
            setErrorMessage(err.message);
        });
    }, []);
    
    return (
        <div>
            { errorMessage === '' && <NewsList response = { newsResponse } /> }
            { errorMessage !== '' && <Errors message = { errorMessage } />}
        </div>
    );
}

export default NewsFetch;