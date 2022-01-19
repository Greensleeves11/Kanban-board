export class DataService {
  constructor(DATA_URL) {
    this.DATA_URL = DATA_URL;
  }

  async get() {
    const response = await fetch(this.DATA_URL);
    const data = await response.json();
    return data;
  }
}
