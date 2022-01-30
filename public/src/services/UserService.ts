export class UserService {
  TASK_URL: string;

  constructor(TASK_URL: string) {
    this.TASK_URL = TASK_URL;
  }

  async add(user: any) {
    await fetch(this.TASK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
  }
}
