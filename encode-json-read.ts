/**
 * Encodes a JSON
 * EncodeJSONRead will encode a JSON to make a search request
 *
 * DO NOT MODIFIY THIS FILE, EXTEND THE CLASS INSTEAD
 */

import { RootSend, Send } from './json-interface';

export class EncodeJSONRead {

	root: Send;
	root_send: RootSend;

	constructor(){
		console.log("Initialaizing JSON constructor");
		this.root_send = {
			root: []
		};
	}
	/**
	 * Adds a new node to the JSON object
	 * @param {string}        method Name of the target method
	 * @param {string}        domain Domain of the method
	 * @param {Array<string>} fields Fields to get
	 * @param {number}        offset Sets where to start gathering data after getting it, the default value no offset
	 * @param {any}           limit Limits the number of data returned, default None
	 */
	addNode(method: string, domain: any, fields: Array<string>,
		offset = 0, limit:any = ''){
		console.log("Adding node for method, domain, fields",
			method, domain, fields)
		this.root = {}
		this.root[method] = [domain, fields, offset, limit];
		this.root_send.root.push(this.root);
	}
	/**
	 * Creates a new domain
	 * @param {string} field    Name of the field
	 * @param {string} operator Operator: =, >, <, in, like...
	 * @param {any}    value    Value to compare
	 * @param {string} related  Used for reference fields search
	 * @returns {string}		String contaning the domain withour brackets
	 */
	createDomain(field: string, operator: string, value: any, related?: string){
		if (related)
			return [field, operator, value, related]
		return [field, operator, value]
	}
	/**
	 * Creates the JSON object and returns it
	 * @returns {JSON}		JSON created with the nodes
	 */
	createJson(){
		console.log("Generating JSON")
		return JSON.stringify(this.root_send.root)
	}
}
