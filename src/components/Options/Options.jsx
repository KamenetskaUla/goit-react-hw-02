const Options = ({
  feedbacks,
  updateFeedback,
  totalFeedback,
  resetFeedbacks,
}) => {
  return (
    <div>
      {feedbacks.map((el, index) => (
        <button onClick={() => updateFeedback(el)} key={index}>
          {el}
        </button>
      ))}
      {totalFeedback > 0 && <button onClick={resetFeedbacks}>Reset</button>}
    </div>
  );
};

export default Options;
