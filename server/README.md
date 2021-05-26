# API

### Create a new user

`POST /user/create`

##### body:

`{ email: string, password: string }`

### Authenticate user

`POST /user/login`

##### body:

`{ email: string, password: string }`

### Get user data items

`GET /user/data`

##### query params:

`userId: string`
