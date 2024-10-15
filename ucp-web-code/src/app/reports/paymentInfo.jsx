import { Button } from "../../components/ui/Button/button"; // Importing the Button component
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../components/ui/paymentInfoTable"; 
import { Download } from "lucide-react";
import WebHeader from "../../components/ui/WebHeader/WebHeader"; // Importing the WebHeader component
import "./paymentInfo.css"; // Importing the CSS stylesheet

export default function PaymentInfo() {
  const studentInfo = {
    trimester: "AGOSTO - OCTUBRE 2024",
    name: "HAMILTON ROSARIO, MARIA FERNANDA",
    career: "INGENIERÍA DE SOFTWARE (IDS)",
    tariffType: "Dominicano",
  };

  const courses = [
    // Your courses array...
  ];

  const charges = [
    // Your charges array...
  ];

  const payments = [
    // Your payments array...
  ];

  return (
    <div className="payment-info">
      <WebHeader /> {/* Using the WebHeader component */}
      
      <div className="payment-content">
        <header className="header-section">
          <div className="logo-title">
            <img src="/placeholder.svg?height=50&width=50" alt="UCP Logo" className="logo" />
            <h1 className="title">Dashboard Estudiantil</h1>
          </div>
          <div className="student-info">
            <span>{studentInfo.name}</span>
            <button className="dropdown-btn">
              <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </header>

        <nav className="nav-bar">
          <ul>
            {["Inicio", "Procesos", "Reportes", "Asignaturas"].map((item) => (
              <li key={item} className="nav-item">{item}</li>
            ))}
          </ul>
        </nav>

        <div className="payment-details">
          <div className="details-header">
            <h2>Hoja de Pago</h2>
            <div className="actions">
              <Button variant="outline">Generar Reporte</Button>
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
