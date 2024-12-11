import Header from "./components/Header";
import Results from "./components/results";
import UserInput from "./components/UserInput";
import { useState } from "react";
function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const isInputValid  = userInput.duration >=1

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }
  return (
    <main>
      <Header/>
      <UserInput userInput={userInput} onChange={handleChange}/>
     {!isInputValid && <p className="center">Please enter valid duration greater than 0</p>}
     {isInputValid && <Results input={userInput}/>}
    </main>
  );
}

export default App;
