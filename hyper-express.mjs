import HyperExpress from 'hyper-express';

const app = new HyperExpress.Server();

app.options('/user/:id', (request, response) => {
    response.header('Access-Control-Allow-Origin', '*');
    response.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    response.header('Access-Control-Allow-Headers', 'Content-Type');
    response.status(200).end();
})

app.get('/user/:id', (request, response) => {
    response.header('Access-Control-Allow-Origin', '*');
    response.status(200).json({ name: 'John Doe' });
})

app.listen(8080)
.then((socket) => console.log('Webserver started on port 8080'))
.catch((error) => console.log('Failed to start webserver on port 8080'));
