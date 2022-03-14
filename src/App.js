import React from "react";

const App = () => {
  console.log(process.env.REACT_APP_TOKENCOINRANKING);
  console.log(process.env.REACT_APP_TOKENBING);
  console.log(process.env.REACT_APP_TOKENNFT);

  return (
    <div>
      <h1>Crypto Marketo</h1>
    </div>
  );
};

export default App;
