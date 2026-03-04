const steps = [
  {
    num: "1",
    icon: "M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z",
    title: "აირჩიე ტური",
    desc: "მოძებნე შენთვის სასურველი მიმართულება და პაკეტი",
  },
  {
    num: "2",
    icon: "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5",
    title: "დაჯავშნე",
    desc: "აირჩიე თარიღი, მიუთითე მონაცემები და დაადასტურე ჯავშანი",
  },
  {
    num: "3",
    icon: "M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z",
    title: "იმოგზაურე",
    desc: "აეროპორტში შეგხვდებათ ტრანსფერი — თქვენ მხოლოდ ისიამოვნეთ!",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <h2 className="mb-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">როგორ მუშაობს?</h2>
          <p className="text-gray-500">3 მარტივი ნაბიჯი დაუვიწყარ მოგზაურობამდე</p>
        </div>
        <div className="grid gap-8 sm:grid-cols-3">
          {steps.map((step, i) => (
            <div key={i} className="relative text-center">
              {i < steps.length - 1 && (
                <div className="absolute left-1/2 top-10 hidden h-0.5 w-full border-t-2 border-dashed border-orange-200 sm:block" />
              )}
              <div className="relative mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-orange-100">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8 text-orange-500">
                  <path fillRule="evenodd" d={step.icon} clipRule="evenodd" />
                </svg>
                <span className="absolute -right-1 -top-1 flex h-7 w-7 items-center justify-center rounded-full bg-orange-500 text-xs font-bold text-white">{step.num}</span>
              </div>
              <h3 className="mb-2 text-lg font-bold text-gray-900">{step.title}</h3>
              <p className="text-sm text-gray-500">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
