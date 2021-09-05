import React from "react";
import PropTypes from "prop-types";
import s from "./Buttons.module.css";

const FeedBackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {Object.keys(options).map((option) => (
        <button
          className={s.buttons}
          type="button"
          option={option}
          key={option}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
      ))}
    </>
  );
};

FeedBackOptions.propTypes = {
  options: PropTypes.object,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedBackOptions;
