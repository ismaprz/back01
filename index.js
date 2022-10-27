  const http = require ('http');
  const PORT = 3000;
  const host = '127.0.0.1';

  const server = http.createserver(function(req, res) {res.status = 200;
    res.end('hola mundo, soy el backend');
    
  })

  server.listen(PORT, host, () =>{
    console.log('back, trabajando para la aplicacion');
  } )
