/*global Personify, Backbone, JST*/

Personify.Views = Personify.Views || {};

(function () {
    'use strict';

    Personify.Views.Hello = Backbone.View.extend({

        template: JST['app/scripts/templates/hello.ejs'],

        el: '#child-container',

        events: {
            'click #list-people': 'listPeople'
        },

        initialize: function () {
            //this.listenTo(this.model, 'change', this.render);
            this.render();
        },

        render: function () {
            this.$el.html(this.template());
        },
        
        listPeople: function() {
            window.router.navigate('#/people', {trigger: true});
        }

    });

})();
