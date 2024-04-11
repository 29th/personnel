var $ = require("jquery"),
  _ = require("underscore"),
  Backbone = require("backbone"),
  config = require("../config");

  "use strict";

  module.exports = Backbone.Model.extend({
      url: function () {
          var url = config.apiHost + "/qualifications";
          if(this.get("id")) url += "/" + this.get("id");
          return url;
      },
      parse: function (response, options) {
          if(options.collection) return response; // thx http://stackoverflow.com/a/18654257 !
          return response.qualification || {};
      }
  });
