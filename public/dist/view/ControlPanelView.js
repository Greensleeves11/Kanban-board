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
var ControlPanelView = (function (_super) {
    __extends(ControlPanelView, _super);
    function ControlPanelView() {
        var _this = _super.call(this) || this;
        _this.template = template;
        return _this;
    }
    return ControlPanelView;
}(View));
export { ControlPanelView };
var template = "<form action=\"#\" class=\"new-card\">\n<label for=\"new-card-text\" hidden>Create new card</label>\n<textarea name=\"\" id=\"new-card-text\" cols=\"20\" rows=\"10\"></textarea>\n<div class=\"importance\">\n  <div>\n    <input\n      type=\"color\"\n      name=\"not-important-picker\"\n      id=\"c-not-important\"\n    />\n  </div>\n  <label for=\"not-important\">Not important</label>\n  <input\n    type=\"radio\"\n    name=\"importance\"\n    id=\"not-important\"\n    value=\"1\"\n    checked\n  />\n</div>\n<div class=\"importance\">\n  <div>\n    <input\n      type=\"color\"\n      name=\"important-picker\"\n      id=\"c-important\"\n    />\n  </div>\n  <label for=\"important\">Important</label>\n  <input type=\"radio\" name=\"importance\" id=\"important\" value=\"2\" />\n</div>\n<div class=\"importance\">\n  <div>\n    <input type=\"color\" name=\"urgent-picker\" id=\"c-urgent\" />\n  </div>\n  <label for=\"urgent\">Urgent</label>\n  <input type=\"radio\" name=\"importance\" id=\"urgent\" value=\"3\" />\n</div>\n<label for=\"btn-form\" hidden>Form button</label>\n<input type=\"submit\" value=\"Create\" class=\"btn\" />\n</form>";
//# sourceMappingURL=ControlPanelView.js.map