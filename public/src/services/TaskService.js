export class TaskService {
  constructor(url) {
    this.url = url;
  }

  async getData() {
    const response = await fetch(this.url);
    const data = await response.json();
    return data;
  }

  async postTask(task) {
    console.log(task);
    // task.index = task.id;

    if ((task.column = 'To do')) {
      task.columnID = '61e59d4f75cc8be14f148e0b';
    } else if ((task.column = 'In progress')) {
      task.columnID = '61e59d5e75cc8be14f148e0d';
    } else {
      task.columnID = '61e59d7975cc8be14f148e0f';
    }

    await fetch(this.url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(task),
    });
  }

  async delete(task) {
    await fetch(this.url + `/${task._id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(task),
    });
  }

  async edit(task) {
    await fetch(this.url + `/${task._id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(task),
    });
  }
}
