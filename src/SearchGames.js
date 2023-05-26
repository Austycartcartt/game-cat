import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';

const SearchGames = ({ games, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <Form onSubmit={handleSearch}>
      <InputGroup className="mb-3">
        <Button type="submit">
          Search 
        </Button>
        <Form.Control
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
        />
      </InputGroup>
    </Form>
  );
};

export default SearchGames;