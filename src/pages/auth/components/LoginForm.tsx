import { Form, Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";


import { InputText } from "primereact/inputtext";
import { Card } from "primereact/card";
import { Button } from "primereact/button";

const LoginFormComponent = () => {
  const validationSchema = Yup.object({
    user: Yup.string().required("is required"),
    password: Yup.string().required("is required"),
  });

  const initialValues = {
    user: "",
    password: "",
  };

  const navigate = useNavigate();

  return (
    <Card className="border-blue-50 shadow-1">
      <h1 className="text-center">Sign Up</h1>
      <Formik
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={(values: any) => {
          // Crear un objeto con los valores del formulario
          const userData = {
            user: values.user,
            password: values.password,
          };

          // Guardar el objeto en localStorage como una cadena JSON
          localStorage.setItem("userData", JSON.stringify(userData));
          localStorage.setItem("token", "true");

          navigate('/home');

        }}
      >
        {({ values, handleChange }) => (
          <Form className="flex flex-column w-30rem h-30rem justify-content-between">
            <div className="flex flex-column">
            <label className="mb-2" htmlFor="user">User</label>
            <InputText className="mb-5" value={values.user} onChange={handleChange("user")} />

            <label htmlFor="password">Password</label>
            <InputText
            className="mb-3"
              value={values.password}
              onChange={handleChange("password")}
            />
            </div>
            <Button type="submit" label="Submit" />
          </Form>
        )}
      </Formik>
    </Card>
  );
};

export default LoginFormComponent;
