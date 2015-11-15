/*global Personify, Backbone, JST*/

Personify.Views = Personify.Views || {};

(function () {
    'use strict';

    Personify.Views.Create = Backbone.View.extend({

        template: JST['app/scripts/templates/create.ejs'],

        'el': '#child-container',

        events: {
            'click #abort': function() {
                window.router.navigate('#/people');
                toastr.info('Mission aborted');
            },

            'click #create': function() {
                this.model.set('first_name', $('#first_name').val());
                this.model.set('last_name', $('#last_name').val());
                this.model.set('date_of_birth', $('#date_of_birth').val());
                this.model.set('zip', $('#zip').val());

                this.model.save(this.model.attributes).then(function(response) {
                    window.router.navigate('#/people');
                    toastr.success(response['first_name'] + ' was added');
                });
            }
        },

        initialize: function () {
            //this.listenTo(this.model, 'change', this.render);
            this.model = new Personify.Models.Person();
            this.render();
        },

        render: function () {
            this.$el.html(this.template());
        }

    });

})();
