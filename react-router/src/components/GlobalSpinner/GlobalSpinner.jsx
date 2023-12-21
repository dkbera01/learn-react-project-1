import React from "react";

export default function GlobalSpinner() {
  return (
    <div className="fixed top-0 left-0 z-50 w-full h-screen bg-white bg-opacity-75 flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-t-2 border-red-800"></div>
    </div>
  );
}
