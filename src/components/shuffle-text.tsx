import { useEffect, useState } from 'react';

interface ShuffleTextProps {
  text: string;
  className?: string;
  duration?: number;
  delay?: number;
}

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';

export function ShuffleText({ text, className = '', duration = 50, delay = 0 }: ShuffleTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(true);
      
      let iteration = 0;
      const interval = setInterval(() => {
        setDisplayText(prev => 
          prev
            .split('')
            .map((letter, index) => {
              if (index < iteration) {
                return text[index];
              }
              return characters[Math.floor(Math.random() * characters.length)];
            })
            .join('')
        );

        if (iteration >= text.length) {
          clearInterval(interval);
          setIsAnimating(false);
        }

        iteration += 1 / 3;
      }, duration);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timer);
  }, [text, duration, delay]);

  return (
    <span className={className}>
      {displayText}
    </span>
  );
}
