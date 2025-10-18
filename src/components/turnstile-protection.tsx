import React, { useState, useEffect, useRef } from 'react';

interface TurnstileProps {
  sitekey: string;
  onSuccess?: (token: string) => void;
  onError?: (errorCode: string) => void;
  onExpired?: () => void;
  theme?: 'light' | 'dark' | 'auto';
  size?: 'normal' | 'compact';
  className?: string;
}

declare global {
  interface Window {
    turnstile?: {
      render: (container: string | HTMLElement, options: any) => string;
      remove: (widgetId: string) => void;
      reset: (widgetId: string) => void;
      ready: (callback: () => void) => void;
    };
  }
}

export const TurnstileProtection: React.FC<TurnstileProps> = ({
  sitekey,
  onSuccess,
  onError,
  onExpired,
  theme = 'auto',
  size = 'normal',
  className = ''
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [widgetId, setWidgetId] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load Turnstile script if not already loaded
    if (!window.turnstile) {
      const script = document.createElement('script');
      script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
      script.async = true;
      script.defer = true;
      script.onload = () => {
        setIsLoaded(true);
      };
      document.head.appendChild(script);
    } else {
      setIsLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (isLoaded && containerRef.current && !widgetId) {
      window.turnstile?.ready(() => {
        if (containerRef.current) {
          const id = window.turnstile!.render(containerRef.current, {
            sitekey,
            theme,
            size,
            callback: (token: string) => {
              console.log('Turnstile success:', token);
              onSuccess?.(token);
            },
            'error-callback': (errorCode: string) => {
              console.error('Turnstile error:', errorCode);
              onError?.(errorCode);
            },
            'expired-callback': () => {
              console.warn('Turnstile token expired');
              onExpired?.();
            }
          });
          setWidgetId(id);
        }
      });
    }
  }, [isLoaded, sitekey, theme, size, onSuccess, onError, onExpired, widgetId]);

  return (
    <div className={`turnstile-container ${className}`}>
      <div ref={containerRef} className="turnstile-widget" />
    </div>
  );
};

export default TurnstileProtection;
