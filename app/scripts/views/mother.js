/*global Personify, Backbone, JST*/

Personify.Views = Personify.Views || {};

(function () {
    'use strict';

    Personify.Views.Mother = Backbone.View.extend({

        template: JST['app/scripts/templates/mother.ejs'],

        el: '#child-container',

        events: {},

        messages: {
            'default': 'Do you kiss your mother with that mouth?',
            'f': 'Come on with the language',
            's': 'There could be children nearby',
            'a': 'This is a library!',
            'what': 'You keep using that word. I do not think it means what you think it means'
        },

        initialize: function (options) {
            //this.listenTo(this.model, 'change', this.render);
            if(options) {
                this.render(options.key);
            }
            else {
                this.render();
            }
        },

        render: function (key) {
            if(key == null) {
                key = 'default';
            }

            this.$el.html(this.template({'message': this.messages[key]}));
        }

    });

})();
