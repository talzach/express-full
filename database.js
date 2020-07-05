let users = [
	{ id: 1, name: 'tal' },
	{ id: 2, name: 'tal2' },
];

exports.getUsers = async () => {
	return users;
};

exports.getUser = id => {
	return users.find(u => u.id == id);
};

exports.addUser = async user => {
	const newUser = {
		id: ++users.length,
		...user,
	};

	users.push(newUser);

	return newUser;
};

exports.deleteUser = async id => {
	users = users.filter(u => u.id != id);
};

exports.updateUser = userToUpdate => {
	const index = users.findIndex(u => userToUpdate.id == u.id);
	users[index] = userToUpdate;
};
