var router = require("./router");

const http = require("http");
// const fs = require('fs').promises;
const host = 'localhost';
const port = 8000;



const requestListener = function (req, res) {
    router.router(req,res)
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});