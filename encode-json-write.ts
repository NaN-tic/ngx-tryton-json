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
    if (this.write[method] !== undefined) {
      this.write[method].push(values);
    } else {
      this.write[method] = [values]
    }
  }

  /**
  * Creates the JSON object and returns it
  * @returns 	JSON object
  */
  public createJSON(){
    return JSON.stringify(this.write);
  }
}
