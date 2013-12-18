package com.mamartin.plugins;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.PluginResult;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import android.content.Context;
import android.telephony.TelephonyManager;

public class InfoTelefonoPlugin extends CordovaPlugin {

	public static final String OBTENER_INFO_ACCION = "OBTENER_INFO_ACCION";

	public boolean execute(String action, JSONArray args,
			CallbackContext callbackContext) throws JSONException {
		boolean resultado = false;
		try {

			if (OBTENER_INFO_ACCION.equals(action)) {
				
				
				//Si tuvieramos parámetros de entrada para tratarlos sería:
				//long param = args.getLong(0);

				JSONObject jsonSuccess = this.obtenerInfoTelefonoImp();
				// callbackContext.success(jsonSuccess);
				// Esta forma es más manual que la anterior ... son equivalentes
				callbackContext.sendPluginResult(new PluginResult(
						PluginResult.Status.OK, jsonSuccess));

				// Si hubiera más acciones
				// }else if {

			} else {
				throw new IllegalArgumentException(action + " no soportada. ");
			}
			resultado = true;
		} catch (Throwable exc) {
			JSONObject jsonError = new JSONObject("{ \"mensaje\" : \""
					+ exc.getMessage() + "\"");
			callbackContext.sendPluginResult(new PluginResult(
					PluginResult.Status.ERROR, jsonError));

		}
		return resultado;
	}

	private JSONObject obtenerInfoTelefonoImp() throws JSONException {

		// Este objeto apunta al Activity que hereda de cordobaActivity
		TelephonyManager manager = (TelephonyManager) super.cordova
				.getActivity().getSystemService(Context.TELEPHONY_SERVICE);

		String numero = manager.getLine1Number();
		String imei = manager.getDeviceId();
		String imsi = manager.getSubscriberId();

		String jsonString = "{ 'numero' : '{0}' , 'imei' : '{1}' , 'imsi' : '{2}' }";
		jsonString = jsonString.replace("'", "\"").replace("{0}", numero)
				.replace("{1}", imei).replace("{2}", imsi);

		return new JSONObject(jsonString);
	}

}
