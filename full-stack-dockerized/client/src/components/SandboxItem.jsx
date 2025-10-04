import React from "react";

const SandboxItem = ({ sandbox, deleteSandbox, updateSandbox }) => {
  return (
    <li className="border border-gray-700 bg-gray-900/60 backdrop-blur-sm p-5 rounded-xl shadow-md hover:shadow-lg transition-all flex justify-between items-center">
      <div>
        <h2 className="font-semibold text-lg text-blue-400">{sandbox.name}</h2>
        <p className="text-sm text-gray-400">Container ID: {sandbox.container_id}</p>
        <p className="text-xs text-gray-500 mt-1">
          Created: {new Date(sandbox.created_at).toLocaleString()}
        </p>
      </div>

      <div className="flex space-x-3">
        <button
          onClick={() => updateSandbox(sandbox.id)}
          className="bg-yellow-500 text-white px-4 py-1.5 rounded hover:bg-yellow-600 transition"
        >
          Update
        </button>
        <button
          onClick={() => deleteSandbox(sandbox.id)}
          className="bg-red-600 text-white px-4 py-1.5 rounded hover:bg-red-700 transition"
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default SandboxItem;
