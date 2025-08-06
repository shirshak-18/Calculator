import styles from "./App.module.css";
import Display from "./components/Display.jsx";
import ButtonsContainer from "./components/ButtonsContainer.jsx";
import { useState } from "react";
function App() {
  const [calVal, setCalVal] = useState("");
  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      setCalVal(`${eval(calVal)}`);
    } else {
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  };
  return (
    <>
      <div className={styles.calculator}>
        <Display displayVal={calVal}></Display>
        <ButtonsContainer onButtonClick={onButtonClick}></ButtonsContainer>
      </div>
    </>
  );
}

export default App;
