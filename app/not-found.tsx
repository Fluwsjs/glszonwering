import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        {/* 404 Number */}
        <div className="relative mb-8">
          <span className="text-[150px] lg:text-[200px] font-bold text-panel2 leading-none select-none">
            404
          </span>
          <div className="absolute inset-0 flex items-center justify-center">
            <Search className="h-16 w-16 lg:h-20 lg:w-20 text-accent" />
          </div>
        </div>

        {/* Content */}
        <h1 className="text-2xl lg:text-3xl font-bold text-text mb-4">
          Pagina niet gevonden
        </h1>
        <p className="text-muted mb-8">
          De pagina die u zoekt bestaat niet of is verplaatst. Ga terug naar de
          homepagina of bekijk onze producten.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild>
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Naar home
            </Link>
          </Button>
          <Button variant="secondary" asChild>
            <Link href="/producten">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Bekijk producten
            </Link>
          </Button>
        </div>

        {/* Help text */}
        <p className="text-sm text-muted mt-12">
          Hulp nodig?{" "}
          <Link href="/contact" className="text-accent hover:underline">
            Neem contact met ons op
          </Link>
        </p>
      </div>
    </div>
  );
}
