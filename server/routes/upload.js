import multer from 'multer'
import path from 'path'
const __dirname = path.resolve()
const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, path.join(__dirname, '/uploads/'))
	},
	filename: function (req, file, cb) {
		cb(
			null,
			new Date().toISOString().replace(/:/g, '-') +
				' - ' +
				file.originalname
		)
	},
})
const fileFilter = (req, file, cb) => {
	if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png')
		cb(null, true)
	else {
		cb(null, false)
	}
}
export const upload = multer({
	storage: storage,
	limits: {
		fileSize: 1024 * 1024 * 5,
	},
	fileFilter: fileFilter,
})
