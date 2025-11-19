import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock, Phone, Utensils } from "lucide-react";

export function Location() {
  return (
    <section id="location" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Visit Us
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Located in the heart of the culinary district, we&apos;re easily
            accessible and ready to welcome you for an unforgettable dining
            experience
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Map Placeholder */}
          <div className="relative">
            <div className="aspect-square bg-gray-300 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1996743.342719866!2d75.8978349!3d12.1879322!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae177297af11cf%3A0x58d79f7e5fa641b!2sHouse%20Of%20Travancore%20Restaurants%20Private%20Limited!5e0!3m2!1sen!2sin!4v1763093216989!5m2!1sen!2sin"
                className="w-full h-full border-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Location Details */}
          <div className="space-y-6">
            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-amber-600 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Address
                    </h3>
                    <p className="text-gray-600">
                      9th Main Rd, Babusabpalya, 
                      <br />
                       Kalyan Nagar, Bengaluru,
                      <br />
                      Karnataka 560113
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-amber-600 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Hours
                    </h3>
                    <div className="space-y-1 text-gray-600">
                      <div className="flex justify-between gap-x-4">
                        <span>Sunday - Monday</span>
                        <span>8:00 AM - 12:00 AM</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-amber-600 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Contact
                    </h3>
                    <p className="text-gray-600">
                      Phone: +91 9740691494
                      <br />
                      Email: Travancorerestaurants@gmail.com
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
