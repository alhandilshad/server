const app = require('express')();
const port = 8080;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})

app.get('/', (req, res) => {
    const mess = 'hello world'
    res.send(mess);
})

app.get('/songs', (req, res) => {
    const songs = [
        { id: 1, title: 'Song 1', artist: 'Artist 1', duration: 3.5 },
        { id: 2, title: 'Song 2', artist: 'Artist 2', duration: 4.2 },
        { id: 3, title: 'Song 3', artist: 'Artist 3', duration: 2.8 },
    ];
    res.send(songs);
})