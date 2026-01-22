import { useState } from 'react';
import { cn } from '@/lib/utils';

interface ImageGalleryProps {
  images: string[];
  parkName: string;
  className?: string;
}

export const ImageGallery = ({ images, parkName, className }: ImageGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  if (!images || images.length === 0) return null;

  return (
    <>
      <div className={cn("grid grid-cols-2 md:grid-cols-3 gap-4", className)}>
        {images.map((image, index) => (
          <div
            key={index}
            className={cn(
              "relative rounded-2xl overflow-hidden cursor-pointer group",
              index === 0 && "md:col-span-2 md:row-span-2"
            )}
            onClick={() => setSelectedImage(index)}
          >
            <div className="aspect-square md:aspect-auto md:h-full">
              <img
                src={image}
                alt={`${parkName} - Photo ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-secondary text-4xl font-light"
            aria-label="Close gallery"
          >
            ×
          </button>
          <img
            src={images[selectedImage]}
            alt={`${parkName} - Photo ${selectedImage + 1}`}
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(index);
                }}
                className={cn(
                  "w-2 h-2 rounded-full transition-all",
                  index === selectedImage ? "bg-secondary w-8" : "bg-white/50"
                )}
                aria-label={`View photo ${index + 1}`}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};
