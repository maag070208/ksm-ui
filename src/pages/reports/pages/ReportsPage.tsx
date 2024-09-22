import Layout from "@shared/components/layout/Layout";
import { useNavigate } from "react-router-dom";

import { Button } from "primereact/button";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { getProductsPromise } from "../core/ReportsService";
import { useEffect, useState } from "react";

const ReportsPage = () => {
  const navigate = useNavigate();

  // const products = getProducts();
  const [products, setProducts]=useState([])




  useEffect(()=> {
     getProductsPromise().then((resp)=>{
      setProducts(resp)
     });
  },[])

  return (
    <Layout title="Reportes">
      <div className="w-full">
        <DataTable value={products}>
          <Column field="code" header="Code"></Column>
          <Column field="name" header="Name"></Column>
          <Column field="category" header="Category"></Column>
          <Column field="quantity" header="Quantity"></Column>
          <Column
            field="actions"
            body={(product) => (
              <div className="formgroup-inline gap-3">
                <Button icon="pi pi-search" rounded severity="success" aria-label="Search" onClick={()=> navigate(product.id)}/>
                <Button icon="pi pi-pencil" rounded severity="info" aria-label="Favorite" onClick={() => console.log("editar")}/>
                <Button icon="pi pi-times" rounded severity="danger" aria-label="Cancel" onClick={() => console.log("editar")}/>
              </div>
            )}
          ></Column>
        </DataTable>
      </div>
    </Layout>
  );
};

export default ReportsPage;
