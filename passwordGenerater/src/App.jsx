import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [copyText, setCopyText] = useState("Copy");
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [symbolAllowed, setSymbolAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) {
      str += "0123456789";
    }
    if (symbolAllowed) {
      str += "!@#$%^&*_?";
    }
    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
    setCopyText("Copy");
  }, [length, numberAllowed, symbolAllowed, setCopyText, setPassword]);

  const copyPasswordToCLipBoard = useCallback(
    (e) => {
      passwordRef.current?.select();
      window.navigator.clipboard.writeText(password);
      setCopyText("Copied !");
    },
    [password]
  );

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, symbolAllowed, passwordGenerator]);

  return (
    <div className="flex items-center justify-center px-2 md:px-0 h-screen">
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg bg-blue-800 px-4 py-3 my-8">
        <h1 className="text-4xl text-center text-white font-bold mb-8">
          Password Generator
        </h1>
        <div className="flex shadow overflow-hidden mb-5">
          <input
            value={password}
            readOnly
            ref={passwordRef}
            className="bg-white p-2 w-full outline-none"
          />
          <button
            className="outline-none bg-red-600 p-3 text-white font-bold shrink-0"
            onClick={copyPasswordToCLipBoard}
          >
            {copyText}
          </button>
        </div>
        <div className="flex flex-row gap-2 text-center">
          <div className="basis-1/4">
            <input
              type="range"
              min={8}
              max={32}
              value={length}
              onChange={(e) => {
                setLength(e.target.value);
              }}
              className="cursor-pointer thumb-blue-500"
            />
            <label className="text-white">Length: {length}</label>
          </div>
          <div className="basis-1/3 gap-2">
            <input
              type="checkbox"
              id="number"
              className="h-4 w-4 mr-1.5 rounded"
              onChange={(e) => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="number" className="text-white">
              Numbers
            </label>
          </div>
          <div className="basis-1/2 gap-2">
            <input
              type="checkbox"
              id="symbol"
              className="h-4 w-4 mr-1.5 rounded"
              onChange={(e) => {
                setSymbolAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="symbol" className="text-white">
              Special Characters
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
