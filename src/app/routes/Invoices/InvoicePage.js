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

  console.log(invoice);
  return (
    <div>
      <div>Invoice Page</div>
    </div>
  );
};

export default withRouter(InvoicePage);
