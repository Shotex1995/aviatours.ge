import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-widest text-orange-500">გაიცანი ანტალია</span>
            <h2 className="mb-6 text-3xl font-extrabold text-gray-900 sm:text-4xl">სანაპიროები, ისტორია და განუმეორებელი გართობა</h2>
            <div className="space-y-4 text-lg leading-relaxed text-gray-600">
              <p>ანტალია სამხრეთ თურქეთში მდებარე საკურორტო ქალაქია. იგი ცნობილია თავისი სანაპიროებითა და გართობის კარგი შესაძლებლობებით. ანტალიაში შეძლებთ მის ქვიშიან სანაპირო ზოლზე განტვირთვასა და დასვენებას, თანაც ქალაქს ისტორიული დატვირთვაც აქვს — აქ შეგხვდებათ მნიშვნელოვანი მუზეუმები და კულტურული ძეგლები.</p>
              <p>რეალურად, უმეტესობა ანტალიას მხოლოდ სანაპიროებით იცნობს, თუმცა ქალაქი ისეთი უდიდესი იმპერიების შესახებ გვიყვება, როგორებიც რომის იმპერია, ბიზანტია და ოსმალეთის იმპერიაა.</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl"><Image src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800" alt="ანტალიის ხედი" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 25vw" /></div>
            <div className="space-y-3">
              <div className="relative aspect-square overflow-hidden rounded-2xl"><Image src="https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800" alt="ანტალიის ბუნება" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 25vw" /></div>
              <div className="relative aspect-square overflow-hidden rounded-2xl"><Image src="https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800" alt="თურქული აბანოები" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 25vw" /></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
