import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Button } from "@/components/ui/button";

const sections = [
  {
    title: "Align AI to clearly defined business needs and outcomes",
    content: (
      <p>
        Start by aligning AI system capabilities with business needs and clearly defined intended outcomes;
        actuaries are encouraged to collaborate with development teams early to define limitations and intended
        use across the lifecycle.
      </p>
    ),
  },
  {
    title: "Calibrate governance to model risk rating (high/medium/low)",
    content: (
      <p>
        Use the model risk rating methodology (high/medium/low) based on criteria such as adverse financial
        impact, complexity, impact on reserving, solvency, pricing, underwriting, claims processes and fair
        treatment of beneficiaries to determine the intensity of governance and oversight.
      </p>
    ),
  },
  {
    title: "Design for fairness, robustness, transparency from the outset",
    content: (
      <ul className="list-disc pl-6 space-y-3">
        <li>
          Recognize that the governance framework covers design, development, implementation, ongoing monitoring
          and retirement of AI systems; objectives should be framed so that fairness, safety, robustness and
          regulatory compliance can be monitored over time.
        </li>
        <li>
          Consider early how transparency and explainability requirements will influence choice of model type
          (transparent vs explainable vs opaque such as LLMs), recognising that this determines the feasible
          testing, validation and monitoring approaches.
        </li>
        <li>
          Document the business purpose, target population, intended use and high‑level limitations as part of a
          model overview, forming the front of the model card.
        </li>
        <li>
          Apply the principle of proportionality when setting expectations for documentation and governance –
          depth should scale with significance, risk and complexity of the AI system.
        </li>
      </ul>
    ),
  },
];

const BusinessObjective = () => {
  const navigate = useNavigate();

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar activeId="strategy" onSelect={() => navigate("/")} activeTile="Business Objective Definition" />

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
              onClick={() => navigate("/")}
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Model Strategy and Planning
            </Button>

            <h2 className="text-2xl font-bold text-foreground mb-8">
              Business Objective Definition
            </h2>

            <div className="space-y-6">
              {sections.map((section, i) => (
                <div
                  key={section.title}
                  className={
                    i % 2 === 0
                      ? "rounded-xl bg-primary/5 border border-primary/20 p-8"
                      : "rounded-xl bg-card border border-border p-8"
                  }
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="h-3 w-3 rounded-full bg-primary" />
                    <h3 className="text-xl font-bold text-foreground">
                      {section.title}
                    </h3>
                  </div>
                  <div className="text-muted-foreground leading-relaxed text-base">
                    {section.content}
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default BusinessObjective;
