import { CAPIWS } from "./libs/eimzo";

export const startApi = () => {
	CAPIWS.apikey([
		"localhost",
		"96D0C1491615C82B9A54D9989779DF825B690748224C2B04F500F370D51827CE2644D8D4A82C18184D73AB8530BB8ED537269603F61DB0D03D2104ABF789970B",
		"127.0.0.1",
		"A7BCFA5D490B351BE0754130DF03A068F855DB4333D43921125B9CF2670EF6A40370C646B90401955E1F7BC9CDBF59CE0B2C5467D820BE189C845D0B79CFC96F",
		"dev-e-imzo.soliq.uz",
		"84CF679952B1D2E6BB5CC7CA8D22753CAC25D45E3A9134BF574FCC0E002A0FD2A4015F84371A5F125A36A8FEAEA123C2D85079515FA816B69A4036294CD360E4"
	]);
};


export const getAllPfxsDisks = () =>
	new Promise((resolve, reject) => {
		CAPIWS.callFunction(
			{
				plugin: "pfx",
				name: "list_disks"
			},
			(event, data) => {
				resolve(data);
			},
			(error) => {
				reject(error);
			}
		);
	});


export const getAllYtksCertificates = () =>
	new Promise((resolve, reject) => {
		CAPIWS.callFunction(
			{
				plugin: "ytks",
				name: "list_all_certificates"
			},
			(event, data) => {
				resolve(data);
			},
			(error) => {
				reject(error);
			}
		);
	});

export const getAllYtksDisks = () =>
	new Promise((resolve, reject) => {
		CAPIWS.callFunction(
			{
				plugin: "ytks",
				name: "list_disks"
			},
			(event, data) => {
				resolve(data);
			},
			(error) => {
				reject(error);
			}
		);
	});

export const getIdCardList = () =>
	new Promise((resolve, reject) => {
		CAPIWS.callFunction(
			{
				plugin: "idcard",
				name: "list_readers"
			},
			(event, data) => {
				resolve(data);
			},
			(error) => {
				reject(error);
			}
		);
	});

export const loadYtksKey = (dsKey) =>
	new Promise((resolve, reject) => {
		CAPIWS.callFunction(
			{
				plugin: "ytks",
				name: "load_key",
				arguments: [dsKey.disk, dsKey.path, dsKey.name, dsKey.alias, dsKey.serialNumber]
			},
			(event, data) => {
				if (data.success) {
					// localStorage.setItem("dsKeyId", data.ytksId);
					// localStorage.setItem("dsKeySerialNumber", data.serialNumber);
					resolve(data.ytksId);
				} else {
					reject(data.reason);
				}
			},
			(e) => {
				reject(e);
			}
		);
	});

export const createPkcs7 = (id, data, isBase64 = false) =>
	new Promise((resolve, reject) => {
		CAPIWS.callFunction(
			{
				plugin: "pkcs7",
				name: "create_pkcs7",
				arguments: [isBase64 ? data : window.Base64.encode(data), id, "no"]
			},
			(event, data) => {
				if (data.success) {
					resolve(data);
				} else {
					reject(data.reason);
				}
			},
			(e) => {
				reject(e);
			}
		);
	});


