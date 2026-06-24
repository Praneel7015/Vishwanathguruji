import { GOOGLE_RATING } from '@/constants/testimonials';

export default function TestimonialsStatsBand() {
  const items = [
    { value: '55,000+', label: 'Clients Counselled' },
    { value: `${GOOGLE_RATING.value} / 5`, label: 'Google Rating' },
    { value: '35+ yrs', label: 'Years of Service' },
  ];
  return (
    <section className="bg-primary text-site-white py-10">
      <div className="max-w-container mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
        {items.map((i) => (
          <div key={i.label}>
            <div className="font-display text-3xl md:text-4xl font-bold text-accent-light">
              {i.value}
            </div>
            <div className="text-xs uppercase tracking-[0.18em] mt-2 text-site-white/70">
              {i.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
