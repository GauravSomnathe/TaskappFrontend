const Item = require('../models/itemModel');

// Get all items
const getItems = async (req, res) => {
  try {
    const items = await Item.find().sort({ createdAt: -1 });
    res.status(200).json(items);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Create a new item
const createItem = async (req, res) => {
  try {
    console.log('POST /api/items body:', req.body);
    const { title, description, status } = req.body;

    if (!title || !description) {
      return res.status(400).json({ message: 'Title and description are required' });
    }

    const newItem = new Item({
      title,
      description,
      status: status || 'pending'
    });

    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Update an item
const updateItem = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, status } = req.body;

    const updatedItem = await Item.findByIdAndUpdate(
      id,
      { title, description, status },
      { new: true, runValidators: true }
    );

    if (!updatedItem) {
      return res.status(404).json({ message: 'Item not found' });
    }

    res.status(200).json(updatedItem);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Delete an item
const deleteItem = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedItem = await Item.findByIdAndDelete(id);

    if (!deletedItem) {
      return res.status(404).json({ message: 'Item not found' });
    }

    res.status(200).json({ message: 'Item deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

module.exports = {
  getItems,
  createItem,
  updateItem,
  deleteItem
};