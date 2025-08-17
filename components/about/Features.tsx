import { features } from "@/constants/about";

export default function Features() {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-900">Features</h2>
      <ul className="space-y-4 text-gray-600">
        {features.map((feature, index) => (
          <li key={index} className="flex gap-3">
            <span className="text-purple-600">•</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
