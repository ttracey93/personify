/*global Personify, Backbone*/

Personify.Routers = Personify.Routers || {};

(function () {
    'use strict';

    Personify.Routers.Main = Backbone.Router.extend({
        routes: {
            '': 'hello',
            'hello': 'hello',
            'people': 'people',
            'people/new': 'create',
            'people/:id': 'person',
            'about': 'about',
            'contact': 'contact',
            'mother': 'mother',
            'mother/:key': 'mother'
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

        create: function() {
            if(Personify.Views.create) {
                Personify.Views.create.initialize();
            }
            else {
                Personify.Views.create = new Personify.Views.Create();
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
        },

        mother: function(key) {
            if(Personify.Views.mother) {
                Personify.Views.mother.render(key);
            }
            else {
                Personify.Views.mother = new Personify.Views.Mother();
            }
        }
    });

    window.router = new Personify.Routers.Main();
})();
