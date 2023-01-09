const desc = 'I just learned how to create a React node and render it';
const first_name = 'Maurice';

const header = (
    <header>
        <h1 id="title">{first_name}'s first React element!</h1>
        <p>{desc}</p>
        <input type="text" value={10*20}/>
    </header>
);

ReactDOM.render(
    header,
    document.getElementById('root')
);