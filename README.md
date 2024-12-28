# Imagify - AI-Powered Image Creation and Management

## Overview
Imagify is an innovative application that leverages AI to create stunning images based on user prompts and provides seamless payment integration using Razorpay. This README provides detailed steps to set up the application locally.

---

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js and npm
- MongoDB account and project setup
- Clipdrop API account
- Razorpay account

---

## Getting Started

### 1. Clone the Repository
```bash
# Clone the repository to your local machine
git clone <repository_url>

# Navigate to the project folder
cd <repository_folder>
```

---

### 2. Setting Up the Server

1. **Navigate to the server folder:**
   ```bash
   cd server
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
    Edit the `.env` file in the `server` folder and define the following variables:

   ```plaintext
   MONGODB_URI="mongodb+srv://<Username>:<db_password>@cluster0.ndilt.mongodb.net"
   CLIPDROP_API=<Your_Clipdrop_API_Key>
   JWT_SECRET=<Your_JWT_Secret_Token>
   RAZORPAY_KEY_ID=<Your_Razorpay_Key_ID>
   RAZORPAY_KEY_SECRET=<Your_Razorpay_Key_Secret>
   ```

   - **MONGODB_URI:** Obtain the connection link by creating a MongoDB account, setting up a project named `Imagify`, and creating a new cluster.
   - **CLIPDROP_API:** Create an account in [Clipdrop](https://clipdrop.co/) and generate an API key.
   - **JWT_SECRET:** Use any secure string as your JWT secret.
   - **RAZORPAY_KEY_ID** and **RAZORPAY_KEY_SECRET:** Create a new account in Razorpay and Generate these tokens from the test mode in your Razorpay account.

4. **Run the server:**
   ```bash
   npm start
   ```

---

### 3. Setting Up the Client

1. **Navigate to the client folder:**
   ```bash
   cd client
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Edit the `.env` file in the `client` folder and define the following variables:

   ```plaintext
   VITE_RAZORPAY_KEY_ID=<Your_Razorpay_Key_ID>
   VITE_BACKEND_URL=<Your_Backend_URL>
   ```

4. **Run the client:**
   ```bash
   npm run dev
   ```

---

## Running the Application

1. Open two terminal windows:
   - In the first terminal, run the server as described above.
   - In the second terminal, run the client as described above.

2. Access the application in your browser at the provided URL (usually `http://localhost:3000` for the client).

---

## Additional Notes

- Ensure all environment variables are properly configured before starting the server and client.
- For production, replace the test Razorpay keys with live keys.

---


## Contribution
Contributions are welcome! Please create a pull request or open an issue for any improvements or bug fixes.

---

## Contact
For queries, reach out at saitirupathimoru2129@gmail.com.

