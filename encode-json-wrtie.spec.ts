import {} from 'jasmine';

import { EncodeJSONWrite } from './encode-json-write'

let json_constructor = null;
let method = "party.party";

describe('Encode JSON read unit test', () => {
  beforeEach(() => {
    json_constructor = new EncodeJSONWrite();
  });

  it('Should add a new node to write', () => {
    let id = -1;
    let val = {
      name: 'Test write'
    };
    let values = [id, val]
    json_constructor.addNode(method, values);
    expect(typeof json_constructor.write).toBe('object');
  })
  it('Should create a JSON', () => {
    let id = -1;
    let val = {
      name: 'Test write'
    };
    let values = [id, val]
    json_constructor.addNode(method, values);
    id = 1;
    val = {
      name: 'Test write w'
    };
    values = [id, val]
    json_constructor.addNode(method, values);

    let result = json_constructor.createJSON();
    expect(typeof result).toBe('string')
    expect(result).toEqual('{"party.party":[[-1,{"name":"Test write"}],[1,{"name":"Test write w"}]]}')
  })
});
