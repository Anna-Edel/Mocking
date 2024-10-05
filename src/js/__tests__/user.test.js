import fetchData from '../http'; // Импортируем функцию fetchData
import { getLevel } from '../user'; // Импортируем тестируемую функцию getLevel

// Мокаем функцию fetchData
jest.mock('../http');

describe('getLevel', () => {
    test('returns user level when fetch is successful', () => {
        // Настраиваем mock для успешного ответа
        fetchData.mockImplementation(() => ({
            status: 'ok',
            level: 5,
        }));

        // Проверяем, что getLevel возвращает правильное сообщение
        expect(getLevel(1)).toBe('Ваш текущий уровень: 5');
    });

    test('returns error message when fetch fails', () => {
        // Настраиваем mock для выброса ошибки
        fetchData.mockImplementation(() => { 
            throw new Error('Error'); 
        });

        // Проверяем, что getLevel возвращает сообщение об ошибке
        expect(getLevel(1)).toBe('Информация об уровне временно недоступна');
    });
});
