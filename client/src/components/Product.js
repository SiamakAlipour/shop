import React, { useState, useEffect, useRef } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './styles/Product.scss'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import CloseIcon from '@mui/icons-material/Close'
import { useSelector, useDispatch, connect } from 'react-redux'
import {
	addCheckout,
	checkoutCount,
	checkoutTotalPrice,
} from '../store/actions/checkout'
import { addMessage } from '../store/actions/message'
import { CHECKOUT_COUNT } from '../store/actions/types'
import { deleteProduct, editProduct } from '../store/actions/product'
function Product({ id, name, image, description, price }) {
	const [priceComma, setPriceComma] = useState(price)
	const [edit, setEdit] = useState(false)
	const user = JSON.parse(localStorage.getItem('user'))
	const [selectedFile, setSelectedFile] = useState(null)
	const nameInput = useRef()
	const descriptionInput = useRef()
	const priceInput = useRef()
	useEffect(() => {
		var nf = new Intl.NumberFormat()
		let pc = nf.format(price)
		setPriceComma(pc)
	}, [price])
	const checkout = useSelector((state) => state.checkout.items)
	const auth = useSelector((state) => state.auth)
	const dispatch = useDispatch()
	const handleFile = (e) => {
		setSelectedFile(e.currentTarget.files[0])
	}
	const handleEdit = (e) => {
		e.preventDefault()
		setEdit(true)
		const formData = new FormData()
		formData.append('image', selectedFile, selectedFile.name)
		formData.append('name', nameInput.current.value)
		formData.append('description', descriptionInput.current.value)
		formData.append('price', priceInput.current.value)

		dispatch(editProduct(id, formData))
			.then(() => {
				setTimeout(() => window.location.reload(), 3000)
			})
			.catch(() => {
				setEdit(false)
			})
	}
	const handleCheckout = () => {
		if (auth.isLoggedIn) {
			if (checkout?.some((checkout) => checkout.name === name)) {
				let checkoutItemIndex = checkout.findIndex(
					(item) => item.name === name
				)
				dispatch(addCheckout(name, description, price))
				dispatch({
					type: CHECKOUT_COUNT,
					payload: {
						id: checkout[checkoutItemIndex]._id,
						count: checkout[checkoutItemIndex].count + 1,
					},
				})
				dispatch(
					addMessage(
						'alert-success',
						`تعداد کالا به ${
							checkout[checkoutItemIndex].count + 1
						} افزایش یافت`
					)
				)
			} else {
				dispatch(addCheckout(name, description, price))
				dispatch(addMessage('alert-success', 'به سبد کالا اضافه شد'))
			}
		} else {
			console.log(auth)
			dispatch(
				addMessage(
					'alert-danger',
					'برای اضافه کردن به سبد کالا باید وارد حساب کاربری شوید.'
				)
			)
		}
	}
	const configImage = (image) => {
		const imageName = image?.split('/')

		return (
			'http://localhost:8001/uploads/' + imageName[imageName?.length - 1]
		)
	}
	return (
		<div className='product'>
			{user?.admin && (
				<div className='product__admin'>
					{!edit ? (
						<>
							<IconButton
								color='primary'
								onClick={() => setEdit(true)}>
								<EditIcon />
							</IconButton>
							<IconButton
								color='error'
								onClick={() => dispatch(deleteProduct(id))}>
								<DeleteIcon />
							</IconButton>
						</>
					) : (
						<IconButton
							color='error'
							onClick={() => setEdit(false)}>
							<CloseIcon />
						</IconButton>
					)}
				</div>
			)}
			{!edit ? (
				<>
					<div className='product__content'>
						<img src={configImage(image)} alt='' />
						<p className='product__name'>{name}</p>
						<p className='product__description'>{description}</p>
					</div>
					<div className='product__footer '>
						<p className='text-success'>{priceComma}</p>
						<IconButton color='inherit' onClick={handleCheckout}>
							<ShoppingCartIcon />
						</IconButton>
					</div>
				</>
			) : (
				<div className='product__content'>
					<form action='' onSubmit={handleEdit}>
						<input
							type='text'
							placeholder={name}
							className='form-control'
							ref={nameInput}
							required
						/>
						<input
							type='text'
							placeholder={description}
							className='form-control'
							ref={descriptionInput}
							required
						/>
						<input
							type='file'
							placeholder='عکس کالا'
							className='form-control'
							onChange={handleFile}
							required
						/>
						<input
							type='text'
							placeholder={price}
							className='form-control'
							ref={priceInput}
							required
						/>
						<button className='btn btn-primary'>ویرایش</button>
					</form>
				</div>
			)}
		</div>
	)
}

export default Product
