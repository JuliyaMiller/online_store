import axios from 'axios';
import {useEffect, useState} from 'react';

export default function useFetch(url) {
   
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);
   
   useEffect(
       () => {
           setLoading('pending');

           axios.get(url)
                .then( res => {
                    setLoading('loaded');
                    res.data && setData(res.data);
                })
                .catch( err => {
                    setLoading('error');
                    setError(err);
                })
       }, [url]
   )

    return [data, loading, error];
}
