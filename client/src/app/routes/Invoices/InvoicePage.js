import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";

import { client } from "../../../utils/client";

const InvoicePage = props => {
  const [invoice, setInvoice] = useState({});

  useEffect(() => {
    fetchInvoice();
  }, {});

  const fetchInvoice = async () => {
    const response = await client.getEntry(props.match.params.invoiceid);
    setInvoice(response.fields);
  };

  return (
    <div>
      <p>{invoice.invoiceId}</p>
      <h3>Subject: {invoice.subject}</h3>
      <h3>{invoice.clientName}</h3>
      <h6>Due: {invoice.dueDate}</h6>
      <h6>Issued: {invoice.issueDate}</h6>
    </div>
  );
};

export default withRouter(InvoicePage);
