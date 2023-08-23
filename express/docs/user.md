# User API Specification

### Headers

```json
{
  "Authorization": "19dfc22d-4545-45a9-9b36-ec0fc3fee291" // token
}
```

## Get User Data

### Endpoint

```http
GET /api/users/current
```

### Response

#### Success

```json
{
  "data": {
    "username": "john_doe",
    "name": "John Doe"
  }
}
```

#### Error

```json
{
  "errors": "Unauthorized!"
}
```

## Update User Data

### Endpoint

```http
PATCH /api/users/current
```

### Request Body

```json
{
  "name": "John Cena", // optional
  "password": "johncena69" // optional
}
```

### Response

#### Success

```json
{
  "data": {
    "username": "john_doe",
    "name": "John Cena"
  }
}
```

#### Error

```json
{
  "errors": "Name length max 100!"
}
```