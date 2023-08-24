import Player from  './Player'
import players from './players'

const PlayerList = () => {
    return (
        // The list of players called through the map function
        <div style= {{display: 'flex',gap: '20px', margin: '50px 0 0 130px', background: 'linear-gradient()'}}>
            {players.map((players, index) => (
                <Player key={index} {...players}/>
            ))}
        </div>
    )
}


export default PlayerList