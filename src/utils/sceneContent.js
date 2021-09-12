export const sceneContent = (event, setScene, setSelectFilm, selectFilm, itemsLine, arr2d, setSelectedFilm) => {
  switch (event.keyCode) {
    case 37:
      if(selectFilm.item === 0){
        setScene('sideBar');
      } else {
        setSelectFilm({...selectFilm, item: selectFilm.item - 1 });
      }
      break;
    case 39:
      if(selectFilm.item < itemsLine - 1){
        if(selectFilm.item + 1 === arr2d[arr2d.length - 1].length && selectFilm.row + 1 === arr2d.length){
          setSelectFilm({...selectFilm, item: 0 });
        } else {
          setSelectFilm(prevState => ({...selectFilm, item: prevState.item + 1 }));
        }
      } else {
        setSelectFilm({...selectFilm, item: 0 });
      }
      break;
    case 40:
      if(selectFilm.row === arr2d.length - 1){
        setSelectFilm({...selectFilm, row: 0 });
      } else {

        if(selectFilm.item + 1 < arr2d[selectFilm.row + 1].length ){
          setSelectFilm(prevState => ({...selectFilm, row: prevState.row + 1 }));
        } else {
          setSelectFilm(prevState => ({ item: arr2d[arr2d.length - 1].length - 1, row: prevState.row + 1 }));
        }
      }
      break;
    case 38:
      if(selectFilm.row  === 0){
        setSelectFilm({...selectFilm, row: arr2d.length - 1 });
      } else {
        setSelectFilm(prevState => ({...selectFilm, row: prevState.row - 1}));
      }
      break;
    case 13:
      setSelectedFilm(arr2d[selectFilm.row][selectFilm.item]);
      setScene('player');
      break;
    default:
      break;
  }
};