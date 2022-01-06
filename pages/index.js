import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Counter++</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col items-center justify-center p-4">
        <span>{count}</span>
        <button
          className="bg-blue-400 hover:bg-blue-500 p-4 rounded-3xl hover:rounded-lg transition-all duration-100 ease-in"
          onClick={() => {
            setCount(count + 1);
          }}
        >
          <span className="font-bold text-white text-lg">++</span>
        </button>
      </div>
    </div>
  );
}
