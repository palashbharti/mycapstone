import { useState } from "react";

const MovieCard = ({ movieProp, userProp }) => {
    let movieDesc = movieProp.overview;

    const [rated, setRated] = useState();
    let ratingsArray = [];

    const recordRating = (event) => {
        setRated(event.target.value);

        const ratingObject = {
            user: userProp,
            rated: event.target.value,
            ratedTitle: movieProp.title,
            ratedGenres: movieProp.genre_ids, //ratedGenres is an array
        };

        console.log(ratingObject);

        const ratingString = window.localStorage.getItem("recordedRatings");

        if (!ratingString) {
            let ratingsArray = [];
        } else {
            ratingsArray = JSON.parse(ratingString);
        }

        ratingsArray.push(ratingObject);

        //convert the array back to a string
        const newRatingsArray = JSON.stringify(ratingsArray);

        //put the stringified array back into local storage
        window.localStorage.setItem("recordedRatings", newRatingsArray);

        console.log(newRatingsArray);
        // console.log(ratingsArray.length);
    };

    if (movieProp.original_language == "en") {
        return (
            <div className="col">
                <div className="card">
                    <img
                        src={`https://image.tmdb.org/t/p/original${movieProp.poster_path}`}
                    />
                    {/* <!--CARD IMAGE ENDS--> */}
                    <div className="card-body">
                        <h5 className="card-title">{movieProp.title}</h5>
                        <p className="card-text">
                            {movieDesc.slice(0, 100)}...
                        </p>
                        <label htmlFor="reviewSlider1" className="form-label">
                            Your Ratings:
                        </label>
                        {/* <!-- RATINGS SLIDER  --> */}
                        <div className="row">
                            <div className="col-1">1</div>
                            <div className="col-9">
                                <input
                                    type="range"
                                    className="form-range ratingsNumber"
                                    min="1"
                                    max="10"
                                    step="1"
                                    defaultValue="0"
                                    onChange={recordRating}
                                />
                            </div>
                            <div className="col-2">10</div>
                        </div>
                        {/* <!-- END RATINGS SLIDER --> */}
                    </div>
                </div>
            </div>
        );
    }
};

export default MovieCard;
