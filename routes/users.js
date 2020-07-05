var express = require('express');
const asyncHandler = require('./async-handler');
const { getUser, getUsers, addUser, updateUser } = require('../database');
const { response } = require('../app');
var router = express.Router();

router.get('/:id', (request, response) => {
	const user = getUser(request.params.id);
	user ? response.send(user) : response.status(500).send('ERROR');
});

router.get(
	'/v2/:id',
	asyncHandler(request => {
		const user = getUser(request.params.id);
		if (user) {
			return user;
		} else {
			throw new Error('error - no such user');
		}
	})
);

router.get(
	'/',
	asyncHandler(async request => getUsers())
);

router.put(
	'/',
	asyncHandler(async request => addUser(request.body))
);

router.post(
	'/',
	asyncHandler(async request => updateUser(request.body))
);

router.delete(
	'/:id',
	asyncHandler(async request => deleteUser(request.params.id))
);

module.exports = router;
