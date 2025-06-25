
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Users } from "lucide-react";

const upcomingEvents = [
  {
    id: 1,
    title: "Examen de Matemáticas",
    date: "2024-01-15",
    time: "10:00",
    type: "examen",
    course: "3° ESO A"
  },
  {
    id: 2,
    title: "Reunión de Padres",
    date: "2024-01-18",
    time: "17:00",
    type: "reunion",
    course: "2° ESO"
  },
  {
    id: 3,
    title: "Entrega de Proyectos",
    date: "2024-01-20",
    time: "14:00",
    type: "entrega",
    course: "4° ESO B"
  },
  {
    id: 4,
    title: "Excursión Científica",
    date: "2024-01-25",
    time: "09:00",
    type: "evento",
    course: "1° ESO"
  }
];

const getEventColor = (type: string) => {
  switch (type) {
    case 'examen':
      return 'bg-red-100 text-red-800';
    case 'reunion':
      return 'bg-blue-100 text-blue-800';
    case 'entrega':
      return 'bg-yellow-100 text-yellow-800';
    case 'evento':
      return 'bg-green-100 text-green-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

const CalendarWidget = () => {
  return (
    <Card className="academic-card">
      <CardHeader>
        <CardTitle className="text-lg font-semibold flex items-center">
          <Calendar className="w-5 h-5 mr-2" />
          Próximos Eventos
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {upcomingEvents.map((event) => (
            <div key={event.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex-1">
                <h4 className="font-medium text-gray-900">{event.title}</h4>
                <div className="flex items-center space-x-4 mt-1 text-sm text-gray-600">
                  <span className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(event.date).toLocaleDateString('es-ES')}
                  </span>
                  <span className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {event.time}
                  </span>
                  <span className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    {event.course}
                  </span>
                </div>
              </div>
              <Badge className={getEventColor(event.type)}>
                {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default CalendarWidget;
