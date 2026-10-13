import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="section-dark-accent noise-overlay min-h-screen flex items-center relative">
      <Container className="relative z-10 text-center">
        <div className="text-8xl sm:text-9xl font-bold gradient-text mb-4">404</div>
        <h1 className="text-2xl sm:text-3xl font-bold text-white mb-3">Page Not Found</h1>
        <p className="text-text-on-dark-muted max-w-md mx-auto mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Button href="/" variant="primary" size="lg">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Button>
      </Container>
    </section>
  );
}
