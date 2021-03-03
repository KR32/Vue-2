const http = require("http");
const fs = require('fs').promises;

const authors = JSON.stringify([
    { name: "Paulo Coelho", countryOfBirth: "Brazil", yearOfBirth: 1947 },
    { name: "Kahlil Gibran", countryOfBirth: "Lebanon", yearOfBirth: 1883 }
]);

const router = function(req,res){

    switch (req.url) {
        case "/":
            fs.readFile(__dirname + "/index.html")
            console.log(__dirname)
            .then(contents => {
                res.setHeader("Content-Type", "text/html");
                res.writeHead(200);
                res.end(contents);
            })
            .catch(err => {
                res.writeHead(500);
                res.end(err);
                return;
            });
            break
        case "/authors":
            res.setHeader("Content-Type", "application/json");
            res.writeHead(200);
            res.end(authors);
            break
        default:
            fs.readFile(__dirname + "/404.html")
            .then(contents => {
                res.writeHead(200);
                res.end(contents);
            })
            .catch(err => {
                res.writeHead(404);
                res.end(JSON.stringify({error:"Resource not found"}));
                return;
            });
            // res.writeHead(404);
            // res.end(JSON.stringify({error:"Resource not found"}));
    }

}

exports.router = router