export const fetchData = (url) => {
  return fetch(url).then(response => response.json());
  // Добавьте обработку ошибок, если нужно
};
