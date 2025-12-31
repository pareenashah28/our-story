"use client"

interface PhotoVideoGalleryProps {
  title: string
  description: string
}

export default function PhotoVideoGallery({ title, description }: PhotoVideoGalleryProps) {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-4xl md:text-5xl font-serif italic text-amber-900">{title}</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">{description}</p>
      </div>
      
      {/* Gallery Grid - placeholder for photos and videos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Placeholder items */}
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div
            key={item}
            className="aspect-square bg-gradient-to-br from-amber-100 to-rose-100 rounded-lg shadow-md overflow-hidden flex items-center justify-center"
          >
            <span className="text-gray-400 text-sm">Photo/Video {item}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

