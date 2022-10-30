import { ReactElement, useCallback, useEffect, useState } from 'react';
import useInterval from '../../lib/hooks/useInterval';

interface AnimatedTextOwnProps<E extends React.ElementType> {
  text: string;
  speed?: number;
  delay?: number;
  as?: E;
}

type Props<E extends React.ElementType> = AnimatedTextOwnProps<E> &
  // removing the AnimatedTextOwnProps from default component props
  Omit<React.ComponentProps<E>, keyof AnimatedTextOwnProps<E>>;

const AnimatedText = <E extends React.ElementType>({
  text,
  speed = 80,
  delay,
  as,
  ...props
}: Props<E>): ReactElement => {
  const [renderText, setRenderText] = useState('');
  // Randomly select a character from the text
  const [randomChar, setRandomChar] = useState('');
  // Number of characters in the text
  const [count, setCount] = useState(0);

  // Defaults
  const Speed = speed;
  const Component = as === undefined ? 'span' : as;

  // incresing count
  const handleTextTyping = useCallback(() => {
    setCount((p) => p + 1);
  }, []);

  // Getting Random Char
  const handleRandomChar = useCallback(() => {
    const charText = '!@#$%^&*()_+=-~`.|\\"\'{}[]:;<>,.?/';
    setRandomChar(() => charText[Math.floor(Math.random() * charText.length)]);
  }, []);

  const [startTyping, stopTyping] = useInterval(
    () => handleTextTyping(),
    Speed
  );

  const [startChar, stopChar] = useInterval(() => handleRandomChar(), Speed);

  useEffect(() => {
    setRenderText(text.substring(0, count));
  }, [count]);

  useEffect(() => {
    if (renderText.length >= text.length) {
      setRandomChar('');
      stopChar();
      stopTyping();
      return;
    }
    setTimeout(() => {
      startTyping();
      startChar();
    }, delay);
  }, [delay, renderText, text, startChar, startTyping, stopChar, stopTyping]);

  return (
    <Component {...props}>
      {renderText}
      {randomChar}
    </Component>
  );
};

export default AnimatedText;
