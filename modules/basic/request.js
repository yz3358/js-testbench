const axios = require('axios');

class Request {
  constructor() {

  }

  /**
    @param {Object} params -
      method: 'get',
      url: '/v1/store',
      data: {},
      token: 'test-token' // necessary
  */
  static async request(params) {
    try {
      if ((!params.type || params.type == 'get')
        &&
        typeof params.params != 'object'
      ) {
        params.params = params.data;
        delete params.data;
      }

      const res = await axios(Object.assign({
        baseURL: 'http://hdll.dev.2b3.cn/',
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
    			'token': params.token
        }
      }, params));

      return res.data;
    } catch (e) {
      throw e;
    }

  }
}



module.exports = {Request};
