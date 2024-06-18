import css from "./Options.module.css";

export default function Options({
  setFeedback,
  totalFeedbacks,
  resetFeedback,
}) {
  return (
    <div className={css.container}>
      <button
        className={css.button}
        type="button"
        onClick={() => {
          setFeedback("good");
        }}
      >
        Good
      </button>
      <button
        className={css.button}
        type="button"
        onClick={() => {
          setFeedback("neutral");
        }}
      >
        Neutral
      </button>
      <button
        className={css.button}
        type="button"
        onClick={() => {
          setFeedback("bad");
        }}
      >
        Bad
      </button>

      {Boolean(totalFeedbacks) && (
        <button className={css.button} type="button" onClick={resetFeedback}>
          Reset
        </button>
      )}
    </div>
  );
}
