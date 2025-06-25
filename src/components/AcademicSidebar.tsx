
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

const menuItems = [
  {
    title: "Dashboard",
    url: "#",
    icon: Home,
  },
  {
    title: "Estudiantes",
    url: "#",
    icon: Users,
  },
  {
    title: "Profesores",
    url: "#",
    icon: UserCheck,
  },
  {
    title: "Materias",
    url: "#",
    icon: BookOpen,
  },
  {
    title: "Calificaciones",
    url: "#",
    icon: Award,
  },
  {
    title: "Calendario",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Asistencia",
    url: "#",
    icon: ClipboardList,
  },
  {
    title: "Reportes",
    url: "#",
    icon: BarChart3,
  },
  {
    title: "Comunicación",
    url: "#",
    icon: MessageSquare,
  },
  {
    title: "Configuración",
    url: "#",
    icon: Settings,
  },
];

export function AcademicSidebar() {
  return (
    <Sidebar className="border-r border-gray-200">
      <SidebarContent className="bg-primary text-white">
        <SidebarGroup>
          <SidebarGroupLabel className="text-white/80 text-sm font-medium px-3 py-2">
            Gestión Académica
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild 
                    className="text-white hover:bg-white/10 data-[state=open]:bg-white/10"
                  >
                    <a href={item.url} className="flex items-center space-x-3 px-3 py-2">
                      <item.icon className="w-5 h-5" />
                      <span>{item.title}</span>
                    </a>
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
