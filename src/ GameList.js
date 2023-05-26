import React, { useState } from 'react';
import Game from './Game';
import AddGameForm from './AddGameForm';
import data from "./data.json";
import SearchGames from './SearchGames';
import EditGameForm from './EditGameForm';


const GameList = () => {
    const [gameList, setGameList] = useState(data);
    const [editingGame, setEditingGame] = useState(null);

    const handleSearch = (searchTerm) => {
        // Perform the search logic based on the searchTerm
        const filteredGames = gameList.filter((game) =>
            game.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        // Update the games list with the search results
        setGameList(filteredGames);
    };

    const handleEdit = (game) => {
        setEditingGame(game);
    };

    const handleSave = (updatedGame) => {
        if (editingGame) {
            // Update existing game
            setGameList((prevGames) =>
                prevGames.map((game) => (game.name === updatedGame.name ? updatedGame : game))
            );
            setEditingGame(null);
        } else {
            // Add new game
            setGameList([...gameList, updatedGame])
        }
    };
    return (
        <div>
            <SearchGames games={gameList} onSearch={handleSearch} />
            <br />
            {gameList.map(game => {
                return (
                    <Game game={game} handleEdit={handleEdit} />
                )
            })}
            {editingGame ? (
                <EditGameForm game={editingGame} onSave={handleSave} onCancel={() => setEditingGame(null)} />
            ) : (
                <AddGameForm onSave={handleSave} />
            )}
        </div>
    );
};

export default GameList;