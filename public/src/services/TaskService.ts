export class TaskService {
  TASK_URL: string;

  constructor(TASK_URL: string) {
    this.TASK_URL = TASK_URL;
  }

  async get() {
    const response = await fetch(this.TASK_URL);
    const data = await response.json();
    return data;
  }

  async add(task) {
    if ((task.column = 'To do')) {
      task.columnID = '61e59d4f75cc8be14f148e0b';
    } else if ((task.column = 'In progress')) {
      task.columnID = '61e59d5e75cc8be14f148e0d';
    } else {
      task.columnID = '61e59d7975cc8be14f148e0f';
    }

    await fetch(this.TASK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(task),
    });
  }

  async delete(task) {
    await fetch(this.TASK_URL + `/${task._id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(task),
    });
  }

  async edit(task) {
    await fetch(this.TASK_URL + `/${task._id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(task),
    });
  }
}
