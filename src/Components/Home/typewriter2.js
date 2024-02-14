import { TypeAnimation } from 'react-type-animation';

const Typewriter2 = () => {
  return (
    <TypeAnimation
      sequence={[
        // Initial substring
        5000,
        `I specialise in JavaScript, React, Node, TailwindCSS and many more.`,
        1000
        // 1000, // wait 1s before replacing characters
      ]}
      wrapper="span"
      speed={25}
      style={{ fontSize: '1em', display: 'inline-block' }}
      repeat={Infinity}
    />
  );
};

export default Typewriter2