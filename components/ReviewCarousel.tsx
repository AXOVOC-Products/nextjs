"use client";
import { useState, useRef, useEffect } from "react";

const reviews = [
  {
    initials: "JA",
    name: "John Alba",
    date: "August 15, 2025",
    color: "bg-pink-200",
    text: "What you’re building is exactly what my athletes need. Lab-quality data, without the lab. I’m in.",
  },
  {
    initials: "MS",
    name: "Manpreet Singh",
    date: "August 10, 2025",
    color: "bg-blue-200",
    text: "As someone focused on longevity, I’ve been searching for something like this. It’s rare to see a product in development that’s this aligned with the science.",
  },
  {
    initials: "RS",
    name: "Roger Seth",
    date: "July 16, 2025",
    color: "bg-green-200",
    text: "I’ve reviewed dozens of wearables—most of them focus on noise. What you’re building focuses on what matters",
  },
  {
    initials: "AD",
    name: "Adam DaSilva",
    date: "July 10, 2025",
    color: "bg-red-200",
    text: "I can't wait for this product to launch. The science and features look promising—I've been searching for something like this to take my training to the next level.",
  },
];

export default function ReviewCarousel() {
  const [current, setCurrent] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const card = container.children[current] as HTMLElement | undefined;
    if (!card) return;

    // Compute horizontal offset so the card is centered
    const offset =
      card.offsetLeft - container.clientWidth / 2 + card.clientWidth / 2;

    container.scrollTo({
      left: offset,
      behavior: current === 0 ? "auto" : "smooth", // no scroll animation on mount
    });
  }, [current]);

  const prev = () =>
    setCurrent((prev) => (prev > 0 ? prev - 1 : prev));
  const next = () =>
    setCurrent((prev) =>
      prev < reviews.length - 1 ? prev + 1 : prev
    );

  return (
    <div className="relative">
      {/* Left Arrow */}
      <button
        onClick={prev}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gray-400 bg-opacity-80 hover:bg-opacity-100 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg focus:outline-none"
        aria-label="Previous review"
        disabled={current === 0}
        style={{ opacity: current === 0 ? 0.4 : 1 }}
      >
        <svg
          width="32"
          height="32"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      {/* Cards */}
      <div className="overflow-x-auto scrollbar-hide">
        <div
          ref={scrollRef}
          className="flex gap-8 px-16 md:px-8"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-80 bg-white rounded-3xl shadow-xl p-8 mb-4 transition-all duration-300 border border-gray-100"
              style={{ scrollSnapAlign: "center" }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div
                  className={`w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold text-gray-700 ${review.color}`}
                >
                  {review.initials}
                </div>
                <div>
                  <div className="text-xs text-gray-500">
                    {review.date}
                  </div>
                  <div className="text-lg font-bold text-gray-800">
                    {review.name}
                  </div>
                </div>
              </div>
              <div className="text-gray-800 text-base leading-relaxed">
                {review.text}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Arrow */}
      <button
        onClick={next}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gray-400 bg-opacity-80 hover:bg-opacity-100 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg focus:outline-none"
        aria-label="Next review"
        disabled={current === reviews.length - 1}
        style={{
          opacity: current === reviews.length - 1 ? 0.4 : 1,
        }}
      >
        <svg
          width="32"
          height="32"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
}
