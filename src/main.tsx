import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { UserProvider } from './providers/UserContext/index.tsx'
import { MovieProvider } from './providers/MovieContext/index.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <UserProvider>
      <MovieProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </MovieProvider>
    </UserProvider>
  </React.StrictMode>,
)
