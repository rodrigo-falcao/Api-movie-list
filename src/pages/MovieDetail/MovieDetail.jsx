import { useEffect, useState } from 'react'
import './index.scss'
import { Link, useParams } from 'react-router-dom'
import { MovieService } from '../../api/MovieService'

const MovieDetail = () => {
    const { id } = useParams() // id: 447365
    const [movie, setMovie] = useState({}); // movie: {}

    async function getMovie() {
        const { data } = await MovieService.getMovieDetails(id);
        setMovie(data);  // movie: data
        console.log(data);
    }

    useEffect(() => {
        getMovie();
    }, [])

    return <section className='movieDetail'>
        <div className='movieDetail__container'>
            <div className='movieDetail__col'>
                <h1 className='movieDetail__title'>{movie.title}</h1>
                <div className='movieDetail__image'>
                    <img 
                    src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`} 
                    alt="" 
                    />
                </div>
            </div>
            <div className='movieDetail__col'>
                <div className='movieDetail__details'>
                    <div className='movieDetail__detail'>
                        <span>Budget:</span> {movie.budget}
                    </div>
                    <div className='movieDetail__detail'>
                        <span>Original language:</span> {movie.original_language}
                    </div>
                    <div className='movieDetail__detail'>
                        <span>Popularity:</span> {movie.popularity}
                    </div>
                    <div className='movieDetail__detail'>
                        <span>Overview:</span> {movie.overview}
                    </div>
                    <a 
                    href={movie.homepage} 
                    className='movieDetail__button movieDetail__button--Company'
                    target='_blank'
                    >
                    HomePage Company
                    </a>
                    <div className='movieDetail__detail'>
                        <span>Companies:</span>
                        <ul>
                            {movie.production_companies &&
                            movie.production_companies
                            .filter((comp) => comp && comp.logo_path) // Filtra os objetos que não são nulos
                            .map((comp) => (
                                <li>
                                    <img className='imgList' 
                                    src={`https://image.tmdb.org/t/p/w1280${comp.logo_path}`} 
                                    alt="" 
                                    />
                                </li>
                            ))}
                        </ul>
                    </div>
                    <Link to={"/"} className='movieDetail__button'>
                        Voltar
                    </Link>
                </div>
            </div>
        </div>
</section>
}

export default MovieDetail