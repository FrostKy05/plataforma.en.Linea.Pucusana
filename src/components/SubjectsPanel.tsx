
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Users, Clock, Plus, Edit, Trash2 } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const mockSubjects = [
  {
    id: 1,
    nombre: "Matemáticas",
    codigo: "MAT-001",
    profesor: "Prof. María Rodríguez",
    curso: "3° ESO",
    horasSemanales: 4,
    estudiantes: 28,
    descripcion: "Álgebra, geometría y estadística básica"
  },
  {
    id: 2,
    nombre: "Lengua y Literatura",
    codigo: "LEN-001", 
    profesor: "Prof. Carlos Vega",
    curso: "3° ESO",
    horasSemanales: 5,
    estudiantes: 28,
    descripcion: "Gramática, literatura española y redacción"
  },
  {
    id: 3,
    nombre: "Ciencias Naturales",
    codigo: "CIE-001",
    profesor: "Prof. Ana Jiménez", 
    curso: "3° ESO",
    horasSemanales: 3,
    estudiantes: 28,
    descripcion: "Biología, física y química básica"
  },
  {
    id: 4,
    nombre: "Historia",
    codigo: "HIS-001",
    profesor: "Prof. David López",
    curso: "3° ESO", 
    horasSemanales: 3,
    estudiantes: 28,
    descripcion: "Historia contemporánea y geografía"
  }
];

const SubjectsPanel = () => {
  const handleEdit = (subject: any) => {
    toast({
      title: "Editar Materia",
      description: `Editando ${subject.nombre}`,
    });
  };

  const handleDelete = (subject: any) => {
    toast({
      title: "Eliminar Materia",
      description: `${subject.nombre} ha sido eliminada`,
      variant: "destructive",
    });
  };

  return (
    <div className="space-y-6">
      <Card className="academic-card">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              Gestión de Materias
            </CardTitle>
            <Button className="bg-primary hover:bg-primary/90">
              <Plus className="w-4 h-4 mr-2" />
              Nueva Materia
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mockSubjects.map((subject) => (
              <div key={subject.id} className="border rounded-lg p-4 hover:shadow-md transition-all">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-semibold text-gray-900">{subject.nombre}</h3>
                    <p className="text-sm text-gray-500">{subject.codigo}</p>
                  </div>
                  <Badge variant="outline">{subject.curso}</Badge>
                </div>
                
                <p className="text-sm text-gray-600 mb-4">{subject.descripcion}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="w-4 h-4 mr-2" />
                    <span>{subject.estudiantes} estudiantes</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{subject.horasSemanales} horas/semana</span>
                  </div>
                  <div className="text-sm text-gray-600">
                    <strong>Profesor:</strong> {subject.profesor}
                  </div>
                </div>
                
                <div className="flex justify-end space-x-2">
                  <Button variant="ghost" size="sm" onClick={() => handleEdit(subject)}>
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="text-red-600 hover:text-red-700"
                    onClick={() => handleDelete(subject)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SubjectsPanel;
