import { useState, useEffect } from "react";

// Custom router to fetch any kind of data from a passed url
// The component also manage loading time and error in case
const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // cleanup function to avoid the error of changing page when the hook is still updating the state
        const abortCont = new AbortController();

        setTimeout(() => {
            fetch(url, { signal: abortCont.signal })
                .then(res => {
                    if(!res.ok) {
                        throw Error('could not fetch the data for that resource');
                    }
                    return res.json(); // to get the data 
                }) // return another promise
                .then(data => { // here we have the real data
                    setData(data);
                    setIsPending(false);
                    setError(null);
                })
                .catch(err => {
                    setIsPending(false);
                    setError(err.message);
                })
        }, 200);

        return () => abortCont.abort();
    }, [url]);

    return { data, isPending, error }
}
 
export default useFetch;