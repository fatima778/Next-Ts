# 🚀 TypeScript Types Dashboard - Next.js Project

This is a simple Next.js project built using TypeScript to demonstrate the usage of all **10 key TypeScript types** through real examples. Each page showcases different TypeScript concepts like basic types, enums, tuples, interfaces, and generics — all wrapped up in a small dashboard-style layout with page navigation.

---

## 📚 What’s Inside?

### ✅ TypeScript Types Used

1. **Basic Types** – `string`, `number`, `boolean`
2. **Array Types** – `string[]`, `number[]`
3. **Tuple Types** – Fixed-length arrays with specific types
4. **Enum Types** – Named constants using `enum`
5. **Union Types** – Allow multiple types (e.g. `string | number`)
6. **Type Aliases** – Custom types using `type`
7. **Interfaces** – Define the shape of an object
8. **Literal Types** – Restrict to specific values (`"light" | "dark"`)
9. **Intersection Types** – Combine multiple types using `&`
10. **Generics** – Functions that work with any type safely

---

## 🧭 Pages & Routing

The app includes 3 pages:

- `/` – **Home Page** with Basic Types and buttons to navigate
- `/users` – Displays a list of users and demonstrates interface, enums, union types, generics, etc.
- `/settings` – Shows full user profile using intersection types, literal types, and enum

Navigation is handled using `useRouter()` and buttons.

---

## 🛠️ Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/fatima778/ts-dashboard.git
cd ts-dashboard
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Development Server

```bash
npm run dev
```

By default, visit:
```bash
http://localhost:3000
```
Or if port 3000 is in use, Next.js will auto-switch to another (like 3001 or 3002).

---

## 🗂️ Project Structure

```
/src
├── /pages
│   ├── index.tsx         // Home page
│   ├── users.tsx         // Users list
│   ├── settings.tsx      // User settings
│   └── _app.tsx          // Global wrapper with CSS
├── /styles
│   └── globals.css       // Global styles
├── /types
│   └── index.ts          // All TypeScript type definitions
```

---

## 🎯 Tech Stack

- **Next.js** 15+
- **TypeScript**
- **React** (via Next.js)
- **Optional:** Tailwind CSS (can be added easily)

---

## 👩‍💻 Author

**Fatima Khalid Siddiqui**  
3rd Semester – Software Engineering  
Sindh Madressatul Islam University  
Certificate Course in Web & App Development – Saylani Mass IT Training Program  

---

## ✅ Assignment Requirement

This project fulfills the assignment goal of:

> _"Demonstrate the use of all key TypeScript types in a Next.js project."_ ✅
