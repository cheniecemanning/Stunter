import "./StunterReducerState";

const stunterReducer = (state, action) => {
  // console.log("Reducer Action", action);

  switch (action.type) {
    case "SET_CURRENT_STUNTER":
      let SET_CURRENT_STUNTER = { ...state };
      SET_CURRENT_STUNTER.currentStunter = action.payload;
      return SET_CURRENT_STUNTER;

    case "IN_DROPZONE":
      let IN_DROPZONE = { ...state };
      IN_DROPZONE.zone = action.payload;
      return IN_DROPZONE;

    case "IS_DROPPED":
      let IS_DROPPED = { ...state };
      IS_DROPPED.zone = action.payload;

      return IS_DROPPED;

    case "IS_DRAGGING":
      let IS_DRAGGING = { ...state };
      IS_DRAGGING.dragging = action.payload;
      return IS_DRAGGING;

    case "STUNTER_LIKED":
      let STUNTER_LIKED = { ...state };
      STUNTER_LIKED.liked = action.payload;
      return STUNTER_LIKED;

    case "STUNTER_DISLIKED":
      let STUNTER_DISLIKED = { ...state };
      STUNTER_DISLIKED.disliked = action.payload;
      return STUNTER_DISLIKED;

    case "SAVED_STUNTERS":
      let SAVED_STUNTERS = { ...state };
      SAVED_STUNTERS.showSaved = action.payload;
      return SAVED_STUNTERS;
      
    default:
      throw new Error("Unexpected action");
  }
};
export default stunterReducer;
