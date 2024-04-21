const { Op } = require('sequelize');
const { Flight } = require('../models/index');

class FlightRepository {
  async createFlight(data) {
    try {
      const flight = await Flight.create(data);
      return flight;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw { error };
    }
  }

  async getFlight(flightId) {
    try {
      const flight = await Flight.findByPk(flightId);
      return flight;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw { error };
    }
  }

  async getAllFlights(filter) {
    try {
      const filterObject = this.#createFilter(filter);
      const flight = await Flight.findAll({
        where: filterObject
      });
      return flight;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw { error };
    }
  }

  // private methods
  #createFilter(data) {
    let filter = {};
    if(data.arrivalAirportId) {
      filter.arrivalAirportId = data.arrivalAirportId;
    }
    if(data.departureAirportId) {
      filter.departureAirportId = data.departureAirportId;
    }
    if(data.minPrice && data.maxPrice) {
      Object.assign(filter, {[Op.and]: [ { price: { [Op.lte]: data.maxPrice } }, { price: { [Op.gte]: data.minPrice } } ]});
    } else if(data.minPrice) {
      Object.assign(filter, {price: {[Op.gte]: data.minPrice}});
    } else if(data.maxPrice) {
      Object.assign(filter, {price: {[Op.lte]: data.maxPrice}});
    }

    return filter
  }
}

module.exports = FlightRepository;
