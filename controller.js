'use strict';

const response = require('./response');
const connection = require('./conn');

exports.tabungan = (req, res) => {
	connection.query('SELECT * FROM buku', (error, rows, fields) => {
		if (error) {
			console.log(error);
		} else {
			response.ok(rows, res);
		}
	});
};

exports.findTabungan = (req, res) => {
	const id = req.params.id;
	connection.query('SELECT * FROM buku WHERE id = ?', [ id ], (error, rows, field) => {
		if (error) {
			console.log(error);
		} else {
			response.ok(rows, res);
		}
	});
};

exports.createTabungan = (req, res) => {
	const no_rekening 	= req.body.no_rek;
	const nama 			= req.body.nama;
	const alamat 		= req.body.alamat;
	const no_telepon 	= req.body.no_tel;

	connection.query('INSERT INTO buku(no_rek, nama, alamat, no_tel) VALUES(?, ?, ?, ?)', [no_rekening, nama, alamat, no_telepon], (error, rows, fields) => {
		if (error) {
			console.log(error);
		} else {
			response.ok('Berhasil menambahkan data buku tabungan', res);
		}
	});
};

exports.updateTabungan  = (req, res) => {
	const id 			= req.body.id;
	const no_rekening 	= req.body.no_rek;
	const nama 			= req.body.nama;
	const alamat 		= req.body.alamat;
	const no_telepon 	= req.body.no_tel;

	connection.query('UPDATE buku SET no_rek=?, nama=?, alamat=?, no_tel=? WHERE id=?', [no_rekening, nama, alamat, no_telepon, id], (error, rows, fields) => {
		if (error) {
			console.log(error);
		} else {
			response.ok('Berhasil mengubah data buku tabungan', res);
		}
	});
};

exports.deleteTabungan = (req, res) => {
	const id = req.body.id;
	connection.query('DELETE FROM buku WHERE id=?', [ id ], (error, rows, field) => {
		if (error) {
			console.log(error);
		} else {
			response.ok('Berhasil menghapus data buku tabungan', res);
		}
	});
};

exports.index = (req, res) => {
	response.ok('Index of CodeID Rest API', res);
};