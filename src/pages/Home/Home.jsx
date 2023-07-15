import React, { useEffect } from "react";
import "./index.scss";
import { useState } from "react";
import { MovieService } from "../../api/MovieService";
import MovieCard from "../../components/MovieCard/MovieCard";
import Footer from "../../components/Footer/Footer";

//O searchValueProp veio através o (App.jsx)
const Home = ({ searchValueProp }) => {
    const [movies, setMovies] = useState([])  // movies: []

    async function getMovies() {
        const { 
            data: {results} 
        } = await MovieService.getMovies()
        
        setMovies(results);
    }

    async function getMoviesSearch(movieString) {
        const {
            data: { results},
        } = await MovieService.searchMovies(movieString);

        setMovies(results);
    }

    useEffect(() => {
        getMovies()
    }, []);

    useEffect(() => {
        if (searchValueProp) {
            getMoviesSearch(searchValueProp)
        }
        if (searchValueProp === "") {
            getMovies();
        }
    }, [searchValueProp]);


    return (
    <section className="Home">
        {movies.map((movie) => (
            <div key={movie.id}>
                <MovieCard movieProp={movie}/>
            </div>
        ))}
        <Footer/>
    </section>
    );
};

export default Home;
