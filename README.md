# Quick-Commerce Medicine Delivery Web Application

This is a quick-commerce web application for online medicine delivery built with the MERN stack (MongoDB, Express.js, React.js, Node.js).

## Features

- User registration and login
- Medicine product listing
- Add to cart and checkout (to be implemented)
- Real-time order tracking (to be implemented)
- Google Maps integration (to be implemented)
- Admin and delivery dashboards (to be implemented)
- Payment gateway integration (to be implemented)
- PWA-ready and mobile-friendly design

## Tech Stack

- Backend: Node.js, Express.js, MongoDB, Mongoose
- Frontend: React.js, Tailwind CSS, React Router
- Authentication: JWT (email/password), Google OAuth (to be implemented)
- APIs: Google Maps API (to be integrated)
- Payment: Razorpay/Stripe/UPI (to be integrated)

## Setup Instructions

### Backend

1. Navigate to the backend folder:
   ```
   cd backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file based on `.env.example` and add your MongoDB connection string and JWT secret.

4. Start the backend server:
   ```
   npm run dev
   ```

### Frontend

1. Navigate to the frontend folder:
   ```
   cd frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the frontend development server:
   ```
   npm start
   ```

## Notes

- This is an initial setup with basic user authentication and product listing.
- Further features like cart, orders, admin panel, delivery tracking, payment integration, and notifications will be implemented incrementally.
- Google Maps API keys and payment gateway keys need to be added for full functionality.

## License

MIT License
