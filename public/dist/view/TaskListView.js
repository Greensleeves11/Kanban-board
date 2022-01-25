import { TaskView } from './TaskView';
var TaskListView = (function () {
    function TaskListView(cardItems) {
        this.children = cardItems.map(function (item) {
            return new TaskView(item);
        });
    }
    TaskListView.prototype.render = function (parentElement, position) {
        this.children.forEach(function (child) {
            child.render(parentElement, position);
        });
    };
    return TaskListView;
}());
export { TaskListView };
//# sourceMappingURL=TaskListView.js.map