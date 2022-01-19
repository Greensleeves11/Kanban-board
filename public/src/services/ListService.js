export class ListService {
  constructor(url) {
    this.url = url;
  }

  async getData() {
    const response = await fetch(this.url);
    const data = await response.json();
    return data;
  }

  setItems = lists => {};
}
