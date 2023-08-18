const http = require('http');
const app = require('./app');

const PORT = process.env.PORT || 8000;

const server=http.createServer(app)

async function startsServer() {
     server.listen(PORT,() => {
          console.log('listening on '+PORT);
     });
}

startsServer();

