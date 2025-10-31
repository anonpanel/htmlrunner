
import React from 'react';

export const INITIAL_HTML = `
<div class="container">
  <h1>Welcome to Web Weaver IDE!</h1>
  <p>Edit the code on the left to see your changes here in real-time.</p>
  <button id="myButton">Click Me</button>
</div>
`;

export const INITIAL_CSS = `
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background-color: #f0f4f8;
  color: #333;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  transition: background-color 0.5s ease;
}

.container {
  text-align: center;
  padding: 2rem;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
  transform: translateY(0);
  transition: all 0.3s ease-in-out;
}

.container:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0,0,0,0.15);
}

h1 {
  color: #2c5282;
}

button {
  background-color: #4299e1;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

button:hover {
  background-color: #3182ce;
  transform: scale(1.05);
}
`;

export const INITIAL_JS = `
const button = document.getElementById('myButton');
const body = document.body;
const colors = ['#f0f4f8', '#e2e8f0', '#c5d5e3', '#a7c1d8'];
let colorIndex = 0;

button.addEventListener('click', () => {
  alert('Hello from JavaScript!');
  
  // Change background color
  colorIndex = (colorIndex + 1) % colors.length;
  body.style.backgroundColor = colors[colorIndex];
});
`;


const HtmlIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);

const CssIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
  </svg>
);

const JsIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 32 32" fill="currentColor">
    <path d="M24.73,3H7.27A4.28,4.28,0,0,0,3,7.27V24.73A4.28,4.28,0,0,0,7.27,29H24.73A4.28,4.28,0,0,0,29,24.73V7.27A4.28,4.28,0,0,0,24.73,3Zm-6.2,19.29h-2a0.25,0.25,0,0,1-.25-0.25V18.15a0.25,0.25,0,0,1,.25-0.25h2a0.25,0.25,0,0,1,.25.25v3.89a0.25,0.25,0,0,0,.25.25h1.13V15.71a0.25,0.25,0,0,0-.25-0.25H18.53a3.52,3.52,0,0,0-3.51,3.51v3.89a0.25,0.25,0,0,1-.25.25H12.38a0.25,0.25,0,0,1-.25-0.25V11.23a0.25,0.25,0,0,1,.25-0.25h2.38a0.25,0.25,0,0,1,.25.25v1.25h1.12V8.34a0.25,0.25,0,0,0-.25-0.25H12.38a3.52,3.52,0,0,0-3.51,3.51v10.51a3.52,3.52,0,0,0,3.51,3.51h6.15a3.52,3.52,0,0,0,3.51-3.51V18.3a0.25,0.25,0,0,0-.25-0.25H19.67a0.25,0.25,0,0,1-.25.25v3.89A0.25,0.25,0,0,1,18.53,22.29Z" />
  </svg>
);


export const LANGUAGE_METADATA = {
  html: {
    name: 'HTML',
    icon: <HtmlIcon />,
    color: 'text-orange-400',
  },
  css: {
    name: 'CSS',
    icon: <CssIcon />,
    color: 'text-blue-400',
  },
  javascript: {
    name: 'JavaScript',
    icon: <JsIcon />,
    color: 'text-yellow-400',
  },
};
