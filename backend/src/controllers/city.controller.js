import cityModel  from "../models/city.model.js";
 

export const createCity = async (req, res) => {
    try {
      const { name } = req.body;
      const city = await cityModel.create({ name });
      res.status(201).json(city);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error creating the city' });
    }
  };

export const getCities = async (req, res) => {
    try {
      const cities = await cityModel.findAll();
      res.status(200).json(cities);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error getting the cities' });
    }
};

export const getCity = async (req, res) => {
    try {
      const { id } = req.params;
      const city = await cityModel.findByPk(id);
      if (!city) {
        return res.status(404).json({ message: 'City not found' });
      }
      res.status(200).json(city);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error getting the city' });
    }
};


export const updateCity = async (req, res) => {
    try {
      const { id } = req.params;
      const { name } = req.body;
      const city = await cityModel.findByPk(id);
      if (!city) {
        return res.status(404).json({ message: 'City not found' });
      }
      city.name = name;
      await city.save();
      res.status(200).json(city);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error to update the city' });
    }
};

export const deleteCity = async (req, res) => {
    try {
      const { id } = req.params;
      const city = await cityModel.findByPk(id);
      if (!city) {
        return res.status(404).json({ message: 'City not found' });
      }
      await city.destroy();
      res.status(200).json({ message: 'City successfully removed' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error deleting the city' });
    }
};

