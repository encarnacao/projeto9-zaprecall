import TelaPrincipal from "./components/TelaPrincipal";
import { useState } from 'react';

function App() {
  const [principal, setPrincipal] = useState(true);
  if(principal){
    return <TelaPrincipal />;
  }
}

export default App;