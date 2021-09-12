export const scenePlayer = (event, setScene, setSelectBtn, selectBtn) => {
  switch (event.keyCode) {
    case 37:
      if(selectBtn === 0){
        setSelectBtn(2);
      } else {
        setSelectBtn(prevState => prevState - 1);
      }
      break;
    case 39:
      if ( selectBtn < 2 ){
        setSelectBtn(prev => prev + 1);
      } else {
        setSelectBtn(0);
      }
      break;
    case 13:
      break;

    case 66:
      setScene('content');
      break;
    default:
      break;
  }
};