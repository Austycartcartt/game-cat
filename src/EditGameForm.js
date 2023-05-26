import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const EditGameForm = ({ game, onSave, onCancel }) => {
  const [name, setName] = useState(game.name);
  const [publisher, setPublisher] = useState(game.publisher);
  const [rating, setRating] = useState(game.rating);
  const [players, setPlayers] = useState(game.players);

  const handleSave = (event) => {
    event.preventDefault();
    const updatedGame = {
      id: game.id,
      name,
      publisher,
      rating,
      players,
    };
    onSave(updatedGame);

  };

  return (
    <Form onSubmit={handleSave}>
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Publisher</Form.Label>
        <Form.Control type="text" value={publisher} onChange={(e) => setPublisher(e.target.value)} required />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Rating</Form.Label>
        <Form.Select value={rating} onChange={(e) => setRating(e.target.value)}>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
          <option value="4">Four</option>
          <option value="5">Five</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Number of Players:</Form.Label>
        <Form.Control type="text" value={players} onChange={(e) => setPlayers(e.target.value)} required />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    // <form onSubmit={handleSave}>
    //   <h2>Edit Game</h2>
    //   <div>
    //     <label>Name:</label>
    //     <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
    //   </div>
    //   <div>
    //     <label>Publisher:</label>
    //     <input
    //       type="text"
    //       value={publisher}
    //       onChange={(e) => setPublisher(e.target.value)}
    //       required
    //     />
    //   </div>
    //   <div>
    //     <label>Rating:</label>
    //     <input type="text" value={rating} onChange={(e) => setRating(e.target.value)} required />
    //   </div>
    //   <div>
    //     <label>Number of Players:</label>
    //     <input type="text" value={players} onChange={(e) => setPlayers(e.target.value)} required />
    //   </div>
    //   <button type="submit">Save</button>
    //   <button type="button" onClick={onCancel}>
    //     Cancel
    //   </button>
    // </form>
  );
};

export default EditGameForm;