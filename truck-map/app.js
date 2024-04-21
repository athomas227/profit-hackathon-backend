const express = require('express');
const { db } = require('./db').default;

const app = express();

app.get('/api/truck-locations', async (req, res) => {
  try {
    const locations = await db.any('SELECT * FROM locations');
    res.json(locations);
  } catch (error) {
    console.error('Error fetching truck locations:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = app;