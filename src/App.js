import "./App.css";
import { useRive, useStateMachineInput } from "rive-react";

const Avatar = () => {
  const params = {
    src: "avatar.riv",
    autoplay: true,
    stateMachines: "On Password",
  };
  const { RiveComponent, rive } = useRive(params);
  const onClickInput = useStateMachineInput(rive, "On Password", "Selected");

  return (
    <>
      <RiveComponent
        style={{ width: "300px", height: "300px" }}
        onClick={() => rive && rive.play("Hover/Select")}
      />

      <input
        type="password"
        placeholder="Senha"
        onFocus={() => (onClickInput.value = true)}
        onBlur={() => (onClickInput.value = false)}
      />
    </>
  );
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Avatar />
      </header>
    </div>
  );
}

export default App;
