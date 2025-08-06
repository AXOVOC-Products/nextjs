import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function HomePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold text-black mb-6">
              Effort Without Purpose
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Everyone deserves the clarity and tools to reach their full potential— whether 
              it's winning races or thriving with the people they love.
            </p>
          </div>

          <div>
            <h2 className="text-2xl lg:text-3xl font-bold text-black mb-4">
              Finally, a simple way to measure the biomarkers that actually 
              matter for performance and long term health.
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Pre-order today and be the first to experience it.
            </p>
          </div>

          <Button 
            size="lg" 
            className="bg-white border-2 border-black text-black hover:bg-black hover:text-white transition-colors px-8 py-3 text-lg font-medium"
          >
            Pre-Order Now
          </Button>
        </div>

        {/* Right Images */}
        <div className="space-y-6">
          <div className="relative h-64 lg:h-80 rounded-lg overflow-hidden">
            <Image
              src="/nextjs/athletic-runner.jpg"
              alt="Person running on road"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-64 lg:h-80 rounded-lg overflow-hidden">
            <Image
              src="/nextjs/couple_exercising.jpg"
              alt="People exercising and doing planks"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
