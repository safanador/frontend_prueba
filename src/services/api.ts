import axios from 'axios';

interface MenuItem {
  id: number;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
}

export const fetchMenuData = async (): Promise<MenuItem[]> => {
  try {
    const response = await axios.get<MenuItem[]>('https://backendprueba.vercel.app/api/menu');
    return response.data;
  } catch (error) {
    console.error('Error al obtener el menú:', error);
    throw error;
  }
};
