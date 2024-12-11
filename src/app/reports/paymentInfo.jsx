import React, { useState, useEffect } from 'react';
import { Button } from "../../components/ui/Button/button"; // Importing the Button component
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../components/ui/paymentInfoTable"; 
import { Download } from "lucide-react";
import WebHeader from "../../components/ui/WebHeader/WebHeader"; // Importing the WebHeader component
import "./paymentInfo.css"; // Importing the CSS stylesheet

export default function PaymentInfo() {
  const [studentInfo, setStudentInfo] = useState(null);
  const [courses, setCourses] = useState([]);
  const [charges, setCharges] = useState([]);
  const [payments, setPayments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Function to fetch payment and student data from the backend
  const fetchPaymentInfo = async () => {
    try {
      const studentResponse = await fetch('https://your-backend-endpoint/api/student/490867'); // Reemplaza con tu URL real y ID de estudiante
      const studentData = await studentResponse.json();

      const coursesResponse = await fetch('https://your-backend-endpoint/api/student/490867/courses'); // Reemplaza con el endpoint de cursos
      const coursesData = await coursesResponse.json();

      const chargesResponse = await fetch('https://your-backend-endpoint/api/student/490867/charges'); // Reemplaza con el endpoint de cargos
      const chargesData = await chargesResponse.json();

      const paymentsResponse = await fetch('https://your-backend-endpoint/api/student/490867/payments'); // Reemplaza con el endpoint de pagos
      const paymentsData = await paymentsResponse.json();

      setStudentInfo(studentData);
      setCourses(coursesData);
      setCharges(chargesData);
      setPayments(paymentsData);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching payment info:", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPaymentInfo();
  }, []);

  const handleGenerateReport = () => {
    // Aquí agregarías el código para generar el reporte
    alert('Generando reporte...');
  };

  if (isLoading) {
    return <p>Cargando datos...</p>;
  }

  return (
    <div className="payment-info">
      <WebHeader />
      <div className="payment-content">
        <div className="payment-details">
          <div className="details-header">
            <h2>Hoja de Pago</h2>
            <div className="actions">
              <Button type="submit" variant="outline" onClick={handleGenerateReport}>Generar Reporte</Button>
              <Button variant="outline">
                <Download className="icon" /> Descargar
              </Button>
            </div>
          </div>

          {studentInfo && (
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
          )}

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
              {/* Matrícula */}
              {charges.map((charge) => (
                <TableRow key={charge.concept}>
                  <TableCell>{charge.concept}</TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell>{charge.date}</TableCell>
                  <TableCell>{charge.amount.toLocaleString('es-DO', { style: 'currency', currency: 'DOP' })}</TableCell>
                </TableRow>
              ))}
              {/* Cursos */}
              {courses.map((course) => (
                <TableRow key={course.code}>
                  <TableCell>{course.code} {course.name}</TableCell>
                  <TableCell>{course.schedule}</TableCell>
                  <TableCell>{course.credits}</TableCell>
                  <TableCell>{course.date}</TableCell>
                  <TableCell></TableCell>
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
