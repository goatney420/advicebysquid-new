import "../App.css";
import { useLocation, useNavigate } from "react-router-dom"; // Correct import for useNavigate
import { EmotionsData } from "../EmotionsData";

function AdvicePage() {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const emotion = params.get("emotion");

    const navigate = useNavigate(); // useHistory has been replaced with useNavigate

    // Check Emotions
    const isEmotionFound = EmotionsData.some(
        (data) => data.name.toLowerCase() === emotion.toLowerCase()
    );
    
    const data = EmotionsData.find((item) => item.name === emotion);
    
    if (isEmotionFound) {
        return (
            <div className="pagestyle">
                <h1>
                    It seems that you are feeling <span className="emotion-text">{emotion}</span>
                </h1>
                <h1>Squid thinks this will help</h1>
                <div className="buttons-container">
                    
                <a href={data.watch} >
                    <button>Watch</button>
                </a>
                <div className="or-container">
                <p>or</p>
                </div>

                <a href={data.read}>
                <button>Read</button>
                </a>

               
                </div>
            </div>
        );
    } else {

        const handleKeepTrying = () => {
            // Navigate back to the "Feeling" page
            navigate("/FeelingPage");
        };

        const handleGiveUp = () => {
            navigate("/GiveUpPage");
        }

        return (
            <div className="pagestyle">
                <h1>
                <span className="emotion-text">{emotion}</span> isn't an emotion squid feels
                </h1>
                <div className="buttons-container">
                    <button onClick={handleKeepTrying}>Keep Trying</button>
                    <div className="or-container">
                        <p>or</p>
                    </div>
                    <button onClick={handleGiveUp}>Give Up</button>
                </div>
            </div>
        );
    }
}

export default AdvicePage;
