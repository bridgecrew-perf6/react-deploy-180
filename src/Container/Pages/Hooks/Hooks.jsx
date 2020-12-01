import React, { useEffect, useState } from "react";

export const Hooks = () => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    // ComponentDidMount & ComponentDidUpdate
    document.title = `Title Change ${count}`;

    // ComponentWillUnmount
    return function () {
      document.title = "React App";
    };
  });

  return (
    <div className="contentHooks">
      <p>You clicked me {count} times.</p>
      <button onClick={() => setCount(count + 1)}>Click me!</button>
    </div>
  );
};
