import { useState } from "react";
import { useRouter } from "next/router";

const Incrementer = () => {
  const [count, setCount] = useState(0);
  const router = useRouter();
  const { increment } = router.query;

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <span>{count}</span>
      <button
        className="bg-blue-400 hover:bg-blue-500 p-4 rounded-3xl hover:rounded-lg transition-all duration-100 ease-in"
        onClick={() => {
          setCount(count + parseInt(increment));
        }}
      >
        <span className="font-bold text-white text-lg">++</span>
      </button>
    </div>
  );
};

export default Incrementer;
