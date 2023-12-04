export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div>
      <h2>Statistics</h2>
      <ul>
        <li>Good:{good}</li>
      </ul>
      <ul>
        <li>Neutral:{neutral}</li>
      </ul>
      <ul>
        <li>Bad:{bad}</li>
      </ul>
      <ul>
        <li>Total:{total}</li>
      </ul>
      <ul>
        <li>Positive feedback:{positivePercentage}%</li>
      </ul>
    </div>
  );
};
