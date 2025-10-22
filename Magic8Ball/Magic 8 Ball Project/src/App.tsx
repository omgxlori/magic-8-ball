import { useState } from "react";
import "./App.css";

export default function App() {
  const [spinning, setSpinning] = useState(false);
  // const [showAnswer, setShowAnswer] = useState(false); // optional: to reveal the triangle

  const handleClick = () => {
    if (spinning) return;
    setSpinning(true);
  };

  return (
    <div className="wrap">
      <h1>Magic 8 Ball</h1>

      <div
        className={[
          "ball",
          spinning ? "is-spinning" : "",
          // showAnswer ? "show-answer" : "",
        ].join(" ")}
        onClick={handleClick}
      >
        {/* glossy highlight is drawn by .ball::after */}

        <div
          className="roll"
          onAnimationEnd={() => {
            setSpinning(false);
            // toggle answer after each roll if you want:
            // setShowAnswer((v) => !v);
          }}
        >
          {/* FRONT: 8 side, closer to camera */}
          <div className="eight3D">
            <div className="eight"><b>8</b></div>
          </div>

          {/* BACK: triangle side, deeper inside */}
          <div className="magic3D">
            <div className="magic">
              <div className="answer">
                <u></u><u></u><span></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Optional manual toggle */}
      {/* <button onClick={() => setShowAnswer(v => !v)} style={{marginTop: 16}}>Toggle answer</button> */}
    </div>
  );
}
