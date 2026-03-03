import Image from "next/image";
import type { Metadata } from "next";
import MobileStickyBar from "@/components/MobileStickyBar";

export const metadata: Metadata = {
  title: "ანტალიის ტური — AviaTours.ge | All Inclusive 1550₾-დან",
  description:
    "ანტალიის ტური All Inclusive — 5 დღე, 4 ღამე, ავიაბილეთი, სასტუმრო, კვება, დაზღვევა და ტრანსფერი. დაჯავშნეთ წინასწარ და დაზოგეთ.",
};

const galleryImages = [
  { src: "https://avia.ge/wp-content/uploads/2025/08/avia-tours-6.jpg", alt: "ანტალიის სანაპირო" },
  { src: "https://avia.ge/wp-content/uploads/2025/08/avia-tours-2-1.jpg", alt: "ანტალიის ხედი" },
  { src: "https://avia.ge/wp-content/uploads/2025/08/avia-tours-4-1.jpg", alt: "ანტალიის ბუნება" },
  { src: "https://avia.ge/wp-content/uploads/2025/08/avia-tours-3-1.jpg", alt: "ანტალიის ქალაქი" },
  { src: "https://avia.ge/wp-content/uploads/2025/08/avia-tours-1.jpg", alt: "ანტალიის აუზი" },
  { src: "https://avia.ge/wp-content/uploads/2025/06/turkuli-abanoebi-antalia.jpg", alt: "თურქული აბანოები" },
];

const includedIcons = [
  { d: "M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z", text: "ორმხრივი ავიაბილეთი თბილისიდან" },
  { d: "M19.006 3.705a.75.75 0 1 0-.512-1.41L6 6.838V3a.75.75 0 0 0-.75-.75h-1.5A.75.75 0 0 0 3 3v4.93l-1.006.365a.75.75 0 0 0 .512 1.41l16.5-6Z", text: "4 ან 5 ვარსკვლავიანი სასტუმრო" },
  { d: "M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM8.547 4.505a8.25 8.25 0 1 0 6.906 0 5.21 5.21 0 0 0-6.906 0Z", text: "All Inclusive კვება" },
  { d: "M12.516 2.17a.75.75 0 0 0-1.032 0 11.209 11.209 0 0 1-7.877 3.08.75.75 0 0 0-.722.515A12.74 12.74 0 0 0 2.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 0 0 .374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 0 0-.722-.516l-.143.001a11.209 11.209 0 0 1-7.734-3.08Z", text: "სამოგზაურო დაზღვევა" },
  { d: "M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25ZM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875h.375a3 3 0 1 1 6 0h3a3 3 0 1 1 6 0h.375c1.035 0 1.875-.84 1.875-1.875V15h-7.5Z", text: "აეროპორტის ტრანსფერი" },
];

const testimonials = [
  { name: "ნინო მ.", text: "ძალიან კარგი ტური იყო! სასტუმრო შესანიშნავი, კვება მრავალფეროვანი. აუცილებლად გავიმეორებ.", rating: 5 },
  { name: "გიორგი კ.", text: "ფასი ხარისხთან შედარებით საოცრად ხელმისაწვდომია. ტრანსფერი და ორგანიზაცია უნაკლო იყო.", rating: 5 },
  { name: "მარიამ ბ.", text: "შვილებთან ერთად წავედით, ბავშვები აღფრთოვანებულები იყვნენ. გუნდს მადლობა პროფესიონალიზმისთვის!", rating: 5 },
];

const faqs = [
  { q: "რა არის ანტალიის ტურის ფასი?", a: "ანტალიის ტურის ფასი იწყება 1,550 ლარიდან ერთ პერსონაზე, ორადგილიან ნომერში. ფასი მოიცავს ავიაბილეთს, სასტუმროს, All Inclusive კვებას, დაზღვევას და ტრანსფერს." },
  { q: "რამდენი დღით ჯობს ანტალიაში წასვლა?", a: "სასურველია ანტალიაში 5-7 დღე გაჩერდეთ, რომ კარგად დაისვენოთ, გაერთოთ და კულტურული ძეგლებიც მოინახულოთ." },
  { q: "როდის არის ანტალიაში წასვლის საუკეთესო დრო?", a: "აპრილიდან ივნისის ბოლომდე საუკეთესო დროა ანტალიაში სამოგზაუროდ. ამ პერიოდში არც სიცხე შეგაწუხებთ და თანაც სანაპიროებით მაქსიმალურად ტკბობას შეძლებთ." },
  { q: "როგორ შემიძლია იაფად ვიმოგზაურო ანტალიაში?", a: "გაზაფხულზე ან შემოდგომით შეძლებთ ანტალიაში ბიუჯეტურად გამგზავრებას. ამ დროს იაფდება როგორც ავიაბილეთები, ასევე დასარჩენი ადგილებიც და, შესაბამისად, ტურებიც." },
  { q: "არის პირდაპირი ფრენა თბილისიდან ანტალიაში?", a: "დიახ, თბილისიდან ანტალიაში პირდაპირი რეისებით მგზავრობას შეძლებთ." },
  { q: "რა ღირსშესანიშნაობებია ანტალიაში?", a: "ანტალიას უმეტესობა მხოლოდ სანაპიროებით იცნობს, თუმცა ქალაქი ისეთი უდიდესი იმპერიების შესახებ გვიყვება, როგორებიც რომის იმპერია, ოსმალეთის იმპერია და თურქეთია." },
  { q: "რატომ უნდა ავირჩიო AviaTours?", a: "Avia.Ge გთავაზობთ სანდო და მომხმარებელზე მორგებულ მომსახურებას. პროფესიონალი გუნდის დამსახურებით, ჩვენ საუკეთესო ფასად შემოგთავაზებთ როგორც ავიაბილეთებს, ასევე სასტუმროებსაც." },
];

const checkIcon = (color: string) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`h-5 w-5 shrink-0 ${color}`}>
    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
  </svg>
);

export default function AntalyaLanding() {
  return (
    <>
      {/* ===== HERO ===== */}
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
            <p className="mb-8 text-3xl font-extrabold text-white sm:text-4xl">
              <span className="mr-2 text-xl font-normal text-white/50 line-through">2,200₾</span>
              <span className="text-orange-400">1,550₾</span>
              <span className="text-lg font-normal text-white/60">-დან / ერთ პერსონაზე</span>
            </p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a href="https://avia.ge/tours/antalya-tour/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-8 py-4 text-lg font-bold text-white shadow-2xl shadow-orange-500/30 transition-all hover:bg-orange-600 hover:shadow-orange-500/40 active:scale-95">
                დაჯავშნე ახლავე
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" /></svg>
              </a>
              <a href="tel:+995558302303" className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 bg-white/10 px-8 py-4 text-lg font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20 active:scale-95">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" /></svg>
                558 302 303
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TRUST BAR ===== */}
      <section className="border-b border-gray-200 bg-white px-4 py-6 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-6 text-center text-sm text-gray-500 sm:gap-10">
          {[
            { icon: "M12.516 2.17a.75.75 0 0 0-1.032 0 11.209 11.209 0 0 1-7.877 3.08.75.75 0 0 0-.722.515A12.74 12.74 0 0 0 2.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 0 0 .374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 0 0-.722-.516l-.143.001a11.209 11.209 0 0 1-7.734-3.08Z", label: "უსაფრთხო ჯავშანი" },
            { icon: "M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z", label: "500+ კმაყოფილი კლიენტი" },
            { icon: "M12 7.5a.75.75 0 0 1 .75.75v3.75H16.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 1 .75-.75Z", label: "24/7 მხარდაჭერა" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-orange-500"><path fillRule="evenodd" d={item.icon} clipRule="evenodd" /></svg>
              <span className="font-semibold">{item.label}</span>
            </div>
          ))}
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-orange-500">avia.ge</span>
            <span className="font-semibold">ოფიციალური პარტნიორი</span>
          </div>
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-widest text-orange-500">გაიცანი ანტალია</span>
              <h2 className="mb-6 text-3xl font-extrabold text-gray-900 sm:text-4xl">სანაპიროები, ისტორია და განუმეორებელი გართობა</h2>
              <div className="space-y-4 text-lg leading-relaxed text-gray-600">
                <p>ანტალია სამხრეთ თურქეთში მდებარე საკურორტო ქალაქია. იგი ცნობილია თავისი სანაპიროებითა და გართობის კარგი შესაძლებლობებით. ანტალიაში შეძლებთ მის ქვიშიან სანაპირო ზოლზე განტვირთვასა და დასვენებას, თანაც ქალაქს ისტორიული დატვირთვაც აქვს — აქ შეგხვდებათ მნიშვნელოვანი მუზეუმები და კულტურული ძეგლები.</p>
                <p>რეალურად, ანტალიას უმეტესობა მხოლოდ სანაპიროებით იცნობს, თუმცა ქალაქი ისეთი უდიდესი იმპერიების შესახებ გვიყვება, როგორებიც რომის იმპერია, ოსმალეთის იმპერია და თურქეთია.</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl"><Image src="https://avia.ge/wp-content/uploads/2025/08/avia-tours-2-1.jpg" alt="ანტალიის ხედი" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 25vw" /></div>
              <div className="space-y-3">
                <div className="relative aspect-square overflow-hidden rounded-2xl"><Image src="https://avia.ge/wp-content/uploads/2025/08/avia-tours-4-1.jpg" alt="ანტალიის ბუნება" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 25vw" /></div>
                <div className="relative aspect-square overflow-hidden rounded-2xl"><Image src="https://avia.ge/wp-content/uploads/2025/06/turkuli-abanoebi-antalia.jpg" alt="თურქული აბანოები" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 25vw" /></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== INCLUDED ===== */}
      <section className="border-y border-gray-200 bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <h2 className="mb-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">რა შედის ტურში?</h2>
            <p className="text-gray-500">ფასი მოცემულია ერთ პერსონაზე, ორადგილიან ნომერში</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {includedIcons.map((item, i) => (
              <div key={i} className="flex flex-col items-center rounded-2xl border border-gray-100 bg-gray-50 p-6 text-center transition-all hover:border-orange-200 hover:bg-orange-50">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-orange-500">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6"><path d={item.d} /></svg>
                </div>
                <p className="text-sm font-semibold text-gray-800">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== VIDEO ===== */}
      <section className="bg-gray-900 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <h2 className="mb-2 text-3xl font-extrabold text-white sm:text-4xl">ნახე ანტალია ვიდეოში</h2>
            <p className="text-gray-400">გაიცანი ქალაქი, სანამ გეწვევი</p>
          </div>
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
              <iframe src="https://www.youtube.com/embed/cHIdIMhDRig?rel=0" title="ანტალია - ტურისტული გიდი" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }} />
            </div>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <h2 className="mb-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">რას ამბობენ ჩვენი კლიენტები</h2>
            <p className="text-gray-500">რეალური შეფასებები AviaTours-ის მოგზაურებისგან</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <div key={i} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="mb-3 flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <svg key={j} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-yellow-400">
                      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                    </svg>
                  ))}
                </div>
                <p className="mb-4 text-gray-600">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-sm font-bold text-orange-600">{t.name.charAt(0)}</div>
                  <span className="font-semibold text-gray-900">{t.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== GALLERY ===== */}
      <section className="border-t border-gray-200 bg-gray-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <h2 className="mb-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">ფოტო გალერეა</h2>
            <p className="text-gray-500">ანტალიის საუკეთესო კადრები</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((img, i) => (
              <div key={i} className="group relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image src={img.src} alt={img.alt} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                <div className="absolute inset-0 bg-black/0 transition-all group-hover:bg-black/20" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== EARLY BOOKING ===== */}
      <section className="bg-gradient-to-br from-orange-50 to-amber-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <span className="mb-2 inline-block rounded-full bg-orange-100 px-4 py-1 text-sm font-bold text-orange-600">დაზოგე 30%-მდე</span>
            <h2 className="mb-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">წინასწარი ჯავშნის უპირატესობები</h2>
            <p className="text-gray-500">რატომ ჯობს ტურის წინასწარ დაჯავშნა?</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { emoji: "💰", title: "დაბალი ფასები", desc: "არატურისტულ სეზონებზე ავიაბილეთები და სასტუმროები მნიშვნელოვნად იაფდება. წინასწარ ჯავშნით საუკეთესო ფასს იღებთ." },
              { emoji: "🏨", title: "საუკეთესო სასტუმროები", desc: "წინასწარ ჯავშნით გექნებათ საუკეთესო სასტუმროების არჩევის შესაძლებლობა, სანამ ადგილები შეივსება." },
              { emoji: "✈️", title: "პირდაპირი რეისები", desc: "თბილისიდან ანტალიაში პირდაპირი ფრენა ხელმისაწვდომია. წინასწარ დაჯავშნით სასურველ თარიღებს აირჩევთ." },
              { emoji: "🛡️", title: "სრული დაცვა", desc: "ტურში შედის სამოგზაურო დაზღვევა და ტრანსფერი. თქვენ მხოლოდ დასვენებაზე ფიქრობთ." },
            ].map((item, i) => (
              <div key={i} className="rounded-2xl bg-white p-6 shadow-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange-50 text-2xl">{item.emoji}</div>
                <h3 className="mb-2 text-lg font-bold text-gray-900">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <a href="https://avia.ge/tours/antalya-tour/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-10 py-4 text-lg font-bold text-white shadow-lg shadow-orange-500/25 transition-all hover:bg-orange-600 hover:shadow-xl active:scale-95">წინასწარ დაჯავშნა — 1,550₾-დან</a>
          </div>
        </div>
      </section>

      {/* ===== PRICING ===== */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="mb-10 text-center">
            <h2 className="mb-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">ტურის ფასები</h2>
            <p className="text-gray-500">ფასი დამოკიდებულია სეზონსა და სასტუმროს კატეგორიაზე</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border-2 border-gray-200 bg-white p-8 text-center">
              <p className="mb-1 text-sm font-semibold uppercase tracking-wider text-gray-400">ბიუჯეტური</p>
              <p className="text-sm text-gray-400 line-through">2,200₾</p>
              <p className="mb-1 text-5xl font-extrabold text-gray-900">1,550<span className="text-2xl text-gray-400">₾</span></p>
              <p className="mb-6 text-sm text-gray-400">ერთ პერსონაზე</p>
              <ul className="mb-8 space-y-3 text-left text-sm text-gray-600">
                {["ავიაბილეთი თბილისიდან", "4★ სასტუმრო", "All Inclusive კვება", "დაზღვევა + ტრანსფერი"].map((t) => (<li key={t} className="flex items-center gap-2">{checkIcon("text-green-500")}{t}</li>))}
              </ul>
              <a href="https://avia.ge/tours/antalya-tour/" target="_blank" rel="noopener noreferrer" className="block w-full rounded-xl border-2 border-orange-500 py-3 text-center font-bold text-orange-500 transition-all hover:bg-orange-500 hover:text-white">დაჯავშნა</a>
            </div>
            <div className="relative rounded-2xl border-2 border-orange-500 bg-white p-8 text-center shadow-xl shadow-orange-500/10">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-orange-500 px-4 py-1 text-xs font-bold text-white">პოპულარული</div>
              <p className="mb-1 text-sm font-semibold uppercase tracking-wider text-orange-500">პრემიუმი</p>
              <p className="text-sm text-gray-400 line-through">6,200₾</p>
              <p className="mb-1 text-5xl font-extrabold text-gray-900">4,850<span className="text-2xl text-gray-400">₾</span></p>
              <p className="mb-6 text-sm text-gray-400">ერთ პერსონაზე</p>
              <ul className="mb-8 space-y-3 text-left text-sm text-gray-600">
                {["ავიაბილეთი თბილისიდან", "5★ პრემიუმ სასტუმრო", "Ultra All Inclusive", "დაზღვევა + VIP ტრანსფერი", "ზღვის ხედიანი ნომერი"].map((t) => (<li key={t} className="flex items-center gap-2">{checkIcon("text-orange-500")}{t}</li>))}
              </ul>
              <a href="https://avia.ge/tours/antalya-tour/" target="_blank" rel="noopener noreferrer" className="block w-full rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 py-3 text-center font-bold text-white shadow-lg shadow-orange-500/25 transition-all hover:from-orange-600 hover:to-orange-700 active:scale-95">დაჯავშნა</a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== LEAD FORM ===== */}
      <section className="border-y border-gray-200 bg-gradient-to-r from-blue-50 to-indigo-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">გაინტერესებთ? გადმოგვირეკავთ!</h2>
          <p className="mb-8 text-gray-500">დატოვეთ თქვენი ნომერი და ჩვენი კონსულტანტი 5 წუთში დაგიკავშირდებათ საუკეთესო შეთავაზებით.</p>
          <form action="https://avia.ge/tours/antalya-tour/" target="_blank" className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row">
            <input type="tel" placeholder="თქვენი ტელეფონის ნომერი" className="flex-1 rounded-xl border border-gray-300 bg-white px-5 py-3.5 text-gray-900 placeholder-gray-400 outline-none transition-all focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20" />
            <button type="submit" className="rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-3.5 font-bold text-white shadow-lg shadow-orange-500/25 transition-all hover:from-orange-600 hover:to-orange-700 active:scale-95">გადმომირეკეთ</button>
          </form>
          <p className="mt-3 text-xs text-gray-400">პერსონალურ მონაცემებს არ ვუზიარებთ მესამე მხარეებს</p>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 text-center">
            <h2 className="mb-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">ხშირად დასმული კითხვები</h2>
            <p className="text-gray-500">ყველაფერი, რაც ანტალიის ტურის შესახებ უნდა იცოდეთ</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group rounded-2xl border border-gray-200 bg-gray-50 transition-all open:bg-white open:shadow-sm">
                <summary className="flex cursor-pointer items-center justify-between px-6 py-5 text-left font-semibold text-gray-900 [&::-webkit-details-marker]:hidden">
                  {faq.q}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 shrink-0 text-gray-400 transition-transform group-open:rotate-180"><path fillRule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clipRule="evenodd" /></svg>
                </summary>
                <p className="px-6 pb-5 text-gray-600">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-extrabold text-white sm:text-4xl">მზად ხართ ანტალიისთვის?</h2>
          <p className="mb-8 text-lg text-orange-100">დაჯავშნეთ ახლავე და მიიღეთ საუკეთესო ფასი. ჩვენი გუნდი მუდმივად მზადაა თქვენი დასახმარებლად.</p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="https://avia.ge/tours/antalya-tour/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white px-10 py-4 text-lg font-bold text-orange-600 shadow-xl transition-all hover:bg-orange-50 active:scale-95">დაჯავშნე — 1,550₾-დან</a>
            <a href="tel:+995558302303" className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-white/10">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" /></svg>
              +995 558 302 303
            </a>
          </div>
        </div>
      </section>

      <MobileStickyBar price="1,550₾" label="დაჯავშნე" href="https://avia.ge/tours/antalya-tour/" />
    </>
  );
}
