
const $ = require("betiny-core");

// Add your own command => yarn start dosomething any:other value:item
$.arguments.add("dosomething", command => {

   // Do any ...
   console.log("Yeahhh", command);

   // ... and manage yourself the exit way
   process.exit();

});

// Add your middleware at any place :-)
$.middleware.add("Any description", 200, (req, res, next) => {
    if (req.betiny.myparams) {
        console.log("My custom middleware", req.betiny.myparams);
    }
    next();
});

// Add your route with custom configuration to activate your custom middleware.
$.route.get("/", { myparams: "any value" }, (req, res) => {
    res.send("my route");
});

// Start your server.
$.server.start(() => {
    // ...
});