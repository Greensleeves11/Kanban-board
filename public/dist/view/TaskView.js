var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { View } from './View';
var TaskView = (function (_super) {
    __extends(TaskView, _super);
    function TaskView(task) {
        var _this = _super.call(this) || this;
        _this.template = "<div class='card' draggable='true' id='".concat(task.index, "'>\n  <section class=\"card-header\">\n    <p class=\"card-text-header\">\n     Task #").concat(task.index, "\n   </p>\n   <img src=\"img/cancel.png\" alt=\"remove task\" class=\"remove-task\" />\n  </section>\n  <section class=\"card-body\">\n    <p class=\"card-text\" contenteditable=\"true\">\n      ").concat(task.body, "\n    </p>\n  </section>\n</div>");
        return _this;
    }
    return TaskView;
}(View));
export { TaskView };
//# sourceMappingURL=TaskView.js.map