import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "../App.css";

function FeelingPage() {
  const navigate = useNavigate();
  const [emotion, setEmotion] = useState("");

  const handleSubmit = () => {
    navigate(`/AdvicePage?emotion=${encodeURIComponent(emotion)}`);
  };

  return (
    <>
      <div className="pagestyle">
        <h1>So, how are you feeling?</h1>
        <div className="input-container">
          <input
            type="text"
            placeholder="ex: chonky"
            value={emotion}
            onChange={(e) => setEmotion(e.target.value)}
          />
          <div className="icon-right" onClick={handleSubmit}>
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
        </div>
      </div>
    </>
  );
}

export default FeelingPage;
