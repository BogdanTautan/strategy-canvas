import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Button } from "@/components/ui/button";

const governanceBlocks = [
  {
    title: "Strategy/Oversight",
    text: "Board of Directors – ultimate accountability for AI use, approves policies, ensures alignment with organizational vision and values, secures resources.",
  },
  {
    title: "Management",
    text: "Executive Committees, CRO, CFO, Key Functions – oversee implementation, risk management, compliance, and operational policies for AI.",
  },
];

const ModelReview = () => {
  const navigate = useNavigate();

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar activeId="governance" onSelect={(id) => navigate("/")} activeTile="Model Review" />

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
              onClick={() => navigate("/")}
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Model Approval & Governance
            </Button>

            <h2 className="text-2xl font-bold text-foreground mb-8">
              Governance Structure
            </h2>

            {/* Strategy block - full width like the reference */}
            <div className="rounded-xl bg-primary/5 border border-primary/20 p-8 mb-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="h-3 w-3 rounded-full bg-primary" />
                <h3 className="text-xl font-bold text-foreground">
                  {governanceBlocks[0].title}
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed text-base">
                {governanceBlocks[0].text}
              </p>
            </div>

            {/* Separator arrow */}
            <div className="flex justify-center my-4">
              <span className="text-muted-foreground text-xl">↓</span>
            </div>

            {/* Management block */}
            <div className="rounded-xl bg-card border border-border p-8">
              <div className="flex items-center gap-2 mb-3">
                <span className="h-3 w-3 rounded-full bg-primary" />
                <h3 className="text-xl font-bold text-foreground">
                  {governanceBlocks[1].title}
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed text-base">
                {governanceBlocks[1].text}
              </p>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default ModelReview;
