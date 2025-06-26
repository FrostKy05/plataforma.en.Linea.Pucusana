
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, Send, Users, Mail, Bell, Plus } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { useState } from "react";

const mockMessages = [
  {
    id: 1,
    from: "Dirección Académica",
    to: "Todos los profesores",
    subject: "Reunión pedagógica - Viernes 19/01",
    preview: "Se convoca a reunión pedagógica para revisar el plan curricular...",
    date: "15/01/2024",
    priority: "alta",
    read: false
  },
  {
    id: 2,
    from: "Prof. María Rodríguez", 
    to: "Padres 3° ESO A",
    subject: "Resultados evaluación de Matemáticas",
    preview: "Buenos días, les informo sobre los resultados de la evaluación...",
    date: "14/01/2024",
    priority: "media",
    read: true
  },
  {
    id: 3,
    from: "Secretaría",
    to: "Todos los usuarios",
    subject: "Actualización de horarios - Segundo trimestre",
    preview: "Se informa sobre los cambios en los horarios de clases...",
    date: "12/01/2024", 
    priority: "baja",
    read: true
  }
];

const CommunicationPanel = () => {
  const [selectedRecipient, setSelectedRecipient] = useState("");
  const [messageSubject, setMessageSubject] = useState("");
  const [messageContent, setMessageContent] = useState("");

  const handleSendMessage = () => {
    if (!selectedRecipient || !messageSubject || !messageContent) {
      toast({
        title: "Error",
        description: "Por favor complete todos los campos",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Mensaje Enviado",
      description: `Mensaje enviado a ${selectedRecipient}`,
    });
    
    setSelectedRecipient("");
    setMessageSubject("");
    setMessageContent("");
  };

  const handleMarkAsRead = (messageId: number) => {
    toast({
      title: "Mensaje marcado como leído",
      description: "El mensaje ha sido actualizado",
    });
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'alta': return 'bg-red-500';
      case 'media': return 'bg-yellow-500';
      case 'baja': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="space-y-6">
      {/* Nuevo mensaje */}
      <Card className="academic-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Send className="w-5 h-5" />
            Nuevo Mensaje
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Destinatario</label>
            <select 
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
              value={selectedRecipient}
              onChange={(e) => setSelectedRecipient(e.target.value)}
            >
              <option value="">Seleccionar destinatario...</option>
              <option value="Todos los profesores">Todos los profesores</option>
              <option value="Padres 3° ESO A">Padres 3° ESO A</option>
              <option value="Padres 4° ESO B">Padres 4° ESO B</option>
              <option value="Estudiantes 3° ESO A">Estudiantes 3° ESO A</option>
              <option value="Personal administrativo">Personal administrativo</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Asunto</label>
            <Input
              placeholder="Asunto del mensaje..."
              value={messageSubject}
              onChange={(e) => setMessageSubject(e.target.value)}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Mensaje</label>
            <textarea 
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary h-32 resize-none"
              placeholder="Escriba su mensaje aquí..."
              value={messageContent}
              onChange={(e) => setMessageContent(e.target.value)}
            />
          </div>
          
          <Button className="bg-primary hover:bg-primary/90" onClick={handleSendMessage}>
            <Send className="w-4 h-4 mr-2" />
            Enviar Mensaje
          </Button>
        </CardContent>
      </Card>

      {/* Mensajes recibidos */}
      <Card className="academic-card">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="w-5 h-5" />
              Bandeja de Entrada
            </CardTitle>
            <Badge variant="secondary" className="bg-red-100 text-red-700">
              2 sin leer
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {mockMessages.map((message) => (
              <div 
                key={message.id} 
                className={`border rounded-lg p-4 hover:shadow-md transition-all cursor-pointer ${
                  !message.read ? 'bg-blue-50 border-blue-200' : 'bg-white'
                }`}
                onClick={() => handleMarkAsRead(message.id)}
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <div className={`w-3 h-3 rounded-full ${getPriorityColor(message.priority)}`}></div>
                    <span className="font-medium text-gray-900">{message.from}</span>
                    {!message.read && (
                      <Badge variant="secondary" className="text-xs bg-blue-100 text-blue-700">
                        Nuevo
                      </Badge>
                    )}
                  </div>
                  <span className="text-sm text-gray-500">{message.date}</span>
                </div>
                
                <h4 className="font-semibold text-gray-900 mb-1">{message.subject}</h4>
                <p className="text-sm text-gray-600 mb-2">{message.preview}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-xs text-gray-500">
                    <Users className="w-3 h-3 mr-1" />
                    Para: {message.to}
                  </div>
                  <Button variant="ghost" size="sm">
                    <Mail className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Estadísticas de comunicación */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="academic-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Mensajes Enviados</p>
                <p className="text-2xl font-bold text-blue-600">24</p>
              </div>
              <Send className="w-8 h-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="academic-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Mensajes Recibidos</p>
                <p className="text-2xl font-bold text-green-600">18</p>
              </div>
              <MessageSquare className="w-8 h-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="academic-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Notificaciones</p>
                <p className="text-2xl font-bold text-red-600">5</p>
              </div>
              <Bell className="w-8 h-8 text-red-600" />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CommunicationPanel;
