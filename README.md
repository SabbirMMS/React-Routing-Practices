# React Router with Firebase

[![Netlify Status](https://api.netlify.com/api/v1/badges/9c1b50da-73d8-475f-884b-da96f7f15199/deploy-status)](https://app.netlify.com/sites/react-router-mms/deploys)

This project demonstrates the integration of **React Router** and **Firebase** with a modern development stack powered by **Vite**. The site is live and accessible at [React Router with Firebase](https://react-router-mms.netlify.app/).

---

## Key Features

- **React Router** for seamless navigation.
- **Firebase** integration for backend services and real-time data.
- Built with **Vite**, providing a fast and efficient development environment.
- Fully responsive and deployable via **Netlify**.
- **Tailwind CSS** for styling, ensuring a clean and modern UI.
- Organized and reusable components for better scalability.

---

## Tech Stack

### Frontend
- **React**: For building the user interface.
- **React Router**: For handling navigation and routing.
- **Vite**: As the build tool for fast HMR (Hot Module Replacement) and production builds.
- **Tailwind CSS**: For styling and layout.

### Backend
- **Firebase**: 
  - Authentication for user management.
  - Firestore for database functionalities.

### Deployment
- **Netlify**: For hosting and continuous deployment.

---

## Installation and Setup

To run this project locally, follow these steps:

### 1. Clone the Repository
```bash
git clone https://github.com/SabbirMMS/React-Routing-Practices.git
cd react-router-firebase
```

### 2. Install Dependencies
Ensure you have **Node.js** and **npm** installed. Then run:
```bash
npm install
```

### 3. Configure Firebase
Set up your Firebase project and replace the configuration in `firebase-config.js` with your Firebase credentials.

### 4. Run the Development Server
```bash
npm run dev
```
The app will be available at [http://localhost:5173](http://localhost:5173).

### 5. Build for Production
To create an optimized production build:
```bash
npm run build
```
The build files will be generated in the `dist` folder.

---

## Deployment

The project is configured for deployment on **Netlify**. You can link the repository in the Netlify dashboard and enable continuous deployment. Alternatively, you can manually deploy by uploading the `dist` folder.

---

## Folder Structure

```
react-router-firebase/
├── public/          # Static assets
├── src/
│   ├── components/  # Reusable components
│   ├── pages/       # Route-based components
│   ├── firebase/    # Firebase configuration
│   ├── styles/      # Global styles
│   └── App.jsx      # Root component
├── .env             # Environment variables
├── package.json     # Project dependencies
└── vite.config.js   # Vite configuration
```

---

## Live Demo

Check out the live project: [React Router with Firebase](https://react-router-mms.netlify.app/)

---

## Contributing

Contributions are welcome! Feel free to fork this repository, create a new branch, and submit a pull request.

---

## License

This project is open source and available under the [MIT License](LICENSE).

---

## Deployment Setup for React Router

When deploying a React app that uses React Router, you need to ensure proper routing configurations for both **Vercel** and **Netlify**. Here’s how to set it up for each platform:

### **For Vercel**
1. Create a `vercel.json` file in the root of your project.
2. Add the following content to the file:
   ```json
   {
       "rewrites": [
           {
               "source": "/(.*)",
               "destination": "/index.html"
           }
       ]
   }
   ```
3. This ensures that all routes are redirected to `index.html`, allowing React Router to handle navigation.

---

## **For Netlify**
1. Create a `_redirects` file in the `public/` folder of your project. [Root directory is not the solution]
   ```
   project-root/
   ├── public/
   │   ├── _redirects
   ├── src/
   ├── package.json
   ├── README.md
   ```
2. Add the following line to the `_redirects` file:
   ```plaintext
   /*    /index.html   200
   ```
3. This ensures Netlify redirects all routes to `index.html` with a `200 OK` status, enabling React Router to handle routing.

---

### Verification
- **Vercel**: Test routes like `Not Deployed Yet`
- **Netlify**: Test routes like `https://react-router-mms.netlify.app/users/1`

If routes work as expected, your deployment is properly configured. 🎉

--- 

