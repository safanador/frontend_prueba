import axios from 'axios';

export const fetchMenuData = async () => {
  try {
    const response = await axios.get('https://backendprueba.vercel.app/api/menu');
    return response.data; // Retorna los datos del menú
  } catch (error) {
    console.error('Error al obtener el menú:', error);
    throw error; // Lanza el error para que el componente pueda manejarlo
  }
};
