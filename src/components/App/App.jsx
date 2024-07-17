import { useEffect, useState } from "react";
import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification";
const init = {
  good: 0,
  neutral: 0,
  bad: 0,
};

const App = () => {
  const [feedbacks, setFeedbacks] = useState(
    () => JSON.parse(localStorage.getItem("feedbacks")) ?? init
  );
  const { good, neutral, bad } = feedbacks;
  useEffect(() => {
    localStorage.setItem("feedbacks", JSON.stringify(feedbacks));
  }, [feedbacks]);
  const updateFeedback = (el) => {
    setFeedbacks((prevFeedbacks) => ({
      ...prevFeedbacks,
      [el]: prevFeedbacks[el] + 1,
    }));
  };
  const totalFeedback = good + neutral + bad;
  const resetFeedbacks = () => {
    setFeedbacks(init);
  };
  const positiveFeedback =
    totalFeedback !== 0 ? Math.round((good / totalFeedback) * 100) : 0;

  return (
    <>
      <Description />
      <Options
        feedbacks={Object.keys(feedbacks)}
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        resetFeedbacks={resetFeedbacks}
      />
      {totalFeedback > 0 ? (
        <Feedback
          feedbacks={feedbacks}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </>
  );
};

export default App;
