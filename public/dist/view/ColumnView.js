var ColumnView = (function () {
    function ColumnView(title, childElement) {
        var _this = this;
        this.render = function (parentElement, position) {
            parentElement.insertAdjacentHTML(position, _this.template);
            var allColumnBodies = parentElement.querySelectorAll('.col-body');
            _this.columnBody = allColumnBodies[allColumnBodies.length - 1];
            _this.childElement.render(_this.columnBody, position);
        };
        this.title = title;
        this.childElement = childElement;
        this.template = "<div class=\"col\">\n    <div class=\"col-title\">\n    <p class=\"title-text\">".concat(title, "</p>\n    </div>\n    <div class=\"col-body\">\n    </div>\n    </div>");
    }
    return ColumnView;
}());
export { ColumnView };
//# sourceMappingURL=ColumnView.js.map