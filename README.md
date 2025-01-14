# 💬 Chat App

A **real-time chat application** that allows users to seamlessly communicate with each other. Designed with scalability, security, and user-friendliness in mind, this app leverages modern web technologies to deliver a smooth messaging experience.

---

## 🚀 Features

- **Real-Time Messaging**: Instant communication powered by WebSockets.  
- **User Authentication**: Secure login and registration system to protect user data.  
- **Responsive Design**: Fully optimized for both desktop and mobile devices.  
- **Chat Rooms**: Create and join public or private chat rooms for focused conversations.  
- **User Presence**: See who’s online and available for chat in real-time.  

---

## 🛠️ Tech Stack

- **Frontend**: HTML, CSS, JavaScript  
- **Backend**: Node.js, Express.js  
- **Database**: MongoDB for storing user data and chat logs  
- **Real-Time Communication**: Socket.IO for live updates  
- **Authentication**: JWT (JSON Web Tokens) for secure user sessions  

---

## 📦 Setup and Installation

### Prerequisites:
- Install Node.js from [here](https://nodejs.org/).
- Set up MongoDB locally or use a cloud-based instance like [MongoDB Atlas](https://www.mongodb.com/atlas).

### Steps to Set Up:
1. **Clone the repository:**
   ```bash
   git clone https://github.com/Madhur-Prakash/chat-app.git
   cd chat-app
   ```
2. **Set up environment variables:**

- Create a .env file in the root directory.
- Add the following configuration:
```env
PORT=5001
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_secret_key
CLOUDINARY_API_KEY=your_API_key
CLOUDINARY_API_SECRET=your_cloudinary_secret_key
```

3. **Build the app:**
```bash
npm run build
```


4. **Start the development server:**
```bash
npm start
```
5. **Access the application: Open your browser and navigate to:**
```plaintext
http://localhost:5173
```

## 🌟 Acknowledgements
Special thanks to the developer community for their tutorials, documentation, and open-source projects, which were a constant source of learning and inspiration.

If you have any feedback or suggestions to improve this project, feel free to open an issue or contribute via pull requests.