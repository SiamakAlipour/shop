import Joi from 'joi'

export const registerValidation = (data) => {
	const pattern =
		/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
	const schema = Joi.object({
		username: Joi.string().min(6).max(30).required(),
		password: Joi.string().min(8).pattern(new RegExp(pattern)),
		repeat_password: Joi.ref('password'),
		email: Joi.string().email(),
	})
	return schema.validate(data)
}
export const loginValidation = (data) => {
	const schema = Joi.object({
		username: Joi.string().required(),
		password: Joi.string().required(),
	})
	return schema.validate(data)
}
