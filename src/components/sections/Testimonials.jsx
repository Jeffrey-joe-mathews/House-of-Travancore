import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      name: "Alex K",
      role: "Google Guide",
      content: "The restaurant offers a great dining experience with delicious food that’s both affordable and perfect for students or solo diners. The staff is also very polite.",
      rating: 4,
      image: "/user.svg",
    },
    {
      name: "Alphia Gonmei",
      role: "Google Reviewer",
      content: "Absolutely loved the vibe! The restaurant has a calm, homely Kerala-style atmosphere. Food was fresh, authentic, and full of flavour. The staff were polite and made us feel truly welcome.",
      rating: 5,
      image: "/user.svg",
    },
    {
      name: "Lionel Sequeira",
      role: "Google Guide",
      content: "ordered their snacks several times from Swiggy and they are just too good.",
      rating: 5,
      image: "/user.svg",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our Guests Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don&apos;t just take our word for it — hear what our valued guests have to 
            say about their exceptional dining and ordering experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <CardContent className="p-6">
                {/* Stars */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-amber-400 fill-current"
                    />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-600 mb-6 italic">
                  &quot;{testimonial.content}&quot;
                </p>

                {/* Author */}
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
