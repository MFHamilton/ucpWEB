import React from 'react';
import '../../app/reports/paymentInfo.css';

// Componente Table
export const Table = ({ children }) => {
  return <table className="payment-info-table">{children}</table>;
};

// Componente TableHeader
export const TableHeader = ({ children }) => {
  return <thead>{children}</thead>;
};

// Componente TableBody
export const TableBody = ({ children }) => {
  return <tbody>{children}</tbody>;
};

// Componente TableRow
export const TableRow = ({ children }) => {
  return <tr>{children}</tr>;
};

// Componente TableHead
export const TableHead = ({ children }) => {
  return <th>{children}</th>;
};

// Componente TableCell
export const TableCell = ({ children }) => {
  return <td>{children}</td>;
};

const PaymentInfoTable = ({ paymentData }) => {
  return (
    <div className="payment-info-table">
      <table>
        <thead>
          <tr>
            <th>Concept</th>
            <th>(Aula) Horarios</th>
            <th>Cr</th>
            <th>Fecha</th>
            <th>Deuda Corriente</th>
          </tr>
        </thead>
        <tbody>
          {paymentData.map((item, index) => (
            <tr key={index}>
              <td>{item.concept}</td>
              <td>{item.schedule || '-'}</td>
              <td>{item.credits || '-'}</td>
              <td>{item.date}</td>
              <td>{item.amount ? `$${item.amount.toFixed(2)}` : '-'}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="payment-summary">
        <div className="total">
          <strong>Balance Actual:</strong> ${paymentData.reduce((sum, item) => sum + (item.amount || 0), 0).toFixed(2)}
        </div>
        <div className="payment-schedule">
          <h3>Calendario de Pagos</h3>
          <div className="payment-installments">
            <div className="installment">
              <strong>Primer Pago:</strong> $29,853.99
              <div className="due-date">Fecha sin recargo: 11/ago./2024</div>
            </div>
            <div className="installment">
              <strong>Segundo Pago:</strong> $37,815.06
              <div className="due-date">Fecha sin recargo: 08/sep./2024</div>
            </div>
            <div className="installment">
              <strong>Tercer Pago:</strong> $41,795.59
              <div className="due-date">Fecha sin recargo: 06/oct./2024</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentInfoTable;
