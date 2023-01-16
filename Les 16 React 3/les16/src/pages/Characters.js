import React from 'react';
import CharacterSingle from './CharacterSingle';

class Characters extends React.Component {

    state = {
        characters: []
    }

    componentDidMount() {
        fetch('https://swapi.dev/api/people')
        .then((response) => response.json())
        .then((data) => {
            console.log(data.results);
            this.setState({characters: data.results});
        })
        .catch((error) => {
            console.error(error);
        })
    }


    render() {
        return (
            <>
                <h1>Characters</h1>
                {
                    this.state.characters.map((character, index) =>
                        <CharacterSingle
                            name={character.name}
                            key={index.toString()}
                            index={index+1}
                        />
                    )
                }
            </>
        )
    }

}

export default Characters;
