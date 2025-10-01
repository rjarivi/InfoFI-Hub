import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useLanguage } from "@/hooks/use-language";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { language, t } = useLanguage();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  const handleGoHome = () => {
    navigate(`/${language}`);
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-primary/5">
      <div className="text-center max-w-md mx-auto px-6">
        <div className="mb-8">
          <h1 className="text-8xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-foreground mb-2">
            {t("pageNotFound") || "Page Not Found"}
          </h2>
          <p className="text-muted-foreground mb-8">
            {t("pageNotFoundDescription") || "The page you're looking for doesn't exist or has been moved."}
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={handleGoHome}
            className="flex items-center gap-2"
          >
            <Home className="w-4 h-4" />
            {t("goHome") || "Go Home"}
          </Button>
          
          <Button 
            variant="outline"
            onClick={handleGoBack}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            {t("goBack") || "Go Back"}
          </Button>
        </div>
        
        <div className="mt-8 text-sm text-muted-foreground">
          <p>{t("errorCode") || "Error Code"}: 404</p>
          <p>{t("requestedPath") || "Requested Path"}: {location.pathname}</p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
