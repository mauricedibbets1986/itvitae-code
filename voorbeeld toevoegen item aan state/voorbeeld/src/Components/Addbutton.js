const Addbutton = (props) => {

    return(
        <>
            <input type="text" id="player-name"></input>
            <input type="number" id="player-age"></input>
            <button onClick={() => {
                // aanroepen functie en meegeven waarde van input velden
                props.addPlayerFunction((document.getElementById("player-name").value), (document.getElementById("player-age").value))}
            }
            >Add Player</button>
        </>
    )
}

export default Addbutton;