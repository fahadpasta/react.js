// // import logo from './logo.svg';
// import { useState } from "react";
// import './App.css';
// // import counter from "./counter/index";
// // function App() {


// // }
// const App = () => {
//   const [counter, setcounter] = useState(0);

//   const increment = () => {
//     setcounter(counter + 1);
//     // console.log("increment");
//   };


//   const decrement = () => {
//     const updated = counter - 1;
//     setcounter(updated);

//   };


//  const reset = () => setcounter(0);


//   return (
//     <div className='App'>
//       {/* <counter /> */}

//       <h1>{counter}</h1>
//       <div>
//         <button onClick={decrement}>decrement</button>
//         <button onClick={reset}>Reset</button>
//         <button onClick={increment}>increment</button>
//       </div>
//     </div>
//   );

// };

// export default App;








import { useState } from "react";
import './App.css';

const App = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
    // console.log("increment");
  };

  const decrement = () => {
    if (counter > 0) {
      const updated = counter - 1;
      setCounter(updated);
    }
  };

  const reset = () => setCounter(0);

  return (
    <div className='App'>
      <h1>{counter}</h1>
      <div>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

export default App;



