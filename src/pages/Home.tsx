import { useNavigate } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar, menuItems } from "@/components/AppSidebar";
import { Card } from "@/components/ui/card";

const Home = () => {
  const navigate = useNavigate();

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar activeId="home" onSelect={(id) => navigate(id === "home" ? "/" : `/section/${id}`)} />

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
                Model Lifecycle Framework
              </h2>
              <p className="text-muted-foreground mt-1">
                Explore each phase of the lifecycle.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Card
                    key={item.id}
                    onClick={() => navigate(`/section/${item.id}`)}
                    className="flex items-center gap-3 px-4 py-3 cursor-pointer hover:shadow-md hover:border-primary/40 transition-all min-w-[180px]"
                  >
                    <Icon className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-sm font-medium text-foreground leading-snug">
                      {item.title}
                    </span>
                  </Card>
                );
              })}
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Home;
