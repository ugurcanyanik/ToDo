
const app = require('express')()
const http = require('http').createServer(app)
const io = require('socket.io')(http)

app.get('/', (req, res) => {
  res.sendfile('index.html')
})

io.on('connection', socket => {
  console.log('a user connected', ++userCounter, socket.id)
  //idler.push(socket.id)
  io.to(socket.id).emit("yollanan", db)
  socket.on('disconnect', () => {
    console.log('user disconnected', --userCounter, socket.id)
  })

})

http.listen(3000, () => console.log('listening on *:3000'))
