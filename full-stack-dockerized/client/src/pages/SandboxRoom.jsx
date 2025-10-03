import React, { useEffect, useState } from 'react';
import SandboxList from '../components/SandboxList';
import NewSandboxButton from '../components/NewSandboxButton';

const SandboxRoom = () => {
  const [sandboxes, setSandboxes] = useState([]);
  const [loading, setLoading] = useState(true);

  // === API Functions (stubbed for now) ===
  const fetchSandboxes = async () => {
    // Simulated delay for demo
    setTimeout(() => {
      setSandboxes([{ id: 1, name: "Sandbox 1" }, { id: 2, name: "Sandbox 2" }]);
      setLoading(false);
    }, 1000);
  };

  const createSandbox = async () => {
    const newSandbox = { id: Date.now(), name: `Sandbox ${sandboxes.length + 1}` };
    setSandboxes([...sandboxes, newSandbox]);
  };

  const deleteSandbox = async (id) => {
    setSandboxes(sandboxes.filter(sb => sb.id !== id));
  };

  const updateSandbox = async (id, newName) => {
    setSandboxes(sandboxes.map(sb => sb.id === id ? { ...sb, name: newName } : sb));
  };

  useEffect(() => {
    fetchSandboxes();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-gray-100 px-6 py-12 flex flex-col items-center">
      <div className="max-w-4xl w-full bg-gray-800/70 backdrop-blur-md rounded-2xl shadow-xl p-8 border border-gray-700">
        
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-extrabold bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
            Sandbox Room
          </h1>
          <NewSandboxButton createSandbox={createSandbox} />
        </div>

        <p className="text-gray-300 mb-6">
          Manage your personal SQL sandboxes here. You can create, update, or delete them anytime.
        </p>

        {loading ? (
          <p className="text-gray-400 animate-pulse">⏳ Loading sandboxes...</p>
        ) : sandboxes.length === 0 ? (
          <p className="text-gray-400 italic">No sandboxes yet. Click <span className="text-blue-400">Create</span> to get started.</p>
        ) : (
          <SandboxList
            sandboxes={sandboxes}
            deleteSandbox={deleteSandbox}
            updateSandbox={updateSandbox}
          />
        )}
      </div>
    </div>
  );
};

export default SandboxRoom;
