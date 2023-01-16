import { Link } from 'react-router-dom';

const CharacterSingle = (props) => {
    const link = "/character/" + props.index;

    return (
        <Link to={link}>
            <h2>{props.name}</h2>
            <p>{props.index}</p>
        </Link>
    )

}

export default CharacterSingle