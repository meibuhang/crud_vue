const Users = require('../models').User;
checkDuplicateEmail = (req, res, next) => {
	
		// -> Check Email is already in use
		Users.findOne({
			where: {
				email: req.body.email
			}
		}).then((user) => {
			if (user) {
				res.status(400).send('Fail -> Email is already in use!');
				return;
			}

			next();
		})
};

const emailVerify = {};
emailVerify.checkDuplicateEmail = checkDuplicateEmail;
module.exports = emailVerify;
