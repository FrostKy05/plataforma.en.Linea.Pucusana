
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AcademicSidebar } from "@/components/AcademicSidebar";
import AcademicHeader from "@/components/AcademicHeader";
import StatsCard from "@/components/StatsCard";
import StudentTable from "@/components/StudentTable";
import GradesChart from "@/components/GradesChart";
import CalendarWidget from "@/components/CalendarWidget";
import TeacherPanel from "@/components/TeacherPanel";
import { Users, GraduationCap, BookOpen, Award, TrendingUp } from "lucide-react";

const Index = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        <AcademicSidebar />
        <div className="flex-1 flex flex-col">
          <AcademicHeader />
          <main className="flex-1 p-6">
            <div className="max-w-7xl mx-auto space-y-6">
              {/* Welcome Section */}
              <div className="mb-8">
                <div className="academic-gradient text-white rounded-lg p-6">
                  <h1 className="text-3xl font-bold mb-2">Bienvenido al Sistema de Gestión Académica</h1>
                  <p className="text-blue-100">Instituto de Educación Secundaria "San Miguel" - Curso 2023/2024</p>
                  <div className="mt-4 flex items-center space-x-4 text-sm">
                    <span className="bg-white/20 px-3 py-1 rounded-full">📚 Trimestre Actual: 2°</span>
                    <span className="bg-white/20 px-3 py-1 rounded-full">📅 Período: Enero 2024</span>
                    <span className="bg-white/20 px-3 py-1 rounded-full">👥 Total Estudiantes: 342</span>
                  </div>
                </div>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <StatsCard
                  title="Total Estudiantes"
                  value={342}
                  change="+5.2%"
                  icon={Users}
                  color="bg-blue-500"
                />
                <StatsCard
                  title="Profesores Activos"
                  value={28}
                  change="+2"
                  icon={GraduationCap}
                  color="bg-green-500"
                />
                <StatsCard
                  title="Materias Impartidas"
                  value={15}
                  icon={BookOpen}
                  color="bg-purple-500"
                />
                <StatsCard
                  title="Promedio General"
                  value="8.2"
                  change="+0.3"
                  icon={Award}
                  color="bg-orange-500"
                />
              </div>

              {/* Charts Section */}
              <GradesChart />

              {/* Main Content Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <StudentTable />
                </div>
                <div className="space-y-6">
                  <CalendarWidget />
                  <div className="academic-card p-6">
                    <h3 className="text-lg font-semibold mb-4 flex items-center">
                      <TrendingUp className="w-5 h-5 mr-2" />
                      Estadísticas Rápidas
                    </h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Asistencia Promedio</span>
                        <span className="font-semibold text-green-600">92.5%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Exámenes Pendientes</span>
                        <span className="font-semibold text-orange-600">8</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Reuniones Programadas</span>
                        <span className="font-semibold text-blue-600">3</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Actividades Extracurriculares</span>
                        <span className="font-semibold text-purple-600">12</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Teachers Section */}
              <TeacherPanel />

              {/* Quick Actions */}
              <div className="academic-card p-6">
                <h3 className="text-lg font-semibold mb-4">Acciones Rápidas</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <button className="p-4 text-center border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                    <Users className="w-8 h-8 mx-auto mb-2 text-blue-500" />
                    <span className="text-sm font-medium">Nuevo Estudiante</span>
                  </button>
                  <button className="p-4 text-center border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                    <Award className="w-8 h-8 mx-auto mb-2 text-green-500" />
                    <span className="text-sm font-medium">Registrar Notas</span>
                  </button>
                  <button className="p-4 text-center border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                    <BookOpen className="w-8 h-8 mx-auto mb-2 text-purple-500" />
                    <span className="text-sm font-medium">Nueva Materia</span>
                  </button>
                  <button className="p-4 text-center border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                    <GraduationCap className="w-8 h-8 mx-auto mb-2 text-orange-500" />
                    <span className="text-sm font-medium">Reportes</span>
                  </button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Index;
