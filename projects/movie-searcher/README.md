# Technical Test

Create an application to search for movies

## API to use

- [https://www.omdbapi.com/](https://www.omdbapi.com/)
- API_KEY: 4287ad07

## Requirements

- It needs to show an input to search for the movie and a button to search.
- List the found movies and display the title, year, and poster.
- Make the movies display in a responsive grid.

### First iteration

- Avoid making the same search twice in a row.
- Make the search automatically as you type.
- Avoid making the search continuously while typing (debounce).

## Recommendations

- Start by showing how the result looks without making the fetch.
- For styles, we can use a CSS-less framework if functionality is the most important.
- Make sure you understand the API and what endpoint they are asking you.
- Keep the JSON info as static files to have an initial MVP.
- Avoid depending on the API contract. That is, avoid using the API keys directly in many places, as they might change.
- Handle the submit actions instead of click actions for forms.
- Sometimes it is more useful to use a FormData object instead of useRef to get the fields.
- It is a good practice to separate the logic of a component from the component itself.
