
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useApp } from "@/contexts/AppContext";
import { useState } from 'react';
import { toast } from "@/hooks/use-toast";

const NewStudentModal = () => {
  const { showNewStudentModal, setShowNewStudentModal } = useApp();
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    curso: '',
    fechaNacimiento: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Nuevo estudiante:', formData);
    toast({
      title: "Estudiante agregado",
      description: `${formData.nombre} ha sido agregado exitosamente.`,
    });
    setShowNewStudentModal(false);
    setFormData({
      nombre: '',
      email: '',
      telefono: '',
      curso: '',
      fechaNacimiento: ''
    });
  };

  return (
    <Dialog open={showNewStudentModal} onOpenChange={setShowNewStudentModal}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Agregar Nuevo Estudiante</DialogTitle>
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
            <Label htmlFor="curso" className="text-right">Curso</Label>
            <Select value={formData.curso} onValueChange={(value) => setFormData({...formData, curso: value})}>
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Seleccionar curso" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1A">1° ESO A</SelectItem>
                <SelectItem value="1B">1° ESO B</SelectItem>
                <SelectItem value="2A">2° ESO A</SelectItem>
                <SelectItem value="2B">2° ESO B</SelectItem>
                <SelectItem value="3A">3° ESO A</SelectItem>
                <SelectItem value="3B">3° ESO B</SelectItem>
                <SelectItem value="4A">4° ESO A</SelectItem>
                <SelectItem value="4B">4° ESO B</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="fechaNacimiento" className="text-right">Fecha Nac.</Label>
            <Input
              id="fechaNacimiento"
              type="date"
              value={formData.fechaNacimiento}
              onChange={(e) => setFormData({...formData, fechaNacimiento: e.target.value})}
              className="col-span-3"
            />
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => setShowNewStudentModal(false)}>
              Cancelar
            </Button>
            <Button type="submit">Agregar Estudiante</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default NewStudentModal;
