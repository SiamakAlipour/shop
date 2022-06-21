import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';

import * as Yup from 'yup';

import { addProduct } from '../../../../store/actions/product';

import './ProductAdd.scss';

const ProductAdd = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [price, setPrice] = useState();
  const dispatch = useDispatch();
  const handleFile = (e) => {
    setSelectedFile(e.currentTarget.files[0]);
  };
  const handleUpload = (value, { resetForm }) => {
    console.log(value);
    console.log(selectedFile);
    const formData = new FormData();

    formData.append('image', selectedFile, selectedFile.name);
    formData.append('name', value.name);
    formData.append('description', value.description);
    formData.append('price', parseInt(price.replace(/\D/g, ''), 10));

    dispatch(addProduct(formData));
    resetForm();
    setPrice(0);
  };
  const handleChange = ({ target }) => {
    // eslint-disable-next-line no-restricted-globals
    if (isNaN(parseInt(target.value, 10))) {
      setPrice();
      return;
    }
    const digitPrice = target.value.replace(/\D/g, '');
    const formattedPrice = parseInt(digitPrice, 10).toLocaleString();
    setPrice(formattedPrice);
  };
  const AddProductSchema = Yup.object().shape({
    name: Yup.string().min(2, 'نام کالا کوتاه است.').required('لطفا وارد نمایید.'),
    description: Yup.string().min(10, 'توضیحات کالا کوتاه است.').required('لطفا وارد نمایید.'),
    image: Yup.mixed(),
    price: Yup.string(),
  });
  return (
    <div className="productAdd form-control">
      <Formik
        initialValues={{
          name: '',
          description: '',
          image: null,
          price: 0,
        }}
        validationSchema={AddProductSchema}
        validateOnSubmit
        onSubmit={handleUpload}
      >
        {({ errors, touched }) => (
          <Form className="form-control">
            <Field name="name" className="form-control" placeholder="نام کالا" />
            {errors.name && touched.name ? <div className="text-danger">{errors.name}</div> : null}
            <Field
              type="text"
              name="description"
              className="form-control"
              placeholder="توضیحات کالا"
            />
            {errors.description && touched.description ? (
              <div className=" text-danger">{errors.description}</div>
            ) : null}
            <Field
              type="file"
              name="image"
              className="form-control"
              onChange={handleFile}
              required
            />
            {errors.image && touched.image ? (
              <div className="text-danger">{errors.image}</div>
            ) : null}
            <input
              type="text"
              name="price"
              className="form-control"
              placeholder="قیمت کالا"
              value={price}
              onChange={handleChange}
            />
            {errors.price && touched.price ? (
              <div className="text-danger">{errors.price}</div>
            ) : null}

            <button type="submit" className="btn btn-success">
              اضافه کردن کالا
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ProductAdd;
