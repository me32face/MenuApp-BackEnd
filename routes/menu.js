const express = require('express');
const router = express.Router();
const MenuItem = require('../models/MenuItem');

router.post('/', async (req, res) => {
  try {
    const newItem = new MenuItem(req.body);
    await newItem.save();
    console.log("New item added:", newItem);
    res.status(201).json(newItem);
  } catch (err) {
    console.error("Error adding item:", err.message);
    res.status(500).json({ message: "Server error while adding menu item" });
  }
});

router.get('/', async (req, res) => {
  const { category } = req.query;
  console.log("📥 GET /api/menu called. Category:", category);

  try {
    const query = category ? { category } : {};
    const items = await MenuItem.find(query);
    console.log(`Found ${items.length} item(s)`);
    res.json(items);
  } catch (err) {
    console.error("Error fetching items:", err.message);
    res.status(500).json({ message: "Server error while fetching menu items" });
  }
});

module.exports = router;
