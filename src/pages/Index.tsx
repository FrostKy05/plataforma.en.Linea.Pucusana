import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AcademicSidebar } from "@/components/AcademicSidebar";
import AcademicHeader from "@/components/AcademicHeader";
import StatsCard from "@/components/StatsCard";
import StudentTable from "@/components/StudentTable";
import GradesChart from "@/components/GradesChart";
import CalendarWidget from "@/components/CalendarWidget";
import TeacherPanel from "@/components/TeacherPanel";
import NewStudentModal from "@/components/NewStudentModal";
import NewTeacherModal from "@/components/NewTeacherModal";
import SubjectsPanel from "@/components/SubjectsPanel";
import AttendancePanel from "@/components/AttendancePanel";
import ReportsPanel from "@/components/ReportsPanel";
import CommunicationPanel from "@/components/CommunicationPanel";
import SettingsPanel from "@/components/SettingsPanel";
import { AppProvider, useApp } from "@/contexts/AppContext";
import { Users, GraduationCap, BookOpen, Award, TrendingUp } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const DashboardContent = () => {
  const { currentView, setShowNewStudentModal, setShowNewTeacherModal } = useApp();

  const handleQuickAction = (action: string) => {
    switch (action) {
      case 'nuevo-estudiante':
        setShowNewStudentModal(true);
        break;
      case 'registrar-notas':
        toast({
          title: "Registrar Notas",
          description: "Abriendo sistema de calificaciones...",
        });
        console.log('Registrar notas');
        break;
      case 'nueva-materia':
        toast({
          title: "Nueva Materia",
          description: "Abriendo formulario de nueva materia...",
        });
        console.log('Nueva materia');
        break;
      case 'reportes':
        toast({
          title: "Reportes",
          description: "Generando reportes académicos...",
        });
        console.log('Ver reportes');
        break;
      default:
        break;
    }
  };

  const renderContent = () => {
    switch (currentView) {
      case 'students':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Gestión de Estudiantes</h2>
            <StudentTable />
          </div>
        );
      case 'teachers':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Gestión de Profesores</h2>
            <TeacherPanel />
          </div>
        );
      case 'subjects':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Gestión de Materias</h2>
            <SubjectsPanel />
          </div>
        );
      case 'grades':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Sistema de Calificaciones</h2>
            <GradesChart />
          </div>
        );
      case 'calendar':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Calendario Académico</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <CalendarWidget />
              <div className="academic-card p-6">
                <h3 className="text-lg font-semibold mb-4">Próximos Eventos</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-4">
                    <p className="font-medium">Reunión de Padres</p>
                    <p className="text-sm text-gray-600">15 de Febrero, 18:00</p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <p className="font-medium">Exámenes Finales</p>
                    <p className="text-sm text-gray-600">1-5 de Marzo</p>
                  </div>
                  <div className="border-l-4 border-orange-500 pl-4">
                    <p className="font-medium">Vacaciones de Primavera</p>
                    <p className="text-sm text-gray-600">8-22 de Marzo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'attendance':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Control de Asistencia</h2>
            <AttendancePanel />
          </div>
        );
      case 'reports':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Centro de Reportes</h2>
            <ReportsPanel />
          </div>
        );
      case 'communication':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Centro de Comunicación</h2>
            <CommunicationPanel />
          </div>
        );
      case 'settings':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Configuración del Sistema</h2>
            <SettingsPanel />
          </div>
        );
      default:
        return (
          <>
            {/* Welcome Section */}
            <div className="mb-8">
              <div className="academic-gradient text-white rounded-lg p-6">
                <h1 className="text-3xl font-bold mb-2">Bienvenido al Sistema de Gestión Académica</h1>
                <p className="text-green-100">Instituto de Educación Secundaria "Manuel F. Calvo y Pérez" - Pucusana</p>
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
                color="bg-green-600"
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
                color="bg-green-700"
              />
              <StatsCard
                title="Promedio General"
                value="8.2"
                change="+0.3"
                icon={Award}
                color="bg-green-800"
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
                <button 
                  onClick={() => handleQuickAction('nuevo-estudiante')}
                  className="p-4 text-center border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <Users className="w-8 h-8 mx-auto mb-2 text-green-600" />
                  <span className="text-sm font-medium">Nuevo Estudiante</span>
                </button>
                <button 
                  onClick={() => handleQuickAction('registrar-notas')}
                  className="p-4 text-center border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <Award className="w-8 h-8 mx-auto mb-2 text-green-500" />
                  <span className="text-sm font-medium">Registrar Notas</span>
                </button>
                <button 
                  onClick={() => handleQuickAction('nueva-materia')}
                  className="p-4 text-center border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <BookOpen className="w-8 h-8 mx-auto mb-2 text-green-700" />
                  <span className="text-sm font-medium">Nueva Materia</span>
                </button>
                <button 
                  onClick={() => handleQuickAction('reportes')}
                  className="p-4 text-center border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <GraduationCap className="w-8 h-8 mx-auto mb-2 text-green-800" />
                  <span className="text-sm font-medium">Reportes</span>
                </button>
              </div>
            </div>
          </>
        );
    }
  };

  return (
    <main className="flex-1 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {renderContent()}
      </div>
    </main>
  );
};

const Index = () => {
  return (
    <AppProvider>
      <SidebarProvider>
        <div className="min-h-screen flex w-full bg-gray-50">
          <AcademicSidebar />
          <div className="flex-1 flex flex-col">
            <AcademicHeader />
            <DashboardContent />
          </div>
        </div>
        <NewStudentModal />
        <NewTeacherModal />
      </SidebarProvider>
    </AppProvider>
  );
};

export default Index;
