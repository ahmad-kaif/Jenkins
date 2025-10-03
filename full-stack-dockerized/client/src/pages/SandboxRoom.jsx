import React, { useEffect, useState } from 'react';
import SandboxList from '../components/SandboxList';
import NewSandboxButton from '../components/NewSandboxButton';

const SandboxRoom = () => {
  const [sandboxes, setSandboxes] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch all sandboxes
  const fetchSandboxes = async () => {
    // try {
    //   const response = await fetch('http://localhost:3000/api/sandboxes');
    //   const data = await response.json();
    //   setSandboxes(data);
    //   setLoading(false);
    // } catch (err) {
    //   console.error('Error fetching sandboxes:', err);
    //   setLoading(false);
    // }
  };

  // Create new sandbox
  const createSandbox = async () => {
    // try {
    //   const response = await fetch('http://localhost:3000/api/create-sandbox', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ name: `Sandbox ${sandboxes.length + 1}` }),
    //   });
    //   const newSandbox = await response.json();
    //   setSandboxes([...sandboxes, newSandbox]);
    // } catch (err) {
    //   console.error('Error creating sandbox:', err);
    // }
  };

  // Delete sandbox
  const deleteSandbox = async (id) => {
    // try {
    //   await fetch(`http://localhost:3000/api/sandbox/${id}`, {
    //     method: 'DELETE',
    //   });
    //   setSandboxes(sandboxes.filter(sb => sb.id !== id));
    // } catch (err) {
    //   console.error('Error deleting sandbox:', err);
    // }
  };

  // Update sandbox
  const updateSandbox = async (id, newName) => {
    // try {
    //   const response = await fetch(`http://localhost:3000/api/sandbox/${id}`, {
    //     method: 'PUT',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ name: newName }),
    //   });
    //   const updatedSandbox = await response.json();
    //   setSandboxes(sandboxes.map(sb => sb.id === id ? updatedSandbox : sb));
    // } catch (err) {
    //   console.error('Error updating sandbox:', err);
    // }
  };

  useEffect(() => {
    fetchSandboxes();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold underline mb-4">Sandbox Room</h1>
      <p className="mb-6">Manage your sandboxes here:</p>

      <NewSandboxButton createSandbox={createSandbox} />

      {loading ? (
        <p>Loading sandboxes...</p>
      ) : (
        <SandboxList
          sandboxes={sandboxes}
          deleteSandbox={deleteSandbox}
          updateSandbox={updateSandbox}
        />
      )}
    </div>
  );
};

export default SandboxRoom;
