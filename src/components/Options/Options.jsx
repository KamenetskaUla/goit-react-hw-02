import css from "./Options.module.css";
const Options = ({
  feedbacks,
  updateFeedback,
  totalFeedback,
  resetFeedbacks,
}) => {
  return (
    <div>
      {feedbacks.map((el, index) => (
        <button
          className={css.feedOptions}
          onClick={() => updateFeedback(el)}
          key={index}
        >
          {el}
        </button>
      ))}
      {totalFeedback > 0 && (
        <button className={css.feedReset} onClick={resetFeedbacks}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
