
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { UserCheck, Mail, Phone, BookOpen, Users, Calendar, Plus, MessageSquare } from "lucide-react";

const mockTeachers = [
  {
    id: 1,
    nombre: "Prof. María Rodríguez",
    especialidad: "Matemáticas",
    cursos: ["3° ESO A", "4° ESO B"],
    email: "m.rodriguez@colegio.edu",
    telefono: "612-345-678",
    horasSemanales: 18,
    estudiantesTotal: 48,
    estado: "Activo",
    avatar: "/placeholder.svg"
  },
  {
    id: 2,
    nombre: "Prof. Carlos Vega",
    especialidad: "Lengua y Literatura",
    cursos: ["2° ESO C", "3° ESO B"],
    email: "c.vega@colegio.edu",
    telefono: "623-456-789",
    horasSemanales: 20,
    estudiantesTotal: 52,
    estado: "Activo",
    avatar: "/placeholder.svg"
  },
  {
    id: 3,
    nombre: "Prof. Ana Jiménez",
    especialidad: "Ciencias Naturales",
    cursos: ["1° ESO A", "2° ESO A"],
    email: "a.jimenez@colegio.edu",
    telefono: "634-567-890",
    horasSemanales: 16,
    estudiantesTotal: 45,
    estado: "Activo",
    avatar: "/placeholder.svg"
  },
  {
    id: 4,
    nombre: "Prof. David López",
    especialidad: "Historia",
    cursos: ["3° ESO A", "4° ESO A"],
    email: "d.lopez@colegio.edu",
    telefono: "645-678-901",
    horasSemanales: 15,
    estudiantesTotal: 42,
    estado: "Licencia",
    avatar: "/placeholder.svg"
  }
];

const TeacherPanel = () => {
  const getInitials = (nombre: string) => {
    return nombre.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  const getEstadoBadge = (estado: string) => {
    const variants: { [key: string]: "default" | "secondary" | "destructive" | "outline" } = {
      "Activo": "default",
      "Licencia": "secondary",
      "Inactivo": "destructive"
    };
    return variants[estado] || "outline";
  };

  return (
    <div className="space-y-6">
      <Card className="academic-card">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <UserCheck className="w-5 h-5" />
              Gestión de Profesores
            </CardTitle>
            <Button className="bg-primary hover:bg-primary/90">
              <Plus className="w-4 h-4 mr-2" />
              Nuevo Profesor
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {mockTeachers.map((teacher) => (
              <div key={teacher.id} className="border rounded-lg p-4 hover:shadow-md transition-all">
                <div className="flex items-start space-x-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={teacher.avatar} alt={teacher.nombre} />
                    <AvatarFallback className="bg-primary text-white">
                      {getInitials(teacher.nombre)}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-gray-900 truncate">
                        {teacher.nombre}
                      </h3>
                      <Badge variant={getEstadoBadge(teacher.estado)}>
                        {teacher.estado}
                      </Badge>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-gray-600">
                        <BookOpen className="w-4 h-4 mr-2" />
                        <span className="font-medium">{teacher.especialidad}</span>
                      </div>
                      
                      <div className="flex items-center text-sm text-gray-600">
                        <Users className="w-4 h-4 mr-2" />
                        <span>{teacher.estudiantesTotal} estudiantes</span>
                      </div>
                      
                      <div className="flex items-center text-sm text-gray-600">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{teacher.horasSemanales} horas/semana</span>
                      </div>
                      
                      <div className="text-sm text-gray-600">
                        <strong>Cursos:</strong> {teacher.cursos.join(", ")}
                      </div>
                    </div>
                    
                    <div className="mt-4 pt-3 border-t border-gray-100">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2 text-xs text-gray-500">
                          <Mail className="w-3 h-3" />
                          <span className="truncate">{teacher.email}</span>
                        </div>
                        <div className="flex space-x-1">
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <MessageSquare className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <Phone className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Panel de estadísticas de profesores */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="academic-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Profesores Activos</p>
                <p className="text-2xl font-bold text-green-600">24</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <UserCheck className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="academic-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Horas Totales</p>
                <p className="text-2xl font-bold text-blue-600">432</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Calendar className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="academic-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Ratio Estudiante/Profesor</p>
                <p className="text-2xl font-bold text-orange-600">14.2</p>
              </div>
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-orange-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TeacherPanel;
