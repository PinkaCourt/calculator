# API

---

## Create a new user

**URL** : `/user/create`
**Method** : `POST`
**Auth required** : No
**Body** :

```json
{ "email": "[valid email address]", "password": "[plain text password]" }
```

**Data example**

```json
{
  "username": "iloveauth@example.com",
  "password": "abcd1234"
}
```

#### Success Response

**Code** : `200 OK`

**Content example**

```json
{
  "message": "user created"
}
```

#### Error Response

**Condition** : If 'email' or 'password' is blank.

**Code** : `400 BAD REQUEST`

**Content** :

```json
{
  "error": "No login or password"
}
```

**Condition** : If no user was found.

**Code** : `404 NOT FOUND`

**Content** :

```json
{
  "error": "User not found"
}
```

**Condition** : If password doesn't match.

**Code** : `403 FORBIDDEN`

**Content** :

```json
{
  "error": "user not authorized"
}
```

---

## Authenticate user

**URL** : `/user/login`
**Method** : `POST`
**Auth required** : No
**Body** :

```json
{ "email": "[valid email address]", "password": "[plain text password]" }
```

#### Success Response

**Code** : `200 OK`

**Content example**

```json
{
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjIyNTYwMzUzLCJleHAiOjE2NTQwOTYzNTN9.4Z-TT-Ii-t-QSmQiZGHvqFKzS4DkXm83iRuPYLglu0s",
  "auth": true,
  "avatar": null,
  "email": "iloveauth@example.com",
  "name": null
}
```

#### Error Response

**Condition** : If 'email' or 'password' is blank.

**Code** : `400 BAD REQUEST`

**Content** :

```json
{
  "error": "No login or password"
}
```

**Condition** : If there is a DB error.

**Code** : `500 INTERNAL SERVER ERROR`

**Content** :

```json
{
  "error": "Error creating user"
}
```

## Get user data items

**URL** : `/user/data`
**Method** : `GET`
**Auth required** : Yes
**Params** :

```ts
userId: string;
```

**Headers** :

```json
{
  "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjIyNTYwMzUzLCJleHAiOjE2NTQwOTYzNTN9.4Z-TT-Ii-t-QSmQiZGHvqFKzS4DkXm83iRuPYLglu0s"
}
```

**Data example**

```text
/user/data?userId=iloveauth@example.org
```

#### Success Response

**Code** : `200 OK`

**Content example**

```json
{
  "items": [
    {
      "ans": "1.53198966856604",
      "date": 1616467357646,
      "ds": "16.0569999856116",
      "id": 2000,
      "userId": "iloveauth@example.org",
      "wtl": "79.8716398841907"
    },
    {
      "ans": "1.73174747138207",
      "date": 1619261038846,
      "ds": "7.56342636621635",
      "id": 1999,
      "userId": "iloveauth@example.org",
      "wtl": "40.4906970800925"
    }
  ],
  "message": "2 records found"
}
```

#### Error Response

**Condition** : If no userId specified

**Code** : `400 BAD REQUEST`

**Content** :

```json
{
  "error": "userId not specified"
}
```

**Condition** : If no token header present

**Code** : `400 BAD REQUEST`

**Content** :

```json
{
  "error": "No token provided"
}
```
