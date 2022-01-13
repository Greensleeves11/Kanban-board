export default class Service {
  constructor(url) {
    this.url = url;
  }

  async getData() {
    const response = await fetch(this.url);
    const data = await response.json();
    console.log(data);
  }

  async postData(data) {
    const response = await fetch(this.url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return response.json();
  }
}
