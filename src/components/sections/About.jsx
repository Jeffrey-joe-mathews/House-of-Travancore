import { Card, CardContent } from "@/components/ui/card";
import { Bike, Users, Heart, Leaf } from "lucide-react";

export function About() {
  const features = [
    {
      icon: Leaf,
      title: "Freshly Prepared",
      description: "Every dish is made to order — no shortcuts.",
    },
    {
      icon: Users,
      title: "Expert Chefs",
      description: "Our talented team creates memorable dining experiences",
    },
    {
      icon: Bike,
      title: "Fast Delivery",
      description: "Order instantly on Swiggy or Zomato, hot and fresh.",
    },
    {
      icon: Heart,
      title: "Made with Love",
      description: "Every dish is prepared with passion and attention to detail",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Story of
              <span className="block text-amber-600">Culinary Passion</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Rooted in the rich heritage of Kerala, House of Travancore is more than just a restaurant—it is a celebration of flavors, culture, and tradition. Inspired by the land of backwaters, coconut groves, and timeless recipes passed down through generations, we bring you a dining experience that is as soulful as it is memorable.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
Every dish at House of Travancore is crafted with care, balancing authenticity with a touch of modern flair. From fluffy appams and crisp Kerala parottas to aromatic curries and vibrant North Indian, Chinese, and continental favorites, our menu is a journey across flavors that comfort, surprise, and delight.            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="border-none shadow-sm hover:shadow-md transition-shadow"
                >
                  <CardContent className="p-4 text-center">
                    <feature.icon className="h-8 w-8 text-amber-600 mx-auto mb-2" />
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="/rest-2.jpeg"
                  alt="Chef preparing food"
                  className="w-full h-48 object-cover rounded-lg shadow-lg"
                />
                <img
                  src="/rest-1.jpeg"
                  alt="Restaurant interior"
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="space-y-4 mt-8">
                <img
                  src="/rest-3.jpeg"
                  alt="Fresh ingredients"
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
                <img
                  src="/mushroom-melt.avif"
                  alt="Plated dish"
                  className="w-full h-48 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
