import "../App.css";
import { useNavigate } from "react-router-dom"; 
import { EmotionsData } from "../EmotionsData";

function GiveUpPage () {

    const navigate = useNavigate();

    const handleSelectChange = (event) => {
        const selectedEmotion = event.target.value;
        navigate(`/AdvicePage?emotion=${selectedEmotion}`);
    };

    return(
        <>
            <div className="pagestyle">
                <h1>Wow, you gave up</h1>
                <h1>Here are a list of <span className="emotion-text">squid's emotions</span></h1>
                <select onChange={handleSelectChange}>
                    {EmotionsData.map((emotion, index) => (
                        <option key={index} value={emotion.name}>
                            {emotion.name}
                        </option>
                    ))}
                </select>
            </div>
        </>
    );
}

export default GiveUpPage;
