# Health Service API – Setup & Run Instructions

This guide will help you set up and run the **Health Service API** project. It covers cloning the repository, installing dependencies, configuring environment variables, and testing the API using Postman.

---

## Requirements

Ensure you have the following installed on your machine:  
- **Node.js** (version 12 or later) – Download Node.js [here](https://nodejs.org/en/download/)  
- **MongoDB Atlas** (or a local MongoDB instance) – Sign up for MongoDB Atlas [here](https://www.mongodb.com/cloud/atlas)  
- **Git** (to clone the repository) – Download Git [here](https://git-scm.com/)

---

## 1. Clone the Repository

First, clone the project repository from GitHub to your local machine. Open your terminal (command prompt or any terminal app) and run the following command:  

```bash
git clone https://github.com/yourusername/health-service-api.git
```  

Replace `yourusername` with the actual GitHub username. This will download the project files to your local machine.

---

## 2. Navigate to the Project Directory

Once the repository is cloned, navigate into the project directory:  

```bash
cd health-service-api
```

---

## 3. Install Dependencies

Before running the project, you need to install the necessary dependencies. Make sure you're inside the project folder and then run:  

```bash
npm install
```

---

## 4. Set Up MongoDB Atlas (or Local MongoDB)

### MongoDB Atlas

1. If you don’t have an account, sign up for MongoDB Atlas [here](https://www.mongodb.com/cloud/atlas).  
2. Create a new cluster and a new database within MongoDB Atlas.  
3. After setting up the database, click **Connect** and choose 'Connect your application'.  
4. Copy the connection string. It should look something like this:  

```
mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority
```

### Local MongoDB (Optional)

If you prefer using a local MongoDB instance, ensure it's installed and running on your machine. You can use the connection string:  

```bash
mongodb://localhost:27017/<dbname>
```

---

## 5. Configure Environment Variables

In the root of the project directory, create a new file called `.env`. This file will store your MongoDB connection string and the port on which your application will run.  

In the `.env` file, add the following:  

```bash
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority
PORT=5000
```  

- Replace `<username>`, `<password>`, and `<dbname>` with your actual MongoDB credentials and database name.  
- If using a local MongoDB, set the `MONGO_URI` like this:  

```bash
MONGO_URI=mongodb://localhost:27017/healthApp
```

---

## 6. Start the Application

Once the environment variables are set, you can start the application. In the terminal, run:  

```bash
npm start
```  

If everything is set up correctly, you should see something like this in the terminal:  

```
Server running on port 5000
Connected to MongoDB
```

---

## 7. Testing the API with Postman

Now that the application is running, you can test the API endpoints using Postman.

### Create a New Service

- **Method**: `POST`  
- **URL**: `http://localhost:5000/api/services`  
- **Body**:  

```json
{
  "name": "General Checkup",
  "price": 50,
  "description": "A routine health checkup"
}
```

### Get All Services

- **Method**: `GET`  
- **URL**: `http://localhost:5000/api/services`  

### Update a Service

- **Method**: `PUT`  
- **URL**: `http://localhost:5000/api/services/{service_id}`  
- **Body**:  

```json
{
  "name": "Updated Service Name",
  "price": 100,
  "description": "Updated description"
}
```  
Replace `{service_id}` with the actual ID of the service you want to update.

### Delete a Service

- **Method**: `DELETE`  
- **URL**: `http://localhost:5000/api/services/{service_id}`  
Replace `{service_id}` with the actual ID of the service you want to delete.

---

## 8. Stopping the Application

To stop the application, press `Ctrl + C` in the terminal where the application is running.

---

## 9. Project Structure

Here’s an overview of the important files and folders in the project:

```
health-service-api/
│  
├── models/  
│   └── Service.js          # Mongoose schema for service data  
│  
├── routes/  
│   └── service.js          # Routes for service CRUD operations  
│  
├── .env                    # Environment variables (created by you)  
├── .gitignore              # Files and folders to ignore in Git  
├── index.js                # Main server file  
├── package.json            # Project metadata and dependencies  
├── README.md               # Project instructions (this file)  
└── package-lock.json       # Exact versions of dependencies  
```

---

## 10. Troubleshooting

- **MongoDB connection issues**: Double-check your connection string in the `.env` file. Ensure MongoDB Atlas allows connections from your IP or that your local MongoDB instance is running.  
- **Port conflict**: If port `5000` is in use, modify the `PORT` in the `.env` file to another port number (e.g., `PORT=4000`).

---


