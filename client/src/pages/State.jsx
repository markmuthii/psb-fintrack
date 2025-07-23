import { useState } from "react";

const State = () => {
  const [numState, x] = useState(777);

  // let num = 7;
  const [num, setNum] = useState(7);

  const incrementNum = () => {
    x(numState + 1);
    setNum(num + 1);

    console.log(`Incremented Num: ${num}`);
    console.log(`Incremented Num State: ${numState}`);
  };

  return (
    <>
      <p>Number Value is {num}</p>
      <p>Number State Value is {numState}</p>

      <button
        className="bg-green-900 text-white p-2 mt-6 cursor-pointer"
        id="btn"
        onClick={incrementNum}
      >
        Increment Num
      </button>
    </>
  );
};

export { State };
