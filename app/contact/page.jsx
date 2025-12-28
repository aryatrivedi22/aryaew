import ContactMap from "./_component/contact-map";
import ContactForm from "./_component/contact-form";

const ContactSection = () => {
  return (
    <section id="contact" className="pb-20 bg-gray-100">
      {/* Hero Banner */}
      <div className="relative bg-linear-to-r from-primary/90 to-primary/70 overflow-hidden mb-16 min-h-[350px] flex flex-col items-center justify-center gap-4">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>
        <h1 className="font-montserrat text-5xl md:text-6xl font-bold text-white z-10 tracking-tight">
          CONTACT US
        </h1>
        <p className="w-11/12 text-center text-xl font-semibold text-gray-200">
          Want to get in touch with us? Either fill out the form with your query
          inquiry or find the contact number and email below.
        </p>
      </div>

      {/* Form and Contact Info Grid */}
      <div className="px-4 grid lg:grid-cols-2 gap-12 md:gap-28 max-w-6xl mx-auto">
        {/* Enquiry Form */}
        <div>
          <h2 className="text-3xl font-bold text-foreground mb-8">
            Enquiry Form
          </h2>
          {/* FORM */}
          <ContactForm />
        </div>

        {/* Contact Information */}
        <div>
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">
                Address:
              </h2>
              <p className="text-lg text-gray-900 font-medium">
                Arya Engineering Works
              </p>
              <p className="text-lg text-gray-800 mt-2">
                B3/C Wing 308 Chakala,
                <br />
                Hanuman Nagar Andheri (E),
                <br />
                Mumbai, Maharashtra - 400093,
                <br />
                India
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Phone:
              </h2>
              <p className="text-lg text-gray-800">+91-8850409725</p>
              <p className="text-lg text-gray-800">+91-9892279517</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Email:
              </h2>
              <a
                href="mailto:aryaengineeringwork24@gmail.com"
                className="text-lg text-blue-500 underline hover:text-blue-600"
              >
                aryaengineeringwork24@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
      <ContactMap />
    </section>
  );
};

export default ContactSection;
