/**
 * Encodes a JSON
 * EncodeJSONWrite will encode a JSON to make a save or write request
 *
 * DO NOT MODIFIY THIS FILE, EXTEND THE CLASS INSTEAD
 */

import { Write } from './json-interface';

export class EncodeJSONWrite {

	write: Write;
	constructor(){
		console.log("Initialaizing JSON constructor");
		this.write = {};
	}

	/**
	 * Adds a node to the JSON object
	 * @param {string} method Name of the target method
	 * @param {Object} values Values to create or update
	 */
	public addNode(method: string, values: any ){
		console.log("Adding node for method, id, values",
			method, values);

		if (this.write[method] !== undefined)
			this.write[method].push(values);
		else
			this.write[method] = [values]
		console.log("Current state of the node", this.write)
	}
	/**
	 * Creates the JSON object and returns it
	 * @returns 	JSON object
	 */
	public createJSON(){
		console.log("Generating JSON");
		console.log(JSON.stringify(this.write))
		return JSON.stringify(this.write);
	}
}
