import express from "express";
import path from "path";
import routes from "../routes/index.routes";
import morgan from "morgan";
import socket from "socket.io";
import { engine } from "express-handlebars";

class Main {
  constructor() {
    this.name = "Main";
  }
  async start() {
    const app = express();
    //Middlewares
    app.use(morgan("dev"));
    //config
    app.set("views", path.join(__dirname, "../views"));
    app.engine(
      ".hbs",
      engine({
        defaultLayout: "main",
        layoutsDir: path.join(app.get("views"), "layouts"),
        partialsDir: path.join(app.get("views"), "partials"),
        extname: ".hbs",
      })
    );
    app.set("view engine", ".hbs");
    app.use(express.static(path.join(__dirname, "../public")));
    //routes

    app.use(routes);
    //start
    app.set("port", process.env.PORT || 300);
    const server = app.listen(app.get("port"), () => {
      console.log("server on port", app.get("port"));
    });
    //websockets
    var io = new socket.Server(server);
    io.on("connection", (socket) => {
      console.log("a user connected", socket.id);
    });
  }
}

export { Main };
