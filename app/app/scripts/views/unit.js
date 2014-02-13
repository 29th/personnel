define([
    "jquery"
    ,"underscore"
    ,"backbone"
    ,"hbs!templates/unit"
    ,"marionette"
], function($, _, Backbone, Template) {
    return Backbone.Marionette.Layout.extend({
        template: Template
        ,className: "unit"
        ,initialize: function(options) {
            options = options || {};
        }
        ,modelEvents: {
            "change": "render"
        }
        ,regions: {
            adminRegion: "#admin"
            ,pageRegion: "#page"
        }
        ,setHighlight: function(highlight) {
            this.highlight = highlight;
            this.$(".nav li").removeClass("active");
            if(highlight) this.$(".nav li[data-highlight=\"" + highlight + "\"]").addClass("active");
        }
        ,serializeData: function() {
            return _.extend({highlight: this.highlight}, this.collection.at(0).toJSON());
        }
    });
});