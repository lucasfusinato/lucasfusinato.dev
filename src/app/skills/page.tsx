import SkillCard from "@/components/SkillCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Lucas Fusinato - Skills',
  description: 'Explore my skills about Software Engineering, Programming Languages, Databases, Cloud and DevOps, Big Data, and more.',
  alternates: {
    canonical: '/skills'
  },
  openGraph: {
    title: 'Lucas Fusinato - Skills',
    description: 'Explore my skills about Software Engineering, Programming Languages, Databases, Cloud and DevOps, Big Data, and more.',
    url: 'https://lucasfusinato.dev/skills',
    type: 'website',
    images: 'https://avatars.githubusercontent.com/u/31139370?v=4'
  }
}

interface SkillItem {
  title: string;
  image: string;
  items: string[];
}

export default function Skills() {
  const skills: SkillItem[] = [
    {
      title: "Software Engineering",
      image: "/icons/skills/engineering.png",
      items: [
        "Algorithms",
        "Data Structures",
        "Design Patterns",
        "Distributed Systems",
        "Software Architecture"
      ]
    },
    {
      title: "Programming Languages",
      image: "/icons/skills/languages.jpg",
      items: [
        "Java",
        "JavaScript",
        "PHP",
        "Python",
        "TypeScript"
      ]
    },
    {
      title: "Databases",
      image: "/icons/skills/databases.png",
      items: [
        "PostgreSQL",
        "Redis",
        "Elasticsearch",
        "DynamoDB",
        "SQLite"
      ]
    },
    {
      title: "Cloud and DevOps",
      image: "/icons/skills/devops.png",
      items: [
        "AWS",
        "GitHub Actions",
        "Jenkins",
        "Docker",
        "Kubernetes"
      ]
    },
    {
      title: "Big Data",
      image: "/icons/skills/bigdata.png",
      items: [
        "Amazon S3",
        "Apache Airflow",
        "Apache Hive",
        "Apache Spark",
        "Trino"
      ]
    },
    {
      title: "Soft Skills",
      image: "/icons/skills/softskills.png",
      items: [
        "Adaptability",
        "Communication",
        "Curiosity",
        "Leadership",
        "Problem Solving"
      ]
    }
  ]

  return (
    <div className="flex flex-col max-w-6xl max-h-full items-center">
      <div className="p-5">
        <h1 className="text-3xl font-extrabold uppercase text-[#EBA297]">Skills</h1>
      </div>
      <div className="flex flex-wrap">
        {skills.map((skill, index) => (
          <div key={`skill-${index}`} className="basis-full sm:basis-1/2 lg:basis-1/3 box-border p-2.5">
            <SkillCard
              title={skill.title}
              image={skill.image}
              items={skill.items}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
