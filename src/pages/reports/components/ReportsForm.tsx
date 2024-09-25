import { Dialog } from "primereact/dialog";
import { Product } from "../core/ReportsService";
import { Form, Formik } from "formik";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

interface ReportsFormProps {
  initialValues: Product;
  visible: boolean;
  onSubmit: (product:any)=>void;
  onHide: ()=>void;

}

const ReportsForm = (props: ReportsFormProps) => {
  return (
    <Dialog
      header="Edit Product"
      visible={props.visible}
      draggable={false}
      resizable={false}
      modal={true}
      style={{ width: "50vw" }}
      onHide={() => props.onHide()}
    >
      {props.initialValues && (
        <Formik
          initialValues={props.initialValues}
          onSubmit={(values: Product) => {
            props.onSubmit(values);
            // Crear un objeto con los valores del formulario
          }}
        >
          {({ values, handleChange }) => (
            <Form className="flex flex-column w-30rem h-30rem justify-content-between">
              <div className="flex flex-column">
                <label className="mb-2" htmlFor="name">
                  Name
                </label>
                <InputText
                  className="mb-5"
                  value={values.name}
                  onChange={handleChange("name")}
                />
              </div>
              <Button type="submit" label="Submit"/>
            </Form>
          )}
        </Formik>
      )}
    </Dialog>
  );
};
export default ReportsForm;
