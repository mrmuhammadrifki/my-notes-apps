import React from 'react';
import { createRoot } from 'react-dom/client';
import NoteApp from './components/NoteApp';

import './styles/style.css';
import './styles/font-awesome/css/all.min.css';


const root = createRoot(document.getElementById('root'));
root.render(<NoteApp />);