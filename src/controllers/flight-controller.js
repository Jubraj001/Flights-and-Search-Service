const { FlightService } = require("../services");

const flightService = new FlightService();

const create = async (req, res) => {
  try {
    const flight = await flightService.createFlight(req.body);
    return res.status(201).json({
      data: flight,
      success: true,
      message: 'Successfully created a flight',
      err: {}
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: 'Not able to create flight',
      err: error
    });
  }
}

const getAll = async (req, res) => {
  try {
    const response = await flightService.getAllFlightsData(req.query);
    return res.status(200).json({
      data: response,
      success: true,
      message: 'Successfully fetched the flights',
      err: {}
    })
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: 'Not able to fetch all flights',
      err: error
    });
  }
}

module.exports = {
  create,
  getAll
}
