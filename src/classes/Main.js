import express from "express";
import path from "path";
import routes from "../routes/index.routes";

class Main {
  constructor() {
    this.name = "Main";
  }
  /*async test() {
    var data =
      "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";

    var ciphertext = cryptojs.AES.decrypt(data, "0xcafebabesiktir");
    var originaltex = ciphertext.toString(cryptojs.enc.Utf8);
    var ori = date2.toString(cryptojs.enc.Utf8);
    console.log(ori);
  }*/

  async start() {
    const app = express();

    //config
    app.engine("html", require("ejs").renderFile);
    app.set("view engine", "html");
    app.set("views", path.join(__dirname, "views"));
    //routes
    app.use(routes);
    //start
    app.set("port", process.env.PORT || 3000);
    app.listen(app.get("port"), () => {
      console.log("server on port", app.get("port"));
    });
  }
}

export { Main };
