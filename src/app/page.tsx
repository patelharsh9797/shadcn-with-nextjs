import Navbar from "@/components/Nav";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className={"items-center text-center py-12 flex flex-col gap-8"}>
        <h1 className={"text-4xl font-bold"}>Shadcn is awesome.</h1>
        <p className={"text-2xl text-muted-foreground"}>
          Hand-picked themes that you can copy and paste into your app.
        </p>
        <div className="flex gap-6 py-6">
          <Button variant="link">Learn More</Button>
          <Button>
            Enroll Now <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </section>
    </main>
  );
}
