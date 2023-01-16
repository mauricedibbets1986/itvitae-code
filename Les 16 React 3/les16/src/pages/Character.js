import React from 'react';


class Character extends React.Component {
    state = {
        character: [],
        id: document.URL.split("/").pop()
    }

    componentDidMount() {
        fetch('https://swapi.dev/api/people/' + this.state.id)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            this.setState({ character: data })
        })
        .catch((error) => {
            console.error(error);
        })
    }

    render() {
        return (
            <h1>{this.state.character.name}</h1>
        )
    }
}

export default Character