import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import StarRating from './StarRating';
import GameSupport from './GameSupport';

const Game = ({ game, handleEdit }) => {
    return (
        <div>
        <Card className="text-center" >
            <Card.Body>
                <Card.Title>{game.name}</Card.Title>
                <Card.Text>
                    {game.publisher}
                    <StarRating rating={game.rating} />
                    <GameSupport players={game.players}/>
                    <Button variant="primary" onClick={() => handleEdit(game)}>Edit</Button>
                </Card.Text>
            </Card.Body>
        </Card>
        <br/>
        </div>
    );
};

export default Game;