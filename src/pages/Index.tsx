import iaaLogo from "@/assets/iaa-logo.png";
import { useNavigate, useParams } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar, menuItems } from "@/components/AppSidebar";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const Index = () => {
  const { sectionId } = useParams();
  const navigate = useNavigate();
  const activeId = sectionId ?? menuItems[0].id;
  const active = menuItems.find((m) => m.id === activeId) ?? menuItems[0];

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar
          activeId={active.id}
          onSelect={(id) => navigate(id === "home" ? "/" : `/section/${id}`)}
        />

        <div className="flex-1 flex flex-col">
          <header className="h-14 flex items-center border-b border-border px-4">
            <SidebarTrigger />
            <img src={iaaLogo} alt="IAA logo" className="ml-4 h-8 w-auto" /><h1 className="ml-3 text-lg font-semibold text-foreground">
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
                  key={tile.name}
                  className={`min-h-[200px] transition-shadow ${
                    tile.route
                      ? "hover:shadow-md cursor-pointer hover:border-primary/40"
                      : "cursor-default hover:shadow-md"
                  }`}
                  onClick={() => tile.route && navigate(tile.route)}
                >
                  <CardHeader>
                    <CardTitle className="text-lg">{tile.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {tile.description && (
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {tile.description}
                      </p>
                    )}
                  </CardContent>
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
