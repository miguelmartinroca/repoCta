cordova.define("com.mamartin.phonegap.infotelefonoplugin",
		
		function(require, exports, module){
	
			//var conctactsplugin = require('org.apache.....contacts');
	
			//Llamada a la API de Android para poder lanzar el exe
			var exec = require('cordova/exec');
	
			//	apunta a la función InfoTelefono porque está en el mismo namespace
			var InfoTelefonoVar = require ('./InfoTelefono');
			
			var InfoTelefonoPlugin = function (){
				
			}
			
			InfoTelefonoPlugin.prototype.obtenerInfo = function(success, fail) {
				exec(function(info) {
					var resultado = new InfoTelefono();
					resultado.imei = info.imei;
					resultado.numero = info.numero;
					resultado.imsi = info.imsi;
					success(resultado);
					//resultado.blah = bli;
				},fail,'InfoTelefonoPlugin', 'OBTENER_INFO_ACCION',[]);
			}
			
		
			module.exports = new InfoTelefonoPlugin(); 
	
		}
		
);