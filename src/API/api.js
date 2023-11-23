import { API_URL } from '../config';

export async function getAllCategories() {
  const response = await fetch(`${API_URL}categories.php`);

  return await response.json();
}
