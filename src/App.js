import { useState } from "react";
import "./app.css";

export default function App() {
  //Aprendendo usar os useState
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [message, setMessage] = useState("");

  function isVazioEntrada(strAltura, strPeso) {
    if (strAltura === "" || strPeso === "") {
      return true;
    }
  }

  function isNumberStr(strAltura, strPeso) {
    if (!isNaN(altura) || !isNaN(peso)) {
      return true;
    }
  }

  function calcularIMC() {
    if (isVazioEntrada(altura, peso)) {
      setMessage("Deve preencher os campos altura e peso");
    } else if (isNumberStr(altura, peso)) {
      setMessage("Só pode informar números nos campos");
    }

    if (Number(altura) === 0 || Number(peso) === 0) {
      setMessage("Deve informar um valor maior que cero");
    } else {
      const alt = Number(altura) / 100;
      const imc = Number(peso) / (alt * alt);

      if (imc < 18.6) {
        setMessage("Você está abaixo do peso! Seu IMC: " + imc.toFixed(2));
      } else if (imc >= 18.6 && imc < 24.9) {
        setMessage("Peso ideal! Seu IMC: " + imc.toFixed(2));
      } else if (imc >= 24.9 && imc < 34.9) {
        setMessage(
          "Você está levemente acima do peso! Seu IMC: " + imc.toFixed(2)
        );
      } else if (imc > 34.9) {
        setMessage("Cuidado obesidade! Seu IMC: " + imc.toFixed(2));
      }
    }
  }

  return (
    <div className="app">
      <h1>Calculadora IMC</h1>
      <span>Vamos calcular seu IMC</span>

      <div className="area-input">
        <input
          type="text"
          placeholder="Peso em (kg)"
          value={peso}
          onChange={(eventPeso) => setPeso(eventPeso.target.value)}
        />
        <input
          type="text"
          placeholder="Altura (cm)"
          value={altura}
          onChange={(eventAltura) => setAltura(eventAltura.target.value)}
        />

        <button onClick={calcularIMC}>Calcular</button>
      </div>

      <h3>{message}</h3>
    </div>
  );
}
