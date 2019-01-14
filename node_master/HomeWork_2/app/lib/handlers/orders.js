/*
*
* ORDERS HANDLER => ACEPT GET PUT DELETE POST
*
*/



//Dependencies
var helpers = require('../helpers');
var _data = require('../data');


// Container
var orders = {};

// variables
var _menu = {}
var total = 0;
var type, size, CheckOrder;
var order = {}

// HANDLERS

// POST
// Required data: name, email, token
// Optional data: Vegetarian, Buffalo_chicken, Hawaiian, Garnishes
orders.post = (data, callback) => {
    // Check all the required field
    // Reset the total everytime is submitted
    total = 0
    var _ = data.payload;
    var name = typeof (_.name) == 'string' && _.name.trim().length > 0 ? _.name.trim() : false;
    var email = typeof (_.email) == 'string' && helpers.emailValidator(_.email) ? _.email.trim() : false;
    var token = typeof (data.headers.token) == 'string' && data.headers.token.trim().length == 20 ? data.headers.token : false;

		// Check Optional data
		
		for (type in _.order) {
			for(size in _.order[type] ) {
				CheckOrder = typeof (_.order[type][size]) === 'number' &&  _.order[type][size] > 0 && CheckOrder != false ? _.order[type][size] : false;
				console.log(_.order[type][size], CheckOrder);		
			}
		}	
    
    
    if (name && email && CheckOrder) {
        // Check if the token is valid
        orders.verifyToken(token, name, (tokenIsValid) => {
            // look for user
            if (tokenIsValid) {
                _data.read('users', name, (err, userData) => {
                    if (!err && userData) {
											 	// Total Calculation 
												for (type in _.order) {
													for(size in _.order[type] ) {
														total = total + _.order[type][size]	* _menu[type][size];					
													}	
												} 
												console.log("Total:", total); 
                        
                        var orderID = helpers.createRandomString(20)
                        // Build the order object
                        var order = {
                            "id": orderID,
                            "name": name,
                            "email": email,
														"address": userData.address,
														"order_summary": _.order,
                          
                            "total": total,
                            "has_payed": false
                        }

                        // Write the order object
                        _data.create('orders', orderID, order, (err) => {
                            if (!err) {
                                // Add to the user an array containing the orders he has made
                                userData.orders.push(orderID);

                                _data.update('users', name, userData, (err) => {
                                    if (!err) {
                                        callback(200);
                                    } else {
                                        callback(500, { 'Error': 'Could not update the user' });
                                    }
                                });
                            } else {
                                callback(500, { 'Error': 'Could not write the data' });
                            }
                        });

                    } else {
                        callback(400, { 'Error': 'Could not find the user' });
                    }
                });
            } else {
                callback(400, { 'Error': 'Token is invalid or missing' });
            }
        });
        // Check if the token is valid

    } else {
        callback(400, { 'Error': 'Missing required field' });
    }
};


// GET
// Required data: id
// Optional data: NONE

orders.get = (data, callback) => {
    // Check for the required data
    var _ = data.queryStringObject
    var id = typeof (_.id) == 'string' && _.id.trim().length == 20 ? _.id : false;

    if (id) {
        _data.read('orders', id, (err, orderData) => {
            if (!err && orderData) {
                var token = typeof (data.headers.token) == 'string' && data.headers.token.trim().length == 20 ? data.headers.token : false;
                orders.verifyToken(token, orderData.name, (tokenIsValid) => {
                    if (tokenIsValid) {
                        callback(200, orderData);
                    } else {
                        callback(400, { 'Error': 'Invalid token' });
                    }
                });
            } else {
                callback(400, { 'Error': 'Could not find the order' });
            }
        });
    } else {
        callback(400, { 'Error': 'Missing required data' });
    }
}


// PUT
// Required data: id
// Optional data: order_sumary

orders.put = (data, callback) => {
    // Check for the required data
    var _ = data.payload
    var id = typeof (_.id) == 'string' && _.id.trim().length == 20 ? _.id : false;

		// Check Optional data

			
		for (type in _.order) {
			for(size in _.order[type] ) {
				CheckOrder = typeof (_.order[type][size]) === 'number' &&  _.order[type][size] > 0 && CheckOrder != false ? _.order[type][size] : false;
				console.log(_.order[type][size], CheckOrder);		
			}
		}	
		
    
    if (id) {
        var token = typeof (data.headers.token) == 'string' && data.headers.token.trim().length == 20 ? data.headers.token : false;
        // Look for the order
        _data.read('orders', id, (err, orderData) => {
            if (!err && orderData && CheckOrder) {
                // Verify that the session is active
                orders.verifyToken(token, orderData.name, (tokenIsValid) => {
                    if (tokenIsValid) {
                        // Build the new order summary
												// recalculate the price
												var newTotal = 0;
												for (type in _.order) {
													for(size in _.order[type] ) {
														newTotal = newTotal + _.order[type][size]	* _menu[type][size];					
													}	
												} 
												console.log("newTotal:", newtotal); 
												
												orderData.order_summary = _.order;

                        
                        orderData.total = newTotal;


                        _data.update('orders', id, orderData, (err) => {
                            if (!err) {
                                callback(200);
                            } else {
                                callback(500, { 'Error': 'Could not update the file' });
                            }
                        })

                    } else {
                        callback(400, { 'Error': 'Session is expired please login again' });
                    }
                });
            } else {
                callback(400, { 'Error': 'Could not find the order' });
            }
        });
    } else {
        callback(400, { 'Error': 'Missing required fields' });
    }

    // Check optional data

};



// DELETE
// Required data: id
// Optional data: NONE
orders.delete = (data, callback) => {
    // Check for the required data
    var _ = data.queryStringObject
    var id = typeof (_.id) == 'string' && _.id.trim().length == 20 ? _.id : false;

    if (id) {
        // Look up for the order
        _data.read('orders', id, (err, orderData) => {
            if (!err && orderData) {
                // Allow only authenticated user to delete
                var token = typeof (data.headers.token) == 'string' && data.headers.token.trim().length == 20 ? data.headers.token : false;
                orders.verifyToken(token, orderData.name, (tokenIsValid) => {
                    if (tokenIsValid) {
                        _data.delete('orders',id, (err) => {
                            if (!err) {
                                _data.read('users', orderData.name, (err, userData) => {
                                    if (!err && userData) {
                                        // Look for the index of the element to be removed
                                        var index = userData.orders.findIndex(ids => ids  == id );
                                        // Remove the element from the orders Array of the userData object
                                        userData.orders.splice(index ,1);

                                        // Update the user
                                        _data.update('users', userData.name,userData, (err) => {
                                            if (!err) {
                                                callback(200);
                                            } else {
                                                callback(500,{'Error':'Could not update the user'});
                                            }
                                        });   
                                    } else {
                                        callback(400,{'Error':'Could not find the user'});
                                    }
                                });
                            } else {
                                callback(500,{'Error':'Error deleting the data'});
                            }
                        });
                    }
                });
            } else {
                callback(400, { 'Error': 'Missing required field' });
            }
        });
    }

};


// Verify if a given token id is currently valid for a given user
orders.verifyToken = function (id, name, callback) {
    // Lookup the token
    _data.read('tokens', id, function (err, tokenData) {
        if (!err && tokenData) {
            // Check that the token is for the given user and has not expired
            if (tokenData.name == name && tokenData.expires > Date.now()) {
                callback(true);
            } else {
                callback(false);
            }
        } else {
            callback(false);
        }
    });
};

orders.init = () => {
    _data.read('menu', 'menu', (err, menuObject) => {
        if (!err && menuObject) {
            _menu = menuObject
        } else {
            callback(400, { 'Error': 'Couldnt get the menu' });

        }
    });
}

orders.init();

// // Export
module.exports = orders;