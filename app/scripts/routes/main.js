/*global Personify, Backbone*/

Personify.Routers = Personify.Routers || {};

(function () {
    'use strict';

    Personify.Routers.Main = Backbone.Router.extend({
        routes: {
            '': 'hello',
            'hello': 'hello',
            'people': 'people',
            'people/:id': 'person',
            'about': 'about',
            'contact': 'contact'
        },
        
        hello: function() {
            if(Personify.Views.hello) {
                Personify.Views.hello.render();
            }
            else {
                Personify.Views.hello = new Personify.Views.Hello();                
            }
        },
        
        people: function() {
            if(Personify.Views.people) {
                Personify.Views.people.render();
            }
            else {
                Personify.Views.people = new Personify.Views.People();                
            }
        },

        person: function(id) {
            if(Personify.Views.person) {
                Personify.Views.person.initialize(id);
            }
            else {
                Personify.Views.person = new Personify.Views.Person(id);
            }
        },

        about: function() {
            if(Personify.Views.about) {
                Personify.Views.about.render();
            }
            else {
                Personify.Views.about = new Personify.Views.About();
            }
        },

        contact: function() {
            if(Personify.Views.contact) {
                Personify.Views.contact.render();
            }
            else {
                Personify.Views.contact = new Personify.Views.Contact();
            }
        }
    });

    window.router = new Personify.Routers.Main();
})();
