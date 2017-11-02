import {} from 'jasmine';

import { EncodeJSONRead } from './encode-json-read'

let json_constructor = null;

describe('Encode JSON read unit test', () => {
  beforeEach(() => {
    json_constructor = new EncodeJSONRead();
  });

  it('should create the inventory  page', () => {
    let result = json_constructor.createDomain('id', '=', 2);
    expect(typeof result).toBe('string');
    expect(result).toEqual("('id', '=', 2)");
  });
  it('should add a new node', () => {
    let domain = "[" + json_constructor.createDomain('id', '=', 2) + "]";
    json_constructor.addNode('party.party', domain,
      ["name", "address"]);

    expect(json_constructor.root['party.party']).toEqual(
      ['[(\'id\', \'=\', 2)]', ["name", "address"], 0, '']);

    expect(typeof json_constructor.root['party.party']).toBe('object');

    expect(json_constructor.root['party.party'].length).toEqual(4);

    expect(json_constructor.root['party.party'][1]).toEqual(["name", "address"])

    expect(json_constructor.root['party.party'][2]).toEqual(0);
  })
  it('should create a JSON', () => {
    let domain = "[" + json_constructor.createDomain('id', '=', 2) + "]";
    json_constructor.addNode('party.party', domain, ["name", "address"]);
    let result = json_constructor.createJson();

    expect(typeof result).toBe('string');
    expect(result).toEqual("[{\"party.party\":[\"[(\'id\', \'=\', 2)]\",[\"name\",\"address\"],0,\"\"]}]")
  })
});
