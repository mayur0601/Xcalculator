import Grid from "@mui/material/Grid";
import styles from "./Calculator.module.css";
import { useState } from "react";
function App() {
  let buttons = [7, 8, 9, "+", 4, 5, 6, "-", 1, 2, 3, "*", "C", 0, "=", "/"];
  let [operation, setOperation] = useState("");
  let [answer, setAnswer] = useState("");
  const handleClick = (e) => {
    let valueOfButton = e.target.id;
    if (valueOfButton === "C") {
      setOperation("");
      setAnswer("");
    } else if (valueOfButton === "=") {
      calculateValue();
    } else {
      setOperation((prevoperation) => prevoperation + valueOfButton);
    }
  };
  const calculateValue = () => {
    console.log(operation);
    if (!operation) {
      setAnswer("Error");
      return;
    }
    let res = eval(operation);
    setAnswer(res);
  };
  return (
    <div className={styles.container}>
      <h1>React Calculator</h1>
      <p className={styles.operation}>{operation}</p>
      <span className={styles.answer}>{answer}</span>
      <div className={styles.buttons}>
        <Grid container spacing={2}>
          {buttons.map((val) => {
            return (
              <Grid key={val} item xs={3}>
                <button
                  className={styles.button}
                  id={val}
                  onClick={handleClick}
                >
                  {val}
                </button>
              </Grid>
            );
          })}
        </Grid>
      </div>
    </div>
  );
}

export default App;
