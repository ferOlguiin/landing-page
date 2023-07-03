import {Formik, Form, Field, ErrorMessage} from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';

export const FormFinalContent = () => {

    const [dataform, setDataForm] = useState({
        name:"",
        email:"",
        subject:"",
        info:""
    })

  return (
    <div className='py-5 d-flex justify-content-center align-items-center bg-waveform'>
            <Formik initialValues={dataform}
                  validationSchema={Yup.object({
                    email: Yup.string().email().trim().lowercase().required("Email requerido"),
                    name: Yup.string().trim().required("Nombre requerido")
                  })}
                  onSubmit={async (values, actions) => {
                                console.log(values)
                            // const res = await getUser(values);
                            // if(res.length === 1){
                            //   actions.setSubmitting(true);
                            //   navigate("/profiles");
                            // } else {
                            //   toast.error("Mail o contraseña incorrecta", {
                            //     duration: 4000
                            //   });
                            //   actions.resetForm();
                            // }
                  }}
                  enableReinitialize
              >
            {({handleSubmit, isSubmitting}) => (
              <Form onSubmit={handleSubmit} className='form-control-sm px-5 py-3 rounded contact-form flex-column d-flex' style={{width:800}}>
                  <h3 className="text-white text-break text-center mb-3 fs-1 fw-bold">Contáctanos</h3>

                  <label className='form-label main-color m-0 fw-bold fs-5' htmlFor="n">Nombre</label>
                  <Field className="form-control-plaintext rounded ps-2 bg-secondary text-light border border-secondary mt-1 mb-3 mx-0 fs-5" placeholder="Nombre" name="name" id="n"/>
                    <ErrorMessage name='name' component="p" className="text-danger"/>

                  <label className='form-label main-color m-0 fw-bold fs-5' htmlFor="e">Email</label>
                  <Field className="form-control-plaintext rounded ps-2 bg-secondary text-light border border-secondary mt-1 mb-3 mx-0 fs-5" placeholder="Email" name="email" id="e"/>
                    <ErrorMessage name='email' component="p" className="text-danger"/>

                  <label className='form-label main-color m-0 fw-bold fs-5' htmlFor="a">Asunto</label>
                  <Field className="form-control-plaintext rounded ps-2 bg-secondary border border-secondary text-light mt-1 mb-3 mx-0 fs-5" placeholder="Asunto" name="subject" id="a"/>
                    <ErrorMessage name='subject' component="p" className="text-danger"/>

                  <label className='form-label main-color m-0 fw-bold fs-5' htmlFor="m">Mensaje</label>
                  <Field
                    as="textarea"
                    rows="3"
                    className="form-control-plaintext bg bg-secondary rounded ps-2 text-white mt-1 mb-3 mx-0 fs-5"
                    name="info"
                    id="m"
                    style={{ resize: "none" }}
                  />
                    
                  <button type='submit' className='btn-main fw-bold mt-3 py-3 fs-4' disabled={isSubmitting}>{isSubmitting ? 'Enviando...' : 'Enviar'}</button>
              </Form>
            )}
            </Formik>
        </div>
  )
}

