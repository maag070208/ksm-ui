import Layout from "@shared/components/layout/Layout";
import { useNavigate } from "react-router-dom";

import { Button } from "primereact/button";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { getProducts } from "../core/ReportsService";

const ReportsPage = () => {
    const navigate = useNavigate()

 const products = getProducts();

  return (
    <Layout title="Reportes">
      <DataTable value={products} tableStyle={{ minWidth: "50rem" }}>
        <Column field="code" header="Code"></Column>
        <Column field="name" header="Name"></Column>
        <Column field="category" header="Category"></Column>
        <Column field="quantity" header="Quantity"></Column>
        <Column header="Acciones" body={(value) => <Button icon="pi pi-pencil"  onClick={() => navigate(`/reports/${value.id}`)}/>}></Column>
      </DataTable>
    </Layout>
  );
};

export default ReportsPage;
