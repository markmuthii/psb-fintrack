import { useEffect, useState } from "react";

const UseEffect = () => {
  // Declare a state variable 'stateVar' initialized to 0
  // 'setStateVar' is the function to update the value of 'stateVar'
  const [stateVar, setStateVar] = useState(0);

  // useEffect with an empty dependency array []
  // This effect runs only once when the component is mounted
  useEffect(() => {
    console.log("Use Effect 1"); // Logs a message to the console when the component mounts
  }, []);

  // useEffect with 'stateVar' in the dependency array
  // This effect runs when the component first mounts, plus every time 'stateVar' changes
  useEffect(() => {
    console.log("Use Effect 2"); // Logs a message to the console whenever 'stateVar' is updated
  }, [stateVar]);

  return (
    <>
      {/* Display the current value of 'stateVar' */}
      {stateVar} <br />
      {/* Button to increment the value of 'stateVar' by 1 */}
      <button
        onClick={() => {
          setStateVar(stateVar + 1); // Update 'stateVar' by adding 1 to its current value
        }}
      >
        Click Me
      </button>
    </>
  );
};

export { UseEffect };
