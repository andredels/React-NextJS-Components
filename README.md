Name: Delica, Andre Emmanuel C.
Course: BSCpE-2
Activity: JavaScript Fundamentals & React Components

Part A - JavaScript Fundamentals
This part demonstrates core JavaScript concepts and DOM interaction through a simple web app.

Features:
Uses variables, arrays, objects, and functions

Handles DOM manipulation

Implements event handling

Interactive UI that:

Accepts a name input

Displays a personalized greeting

Lists favorite JavaScript topics

Files:
File	Description
index.html	Main HTML page with form and button
app.js	JavaScript logic: variables, DOM, and functions
style.css	(Optional) Basic styling for a clean interface

📸 Preview:
plaintext
Copy
Edit
+---------------------------+
| Welcome to JS Fundamentals|
| [ Your Name Here        ] |
| [ Show Info ]             |
|                           |
| Hello, John!              |
| Favorite Topics:          |
| - Variables               |
| - Functions               |
| - DOM                     |
| - Events                  |
+---------------------------+
Part B - React / Next.js Components
This part includes 3 functional React components created using Next.js App Router. It showcases component structure, state management, and props usage.

Components:
WelcomeCard

Displays a custom welcome message

Uses props to receive and display user name

Counter

Interactive counter with buttons to increase, decrease, and reset

Uses React useState for state management

StudentInfo

A form that collects name, email, course, and year

Displays entered data in a modal upon submission

Uses multiple useState hooks and event handling

File Locations:
File Path	Component
app/components/WelcomeCard.tsx	WelcomeCard
app/components/Counter.tsx	Counter
app/components/StudentInfo.tsx	StudentInfo

Note: All components use "use client" directive to enable hooks like useState.

How to Run:
bash
Copy
Edit
# Navigate to project root (where package.json exists)
cd part-b/my-app

# Install dependencies
npm install

# Run in dev mode
npm run dev
Visit: http://localhost:3000

Technologies Used
HTML5 / CSS3

JavaScript (ES6+)

React.js (via Next.js App Router)

React Hooks (useState)

JSX and Functional Components
