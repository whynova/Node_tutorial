const http = require('http');
const server = http.createServer((req,res)=>{
    if(req.url ==='/')
    res.end("started");
    if(req.url === '/about')
    {
        res.end(`
        <h1>hey</h1>
        <a href='/'> back home </a>
        `);
    }
    res.end();
});

server.listen(5001);