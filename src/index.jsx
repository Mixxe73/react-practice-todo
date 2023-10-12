import React from 'react';
import ReactDOM from 'react-dom/client';
import TodoList from './components/TodoList/TodoList';
import MainLayout from './components/layouts/main/MainLayout';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MainLayout>
      <TodoList />
    </MainLayout>
  </React.StrictMode>
);