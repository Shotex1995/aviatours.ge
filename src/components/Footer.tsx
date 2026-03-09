import Link from "next/link";
import { tours } from "@/data/tours";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 shadow-md shadow-orange-500/20">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="h-4.5 w-4.5">
                  <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-extrabold text-white">
                  Avia<span className="text-orange-400">Tours</span>
                </span>
                <span className="text-[10px] font-medium uppercase tracking-widest text-gray-500">.ge</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              საუკეთესო ტურისტული პაკეტები საქართველოდან მსოფლიოს ნებისმიერ
              წერტილში. ენდეთ პროფესიონალებს.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              ტურები
            </h3>
            <ul className="space-y-2 text-sm">
              {tours.map((tour) => (
                <li key={tour.slug}>
                  <Link
                    href={`/${tour.slug}`}
                    className="transition-colors hover:text-orange-400"
                  >
                    {tour.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              ინფორმაცია
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="transition-colors hover:text-orange-400">
                  ჩვენს შესახებ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="transition-colors hover:text-orange-400">
                  კონტაქტი
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="transition-colors hover:text-orange-400">
                  სამომხმარებლო პოლიტიკა
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              კონტაქტი
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="tel:+995558302303"
                  className="transition-colors hover:text-orange-400"
                >
                  +995 558 302 303
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@aviatours.ge"
                  className="transition-colors hover:text-orange-400"
                >
                  info@aviatours.ge
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-800 pt-6 text-center text-xs text-gray-500">
          &copy; {new Date().getFullYear()} AviaTours.ge — ყველა უფლება
          დაცულია.
        </div>
      </div>
    </footer>
  );
}
