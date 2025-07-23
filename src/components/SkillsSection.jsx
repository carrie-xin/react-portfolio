import { useState } from "react";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";

const skills = [
  // Frontend
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "Angular", level: 90, category: "frontend" },
  { name: "TypeScript", level: 75, category: "frontend" },
  { name: "Echarts", level: 80, category: "frontend" },
  { name: "Vue", level: 50, category: "frontend" },
  { name: "Sass", level: 85, category: "frontend" },
  { name: "Flexmonster", level: 40, category: "frontend" },
  { name: "AntV S2", level: 40, category: "frontend" },

  // Backend
  { name: "Node.js", level: 30, category: "backend" },

  // Tools
  { name: "Git/GitHub", level: 90, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
  { name: "Figma", level: 85, category: "tools" },
];

export const SkillsSection = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: t("skills.categories.all") },
    { id: "frontend", name: t("skills.categories.frontend") },
    { id: "backend", name: t("skills.categories.backend") },
    { id: "tools", name: t("skills.categories.tools") },
  ];

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          {t("skills.title1")} <span className="text-primary"> {t("skills.title2")}</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
              )}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
