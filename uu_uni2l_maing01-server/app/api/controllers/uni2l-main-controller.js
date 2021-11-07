"use strict";
const Uni2lMainAbl = require("../../abl/uni2l-main-abl.js");

class Uni2lMainController {
  init(ucEnv) {
    return Uni2lMainAbl.init(ucEnv.getUri(), ucEnv.getDtoIn(), ucEnv.getSession());
  }
}

module.exports = new Uni2lMainController();
