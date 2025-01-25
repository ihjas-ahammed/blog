# React + Vite

## Project created and test run

```bash
npm create vite@latest
cd blog
npm install
npm run dev
```

close vs code and open vscode in the folder named blog

after what we cleared everything in return of ```App.jsx``` and also everything in ```index.css``` and ```App.css```

## Add react router, mui and axios

```bash
npm install react-router @mui/material @emotion/react @emotion/styled @mui/icons-material
axios
```

Edit ```main.jsx```

Replace the file with following code:

```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
```

## Create Home, NavBar and AddBlog

create ```Home.jsx``` in ```src```
use ```rafce``` to write default code

add home to app.jsx

1. Clear everything inside return of App.

### Introduce data and users

add the following code before return

```jsx
const [data, setdata] = useState([])
const [users, setUsers] = useState([])
```

so the first one stores data which are the posts and second one stores users to get username from user id

Now add axios function to fetch data
below it

```jsx

```

