/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';

import { addCheckout } from '../../../../store/actions/checkout';
import { addMessage } from '../../../../store/actions/message';
import { CHECKOUT_COUNT } from '../../../../store/actions/types';
import { deleteProduct, editProduct } from '../../../../store/actions/product';

import './styles/ProductItem.scss';

function ProductItem({ id, name, image, description, price }) {
  const [priceComma, setPriceComma] = useState(price);
  const [edit, setEdit] = useState(false);
  const user = JSON.parse(localStorage.getItem('user'));
  const [selectedFile, setSelectedFile] = useState(null);
  const nameInput = useRef();
  const descriptionInput = useRef();
  const priceInput = useRef();
  useEffect(() => {
    const nf = new Intl.NumberFormat();
    const pc = nf.format(price);
    setPriceComma(pc);
  }, [price]);
  const checkout = useSelector((state) => state.checkout.items);
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const handleFile = (e) => {
    setSelectedFile(e.currentTarget.files[0]);
  };
  const handleEdit = (e) => {
    e.preventDefault();
    setEdit(true);
    const formData = new FormData();
    formData.append('image', selectedFile, selectedFile.name);
    formData.append('name', nameInput.current.value);
    formData.append('description', descriptionInput.current.value);
    formData.append('price', priceInput.current.value);

    dispatch(editProduct(id, formData))
      .then(() => {
        setTimeout(() => window.location.reload(), 3000);
      })
      .catch(() => {
        setEdit(false);
      });
  };
  const handleCheckout = () => {
    if (auth.isLoggedIn) {
      if (checkout.some((co) => co.name === name)) {
        const checkoutItemIndex = checkout.findIndex((item) => item.name === name);
        dispatch(addCheckout(name, description, price));
        dispatch({
          type: CHECKOUT_COUNT,
          payload: {
            id: checkout[checkoutItemIndex]._id,
            count: checkout[checkoutItemIndex].count + 1,
          },
        });
        dispatch(
          addMessage(
            'alert-success',
            `تعداد کالا به ${checkout[checkoutItemIndex].count + 1} افزایش یافت`,
          ),
        );
      } else {
        dispatch(addCheckout(name, description, price));
        dispatch(addMessage('alert-success', 'به سبد کالا اضافه شد'));
      }
    } else {
      dispatch(
        addMessage('alert-danger', 'برای اضافه کردن به سبد کالا باید وارد حساب کاربری شوید.'),
      );
    }
  };
  const configImage = (i) => {
    const imageName = i.split('/');

    return `http://localhost:8001/uploads/${imageName[imageName.length - 1]}`;
  };
  return (
    <div className="productItem">
      {user.admin && (
        <div className="productItem__admin">
          {!edit ? (
            <>
              <IconButton color="primary" onClick={() => setEdit(true)}>
                <EditIcon />
              </IconButton>
              <IconButton color="error" onClick={() => dispatch(deleteProduct(id))}>
                <DeleteIcon />
              </IconButton>
            </>
          ) : (
            <IconButton color="error" onClick={() => setEdit(false)}>
              <CloseIcon />
            </IconButton>
          )}
        </div>
      )}
      {!edit ? (
        <>
          <div className="productItem__content">
            <img src={configImage(image)} alt="" />
            <p className="productItem__name">{name}</p>
            <p className="productItem__description">{description}</p>
          </div>
          <div className="productItem__footer ">
            <p className="text-success">{priceComma}</p>
            <IconButton color="inherit" onClick={handleCheckout}>
              <ShoppingCartIcon />
            </IconButton>
          </div>
        </>
      ) : (
        <div className="productItem__content">
          <form action="" onSubmit={handleEdit}>
            <input
              type="text"
              placeholder={name}
              className="form-control"
              ref={nameInput}
              required
            />
            <input
              type="text"
              placeholder={description}
              className="form-control"
              ref={descriptionInput}
              required
            />
            <input
              type="file"
              placeholder="عکس کالا"
              className="form-control"
              onChange={handleFile}
              required
            />
            <input
              type="text"
              placeholder={price}
              className="form-control"
              ref={priceInput}
              required
            />
            <button type="button" className="btn btn-primary">
              ویرایش
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

ProductItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
export default ProductItem;
