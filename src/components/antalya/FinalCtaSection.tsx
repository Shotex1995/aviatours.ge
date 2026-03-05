export default function FinalCtaSection() {
  return (
    <section className="bg-gradient-to-r from-orange-500 to-orange-600 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="mb-4 text-3xl font-extrabold text-white sm:text-4xl">მზად ხართ ანტალიისთვის?</h2>
        <p className="mb-8 text-lg text-orange-100">დაჯავშნეთ ახლავე და მიიღეთ საუკეთესო ფასი. ჩვენი გუნდი მუდმივად მზადაა, რომ დაგეხმაროთ.</p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a href="#lead-form" className="inline-flex items-center gap-2 rounded-full bg-white px-10 py-4 text-lg font-bold text-orange-600 shadow-xl transition-all hover:bg-orange-50 active:scale-95">დაჯავშნე — 1,550₾-დან</a>
          <a href="tel:+995558302303" className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-white/10">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" /></svg>
            +995 558 302 303
          </a>
        </div>
      </div>
    </section>
  );
}
