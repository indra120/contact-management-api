# Authentication API Specification

## Register

### Endpoint:

```http
POST /api/auth/register
```

### Request Body:

```json
{
  "username": "john_doe",
  "password": "johndoe123",
  "name": "John Doe"
}
```

### Response

#### Success :

```json
{
  "data": {
    "username": "john_doe",
    "name": "John Doe"
  }
}
```

#### Error :

```json
{
  "errors": "Username already registered!"
}
```

## Login

### Endpoint:

```http
POST /api/auth/login
```

### Request Body:

```json
{
  "username": "john_doe",
  "password": "johndoe123"
}
```

### Response

#### Success :

```json
{
  "data": {
    "token": "unique-token"
  }
}
```

#### Error :

```json
{
  "errors": "Username or password wrong!"
}
```

## Logout

### Endpoint:

```http
DELETE /api/auth/logout
```

### Headers:

```json
{
  "Authorization": "19dfc22d-4545-45a9-9b36-ec0fc3fee291" // token
}
```

### Response

#### Success :

```json
{
  "data": "OK"
}
```

#### Error :

```json
{
  "errors": "Unauthorized"
}
```
