const { CityRepository } = require("../repository");

class CityService {
  constructor() {
    this.cityRepository = new CityRepository();
  }

  async createCity(data) {
    try {
      const response = await this.cityRepository.createCity(data);
      return response;
    } catch (error) {
      console.log("Something went wrong in the service layer");
      throw(error);
    }
  }

  async deleteCity(cityId) {
    try {
      const response = await this.cityRepository.deleteCity(cityId);
      return response;
    } catch (error) {
      console.log("Something went wrong in the service layer");
      throw(error);
    }
  }

  async updateCity(cityId, data) {
    try {
      const response = await this.cityRepository.updateCity(cityId, data);
      return response;
    } catch (error) {
      console.log("Something went wrong in the service layer");
      throw(error);
    }
  }

  async getCity(cityId) {
    try {
      const response = await this.cityRepository.getCity(cityId);
      return response;
    } catch (error) {
      console.log("Something went wrong in the service layer");
      throw(error);
    }
  }
}

module.exports = CityService;
