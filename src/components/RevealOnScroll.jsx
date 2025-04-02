import { useEffect, useRef } from "react";

export const RevealOnScroll = ({ children }) => {
    const ref = useRef(null);

    useEffect(() => {
        // Create an IntersectionObserver instance
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    // Add the 'visible' class when the element is in view
                    ref.current.classList.add("visible");
                    // Stop observing once the element is visible
                    observer.unobserve(ref.current);
                }
            },
            {
                threshold: 0.2, // Trigger when 20% of the element is visible
                rootMargin: "0px 0px -50px 0px", // Adjust root margin if needed
            }
        );

        // Observe the element if the ref is assigned
        if (ref.current) {
            observer.observe(ref.current);
        }

        // Cleanup function to disconnect the observer
        return () => {
            if (ref.current) {
                observer.disconnect();
            }
        };
    }, []); // Empty dependency array ensures this runs only once

    return (
        <div ref={ref} className="reveal">
            {children}
        </div>
    );
};