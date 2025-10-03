import React from 'react';

const NewSandboxButton = ({ createSandbox }) => {
  return (
    <button
      onClick={createSandbox}
      className="bg-blue-600 text-white px-4 py-2 rounded-md mb-4 hover:bg-blue-700"
    >
      + New Sandbox
    </button>
  );
};

export default NewSandboxButton;
