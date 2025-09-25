"use client";
import { useEffect, useState, useMemo, useCallback } from "react";
import {
  motion,
  useMotionValue,
  useAnimation,
  useTransform,
} from "motion/react";

const IMGS = [
  "https://picsum.photos/id/287/500/500",
  "https://picsum.photos/id/1001/500/500",
  "https://picsum.photos/id/1025/500/500",
  "https://picsum.photos/id/1026/500/500",
  "https://picsum.photos/id/1027/500/500",
  "https://picsum.photos/id/1028/500/500",
  "https://picsum.photos/id/1029/500/500",
  "https://picsum.photos/id/1020/500/500",
];

// Custom hook for cylinder geometry calculations
const useCylinderGeometry = (faceCount, isScreenSizeSm) => {
  return useMemo(() => {
    const cylinderWidth = isScreenSizeSm ? 1100 : 1800;
    const faceWidth = (cylinderWidth / faceCount) * 2;
    const radius = cylinderWidth / (2 * Math.PI);
    return { cylinderWidth, faceWidth, radius };
  }, [faceCount, isScreenSizeSm]);
};

// Custom hook for autoplay functionality
const useAutoPlay = (autoplay, pauseOnHover, controls, rotation) => {
  const startInfiniteSpin = useCallback(
    (startAngle) => {
      controls.start({
        rotateY: [startAngle, startAngle - 360],
        transition: {
          duration: 20,
          ease: "linear",
          repeat: Infinity,
        },
      });
    },
    [controls]
  );

  useEffect(() => {
    if (autoplay) {
      const currentAngle = rotation.get();
      startInfiniteSpin(currentAngle);
    } else {
      controls.stop();
    }
  }, [autoplay, controls, rotation, startInfiniteSpin]);

  const handleMouseEnter = useCallback(() => {
    if (autoplay && pauseOnHover) {
      controls.stop();
    }
  }, [autoplay, pauseOnHover, controls]);

  const handleMouseLeave = useCallback(() => {
    if (autoplay && pauseOnHover) {
      const currentAngle = rotation.get();
      startInfiniteSpin(currentAngle);
    }
  }, [autoplay, pauseOnHover, controls, rotation, startInfiniteSpin]);

  return { handleMouseEnter, handleMouseLeave };
};

const RollingGallery = ({
  autoplay = false,
  pauseOnHover = false,
  images = [],
  className = "",
}) => {
  images = images.length > 0 ? images : IMGS;

  // Fix SSR compatibility
  const [isScreenSizeSm, setIsScreenSizeSm] = useState(false);
  // const [loadedImages, setLoadedImages] = useState({});

  useEffect(() => {
    setIsScreenSizeSm(window.innerWidth <= 640);
    const handleResize = () => setIsScreenSizeSm(window.innerWidth <= 640);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Use custom hooks
  const { cylinderWidth, faceWidth, radius } = useCylinderGeometry(
    images.length,
    isScreenSizeSm
  );
  const faceCount = images.length;

  const dragFactor = 0.05;
  const rotation = useMotionValue(0);
  const controls = useAnimation();

  const transform = useTransform(
    rotation,
    (val) => `rotate3d(0,1,0,${val}deg)`
  );

  const { handleMouseEnter, handleMouseLeave } = useAutoPlay(
    autoplay,
    pauseOnHover,
    controls,
    rotation
  );

  // const handleImageLoad = useCallback((index) => {
  //   setLoadedImages((prev) => ({ ...prev, [index]: true }));
  // }, []);

  const handleUpdate = useCallback(
    (latest) => {
      if (typeof latest.rotateY === "number") {
        rotation.set(latest.rotateY);
      }
    },
    [rotation]
  );

  const handleDrag = useCallback(
    (_, info) => {
      controls.stop();
      rotation.set(rotation.get() + info.offset.x * dragFactor);
    },
    [controls, rotation]
  );

  const handleDragEnd = useCallback(
    (_, info) => {
      const finalAngle = rotation.get() + info.velocity.x * dragFactor;
      rotation.set(finalAngle);

      if (autoplay) {
        const startInfiniteSpin = (startAngle) => {
          controls.start({
            rotateY: [startAngle, startAngle - 360],
            transition: {
              duration: 20,
              ease: "linear",
              repeat: Infinity,
            },
          });
        };
        startInfiniteSpin(finalAngle);
      }
    },
    [autoplay, controls, rotation]
  );

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowLeft") {
        rotation.set(rotation.get() + 30);
      } else if (event.key === "ArrowRight") {
        rotation.set(rotation.get() - 30);
      }
    };

    const galleryElement = document.querySelector('[role="region"]');
    if (galleryElement) {
      galleryElement.addEventListener("keydown", handleKeyDown);
      return () => galleryElement.removeEventListener("keydown", handleKeyDown);
    }
  }, [rotation]);

  //   if (typeof window === 'undefined') {
  //     return (
  //       <div className={`relative h-[500px] w-full overflow-hidden flex items-center justify-center ${className}`}>
  //         <div className="text-white">Content Loading...</div>
  //       </div>
  //     );
  //   }

  return (
    <div className={`relative h-[500px] w-full overflow-hidden ${className}`}>
      {/* Gradient overlays */}
      <div
        className="absolute top-0 left-0 h-full w-[48px] z-10 pointer-events-none"
        // style={{
        //   background:
        //     "linear-gradient(to left, rgba(0,0,0,0) 0%, #060010 100%)",
        // }}
      />
      <div
        className="absolute top-0 right-0 h-full w-[48px] z-10 pointer-events-none"
        // style={{
        //   background:
        //     "linear-gradient(to right, rgba(0,0,0,0) 0%, #060010 100%)",
        // }}
      />

      <div className="flex h-full items-center justify-center [perspective:1000px] [transform-style:preserve-3d]">
        <motion.div
          role="region"
          aria-label="3D image gallery"
          tabIndex={0}
          drag="x"
          dragElastic={0}
          dragConstraints={{ left: 0, right: 0 }}
          dragTransition={{ power: 0, timeConstant: 200 }}
          onDrag={handleDrag}
          onDragEnd={handleDragEnd}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          animate={controls}
          onUpdate={handleUpdate}
          style={{
            transform: transform,
            rotateY: rotation,
            width: cylinderWidth,
            transformStyle: "preserve-3d",
          }}
          className="flex min-h-[200px] cursor-grab items-center justify-center [transform-style:preserve-3d]"
        >
          {images.map((url, i) => (
            <div
              key={i}
              className="group absolute flex h-fit items-center justify-center p-[8%] [backface-visibility:hidden] md:p-[6%]"
              style={{
                width: `${faceWidth}px`,
                transform: `rotateY(${
                  (360 / faceCount) * i
                }deg) translateZ(${radius}px)`,
              }}
            >
              <img
                src={url}
                alt={`Gallery image ${i + 1}`}
                // onLoad={() => handleImageLoad(i)}
                className={`pointer-events-none h-[120px] w-[300px] rounded-[15px] border-[3px] border-white object-cover
                           transition-all duration-300 ease-out group-hover:scale-105
                           sm:h-[100px] sm:w-[220px]
                          `}
              />

              {/* Loading skeleton */}
              {/* {!loadedImages[i] && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-700 rounded-[15px] animate-pulse">
                  <div className="h-full w-full bg-gray-600 rounded-[12px]"></div>
                </div>
              )} */}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default RollingGallery;
