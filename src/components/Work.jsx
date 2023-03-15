import nyka from "../assets/nyka.png";
import mg from "../assets/mg.png";
import pharm from "../assets/pharm.png";
import sugar from "../assets/sugar.PNG";
import WorkCard from "./WorkCard";
import note from "../assets/note.png";
import job from "../assets/job.png";

export default function Work() {
  return (
    <section id="work__section" className="work__section">
      <div className="work__section__header">
        <div className="home__section__sub__heading">
          Some Things I’ve Built
        </div>
        <div className="home__section__heading">Projects</div>
      </div>
      <WorkCard
        tech={[
          "Context API",
          "ReactJS",
          "CSS",
          "Firebase",
          "MongoDB",
          "Rest",
          "ExpresJS",
          "NodeJS",
        ]}
        heading={["Sugar Cosmetics"]}
        banner={sugar}
        info="SUGAR Cosmetics entered the Indian cosmetics market in 2015 and is a cruelty-free makeup brand that is high on style and higher on performance. The brand is inspired by and targeted toward bold, independent women who refuse to be stereotyped into roles.
        Manufactured in state-of-the-art facilities across Germany, Italy, India, the USA, and South Korea the brand ships its bestselling products across Lips, Eyes, Face, and Nail categories across the world."
        siteLink="https://sugar-cosmetics-clone-sand.vercel.app/"
      />
      <WorkCard
        right
        tech={["ReactJS", "CSS", "Redux", "Rest"]}
        heading={["Pharm Eassy"]}
        banner={pharm}
        info="PharmEasy is a consumer healthcare super app. PharmEasy is a consumer healthcare “super app” that provides consumers with on-demand, home delivered access to a wide range of prescription, OTC pharmaceutical, other consumer healthcare products, comprehensive diagnostic test services, and teleconsultations thereby serving their healthcare needs."
        siteLink="https://pharmeasy-clone-websit.netlify.app/"
      />
      <WorkCard
        tech={["HTML", "CSS", "JavaScript", "Rest"]}
        heading={["Tata 1Mg"]}
        banner={mg}
        info="1mg.com brings to you an online platform, which can be accessed for all your health needs. We are trying to make healthcare a hassle-free experience for you. Get your allopathic, ayurvedic, homeopathic medicines, vitamins & nutrition supplements and other health-related products delivered at home. Lab tests? That too in the comfort of your home. Doctor consult? Yes, we got that covered too."
        siteLink="https://tata1mg-lyart.vercel.app"
      />
      <WorkCard
        right
        tech={["HTML", "CSS", "JavaScript", "Rest"]}
        heading={["Nykaaman"]}
        banner={nyka}
        info="Nykaaman is the website of the Parent company Nykaa.com. Nykaa launched the Nykaaman, an e-commerce website exclusively for men as a gentleman guide offering varieties of grooming products such as hair care, personal care, beard care, grooming tips, etc."
        siteLink="https://nyka-man-clone.netlify.app/"
      />
      <WorkCard
        tech={[
          "React",
          "CSS",
          "NodeJS",
          "ExpressJS",
          "Mongoose",
          "cors",
          "jwt",
          "Bcrypt",
        ]}
        heading={["NotesApp"]}
        banner={note}
        info="A note app where you can store you note."
        siteLink="https://noteapp34.netlify.app/"
      />
      <WorkCard
        right
        tech={[
          "React",
          "Material ui",
          "NodeJS",
          "ExpressJS",
          "Mongoose",
          "jwt",
          "Bcrypt",
        ]}
        heading={["jobportal"]}
        banner={job}
        info="Naukri.com is a recruitment platform that provides hiring-related services to corporates/recruiters, placement agencies and to job seekers in India and overseas. It offers multiple products like Resume Database Access, listings and Response Management Tools."
        siteLink="https://jobportal34.netlify.app/"
      />
    </section>
  );
}
