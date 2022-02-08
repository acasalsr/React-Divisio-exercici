export default function Dividir({ num1, num2 }) {
  if (num1 === 0 || num2 === 0) {
    return "estàs dividint per un número 0, melón.";
  } else {
    return num1 / num2;
  }
}
