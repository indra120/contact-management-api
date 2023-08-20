# User API Specification

## Update User Data

### Endpoint:

```http
PATCH /api/users/current
```

### Headers:

```json
{
  "Authorization": "19dfc22d-4545-45a9-9b36-ec0fc3fee291" // token
}
```

### Request Body:

```json
{
  "name": "John Cena", // optional
  "password": "johncena69" // optional
}
```

### Response

#### Success :

```json
{
  "data": {
    "username": "john_doe",
    "name": "John Cena"
  }
}
```

#### Error :

```json
{
  "errors": "Name length max 100!"
}
```

## Get User Data

### Endpoint:

```http
GET /api/users/current
```

### Headers:

```json
{
  "Authorization": "19dfc22d-4545-45a9-9b36-ec0fc3fee291" // token
}
```

### Response

#### Success:

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
  "errors": "Unauthorized!"
}
```
