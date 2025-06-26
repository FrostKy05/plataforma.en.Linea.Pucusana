
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ClipboardList, Users, Calendar, CheckCircle, XCircle, Clock } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const mockAttendance = [
  {
    fecha: "2024-01-15",
    curso: "3° ESO A",
    materia: "Matemáticas",
    presente: 26,
    ausente: 2,
    tardanza: 1,
    total: 29
  },
  {
    fecha: "2024-01-15", 
    curso: "4° ESO B",
    materia: "Lengua",
    presente: 24,
    ausente: 3,
    tardanza: 0,
    total: 27
  },
  {
    fecha: "2024-01-14",
    curso: "2° ESO C", 
    materia: "Ciencias",
    presente: 25,
    ausente: 1,
    tardanza: 2,
    total: 28
  }
];

const AttendancePanel = () => {
  const handleTakeAttendance = () => {
    toast({
      title: "Tomar Asistencia",
      description: "Abriendo registro de asistencia...",
    });
  };

  const getAttendancePercentage = (presente: number, total: number) => {
    return Math.round((presente / total) * 100);
  };

  return (
    <div className="space-y-6">
      <Card className="academic-card">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <ClipboardList className="w-5 h-5" />
              Control de Asistencia
            </CardTitle>
            <Button className="bg-primary hover:bg-primary/90" onClick={handleTakeAttendance}>
              <CheckCircle className="w-4 h-4 mr-2" />
              Tomar Asistencia
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-3 font-semibold text-gray-700">Fecha</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Curso</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Materia</th>
                  <th className="text-center p-3 font-semibold text-gray-700">Presente</th>
                  <th className="text-center p-3 font-semibold text-gray-700">Ausente</th>
                  <th className="text-center p-3 font-semibold text-gray-700">Tardanza</th>
                  <th className="text-center p-3 font-semibold text-gray-700">% Asistencia</th>
                </tr>
              </thead>
              <tbody>
                {mockAttendance.map((record, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50 transition-colors">
                    <td className="p-3">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2 text-gray-500" />
                        {record.fecha}
                      </div>
                    </td>
                    <td className="p-3">
                      <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                        {record.curso}
                      </Badge>
                    </td>
                    <td className="p-3 text-gray-700">{record.materia}</td>
                    <td className="p-3 text-center">
                      <span className="flex items-center justify-center text-green-600">
                        <CheckCircle className="w-4 h-4 mr-1" />
                        {record.presente}
                      </span>
                    </td>
                    <td className="p-3 text-center">
                      <span className="flex items-center justify-center text-red-600">
                        <XCircle className="w-4 h-4 mr-1" />
                        {record.ausente}
                      </span>
                    </td>
                    <td className="p-3 text-center">
                      <span className="text-orange-600 font-medium">{record.tardanza}</span>
                    </td>
                    <td className="p-3 text-center">
                      <Badge 
                        variant={getAttendancePercentage(record.presente, record.total) >= 90 ? "default" : "secondary"}
                        className={getAttendancePercentage(record.presente, record.total) >= 90 ? "bg-green-500 hover:bg-green-600" : ""}
                      >
                        {getAttendancePercentage(record.presente, record.total)}%
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Estadísticas rápidas */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="academic-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Asistencia Promedio</p>
                <p className="text-2xl font-bold text-green-600">92.3%</p>
              </div>
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="academic-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Ausencias Hoy</p>
                <p className="text-2xl font-bold text-red-600">6</p>
              </div>
              <XCircle className="w-8 h-8 text-red-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="academic-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Tardanzas</p>
                <p className="text-2xl font-bold text-orange-600">3</p>
              </div>
              <Clock className="w-8 h-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="academic-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Clases Registradas</p>
                <p className="text-2xl font-bold text-blue-600">15</p>
              </div>
              <ClipboardList className="w-8 h-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AttendancePanel;
