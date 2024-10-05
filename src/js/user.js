import fetchData from './http'; // Импортируем функцию fetchData

export function getLevel(userId) {
    try {
        const response = fetchData(`https://server/user/${userId}`);

        if (response.status === 'ok') {
            return `Ваш текущий уровень: ${response.level}`; 
        }
    } catch (error) {
        // Обработка ошибок
        return 'Информация об уровне временно недоступна';
    }
}
