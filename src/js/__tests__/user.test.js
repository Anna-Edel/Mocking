import { getLevel } from '../user';
import { fetchData } from '../http'; // Импортируем fetchData

jest.mock('../http'); // Смокируем http.js

describe('getLevel', () => {
    test('returns user level when fetch is successful', () => {
        // Настраиваем mock для успешного ответа
        fetchData.mockImplementation(() => Promise.resolve({
            status: 'ok',
            level: 5,
        }));

        return getLevel(1).then((message) => {
            expect(message).toBe('Ваш уровень: 5'); // Проверяем корректное возвращаемое значение
        });
    });

    test('returns error message when fetch fails', () => {
        // Настраиваем mock для выброса ошибки
        fetchData.mockImplementation(() => Promise.reject(new Error('Error')));

        return getLevel(1).then((message) => {
            expect(message).toBe('Информация об уровне временно недоступна'); // Проверяем сообщение об ошибке
        });
    });
});
