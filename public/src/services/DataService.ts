export class DataService {
  DATA_URL: string;

  constructor(DATA_URL: string) {
    this.DATA_URL = DATA_URL;
  }

  async get() {
    const response = await fetch(this.DATA_URL);
    const data = await response.json();
    return data;
  }
}
