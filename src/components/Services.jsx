import ServicesCard from "./ServicesCard";

export default function Services() {
  return (
    <section id="services__section" className="services__section">
      <div className="services__section__header">
        <div className="home__section__sub__heading">What i can do for you</div>
        <div className="home__section__heading">Skills</div>
      </div>
      <div className="services__section__content">
        <ServicesCard
          title="Frontend"
          skills={[
            "HTML",
            "CSS",
            "JavaScript",
            "Typescript",
            "React",
            "Redux",
            "NextJS",
            "Material UI",
            "Bootstrap",
            "Tailwind",
            "Chakra UI",
            "NPM",
            "Git",
            "Postman",
          ]}
        />
        <ServicesCard
          title="Backend"
          skills={[
            "NodeJS",
            "ExpressJS",
            "MongoDB",
            "Git",
            "NPM",
            "Postman",
            "Rest",
            "Authentication",
            "Redis",
            "AWS",
          ]}
        />
        <ServicesCard
          title="Testing & Analytics"
          skills={["Jest", "Cypress", "Firebase"]}
        />
      </div>
    </section>
  );
}
