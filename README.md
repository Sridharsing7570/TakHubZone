# TaskHubZone Backend

This is the backend for the TaskHubZone application, which provides APIs for user management, job management, and more.

## Project Structure

```
.env
.gitignore
generateSecret.js
index.js
package.json
Config/
    db.js
    environment.js
    logger.js
    passport-jwt.js
Controllers/
    applicationController.js
    facebookauthController.js
    firstController.js
    googleauthController.js
    jobMediaController.js
    jobsController.js
    profileContoller.js
    userController.js
docs/
    application.swagger.js
    job.swagger.js
    profile.swagger.js
    swaggerDocs.js
    user.swagger.js
logs/
    combined.log
    error.log
Models/
    ApplicationSchema.js
    CategorySchema.js
    ...
Routes/
    applicationRoutes.js
    googleAuth.js
    jobMediaRoutes.js
    jobRoutes.js
    index.js
    ProfileRoutes.js
    userRoutes.js
```

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/your-repo/taskhubzone-backend.git
    cd taskhubzone-backend
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Create a `.env` file in the root directory and add your environment variables:
    ```env
    # Development
    PORT_DEV=8050
    MONGO_URL_DEV=your_mongo_url_dev
    MAIL_FROM_DEV=your_mail_from_dev
    MAILER_ID_DEV=your_mailer_id_dev
    MAILER_PASS_DEV=your_mailer_pass_dev
    GOOGLE_CLIENT_ID_DEV=your_google_client_id_dev
    GOOGLE_CLIENT_SECRET_DEV=your_google_client_secret_dev
    JWT_SECRET_DEV=your_jwt_secret_dev
    CLIENT_URL_DEV=http://localhost:5431
    SERVER_URL_DEV=http://localhost:8050

    # Production
    PORT_PROD=8008
    MONGO_URL_PROD=your_mongo_url_prod
    MAIL_FROM_PROD=your_mail_from_prod
    MAILER_ID_PROD=your_mailer_id_prod
    MAILER_PASS_PROD=your_mailer_pass_prod
    GOOGLE_CLIENT_ID_PROD=your_google_client_id_prod
    GOOGLE_CLIENT_SECRET_PROD=your_google_client_secret_prod
    JWT_SECRET_PROD=your_jwt_secret_prod
    ```

### Running the Project

#### Development

To start the development server, run:
```sh
npm run start
```

#### Production

To start the production server, run:
```sh
npm run start-prod
```

### API Documentation

The API documentation is generated using Swagger. You can access it at:
```
http://localhost:8001/api-docs
```

## Project Structure

- `Config/`: Configuration files for database, environment, logger, and passport strategies.
- `Controllers/`: Controllers for handling API requests.
- `docs/`: Swagger documentation files.
- `logs/`: Log files.
- `Models/`: Mongoose schemas for the database models.
- `Routes/`: Express routes for the API endpoints.

## License

This project is licensed under the ISC License.