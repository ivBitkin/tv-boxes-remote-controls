export const sceneSidebar = (event, selectGenreIndex,genres, setSelectGenreIndex, setScene, setSelectedGenreIndex) => {
   switch (event.keyCode) {
    case 40:
      if(selectGenreIndex < genres.length) {
        setSelectGenreIndex( prevState => prevState + 1);
      } else {
        setSelectGenreIndex( 1);
      }
      break;
    case 38:
      if(selectGenreIndex > 1 ) {
        setSelectGenreIndex( prevState => prevState - 1);
      } else {
        setSelectGenreIndex( genres.length);
      }
      break;
    case 39:
      setScene('content');
      break;
    case 13:
      setSelectedGenreIndex(selectGenreIndex - 1);
      break;
    default:
      break;
  }
};