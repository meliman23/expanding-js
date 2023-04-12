import Express from 'express';

const Port = 3000;
const app = Express();


app.use('/', Express.static('./'));




//Start the server
app.listen(Port, () => {console.log('starting waifu server')})