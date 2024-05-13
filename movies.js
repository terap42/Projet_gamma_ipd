export default async function handler(req, rest){
    const response = await fetch ("https://reactnative.dev/movies.json");
    const movies = await response.json();
    rest.status(200).json(movies.movies);
}