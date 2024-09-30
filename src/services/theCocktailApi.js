import axios from 'axios';

export const fetchCocktailData = async () => {
  try {
    const response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php');
    return response.data; // Retorna los datos del menú
  } catch (error) {
    console.error('Error al obtener weather data:', error);
    throw error; // Lanza el error para que el componente pueda manejarlo
  }
};
