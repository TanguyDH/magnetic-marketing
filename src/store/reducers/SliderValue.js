

const sliderValue = {
  sliderValue: 499
};


const reducerSliderValue = (state = sliderValue, action) => {
    switch (action.type) {
      case "SET_SLIDER_VALUE":
        return {
          ...state,
          sliderValue: action.value
        };

      default:
        return state;
    }
}


export default reducerSliderValue;