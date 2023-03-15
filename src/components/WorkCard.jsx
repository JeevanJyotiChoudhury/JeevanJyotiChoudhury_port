import project from "../assets/project.jpg";
import { GitHub, Link } from "react-feather";

export default function WorkCard({
  tech,
  heading,
  right,
  banner,
  info,
  siteLink,
  githubLink,
}) {
  return (
    <div
      className="work__section__entry"
      style={right ? { justifyContent: "flex-end" } : null}
    >
      <a
        href={siteLink}
        className="work__section__entry__left"
        title="website"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={banner ? banner : project}
          alt="project_img"
          className="work__section__entry__left__img"
        />
      </a>
      <div
        className="work__section__entry__right"
        style={right ? { left: 0, alignItems: "flex-start" } : null}
      >
        <div
          className="work__section__entry__right__heading"
          style={right ? { textAlign: "left" } : null}
        >
          {heading.map((item, i) =>
            i !== heading.length - 1 ? item + ", " : item
          )}
        </div>
        <div
          className="work__section__entry__right__info"
          style={right ? { textAlign: "left" } : null}
        >
          {info
            ? info
            : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro saepe dolores tempore voluptate voluptatem eum qui. Nobis consectetur in odio a iure iste laborum vero, assumenda omnis. Laudantium, ab unde."}
        </div>
        <div
          className="work__section__entry__right__tech"
          style={right ? { textAlign: "left" } : null}
        >
          {tech.map((item, i) => (i !== tech.length - 1 ? item + ", " : item))}
        </div>
        <div className="work__section__entry__right__links">
          <a
            href={githubLink}
            className="work__section__entry__right__links__link"
            title="github"
            target="_blank"
            rel="noreferrer"
          >
            <GitHub size={20} color="currentColor" />
          </a>

          <a
            href={siteLink}
            className="work__section__entry__right__links__link"
            title="website"
            target="_blank"
            rel="noreferrer"
          >
            <Link size={20} color="currentColor" />
          </a>
        </div>
      </div>
    </div>
  );
}




