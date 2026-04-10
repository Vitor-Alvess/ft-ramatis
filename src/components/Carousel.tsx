"use client";

import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface ICarouselProps {
  children: React.ReactNode[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showDots?: boolean;
  showArrows?: boolean;
}

export const Carousel = ({
  children,
  autoPlay = true,
  autoPlayInterval = 5000,
  showDots = true,
  showArrows = true,
}: ICarouselProps): React.JSX.Element => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  const totalSlides = children.length;

  const goToSlide = (index: number): void => {
    setCurrentIndex(index);
  };

  const goToPrevious = (): void => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
  };

  const goToNext = (): void => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    if (autoPlay && !isPaused && totalSlides > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
        );
      }, autoPlayInterval);

      return () => clearInterval(interval);
    }
  }, [autoPlay, isPaused, autoPlayInterval, totalSlides]);

  if (totalSlides === 0) {
    return <div>No items to display</div>;
  }

  return (
    <div
      className="relative w-full"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {children.map((child, index) => (
            <div key={index} className="min-w-full flex-shrink-0">
              {child}
            </div>
          ))}
        </div>
      </div>

      {showArrows && totalSlides > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-background/80 p-3 text-foreground shadow-lg transition-all hover:bg-background hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label="Previous slide"
          >
            <FaChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-background/80 p-3 text-foreground shadow-lg transition-all hover:bg-background hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label="Next slide"
          >
            <FaChevronRight className="h-5 w-5" />
          </button>
        </>
      )}

      {showDots && totalSlides > 1 && (
        <div className="mt-6 flex justify-center gap-2">
          {children.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex
                  ? "w-8 bg-primary"
                  : "w-2 bg-foreground/30 hover:bg-foreground/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

