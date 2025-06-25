
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from "recharts";
import { TrendingUp, BarChart3, PieChartIcon } from "lucide-react";

const gradesData = [
  { materia: "Matemáticas", promedio: 7.8, aprobados: 85, suspensos: 15 },
  { materia: "Lengua", promedio: 8.2, aprobados: 92, suspensos: 8 },
  { materia: "Inglés", promedio: 7.5, aprobados: 78, suspensos: 22 },
  { materia: "Historia", promedio: 8.0, aprobados: 88, suspensos: 12 },
  { materia: "Ciencias", promedio: 7.3, aprobados: 75, suspensos: 25 },
  { materia: "Ed. Física", promedio: 8.8, aprobados: 98, suspensos: 2 },
];

const trendData = [
  { mes: "Sep", promedio: 7.2 },
  { mes: "Oct", promedio: 7.5 },
  { mes: "Nov", promedio: 7.8 },
  { mes: "Dic", promedio: 8.0 },
  { mes: "Ene", promedio: 8.2 },
];

const distributionData = [
  { name: "Sobresaliente (9-10)", value: 15, color: "#22c55e" },
  { name: "Notable (7-8.9)", value: 45, color: "#3b82f6" },
  { name: "Bien (6-6.9)", value: 25, color: "#f59e0b" },
  { name: "Suficiente (5-5.9)", value: 10, color: "#ef4444" },
  { name: "Insuficiente (<5)", value: 5, color: "#6b7280" },
];

const GradesChart = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
      {/* Promedio por Materia */}
      <Card className="academic-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="w-5 h-5" />
            Rendimiento por Materia
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={gradesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="materia" angle={-45} textAnchor="end" height={80} />
              <YAxis domain={[0, 10]} />
              <Tooltip 
                formatter={(value: any, name: string) => [
                  name === 'promedio' ? `${value}` : `${value}%`,
                  name === 'promedio' ? 'Promedio' : name === 'aprobados' ? 'Aprobados' : 'Suspensos'
                ]}
              />
              <Bar dataKey="promedio" fill="#3b82f6" name="promedio" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Evolución Temporal */}
      <Card className="academic-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5" />
            Evolución del Rendimiento
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={trendData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="mes" />
              <YAxis domain={[6, 10]} />
              <Tooltip formatter={(value: any) => [`${value}`, 'Promedio General']} />
              <Line 
                type="monotone" 
                dataKey="promedio" 
                stroke="#22c55e" 
                strokeWidth={3}
                dot={{ fill: '#22c55e', strokeWidth: 2, r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
          <div className="mt-4 p-3 bg-green-50 rounded-lg">
            <p className="text-sm text-green-700">
              <span className="font-semibold">Tendencia positiva:</span> El rendimiento académico ha mejorado un 14% desde septiembre.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Distribución de Calificaciones */}
      <Card className="academic-card lg:col-span-2">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <PieChartIcon className="w-5 h-5" />
            Distribución de Calificaciones
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={distributionData}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {distributionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value: any) => [`${value}%`, 'Porcentaje']} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-700 mb-4">Distribución Detallada</h4>
              {distributionData.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div 
                      className="w-4 h-4 rounded-full" 
                      style={{ backgroundColor: item.color }}
                    ></div>
                    <span className="text-sm font-medium">{item.name}</span>
                  </div>
                  <span className="font-semibold text-gray-700">{item.value}%</span>
                </div>
              ))}
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <h5 className="font-semibold text-blue-800 mb-2">Resumen Académico</h5>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• 85% de estudiantes aprueban todas las materias</li>
                  <li>• 60% obtienen calificaciones de Notable o superior</li>
                  <li>• Matemáticas y Ciencias requieren refuerzo adicional</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default GradesChart;
