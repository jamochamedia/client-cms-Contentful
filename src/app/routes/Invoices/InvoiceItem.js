import React from "react";
import { Link } from "react-router-dom";

const InvoiceItem = props => {
  return (
    <div>
      <h3>{props.fields.subject}</h3>
      <h4>{props.fields.dueDate}</h4>
      <Link
        to={{
          pathname: `/invoices/${props.sys.id}`,
          state: { props }
        }}
      >
        Go to Invoice
      </Link>
    </div>
  );
};

export default InvoiceItem;
