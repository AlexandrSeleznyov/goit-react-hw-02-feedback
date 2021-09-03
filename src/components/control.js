import React from "react";
const Controls = ({goodFeedback, neutralFeedback, badFeedback }) => {
  return (
    <div className="controls">
    <button type="button" onClick={goodFeedback}>Good</button>
    <button type="button" onClick={neutralFeedback}>Neutral</button>
    <button type="button" onClick={badFeedback}>Bad</button>
    </div>
  )
    }

    export default Controls;