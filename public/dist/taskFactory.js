import { TaskVO } from './model/TaskVO.js';
export var taskFactory = function (index, body, category, column, _id, columnID) {
    return new TaskVO(index, body, category, column, _id, columnID);
};
//# sourceMappingURL=taskFactory.js.map