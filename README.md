# Bookstore Single Page Application

Welcome to the Bookstore Single Page Application project! This application serves as a simple yet functional platform for managing books. Although it utilizes mock data from an array, it incorporates essential features and technologies to provide a seamless user experience.

To simulate server response times, a setTimeout function is set to 200ms.

## Features:

1. **Add a Book:** Easily add new books to the bookstore collection.
2. **Modify a Book:** Update book details as needed.
3. **Delete a Book:** Remove unwanted books from the collection.

## Technologies Used:

This project is built using modern web technologies to ensure efficiency and scalability:

1. **ReactJS:** A powerful JavaScript library for building user interfaces.
2. **Redux:** A predictable state container for managing application state.
3. **TailwindCSS:** A utility-first CSS framework for rapidly building custom designs.

## Project Structure:

Explore the project's structure to better understand its organization:

```
src
├─ components
│ ├─ Modal
│ │ └─ index.tsx
│ ├─ books.component
│ │ ├─ book-form
│ │ │ └─ index.tsx
│ │ ├─ book-preview
│ │ │ ├─ book-info.tsx
│ │ │ └─ index.tsx
│ │ ├─ bookModal
│ │ │ └─ index.tsx
│ │ └─ books.tsx
│ └─ layout
│ ├─ content-box.tsx
│ ├─ footer.tsx
│ ├─ header.tsx
│ └─ index.tsx
├─ images
│ └─ ava.jpeg
├─ redux
│ ├─ actions
│ │ └─ book.actions.ts
│ ├─ reducers
│ │ └─ book.reducer.ts
│ └─ actionTypes.ts
├─ style
│ └─ global.css
├─ types
│ ├─ book-type.ts
│ └─ index.ts
├─ App.tsx
├─ data.ts
├─ index.tsx
└─ store.ts
```

Feel free to explore and contribute to this project! If you have any questions or suggestions, don't hesitate to reach out. Happy coding!
