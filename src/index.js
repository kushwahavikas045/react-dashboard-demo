import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'react-toastify/dist/ReactToastify.css';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import { AuthContextProvider } from './store/auth';

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
    <DndProvider backend={HTML5Backend}>
    <App />
    </DndProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

