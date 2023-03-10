import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();


const { Pool } = require('pg')

// Create a new pool with the database connection details
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'tracktime',
    password: 'Tvg492331',
    port: 5432
})

// Fetch data from the "users" table
pool.query('SELECT * FROM users', (err, res) => {
    if (err) {
        console.error(err)
        return
    }
    console.log(res.rows)
})

// Close the pool
pool.end()
});