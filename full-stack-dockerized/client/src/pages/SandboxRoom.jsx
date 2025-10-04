import React, { useEffect, useState } from "react";
import axios from "axios";
import SandboxList from "../components/SandboxList";
import NewSandboxButton from "../components/NewSandboxButton";

const API_URL = "http://localhost:5000/api/sandbox";

const SandboxRoom = () => {
  const [sandboxes, setSandboxes] = useState([]);
  const [loading, setLoading] = useState(true);

  // === Fetch all sandboxes ===
  const fetchSandboxes = async () => {
    try {
      const { data } = await axios.get(`${API_URL}/read`);
      setSandboxes(data);
    } catch (error) {
      console.error("❌ Error fetching sandboxes:", error.response?.data || error.message);
    } finally {
      setLoading(false);
    }
  };

  // === Create new sandbox ===
  const createSandbox = async () => {
    const name = prompt("Enter sandbox name:");
    if (!name) return;

    const description = prompt("Enter description:") || "";

    try {
      const { data: newSandbox } = await axios.post(`${API_URL}/create`, {
        name,
        description,
      });
      setSandboxes([newSandbox, ...sandboxes]);
    } catch (error) {
      console.error("❌ Error creating sandbox:", error.response?.data || error.message);
    }
  };

  // === Update sandbox ===
  const updateSandbox = async (id) => {
    const newName = prompt("Enter new name:");
    const newDescription = prompt("Enter new description:") || "";
    if (!newName) return;

    try {
      const { data: updated } = await axios.put(`${API_URL}/update/${id}`, {
        name: newName,
        description: newDescription,
      });
      setSandboxes(sandboxes.map((sb) => (sb.id === id ? updated : sb)));
    } catch (error) {
      console.error("❌ Error updating sandbox:", error.response?.data || error.message);
    }
  };

  // === Delete sandbox ===
  const deleteSandbox = async (id) => {
    if (!window.confirm("Delete this sandbox?")) return;

    try {
      await axios.delete(`${API_URL}/delete/${id}`);
      setSandboxes(sandboxes.filter((sb) => sb.id !== id));
    } catch (error) {
      console.error("❌ Error deleting sandbox:", error.response?.data || error.message);
    }
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
          <p className="text-gray-400 italic">
            No sandboxes yet. Click <span className="text-blue-400">Create</span> to get started.
          </p>
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
