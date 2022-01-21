export class CounterService {
  COUNTER_URL: string;

  constructor(COUNTER_URL: string) {
    this.COUNTER_URL = COUNTER_URL;
  }

  async get() {
    const response = await fetch(this.COUNTER_URL);
    const data = await response.json();
    return data;
  }

  async update(counter) {
    await fetch(this.COUNTER_URL + `/${counter._id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(counter),
    });
  }
}
