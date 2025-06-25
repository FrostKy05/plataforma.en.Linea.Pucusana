
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useApp } from "@/contexts/AppContext";
import { useState } from 'react';
import { toast } from "@/hooks/use-toast";

const NewTeacherModal = () => {
  const { showNewTeacherModal, setShowNewTeacherModal } = useApp();
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    especialidad: '',
    horasSemanales: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Nuevo profesor:', formData);
    toast({
      title: "Profesor agregado",
      description: `${formData.nombre} ha sido agregado exitosamente.`,
    });
    setShowNewTeacherModal(false);
    setFormData({
      nombre: '',
      email: '',
      telefono: '',
      especialidad: '',
      horasSemanales: ''
    });
  };

  return (
    <Dialog open={showNewTeacherModal} onOpenChange={setShowNewTeacherModal}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Agregar Nuevo Profesor</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="nombre" className="text-right">Nombre</Label>
            <Input
              id="nombre"
              value={formData.nombre}
              onChange={(e) => setFormData({...formData, nombre: e.target.value})}
              className="col-span-3"
              required
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">Email</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="col-span-3"
              required
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="telefono" className="text-right">Teléfono</Label>
            <Input
              id="telefono"
              value={formData.telefono}
              onChange={(e) => setFormData({...formData, telefono: e.target.value})}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="especialidad" className="text-right">Especialidad</Label>
            <Select value={formData.especialidad} onValueChange={(value) => setFormData({...formData, especialidad: value})}>
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Seleccionar especialidad" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="matematicas">Matemáticas</SelectItem>
                <SelectItem value="lengua">Lengua y Literatura</SelectItem>
                <SelectItem value="ingles">Inglés</SelectItem>
                <SelectItem value="historia">Historia</SelectItem>
                <SelectItem value="ciencias">Ciencias Naturales</SelectItem>
                <SelectItem value="fisica">Educación Física</SelectItem>
                <SelectItem value="arte">Arte</SelectItem>
                <SelectItem value="musica">Música</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="horas" className="text-right">Horas/Sem</Label>
            <Input
              id="horas"
              type="number"
              value={formData.horasSemanales}
              onChange={(e) => setFormData({...formData, horasSemanales: e.target.value})}
              className="col-span-3"
              min="1"
              max="40"
            />
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => setShowNewTeacherModal(false)}>
              Cancelar
            </Button>
            <Button type="submit">Agregar Profesor</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default NewTeacherModal;
