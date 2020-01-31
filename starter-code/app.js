const express = require("express"); // Way to import
const server = express();
const hbs = require("hbs"); // npm i  hbs (npm install 'name of the package)
const path = require("path"); // core node lib ... no need to install
const PORT = 9999;

//APP INITAIL SETUP !
let counter = 0

// Make everything inside of public/ availavke to te browser (styles, images, frontend scripts)
server.use(express.static(path.join(__dirname, "public"))); // rock solid syntax

server.set("views", path.join(__dirname, "views"));

//indicates express wich view engine this app will use
server.set("view engine", "hbs"); // in this case hbs, there are others ... pug/jade etc.engine!

hbs.registerPartials(path.join(__dirname, "view/partials"));



//ROUTING SETUP !
server.get("/", (HTTPRequest, HTTPResponse) => {
    // const data = {
    //   text: "introduction text...",
    //   count: 42,
    //   loveCoding: true,
    //   user: {
    //     name: "wen", // through html : @key, this
    //     age: 30
    //   },
    //   fruits: ["apple", "pear", "banana"],
    //   //css:
    //   html: '<div class="widget">Toto is in the DIV</div>' //using tag and class here is an option
    // };

    const data = { counter: counter }
  
    // HTTPResponse.render("home");
    counter ++;
    // HTTPResponse.send('hello you are visitor number ' + counter) 
    HTTPResponse.render("home", data) // Instead of render we can user send as well

  });


//Kickstart
server.listen(PORT, () => {
    console.log(`yata ! server is running @ http://localhost:${PORT}`);
});