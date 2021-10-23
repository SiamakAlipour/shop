import express from 'express'

export const router = express.Router()

router.post('/', (req, res) => {
	console.log(req)
	try {
		if (!req.files) {
			res.send({
				status: false,
				message: 'No file uploaded.',
			})
		} else {
			let image = req.files.image

			image.mv('./uploads/' + image.name)
			res.send({
				status: true,
				message: 'File is uploaded',
				data: {
					name: image.name,
					mimetype: image.mimetype,
					size: image.size,
				},
			})
		}
	} catch (error) {
		res.status(500).send(error)
	}
})
