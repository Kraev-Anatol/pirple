
The order of pizza is formed in the order.js file.
The JSON file with an approximate form of the order looks so:
{   
	"password": "addpassword",
	"name": "Anatol",
	"email": "test@mail.ru",
	"order" : {
		"Vegetarian" : 
			{
				"medium" : 2			
			},
	
		"Buffalo_chicken" : 
			{
				"large" : 1,
				"medium" : 2			
			},
		"Hawaiian" : 
			{
				"large" : 2,
				"medium" : 1,
				"small" : 1
			}
	}	
}
The operating token - must be included in request's header.

Data for registration in "Stripe" and "Mailgun" are stored in the config.js file

