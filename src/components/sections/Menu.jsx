"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Menu() {
  const [activeCategory, setActiveCategory] = useState("sandwiches");

  const categories = [
    { id: "sandwiches", name: "Sandwiches" },
    { id: "breakfast", name: "Breakfast" },
    { id: "lunch", name: "Lunch" },
    { id: "mocktails", name: "Mocktails" },
  ];

  const menuItems = {
    sandwiches: [
      {
        name: "Zesty Chicken Crunchwich",
        description:
          "Crispy chicken, fresh greens, bold flavor",
        // price: "₹159",
        image: "/zesty-chicken-crunchwich.avif",
        // dietary: ["vegetarian"],
      },
      {
        name: "GrillMasters Classic Chicken",
        description:
          "Juicy chicken, flame-kissed char, timeless taste",
        // price: "₹159",
        image: "/grill-masters-classic-chicken.avif",
      },
      {
        name: "Mushroom Melt",
        description:
          "Savory mushrooms, melted cheese, warm comfort",
        // price: "₹139",
        image: "/mushroom-melt.avif",
        dietary: ["vegetarian"],
      },
    ],
    breakfast: [
      {
        name: "Wheat Puttu with Kadala",
        description:
          "Soft wheat puttu, hearty kadala curry, homestyle comfort",
        // price: "$85",
        image: "/breakfast1.png",
        dietary: ["vegetarian"],
      },
      {
        name: "Idli Vada with Sambhar",
        description:
          "Fluffy idlis, crispy vada, classic sambhar flavor",
        // price: "$42",
        image: "/breakfast-2.jpg",
        dietary: ["vegetarian"],
      },
      {
        name: "Idiyappam with Egg roast",
        description:
          "Soft idiyappam, spicy egg roast, rich Kerala taste",
        // price: "₹105",
        image: "/breakfast-3.jpg",
      },
    ],
    lunch: [
      {
        name: "Kerala Veg Meals",
        description:
          "Steamed rice, assorted vegetable curries, crispy papadam",
        // price: "120₹",
        image: "/lunch-1.jpg",
        dietary: ["vegetarian"],
      },
      {
        name: "Chicken Dum Biriyani",
        description:
          "Aromatic basmati rice, tender chicken, Kerala spices",
        // price: "₹315",
        image: "/lunch-2.jpg",
        // dietary: ["vegetarian"],
      },
      {
        name: "Parotta with Butter Chicken",
        description:
          "Flaky parotta served with creamy, spiced butter chicken",
        // price: "₹160",
        image: "/lunch-3.jpg",
        // dietary: ["vegetarian"],
      },
    ],
    mocktails: [
      {
        name: "Kannur Cocktail",
        description: "A refreshing fruity mix with vibrant tropical flavors",
        // price: "$12-$150",
        image: "/mock-1.jpg",
      },
      {
        name: "Kumbanad 7 Cocktail",
        description:
          "Tropical fruit medley with a sparkling twist",
        // price: "$16-$22",
        image: "/mock-2.jpg",
      },
      {
        name: "Royal Choco Dry Fruit",
        description:
          "Rich chocolate with crunchy dry fruits",
        // price: "$16-$22",
        image: "/mock-3.jpg",
      }
    ],
  };

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Menu
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Step into House of Travancore and let the warmth of tradition, 
            hospitality, and flavor embrace you—one plate at a time.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id)}
              className={`${
                activeCategory === category.id
                  ? "bg-amber-600 hover:bg-amber-700 text-white"
                  : "border-amber-600 text-amber-600 hover:bg-amber-50"
              }`}
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems[activeCategory]?.map((item, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                {item.dietary && (
                  <div className="absolute top-2 right-2">
                    {item.dietary.map((diet) => (
                      <Badge
                        key={diet}
                        variant="secondary"
                        className="bg-green-100 text-green-800"
                      >
                        {diet}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {item.name}
                  </h3>
                  <span className="text-lg font-bold text-amber-600">
                    {item.price}
                  </span>
                </div>
                <p className="text-gray-600">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="/House of Travancore Menu.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3">
            View Full Menu
          </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
