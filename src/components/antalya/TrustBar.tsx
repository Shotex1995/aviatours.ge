const items = [
  { icon: "M12.516 2.17a.75.75 0 0 0-1.032 0 11.209 11.209 0 0 1-7.877 3.08.75.75 0 0 0-.722.515A12.74 12.74 0 0 0 2.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 0 0 .374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 0 0-.722-.516l-.143.001a11.209 11.209 0 0 1-7.734-3.08Z", label: "უსაფრთხო ჯავშანი" },
  { icon: "M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z", label: "500+ კმაყოფილი კლიენტი" },
  { icon: "M12 7.5a.75.75 0 0 1 .75.75v3.75H16.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 1 .75-.75Z", label: "24/7 მხარდაჭერა" },
];

export default function TrustBar() {
  return (
    <section className="border-b border-gray-200 bg-white px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-6 text-center text-sm text-gray-500 sm:gap-10">
        {items.map((item, i) => (
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
  );
}
