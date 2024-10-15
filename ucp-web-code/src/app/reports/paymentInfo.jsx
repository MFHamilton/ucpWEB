import { Button } from "../../components/ui/Button/button"; // Importing the Button component
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../components/ui/paymentInfoTable"; 
import { Download } from "lucide-react";
import WebHeader from "../../components/ui/WebHeader/WebHeader"; // Importing the WebHeader component
import "./paymentInfo.css"; // Importing the CSS stylesheet

// PARA ESTA PANTALLA HAY QUE TOMAR LA INFORMACION DE LA BASE DE DATOS 
// Y QUE APAREZCA DIVIDIDO EN 3 PAGO
// MATRICULA DEBE APARECER ANTES DE TODAS LAS MATERIAS
// HACER QUE EL BOTON DE GENERAR REPORTE, GENERE EL REPORTE AL DAR CLICK
// NO ES NECESARIO QUE  EL BOTON DESCARGAR FUNCIONE

export default function PaymentInfo() {
  const studentInfo = {
    trimester: "AGOSTO - OCTUBRE 2024",
    name: "HAMILTON ROSARIO, MARIA FERNANDA",
    career: "INGENIERÍA DE SOFTWARE (IDS)",
    tariffType: "Dominicano",
  };

  const courses = [
    { code: "CS101", name: "Introducción a la Programación", schedule: "Lunes 10:00 - 12:00", credits: 3, date: "01/09/2024" },
    { code: "CS102", name: "Estructuras de Datos", schedule: "Miércoles 10:00 - 12:00", credits: 3, date: "01/09/2024" },
  ];

  const charges = [
    { concept: "Matrícula", date: "01/09/2024", amount: 5000 },
    { concept: "Cuota Mensual", date: "01/10/2024", amount: 2000 },
  ];

  const payments = [
    { installment: "Pago 1", amount: 5000, dueDate: "01/09/2024" },
    { installment: "Pago 2", amount: 2000, dueDate: "01/10/2024" },
  ];

  return (
    <div className="payment-info">
      <WebHeader />
      <div className="payment-content">
        <div className="payment-details">
          <div className="details-header">
            <h2>Hoja de Pago</h2>
            <div className="actions">
              <Button type="submit" variant="outline">Generar Reporte</Button>
              <Button variant="outline">
                <Download className="icon" /> Descargar
              </Button>
            </div>
          </div>

          <div className="student-data">
            <div>
              <p><strong>Trimestre:</strong> {studentInfo.trimester}</p>
              <p><strong>Nombre:</strong> {studentInfo.name}</p>
            </div>
            <div>
              <p><strong>Carrera:</strong> {studentInfo.career}</p>
              <p><strong>Tipo Tarifa:</strong> {studentInfo.tariffType}</p>
            </div>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Concepto</TableHead>
                <TableHead>(Aula) Horarios</TableHead>
                <TableHead>Cr</TableHead>
                <TableHead>Fecha</TableHead>
                <TableHead>Deuda Corriente</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {courses.map((course) => (
                <TableRow key={course.code}>
                  <TableCell>{course.code} {course.name}</TableCell>
                  <TableCell>{course.schedule}</TableCell>
                  <TableCell>{course.credits}</TableCell>
                  <TableCell>{course.date}</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              ))}
              {charges.map((charge) => (
                <TableRow key={charge.concept}>
                  <TableCell>{charge.concept}</TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell>{charge.date}</TableCell>
                  <TableCell>{charge.amount.toLocaleString('es-DO', { style: 'currency', currency: 'DOP' })}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <div className="balance-summary">
            <p>Balance Actual: {charges.reduce((sum, charge) => sum + charge.amount, 0).toLocaleString('es-DO', { style: 'currency', currency: 'DOP' })}</p>
          </div>

          <div className="payments-grid">
            {payments.map((payment) => (
              <div key={payment.installment} className="payment-card">
                <h3>{payment.installment}</h3>
                <p>{payment.amount.toLocaleString('es-DO', { style: 'currency', currency: 'DOP' })}</p>
                <p className="due-date">Fecha sin recargo: {payment.dueDate}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
