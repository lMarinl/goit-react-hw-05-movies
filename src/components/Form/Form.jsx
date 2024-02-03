import css from './Form.module.css';
export const Form = ({ handleSubmit, query }) => {
  return (
    <div className={css.formContainer}>
      <form className={css.formMovie} onSubmit={handleSubmit}>
        <input className={css.inputMovie} type="text" name="query" required />
        <button className={css.buttonMovie} type="submit">
          Search
        </button>
      </form>
    </div>
  );
};
