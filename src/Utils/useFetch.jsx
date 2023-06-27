import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (url)=> {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const source = axios.CancelToken.source();

        axios.get(url, { cancelToken: source.token})
        .then(response => {
            setData(response.data)
            setIsLoading(false)
            setError(null)
        })
        .catch((err)=>{
            if (axios.isCancel(err)) {
                console.log('Request canceled:', err.message);
            } else {
                setIsLoading(false)
                setError(err.message)
            }           
        });

        return ()=>source.cancel() 
    },[url]);

    return { data, isLoading, error };
}

export default useFetch;
