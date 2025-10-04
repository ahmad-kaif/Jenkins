import { db } from "../db/mysql.js";
import { v4 as uuidv4 } from "uuid"; // to generate unique container IDs

// === CREATE SANDBOX ===
export const createSandbox = async (req, res) => {
  const { name, description } = req.body;
  const container_id = uuidv4(); // Generate a unique ID for the container

  try {
    const query = `
      INSERT INTO sandboxes (container_id, name, description)
      VALUES (?, ?, ?)
    `;
    const [result] = await db.execute(query, [container_id, name, description]);

    res.status(201).json({
      id: result.insertId,
      container_id,
      name,
      description,
    });
  } catch (error) {
    console.error("❌ Error creating sandbox:", error);
    res.status(500).json({ message: "Error creating sandbox" });
  }
};

// === READ ALL SANDBOXES ===
export const readSandbox = async (req, res) => {
  try {
    const [rows] = await db.execute("SELECT * FROM sandboxes ORDER BY created_at DESC");
    res.status(200).json(rows);
  } catch (error) {
    console.error("❌ Error fetching sandboxes:", error);
    res.status(500).json({ message: "Error fetching sandboxes" });
  }
};

// === UPDATE SANDBOX ===
export const updateSandbox = async (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;

  try {
    const query = `
      UPDATE sandboxes
      SET name = ?, description = ?, updated_at = CURRENT_TIMESTAMP
      WHERE id = ?
    `;
    const [result] = await db.execute(query, [name, description, id]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Sandbox not found" });
    }

    res.status(200).json({ id, name, description });
  } catch (error) {
    console.error("❌ Error updating sandbox:", error);
    res.status(500).json({ message: "Error updating sandbox" });
  }
};

// === DELETE SANDBOX ===
export const deleteSandbox = async (req, res) => {
  const { id } = req.params;

  try {
    const [result] = await db.execute("DELETE FROM sandboxes WHERE id = ?", [id]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Sandbox not found" });
    }

    res.status(204).send();
  } catch (error) {
    console.error("❌ Error deleting sandbox:", error);
    res.status(500).json({ message: "Error deleting sandbox" });
  }
};
