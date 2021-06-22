import React, { useReducer } from "react";
import StunterStateContext from "./context/StunterStateContext";
import StunterDispatchContext from "./context/StunterDispatchContext";
import stunterReducer from "./reducers/StunterReducer";
import { initialStunterState } from "./reducers/StunterReducerState";
import StunterProfile from "./components/StunterProfile";

import Header from "./components/Header";
import SavedStunters from "./components/SavedStunters";

import "./App.css";
const App = () => {
  const [state, dispatch] = useReducer(stunterReducer, initialStunterState);
  const { showSaved } = state;

  return (
    <StunterDispatchContext.Provider value={dispatch}>
      <StunterStateContext.Provider value={state}>
        <Header />
        <main className="App">
          {showSaved ? <SavedStunters /> : <StunterProfile />}
        </main>
      </StunterStateContext.Provider>
    </StunterDispatchContext.Provider>
  );
};

export default App;
