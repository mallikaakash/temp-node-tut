const http = require('http');

const server = http.createServer((request, response) => {
  response.end('Hello, World!\n');
});

server.on('request', (request, response) => {
  console.log(`Incoming request for ${request.url}`);
});

server.on('close', () => {
    console.log('Server closed');
  });
  
  server.on('error', (error) => {
    console.error(`Server error: ${error.message}`);
  });

server.listen(5000, () => {
  console.log('Server running at http://localhost:5000/');
});

// In this example, we're creating a new HTTP server using http.createServer and passing a callback function that sends the message "Hello, World!" to the client using the response.end method.

// We then call the server.on method to listen for the request event, which is emitted every time a new HTTP request is received by the server. The request and response objects are passed as arguments to the callback function, and we're using console.log to output information about the incoming request, such as the URL.

// Finally, we call the server.listen method to start the server listening on port 3000.

// Note that the server.on method can be used to listen for other events as well, such as the close event, which is emitted when the server is closed, or the error event, which is emitted when an error occurs on the server.

// In this example, we've added two new event listeners using the server.on method. The first listener is for the close event, which is emitted when the server is closed. In this case, we're simply logging a message to the console when the event occurs.

// The second listener is for the error event, which is emitted when an error occurs on the server. The error object is passed as an argument to the callback function, and we're using console.error to output an error message to the console.

// Note that you can add multiple event listeners for the same event, and you can also remove event listeners using the server.removeListener method.