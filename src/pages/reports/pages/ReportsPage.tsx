import Layout from "@shared/components/layout/Layout";
import { useNavigate } from "react-router-dom";

import { Button } from "primereact/button";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import {
  deleteProductById,
  getProductsPromise,
  Product,
  updateProduct,
} from "../core/ReportsService";
import { useEffect, useState } from "react";
import ReportsForm from "../components/ReportsForm";

const ReportsPage = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState<Product[]>([]);
  const [visible, setVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product>({} as Product);

  const handleDelete = (id: string) => {
    deleteProductById(id);
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== id)
    );
  };
  const openEditDialog = (product: Product) => {
    console.log(product);
    setSelectedProduct(product);
    setVisible(true);
  };

  useEffect(() => {
    getProductsPromise().then((resp) => {
      setProducts(resp);
    });
  }, []);

  return (
    <>
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
                  <Button
                    icon="pi pi-search"
                    rounded
                    severity="success"
                    aria-label="Search"
                    onClick={() => navigate(product.id)}
                  />
                  <Button
                    icon="pi pi-pencil"
                    rounded
                    severity="info"
                    aria-label="Edit"
                    onClick={() => openEditDialog(product)}
                  />

                  <Button
                    icon="pi pi-times"
                    rounded
                    severity="danger"
                    aria-label="Cancel"
                    onClick={() => handleDelete(product.id)}
                  />
                </div>
              )}
            ></Column>
          </DataTable>
        </div>
      </Layout>
        <ReportsForm
          initialValues={selectedProduct}
          visible={visible}
          onSubmit={(cola)=>{
            console.log("lo que sea", cola)
            updateProduct(cola)

            setVisible(false)

            getProductsPromise().then((resp) => {
              setProducts(resp);
            });
          }}
          onHide={()=> setVisible(false)}
        />
    </>
  );
};

export default ReportsPage;
