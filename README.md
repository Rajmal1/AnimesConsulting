# AnimesConsulting

This project have the objective to consult, storage and show Studio Ghibli films.

## Project flow

When the project starts it makes a request to the Studio Ghibli API collecting all the available movie data. After this request the data is filtered and saved to a MongoDB cluster and is available for querying.

## Running the project

To the project to run properly, node 17.x or superior is needed.

1.  Clone the project.
2.  Verify if the .env file follow the structure:

> PORT="3000"
> LOGS_DIR="./logs"
> GHIBLI_API="https://ghibliapi.herokuapp.com/films?200"
> URL_DB_GUEST="mongodb+srv://guest:oAQ7snBfMdHdSKh5@cluster0.eob50ps.mongodb.net/test"

3.  Run `npm install` on the terminal
4.  Run `npm run start` on the terminal

## API Documentation

For a better experience, the API documentation has been placed at `http://localhost:3000/AnimesConsultingAPI.html`. The project must be running for the documentation to work.
