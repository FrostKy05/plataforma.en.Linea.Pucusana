
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, Users, MessageSquare, Award } from "lucide-react";

const teachersData = [
  {
    id: 1,
    name: "Prof. María González",
    subject: "Matemáticas",
    courses: ["1° ESO A", "2° ESO B"],
    students: 56,
    status: "Activo"
  },
  {
    id: 2,
    name: "Prof. Carlos Rodríguez",
    subject: "Lengua Castellana",
    courses: ["3° ESO A", "4° ESO A"],
    students: 48,
    status: "Activo"
  },
  {
    id: 3,
    name: "Prof. Ana Martínez",
    subject: "Ciencias Naturales",
    courses: ["1° ESO B", "2° ESO A"],
    students: 52,
    status: "Activo"
  },
  {
    id: 4,
    name: "Prof. David López",
    subject: "Historia",
    courses: ["3° ESO B", "4° ESO B"],
    students: 44,
    status: "Activo"
  }
];

const TeacherPanel = () => {
  return (
    <Card className="academic-card">
      <CardHeader>
        <CardTitle className="text-lg font-semibold flex items-center">
          <Users className="w-5 h-5 mr-2" />
          Profesorado
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {teachersData.map((teacher) => (
            <div key={teacher.id} className="p-4 border border-gray-200 rounded-lg hover:shadow-sm transition-shadow">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center mr-3">
                    <span className="text-accent font-medium text-sm">
                      {teacher.name.split(' ').slice(1, 2)[0]?.split(' ')[0]?.charAt(0) || 'P'}
                      {teacher.name.split(' ').slice(2, 3)[0]?.charAt(0) || 'T'}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">{teacher.name}</h4>
                    <p className="text-sm text-gray-600">{teacher.subject}</p>
                  </div>
                </div>
                <Badge variant="outline" className="border-green-200 text-green-700">
                  {teacher.status}
                </Badge>
              </div>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-gray-600">
                  <BookOpen className="w-4 h-4 mr-2" />
                  <span>Cursos: {teacher.courses.join(', ')}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Users className="w-4 h-4 mr-2" />
                  <span>{teacher.students} estudiantes</span>
                </div>
              </div>
              
              <div className="flex space-x-2">
                <Button variant="outline" size="sm" className="flex-1">
                  <MessageSquare className="w-4 h-4 mr-1" />
                  Contactar
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  <Award className="w-4 h-4 mr-1" />
                  Ver Clases
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TeacherPanel;
