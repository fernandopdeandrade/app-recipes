import { expect } from 'chai';
import { Model } from 'mongoose';
import sinon from 'sinon';
import Key from '../../../src/Domain/Key/Key';
import KeyService from '../../../src/Services/KeyService';

const nameOwnerTest = 'Gabriel';
const theNameNoExist = 'Nome que não existe';

describe('Deveria buscar todas as chaves', function () {
  it('Buscando todas as chaves com SUCESSO', async function () {
    const outputKey: Key = new Key(
      '435.343.434-34',
      'José',
      'cpf',
      '633ec9fa3df977e30e993492',
    );
    sinon.stub(Model, 'find').resolves([outputKey]);
    
    const keyService = new KeyService();
    const result = await keyService.findAllKeyService();
    
    expect(result).to.be.deep.equal([outputKey]);
  });

  it('Buscando as chaves através de um "Nome específico"', async function () {
    const outputKey: Key = new Key(
      '6443378e02b420b276c721a6',
      '+55 (48) 987231534',
      'Gabriel',
      'phone_number',
    );
    sinon.stub(Model, 'find').resolves([outputKey]);

    const keyService = new KeyService();
    const result = await keyService.findKeyServiceOwner(nameOwnerTest);

    expect(result).to.be.deep.equal([outputKey]);
  });

  it('Buscando "Nome específico" que não existe', async function () {
    const outputKey = [] as Key[];
    sinon.stub(Model, 'find').resolves(outputKey);

    const keyService = new KeyService();
    const result = await keyService.findKeyServiceOwner(theNameNoExist);

    expect(result).to.be.deep.equal([]);
  });

  afterEach(function () {
    sinon.restore();
  });
});