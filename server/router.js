const express = require("express");
const router = express.Router();
const api = require("./sqlMap");
const result = require("./result");

console.log(api);

router.get(`/getValue`, (req, res, next) => {
  api.getValue().then(request => {
    res.send(result.success(request));
  });
});

router.post(`/setValue`, (req, res, next) => {
  api.setValue(req, res, next);
});

module.exports = router;
