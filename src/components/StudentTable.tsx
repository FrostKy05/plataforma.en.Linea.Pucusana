
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, Plus, Eye, Edit, Trash2 } from "lucide-react";

const studentsData = [
  {
    id: 1,
    name: "Ana García López",
    grade: "3° ESO",
    section: "A",
    average: 8.5,
    status: "Activo",
    attendance: "95%",
    parent: "María López"
  },
  {
    id: 2,
    name: "Carlos Martín Ruiz",
    grade: "2° ESO",
    section: "B",
    average: 7.2,
    status: "Activo",
    attendance: "88%",
    parent: "José Martín"
  },
  {
    id: 3,
    name: "Elena Fernández Soto",
    grade: "4° ESO",
    section: "A",
    average: 9.1,
    status: "Activo",
    attendance: "98%",
    parent: "Carmen Soto"
  },
  {
    id: 4,
    name: "David Morales Cruz",
    grade: "1° ESO",
    section: "C",
    average: 6.8,
    status: "Activo",
    attendance: "82%",
    parent: "Ana Cruz"
  },
  {
    id: 5,
    name: "Sofía Jiménez Vega",
    grade: "3° ESO",
    section: "B",
    average: 8.9,
    status: "Activo",
    attendance: "93%",
    parent: "Luis Jiménez"
  }
];

const StudentTable = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredStudents = studentsData.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.grade.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getAverageColor = (average: number) => {
    if (average >= 9) return "bg-green-100 text-green-800";
    if (average >= 7) return "bg-yellow-100 text-yellow-800";
    return "bg-red-100 text-red-800";
  };

  return (
    <Card className="academic-card">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-semibold">Gestión de Estudiantes</CardTitle>
          <Button className="bg-primary hover:bg-primary/90">
            <Plus className="w-4 h-4 mr-2" />
            Nuevo Estudiante
          </Button>
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="Buscar estudiantes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-medium text-gray-600">Estudiante</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Curso</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Promedio</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Asistencia</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Padre/Tutor</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Estado</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.map((student) => (
                <tr key={student.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                        <span className="text-primary font-medium text-sm">
                          {student.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                        </span>
                      </div>
                      <span className="font-medium text-gray-900">{student.name}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <span className="text-gray-600">{student.grade} - Sección {student.section}</span>
                  </td>
                  <td className="py-3 px-4">
                    <Badge className={getAverageColor(student.average)}>
                      {student.average}
                    </Badge>
                  </td>
                  <td className="py-3 px-4">
                    <span className="text-gray-600">{student.attendance}</span>
                  </td>
                  <td className="py-3 px-4">
                    <span className="text-gray-600">{student.parent}</span>
                  </td>
                  <td className="py-3 px-4">
                    <Badge variant="outline" className="border-green-200 text-green-700">
                      {student.status}
                    </Badge>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex space-x-2">
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
      </CardContent>
    </Card>
  );
};

export default StudentTable;
