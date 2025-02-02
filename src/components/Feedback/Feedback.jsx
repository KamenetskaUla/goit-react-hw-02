import css from "./Feedback.module.css";
const Feedback = ({
  feedbacks: { good, neutral, bad },
  totalFeedback,
  positiveFeedback,
}) => {
  return (
    <div>
      <ul className={css.stat}>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad:{bad}</li>
        <li>Total: {totalFeedback}</li>
        <li>Positive: {positiveFeedback}%</li>
      </ul>
    </div>
  );
};

export default Feedback;
