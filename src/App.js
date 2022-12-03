import TelaPrincipal from "./components/TelaPrincipal";
import TelaInicial from "./components/TelaInicial";
import { useState } from 'react';

function App() {
  const [principal, setPrincipal] = useState(false);
  if(principal){
    return <TelaPrincipal />;
  } else{
    return <TelaInicial setPrincipal={setPrincipal} />;
  }
}

export default App;