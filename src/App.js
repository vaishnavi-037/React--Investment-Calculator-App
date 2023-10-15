import { useState } from "react";
import FormInput from "./Components/FormInput/FormInput";

import Result from "./Components/ResultPage/Result";
import Header from "./Components/Header/Header";

function App() {
  // const [yearlyData, setYearlyData] = useState(null);

  // const calculateHandler = (userInput) => {
  //   const yearlyData = []; // per-year results

  //   let currentSavings = +userInput["current-savings"];
  //   const yearlyContribution = +userInput["yearly-contribution"];
  //   const expectedReturn = +userInput["expected-return"] / 100;
  //   const duration = +userInput["duration"];

  //   for (let i = 0; i < duration; i++) {
  //     const yearlyInterest = currentSavings * expectedReturn;
  //     currentSavings += yearlyInterest + yearlyContribution;
  //     yearlyData.push({
  //       year: i + 1,
  //       yearlyInterest: yearlyInterest,
  //       savingsEndOfYear: currentSavings,
  //       yearlyContribution: yearlyContribution,
  //     });
  //   }
  //   setYearlyData(yearlyData);
  // };

  const [userInput, setUserInput] = useState(null);
  const calculateHandler = (userInput) => {
    setUserInput(userInput);
  };

  // derived state(yearly data), With that, we would be rerunning this code whenever the state of this app component changes, and that
  // of course means that whenever we receive new user input, so whenever we set this user input state,
  // this component function will re-execute and this code will therefore re-execute.
  // And with that, we would have the yearly data as derived state based on that user input state
  // which is a slightly more elegant way

  const yearlyData = []; // per-year results
  if (userInput) {
    let currentSavings = +userInput["current-savings"];
    const yearlyContribution = +userInput["yearly-contribution"];
    const expectedReturn = +userInput["expected-return"] / 100;
    const duration = +userInput["duration"];

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }

  return (
    <div>
      <Header />
      <FormInput onCalculate={calculateHandler} />
      {!userInput && (
        <p style={{ textAlign: "center" }}>
          No invested calculated yet..
        </p>
      )}
      {userInput && (
        <Result
          items={yearlyData}
          initialInvestment={userInput["current-savings"]}
        />
      )}
    </div>
  );
}

export default App;
