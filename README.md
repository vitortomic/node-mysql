# node-mysql
simple crud api made in order to try out node with relational database

Create:

POST /users HTTP/1.1
Host: localhost:9000
Content-Type: application/json
Cache-Control: no-cache
Postman-Token: 064fe8fb-0037-bee8-4adb-0e4759035d0c

{
	"firstName": "Vitor",
	"lastName": "Tomic",
	"email": "vitor@gmail.com"
}

Get:
/users/:id

GET /users/1 HTTP/1.1
Host: localhost:9000
Cache-Control: no-cache
Postman-Token: ce58ef43-b391-201b-eb43-b58f571b7f3f

Delete:
/users/:id

DELETE /users/18 HTTP/1.1
Host: localhost:9000
Cache-Control: no-cache
Postman-Token: 3cbb1a30-1338-cae1-633e-ee29231aba64
Content-Type: multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW

Update:

/users/:id

PUT /users/1 HTTP/1.1
Host: localhost:9000
Content-Type: application/json
neki: 1234
Cache-Control: no-cache
Postman-Token: fb3b5924-e8f5-c9dd-5975-74ee455e6b17

{
	"firstName": "Vitor",
	"lastName": "Tomic",
	"email": "grandvitara@gmail.com"
}

Search:

/users?param1=value1&param2=value2 

GET /users?firstName=Vitor&amp;email=grandvitara% HTTP/1.1
Host: localhost:9000
Content-Type: application/json
neki: 1234
Cache-Control: no-cache
Postman-Token: f1a405b9-6be3-2158-e5e4-a30bb33e0850

