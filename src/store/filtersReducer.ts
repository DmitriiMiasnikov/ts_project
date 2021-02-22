const SET_CURRENT_FILTER = 'SET_CURRENT_FILTER';

type InitialStates = {
  filters: {
    name: string,
    title: string
  }[],
  currentFilter: string | null
}

const initialStates: InitialStates = {
  filters: [
    {name: 'animation', title: 'Анимация'},
    {name: 'action', title: 'Боевики'},
    {name: 'scienceFiction', title: 'Фантастика'},
  ],
  currentFilter: null
}

export const filtersReducer = (state = initialStates, action: any) => {
  switch (action.type) {
    case (SET_CURRENT_FILTER): {
      return { ...state, currentFilter: action.currentFilter }
    }
    default: break;
  }
  return state
}

export const setCurrentFilter = (currentFilter: string) => {
  return { type: SET_CURRENT_FILTER, currentFilter }
}


// export const getList = (page = 1) => {
//   return async (dispatch: any) => {
//     const res = await listApi.getList(page);
//     dispatch(getListFunc(res));
//   }
// }