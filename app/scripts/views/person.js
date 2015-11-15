/*global Personify, Backbone, JST*/

Personify.Views = Personify.Views || {};

(function () {
    'use strict';

    Personify.Views.Person = Backbone.View.extend({

        template: JST['app/scripts/templates/person.ejs'],

        el: '#child-container',

        events: {
            'click #cancel': function() {
                window.router.navigate('#/people', {trigger: true});
                toastr.info(this.model.get('first_name') + '\'s info was preserved');
            },

            'click #save': function() {
                this.model.set('first_name', $('#first_name').val());
                this.model.set('last_name', $('#last_name').val());
                this.model.set('date_of_birth', $('#date_of_birth').val());
                this.model.set('zip', $('#zip').val());

                this.model.save(this.model.attributes).then(function(response) {
                    window.router.navigate('#/people', {trigger: true});
                    toastr.success(response['first_name'] + '\'s info was saved');
                });
            }
        },

        initialize: function (id) {
            this.model = new Personify.Models.Person(id);

            this.model.fetch().then(this.render());
        },

        render: function () {
            $(this.el).html(this.template(this.model.toJSON()));
        }

    });

})();
