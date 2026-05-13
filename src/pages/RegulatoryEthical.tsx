import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Button } from "@/components/ui/button";

const RegulatoryEthical = () => {
  const navigate = useNavigate();

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar activeId="strategy" onSelect={() => navigate("/section/strategy")} activeTile="Regulatory & Ethical Considerations" />

        <div className="flex-1 flex flex-col">
          <header className="h-14 flex items-center border-b border-border px-4">
            <SidebarTrigger />
            <img src={iaaLogo} alt="IAA logo" className="ml-4 h-8 w-auto" /><h1 className="ml-3 text-lg font-semibold text-foreground">
              Model Lifecycle Framework
            </h1>
          </header>

          <main className="flex-1 p-8 bg-muted/30">
            <Button
              variant="outline"
              size="sm"
              className="mb-6"
              onClick={() => navigate("/section/strategy")}
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Model Strategy and Planning
            </Button>

            <h2 className="text-2xl font-bold text-foreground mb-8">
              Regulatory &amp; Ethical Considerations
            </h2>

            <div className="rounded-xl bg-primary/5 border border-primary/20 p-8">
              <p className="text-muted-foreground leading-relaxed text-base">
                The section focuses on embedding regulation, governance, and fairness into AI
                design from the start. It emphasizes building AI governance on top of existing
                data, model, testing, and validation frameworks; aligning with external guidance
                such as the EU AI Act, MAS FEAT principles, and OECD AI guidance; and treating
                bias, discrimination, and fairness as key design constraints. It also notes that
                fairness depends on legal and market context, and that compliance, ethical
                implications, and data/model documentation should be clearly recorded.
              </p>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default RegulatoryEthical;
