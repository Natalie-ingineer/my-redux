import { useMemo, useState } from "react";

export const UseMemoExample = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [c, setC] = useState(0);

  //   const value = a + b;
  //   console.log("calculatiang value");
  //   console.log(value);

  const memoValue = useMemo(() => {
    console.log("calculatiang memoValue");
    return a + b;
  }, [a, b]);

  return (
    <div>
      <button onClick={() => setA((prev) => prev + 1)}> update a: {a}</button>
      <button onClick={() => setB((prev) => prev + 1)}> update b: {b}</button>
      <button onClick={() => setC((prev) => prev + 1)}> update c: {c}</button>
      {/* <p>a+b={value}</p> */}
      <p>{memoValue}</p>
    </div>
  );
};
