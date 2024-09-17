import React from "react";
import styles from "./Hero.module.css";
import Button from "../../Button/Button.jsx";

function Hero() {
  const additionalClass = styles.hero_title_button;
  return (
    <section className={styles.hero}>
      <div className="container">
        <h1 className={styles.hero_title}>
          Development in the field of ballet culture.
          <span>
            <br></br>
          </span>{" "}
          Professional ballet training.
        </h1>
        <Button
          additionalClass={additionalClass}
          buttonText="Sign up for classes"
        />
      </div>
    </section>
  );
}

export default Hero;
