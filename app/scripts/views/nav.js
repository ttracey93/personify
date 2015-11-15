/*global Personify, Backbone, JST*/

Personify.Views = Personify.Views || {};

(function () {
    'use strict';

    Personify.Views.Nav = Backbone.View.extend({

        template: JST['app/scripts/templates/nav.ejs'],
        
        el: '#nav-container',

        events: {},

        initialize: function () {
            //this.listenTo(this.model, 'change', this.render);
            this.render();
        },

        render: function () {
            this.$el.html(this.template());
        }

    });

})();
