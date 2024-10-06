import React from "react";
import { useSwipeable } from "react-swipeable";

const SwipeComponent = ({ children, removeJob, saveJob }) => {
  const handlers = useSwipeable({
    onSwipedLeft: () => removeJob(),
    onSwipedRight: () => saveJob(),
    preventScrollOnSwipe: true,
    trackMouse: true, // Enable swipe with mouse as well
  });

  return (
    <div
      {...handlers}
      // style={{ width: "100%", height: "100vh", backgroundColor: "lightgray" }}
    >
      {/* <h2>Swipe left or right!</h2> */}
      {children}
    </div>
  );
};

export default SwipeComponent;
