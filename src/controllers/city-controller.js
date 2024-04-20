const { CityService } = require("../services");

const cityService = new CityService();

const create = async (req, res) => {
  try {
    const response = await cityService.createCity(req.body);
    return res.status(201).json({
      data: response,
      success: true,
      message: 'Successfully created a city',
      err: {}
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: 'Not able to create city',
      err: error
    });
  }
}

const destroy = async (req, res) => {
  try {
    const response = await cityService.deleteCity(req.params.id);
    return res.status(200).json({
      data: response,
      success: true,
      message: 'Successfully deleted the city',
      err: {}
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: 'Not able to delete city',
      err: error
    });
  }
}

const update = async (req, res) => {
  try {
    const response = await cityService.updateCity(req.params.id, req.body);
    return res.status(200).json({
      data: response,
      success: true,
      message: 'Successfully updated the city',
      err: {}
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: 'Not able to update city',
      err: error
    });
  }
}

const get = async (req, res) => {
  try {
    const response = await cityService.getCity(req.params.id);
    return res.status(200).json({
      data: response,
      success: true,
      message: 'Successfully got the city',
      err: {}
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: 'Not able to get city',
      err: error
    });
  }
}

module.exports = {
  create,
  destroy,
  get,
  update
}
