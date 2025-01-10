import fs from 'fs';
import path from 'path';

// City class with unique ID
class City {
  id: string;
  name: string;

  constructor(name: string) {
    this.id = Date.now().toString();  // Simple unique ID
    this.name = name;
  }
}

class HistoryService {
  private readonly filePath = path.join(__dirname, '../db/db.json');

  // Read the current cities from the db file
  private async read() {
    try {
      const data = fs.readFileSync(this.filePath, 'utf-8');
      return JSON.parse(data);
    } catch (error) {
      return [];
    }
  }

  // Write the cities to the db file
  private async write(cities: City[]) {
    fs.writeFileSync(this.filePath, JSON.stringify(cities, null, 2));
  }

  // Get all cities from the db file
  async getCities() {
    const cities = await this.read();
    return cities;
  }

  // Add a new city to the db file
  async addCity(name: string) {
    const cities = await this.read();
    const city = new City(name);
    cities.push(city);
    await this.write(cities);
  }

  // Remove a city by its ID
  async removeCity(id: string) {
    const cities = await this.read();
    const newCities = cities.filter((city: City) => city.id !== id);
    await this.write(newCities);
    return newCities.length < cities.length;
  }
}

export default new HistoryService();