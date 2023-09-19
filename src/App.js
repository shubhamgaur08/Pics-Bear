import React from "react";
import { Route, Routes } from "react-router-dom";
import GenerateImagePage from "./pages/GenerateImagePage";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Analytics
const firebaseConfig = {

  apiKey: "AIzaSyA9y3ED6okc-WFmbojgkFGb3232QndpeLs",

  authDomain: "picsbear-c9487.firebaseapp.com",

  projectId: "picsbear-c9487",

  storageBucket: "picsbear-c9487.appspot.com",

  messagingSenderId: "807554734794",

  appId: "1:807554734794:web:9852f0efd784b8b7cfb233",

  measurementId: "G-9VZDX24F3J"

};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  return (
    <Routes>
      <Route path="/" element={<GenerateImagePage app={app} />} />

      <Route path="/edit-image" element={<GenerateImagePage />} />
    </Routes>
  );
}

export default App;
