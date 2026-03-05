import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { tours } from "@/data/tours";

export function generateStaticParams() {
  return tours.map((tour) => ({ id: String(tour.id) }));
}

export function generateMetadata({ params }: { params: { id: string } }) {
  const tour = tours.find((t) => t.id === Number(params.id));
  if (!tour) return { title: "ტური ვერ მოიძებნა" };
  return {
    title: `${tour.title} — AviaTours.ge`,
    description: tour.description,
  };
}

export default function TourPage({ params }: { params: { id: string } }) {
  const tour = tours.find((t) => t.id === Number(params.id));
  if (!tour) notFound();

  const otherTours = tours.filter((t) => t.id !== tour.id).slice(0, 3);

  return (
    <>
      {/* Breadcrumb */}
      <div className="border-b border-gray-200 bg-white px-4 py-3 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl items-center gap-2 text-sm text-gray-500">
          <Link href="/" className="transition-colors hover:text-orange-500">
            მთავარი
          </Link>
          <span>/</span>
          <span className="text-gray-900">{tour.destination}</span>
        </div>
      </div>

      {/* Hero Image */}
      <div className="relative h-[300px] sm:h-[400px] lg:h-[500px]">
        <Image
          src={tour.imageUrl}
          alt={tour.title}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 px-4 pb-8 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <span className="mb-2 inline-block rounded-full bg-orange-500 px-3 py-1 text-xs font-semibold text-white">
              {tour.duration}
            </span>
            <h1 className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
              {tour.title}
            </h1>
            <p className="mt-2 text-lg text-white/80">{tour.destination}</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-3">
          {/* Left: Description + Highlights */}
          <div className="lg:col-span-2">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              ტურის აღწერა
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-gray-600">
              {tour.description}
            </p>

            <h3 className="mb-4 text-xl font-bold text-gray-900">
              რა შედის ტურში
            </h3>
            <ul className="space-y-3">
              {tour.highlights.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="mt-0.5 h-5 w-5 shrink-0 text-orange-500"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Booking Card */}
          <div>
            <div className="sticky top-24 rounded-2xl border border-gray-200 bg-white p-6 shadow-lg">
              <p className="mb-1 text-sm text-gray-400">ფასი იწყება</p>
              <p className="mb-6 text-4xl font-extrabold text-gray-900">
                {tour.price}
                <span className="text-xl font-semibold text-gray-500">
                  {" "}
                  {tour.currency}
                </span>
              </p>

              <div className="mb-6 space-y-3 text-sm text-gray-600">
                <div className="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5 text-gray-400"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {tour.duration}
                </div>
                <div className="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5 text-gray-400"
                  >
                    <path
                      fillRule="evenodd"
                      d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 3.69 2.96l.138.084Zm.617-6.6a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {tour.destination}
                </div>
              </div>

              <Link
                href={`/${tour.slug}`}
                className="block w-full rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-3.5 text-center text-base font-semibold text-white shadow-lg shadow-orange-500/25 transition-all hover:from-orange-600 hover:to-orange-700 hover:shadow-xl active:scale-95"
              >
                დაჯავშნე ახლავე
              </Link>

              <a
                href="tel:+995558302303"
                className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl border border-gray-200 px-6 py-3 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4"
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
          </div>
        </div>
      </section>

      {/* Other Tours */}
      <section className="border-t border-gray-200 bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-8 text-center text-2xl font-bold text-gray-900">
            სხვა პოპულარული ტურები
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {otherTours.map((t) => (
              <Link
                key={t.id}
                href={`/${t.slug}`}
                className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative aspect-[3/2] overflow-hidden">
                  <Image
                    src={t.imageUrl}
                    alt={t.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-4">
                  <p className="text-xs font-medium text-orange-500">
                    {t.destination}
                  </p>
                  <h3 className="font-bold text-gray-900">{t.title}</h3>
                  <p className="mt-1 text-lg font-extrabold text-gray-900">
                    {t.price}{" "}
                    <span className="text-sm font-semibold text-gray-500">
                      {t.currency}
                    </span>
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
