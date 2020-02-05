
const http=require('http');
const app=require('./app');
const port=process.env.PORT || 3000;

app.set('view engine','ejs');
const server = http.createServer(app);
server.listen(port);
console.log('now listening to port 3000');