import { useState } from "react";
import styles from "./FormInput.module.css";

const INITIAL_USER_INPUT = {
  "current-savings": 10000,
  "yearly-contribution": 1200,
  "expected-return": 7,
  "duration": 10,
};

const FormInput = (props) => {
  const [userInput, setUserInput] = useState(INITIAL_USER_INPUT);

  const inputChangeHandler = (input, value) => {
    setUserInput((prev) => {
      return {
        ...prev,
        [input]: +value,
      };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onCalculate(userInput);
  };

  const resetHandler = () => {
    setUserInput(INITIAL_USER_INPUT);
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            value={userInput["current-savings"]}
            onChange={(event) =>
              inputChangeHandler("current-savings", event.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            value={userInput["yearly-contribution"]}
            onChange={(event) =>
              inputChangeHandler("yearly-contribution", event.target.value)
            }
          />
        </p>
      </div>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            value={userInput["expected-return"]}
            onChange={(event) =>
              inputChangeHandler("expected-return", event.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            value={userInput["duration"]}
            onChange={(event) =>
              inputChangeHandler("duration", event.target.value)
            }
          />
        </p>
      </div>
      <p className={styles.actions}>
        <button type="reset" className={styles.buttonAlt} onClick={resetHandler}>
          Reset
        </button>
        <button type="submit" className={styles.button}>
          Calculate
        </button>
      </p>
    </form>
  );
};

export default FormInput;
