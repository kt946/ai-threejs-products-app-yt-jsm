# AI Three.js T-Shirt Designer JSM

![screenshot-hompage](https://user-images.githubusercontent.com/103476893/229616090-eefa8d30-4410-4a9f-a6ae-6d0306dbab45.png)

## Description

This project was built using a tutorial by [JavaScript Mastery](https://www.youtube.com/watch?v=ZqEa8fTxypQ) on youtube.

This is a 3D T-Shirt Designer application where users can design their own T-shirts using user-uploaded patterns and logos. The website includes technologies such as ThreeJS, React Three Fiber, TailwindCSS, Framer Motion, and OpenAI.

⭐ Note: This website may require some time for the server to spin up and the 3D shirt to render. In addition, the AI functionality of this app may become unresponsive due to an inactive key, however users can still upload their own images.

## Table of Contents

- [Installation](#installation)
- [Features](#features)
- [Screenshots](#screenshots)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [Links](#links)

## Installation

1. Clone the repository.
2. Install the dependencies in both the client and server folders by running `npm install`.
3. Create a .env file in the server folder and add the following environment variables:

```
OPENAI_API_KEY
```

4. Start the client by running `npm run dev`.
5. Start the server by running `npm start`.
6. Navigate to http://localhost:8080 to view the project.

⭐ Note: An active OpenAI api key is required for the AI funtionality to work.

## Features
- Customization: Users can upload different patterns and logos to design their T-shirts.
- 3D View: The T-shirt design is displayed in a 3D view, allowing users to see how it looks from different angles.
- OpenAI Integration: The website uses OpenAI to apply AI-generated patterns and logos based on user prompts.
- Save and Share: Users can save their T-shirt designs as a downloadable image.

## Screenshots

![screenshot-homepage2](https://user-images.githubusercontent.com/103476893/229616205-5e647999-403e-432a-b189-32c93abbc505.png)

![screenshot-customizer](https://user-images.githubusercontent.com/103476893/229616217-5a054c15-f901-4b70-a9a5-d582b231c66d.png)

## Technologies Used

- ThreeJS: A JavaScript library for creating 3D graphics in the browser.
- React Three Fiber: A React renderer for ThreeJS.
- TailwindCSS: A utility-first CSS framework for rapid UI development.
- Framer Motion: A library for creating animations in React.
- OpenAI: A platform for building and deploying AI models.

## Contributing

If you'd like to contribute to this project, please fork the repository and submit a pull request.

## Links

- [Link to deployed application](https://ai-threejs-products-app.netlify.app/)

- [Link to GitHub repository](https://github.com/kt946/ai-threejs-products-app-yt-jsm)

- [Link to original GitHub repository by JavaScript Mastery](https://github.com/adrianhajdin/project_threejs_ai)

- [Link to youtube tutorial by JavaScript Mastery](https://www.youtube.com/watch?v=ZqEa8fTxypQ)
