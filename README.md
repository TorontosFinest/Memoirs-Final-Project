# Project Description

mmemoirs is a full-stack web application built using React, Express, Node, and PostgreSQL. The purpose of the app is to create a nostalgic memoir space where users can register an account and upload memories from vacations they went on, fun events they've visited, or a birthday party that they want to remember forever. As of right now, users are able to upload a title,description and a gif/image to create a memoir. Users have the ability to delete and edit their memoirs and also search for memoirs created by other users by searching for keywords that are included in other users memoir descriptions.

# Screenshots-of-the-project

## Login-page

<img width="1440" alt="Login" src="https://user-images.githubusercontent.com/91354073/154751527-b694e94d-ac7b-44d5-ac67-9a0256bde018.png">

## Register-page

<img width="1440" alt="Register" src="https://user-images.githubusercontent.com/91354073/154751618-7b14ce51-6f58-489e-b0da-c76180e4580e.png">

## Search Memoir

![](https://i.gyazo.com/a26143143994d2a67f7f220f1d2a8ecb.gif)

## Generate-Memoir

![](https://i.gyazo.com/efc495d29576167e908eb5013bee868a.gif)

## Responsive-Design

![Generate-Memmoir-Respnsive-Upto-2560px](https://user-images.githubusercontent.com/91354073/154751961-0e05fa22-342d-48a6-af7a-d785cc90753b.png)

# Dependencies

- "@headlessui/react": "^1.4.3"
- "@tailwindcss/forms": "^0.4.0",
- "@testing-library/jest-dom": "^5.16.2",
- "@testing-library/react": "^12.1.2",
- "@testing-library/user-event": "^13.5.0",
- "axios": "^0.25.0",
- "react": "^17.0.2",
- "react-dom": "^17.0.2",
- "react-router-dom": "^6.2.1",
- "react-scripts": "^5.0.0"
- "body-parser": "^1.19.2",
- "chalk": "^5.0.0",
- "cookie-session": "^2.0.0",
- "cors": "^2.8.5",
- "dotenv": "^16.0.0",
- "express": "^4.17.2",
- "fs": "^0.0.1-security",
- "pg": "^8.7.3",

# Setup

This project was built using node v17.4.2. To setup the project on your device, follow the instructions below.

#### 1. Clone into the repository using -> git clone git@github.com:S550Stang/Memoirs-Final-Project.git

### 2. Install all depenencies by running "npm install " at the root of your project.

### 3. Create a copy of the .env.example and name it .env (don't forget to change the keys with your own values).

### 4. Run "npm run db:reset" to reset the database whenever you wish.

### 4. To start the application, run "npm run dev" to concurrently run the server and the client. Enjoy!
