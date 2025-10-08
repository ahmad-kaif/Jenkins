import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { db } from './db/mysql.js';
import sandboxRoutes from './routes/sandboxRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: 'http://localhost:5173', 
  methods: ["GET","POST","PUT","DELETE","OPTIONS"],
  allowedHeaders: ["Content-Type","Authorization"]
}));


app.use(express.json());
app.use('/api/sandbox', sandboxRoutes);

app.get('/', (req, res) => res.send('Hello from the server!'));

// --- 5. Start server ---
async function start() {
  try {
    const conn = await db.getConnection();
    await conn.query(`
      CREATE TABLE IF NOT EXISTS sandboxes (
        id INT AUTO_INCREMENT PRIMARY KEY,
        container_id VARCHAR(255) NOT NULL,
        name VARCHAR(255) NOT NULL,
        description TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      );
    `);
    conn.release();

    app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

start();
