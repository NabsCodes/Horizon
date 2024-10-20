import { useEffect, RefObject } from "react";

// Custom hook to detect clicks outside of a specified element
function useClickOutside(
  ref: RefObject<HTMLElement>,
  onOutsideClick: () => void,
) {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent | TouchEvent) {
      // Check if the clicked element is outside the referenced element
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onOutsideClick(); // Call the provided callback function
      }
    }

    // Add event listener for mouse down events and touch start events
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [ref, onOutsideClick]); // Re-run the effect if ref or onOutsideClick changes
}

export default useClickOutside;
