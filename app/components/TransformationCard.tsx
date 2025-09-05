// components/TransformationCard.tsx
import Image from "next/image";
import BeforeAfter from "./BeforeAfter";

type Metric = { label: string; value: string };
type Testimonial = {
  name: string;
  age?: number;
  beforeImg: string;
  afterImg: string;
  deltas: Metric[]; // e.g. [{label:'Glute', value:'+2.3"'}, {label:'Waist', value:'-1.1"'}]
  quote: string;    // from SMS/WhatsApp
  context?: string; // 1-sentence “what changed”
};

export default function TransformationCard(
{
  t
}: { t: Testimonial }) {
  return (
    <article className="rounded-3xl bg-white shadow-xl ring-1 ring-black/5 overflow-hidden">
      <BeforeAfter before={t.beforeImg} after={t.afterImg} alt={t.name} />
      <div className="p-5 space-y-3">
        <div className="flex flex-wrap gap-2">
          {t.deltas.map((m, i) => (
            <span key={i} className="rounded-full bg-rose-50 text-rose-600 text-xs px-3 py-1 ring-1 ring-rose-100">
              {m.label}: {m.value}
            </span>
          ))}
        </div>
        <p className="text-sm text-gray-700 italic">“{t.quote}”</p>
        {t.context && <p className="text-xs text-gray-500">{t.context}</p>}
      </div>
    </article>
  );
}
