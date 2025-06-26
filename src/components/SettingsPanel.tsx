
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Settings, School, Users, BookOpen, Calendar, Save, Shield, Database } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { useState } from "react";

const SettingsPanel = () => {
  const [institutionName, setInstitutionName] = useState("Manuel F. Calvo y Pérez");
  const [institutionLocation, setInstitutionLocation] = useState("Pucusana");
  const [academicYear, setAcademicYear] = useState("2024");
  const [currentTrimester, setCurrentTrimester] = useState("2");

  const handleSaveSettings = () => {
    toast({
      title: "Configuración Guardada",
      description: "Los cambios han sido guardados exitosamente",
    });
  };

  const settingSections = [
    {
      title: "Información Institucional",
      icon: School,
      color: "bg-blue-500",
      settings: [
        { label: "Nombre de la Institución", value: institutionName, setter: setInstitutionName, type: "text" },
        { label: "Ubicación", value: institutionLocation, setter: setInstitutionLocation, type: "text" },
        { label: "Año Académico", value: academicYear, setter: setAcademicYear, type: "text" },
        { label: "Trimestre Actual", value: currentTrimester, setter: setCurrentTrimester, type: "select", options: ["1", "2", "3"] }
      ]
    },
    {
      title: "Configuración Académica", 
      icon: BookOpen,
      color: "bg-green-600",
      settings: [
        { label: "Calificación Mínima Aprobatoria", value: "5.0", type: "number" },
        { label: "Escala de Calificación", value: "1-10", type: "select", options: ["1-10", "1-20", "A-F"] },
        { label: "Días de Clase por Semana", value: "5", type: "number" },
        { label: "Duración de Período de Clase (min)", value: "45", type: "number" }
      ]
    },
    {
      title: "Gestión de Usuarios",
      icon: Users, 
      color: "bg-purple-500",
      settings: [
        { label: "Máximo de Intentos de Login", value: "3", type: "number" },
        { label: "Tiempo de Sesión (horas)", value: "8", type: "number" },
        { label: "Renovación Automática de Contraseñas", value: "90 días", type: "select", options: ["30 días", "60 días", "90 días", "Nunca"] },
        { label: "Verificación en Dos Pasos", value: "Activada", type: "select", options: ["Activada", "Desactivada"] }
      ]
    },
    {
      title: "Configuración del Sistema",
      icon: Settings,
      color: "bg-orange-500", 
      settings: [
        { label: "Zona Horaria", value: "GMT-5 (Lima)", type: "select", options: ["GMT-5 (Lima)", "GMT-4", "GMT-3"] },
        { label: "Idioma del Sistema", value: "Español", type: "select", options: ["Español", "English"] },
        { label: "Formato de Fecha", value: "DD/MM/YYYY", type: "select", options: ["DD/MM/YYYY", "MM/DD/YYYY", "YYYY-MM-DD"] },
        { label: "Copias de Seguridad Automáticas", value: "Diarias", type: "select", options: ["Diarias", "Semanales", "Mensuales"] }
      ]
    }
  ];

  return (
    <div className="space-y-6">
      <Card className="academic-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="w-5 h-5" />
            Configuración del Sistema
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 mb-6">
            Configure los parámetros principales de la plataforma de gestión académica.
          </p>
          
          <div className="space-y-8">
            {settingSections.map((section, index) => (
              <Card key={index} className="border border-gray-200">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 ${section.color} rounded-lg flex items-center justify-center`}>
                      <section.icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">{section.title}</h3>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {section.settings.map((setting, settingIndex) => (
                    <div key={settingIndex} className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                      <label className="text-sm font-medium text-gray-700">
                        {setting.label}
                      </label>
                      <div className="md:col-span-2">
                        {setting.type === "select" ? (
                          <select 
                            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                            value={setting.value}
                            onChange={(e) => setting.setter && setting.setter(e.target.value)}
                          >
                            {setting.options?.map((option) => (
                              <option key={option} value={option}>{option}</option>
                            ))}
                          </select>
                        ) : (
                          <Input
                            type={setting.type}
                            value={setting.value}
                            onChange={(e) => setting.setter && setting.setter(e.target.value)}
                            className="w-full"
                          />
                        )}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="flex justify-end mt-8">
            <Button className="bg-primary hover:bg-primary/90" onClick={handleSaveSettings}>
              <Save className="w-4 h-4 mr-2" />
              Guardar Configuración
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Estado del sistema */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="academic-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Estado del Sistema</p>
                <p className="text-lg font-bold text-green-600">Activo</p>
              </div>
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            </div>
          </CardContent>  
        </Card>

        <Card className="academic-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Base de Datos</p>
                <p className="text-lg font-bold text-blue-600">Conectada</p>
              </div>
              <Database className="w-6 h-6 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="academic-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Seguridad</p>
                <p className="text-lg font-bold text-green-600">Segura</p>
              </div>
              <Shield className="w-6 h-6 text-green-600" />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SettingsPanel;
