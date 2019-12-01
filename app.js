const http = require ('http');
const port = 3000; 

const requestHandler = ( request, response ) => {
    console.log(request.url);
    response.end(`handling a request on port ${port}`)
    fs.writeFile('hello-world.txt', 'Hello to this great world', 'utf8',
    (err) => {
        if (err) throw err; 
        console.log(' It works')
    }
    )
} 

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
  if (err) {
    return console.log('something went wrong', err);
  }
  console.log(`server is listening on ${port}`);
})