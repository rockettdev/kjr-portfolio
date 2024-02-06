import { TypeAnimation } from 'react-type-animation';

const Typewriter = () => {
  return (
    <TypeAnimation
      sequence={[
        // Initial substring
        `I'm an independent Junior Software Developer from Bath, UK.`,
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

export default Typewriter