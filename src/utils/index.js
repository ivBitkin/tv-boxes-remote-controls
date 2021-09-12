export { sceneContent } from './sceneContent';
export { sceneSidebar } from './sceneSidebar';
export { scenePlayer } from './scenePlayer';
// eslint-disable-next-line no-undef
export const uniqueGenres = (arr) => [...new Set(arr.flat())];
export const filterFilms = (films, genres, selectedGenreIndex) => films.filter(film =>
  film.genre_ids.includes(genres[selectedGenreIndex]));