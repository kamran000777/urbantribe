const SEARCH_ITEM = 'search__item';

export function searchItem(finditem){
      return{
            type:SEARCH_ITEM,
            payload:finditem
      }
}

const initialSearch = {
      search:""
}
const searchReducer =(state=initialSearch,action)=>{
  switch(action.type){
        case SEARCH_ITEM:
              return {
              search:action.payload
              }
              
      default:
            return state;
  }
}

export default searchReducer;