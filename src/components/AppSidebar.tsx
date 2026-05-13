import { Target, Database, ShieldCheck, ChevronDown, Code2, FlaskConical, Rocket, Activity, Wrench, FileText, Users, Home } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
  useSidebar,
} from "@/components/ui/sidebar";
import { Badge } from "@/components/ui/badge";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";

export interface TileInfo {
  name: string;
  description?: string;
  route?: string;
}

export interface MenuItem {
  id: string;
  title: string;
  icon: React.ElementType;
  tiles: TileInfo[];
}

export const menuItems: MenuItem[] = [
  {
    id: "strategy",
    title: "1. Model Strategy and Planning",
    icon: Target,
    tiles: [
      {
        name: "Business Objective Definition",
        description:
          "The section focuses on how AI should be scoped and governed. It emphasizes the alignment of AI use with clear business needs and intended outcomes, setting governance in proportion to model risk, and designing for fairness, robustness, transparency, and explainability from the beginning. The content also highlights assessing whether AI is truly appropriate for a use case, considering feasibility, data suitability, bias and discrimination risks, and documenting scope, assumptions, and limitations. Finally, it stresses embedding regulatory, ethical, and governance expectations early, including compliance with applicable laws and principles.",
        route: "/business-objective",
      },
      { name: "Use Case Assessment" },
      { name: "Regulatory & Ethical Considerations" },
    ],
  },
  {
    id: "data",
    title: "2. Data Management",
    icon: Database,
    tiles: [
      { name: "Data Sourcing" },
      { name: "Data Quality" },
      { name: "Data Governance" },
    ],
  },
  {
    id: "development",
    title: "3. Model Development",
    icon: Code2,
    tiles: [],
  },
  {
    id: "validation",
    title: "4. Model Validation & Testing",
    icon: FlaskConical,
    tiles: [],
  },
  {
    id: "governance",
    title: "5. Model Approval & Governance",
    icon: ShieldCheck,
    tiles: [
      {
        name: "Model Review",
        description:
          "Prepare consolidated review pack: objectives, risk rating, validation outcomes, controls, dependencies (including third‑party models/data) and mitigation plan. Route per risk rating; ensure independent validation closure; committee approvals recorded; define conditions and expiry; confirm third‑party due diligence obligations.",
        route: "/model-review",
      },
      { name: "Model Approval" },
      { name: "Model Inventory" },
    ],
  },
  {
    id: "deployment",
    title: "6. Model Implementation & Deployment",
    icon: Rocket,
    tiles: [],
  },
  {
    id: "monitoring",
    title: "7. Model Monitoring & Performance Management",
    icon: Activity,
    tiles: [],
  },
  {
    id: "maintenance",
    title: "8. Model Maintenance & Retirement",
    icon: Wrench,
    tiles: [],
  },
  {
    id: "documentation",
    title: "9. Documentation & Auditability",
    icon: FileText,
    tiles: [],
  },
  {
    id: "roles",
    title: "10. Governance Structure & Roles",
    icon: Users,
    tiles: [],
  },
];

interface AppSidebarProps {
  activeId: string;
  onSelect: (id: string) => void;
  activeTile?: string;
}

export function AppSidebar({ activeId, onSelect, activeTile }: AppSidebarProps) {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const navigate = useNavigate();

  return (
    <Sidebar collapsible="icon" className="border-r border-sidebar-border">
      <SidebarContent className="pt-6">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => {
                const active = activeId === item.id;
                const hasSubItems = item.tiles.some((t) => t.route);

                if (hasSubItems && !collapsed) {
                  return (
                    <Collapsible key={item.id} defaultOpen={active} className="group/collapsible">
                      <SidebarMenuItem>
                        <CollapsibleTrigger asChild>
                          <SidebarMenuButton
                            onClick={() => {
                              onSelect(item.id);
                              navigate("/");
                            }}
                            className={cn(
                              "h-auto py-3 px-4 rounded-lg transition-colors cursor-pointer",
                              active
                                ? "bg-primary text-primary-foreground hover:bg-primary/90"
                                : "hover:bg-sidebar-accent"
                            )}
                          >
                            <item.icon className="h-5 w-5 shrink-0" />
                            <div className="flex items-center justify-between w-full ml-2">
                              <span className="text-sm font-medium leading-snug">
                                {item.title}
                              </span>
                              <div className="flex items-center gap-1">
                                <Badge
                                  variant={active ? "secondary" : "outline"}
                                  className={cn(
                                    "h-5 min-w-5 justify-center text-xs",
                                    active && "bg-primary-foreground/20 text-primary-foreground border-transparent"
                                  )}
                                >
                                  {item.tiles.length}
                                </Badge>
                                <ChevronDown className="h-4 w-4 shrink-0 transition-transform group-data-[state=open]/collapsible:rotate-180" />
                              </div>
                            </div>
                          </SidebarMenuButton>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <SidebarMenuSub>
                            {item.tiles
                              .filter((t) => t.route)
                              .map((tile) => (
                                <SidebarMenuSubItem key={tile.name}>
                                  <SidebarMenuSubButton
                                    onClick={() => navigate(tile.route!)}
                                    className={cn(
                                      "cursor-pointer",
                                      activeTile === tile.name && "bg-muted font-medium text-primary"
                                    )}
                                  >
                                    <span>{tile.name}</span>
                                  </SidebarMenuSubButton>
                                </SidebarMenuSubItem>
                              ))}
                          </SidebarMenuSub>
                        </CollapsibleContent>
                      </SidebarMenuItem>
                    </Collapsible>
                  );
                }

                return (
                  <SidebarMenuItem key={item.id}>
                    <SidebarMenuButton
                      onClick={() => {
                        onSelect(item.id);
                        navigate("/");
                      }}
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
