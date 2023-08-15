import { Link } from "react-router-dom";
import Enterdetails from "./Enterdetails";
import "./Home.scss";

const Home = () => {
    return (
        <div id="home">
            <div className="container-fluid">
                <div className="row intro">
                    <div className="col-md-6 coverPhoto">
                        <img className="img-fluid" src={"/couple.jpg"} />
                    </div>
                    {/* <!-- END OF INTRO IMAGE --> */}
                    <div className="col-md-6 mt-3 introCopy">
                        <h1>Find Love Through Movie Magic!</h1>
                        <h2 className="my-5">
                            FlixMatch connects you with like-minded individuals
                            based on your movie reviews.
                        </h2>
                        <h2 className="mb-5">
                            From rom-coms to action-packed adventures, find
                            someone who shares your passion for the silver
                            screen. Start your cinematic love story today.
                        </h2>
                        <div className="text-center">
                            <Link to="/enter-details">
                                <button
                                    type="button"
                                    className="btn btn-lg m-3 btn-primary text-center registerBtn"
                                >
                                    Register here
                                </button>
                            </Link>
                        </div>
                    </div>
                    {/* <!-- END OF INTRO COPY --> */}
                </div>
                {/* <!--END OF INTRO CONTENT ROW--> */}
            </div>
        </div>
    );
};

export default Home;
