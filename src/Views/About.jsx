import { useNavigate, Link } from "react-router-dom";

const About = () => {
  const nav = useNavigate();
  const goHome = () => nav("/");
  return (
    <>
      <button onClick={goHome}>Go Home</button>
      <main>
        <h2>Who are we?</h2>
        <p>That feels like an existential question, don't you think?</p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
};

export default About;
