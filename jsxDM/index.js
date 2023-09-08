const React = require('react')
const {createRoot } = require('react-dom/client');

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<h1>Hello world</h1>);
