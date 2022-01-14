import { taskController } from './main.js';
import { data } from './model/data.js';

export const localDataCreator = async () => {
  const localData = await taskController.model.service.getData();
  console.log(localData);

  data[0] = localData[0];
  data[1] = localData[1];
  data[2] = localData[2];

  console.log(localData);
  console.log(data);
};
