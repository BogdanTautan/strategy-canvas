import { useState } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar, menuItems } from "@/components/AppSidebar";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const Index = () => {
  const [activeId, setActiveId] = useState(menuItems[0].id);
  const active = menuItems.find((m) => m.id === activeId)!;

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar activeId={activeId} onSelect={setActiveId} />

        <div className="flex-1 flex flex-col">
          <header className="h-14 flex items-center border-b border-border px-4">
            <SidebarTrigger />
            <h1 className="ml-4 text-lg font-semibold text-foreground">
              Model Lifecycle Framework
            </h1>
          </header>

          <main className="flex-1 p-8 bg-muted/30">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-foreground">
                {active.title}
              </h2>
              <p className="text-muted-foreground mt-1">
                {active.tiles.length} topics to explore
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {active.tiles.map((tile) => (
                <Card
                  key={tile}
                  className="min-h-[200px] hover:shadow-md transition-shadow cursor-default"
                >
                  <CardHeader>
                    <CardTitle className="text-lg">{tile}</CardTitle>
                  </CardHeader>
                  <CardContent />
                </Card>
              ))}
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Index;
