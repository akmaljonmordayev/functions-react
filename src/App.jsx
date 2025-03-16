import "./App.css";

function App() {
  //function declaration
  // function paramets
  function myFunction(number1, number2, number3) {
    console.log(number1 + number2 + number3);
  }
  myFunction(23, 23, 67);
  myFunction(23, 45, 67);
  myFunction(45, 45, 90);
  myFunction(23, 56, 78);
  // funksiya argumants

  return (
    <>
      <div className="buttons">
        <button className="button1">Button</button>
        <button className="button2">Button</button>
        <button className="button3">Button</button>
      </div>
    </>
  );
}

export default App;
