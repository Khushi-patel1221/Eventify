## Eventify ✨

Eventify is a dynamic event management platform built with the MERN stack, designed to simplify the process of booking venues for your events. Whether you are planning a birthday party, a wedding, or a , Eventify ensures a smooth and efficient experience. Users can easily book halls through our streamlined contact system, ensuring that every event is organized with precision and ease. 

## Features 🎯

- Event Booking: Organizers can log in to book venues for their events by submitting detailed information through the contact page.

- Newsletter Subscription: Users can subscribe to newsletters by submitting their email addresses, keeping them updated with the latest events and announcements.

- Functionality Overview: Users can view all available functionalities on the platform, ensuring they are aware of all features and how to utilize them.

- User-Specific Access: Organizers can book multiple venues, while attendees can register for multiple events.

- Data Storage: All booking details submitted through the contact page are securely stored in a MongoDB database, ensuring data integrity and accessibility for organizers.

## Technologies💻
## Frontend:

ReactJS: Utilized for building the frontend to ensure efficient UI rendering, interactivity, and responsiveness for organizers .

CSS: Custom styling using CSS to tailor the design and layout of Eventify according to usability requirements.
## Backend:

Node.js: Powers the backend of Eventify, handling server-side logic and API integrations effectively.

Express: Facilitates routing and middleware management, enabling seamless communication between the frontend and backend of Eventify.

## Database:

MongoDB: Manages the backend data for Eventify, ensuring efficient storage and retrieval of event-related information. Stores data related to events, Event subject, organizers, and message.

## Installation🚀
## Backend
Clone the repository:

git clone https://github.com/Khushi-patel1221/Eventify.git 

cd Eventify

Navigate to the backend directory: cd backend

Install dependencies: npm install

Update MongoDB configuration:

Open backend/src/.env and modify the following :

mongodb+srv://:@/?retryWrites=true&w=majority&appName= Replace the following placeholders in your configuration files:

: Your MongoDB username : Your MongoDB password : The MongoDB cluster URL : The MongoDB database name : Optional. The name of your application

Start the backend server: npm start
Frontend
Navigate to the frontend directory: cd frontend

Install dependencies: npm install

3.Start the frontend development server: npm start

4.Open your browser and navigate to http://localhost:5173 to view the application.