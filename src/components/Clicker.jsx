import { useState } from 'react';

const Clicker = () => {
  const [counter, setCounter] = useState(0); //definicion de estado en react//

  const Clickear = () => {
    setCounter(counter + 1);
  };


  return (
    <div>
      <h2>Clicker</h2>
      <hr />
      <button onClick={Clickear}>Click me</button>
      <p>Clicks: {counter}</p>
    </div>
  );
};

export default Clicker;
