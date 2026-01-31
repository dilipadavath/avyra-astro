import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Helmet>
        <title>Page Not Found | AVYRA</title>
        <meta name="description" content="The page you are looking for could not be found. Return to AVYRA's homepage for premium stainless steel and aluminium interiors." />
      </Helmet>
      <Header />
      <main className="flex-1 flex items-center justify-center">
        <div className="container-premium text-center py-20">
          <h1 className="heading-display text-foreground mb-4">
            <span className="text-gold-gradient">404</span> - Page Not Found
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Oops! The page you're looking for doesn't exist.
          </p>
          <a href="/" className="btn-primary-gold inline-flex items-center px-6 py-3">
            Return Home
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
