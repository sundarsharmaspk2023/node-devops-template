"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const logger_1 = __importDefault(require("./logger"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.get('/health', (req, res) => {
    logger_1.default.info('Health check hit');
    res.json({ status: 'ok', time: new Date() });
});
app.listen(port, () => {
    logger_1.default.info(`Server running on port ${port}`);
});
