
export const FETCH_RESTAURANT_DATA = 'FETCH_RESTAURANT_DATA';
export const fetchRestaurantData = () => dispatch => {
  const payload = {
    name: "Biryani by kilo"
  }

  dispatch({
    type: FETCH_RESTAURANT_DATA,
    payload  
  })
}