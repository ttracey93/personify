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

            'click #delete': function() {
                this.model.destroy().then(function(response) {
                    window.router.navigate('#/people', {trigger: true});
                    toastr.error(response['first_name'] + ' was deleted');
                });
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
            this.model = new Personify.Models.Person();

            this.model.id = id;
            this.model.set('_id', id);

            var el = this.el;
            var t = this.template;

            this.model.on('sync', function(model) {
                var dob = model.get('date_of_birth').substr(0, 10);
                model.set('date_of_birth', dob);
                $(el).html(t(model.attributes));
            });

            this.model.fetch();
        },

        render: function () {
            $(el).html(template(model.toJSON()));
        }

    });

})();
