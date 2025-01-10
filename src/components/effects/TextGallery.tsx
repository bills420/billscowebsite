import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface GalleryItem {
  title: string;
  description: string;
  image: string;
}

interface TextGalleryProps {
  items: GalleryItem[];
}

const TextGallery: React.FC<TextGalleryProps> = ({ items }) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="space-y-4">
        {items.map((item, index) => (
          <button
            key={index}
            className={`text-left w-full p-4 rounded-lg transition-colors ${
              selectedIndex === index ? 'bg-matte-black' : 'hover:bg-matte-black/50'
            }`}
            onClick={() => setSelectedIndex(index)}
          >
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="text-off-white mt-2">{item.description}</p>
          </button>
        ))}
      </div>
      
      <div className="relative h-[400px]">
        <AnimatePresence>
          {selectedIndex !== null && (
            <motion.img
              key={selectedIndex}
              src={items[selectedIndex].image}
              alt={items[selectedIndex].title}
              className="absolute inset-0 w-full h-full object-cover rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default TextGallery;