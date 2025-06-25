
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

const gradesData = [
  { subject: 'Matemáticas', average: 7.8, students: 28 },
  { subject: 'Lengua', average: 8.2, students: 28 },
  { subject: 'Ciencias', average: 7.5, students: 28 },
  { subject: 'Historia', average: 8.0, students: 28 },
  { subject: 'Inglés', average: 7.9, students: 28 },
  { subject: 'Ed. Física', average: 8.8, students: 28 },
];

const monthlyData = [
  { month: 'Sep', average: 7.2 },
  { month: 'Oct', average: 7.5 },
  { month: 'Nov', average: 7.8 },
  { month: 'Dic', average: 8.0 },
  { month: 'Ene', average: 7.9 },
  { month: 'Feb', average: 8.1 },
];

const GradesChart = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card className="academic-card">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Promedio por Materia</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={gradesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="subject" angle={-45} textAnchor="end" height={80} />
              <YAxis domain={[0, 10]} />
              <Tooltip formatter={(value) => [`${value}`, 'Promedio']} />
              <Bar dataKey="average" fill="hsl(217 91% 60%)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card className="academic-card">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Evolución Académica</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis domain={[6, 10]} />
              <Tooltip formatter={(value) => [`${value}`, 'Promedio General']} />
              <Line 
                type="monotone" 
                dataKey="average" 
                stroke="hsl(142 76% 36%)" 
                strokeWidth={3}
                dot={{ fill: 'hsl(142 76% 36%)', strokeWidth: 2, r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default GradesChart;
