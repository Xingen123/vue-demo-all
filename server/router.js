const express = require('express');
const router = express.Router();
const api = require('./sqlMap');
const result = require('./result');

console.log(api);

router.get(`/getValue`, (req, res, next) => {
  api
    .getValue()
    .then((request) => {
      res.send(result.success(request));
    })
    .catch((err) => {
      console.log(err);
    });
});
router.post(`/deleteValue`, (req, res, next) => {
  const params = {
    id: req.body.id || '',
  };
  api
    .deleteValue(params)
    .then((request) => {
      res.send(result.success(request));
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post(`/setValue`, (req, res, next) => {
  // const { name = 'xingen', country = 'china', url = 'wwww' } = req.body;
  const params = {
    name: 'xingen',
    country: 'china',
    url: 'www',
  };
  api
    .setValue(params)
    .then((request) => {
      res.send(result.success(request));
    })
    .catch((err) => {
      console.log(err);
    });
});
router.post(`/updateValue`, (req, res, next) => {
  // const { name = 'xingen', country = 'china', url = 'wwww' } = req.body;
  const params = {
    name: req.body.name,
  };
  api
    .updateValue(params)
    .then((request) => {
      res.send(result.success(request));
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
