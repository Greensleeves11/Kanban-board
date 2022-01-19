export class CategoryService {
  constructor(CATEGORY_URL) {
    this.CATEGORY_URL = CATEGORY_URL;
  }

  async get() {
    const response = await fetch(this.CATEGORY_URL);
    const data = await response.json();
    return data;
  }

  async edit(category) {
    await fetch(this.CATEGORY_URL + `/${category._id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(category),
    });
  }
}
