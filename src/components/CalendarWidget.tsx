
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Users, BookOpen, Plus } from "lucide-react";
import { useState } from "react";

const mockEvents = [
  {
    id: 1,
    title: "Examen de Matemáticas",
    date: "2024-01-25",
    time: "10:00",
    type: "exam",
    course: "3° ESO A",
    description: "Evaluación de álgebra y geometría"
  },
  {
    id: 2,
    title: "Reunión de Padres",
    date: "2024-01-26",
    time: "18:00",
    type: "meeting",
    course: "Todos los cursos",
    description: "Evaluación del primer trimestre"
  },
  {
    id: 3,
    title: "Excursión Museo",
    date: "2024-01-28",
    time: "09:00",
    type: "activity",
    course: "2° ESO B",
    description: "Visita al Museo de Ciencias Naturales"
  },
  {
    id: 4,
    title: "Entrega de Proyectos",
    date: "2024-01-30",
    time: "12:00",
    type: "deadline",
    course: "4° ESO",
    description: "Proyecto final de Historia"
  },
  {
    id: 5,
    title: "Consejo Escolar",
    date: "2024-02-02",
    time: "16:00",
    type: "meeting",
    course: "Profesorado",
    description: "Reunión mensual del consejo"
  }
];

const CalendarWidget = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  
  const getEventTypeColor = (type: string) => {
    const colors = {
      exam: "bg-red-100 text-red-800 border-red-200",
      meeting: "bg-blue-100 text-blue-800 border-blue-200",
      activity: "bg-green-100 text-green-800 border-green-200",
      deadline: "bg-orange-100 text-orange-800 border-orange-200"
    };
    return colors[type as keyof typeof colors] || "bg-gray-100 text-gray-800 border-gray-200";
  };

  const getEventIcon = (type: string) => {
    const icons = {
      exam: BookOpen,
      meeting: Users,
      activity: Calendar,
      deadline: Clock
    };
    const IconComponent = icons[type as keyof typeof icons] || Calendar;
    return <IconComponent className="w-4 h-4" />;
  };

  const getEventTypeLabel = (type: string) => {
    const labels = {
      exam: "Examen",
      meeting: "Reunión",
      activity: "Actividad",
      deadline: "Entrega"
    };
    return labels[type as keyof typeof labels] || "Evento";
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', {
      weekday: 'short',
      day: 'numeric',
      month: 'short'
    });
  };

  return (
    <Card className="academic-card">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            Calendario Académico
          </CardTitle>
          <Button size="sm" className="bg-primary hover:bg-primary/90">
            <Plus className="w-4 h-4 mr-1" />
            Evento
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Vista compacta del calendario */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">
                {selectedDate.getDate()}
              </div>
              <div className="text-sm text-gray-600">
                {selectedDate.toLocaleDateString('es-ES', { month: 'long', year: 'numeric' })}
              </div>
            </div>
          </div>

          {/* Lista de eventos próximos */}
          <div className="space-y-3">
            <h4 className="font-semibold text-gray-700 flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Próximos Eventos
            </h4>
            {mockEvents.slice(0, 4).map((event) => (
              <div key={event.id} className="border rounded-lg p-3 hover:bg-gray-50 transition-colors">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge className={`text-xs ${getEventTypeColor(event.type)}`}>
                        {getEventIcon(event.type)}
                        <span className="ml-1">{getEventTypeLabel(event.type)}</span>
                      </Badge>
                      <span className="text-xs text-gray-500">{event.course}</span>
                    </div>
                    <h5 className="font-medium text-gray-800 text-sm">{event.title}</h5>
                    <p className="text-xs text-gray-600 mt-1">{event.description}</p>
                  </div>
                  <div className="text-right text-xs text-gray-500 ml-3">
                    <div>{formatDate(event.date)}</div>
                    <div className="font-medium">{event.time}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Resumen de la semana */}
          <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-700 mb-2">Esta Semana</h4>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="text-center">
                <div className="text-lg font-bold text-blue-600">3</div>
                <div className="text-gray-600">Exámenes</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-green-600">2</div>
                <div className="text-gray-600">Reuniones</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-purple-600">1</div>
                <div className="text-gray-600">Actividad</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-orange-600">2</div>
                <div className="text-gray-600">Entregas</div>
              </div>
            </div>
          </div>

          <Button variant="outline" className="w-full" size="sm">
            Ver Calendario Completo
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CalendarWidget;
