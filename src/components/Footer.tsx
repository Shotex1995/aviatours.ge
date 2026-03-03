export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 text-base font-bold text-white">
                A
              </div>
              <span className="text-lg font-bold text-white">
                Avia<span className="text-orange-400">Tours</span>
                <span className="text-xs text-gray-500">.ge</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              საუკეთესო ტურისტული პაკეტები საქართველოდან მსოფლიოს ნებისმიერ
              წერტილში. ენდეთ პროფესიონალებს.
            </p>
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

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              პოპულარული მიმართულებები
            </h3>
            <ul className="space-y-2 text-sm">
              <li>სტამბოლი</li>
              <li>დუბაი</li>
              <li>რომი</li>
              <li>მალდივები</li>
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
