;(function(m){

    "use strict";

    function ViewClient(name){
        // this.name = name;
        console.log("ViewClient working");

        var BodyView = Backbone.View.extend({
            el: 'body',// for selecting existing

            initialize: function(){
                console.log('BodyView initialized')
                console.log(this.el)

                var sideviewInst = new SideView()
                this.$el.append(sideviewInst.el)

                var mainviewInst = new MainView()
                this.$el.append(mainviewInst.el)



            }

        })

        var SideView = Backbone.View.extend({
            tagName: "div",  //for creating new DOM elements

            className: "side-bar"

        })

        var MainView = Backbone.View.extend({
            tagName: "div",

            className: "main-area"
        })

        var bodyInstance = new BodyView()





    }

    // Person.prototype = {
    //     setName: function(name){
    //         this.name = name;
    //     }
    // }

    m.ViewClient = ViewClient;

})(typeof module === "object" ? module.exports : window);