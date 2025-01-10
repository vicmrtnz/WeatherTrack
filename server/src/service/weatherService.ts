import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

interface Coordinates {
  lat: number;
  lon: number;
}

class WeatherService {
  private readonly baseURL: string = 'https://api.openweathermap.org/data/2.5/weather';
  private readonly apiKey: string = process.env.OPENWEATHER_API_KEY || '';

  // Fetch weather data for a city
  async getWeatherForCity(city: string) {
    try {
      const response = await axios.get(this.baseURL, {
        params: {
          q: city,
          appid: this.apiKey,
          units: 'metric', // Celsius, you can change it based on your preference
        }
      });
      return response.data;
    } catch (error) {
      throw new Error('Failed to retrieve weather data');
    }
  }
}

export default new WeatherService();