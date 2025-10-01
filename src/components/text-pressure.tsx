import { useState, useRef, useEffect } from 'react';

interface TextPressureProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

export function TextPressure({ text, className = '', style }: TextPressureProps) {
  const [isHovered, setIsHovered] = useState(false);
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    const letters = textRef.current.querySelectorAll('.letter');
    
    if (isHovered) {
      letters.forEach((letter, index) => {
        const element = letter as HTMLElement;
        element.style.animationDelay = `${index * 0.05}s`;
        element.classList.add('animate-pressure');
      });
    } else {
      letters.forEach((letter) => {
        const element = letter as HTMLElement;
        element.classList.remove('animate-pressure');
      });
    }
  }, [isHovered]);

  return (
    <span
      ref={textRef}
      className={`inline-block cursor-pointer ${className}`}
      style={{
        letterSpacing: '0.027em', // Increased by 35% from -0.02em
        ...style
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {text.split('').map((char, index) => (
        <span
          key={index}
          className="letter inline-block transition-all duration-200 ease-out"
          style={{
            transformOrigin: 'center',
            display: 'inline-block',
            marginRight: char === ' ' ? '0.2em' : '0', // Only add space for actual spaces
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
      
      <style>{`
        .letter.animate-pressure {
          animation: pressure 0.6s ease-out forwards;
        }
        
        @keyframes pressure {
          0% {
            transform: scale(1) rotate(0deg);
          }
          25% {
            transform: scale(1.2) rotate(-2deg);
          }
          50% {
            transform: scale(0.9) rotate(1deg);
          }
          75% {
            transform: scale(1.1) rotate(-1deg);
          }
          100% {
            transform: scale(1) rotate(0deg);
          }
        }
      `}</style>
    </span>
  );
}
