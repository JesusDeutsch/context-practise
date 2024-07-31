import React from "react";
import { ContextDataProvider } from "./components/ContextData";
import Card from "./components/Card";
import { NumberContextProvider } from "./context/StateContext";
import ComponetPush from "./components/ComponetPush";
import Result from "./components/Result";

const App = () => {
  return (
    <>
    <NumberContextProvider>
      <div className="flex flex-col items-center gap-4 mt-4">
        <div>
          <ComponetPush />
          <Result/>
        </div>
      </div>
    </NumberContextProvider>

    <ContextDataProvider>
      <div className="flex flex-col items-center justify-center gap-4 mt-20 p-5" >
        <h1>Datos de Usuario</h1>
        <Card />
      </div>
    </ContextDataProvider>
    </>

  );
};

export default App;
