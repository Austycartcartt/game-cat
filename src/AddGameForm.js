import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const AddGameForm = ({ onSave }) => {
  const [name, setName] = useState('');
  const [publisher, setPublisher] = useState('');
  const [rating, setRating] = useState('');
  const [players, setPlayers] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Create a new game object
    const newGame = {
      name,
      publisher,
      rating,
      players,
    };
    // Pass the new game to the parent component
    onSave(newGame);
    // Reset the form fields
    setName('');
    setPublisher('');
    setRating('');
    setPlayers('');
  };

  return (
    <Form onSubmit={handleSubmit}>
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
  );
};

export default AddGameForm;