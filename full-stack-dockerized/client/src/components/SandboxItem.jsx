import React from 'react';

const SandboxItem = ({ sandbox, deleteSandbox, updateSandbox }) => {
  return (
    <li className="border p-4 rounded-lg shadow-sm flex justify-between items-center">
      <div>
        <h2 className="font-semibold">{sandbox.name}</h2>
        <p className="text-sm text-gray-500">ID: {sandbox.id}</p>
      </div>

      <div className="flex space-x-2">
        <button
          onClick={() => updateSandbox(sandbox.id, `${sandbox.name} (updated)`)}
          className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
        >
          Update
        </button>
        <button
          onClick={() => deleteSandbox(sandbox.id)}
          className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default SandboxItem;
