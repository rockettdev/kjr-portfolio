import { TypeAnimation } from 'react-type-animation';

const Typewriter = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        `I'm an independent Junior Software Developer from Bath, UK.`,
        1000
        // 1000, // wait 1s before replacing "Mice" with "Hamsters"
        // 'We produce food for Hamsters',
        // 1000,
        // 'We produce food for Guinea Pigs',
        // 1000,
        // 'We produce food for Chinchillas',
        // 1000
      ]}
      wrapper="span"
      speed={25}
      style={{ fontSize: '1em', display: 'inline-block' }}
      repeat={Infinity}
    />
  );
};

export default Typewriter