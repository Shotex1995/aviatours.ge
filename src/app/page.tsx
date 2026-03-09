import { tours } from "@/data/tours";
import TourCard from "@/components/TourCard";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-blue-50 px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-orange-100 opacity-40 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-blue-100 opacity-40 blur-3xl" />
        <div className="relative mx-auto max-w-7xl text-center">
          <h1 className="mb-5 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            აღმოაჩინე <span className="text-orange-500">სამყარო</span>{" "}
            ჩვენთან ერთად
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-600 sm:text-xl">
            საუკეთესო ფასებით ტურები მსოფლიოს ყველაზე პოპულარულ მიმართულებებზე.
            დაჯავშნე ახლავე და იმოგზაურე ოცნებისამებრ.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#tours"
              className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-orange-500/25 transition-all hover:bg-orange-600 hover:shadow-xl hover:shadow-orange-500/30 active:scale-95"
            >
              ტურების ნახვა
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="tel:+995558302303"
              className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-8 py-3.5 text-base font-semibold text-gray-700 transition-all hover:border-orange-300 hover:bg-orange-50 active:scale-95"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5 text-orange-500"
              >
                <path
                  fillRule="evenodd"
                  d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                  clipRule="evenodd"
                />
              </svg>
              დაგვირეკეთ
            </a>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-y border-gray-200 bg-white px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 text-center sm:grid-cols-4">
          <div>
            <p className="text-3xl font-extrabold text-orange-500">500+</p>
            <p className="text-sm text-gray-500">კმაყოფილი მოგზაურე</p>
          </div>
          <div>
            <p className="text-3xl font-extrabold text-orange-500">20+</p>
            <p className="text-sm text-gray-500">მიმართულება</p>
          </div>
          <div>
            <p className="text-3xl font-extrabold text-orange-500">5+</p>
            <p className="text-sm text-gray-500">წლის გამოცდილება</p>
          </div>
          <div>
            <p className="text-3xl font-extrabold text-orange-500">24/7</p>
            <p className="text-sm text-gray-500">მხარდაჭერა</p>
          </div>
        </div>
      </section>

      {/* Tour Grid */}
      <section id="tours" className="scroll-mt-20 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <h2 className="mb-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              პოპულარული ტურები
            </h2>
            <p className="text-gray-500">
              აირჩიეთ თქვენი შემდეგი მიმართულება
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {tours.map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="border-t border-gray-200 bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-10 text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">
            რატომ AviaTours?
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6 text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-orange-100 text-orange-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-7 w-7"
                >
                  <path d="M12 7.5a.75.75 0 0 1 .75.75v3.75H16.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 1 .75-.75Z" />
                  <path
                    fillRule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM3.75 12a8.25 8.25 0 1 1 16.5 0 8.25 8.25 0 0 1-16.5 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-bold text-gray-900">
                სწრაფი დაჯავშნა
              </h3>
              <p className="text-sm text-gray-500">
                დაჯავშნეთ თქვენი ტური რამდენიმე წუთში, მარტივად და სწრაფად.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6 text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-orange-100 text-orange-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-7 w-7"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM9 7.5A.75.75 0 0 0 9 9h1.5c.98 0 1.813.626 2.122 1.5H9A.75.75 0 0 0 9 12h3.622a2.251 2.251 0 0 1-2.122 1.5H9a.75.75 0 0 0-.53 1.28l3 3a.75.75 0 1 0 1.06-1.06L11.378 15h.122a3.75 3.75 0 0 0 3.75-3.75V11a.75.75 0 0 0-.75-.75h-4.122A2.25 2.25 0 0 1 12.378 9H15a.75.75 0 0 0 0-1.5H9Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-bold text-gray-900">
                საუკეთესო ფასები
              </h3>
              <p className="text-sm text-gray-500">
                ჩვენ გთავაზობთ კონკურენტულ ფასებს ხარისხზე კომპრომისის გარეშე.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6 text-center sm:col-span-2 lg:col-span-1">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-orange-100 text-orange-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-7 w-7"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.516 2.17a.75.75 0 0 0-1.032 0 11.209 11.209 0 0 1-7.877 3.08.75.75 0 0 0-.722.515A12.74 12.74 0 0 0 2.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 0 0 .374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 0 0-.722-.516l-.143.001a11.209 11.209 0 0 1-7.734-3.08Zm-2.005 9.95a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.06 0l4.5-4.5a.75.75 0 0 0-1.06-1.06l-3.97 3.97-1.72-1.72Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-bold text-gray-900">
                სანდო სერვისი
              </h3>
              <p className="text-sm text-gray-500">
                წლების გამოცდილება და ასობით კმაყოფილი კლიენტი ჩვენი
                საუკეთესო რეკომენდაციაა.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-extrabold text-white sm:text-4xl">
            მზად ხართ მოგზაურობისთვის?
          </h2>
          <p className="mb-8 text-lg text-orange-100">
            დაგვიკავშირდით და მიიღეთ პერსონალიზებული შეთავაზება თქვენზე
            მორგებული ტურისთვის.
          </p>
          <a
            href="tel:+995558302303"
            className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-base font-semibold text-orange-600 shadow-lg transition-all hover:bg-orange-50 active:scale-95"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                clipRule="evenodd"
              />
            </svg>
            +995 558 302 303
          </a>
        </div>
      </section>
    </>
  );
}
