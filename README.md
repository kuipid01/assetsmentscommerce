#Flex Buy E-commerce Website

This is a full-stack e-commerce website built with Vite, React, Tailwind CSS, MongoDB, and Express.js.

## Features

- User authentication (Login/Register)
- Product listing
- Shopping cart
- Checkout process
- User dashboard

## Technologies Used

- **Frontend**: Vite, React, Tailwind CSS
- **Backend**: Express.js, MongoDB

## Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/en/)
- [MongoDB](https://www.mongodb.com/try/download/community)

## Getting Started

1. **Clone the repository**

    ```bash
    git clone https://github.com/your-username/ecommerce-website.git
    cd ecommerce-website
    ```

2. **Install dependencies**

    ```bash
    # For the backend
    cd server
    npm install

    # For the frontend
    cd ../client
    npm install
    ```

3. **Set up environment variables**

    Create a `.env` file in the `server` directory with the following content:

    ```env
    MONGO_URI=mongodb://localhost:27017/your-database-name
    JWT_SECRET=your_jwt_secret
    ```

4. **Run the development servers**

    ```bash
    # In the server directory
    cd server
    npm run dev

    # In another terminal, run the frontend
    cd ../client
    npm run dev
    ```

5. **Access the application**

    Open your browser and go to `http://localhost:3000`

## Usage

### Login

1. Register a new user.
2. Login with the registered credentials.
3. Access the user dashboard.

### Dashboard

- View your profile
- View order history
- Manage account settings

## Contributing

Contributions are welcome! Please fork this repository and submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Note**: Replace `your-username`, `your-database-name`, and `your_jwt_secret` with your actual GitHub username, MongoDB database name, and JWT secret key respectively.
