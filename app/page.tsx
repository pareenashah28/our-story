"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import PhotoVideoGallery from "@/components/photo-video-gallery"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-rose-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-amber-100">
        <div className="container mx-auto px-4 py-4">
          <Tabs defaultValue="early-years" className="w-full">
            <TabsList className="grid w-full max-w-3xl mx-auto grid-cols-3 bg-amber-50/50">
              <TabsTrigger value="early-years" className="text-sm md:text-base">
                Our Early Years
              </TabsTrigger>
              <TabsTrigger value="family-years" className="text-sm md:text-base">
                Our Family's Early Years
              </TabsTrigger>
              <TabsTrigger value="want-to-know" className="text-sm md:text-base">
                Things We Want You to Know
              </TabsTrigger>
            </TabsList>

            {/* Hero Section */}
            <div className="py-16 text-center">
              <h1 className="text-6xl md:text-8xl font-serif italic text-amber-900 mb-12">Our Story</h1>

              {/* Two Photos */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12 px-4">
                <div className="aspect-[3/4] bg-gradient-to-br from-amber-200 to-rose-200 rounded-lg shadow-lg overflow-hidden">
                  <img
                    src="/romantic-couple-portrait-vintage.jpg"
                    alt="Our Story - Photo 1"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[3/4] bg-gradient-to-br from-rose-200 to-amber-200 rounded-lg shadow-lg overflow-hidden">
                  <img
                    src="/couple-together-happy-moments.jpg"
                    alt="Our Story - Photo 2"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Explanation and Video Links */}
              <div className="max-w-3xl mx-auto px-4 space-y-6">
                <p className="text-lg leading-relaxed text-gray-700 text-balance">
                  Welcome to our story - a collection of memories, moments, and milestones that have shaped our journey
                  together. Here you'll find photos, videos, and stories from the different chapters of our lives. Each
                  section holds special memories we want to share with you.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <a
                    href="#video-1"
                    className="text-amber-700 hover:text-amber-900 font-medium underline underline-offset-4"
                  >
                    Watch Our Wedding Video
                  </a>
                  <span className="text-gray-400">•</span>
                  <a
                    href="#video-2"
                    className="text-amber-700 hover:text-amber-900 font-medium underline underline-offset-4"
                  >
                    Our First Year Together
                  </a>
                  <span className="text-gray-400">•</span>
                  <a
                    href="#video-3"
                    className="text-amber-700 hover:text-amber-900 font-medium underline underline-offset-4"
                  >
                    Family Highlights
                  </a>
                </div>
              </div>
            </div>

            {/* Tab Content with Galleries */}
            <div className="container mx-auto px-4 pb-16">
              <TabsContent value="early-years" className="mt-0">
                <PhotoVideoGallery
                  title="Our Early Years"
                  description="The beginning of our journey together - first dates, adventures, and falling in love."
                />
              </TabsContent>

              <TabsContent value="family-years" className="mt-0">
                <PhotoVideoGallery
                  title="Our Family's Early Years"
                  description="Growing our family, precious first moments, and building our home together."
                />
              </TabsContent>

              <TabsContent value="want-to-know" className="mt-0">
                <PhotoVideoGallery
                  title="Things We Want You to Know"
                  description="Special memories, life lessons, and moments that define who we are as a family."
                />
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </nav>
    </div>
  )
}
