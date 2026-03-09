import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "კონტაქტი — AviaTours.ge",
  description:
    "დაგვიკავშირდით AviaTours.ge — ტელეფონი, ელ-ფოსტა, WhatsApp. ჩვენი გუნდი მზადაა დაგეხმაროთ.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="mb-8 text-4xl font-extrabold text-gray-900">კონტაქტი</h1>

      <p className="mb-10 text-lg text-gray-600">
        გაქვთ შეკითხვა ან გსურთ ტურის დაჯავშნა? დაგვიკავშირდით ნებისმიერი ხერხით — ჩვენი გუნდი
        მზადაა დაგეხმაროთ.
      </p>

      <div className="grid gap-8 sm:grid-cols-2">
        <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-orange-600">
              <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
            </svg>
          </div>
          <h2 className="mb-2 text-xl font-bold text-gray-900">ტელეფონი</h2>
          <a href="tel:+995558302303" className="text-lg text-orange-600 hover:text-orange-700">
            +995 558 302 303
          </a>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-orange-600">
              <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
              <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
            </svg>
          </div>
          <h2 className="mb-2 text-xl font-bold text-gray-900">ელ-ფოსტა</h2>
          <a href="mailto:info@aviatours.ge" className="text-lg text-orange-600 hover:text-orange-700">
            info@aviatours.ge
          </a>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-green-100">
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-green-600">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347Z" />
              <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75 0 1.72.447 3.335 1.23 4.738L2.25 21.75l5.138-1.182A9.71 9.71 0 0 0 12 21.75c5.385 0 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Z" clipRule="evenodd" />
            </svg>
          </div>
          <h2 className="mb-2 text-xl font-bold text-gray-900">WhatsApp</h2>
          <a
            href="https://wa.me/995558302303"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg text-green-600 hover:text-green-700"
          >
            მოგვწერეთ WhatsApp-ზე
          </a>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-orange-600">
              <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z" clipRule="evenodd" />
            </svg>
          </div>
          <h2 className="mb-2 text-xl font-bold text-gray-900">სამუშაო საათები</h2>
          <p className="text-gray-600">ყოველდღე: 10:00 — 20:00</p>
        </div>
      </div>
    </div>
  );
}
