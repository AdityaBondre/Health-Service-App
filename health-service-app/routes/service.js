const express = require('express');
const router = express.Router();
const Service = require('../models/Service');

// Create a new service
router.post('/', async (req, res) => {
  const { name, price, description } = req.body;

  if (!name || !price || !description) {
    return res.status(400).json({ msg: 'Please provide name, price, and description' });
  }

  try {
    const newService = new Service({ name, price, description });
    await newService.save();
    res.status(201).json(newService);
  } catch (error) {
    res.status(500).json({ msg: 'Server Error', error });
  }
});

// Get all services
router.get('/', async (req, res) => {
  try {
    const services = await Service.find();
    res.status(200).json(services);
  } catch (error) {
    res.status(500).json({ msg: 'Server Error', error });
  }
});

// Update a service by ID
router.put('/:id', async (req, res) => {
  const { name, price, description } = req.body;

  try {
    const service = await Service.findById(req.params.id);
    if (!service) {
      return res.status(404).json({ msg: 'Service not found' });
    }

    service.name = name || service.name;
    service.price = price || service.price;
    service.description = description || service.description;
    await service.save();

    res.status(200).json(service);
  } catch (error) {
    res.status(500).json({ msg: 'Server Error', error });
  }
});

// Delete a service by ID
router.delete('/:id', async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);
    if (!service) {
      return res.status(404).json({ msg: 'Service not found' });
    }

    await service.remove();
    res.status(200).json({ msg: 'Service removed' });
  } catch (error) {
    res.status(500).json({ msg: 'Server Error', error });
  }
});

module.exports = router;
