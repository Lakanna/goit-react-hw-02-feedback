import { Notification } from 'components/Notification/Notification';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  if (good || neutral || bad) {
    return (
      <div>
        <h2>Statistics</h2>
        <ul>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
          <li>Total: {total}</li>
          <li>Positive feedback: {positivePercentage}%</li>
        </ul>
      </div>
    );
  }
  return (
    <>
      <h2>Statistics</h2>
      <Notification messege={'There is no feedback'} />
    </>
  );
};
