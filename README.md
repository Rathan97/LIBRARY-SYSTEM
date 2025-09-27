# 📚 Online Library System

## 🎯 Objective

The goal of this project is to **create an Online Library System**
that allows users to browse, search, and add books dynamically. The
system uses **React with Redux Toolkit** for state management, enabling
persistent and scalable handling of library data.

------------------------------------------------------------------------

## 🛠️ Technologies Used

-   **React (Vite)** → Frontend framework
-   **Redux Toolkit** → State management
-   **React Router DOM** → Routing and navigation
-   **Tailwind CSS** → Styling and responsive design
-   **FontAwesome Icons** → Icons for UI enhancement

------------------------------------------------------------------------

## 🚀 Features

-   📖 **Browse Books** by categories (Fiction, Sci-Fi, Non-Fiction) 
-   🔍 **Search by Title or Author** (across all categories or within
    one) 
-   ➕ **Add Books** via form (stored in Redux state) 
-   🖼️ **Dynamic Book Details** page using URL params 
-   🏠 **Home Page** with scroll animation and background image 
-   ⚠️ **404 Page** for invalid routes

------------------------------------------------------------------------

## 📂 Project Structure

    library-system/
    ├── public/
    │   └── vite.svg
    │
    ├── src/
    │   ├── assets/
    │   │   └── librarybg.jpg
    │   │
    │   ├── components/
    │   │   ├── 404.jsx
    │   │   ├── AddBook.jsx
    │   │   ├── BookCard.jsx
    │   │   ├── BookContainer.jsx
    │   │   ├── BookDetails.jsx
    │   │   ├── BrowseBooks.jsx
    │   │   ├── Header.jsx
    │   │   └── Homepage.jsx
    │   │
    │   ├── utils/
    │   │   ├── appStore.js
    │   │   ├── BookData.js
    │   │   └── LibraryDataSlice.js
    │   │
    │   ├── App.jsx
    │   ├── index.css
    │   └── main.jsx
    │
    ├── .gitignore
    ├── index.html
    ├── package.json
    ├── package-lock.json
    ├── README.md
    └── vite.config.js

------------------------------------------------------------------------

## ⚙️ Installation & Running the Project

### 1️⃣ Clone the repository

``` bash
git clone https://github.com/Rathan97/library-system.git
cd library-system
```

### 2️⃣ Install dependencies

``` bash
npm install
```

### 3️⃣ Run the development server

``` bash
npm run dev
```

👉 The app will run at `http://localhost:5173/`


------------------------------------------------------------------------

## Github Link

- [Click Here ](https://github.com/Rathan97/library-system)
