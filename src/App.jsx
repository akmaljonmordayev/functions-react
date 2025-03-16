import "./App.css";

function App() {
  //function declaration
  // function paramets
  // function myFunction(number1, number2, number3) {
  //   console.log(number1 + number2 + number3);
  // }
  // myFunction(23, 23, 67);
  // myFunction(23, 45, 67);
  // myFunction(45, 45, 90);
  // myFunction(23, 56, 78);
  // funksiya argumants

  function bodyColor(color) {
    let body = document.querySelector("body");
    body.style.backgroundColor = color;
  }

  return (
    <>
      <div className="buttons">
        <button onClick={() => bodyColor("#4ADC2A")} className="button1">
          Button
        </button>
        <button onClick={() => bodyColor("#1B1BE6")} className="button2">
          Button
        </button>
        <button onClick={() => bodyColor("#BA1B1B")} className="button3">
          Button
        </button>
      </div>
    </>
  );
}

export default App;
