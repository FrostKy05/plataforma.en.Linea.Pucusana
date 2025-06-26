
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BarChart3, Download, FileText, TrendingUp, Users, Award } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const reportTypes = [
  {
    id: 1,
    title: "Reporte de Calificaciones",
    description: "Análisis detallado del rendimiento académico por curso y materia",
    icon: Award,
    color: "bg-blue-500",
    type: "grades"
  },
  {
    id: 2,
    title: "Reporte de Asistencia",
    description: "Estadísticas de asistencia por estudiante y periodo",
    icon: Users,
    color: "bg-green-500", 
    type: "attendance"
  },
  {
    id: 3,
    title: "Reporte de Profesores",
    description: "Desempeño y carga académica del personal docente",
    icon: TrendingUp,
    color: "bg-purple-500",
    type: "teachers"
  },
  {
    id: 4,
    title: "Reporte Administrativo",
    description: "Estadísticas generales y métricas del centro educativo",
    icon: BarChart3,
    color: "bg-orange-500",
    type: "admin"
  }
];

const ReportsPanel = () => {
  const handleGenerateReport = (report: any) => {
    toast({
      title: "Generando Reporte",
      description: `Creando ${report.title}...`,
    });
    console.log('Generar reporte:', report.type);
  };

  const handleDownloadReport = (report: any) => {
    toast({
      title: "Descargando Reporte",
      description: `Descargando ${report.title} en PDF...`,
    });
    console.log('Descargar reporte:', report.type);
  };

  return (
    <div className="space-y-6">
      <Card className="academic-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="w-5 h-5" />
            Centro de Reportes
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reportTypes.map((report) => (
              <div key={report.id} className="border rounded-lg p-6 hover:shadow-md transition-all">
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 ${report.color} rounded-lg flex items-center justify-center`}>
                    <report.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-2">{report.title}</h3>
                    <p className="text-sm text-gray-600 mb-4">{report.description}</p>
                    
                    <div className="flex space-x-2">
                      <Button 
                        size="sm" 
                        className="bg-primary hover:bg-primary/90"
                        onClick={() => handleGenerateReport(report)}
                      >
                        <FileText className="w-4 h-4 mr-2" />
                        Generar
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => handleDownloadReport(report)}
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Descargar
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Reportes recientes */}
      <Card className="academic-card">
        <CardHeader>
          <CardTitle>Reportes Recientes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { name: "Reporte Mensual - Enero 2024", date: "15/01/2024", status: "Completado" },
              { name: "Análisis de Asistencia - Semana 2", date: "12/01/2024", status: "Completado" },
              { name: "Calificaciones 1er Trimestre", date: "08/01/2024", status: "En proceso" }
            ].map((recent, index) => (
              <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">{recent.name}</p>
                  <p className="text-sm text-gray-500">{recent.date}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant={recent.status === "Completado" ? "default" : "secondary"}>
                    {recent.status}
                  </Badge>
                  <Button variant="ghost" size="sm">
                    <Download className="w-4 h-4" />
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

export default ReportsPanel;
