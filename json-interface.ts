/**
 * Creates the interfaces to create the JSON objects
 *
 * DO NOT MODIFY THIS FILE, EXTEND THE INTERFACES INSTEAD
 */

/*
 Storage of the JSON
 */ 
export interface RootSend {
	root: Array<Send>;
}
/*
 Temportary storage of a node
 */
export interface Send {
    [method: string]: any[];
}

/*
 Storage for the write JSON
 */ 
export interface Write {
	[method:string]: any[];
}