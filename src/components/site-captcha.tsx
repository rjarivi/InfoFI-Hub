import React, { useState, useEffect } from 'react';
import { Shield, CheckCircle, AlertCircle } from 'lucide-react';

interface SiteCaptchaProps {
  sitekey: string;
  onVerified?: () => void;
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

export const SiteCaptcha: React.FC<SiteCaptchaProps> = ({
  sitekey,
  onVerified,
  className = ''
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

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
      script.onerror = () => {
        setError('Failed to load security verification');
      };
      document.head.appendChild(script);
    } else {
      setIsLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (isLoaded && !isVerified && !isLoading) {
      setIsLoading(true);
      
      window.turnstile?.ready(() => {
        const container = document.getElementById('site-captcha-container');
        if (container) {
          try {
            window.turnstile!.render(container, {
              sitekey,
              theme: 'auto',
              size: 'normal',
              callback: (token: string) => {
                console.log('Site captcha verified:', token);
                setIsVerified(true);
                setIsLoading(false);
                setError(null);
                onVerified?.();
              },
              'error-callback': (errorCode: string) => {
                console.error('Captcha error:', errorCode);
                setError('Verification failed. Please try again.');
                setIsLoading(false);
              }
            });
          } catch (err) {
            setError('Failed to initialize security verification');
            setIsLoading(false);
          }
        }
      });
    }
  }, [isLoaded, isVerified, isLoading, sitekey, onVerified]);

  if (isVerified) {
    return (
      <div className={`flex items-center gap-2 text-green-600 ${className}`}>
        <CheckCircle className="w-5 h-5" />
        <span className="text-sm font-medium">Verified</span>
      </div>
    );
  }

  return (
    <div className={`site-captcha-container ${className}`}>
      <div className="flex items-center gap-2 mb-3">
        <Shield className="w-5 h-5 text-neon-cyan" />
        <span className="text-sm font-medium">Security Verification</span>
      </div>
      
      <div className="p-4 border border-border/50 rounded-lg bg-background/50">
        <div id="site-captcha-container" className="flex justify-center" />
        
        {isLoading && (
          <div className="flex items-center justify-center gap-2 mt-3 text-sm text-muted-foreground">
            <div className="w-4 h-4 border-2 border-neon-cyan border-t-transparent rounded-full animate-spin" />
            <span>Loading verification...</span>
          </div>
        )}
        
        {error && (
          <div className="flex items-center gap-2 mt-3 text-sm text-red-500">
            <AlertCircle className="w-4 h-4" />
            <span>{error}</span>
          </div>
        )}
        
        <div className="text-xs text-muted-foreground text-center mt-3">
          This helps protect against automated access and ensures site security
        </div>
      </div>
    </div>
  );
};

export default SiteCaptcha;
