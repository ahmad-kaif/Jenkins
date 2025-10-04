import React from "react";

const NewSandboxButton = ({ createSandbox }) => {
  return (
    <button
      onClick={createSandbox}
      className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium px-5 py-2 rounded-md shadow hover:from-blue-500 hover:to-indigo-500 transition-all duration-200"
    >
      + New Sandbox
    </button>
  );
};

export default NewSandboxButton;
