import { User } from '../model/User';

export class UserService {
  TASK_URL: string;

  constructor(TASK_URL: string) {
    this.TASK_URL = TASK_URL;
  }

  async get() {
    const response = await fetch(this.TASK_URL);
    const data = await response.json();
    return data;
  }

  async add(user: User) {
    await fetch(this.TASK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
  }
}
