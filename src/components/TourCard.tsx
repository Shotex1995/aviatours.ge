import Image from "next/image";
import Link from "next/link";
import type { Tour } from "@/data/tours";

interface TourCardProps {
  tour: Tour;
}

export default function TourCard({ tour }: TourCardProps) {
  return (
    <Link
      href={`/${tour.slug}`}
      className="group block overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="relative aspect-[3/2] overflow-hidden">
        <Image
          src={tour.imageUrl}
          alt={tour.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-gray-700 backdrop-blur-sm">
          {tour.duration}
        </div>
      </div>

      <div className="p-5">
        <p className="mb-1 text-xs font-medium uppercase tracking-wider text-orange-500">
          {tour.destination}
        </p>
        <h3 className="mb-1 text-lg font-bold leading-snug text-gray-900">
          {tour.title}
        </h3>
        <p className="mb-3 line-clamp-2 text-sm text-gray-500">
          {tour.description}
        </p>

        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs text-gray-400">ფასი იწყება</p>
            <p className="text-2xl font-extrabold text-gray-900">
              {tour.price}
              <span className="text-base font-semibold text-gray-500">
                {" "}
                {tour.currency}
              </span>
            </p>
          </div>

          <span className="rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 group-hover:from-orange-600 group-hover:to-orange-700 group-hover:shadow-md">
            დაჯავშნა
          </span>
        </div>
      </div>
    </Link>
  );
}
