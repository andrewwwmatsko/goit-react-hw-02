import css from "./Feedback.module.css";

export default function Feedback({ feedbacks, totalFeedbacks }) {
  return (
    <div className={css.container}>
      <p className={css.feedback}>Good: {feedbacks.good}</p>
      <p className={css.feedback}>Neutral: {feedbacks.neutral}</p>
      <p className={css.feedback}>Bad: {feedbacks.bad}</p>
      <p className={css.feedback}>Total: {totalFeedbacks}</p>
      <p className={css.feedback}>
        Positive: {Math.round((feedbacks.good / totalFeedbacks) * 100)}%
      </p>
    </div>
  );
}
