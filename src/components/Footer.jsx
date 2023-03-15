import { ArrowUp } from "react-feather";
import LogoS from "../assets/logo-c.png";

export default function Footer() {
  return (
    <section id="footer__section" className="footer">
      <div className="footer__content">
        <button
          className="footer__content__button"
          onClick={() => {
            document.getElementById("home__section").scrollIntoView();
            document.getElementById("home").checked = true;
          }}
          title="back to top"
        >
          <ArrowUp size={20} color="currentColor" />
        </button>
        <div className="footer__content__row">
          <div className="footer__content__row__col">
            <button
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
                document.getElementById("home").checked = true;
              }}
              className="header__content__logo"
              title="logo"
            >
              <img src={LogoS} height={30} alt="Logo" />
            </button>
            <div className="footer__content__row__col__text">
              I am here to build a small name and career out of what i am
              passionate about (Helping in empowering other people) and i hope
              you liked this please consider sending feedback or contacting me
              for work looking forward to working with you 🫠
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}