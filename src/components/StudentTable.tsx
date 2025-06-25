
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Eye, Edit, Trash2, Plus } from "lucide-react";
import { useState } from "react";

const mockStudents = [
  {
    id: 1,
    nombre: "Ana García López",
    curso: "3° ESO A",
    promedio: 8.5,
    asistencia: 95,
    estado: "Activo",
    email: "ana.garcia@estudiante.edu",
    telefono: "612-345-678"
  },
  {
    id: 2,
    nombre: "Carlos Martín Ruiz",
    curso: "4° ESO B",
    promedio: 7.2,
    asistencia: 88,
    estado: "Activo",
    email: "carlos.martin@estudiante.edu",
    telefono: "623-456-789"
  },
  {
    id: 3,
    nombre: "Elena Fernández",
    curso: "2° ESO C",
    promedio: 9.1,
    asistencia: 98,
    estado: "Activo",
    email: "elena.fernandez@estudiante.edu",
    telefono: "634-567-890"
  },
  {
    id: 4,
    nombre: "David Sánchez",
    curso: "1° ESO A",
    promedio: 6.8,
    asistencia: 82,
    estado: "Seguimiento",
    email: "david.sanchez@estudiante.edu",
    telefono: "645-678-901"
  },
  {
    id: 5,
    nombre: "María González",
    curso: "4° ESO A",
    promedio: 8.9,
    asistencia: 96,
    estado: "Activo",
    email: "maria.gonzalez@estudiante.edu",
    telefono: "656-789-012"
  }
];

const StudentTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredStudents = mockStudents.filter(student =>
    student.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.curso.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getEstadoBadge = (estado: string) => {
    const variants: { [key: string]: "default" | "secondary" | "destructive" | "outline" } = {
      "Activo": "default",
      "Seguimiento": "secondary",
      "Inactivo": "destructive"
    };
    return variants[estado] || "outline";
  };

  const getPromedioColor = (promedio: number) => {
    if (promedio >= 9) return "text-green-600 font-semibold";
    if (promedio >= 7) return "text-blue-600 font-semibold";
    if (promedio >= 5) return "text-orange-600 font-semibold";
    return "text-red-600 font-semibold";
  };

  return (
    <Card className="academic-card">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Eye className="w-5 h-5" />
            Gestión de Estudiantes
          </CardTitle>
          <Button className="bg-primary hover:bg-primary/90">
            <Plus className="w-4 h-4 mr-2" />
            Nuevo Estudiante
          </Button>
        </div>
        <div className="flex items-center space-x-2">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Buscar estudiantes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-8"
            />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left p-3 font-semibold text-gray-700">Estudiante</th>
                <th className="text-left p-3 font-semibold text-gray-700">Curso</th>
                <th className="text-center p-3 font-semibold text-gray-700">Promedio</th>
                <th className="text-center p-3 font-semibold text-gray-700">Asistencia</th>
                <th className="text-center p-3 font-semibold text-gray-700">Estado</th>
                <th className="text-center p-3 font-semibold text-gray-700">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.map((student) => (
                <tr key={student.id} className="border-b hover:bg-gray-50 transition-colors">
                  <td className="p-3">
                    <div>
                      <div className="font-medium text-gray-900">{student.nombre}</div>
                      <div className="text-sm text-gray-500">{student.email}</div>
                    </div>
                  </td>
                  <td className="p-3">
                    <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                      {student.curso}
                    </Badge>
                  </td>
                  <td className="p-3 text-center">
                    <span className={getPromedioColor(student.promedio)}>
                      {student.promedio}
                    </span>
                  </td>
                  <td className="p-3 text-center">
                    <div className="flex items-center justify-center">
                      <div className="w-12 h-2 bg-gray-200 rounded-full mr-2">
                        <div 
                          className="h-2 bg-green-500 rounded-full" 
                          style={{ width: `${student.asistencia}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium">{student.asistencia}%</span>
                    </div>
                  </td>
                  <td className="p-3 text-center">
                    <Badge variant={getEstadoBadge(student.estado)}>
                      {student.estado}
                    </Badge>
                  </td>
                  <td className="p-3">
                    <div className="flex justify-center space-x-2">
                      <Button variant="ghost" size="sm">
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {filteredStudents.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            No se encontraron estudiantes con los criterios de búsqueda.
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default StudentTable;
