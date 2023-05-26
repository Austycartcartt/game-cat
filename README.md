# Getting started 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

# Version 1 Requirements

## Intro
Business want a web app that manages a collection of games

## Requirements
### List items
list all games
### Display Game Information
Fields required:
- Name of the game
- Name of the game publisher
- Rating of the game
- Number of players the game supports
### Search
Ability to search for all fields on game
### Add Games
Add all game fields listed

## Questions
Q: Should the search just search on just the game title or on all fields? \
A: Search all fields available.

Q: The players supported subject to just local or are they looking for online as well? \
A: The user just wants a single number.

Q: Does the list need to be in an excel style table or do thay want them listed as Cards similar to an instagram post? \
A: The layout should be listed as cards.

Q: Does the user need a drop down list of options rating options or just an input field? Drop down lists are less prone to user error. \
A: Drop down field would be best.

# Version 2 Improvements
## Requirements
### Improve search
- Add a clear search button to reset search
- Add some filters to the search:
    - Filter by publisher
    - Filter by ratings
### Forms
- Move edit and add form into modal
- Validate there is no duplicate games added 
### List items
- add game art to card
- add links to order the game
- expand on players support to show local players and players online
- Add pagination to the list. Limit 10 cards per page.
### Bulk upload games
- allow for a csv upload of games to be input into the system
- csv upload would have to validate duplicate entries and invalide values
- after uplaod results would display which records were not uploaded due to error and which were duplicates.

### Firebase connection
- create a firestore database in firebase
- connect firestore to react application: https://firebase.google.com/docs/web/setup 

### Store games in database


### Deploy app on firebase
Follow dock to deploy to firebase:
https://medium.com/swlh/how-to-deploy-a-react-app-with-firebase-hosting-98063c5bf425
