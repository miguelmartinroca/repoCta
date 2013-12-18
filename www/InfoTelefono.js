
//Vine cargadodel phonegap.js
//1ero el nombre del módulo y luego la función y cordova lo registra como un módulo
cordova.define("com.mamartin.phonegap.InfoTelefono",
				function(require, exports, module){

/** ... */
function InfoTelefono(numero, imei, imsi){
	this.numero = numero;
	this.imei = imei;
	this.imsi = imsi;
}

//Sólo se pone para generar documentación

/** ... */
InfoTelefono.prototype.numero = null;
InfoTelefono.prototype.imei = null;
InfoTelefono.prototype.imsi = null;

//Hacemos que apunte a nuestro objeto función
//Esta información está en el API de cordoba
module.exports = InfoTelefono;

});