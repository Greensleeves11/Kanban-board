"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var dotenv_1 = __importDefault(require("dotenv"));
var logger_1 = require("./api/middleware/logger");
var db_1 = require("./config/db");
dotenv_1.default.config({ path: './config/config.env' });
(0, db_1.connectDB)();
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use('/api/routes/category', require('./api/routes/category'));
app.use('/api/routes/counter', require('./api/routes/counter'));
app.use('/api/routes/list', require('./api/routes/list'));
app.use('/api/routes/task', require('./api/routes/task'));
app.use('/api/routes/data', require('./api/routes/data'));
app.use(logger_1.logger);
app.use(express_1.default.static(path_1.default.join(__dirname, '../', '../', 'public')));
var PORT = process.env.PORT || 5000;
app.listen(PORT, function () { return console.log("Server started on port ".concat(PORT)); });
//# sourceMappingURL=server.js.map