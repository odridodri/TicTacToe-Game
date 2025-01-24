import { useState } from "react";

export default function Player({
  initialName,
  symbol,
  isActive,
  onNameChange,
}) {
  const [name, setName] = useState(initialName);
  const [state, setState] = useState(false);

  function editButton() {
    setState((editing) => !editing); //schedules a state update to !editing. This guarantees that we are always using the most updated state
    if (state) {
      onNameChange(symbol, name);
    }
  }

  function handleChange(event) {
    console.log(event);
    setName(event.target.value);
  }

  let playerName = <span className="player-name">{name}</span>;
  let buttonText = "Edit";

  if (state) {
    playerName = (
      <input type="text" required value={name} onChange={handleChange} />
    );
    buttonText = "Save";
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={editButton}>{buttonText}</button>
    </li>
  );
}
