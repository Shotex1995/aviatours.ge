import Image from "next/image";
import CountdownTimer from "./CountdownTimer";

export default function HeroSection() {
  return (
    <section className="relative h-[85vh] min-h-[600px]">
      <Image src="https://avia.ge/wp-content/uploads/2025/08/avia-tours-6.jpg" alt="ანტალიის სანაპირო" fill className="object-cover" sizes="100vw" priority />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />
      <div className="absolute inset-0 flex items-center justify-center px-4">
        <div className="text-center">
          <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-red-500/90 px-4 py-1.5 text-sm font-bold text-white backdrop-blur-sm">
            <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" /><span className="relative inline-flex h-2 w-2 rounded-full bg-white" /></span>
            დარჩა მხოლოდ 4 ადგილი ამ ფასად!
          </span>
          <div className="mb-3">
            <span className="inline-block rounded-full bg-orange-500/90 px-4 py-1.5 text-sm font-semibold text-white backdrop-blur-sm">All Inclusive | 5 დღე, 4 ღამე</span>
          </div>
          <h1 className="mb-4 text-5xl font-extrabold leading-tight text-white sm:text-6xl lg:text-7xl">ანტალიის ტური</h1>
          <p className="mx-auto mb-3 max-w-2xl text-lg text-white/80 sm:text-xl">მზიანი სანაპიროები, All Inclusive სერვისი და დაუვიწყარი მოგზაურობა თურქეთის საუკეთესო კურორტზე</p>
          <p className="mb-4 text-3xl font-extrabold text-white sm:text-4xl">
            <span className="mr-2 text-xl font-normal text-white/50 line-through">2,200₾</span>
            <span className="text-orange-400">1,550₾</span>
            <span className="text-lg font-normal text-white/60">-დან / ერთ პერსონაზე</span>
          </p>

          <CountdownTimer />

          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="#lead-form" className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-8 py-4 text-lg font-bold text-white shadow-2xl shadow-orange-500/30 transition-all hover:bg-orange-600 hover:shadow-orange-500/40 active:scale-95">
              დაჯავშნე ახლავე
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" /></svg>
            </a>
            <a href="tel:+995558302303" className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 bg-white/10 px-8 py-4 text-lg font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20 active:scale-95">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" /></svg>
              558 302 303
            </a>
            <a href="https://wa.me/995558302303?text=%E1%83%92%E1%83%90%E1%83%9B%E1%83%90%E1%83%A0%E1%83%AF%E1%83%9D%E1%83%91%E1%83%90!%20%E1%83%9B%E1%83%98%E1%83%9C%E1%83%93%E1%83%90%20%E1%83%90%E1%83%9C%E1%83%A2%E1%83%90%E1%83%9A%E1%83%98%E1%83%98%E1%83%A1%20%E1%83%A2%E1%83%A3%E1%83%A0%E1%83%98%E1%83%A1%20%E1%83%93%E1%83%90%E1%83%AF%E1%83%90%E1%83%95%E1%83%A8%E1%83%9C%E1%83%90" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-8 py-4 text-lg font-bold text-white shadow-2xl shadow-green-500/30 transition-all hover:bg-[#1fba59] active:scale-95">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347Z" /><path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75 0 1.72.447 3.335 1.23 4.738L2.25 21.75l5.138-1.182A9.71 9.71 0 0 0 12 21.75c5.385 0 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Z" clipRule="evenodd" /></svg>
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
