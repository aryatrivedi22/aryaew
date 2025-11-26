import { ExternalLink, Map, MapPin } from "lucide-react";

export default function ContactMap() {
  const address =
    "Arya Engineering Works, B3/C Wing 308 Chakala, Hanuman Nagar Andheri (E), Mumbai, Maharashtra - 400093, India";
  const encodedAddress = encodeURIComponent(address);

  return (
    <div className="w-full max-w-6xl mx-auto mt-8 p-6">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Address Section */}
        <div className="p-6 bg-linear-to-r from-blue-600 to-blue-700">
          <h2 className="text-2xl font-bold text-white mb-2">Visit Us</h2>
          <div className="flex items-start text-white">
            <MapPin />
            <div>
              <p className="font-semibold">Arya Engineering Works</p>
              <p className="text-blue-100">
                B3/C Wing 308 Chakala, Hanuman Nagar
              </p>
              <p className="text-blue-100">
                Andheri (E), Mumbai, Maharashtra - 400093
              </p>
              <p className="text-blue-100">India</p>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="relative w-full h-96">
          <iframe
            src={`https://maps.google.com/maps?q=${encodedAddress}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0"
          />
        </div>

        {/* Action Buttons */}
        <div className="p-6 bg-gray-50 flex flex-wrap gap-3">
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <ExternalLink className="mr-2" />
            Open in Google Maps
          </a>
          <a
            href={`https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors"
          >
            <Map className="mr-2" />
            Get Directions
          </a>
        </div>
      </div>
    </div>
  );
}
