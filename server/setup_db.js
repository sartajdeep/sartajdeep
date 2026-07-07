import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const pool = new pg.Pool({
    user: process.env.DB_USER || 'postgres',
    host: process.env.DB_HOST || 'localhost',
    database: process.env.DB_NAME || 'postgres',
    password: process.env.DB_PASSWORD || '',
    port: process.env.DB_PORT || 5432,
});

const bio = `Hi, I'm Sartajdeep Singh , a Computer Science and Artificial Intelligence (BTech) undergraduate at Plaksha University. I am deeply passionate about leveraging algorithmic thinking to build impactful, data-driven solutions, with hands-on experience designing an end-to-end AI hiring platform and engineering large-scale corporate leadership datasets. Proficient in technologies like Python, C++, and SQL , my technical expertise is complemented by my dedication to education and mentorship, having taught mathematical concepts to students and created engaging content to share clever solving tricks. As an innovative and adaptable strategic planner, I am always eager to blend my coding skills with creative problem-solving to tackle real-world challenges`;

async function setup() {
    try {
        await pool.query(`
            CREATE TABLE IF NOT EXISTS portfolio_data (
                id SERIAL PRIMARY KEY,
                name VARCHAR(255),
                subtitle VARCHAR(255),
                bio TEXT,
                image_path VARCHAR(255)
            );
        `);
        console.log('Created portfolio_data table.');

        await pool.query(`TRUNCATE TABLE portfolio_data`);

        await pool.query(`
            INSERT INTO portfolio_data (name, subtitle, bio, image_path)
            VALUES ($1, $2, $3, $4)
        `, [
            'Sartajdeep Singh',
            'Gemini said',
            bio,
            '/Gemini_Generated_Image_2iuqt72iuqt72iuq.png'
        ]);
        console.log('Inserted profile data.');
    } catch (err) {
        console.error('Error setting up DB:', err);
    } finally {
        await pool.end();
    }
}

setup();
