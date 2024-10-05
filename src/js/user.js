import { fetchData } from './http';

export const getLevel = async (userId) => {
    try {
        const response = await fetchData(`https://api.example.com/user/${userId}`);
        if (response.status === 'ok') {
            return `Ваш уровень: ${response.level}`;
        }
    } catch (error) {
        return 'Информация об уровне временно недоступна';
    }
};
