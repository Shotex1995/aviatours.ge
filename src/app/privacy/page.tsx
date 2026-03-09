import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "სამომხმარებლო პოლიტიკა — AviaTours.ge",
  description:
    "AviaTours.ge-ს სამომხმარებლო პოლიტიკა — პირადი მონაცემების დაცვა და გამოყენების პირობები.",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="mb-8 text-4xl font-extrabold text-gray-900">სამომხმარებლო პოლიტიკა</h1>
      <p className="mb-8 text-sm text-gray-500">ბოლო განახლება: 2025 წლის მარტი</p>

      <div className="space-y-8 text-base leading-relaxed text-gray-700">
        <section>
          <h2 className="mb-3 text-xl font-bold text-gray-900">1. ზოგადი ინფორმაცია</h2>
          <p>
            წინამდებარე სამომხმარებლო პოლიტიკა არეგულირებს AviaTours.ge ვებგვერდის (შემდგომში „საიტი")
            გამოყენების პირობებს. საიტით სარგებლობით თქვენ ეთანხმებით ამ პოლიტიკის პირობებს.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-gray-900">2. პირადი მონაცემების შეგროვება</h2>
          <p>
            ჩვენ შეიძლება შევაგროვოთ შემდეგი ინფორმაცია: სახელი, გვარი, ტელეფონის ნომერი, ელ-ფოსტის
            მისამართი და სხვა მონაცემები, რომლებსაც თქვენ ნებაყოფლობით მოგვაწოდებთ ჯავშნის გაფორმების
            ან კონსულტაციის მიღების დროს.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-gray-900">3. მონაცემების გამოყენება</h2>
          <p>თქვენი პირადი მონაცემები გამოიყენება შემდეგი მიზნებისთვის:</p>
          <ul className="mt-2 list-inside list-disc space-y-1">
            <li>ტურისტული პაკეტის დაჯავშნა და მომსახურების გაწევა</li>
            <li>თქვენთან კომუნიკაცია ჯავშანთან დაკავშირებით</li>
            <li>მომსახურების ხარისხის გაუმჯობესება</li>
            <li>აქციებისა და შეთავაზებების შესახებ ინფორმირება (თქვენი თანხმობით)</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-gray-900">4. მონაცემების დაცვა</h2>
          <p>
            AviaTours.ge იცავს თქვენს პირად მონაცემებს და არ გადასცემს მესამე მხარეს თქვენი
            თანხმობის გარეშე, გარდა კანონით გათვალისწინებული შემთხვევებისა. ჩვენ ვიყენებთ
            თანამედროვე უსაფრთხოების ზომებს თქვენი ინფორმაციის დასაცავად.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-gray-900">5. ქუქი-ფაილები (Cookies)</h2>
          <p>
            საიტი იყენებს ქუქი-ფაილებს მომხმარებლის გამოცდილების გასაუმჯობესებლად. ქუქი-ფაილები
            გვეხმარება საიტის ფუნქციონირებაში და სტატისტიკური მონაცემების შეგროვებაში. თქვენ
            შეგიძლიათ გამორთოთ ქუქი-ფაილები ბრაუზერის პარამეტრებიდან.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-gray-900">6. ჯავშნის გაუქმება და დაბრუნება</h2>
          <p>
            ჯავშნის გაუქმების პირობები განისაზღვრება კონკრეტული ტურისტული პაკეტის პირობების
            მიხედვით. დეტალური ინფორმაციისთვის გთხოვთ, დაუკავშირდეთ ჩვენს გუნდს ჯავშნის
            გაფორმებამდე.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-gray-900">7. კონტაქტი</h2>
          <p>სამომხმარებლო პოლიტიკასთან დაკავშირებული შეკითხვებისთვის დაგვიკავშირდით:</p>
          <ul className="mt-2 space-y-1">
            <li>
              ტელეფონი:{" "}
              <a href="tel:+995558302303" className="text-orange-600 hover:text-orange-700">
                +995 558 302 303
              </a>
            </li>
            <li>
              ელ-ფოსტა:{" "}
              <a href="mailto:info@aviatours.ge" className="text-orange-600 hover:text-orange-700">
                info@aviatours.ge
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
