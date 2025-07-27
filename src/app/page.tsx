"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { MenuIcon, XIcon } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const images = [
  { src: "/new1.webp", alt: "New 1", id: "2" },
  { src: "/new2.webp", alt: "New 2", id: "2" },
  { src: "/new3.webp", alt: "New 3", id: "2" },
  { src: "/new4.webp", alt: "New 4", id: "2" },
  { src: "/new5.webp", alt: "New 5", id: "2" },
  { src: "/set2.webp", alt: "Set 1", id: "10" },
  { src: "/set1.webp", alt: "Set 2", id: "10" },
  { src: "/f1.webp", alt: "Sushi 1", id: "9" },
  { src: "/f2.webp", alt: "Sushi 2", id: "9" },
  { src: "/f3.webp", alt: "Sushi 3", id: "9" },
  { src: "/mini-rolls.webp", alt: "Mini Rolls", id: "9" },
  { src: "/firmeni1.webp", alt: "Firm Rolls", id: "9" },
  { src: "/desert.webp", alt: "Dessert", id: "3" },
  { src: "/fastfood.webp", alt: "Fast Food", id: "4" },
  { src: "/pizza.webp", alt: "Pizza", id: "4" },
  { src: "/pizza1.webp", alt: "Pizza 1", id: "4" },
  { src: "/pizza2.webp", alt: "Pizza 2", id: "4" },
  { src: "/hot-zakuski.webp", alt: "Hot Dish", id: "6" },
  { src: "/hot.webp", alt: "Hot Dish", id: "6" },
  { src: "/jareni.webp", alt: "Jareni", id: "7" },
  { src: "/sup3.webp", alt: "Soup", id: "8" },
  { src: "/salad.webp", alt: "Salad", id: "5" },
  { src: "/drink.webp", alt: "Drink", id: "1" },
  { src: "/drink1.webp", alt: "Drink 1", id: "1" },
  { src: "/drink2.webp", alt: "Drink 2", id: "1" },
];

const categories = [
  { label: "Новинки", id: "2" },
  { label: "Сеты", id: "10" },
  { label: "Роллы", id: "9" },
  { label: "Десерты", id: "3" },
  { label: "Фаст фуд", id: "4" },
  { label: "Горячие блюда", id: "6" },
  { label: "Жаренные роллы", id: "7" },
  { label: "Супы", id: "8" },
  { label: "Салаты", id: "5" },
  { label: "Напитки", id: "1" },
];

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="bg-black text-white min-h-screen w-full overflow-x-hidden">
      {/* Header меню */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-yellow-500/30 shadow-lg">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 text-yellow-400 font-bold text-xl sm:text-2xl">
            <span>Menu</span>
          </div>
          <button
            className="sm:hidden text-yellow-400"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>
          <nav className="hidden sm:flex gap-3">
            {categories.map((cat) => (
              <a key={cat.id} href={`#${cat.id}`}>
                <Button
                  variant="ghost"
                  className="text-yellow-400 hover:bg-yellow-500/20 hover:text-yellow-300 text-sm md:text-base"
                >
                  {cat.label}
                </Button>
              </a>
            ))}
          </nav>
        </div>
        {isMenuOpen && (
          <nav className="sm:hidden bg-black border-t border-yellow-500/30">
            <div className="px-4 py-4 flex flex-col gap-2">
              {categories.map((cat) => (
                <a
                  key={cat.id}
                  href={`#${cat.id}`}
                  className="py-2 px-4 text-yellow-400 hover:bg-yellow-500/20 rounded-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {cat.label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </header>

      <main className="pt-32">
        {categories.map((category) => (
          <section
            key={category.id}
            id={category.id}
            className=""
          >
            <h2 className="text-3xl font-bold mb-4">{category.label}</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 sm:grid-cols-1 gap-4">
              {images
                .filter((img) => img.id === category.id)
                .map((img, index) => (
                  <motion.div
                    key={index}
                    className="relative w-full aspect-[3/4]"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover"
                      sizes="100vw"
                      priority={index === 0}
                      onError={(e) => {
                        e.currentTarget.src = "/fallback.webp";
                      }}
                    />
                  </motion.div>
                ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}