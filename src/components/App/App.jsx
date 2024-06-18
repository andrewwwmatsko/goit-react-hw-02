import { useState } from "react";

import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";

import css from "./App.module.css";
import Notification from "../Notification/Notification";

export default function App() {
  const [feedbacks, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const updateFeedback = (feedbackType) => {
    setFeedback({
      ...feedbacks,
      [feedbackType]: feedbacks[feedbackType] + 1,
    });
  };

  const resetFeedback = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const totalFeedback = feedbacks.bad + feedbacks.good + feedbacks.neutral;

  return (
    <div className={css.container}>
      <Description
        title="Sip Happens Café"
        description="Please leave your feedback about our service by selecting one of the options below."
      />
      <div className={css.buttonContainer}>
        <Options
          resetFeedback={resetFeedback}
          totalFeedbacks={totalFeedback}
          setFeedback={updateFeedback}
        />
      </div>

      {totalFeedback ? <Feedback feedbacks={feedbacks} /> : <Notification />}
    </div>
  );
}
