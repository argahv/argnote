"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.serve = void 0;
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const http_proxy_middleware_1 = require("http-proxy-middleware");
const cells_1 = require("./routes/cells");
const serve = (port, filename, dir, useProxy) => {
    const app = (0, express_1.default)();
    app.use((0, cells_1.createCellsRouter)(filename, dir));
    if (useProxy) {
        app.use((0, http_proxy_middleware_1.createProxyMiddleware)({
            target: "http://localhost:3000",
            // enable websocket
            ws: true,
            logLevel: "silent",
        }));
    }
    else {
        const packagePath = require.resolve("@argnote/local-client/build/index.html");
        app.use(express_1.default.static(path_1.default.dirname(packagePath)));
    }
    // adding async await to the express server
    return new Promise((resolve, reject) => {
        app.listen(port, resolve).on("error", reject);
    });
};
exports.serve = serve;
