import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(option => {
    return (
      <button
        type="button"
        onClick={() => onLeaveFeedback(option)}
        key={option}
        className={css.btnStatistic}
      >
        {option}
      </button>
    );
  });
};
