"use client";
import React from "react";
import ReviewCarousel from "@/components/ReviewCarousel";

interface SlideStep {
  image: string;
  title: string;
  desc: string;
}

interface ScrollSectionProps {
  slideSteps: SlideStep[];
}

export default function ScrollSection({ slideSteps }: ScrollSectionProps) {
  return (
    <>
      {/* Review Carousel Section - Bottom of Page */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-gray-900 mb-6">
            Confidence from the Community
          </h2>
          <p className="text-lg text-center text-gray-600 mb-12">
            Join a growing network of athletes, longevity enthusiasts, and
            researchers using Vortex to unlock their true potential.
          </p>
          <ReviewCarousel />
        </div>
      </div>

      {/* Why Vortex Matters for Everyone - Card Section */}
      <div className="bg-white py-16 px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-10 text-center">
          Why Vortex Matters for <span className="italic">Everyone</span>
        </h2>
        <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto">
          {slideSteps.map((step, idx) => (
            <div
              key={idx}
              className="flex-1 rounded-2xl shadow-lg bg-gray-50 overflow-hidden flex flex-col items-center"
            >
              <img
                src={step.image}
                alt={step.title}
                className="w-full object-contain max-h-56 bg-white"
                style={{ maxWidth: 420 }}
                draggable={false}
              />
              <div className="p-6 w-full flex flex-col items-center">
                <div className="text-lg font-bold text-black mb-2 text-center">
                  {step.title}
                </div>
                <div className="text-gray-700 text-base text-center">
                  {step.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}