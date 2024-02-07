# MiddleWare - it is an intermediary, it is used to execute next thing which will happen , by using next parameter

Request -----> MIDDLEWARE ------> Response

In express - MW in express that comes into play after server receive the request and before the response is sent to client.

- They can do two things like one is send response or can pass control to another MW / operations. If no one is not done then link will stuck , and if send response then don't allow any other operations to perform ,not even different routes

- They can access res,req objects
- Chaining is possible. means one mw func can pass the control to another mw func. 
- They can send request by self and stop chaining (or stop next function to take control)

- Execute any code.
- Make changes to the request and the response objects.
- End the request-response cycle.
- Call the next middleware function in the stack.

- Common MW functions:

methodOverride
bodyParser
express.static
express.urlencoded

