import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const Gallery = () => {
  const { t, lang } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  // Gallery descriptions in German and English
  const descriptions = {
    de: [
      "Reiter am See",
      "Alpines Abenteuer",
      "Historische Ruinen",
      "Reitplatz mit Alpen",
      "Herde in der Weide",
      "Trainer und Pferd",
      "Tal-Trekking",
      "Paddock mit Bergen",
      "Sattelkammer",
      "Pferde in der Natur",
      "Steinturm Landschaft",
      "Sonnenuntergang Weide",
      "Lakeside Trekking",
    ],
    en: [
      "Riders by the Lake",
      "Alpine Adventure",
      "Historic Ruins",
      "Riding Arena with Alps",
      "Herd in Pasture",
      "Trainer and Horse",
      "Valley Trekking",
      "Paddock with Mountains",
      "Saddle Room",
      "Horses in Nature",
      "Stone Tower Landscape",
      "Sunset Pasture",
      "Lakeside Trekking",
    ],
  };

  const images = Array.from({ length: 13 }, (_, i) => ({
    src: `/images/img-${i + 1}.jpg`,
    alt: descriptions[lang][i],
  }));

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section id="gallery" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-widest text-primary">{t.gallery.label}</span>
          <h2 className="font-serif text-4xl md:text-5xl mt-2">{t.gallery.title}</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.gallery.description}
          </p>
        </motion.div>

        {/* Slider */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl shadow-medium">
            <motion.img
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              className="h-full w-full object-cover"
            />

            {/* Image Description */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-transparent p-6">
              <p className="text-white font-serif text-lg">{images[currentIndex].alt}</p>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white rounded-full p-3 transition-colors"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white rounded-full p-3 transition-colors"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          {/* Slide Counter */}
          <div className="mt-6 text-center text-muted-foreground">
            {currentIndex + 1} / {images.length}
          </div>

          {/* Thumbnail Row */}
          <div className="mt-6 flex gap-2 overflow-x-auto pb-2">
            {images.map((image, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`flex-shrink-0 h-20 w-20 rounded-lg overflow-hidden border-2 transition-all ${
                  index === currentIndex
                    ? "border-primary shadow-medium"
                    : "border-transparent opacity-60 hover:opacity-100"
                }`}
              >
                <img
                  src={image.src}
                  alt={`Thumbnail ${index + 1}`}
                  className="h-full w-full object-cover"
                />
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
