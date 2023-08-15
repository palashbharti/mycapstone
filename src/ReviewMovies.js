import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";

const ReviewMovies = () => {
    const [genres, setGenres] = useState([]);
    const [movies, setMovies] = useState([]);
    const [isOgEnglish, setIsOgEnglish] = useState();
    const [user, setUser] = useState("");

    useEffect(() => {
        const makeGenresCall = async () => {
            const response = await fetch(
                `https://api.themoviedb.org/3/genre/movie/list`,
                {
                    headers: {
                        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYjcxOWJkMTEzZjY1MDZlNjAxYWFlZWMzOGJhYzc2NiIsInN1YiI6IjY0Yzg1YTM1Yjk3NDQyMDBhZDMxNDQ5OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Djijud7yEeTg8jB1VUZ-MuZQm_ojxqppFnbFc8_KmDo`,
                    },
                }
            );
            const json = await response.json();
            // console.log(json);
            setGenres(json.genres);
        };
        makeGenresCall();
    }, []);

    const makeMoviesListCall = async (genreID) => {
        const movieResponse = await fetch(
            `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${genreID}`,
            {
                headers: {
                    Authorization:
                        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYjcxOWJkMTEzZjY1MDZlNjAxYWFlZWMzOGJhYzc2NiIsInN1YiI6IjY0Yzg1YTM1Yjk3NDQyMDBhZDMxNDQ5OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Djijud7yEeTg8jB1VUZ-MuZQm_ojxqppFnbFc8_KmDo",
                },
            }
        );
        const movieData = await movieResponse.json();
        console.log(movieData.results);
        setMovies(movieData.results);
    };

    const submitRatings = (event) => {
        event.preventDefault();
        // const ratingString = window.localStorage.getItem("recordedRatings");
        // let ratingsArray = [];

        // if (!ratingString) {
        //     let ratingsArray = [];
        // } else {
        //     ratingsArray = JSON.parse(ratingString);
        // }
        // let newRatingsArray = JSON.parse(ratingString);
        // console.log(newRatingsArray);
        // ratingsArray.push(ratingObject);

        // //convert the array back to a string
        // const newRatingsArray = JSON.stringify(ratingsArray);

        //put the stringified array back into local storage
        // window.localStorage.setItem("recordedRatings", newRatingsArray);
    };

    return (
        <div>
            <div className="container">
                <div className="row topRow">
                    {/* <!-- END OF INTRO IMAGE --> */}
                    <div>
                        <h1 className="text-center">
                            Review Movies To Find Matches
                        </h1>
                        <h2 className="text-center">
                            Step 1 - Select A Movie Genre
                        </h2>
                        <h2 className="text-center">
                            Step 2 - Rate The Movies That Pop Up
                        </h2>
                        <h2 className="text-center">
                            Step 3 - Find Your Matches
                        </h2>
                        {/* ADULT SWITCH */}
                        <div className="form-check form-switch">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id="flexSwitchCheckDefault"
                            />
                            <label
                                className="form-check-label"
                                htmlFor="flexSwitchCheckDefault"
                            >
                                Some Criteria
                            </label>
                        </div>
                        {/* Radio For User 1 and 2 */}
                        <h3>First things first - Pick a User</h3>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="user1"
                                onChange={(event) => {
                                    setUser(event.target.id);
                                    console.log(user);
                                }}
                            />
                            <label className="form-check-label" htmlFor="user1">
                                User 1
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="user2"
                                onChange={(event) => {
                                    setUser(event.target.id);
                                    console.log(user);
                                }}
                            />
                            <label className="form-check-label" htmlFor="user2">
                                User 2
                            </label>
                        </div>
                        {/* <!-- SELECT GENRE DROPDOWN --> */}

                        <div className="text-center">
                            <label htmlFor="genre">Select a Genre:</label>
                            <select
                                id="genre"
                                className="form-select"
                                aria-label="Select Genre"
                                onChange={(event) =>
                                    makeMoviesListCall(event.target.value)
                                }
                            >
                                <option>Select a Genre</option>

                                {genres.map((genre) => {
                                    return (
                                        <option value={genre.id} key={genre.id}>
                                            {genre.name}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>
                        <div>
                            <div className="row row-cols-1 row-cols-md-3 g-4">
                                {movies.map((movie) => {
                                    return (
                                        <MovieCard
                                            key={movie.id}
                                            movieProp={movie}
                                            userProp={user}
                                        />
                                    );
                                })}
                            </div>
                            <form onSubmit={submitRatings}>
                                <button
                                    type="submit"
                                    className="btn btn-success mt-5"
                                >
                                    Submit Ratings
                                </button>
                            </form>
                            <Link to="/find-matches">
                                <button className="btn btn-success mt-5">
                                    Find Matches
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewMovies;
