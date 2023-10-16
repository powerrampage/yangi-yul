import { CAPIWS } from "./libs/eimzo";

const generate16Number = () => Math.floor(Math.random() * 1e16 + 1);

export const generateKeyPairFunc = () =>
	new Promise((resolve, reject) => {
		CAPIWS.callFunction(
			{
				name: "generate_keypair",
				// @ts-ignore
				arguments: ["OZDST-1092-2009-2", window.Base64.encode(`${generate16Number()}${generate16Number()}${generate16Number()}${generate16Number()}`)]
			},
			(event: any, data: any) => {
				resolve(data);
			},
			(e: any) => reject(e)
		);
	});

export const createPkcs10Func = (kpId: string, x500Name: string, policyNotices: string) =>
	new Promise((resolve, reject) => {
		CAPIWS.callFunction(
			{ name: "create_pkcs10", arguments: [kpId, x500Name, policyNotices] },
			(event: any, data: any) => {
				resolve(data);
			},
			(e: any) => reject(e)
		);
	});

export const createPkcs7Func = (data_64: string, keyId: string) =>
	new Promise((resolve, reject) => {
		CAPIWS.callFunction(
			{ name: "create_pkcs7", plugin: "pkcs7", arguments: [data_64, keyId, "no"] },
			(event: any, data: any) => {
				resolve(data);
			},
			(e: any) => reject(e)
		);
	});


export const get_certificate_infoFunc = (subjectCertificate: string) =>
	new Promise((resolve, reject) => {
		CAPIWS.callFunction(
			{ name: "get_certificate_info", arguments: [subjectCertificate] },
			(event: any, data: any) => {
				resolve(data);
			},
			(e: any) => reject(e)
		);
	});

export const savePfxOrYtksKeyFunc = (
	type: "pfx" | "ytks",
	disk: string,
	fileName: string,
	subjectSerialNumber: string,
	kpId: string,
	newPassword: string,
	subjectCertificate: string,
	caCertificate: string,
	rootCertificate: string
) =>
	new Promise((resolve, reject) => {
		CAPIWS.callFunction(
			{
				name: "save_" + type,
				plugin: type,
				arguments: [disk, "DSKEYS", fileName, subjectSerialNumber, kpId, newPassword, subjectCertificate, caCertificate, rootCertificate]
			},
			(event: any, data: any) => {
				resolve(data);
			},
			(e: any) => reject(e)
		);
	});
