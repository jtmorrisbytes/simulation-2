// do processing here
const controller = require("../../controllers/property");
const router = require("express").Router();

router.get("/", controller.getAll);

module.exports = {
  basePath: "/property",
  router,
};
