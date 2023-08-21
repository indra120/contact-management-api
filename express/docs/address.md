# Address API Specification

### Headers

```json
{
  "Authorization": "19dfc22d-4545-45a9-9b36-ec0fc3fee291" // token
}
```

## Create new Address

### Endpoint

```http
POST /api/contacts/:contactId/addresses
```

### Request Body

```json
{
  "street": "Aki Balak",
  "city": "Tarakan",
  "province": "North Kalimantan",
  "country": "Indonesia",
  "postalCode": "77111"
}
```

### Response

#### Success

```json
{
  "data": {
    "id": 69,
    "street": "Aki Balak",
    "city": "Tarakan",
    "province": "North Kalimantan",
    "country": "Indonesia",
    "postalCode": "77111"
  }
}
```

#### Error

```json
{
  "errors": "Country is required!"
}
```

## Update Existing Address

### Endpoint

```http
PUT /api/contacts/:contactId/addresses/:addressId
```

### Request Body

```json
{
  "street": "Yos Sudarso",
  "city": "Tarakan",
  "province": "North Kalimantan",
  "country": "Indonesia",
  "postalCode": "77111"
}
```

### Response

#### Success

```json
{
  "data": {
    "id": 1,
    "street": "Yos Sudarso",
    "city": "Tarakan",
    "province": "North Kalimantan",
    "country": "Indonesia",
    "postalCode": "77111"
  }
}
```

#### Error

```json
{
  "errors": "Country is required!"
}
```

## Get Address

### Endpoint

```http
GET /api/contacts/:contactId/addresses/:addressId
```

### Response

#### Success

```json
{
  "data": {
    "id": 69,
    "street": "Aki Balak",
    "city": "Tarakan",
    "province": "North Kalimantan",
    "country": "Indonesia",
    "postalCode": "77111"
  }
}
```

#### Error

```json
{
  "errors": "contact is not found!"
}
```

## List Addresses

### Endpoint

```http
GET /api/contacts/:contactId/addresses
```

### Response

#### Success

```json
{
  "data": [
    {
      "id": 69,
      "street": "Aki Balak",
      "city": "Tarakan",
      "province": "North Kalimantan",
      "country": "Indonesia",
      "postalCode": "77111"
    },
    {
      "id": 420,
      "street": "Aki Balak",
      "city": "Tarakan",
      "province": "North Kalimantan",
      "country": "Indonesia",
      "postalCode": "77111"
    }
  ]
}
```

#### Error

```json
{
  "errors": "contact is not found!"
}
```

## Delete Address

### Endpoint

```http
DELETE /api/contacts/:contactId/addresses/:addressId
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
  "errors": "address is not found!"
}
```
