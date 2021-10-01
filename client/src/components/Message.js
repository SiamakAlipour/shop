import React, { useEffect } from 'react'
import './styles/Message.scss'
import { useDispatch } from 'react-redux'
import { removeMessage } from '../store/actions/message'
import HighlightOffIcon from '@mui/icons-material/HighlightOff'
import IconButton from '@mui/material/IconButton'
function Message({ info, message }) {
	const dispatch = useDispatch()
	useEffect(() => {
		if (message) setTimeout(() => dispatch(removeMessage()), 1500)
		else return
	})
	if (message) {
		return (
			<div className={`alert ${info} message`}>
				{message}
				<IconButton
					color='inherit'
					onClick={() => dispatch(removeMessage())}>
					<HighlightOffIcon />
				</IconButton>
			</div>
		)
	} else {
		return null
	}
}

export default Message
