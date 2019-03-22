

const modalValue = {
  modalValue: false
};


const reducerModalValue = (state = modalValue, action) => {
  switch (action.type) {
    case "SET_MODAL_VALUE":
      return {
        ...state,
        modalValue: action.value
      };

    default:
      return state;
  }
};


export default reducerModalValue;