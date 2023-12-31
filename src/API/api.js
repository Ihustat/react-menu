import { API_URL } from '../config';

export async function getAllCategories() {
  const response = await fetch(`${API_URL}categories.php`);

  return await response.json();
}

export async function getMealsByArea(area) {
  const response = await fetch(`${API_URL}filter.php?a=${area}`);

  return await response.json();
}

export async function getMealsByCategory(categoryName) {
  const response = await fetch(`${API_URL}filter.php?c=${categoryName}`);

  return await response.json();
}

export async function getMealById(mealId) {
  const response = await fetch(`${API_URL}lookup.php?i=${mealId}`);

  return await response.json();
}
