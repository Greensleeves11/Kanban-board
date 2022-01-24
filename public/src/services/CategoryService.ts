import { CategoryVO } from '../model/CategoryVO';

export class CategoryService {
  CATEGORY_URL: string;

  constructor(CATEGORY_URL: string) {
    this.CATEGORY_URL = CATEGORY_URL;
  }

  async get() {
    const response = await fetch(this.CATEGORY_URL);
    const data = await response.json();
    return data;
  }

  async edit(category: CategoryVO) {
    await fetch(this.CATEGORY_URL + `/${category._id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(category),
    });
  }
}
