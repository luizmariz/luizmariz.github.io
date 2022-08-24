import './src/assets/fonts/fonts.css';
import 'prismjs/themes/prism-tomorrow.css';

export const onClientEntry = async () => {
  if (typeof IntersectionObserver === `undefined`) {
    await import(`intersection-observer`);
  }
};
