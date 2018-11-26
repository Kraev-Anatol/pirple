// Dependencies
var http = require('http');
var url = require('url');
var StringDecoder = require('string_decoder').StringDecoder;

// Installation the HTTP server
var httpServer = http.createServer(function(req, res){
	unifiedServer(req,res);    
});


// Start the HTTP server
httpServer.listen(3000, function(){
	console.log("The server is listening on port 3000 now");
});

// exercises for the HTTP server
var unifiedServer = function(req,res) {

	// Get the URL and parse it
	var parsedUrl = url.parse(req.url, true);

	//Get the path from the URL
	var path = parsedUrl.pathname;
	var trimmedPath = path.replace(/^\/+|\/+$/g,'');

	// Get the HTTP Method
	var method = req.method.toLowerCase();

	// Get the query string as an object
	var queryStringObject = parsedUrl.query;

	// Get the headers as an object
	var headers = req.headers;

	// Get the payload, if any
	var decoder = new StringDecoder('utf-8');
	var buffer = '';
	req.on('data',function(data){
		buffer += decoder.write(data);
	});
	req.on('end', function() {
		buffer += decoder.end();

		// Choose the handler this request should go to. If one is not found, choose the notFound handler
		var chosenHandler = typeof(router[trimmedPath]) !== 'undefined' ? router[trimmedPath] : handlers.notFound;

		// Construct the data object to send to the handler
		var data = {
			'trimmedPath' : trimmedPath,
			'queryStringObject' : queryStringObject,
			'method' : method,
			'headers' : headers,
			'payload' : buffer
		};

		// Route the request to the handler specified in the router
		chosenHandler(data,function(statusCode,payload){
			// Use the statuscode called back by the handler, or default to 200
			statusCode = typeof(statusCode) == 'number' ? statusCode : 200;

			// Use the payload called back by the handler, or default to an empty object			
			payload = typeof(payload) == 'object' ? payload : {};

			// Convert the payload to a string
			var payloadString = JSON.stringify(payload);

			// Return the response
			res.setHeader('Content-Type','application/json');
			res.writeHead(statusCode);
			res.end(payloadString);

			// Log the response
			console.log('Returning this response: ', statusCode, ' Payload: ',payloadString);

	});

		// Send the response for buffer 
		 /* res.end('Hello World (answer)!\n');  */
		  
		// Log the request/response
		/* console.log('Request received with this payload: ',buffer); */
	});
	


	//Send the response
	/* res.end('Hello World! \n'); */

	//Log the request path
	/* console.log('Request received with these headers ',headers); */
	/* console.log('Request received on path: '+trimmedPath+ ' with method: '+method+ 
	' and with these query string parameters',queryStringObject); */

};

// Define all the handlers
var handlers = {};

// Sample handler
handlers.sample = function(data,callback){
	//Callback a http status code, and payload object
	callback(406,{'name' : 'sample handler'});
};

// Not found handler
handlers.notFound = function(data,callback){
  callback(404);
};

// Define the request router
var router = {
  'sample' : handlers.sample
};