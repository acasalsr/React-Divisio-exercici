import "./styles.css";
import Dividir from "./Dividir";
//rep dos peràmetres, dos números que volem dividir.
// si un dels números és 0, hem d'indicar que un dels números és 0.

let num1 = 8;
let num2 = 2;

export default function App({}) {
  return (
    <div className="App">
      <Dividir num1={num1} num2={num2} />
    </div>
  );
}
