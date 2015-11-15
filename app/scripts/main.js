/*global Personify, $*/


window.Personify = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    Api: {
      'url': 'http://127.0.0.1:5000/personify/api'
    },
    init: function () {
        'use strict';
        new Personify.Views.Nav();
    }
};

$(document).ready(function () {
    'use strict';
    Personify.init();
    Backbone.history.start({pushState: false});
});
