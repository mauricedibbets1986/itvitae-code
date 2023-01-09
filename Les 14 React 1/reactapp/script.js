const title = React.createElement(
    'h1',
    { id: 'main-title', title: 'This is a title.', className: 'title'},
    'My first REACT element!'
);

console.log(title);

const desc = React.createElement (
    'p',
    null,
    'I just learned how to create a React node and render it into the DOM'
)

const header = React.createElement(
    'header',
    null,
    title,
    desc
)

// ReactDOM.render(
//     header,
//     document.getElementById('root')
// )


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(header);