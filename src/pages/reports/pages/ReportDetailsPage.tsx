import Layout from "@shared/components/layout/Layout";
import { useParams } from "react-router-dom"
import { getProductById } from "../core/ReportsService";


const ReportDetailsPage = () => {
    const {id} = useParams()
    const product = getProductById(id??'')
    return (
        <Layout title="details">
            {product[0].name}
        </Layout>
    )
}

export default ReportDetailsPage;