
//Vine cargadodel phonegap.js
//1ero el nombre del m�dulo y luego la funci�n y cordova lo registra como un m�dulo
cordova.define("com.mamartin.phonegap.InfoTelefono",
				function(require, exports, module){

/** ... */
function InfoTelefono(numero, imei, imsi){
	this.numero = numero;
	this.imei = imei;
	this.imsi = imsi;
}

//S�lo se pone para generar documentaci�n

/** ... */
InfoTelefono.prototype.numero = null;
InfoTelefono.prototype.imei = null;
InfoTelefono.prototype.imsi = null;

//Hacemos que apunte a nuestro objeto funci�n
//Esta informaci�n est� en el API de cordoba
module.exports = InfoTelefono;

});