import { Target, Database, ShieldCheck } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export interface MenuItem {
  id: string;
  title: string;
  icon: React.ElementType;
  tiles: string[];
}

export const menuItems: MenuItem[] = [
  {
    id: "strategy",
    title: "1. Model Strategy and Planning",
    icon: Target,
    tiles: [
      "Business Objective Definition",
      "Use Case Assessment",
      "Regulatory & Ethical Considerations",
    ],
  },
  {
    id: "data",
    title: "2. Data Management",
    icon: Database,
    tiles: ["Data Sourcing", "Data Quality", "Data Governance"],
  },
  {
    id: "governance",
    title: "5. Model Approval & Governance",
    icon: ShieldCheck,
    tiles: ["Model Review", "Model Approval", "Model Inventory"],
  },
];

interface AppSidebarProps {
  activeId: string;
  onSelect: (id: string) => void;
}

export function AppSidebar({ activeId, onSelect }: AppSidebarProps) {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";

  return (
    <Sidebar collapsible="icon" className="border-r border-sidebar-border">
      <SidebarContent className="pt-6">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => {
                const active = activeId === item.id;
                return (
                  <SidebarMenuItem key={item.id}>
                    <SidebarMenuButton
                      onClick={() => onSelect(item.id)}
                      className={cn(
                        "h-auto py-3 px-4 rounded-lg transition-colors cursor-pointer",
                        active
                          ? "bg-primary text-primary-foreground hover:bg-primary/90"
                          : "hover:bg-sidebar-accent"
                      )}
                    >
                      <item.icon className="h-5 w-5 shrink-0" />
                      {!collapsed && (
                        <div className="flex items-center justify-between w-full ml-2">
                          <span className="text-sm font-medium leading-snug">
                            {item.title}
                          </span>
                          <Badge
                            variant={active ? "secondary" : "outline"}
                            className={cn(
                              "ml-2 h-5 min-w-5 justify-center text-xs",
                              active && "bg-primary-foreground/20 text-primary-foreground border-transparent"
                            )}
                          >
                            {item.tiles.length}
                          </Badge>
                        </div>
                      )}
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
