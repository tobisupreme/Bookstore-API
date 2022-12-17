## API STRUCTURE

```json=
@route GET / (unprotected) | Homepage route
@route GET /login (unprotected) | Authenticate a user
@route GET /logout (unprotected) | Logout a user
```

### Book API Routes
```json=
@route GET /api/v1/books (unprotected) | Return all books
@route POST /api/v1/books (protected) | Add a book
@route PATCH /api/v1/books/:id (protected) | Update a book
@route DELETE /api/v1/books/:id (protected) | Delete a book
@route GET /api/v1/books/:id (unprotected) | Get a book
```

### Author API Routes
```json=
@route GET /api/v1/authors (unprotected) | Return all authors
@route POST /api/v1/authors (protected) | Add an author
@route PATCH /api/v1/authors/:id (protected) | Update an author
@route DELETE /api/v1/authors/:id (protected) | Delete author
@route GET /api/v1/authors/:id (unprotected) | Get author
```

### Other Middleware
- Rate limiting
- Security middleware
- Good Logging
- Validation
