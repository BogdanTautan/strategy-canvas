import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Button } from "@/components/ui/button";

const UseCaseAssessment = () => {
  const navigate = useNavigate();

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar activeId="strategy" onSelect={() => navigate("/section/strategy")} activeTile="Use Case Assessment" />

        <div className="flex-1 flex flex-col">
          <header className="h-14 flex items-center border-b border-border px-4">
            <SidebarTrigger />
            <h1 className="ml-4 text-lg font-semibold text-foreground">
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
              Use Case Assessment
            </h2>

            <div className="rounded-xl bg-primary/5 border border-primary/20 p-8">
              <p className="text-muted-foreground leading-relaxed text-base">
                This section discusses the early-stage AI use-case assessment and governance.
                It covers topics such as checking whether AI is actually suitable for the
                actuarial business need, evaluating data quality, privacy, and security, and
                considering fairness, bias, discrimination, transparency, and explainability
                from the start. It also stresses documenting scope and limitations, and
                recognizing that AI may require stronger validation and monitoring than
                traditional models.
              </p>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default UseCaseAssessment;
