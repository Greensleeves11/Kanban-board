"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskVO = void 0;
var TaskVO = (function () {
    function TaskVO(index, body, category, column, _id, columnID) {
        (this.index = index),
            (this.body = body),
            (this.category = category),
            (this.column = column);
        this._id = _id;
        this.columnID = columnID;
    }
    return TaskVO;
}());
exports.TaskVO = TaskVO;
//# sourceMappingURL=TaskVO.js.map