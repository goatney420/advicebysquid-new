import "../App.css";
import { Link } from "react-router-dom"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Home () {
    return(
        <>
        <div className="pagestyle">
            <h1>Squid is going to offer you advice based on how you are feeling...</h1>
        
            <Link to="/FeelingPage" className="icon">
                <FontAwesomeIcon icon={faArrowRight} />
            </Link>
        </div>
        </>
    )
}

export default Home;
