"use client";
import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { useSpring, animated } from "react-spring";


function Number({ n }: { n: number }) {
  const [startAnimation, setStartAnimation] = useState(false);
  const numberRef = useRef(null);

  const { number } = useSpring({
    from: { number: 0 },
    number: startAnimation ? n : 0,
    delay: 20,
    config: { mass: 1, tension: 20, friction: 10 },
    onRest: () => {
      // This callback is called when the animation completes
      // Set startAnimation to true to re-run the animation
      setStartAnimation(true);
    },
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // If the component is in view, start the animation
            setStartAnimation(true);
          }
        });
      },
      { threshold: 0.5 } // Adjust the threshold as needed
    );

    // Start observing the component when it mounts
    if (numberRef.current) {
      observer.observe(numberRef.current);
    }

    // Stop observing when the component unmounts
    return () => {
      if (numberRef.current) {
        observer.unobserve(numberRef.current);
      }
    };
  }, []);

  return <animated.div ref={numberRef}>{number.to((n) => n.toFixed(0))}</animated.div>;
}

const achievementsList = [
  {
    metric: "Projects",
    value: "100",
    postfix: "+",
  },
  {
    prefix: "~",
    metric: "Users",
    value: "100,000",
  },
  {
    metric: "Awards",
    value: "7",
  },
  {
    metric: "Years",
    value: "5",
  },
];

const AchievementsSection= () => {
  return (
    <div className=" px-4 xl:gap-16 sm:py-4 xl:px-16">
      <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
        {achievementsList.map((achievement, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
            >
              <h2 className="text-white text-4xl font-bold flex flex-row">
                {achievement.prefix}
                {/* <AnimatedNumbers
                  includeComma
                  animateToNumber={parseInt(achievement.value)}
                  locale="en-US"
                  className="text-white text-4xl font-bold"
                
                /> */}
                <Number n={parseInt(achievement.value)}/>
                {achievement.postfix}
              </h2>
              <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementsSection;
