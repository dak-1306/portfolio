import { motion } from "framer-motion";
import { Sparkles, Rocket, Globe2 } from "lucide-react";

import CosmicCard from "@/components/common/CosmicCard";
import SectionHeading from "@/components/common/SectionHeading";

const features = [
  {
    icon: <Sparkles className="size-7" />,
    title: "Creative Experience",
    description:
      "Thiết kế giao diện hiện đại với hiệu ứng ánh sáng, chiều sâu và trải nghiệm mượt mà.",
  },
  {
    icon: <Rocket className="size-7" />,
    title: "Performance Focused",
    description:
      "Tối ưu tốc độ tải, animation mượt và trải nghiệm responsive trên mọi thiết bị.",
  },
  {
    icon: <Globe2 className="size-7" />,
    title: "Modern Frontend",
    description:
      "Ứng dụng React, TypeScript, TailwindCSS và Framer Motion để xây dựng sản phẩm chất lượng.",
  },
];

export default function AboutSection() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="container relative z-10 mx-auto px-4">
        <SectionHeading
          badge="About The Universe"
          title="Exploring Digital Galaxies"
          description="Xây dựng trải nghiệm web mang cảm giác không gian vũ trụ hiện đại, huyền bí và cao cấp."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {features.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <CosmicCard
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
