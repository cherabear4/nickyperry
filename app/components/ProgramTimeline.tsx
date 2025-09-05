// components/ProgramTimeline.tsx
const weeks = [
  { w: 1, title: "Form Foundations", note: "Hip hinge, abduction patterns, tempo work" },
  { w: 2, title: "Mind–Muscle Link", note: "Pauses, breathing, RPE calibration" },
  { w: 3, title: "Volume Bump", note: "Sets ↑, accessories dialed" },
  { w: 4, title: "Deload & Assess", note: "Tape + video review" },
  { w: 5, title: "Overload Phase", note: "Rep ranges shift, loads ↑" },
  { w: 6, title: "Accessory Focus", note: "Glute medius/upper glute bias" },
  { w: 7, title: "Peak & Photos", note: "Clothes fit check, PR attempts" },
  { w: 8, title: "Next Block Plan", note: "Maintenance vs. build" },
];

export default function ProgramTimeline() {
  return (
    <ol className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {weeks.map(s => (
        <li key={s.w} className="rounded-2xl bg-rose-50 p-4 ring-1 ring-rose-100">
          <div className="text-xs font-semibold text-rose-600">Week {s.w}</div>
          <div className="font-medium">{s.title}</div>
          <p className="text-sm text-gray-600">{s.note}</p>
        </li>
      ))}
    </ol>
  );
}
