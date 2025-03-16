export const handleResponse = (response) => {
  if (response.ok) {
    return response.json();
  }

  return Promise.reject(`Ошибка: ${response.status}`);
};

export function handleCatch(error) {
  console.error(error);
}
