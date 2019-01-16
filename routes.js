'use strict';

module.exports = app => {
	const bukuTabungan = require('./controller');

	app.route('/')
		.get(bukuTabungan.index);

	app.route('/tabungan')
		.get(bukuTabungan.tabungan);

	app.route('/tabungan/:id')
		.get(bukuTabungan.findTabungan);

	app.route('/tabungan')
		.post(bukuTabungan.createTabungan);

	app.route('/tabungan')
		.put(bukuTabungan.updateTabungan);

	app.route('/tabungan')
		.delete(bukuTabungan.deleteTabungan);
};