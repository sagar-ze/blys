import debugModule from "debug";
import * as http from "http";
import cors from "cors";
import app from "../startup";
import { ErrnoException } from "../common/interface";

const debug = debugModule("app:server");

app.use(cors({ origin: "*" }));

function normalizePort(val: string) {
  const port = parseInt(val, 10);
  if (Number(port)) {
    return val;
  }
  if (port >= 0) {
    return port;
  }
  return false;
}

const port = normalizePort(process.env.PORT || "5000");
app.set("port", port);

const server = http.createServer(app);

function onError(error: ErrnoException) {
  if (error.syscall !== "listen") {
    throw error;
  }

  const bind = typeof port === "string" ? ` Pipe ${port}` : `Port ${port}`;

  switch (error.code) {
    case "EACCES":
      console.error(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(`${bind}  is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
}

function onListening() {
  const addr = server.address();
  const bind = typeof addr === "string" ? `pipe ${addr}` : addr?.port;
  debug(`Listening on port ${bind}🥳  http://localhost:${bind}/`);
  debug(`Try Health check at: http://localhost:${bind}/`);
}

const data = server.listen(port);

server.on("error", onError);
server.on("listening", onListening);

export default data;
