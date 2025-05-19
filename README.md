# **Manipal Edu: An EdTech Platform**

Manipal Edu is a fully functional EdTech (Educational Technology) platform that enables users to create, consume, and rate educational content. The platform is built using the MERN (MongoDB, Express.js, React.js, Node.js) stack.

---

## **Table of Contents**

* Introduction
* System Architecture
* Front-end
* Back-end
* Database
* Architecture Diagram
* API Design
* Installation
* Configuration
* Usage

---

## **Introduction**

**Manipal Edu** aims to provide a seamless and interactive learning experience for students, making education more accessible and engaging. Additionally, the platform allows instructors to showcase their expertise and connect with learners across the globe.

In the following sections, we cover the technical implementation, including system architecture, API design, setup instructions, and potential enhancements.

---

## **System Architecture**

The Manipal Edu platform consists of three main components:

* **Front-end (Client)**
* **Back-end (Server)**
* **Database (Data Layer)**

The architecture follows a **client-server** model, where the front-end interacts with the back-end via **RESTful API** calls, and the back-end interacts with the database for data persistence.

---

## **Front-end**

The front-end is developed using **React.js** to create a dynamic and responsive user experience. It communicates with the back-end through HTTP APIs and is styled using **Tailwind CSS**. **Redux** is used for efficient global state management.

### **Pages for Students**

* **Homepage**: Overview of the platform with navigation links.
* **Course List**: Displays available courses with details and ratings.
* **Wishlist**: Lists courses added by the student.
* **Cart Checkout**: Enables payment and course enrollment.
* **Course Content**: Course-specific materials and videos.
* **User Details**: Displays student account info.
* **Edit Details**: Allows updates to student profile.

### **Pages for Instructors**

* **Dashboard**: Overview of created courses, ratings, and feedback.
* **Insights**: Visual analytics like views, enrollments, and engagement.
* **Course Management**: Interface to create, update, or delete courses and set pricing.
* **Edit Profile**: View and update personal and professional info.

### **Front-end Tools and Libraries**

* **React.js**
* **Redux**
* **Tailwind CSS**
* **Axios** (for API requests)
* **React Router DOM** (for navigation)

---

## **Back-end**

The back-end of **Manipal Edu** is built using **Node.js** and **Express.js**. It serves as the core API layer that handles all business logic and database interactions.

### **Key Features**

* **User Authentication & Authorization**: Sign-up/login, OTP verification, and password reset.
* **Course Management**: CRUD operations for courses and media.
* **Payment Integration**: **Razorpay** is used to securely handle course payments.
* **Media Management**: All course media is stored and managed via **Cloudinary**.
* **Markdown Support**: Document content can be created in Markdown format for better rendering.

### **Back-end Libraries and Tools**

* **Node.js**
* **Express.js**
* **MongoDB**
* **Mongoose** (ODM)
* **Bcrypt** (password hashing)
* **JWT (JSON Web Tokens)** for secure authentication

---

## **Database**

The platform uses **MongoDB**, a NoSQL document-based database, which offers flexibility and scalability for managing diverse data structures.

### **Database Schemas**

* **Student Schema**: Name, email, hashed password, enrolled courses
* **Instructor Schema**: Name, email, hashed password, courses created
* **Course Schema**: Title, description, instructor, media content, ratings

---

## **Architecture Diagram**

Below is a high-level representation of the architecture:

```
[ Front-end (React.js) ]
        |
        ↓
[ Back-end (Node.js + Express.js) ]
        |
        ↓
[ Database (MongoDB) ]
        |
        ↓
[ Cloud Services (Cloudinary, Razorpay) ]
```

---

## **API Design**

**Manipal Edu** uses **RESTful APIs** with the following standards:

* **GET**: Fetch data
* **POST**: Create data
* **PUT**: Update data
* **DELETE**: Remove data
* **Data Format**: JSON

All API endpoints are documented in the project's API documentation file.

---

## **Installation**

```bash
# Clone the repository
git clone https://github.com/username/repo.git

# Navigate to the project root
cd manipal-edu

# Install back-end dependencies
npm install
```

---

## **Configuration**

1. Create a `.env` file in the root directory.
2. Add the following environment variables:

```
MONGODB_URI=<your-mongodb-connection-url>
JWT_SECRET=<your-jwt-secret-key>
CLOUDINARY_API_KEY=<your-cloudinary-api-key>
CLOUDINARY_SECRET=<your-cloudinary-secret>
RAZORPAY_KEY_ID=<your-razorpay-key-id>
RAZORPAY_KEY_SECRET=<your-razorpay-secret>
```

---

## **Usage**

### **Start the Back-end Server**

```bash
npm start
```

### **Start the Front-end Client**

```bash
cd client
npm install
npm start
```

### **Access the App**

Visit: `http://localhost:3000`

