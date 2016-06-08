---
layout: Blog-post
title: Backbone.JS
meta: how backbone js is organized and sample code
category: work
---

[the front-end]:https://programmers.stackexchange.com/questions/171203/what-are-the-differences-between-server-side-and-client-side-programming

[flowcart]:http://www.tutorialspoint.com/backbonejs/images/BackboneArch.jpg

[links to all events possible]:http://www.tutorialspoint.com/backbonejs/backbonejs_events.htm





![flowcart]

---
## building blocks to get started

  {% highlight html %}
  
    <script src="https://code.jquery.com/jquery-2.1.3.min.js" type="text/javascript"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.2/underscore-min.js" type="text/javascript"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.1.2/backbone-min.js" type="text/javascript"></script>

  {% endhighlight %}

## HTTP Request
  The HTTP client sends a HTTP request to a server in the form of request message where web browsers, search engines etc acts like HTTP clients.


## Router
(this need to be looked into more)

  Router is required when web applications provide linkable, bookmarkable, and shareable URL's for important locations in the app.

  routes client side applications ([the front-end]) and connects them to actions and events using URL's.

  (not sure what this means)
  >It is an URL representation of application's objects. The URL is changed manually by the user.

  Backbone uses the url to understand the the application stat to be sent or present to user. [Examples of Routers](http://www.tutorialspoint.com/backbonejs/backbonejs_router.htm)

  {% highlight javascript %}
  
    //will track when you move in the browser
    $(document).ready(function () {
      wineApp = new AppRouter();
      Backbone.history.start();
    });
  {% endhighlight %}

## View

  Shows the content of the application and does not contain HTML markup for the application.

  It specifies an idea behind the presentation of the model's data to the user.

  view can be updated independently when the model changes without reloading the whole page.

  **IMPORANT**: *el* and *$el* (jquery version) means the element property (e.g. div, p, h1 ).
  Backbone auto sets element properties on view but you can manually set it yourself
  
  {% highlight javascript %}
        /*
        goes in side the html body
      */
        div id="container">Loading...</div>

        <script type="text/javascript">
        Homeview = Backbone.View.extend({
            //where to show the element
            el:'#container',
            initialize: function() {
              this.render();
            },
            //when this view gets Initialed renders the following html
            render: function() {
              this.$el.empty();
              //of this instance set the the jquery version of this this text element property to be an h1
              this.$el.html("(<h1>hello</h1>");

              //show it
              return this;
            }
        });
        // creates an instance of of Homeview
        wineApp = new Homeview();

       </script>


          });

  {% endhighlight %}
###fragments
a view is a modudual part of the website and router loads that part when called

## Events

  Main parts of an application. Makes custom events to an app. Can be mixed into any object and are able to bind and trigger events. [Links to all events possible]

## Models
  **Heart of the Javascript app** that retrieves and populates the data.Model takes the HTTP request from the events passed by the view using the router and synchronizes the data from database and send the response back to the client.
[Examples of models.](http://www.tutorialspoint.com/backbonejs/backbonejs_model.htm)

  {% highlight javascript %}
  
    //creates a model named wine
    Wine = Backbone.Model.extend();
    //creates an instance of wine
    firstWine = new Wine({
      name: 'Shit Wine'
      });
    //shows the name of First Wine in the console log
    console.log(firstWine.toJSON());
    //writes to the webpage and displays the whatever in in the name field
    document.write(firstWine.get("name"));

    //changes name of Shit Wine to Best wine
    firstWine.set("name","Best Wine");

  {% endhighlight %}

## Collection
  Collection is a set of models which binds events, when the model has been modified in the collection. Collection contains list of models that can be processed in the loop and supports sorting and filtering. When creating a collection, we can define what type of model that collection is going to have along with the instance of properties. Any event triggered on a model, which will also trigger on the collection in the model.

  It also takes the request from the view, bind events and synchronizes the data with requested data and send response back to the HTTP client. [Examples of Collections.](http://www.tutorialspoint.com/backbonejs/backbonejs_collection.htm)

  {% highlight javascript %}
  
    // Model
    Wine = Backbone.Model.extend();

    //Array of those Models
    Wines = Backbone.Model.extend({
      Model: Wine,
      // The url is for the router and RESTful API's
      url: "#"
    });
    //the collection
    flavorOfwines= new Wine([
      {name: 'Shit Wine', taste: 'Shity'},
      {name:'Best Wine', taste: 'great'}
    ]);

    //gets the name of each from the collection and displays them to the webpage
    wines.each( function(model) {
      document.write(firstWine.get("name"));
    });
    
  {% endhighlight %}
