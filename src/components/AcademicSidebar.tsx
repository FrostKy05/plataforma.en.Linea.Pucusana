
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { 
  Home, 
  Users, 
  BookOpen, 
  Calendar, 
  ClipboardList, 
  BarChart3, 
  MessageSquare, 
  Settings,
  UserCheck,
  Award
} from "lucide-react";
import { useApp } from "@/contexts/AppContext";

const menuItems = [
  {
    title: "Dashboard",
    view: "dashboard" as const,
    icon: Home,
  },
  {
    title: "Estudiantes",
    view: "students" as const,
    icon: Users,
  },
  {
    title: "Profesores",
    view: "teachers" as const,
    icon: UserCheck,
  },
  {
    title: "Materias",
    view: "subjects" as const,
    icon: BookOpen,
  },
  {
    title: "Calificaciones",
    view: "grades" as const,
    icon: Award,
  },
  {
    title: "Calendario",
    view: "calendar" as const,
    icon: Calendar,
  },
  {
    title: "Asistencia",
    view: "attendance" as const,
    icon: ClipboardList,
  },
  {
    title: "Reportes",
    view: "reports" as const,
    icon: BarChart3,
  },
  {
    title: "Comunicación",
    view: "communication" as const,
    icon: MessageSquare,
  },
  {
    title: "Configuración",
    view: "settings" as const,
    icon: Settings,
  },
];

export function AcademicSidebar() {
  const { currentView, setCurrentView } = useApp();

  const handleNavigation = (view: any) => {
    setCurrentView(view);
    console.log(`Navegando a: ${view}`);
  };

  return (
    <Sidebar className="border-r border-gray-200">
      <SidebarContent className="bg-primary text-white">
        <SidebarGroup>
          <SidebarGroupLabel className="text-white/80 text-sm font-medium px-3 py-2">
            Manuel F. Calvo y Pérez - Pucusana
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild 
                    className={`text-white hover:bg-white/10 data-[state=open]:bg-white/10 cursor-pointer ${
                      currentView === item.view ? 'bg-white/20' : ''
                    }`}
                  >
                    <button 
                      onClick={() => handleNavigation(item.view)}
                      className="flex items-center space-x-3 px-3 py-2 w-full text-left"
                    >
                      <item.icon className="w-5 h-5" />
                      <span>{item.title}</span>
                    </button>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
