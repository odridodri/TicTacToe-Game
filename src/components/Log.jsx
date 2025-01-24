export default function Log({ turns, playerList }) {
  return (
    <ol id="log">
      {turns.map((obj) => (
        <li key={`${obj.square.row}${obj.square.col}`}>
          {playerList[obj.player]} selected row {obj.square.row}, column{" "}
          {obj.square.col}
        </li>
      ))}
    </ol>
  );
}
