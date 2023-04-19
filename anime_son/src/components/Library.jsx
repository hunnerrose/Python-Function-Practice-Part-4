import { useState, useEffect } from 'react'

export default function Library() {
    const [animes, setAnimes] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:4005/api/animes');
            const json = await response.json();
            setAnimes(json);
        }
        fetchData()
    }, [])

    return (
        <div>
            <h1>Anime</h1>
            <ul>
                { animes.map((anime, index) => (
                    <li key={index} style={{paddingBottom: '25px'}}>
                        <div>{anime.name}</div>
                        <div>{anime.genre}</div>
                        <div>{anime.year_released}</div>
                    </li>
                ))}
            </ul>
        </div>
    )
}