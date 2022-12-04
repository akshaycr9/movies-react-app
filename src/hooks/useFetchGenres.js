import { useEffect, useState } from 'react';

const useFetchGenres = () => {

    const [genres, setGenres] = useState([]);

    useEffect(() => {
        getGenres();
    }, []);
    
    async function getGenres() {
        const response = await fetch(
            'https://api.themoviedb.org/3/genre/movie/list?api_key=0e7274f05c36db12cbe71d9ab0393d47'
        );
        const data = await response.json();
        setGenres(data.genres);
    }

    return {genres}
}

export default useFetchGenres;