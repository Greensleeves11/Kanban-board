export class CategoryService {
  constructor(url) {
    this.url = url;
  }

  async getData() {
    const response = await fetch(this.url);
    const data = await response.json();
    return data;
  }

  async edit(category) {
    await fetch(this.url + `/${category._id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(category),
    });
  }
}
