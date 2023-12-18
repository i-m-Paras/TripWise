# Tour Guider Connector

Tour Guider Connector is a Full Stack Web Application developed to bridge the gap between tourists and tour guides, creating a seamless connection for enriching travel experiences. This project was created as part of the BYTE Hackathon in March 2023, with a focus on providing a user-friendly platform for connecting tourists with knowledgeable and local tour guides.


See the website here: https://drive.google.com/file/d/1uaoD5jiY1Q5E4ONkGJ3UrvctiKKNCZ48/view

## Features

- **User Authentication:** Users can create accounts, log in, and manage their profiles, providing a personalized experience.
- **Tour Listings:** Tourists can explore a variety of available tours and find the one that suits their interests and preferences.
- **Booking System:** Facilitates the booking process, allowing users to request and confirm tours with tour guides.
- **Dynamic Content:** Implemented using EJS, the web application delivers a dynamic and interactive user interface.
- **Responsive Design:** Utilized Bootstrap, HTML, and CSS to ensure a responsive and visually appealing design across different devices.
- **Backend Development:** Leveraged ExpressJS for server-side development, managing the application's logic and functionality.
- **Database Management:** MongoDB was used as the database, and MongoDB Atlas was employed to deploy the MongoDB cluster in the cloud, ensuring data persistence and scalability.

## Getting Started

Follow these steps to set up the project locally:

1. Clone the repository:

   ```bash
   git clone https://github.com/i-m-Paras/TripWise.git
   ```

2. Install dependencies:

   ```bash
   cd tour-guider-connector
   npm install
   ```

3. Configure environment variables:

   Create a `.env` file in the root directory and set the following variables:

   ```env
   PORT=3000
   MONGODB_URI=your_mongodb_uri
   SESSION_SECRET=your_session_secret
   ```

4. Run the application:

   ```bash
   npm start
   ```

5. Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to access the application.


## Project Structure

```
|-- config
|   |-- passport.js
|-- models
|   |-- user.js
|   |-- tour.js
|-- public
|   |-- css
|   |-- js
|   |-- images
|-- views
|   |-- partials
|       |-- header.ejs
|       |-- footer.ejs
|   |-- home.ejs
|   |-- login.ejs
|   |-- register.ejs
|   |-- profile.ejs
|   |-- tours.ejs
|   |-- tour-details.ejs
|   |-- booking.ejs
|-- .gitignore
|-- app.js
|-- package.json
|-- README.md
```

## Acknowledgments

- Special thanks to the BYTE Hackathon organizers for providing the platform and opportunity to create this project.
- Gratitude to the open-source community for the tools and frameworks that made this project possible.

## Contact

For any inquiries or collaboration opportunities, feel free to contact us at awathiparas6@gmail.com.
