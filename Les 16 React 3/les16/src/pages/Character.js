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
        })
        .catch((error) => {
            console.error(error);
        })
    }
}

export default Character