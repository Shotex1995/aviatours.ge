// ===== TYPES =====
export interface DepartureDate {
  date: string;
  price: number;
  seatsLeft: number;
  tier: "budget" | "premium";
}

export interface HotelInfo {
  name: string;
  stars: 4 | 5;
  imageUrl: string;
  features: string[];
}

export interface ReviewData {
  name: string;
  text: string;
  rating: number;
  source: string;
  date: string;
}

export interface ComparisonFeature {
  feature: string;
  budget: string | boolean;
  premium: string | boolean;
}

// ===== PRICING =====
export const BUDGET_BASE_PRICE = 1550;
export const PREMIUM_BASE_PRICE = 4850;
export const CHILD_DISCOUNT = 0.5;

export function calculateTotalPrice(
  tier: "budget" | "premium",
  adults: number,
  children: number
): number {
  const base = tier === "budget" ? BUDGET_BASE_PRICE : PREMIUM_BASE_PRICE;
  return base * adults + Math.round(base * CHILD_DISCOUNT) * children;
}

// ===== DEPARTURE DATES =====
export const departureDates: DepartureDate[] = [
  { date: "2026-04-15", price: 1550, seatsLeft: 4, tier: "budget" },
  { date: "2026-04-22", price: 1550, seatsLeft: 8, tier: "budget" },
  { date: "2026-05-01", price: 1650, seatsLeft: 12, tier: "budget" },
  { date: "2026-05-10", price: 1700, seatsLeft: 6, tier: "budget" },
  { date: "2026-05-20", price: 1800, seatsLeft: 10, tier: "budget" },
  { date: "2026-06-01", price: 1900, seatsLeft: 15, tier: "budget" },
  { date: "2026-06-15", price: 2000, seatsLeft: 3, tier: "budget" },
  { date: "2026-07-01", price: 2100, seatsLeft: 5, tier: "budget" },
  { date: "2026-04-15", price: 4850, seatsLeft: 2, tier: "premium" },
  { date: "2026-05-01", price: 5200, seatsLeft: 4, tier: "premium" },
  { date: "2026-06-01", price: 5500, seatsLeft: 3, tier: "premium" },
  { date: "2026-07-01", price: 5800, seatsLeft: 2, tier: "premium" },
];

// ===== HOTELS =====
export const hotels: HotelInfo[] = [
  {
    name: "Ramada Resort Lara",
    stars: 4,
    imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
    features: ["All Inclusive", "სანაპიროზე", "აუზი", "SPA ცენტრი"],
  },
  {
    name: "Rixos Premium Belek",
    stars: 5,
    imageUrl: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800",
    features: ["Ultra All Inclusive", "კერძო სანაპირო", "6 აუზი", "გოლფის მოედანი"],
  },
  {
    name: "Delphin Imperial",
    stars: 5,
    imageUrl: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800",
    features: ["Ultra All Inclusive", "აკვაპარკი", "SPA", "ბავშვთა კლუბი"],
  },
  {
    name: "Titanic Mardan Palace",
    stars: 5,
    imageUrl: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800",
    features: ["Ultra All Inclusive", "კერძო სანაპირო", "10 რესტორანი", "VIP სერვისი"],
  },
];

// ===== GOOGLE REVIEWS =====
export const googleReviews: ReviewData[] = [
  {
    name: "ანა გ.",
    text: "პირველად ვისარგებლე AviaTours-ით და ძალიან კმაყოფილი ვარ. ყველაფერი ორგანიზებული იყო, სასტუმრო შესანიშნავი, კვება მრავალფეროვანი. აუცილებლად გავიმეორებ!",
    rating: 5,
    source: "Google",
    date: "2025-09-15",
  },
  {
    name: "დავით მ.",
    text: "ანტალიაში წავედით ოჯახთან ერთად. ბავშვებს განსაკუთრებით მოეწონათ აკვაპარკი. ტრანსფერი პუნქტუალური იყო, გუნდი ძალიან თბილი და პროფესიონალი.",
    rating: 5,
    source: "Google",
    date: "2025-08-22",
  },
  {
    name: "თამარ ბ.",
    text: "ფასი ხარისხთან შედარებით უბრალოდ საოცარია. 5-ვარსკვლავიან სასტუმროში დავრჩით, Ultra All Inclusive. ნამდვილად ღირს!",
    rating: 5,
    source: "Google",
    date: "2025-07-10",
  },
  {
    name: "ლევან კ.",
    text: "მეგობრებთან ერთად წავედით და შესანიშნავი დრო გავატარეთ. სანაპირო, ღამის ცხოვრება, კვება — ყველაფერი ტოპ. მადლობა AviaTours-ს!",
    rating: 4,
    source: "Google",
    date: "2025-06-28",
  },
  {
    name: "ნათია ჯ.",
    text: "უკვე მესამედ ვმგზავრობ AviaTours-ით. ყოველთვის სანდო სერვისი, კარგი ფასები და პროფესიონალური მიდგომა. რეკომენდაციას ვუწევ ყველას.",
    rating: 5,
    source: "Google",
    date: "2025-10-05",
  },
];

// ===== COMPARISON TABLE =====
export const comparisonFeatures: ComparisonFeature[] = [
  { feature: "ავიაბილეთი", budget: true, premium: true },
  { feature: "სასტუმროს კატეგორია", budget: "4★", premium: "5★" },
  { feature: "კვების ტიპი", budget: "All Inclusive", premium: "Ultra All Inclusive" },
  { feature: "ნომრის ხედი", budget: "ბაღის ხედი", premium: "ზღვის ხედი" },
  { feature: "ტრანსფერი", budget: "ჯგუფური", premium: "VIP ინდივიდუალური" },
  { feature: "დაზღვევა", budget: true, premium: true },
  { feature: "SPA & Wellness", budget: false, premium: true },
  { feature: "კერძო სანაპირო", budget: false, premium: true },
  { feature: "24/7 კონსიერჟი", budget: false, premium: true },
  { feature: "ბავშვთა კლუბი", budget: true, premium: true },
];

// ===== BLOG CONTENT =====
export const blogPlaces = [
  { title: "კალეიჩი (ძველი ქალაქი)", desc: "ანტალიის ისტორიული ცენტრი ვიწრო ქუჩებით და ოსმალური არქიტექტურით, რომელიც ხიბლავს ყველა ტურისტს." },
  { title: "დუდენის ჩანჩქერები", desc: "ორი ბუნებრივი ჩანჩქერი — ზედა და ქვედა დუდენი. ქვედა პირდაპირ ზღვაში ჩამოედინება." },
  { title: "კონიაალთი სანაპირო", desc: "ანტალიის ყველაზე ცნობილი სანაპირო — 7 კმ სიგრძის ქვიშიანი ზოლი მთების ფონზე." },
  { title: "ასპენდოსის თეატრი", desc: "რომაული ეპოქის ამფითეატრი, რომელიც 15,000 მაყურებელს იტევს და დღემდე გამოიყენება." },
  { title: "ანტალიის მუზეუმი", desc: "თურქეთის ერთ-ერთი უმსხვილესი მუზეუმი ანტიკური ხანის უნიკალური ექსპონატებით." },
  { title: "ლარა სანაპირო", desc: "პრემიუმ კლასის სანაპირო ზონა, სადაც თავმოყრილია საუკეთესო 5-ვარსკვლავიანი სასტუმროები." },
  { title: "The Land of Legends აკვაპარკი", desc: "თურქეთის ერთ-ერთი უდიდესი თემატური პარკი და აკვაპარკი — იდეალურია ოჯახებისთვის." },
  { title: "ოლიმპოსის ტელეფერიკი", desc: "საბაგიროთი ასვლა თახთალის მთაზე (2,365 მ) — თვალწარმტაცი ხედები." },
  { title: "პერგეს ანტიკური ქალაქი", desc: "ძველი ბერძნული ქალაქის ნანგრევები სტადიონით, აბანოებით და კოლონადებით." },
  { title: "ანტალიის მარინა", desc: "ლამაზი ნავსადგური ძველ ქალაქთან, საიდანაც იახტებით გასვლა შეგიძლიათ." },
];

// ===== TESTIMONIALS (existing, centralized) =====
export const testimonials = [
  { name: "ნინო მ.", text: "ძალიან კარგი ტური იყო! სასტუმრო შესანიშნავი, კვება მრავალფეროვანი. აუცილებლად გავიმეორებ.", rating: 5 },
  { name: "გიორგი კ.", text: "ფასი ხარისხთან შედარებით საოცრად ხელმისაწვდომია. ტრანსფერი და ორგანიზაცია უნაკლო იყო.", rating: 5 },
  { name: "მარიამ ბ.", text: "შვილებთან ერთად წავედით, ბავშვები აღფრთოვანებულები იყვნენ. გუნდს მადლობა პროფესიონალიზმისთვის!", rating: 5 },
];

// ===== GALLERY =====
export const galleryImages = [
  { src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800", alt: "ანტალიის სანაპირო" },
  { src: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800", alt: "ანტალიის ხედი" },
  { src: "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800", alt: "ანტალიის ბუნება" },
  { src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800", alt: "ანტალიის ქალაქი" },
  { src: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800", alt: "ანტალიის აუზი" },
  { src: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800", alt: "თურქული აბანოები" },
];

// ===== INCLUDED ITEMS =====
export const includedItems = [
  { d: "M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z", text: "ორმხრივი ავიაბილეთი თბილისიდან" },
  { d: "M19.006 3.705a.75.75 0 1 0-.512-1.41L6 6.838V3a.75.75 0 0 0-.75-.75h-1.5A.75.75 0 0 0 3 3v4.93l-1.006.365a.75.75 0 0 0 .512 1.41l16.5-6Z", text: "4 ან 5 ვარსკვლავიანი სასტუმრო" },
  { d: "M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM8.547 4.505a8.25 8.25 0 1 0 6.906 0 5.21 5.21 0 0 0-6.906 0Z", text: "All Inclusive კვება" },
  { d: "M12.516 2.17a.75.75 0 0 0-1.032 0 11.209 11.209 0 0 1-7.877 3.08.75.75 0 0 0-.722.515A12.74 12.74 0 0 0 2.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 0 0 .374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 0 0-.722-.516l-.143.001a11.209 11.209 0 0 1-7.734-3.08Z", text: "სამოგზაურო დაზღვევა" },
  { d: "M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25ZM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875h.375a3 3 0 1 1 6 0h3a3 3 0 1 1 6 0h.375c1.035 0 1.875-.84 1.875-1.875V15h-7.5Z", text: "აეროპორტის ტრანსფერი" },
];

// ===== FAQ =====
export const faqs = [
  { q: "რა არის ანტალიის ტურის ფასი?", a: "ანტალიის ტურის ფასი იწყება 1,550 ლარიდან ერთ პერსონაზე, ორადგილიან ნომერში. ფასი მოიცავს ავიაბილეთს, სასტუმროს, All Inclusive კვებას, დაზღვევას და ტრანსფერს." },
  { q: "რამდენი დღით ჯობს ანტალიაში წასვლა?", a: "სასურველია ანტალიაში 5-7 დღე გაჩერდეთ, რომ კარგად დაისვენოთ, გაერთოთ და კულტურული ძეგლებიც მოინახულოთ." },
  { q: "როდის არის ანტალიაში წასვლის საუკეთესო დრო?", a: "აპრილიდან ივნისის ბოლომდე საუკეთესო დროა ანტალიაში სამოგზაუროდ. ამ პერიოდში არც სიცხე შეგაწუხებთ და თანაც სანაპიროებით მაქსიმალურად ტკბობას შეძლებთ." },
  { q: "როგორ შემიძლია იაფად ვიმოგზაურო ანტალიაში?", a: "გაზაფხულზე ან შემოდგომით შეძლებთ ანტალიაში ბიუჯეტურად გამგზავრებას. ამ დროს იაფდება როგორც ავიაბილეთები, ასევე განთავსების ადგილებიც და, შესაბამისად, ტურებიც." },
  { q: "არის პირდაპირი ფრენა თბილისიდან ანტალიაში?", a: "დიახ, თბილისიდან ანტალიაში პირდაპირი რეისებით მგზავრობას შეძლებთ." },
  { q: "რა ღირსშესანიშნაობებია ანტალიაში?", a: "უმეტესობა ანტალიას მხოლოდ სანაპიროებით იცნობს, თუმცა ქალაქი ისეთი უდიდესი იმპერიების ისტორიას ინახავს, როგორებიც რომის იმპერია, ბიზანტია და ოსმალეთის იმპერიაა." },
  { q: "რატომ უნდა ავირჩიო AviaTours?", a: "Avia.Ge გთავაზობთ სანდო და მომხმარებელზე მორგებულ მომსახურებას. პროფესიონალი გუნდის დამსახურებით, ჩვენ საუკეთესო ფასად შემოგთავაზებთ როგორც ავიაბილეთებს, ასევე სასტუმროებსაც." },
];

// ===== SOCIAL PROOF MESSAGES =====
export const socialProofMessages = [
  "ნინო თბილისიდან ახლახან დაჯავშნა ანტალიის ტური",
  "გიორგიმ 2 ადგილი დაჯავშნა მაისისთვის",
  "5 ტურისტი ათვალიერებს ამ გვერდს ახლა",
  "მარიამმა პრემიუმ პაკეტი აირჩია",
  "ბოლო 1 საათში 3 ჯავშანი შემოვიდა",
  "თამარმა ოჯახური ტური დაჯავშნა ივნისისთვის",
];

// ===== GEORGIAN MONTH NAMES =====
export const georgianMonths = [
  "იანვარი", "თებერვალი", "მარტი", "აპრილი", "მაისი", "ივნისი",
  "ივლისი", "აგვისტო", "სექტემბერი", "ოქტომბერი", "ნოემბერი", "დეკემბერი",
];

export const georgianDays = ["ორშ", "სამ", "ოთხ", "ხუთ", "პარ", "შაბ", "კვი"];
