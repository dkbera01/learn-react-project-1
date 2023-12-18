import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");
  const bgColors = [
    "red",
    "green",
    "blue",
    "olive",
    "grey",
    "yellow",
    "pink",
    "purple",
    "lavender",
    "black",
    "orange",
    "lime",
    "teal",
    "cyan",
    "indigo",
    "fuchsia",
  ];
  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          {bgColors.map((color) => {
            return (
              <button
                key={color}
                onClick={() => setColor(color)}
                className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
                style={{ backgroundColor: color }}
              >
                {color.toUpperCase()}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
