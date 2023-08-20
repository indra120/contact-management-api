# Contact API Specification

## Create new Contact

### Endpoint

```http
POST /api/contacts
```

### Headers

```json
{
  "Authorization": "19dfc22d-4545-45a9-9b36-ec0fc3fee291" // token
}
```

### Request Body

```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@doe.com",
  "phone": "6942013666"
}
```

### Response

#### Success

```json
{
  "data": {
    "id": 69,
    "firstName": "John",
    "lastName": "Doe",
    "email": "john@doe.com",
    "phone": "6942013666"
  }
}
```

#### Error

```json
{
  "errors": "Email is not valid format!"
}
```

## Get Contact by Id

### Endpoint

```http
GET /api/contacts/:id
```

### Headers

```json
{
  "Authorization": "19dfc22d-4545-45a9-9b36-ec0fc3fee291" // token
}
```

### Response

#### Success

```json
{
  "data": {
    "id": 69,
    "firstName": "John",
    "lastName": "Doe",
    "email": "john@doe.com",
    "phone": "6942013666"
  }
}
```

#### Error

```json
{
  "errors": "Email is not valid format!"
}
```

## Update Existing Contact

### Endpoint

```http
PUT /api/contacts/:id
```

### Headers

```json
{
  "Authorization": "19dfc22d-4545-45a9-9b36-ec0fc3fee291" // token
}
```

### Request Body

```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@doe.com",
  "phone": "6942013666"
}
```

### Response

#### Success

```json
{
  "data": {
    "id": 69,
    "firstName": "John",
    "lastName": "Doe",
    "email": "john@doe.com",
    "phone": "6942013666"
  }
}
```

#### Error

```json
{
  "errors": "Email is not valid format!"
}
```

## Search Contact

### Endpoint

```http
GET /api/contacts
```

### Headers

```json
{
  "Authorization": "19dfc22d-4545-45a9-9b36-ec0fc3fee291" // token
}
```

### Query params

- name: Search by firstName or lastName, using like, optional
- email: Search by email using like, optional
- phone: Search by phone using like, optional
- page: number of page, default 1
- size: size per page, default 10

### Response

#### Success

```json
{
  "data": [
    {
      "id": 69,
      "firstName": "John",
      "lastName": "Doe",
      "email": "john@doe.com",
      "phone": "6942013666"
    },
    {
      "id": 420,
      "firstName": "John",
      "lastName": "Doe",
      "email": "john@doe.com",
      "phone": "6942013666"
    }
  ],
  "pagination": {
    "page": 1,
    "totalPage": 3,
    "totalItem": 30
  }
}
```

#### Error

```json
{
  "errors": "Contact not found!"
}
```

## Delete Contact

### Endpoint

```http
DELETE /api/contacts/:id
```

### Headers

```json
{
  "Authorization": "19dfc22d-4545-45a9-9b36-ec0fc3fee291" // token
}
```

### Response

#### Success

```json
{
  "data": "OK"
}
```

#### Error

```json
{
  "errors": "Contact not found!"
}
```
