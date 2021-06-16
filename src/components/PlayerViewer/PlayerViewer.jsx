import Reach from 'react'; 

function PlayerViewer(props) { 
    return (
        <div className="row">
            <h1 className='col'>{props.playerFirst}</h1>
            <h1 className='col'>{props.playerLast}</h1>
        </div>
    )
}

export default PlayerViewer;
