var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { TaskListView } from './TaskListView.js';
import { ControlPanelView } from './ControlPanelView.js';
import { ColumnView } from './ColumnView.js';
var UIView = (function () {
    function UIView(columnList) {
        var _this = this;
        this.template = '<div class="board-container"></div>';
        this.render = function (element, position) {
            if (element) {
                element.insertAdjacentHTML(position, _this.template);
                _this.element = element.querySelector('.board-container');
                _this.children.forEach(function (child) {
                    return child.render(_this.element, position);
                });
            }
        };
        var controlPanelView = new ColumnView('Create/remove task', new ControlPanelView());
        var columnViewList = columnList.map(function (column) { return new ColumnView(column.label, new TaskListView(column.items)); });
        this.children = __spreadArray([controlPanelView], columnViewList, true);
    }
    return UIView;
}());
export { UIView };
//# sourceMappingURL=UIView.js.map