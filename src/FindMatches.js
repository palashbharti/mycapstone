import { useEffect, useState } from "react";

const FindMatches = () => {
    const [commonMovie, setCommonMovie] = useState([]);
    const [likedMovie, setLikedMovie] = useState([]);
    const [dislikedMovie, setDislikedMovie] = useState([]);

    useEffect(() => {
        compareReviews();
    }, []);

    const compareReviews = () => {
        const ratingString = window.localStorage.getItem("recordedRatings");

        let ratingsArray = JSON.parse(ratingString);

        let userarray1 = [];
        let userarray2 = [];

        console.log(ratingsArray);
        ratingsArray.map((ratingObj) => {
            if (ratingObj.user == "user1") {
                userarray1.push(ratingObj);
            } else if (ratingObj.user == "user2") {
                userarray2.push(ratingObj);
            }
        });
        console.log(userarray1);
        console.log(userarray2);

        userarray1.map((userObj1) => {
            userarray2.map((userObj2) => {
                if (userObj1.ratedTitle == userObj2.ratedTitle) {
                    commonMovie.push(userObj1.ratedTitle);
                }

                if (userObj1.rated >= 7 && userObj2.rated >= 7) {
                    setLikedMovie(userObj1.ratedTitle);
                } else if (userObj1.rated <= 4 && userObj2.rated <= 4) {
                    setDislikedMovie(userObj1.ratedTitle);
                }
            });
        });
        console.log(commonMovie);
        setCommonMovie(commonMovie);
    };

    return (
        <div>
            <div className="container">
                <div className="row topRow">
                    <h1 className="text-center">Find Your FlixMatches Below</h1>
                    <h2 className="text-center">
                        Send them a Spark to initiate a conversation.
                    </h2>
                    <h2 className="text-center">
                        Use Their Movie Reviews As Icebreakers
                    </h2>
                    <div className="row row-cols-1 row-cols-md-2 g-4">
                        <div className="col">
                            <div className="card">
                                <img
                                    src="/yourMatchDefault2.jpg"
                                    className="card-img-top"
                                    alt="..."
                                />
                                {/* <!--CARD IMAGE ENDS--> */}
                                <div className="card-body">
                                    <h5 className="card-title">Name</h5>
                                    <p className="card-text">
                                        Common rated movie:{" "}
                                        <span
                                            style={{
                                                fontWeight: 700,
                                            }}
                                        >
                                            {commonMovie}
                                        </span>
                                        <br />
                                        Both of you loved the movie(s):{" "}
                                        <span
                                            style={{
                                                fontWeight: 700,
                                                color: "green",
                                            }}
                                        >
                                            {likedMovie}
                                        </span>
                                        <br />
                                        Both of you did not like the movie(s):{" "}
                                        <span
                                            style={{
                                                fontWeight: 700,
                                                color: "red",
                                            }}
                                        >
                                            {dislikedMovie}
                                        </span>
                                    </p>

                                    {/* <!-- SPARK BUTTON  --> */}
                                    <div className="text-center">
                                        <button
                                            type="submit"
                                            className="btn btn-lg m-3 btn-primary text-center sendSparkBtn"
                                        >
                                            Send a Spark
                                        </button>
                                    </div>
                                    {/* <!-- END SPARK BUTTON --> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FindMatches;
