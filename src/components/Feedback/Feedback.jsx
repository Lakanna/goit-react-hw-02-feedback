export const Feedback = ({}) => {
  return (
    <>
      <h1>Please leave feedback</h1>
      <ul>
        <li>
          <button type="button">Good</button>
        </li>
        <li>
          <button type="button">Neutral</button>
        </li>
        <li>
          <button type="button">Bad</button>
        </li>
      </ul>
      <div>
        <h2>Statistics</h2>
        <ul>
          <li>Good:</li>
        </ul>
        <ul>
          <li>Neutral:</li>
        </ul>
        <ul>
          <li>Bad:</li>
        </ul>
      </div>
    </>
  );
};
