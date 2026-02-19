import { stats } from "../../../data/index";
export default function Stats() {
  return (
    <section className="bg-blue-600 py-20">
      jfsaofsajfosajfposajf
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
          {stats.map((item, index) => (
            <div key={index}>
              <h2 className="text-4xl md:text-5xl font-bold">{item.number}</h2>
              <p className="mt-3 text-sm md:text-base text-blue-100">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
