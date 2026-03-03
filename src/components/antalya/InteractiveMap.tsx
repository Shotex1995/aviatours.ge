export default function InteractiveMap() {
  return (
    <section className="bg-gray-900 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 text-center">
          <h2 className="mb-2 text-3xl font-extrabold text-white sm:text-4xl">ანტალია რუკაზე</h2>
          <p className="text-gray-400">სასტუმროები, სანაპიროები და ღირსშესანიშნაობები</p>
        </div>
        <div className="overflow-hidden rounded-2xl shadow-2xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d204000!2d30.55!3d36.89!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c39aaeddadadc1%3A0x95c69f73fb7f68d0!2sAntalya%2C%20Turkey!5e0!3m2!1ska!2sge!4v1700000000000"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="ანტალიის რუკა"
          />
        </div>
      </div>
    </section>
  );
}
