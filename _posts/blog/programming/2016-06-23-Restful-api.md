---
layout: Blog-post
title: RESTful API's
meta: Information I have gathered from learning about RESTful API
category: programming
---
  when a user type in a url into a web browser. That user sends a HTTP request to a server and in turn that server sends back a webpage or a response. REST stands for Representational State Transfer.

  For an API to be RESTful is must be separate the client from server, not keep request information from another request, and uses HTTP/HTTPS methods.

### RESTful have four verbs:

##### GET
  Retrives data from a source website.

``` javascript
  var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://www.codecademy.com/", false);
    // Add your code below!
    xhr.send();
    console.log (xhr.status);
    console.log (xhr.statusText);

```
###### output
    200
    OK

##### POST
  sends new information to a website
##### PUT
  replaces old data with new data to a website

##### DELETE
  deletes data selected.
