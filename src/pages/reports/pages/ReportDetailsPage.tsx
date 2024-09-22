import Layout from "@shared/components/layout/Layout";
import { useParams } from "react-router-dom";
import { getProductById } from "../core/ReportsService";
import { Card } from "primereact/card";

const ReportDetailsPage = () => {
  const { id } = useParams();
  const product = getProductById(id ?? "");

  return (
    <Layout title={`Details: ${product[0].name}`}>
      <Card className="p-0 m-0">
        <div className="formgroup-inline gap-2 mb-3">
          <div className="formgroup-inline gap-2">
            <h4 className="m-0 p-0">Code: </h4>
            <p className="m-0 p-0"> {product[0].code}</p>
          </div>
          <div className="formgroup-inline gap-2">
            <h4 className="m-0 p-0">Category: </h4>
            <p className="m-0 p-0"> {product[0].category}</p>
          </div>
        </div>
        <div className="formgroup-inline gap-2 mb-3">
            <h4 className="m-0 p-0">Description: </h4>
            <p className="m-0 p-0"> {product[0].description}</p>
          </div>
          <div className="formgroup-inline gap-2 mb-3">
            <h4 className="m-0 p-0">Price: </h4>
            <p className="m-0 p-0"> {product[0].price}</p>
          </div>
          <div className="formgroup-inline gap-2 ">
            <h4 className="m-0 p-0">Stock: </h4>
            <p className="m-0 p-0"> {product[0].quantity}</p>
          </div>
      </Card>
    </Layout>
  );
};

export default ReportDetailsPage;
