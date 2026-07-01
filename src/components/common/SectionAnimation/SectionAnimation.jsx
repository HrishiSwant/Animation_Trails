import "./SectionAnimation.css";

export default function SectionAnimation({

  children,

  delay = 0,

}) {

  return (

    <div

      className="section-animation"

      style={{

        animationDelay:

          `${delay}ms`,

      }}

    >

      {children}

    </div>

  );

}
