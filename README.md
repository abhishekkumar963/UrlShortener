# UrlShortener

A complete URL shortening web application built with **Node.js, Express.js, MongoDB, and EJS**.  
This project allows users to convert long, complex URLs into short, shareable links and then seamlessly redirects users to the original URLs when they access the shortened ones.  



<img width="1919" height="1079" alt="Screenshot 2025-09-17 233716" src="https://github.com/user-attachments/assets/71790873-1910-409c-8c70-ca0cabfce24d" />


<img width="1919" height="1079" alt="Screenshot 2025-09-17 233743" src="https://github.com/user-attachments/assets/2d488933-e556-4744-b5d0-695386fab834" />

<img width="1919" height="1079" alt="Screenshot 2025-09-17 233758" src="https://github.com/user-attachments/assets/1be65a5b-370c-4c6c-89b1-81178966cd3a" />



<img width="1919" height="1079" alt="Screenshot 2025-09-17 233811" src="https://github.com/user-attachments/assets/c680ec71-d310-43f7-ae62-517883c6d4be" />


## 🌐 Introduction

In today’s digital era, URLs have become the backbone of web navigation. From sharing articles and videos to providing access to important resources, links are used everywhere. However, long and complicated URLs are not user-friendly — they are difficult to share, remember, or type manually.  

To solve this issue, **URL Shorteners** were introduced. A URL shortener is a tool that converts a long URL into a much shorter, condensed version while ensuring that the shorter version redirects back to the original destination.  

The **UrlShortener Project** is a web-based solution that offers this service. Built with **Node.js, Express.js, MongoDB, and EJS**, the project provides an easy-to-use interface where users can input a long URL, and in return, they receive a short and unique link that can be used for sharing.

---

## ❓ Problem Statement

- Long URLs are cumbersome to use, especially on platforms like Twitter, LinkedIn, or printed media where space is limited.  
- Sharing or remembering long URLs can lead to errors.  
- Businesses and individuals need simple, short, and memorable links for better accessibility.  

---

## 🎯 Objective

The main objective of this project is to provide a **lightweight and user-friendly web application** that:  
- Shortens long URLs into short, unique links.  
- Stores the mapping between long and short URLs in a database (MongoDB).  
- Redirects users from the shortened URL back to the original long URL.  
- Offers an intuitive interface built using **EJS templating engine** for ease of interaction.  

---

## ⭐ Features

- **URL Shortening** – Enter a long URL and instantly get a short link.  
- **Redirection** – Visiting the short link takes you back to the original URL.  
- **Validation** – Ensures that only valid URLs are accepted.  
- **Persistent Storage** – All shortened URLs are stored in MongoDB for future access.  
- **Simple UI** – Clean and responsive interface using EJS templates.  
- **Error Handling** – Displays proper messages for invalid inputs or broken links.  

---

## 🛠 Technology Stack

The project leverages the following technologies:

- **Node.js** – Backend JavaScript runtime environment.  
- **Express.js** – Web application framework for handling routes and server logic.  
- **MongoDB** – NoSQL database to store URL mappings.  
- **Mongoose** – ODM (Object Data Modeling) library to interact with MongoDB.  
- **EJS (Embedded JavaScript)** – Template engine to render dynamic views.  
- **Nodemon** (optional) – For auto-restarting the server during development.  

---

## 🏗 System Architecture

1. **User Input** – A user submits a long URL via the web interface.  
2. **Server Processing** – Express.js receives the request and generates a unique short code.  
3. **Database Storage** – The mapping between the short code and original URL is saved in MongoDB.  
4. **Response** – The user is presented with a short URL.  
5. **Redirection** – When the short URL is visited, the server fetches the original URL from the database and redirects the user.  

---

Advantages of the Project

Makes URLs short and easy to share.

Enhances user experience with clean links.

Saves storage space and characters in platforms with text limits.

Provides backend learning experience with Node.js and Express.

Demonstrates integration of database (MongoDB) with server applications.




Future Enhancements

Add user authentication for personalized URL management.

Provide analytics (click counts, location tracking, etc.).

Allow users to customize their short codes.

Create an API for programmatic URL shortening.

Improve UI with frameworks like Bootstrap or TailwindCSS.

