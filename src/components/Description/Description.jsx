import css from "./Description.module.css";

export default function Description({ title, description }) {
  return (
    <div className={css.container}>
      <h1 className={css.title}>{title}</h1>
      <p>{description}</p>
    </div>
  );
}
