'use strict';
const response = require('../utils/response');
const config = require('../utils/config');
const fetch = require('node-fetch');

module.exports.create = async (event) => {
  try {
    console.log("body\n" + JSON.stringify(event.body, null, 2))
    const rawResponse = await fetch('https://api.rechargeapps.com/checkouts', {
      method: 'POST',
      headers: {
        'x-recharge-access-token': config.RECHARGE_API_TOKEN,
        'Content-Type': 'application/json'
      },
      body: event.body
    });
    const json = await rawResponse.json();
    return response.ok(json);
  } catch (err) {
    return response.error(err);
  }
};
