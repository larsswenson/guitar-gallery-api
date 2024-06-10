# Guitar Gallery API

This is the backend API for the Guitar Gallery app. 
It provides endpoints for managing guitar information including adding, editing, deleting, and fetching guitars.

## Table of Contents

- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Endpoints](#endpoints)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/larsswenson/guitar-gallery-api.git
    ```

2. Navigate into the project directory:

    ```bash
    cd guitar-gallery-api
    ```

3. Install the dependencies:

    ```bash
    npm install
    ```

## Running the Application

1. Start the server:

    ```bash
    npm run start
    ```

2. The server will be running at `http://localhost:3000`.

## Endpoints

- `GET /guitars`: Fetch all guitars.
- `GET /guitars/:id`: Fetch a single guitar by ID.
- `POST /guitars`: Add a new guitar.
- `PUT /guitars/:id`: Update an existing guitar by ID.
- `DELETE /guitars/:id`: Delete a guitar by ID.

## Technologies Used

- **Node.js**
- **NestJS**
- **TypeScript**
- **Express**
- **Axios**

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Create a new Pull Request.

## License

This project is licensed under the MIT License.

