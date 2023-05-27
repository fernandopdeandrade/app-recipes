import { expect } from 'chai';
import { Model } from 'mongoose';
import sinon from 'sinon';
import Key from '../../../src/Domain/Key/Key';
import IKey from '../../../src/Interfaces/IKey';
import KeyService from '../../../src/Services/KeyService';

const messageKeyInvalid = 'Invalid Key';
const myEmailTest = 'pupygreen@gmail.com';

describe('Deveria validar e criar chaves', function () {
  it('Criando uma chave de tipo CPF com SUCESSO', async function () {
    const outputKey: Key = new Key(
      '435.343.434-34',
      'José',
      'cpf',
      '633ec9fa3df977e30e993492',
    );

    const inputKey: IKey = {
      value: '435.343.434-34',
      owner: 'José',
      type: 'cpf',
    };
    sinon.stub(Model, 'create').resolves([outputKey]);

    const keyService = new KeyService();
    const result = await keyService.registerService(inputKey);

    expect(result).to.be.deep.equal(outputKey);
  });

  it('Criando uma chave de tipo CPF inválida', async function () {
    const inputKey: IKey = {
      value: '435.343.xxx-34',
      owner: 'José',
      type: 'cpf',
    };
    sinon.stub(Model, 'create').resolves();

    try {
      const keyService = new KeyService();
      await keyService.registerService(inputKey);
    } catch (error) {
      expect((error as Error).message).to.be.deep.equal(messageKeyInvalid);
    }
  });

  it('Criando chave de tipo Phone Number com SUCESSO', async function () {
    const outputKey: Key = new Key(
      '+55 (55) 99999-8888',
      'Maria',
      'phone_number',
      '633ec9fa3df977e30e993492',
    );

    const inputKey: IKey = {
      value: '+55 (55) 99999-8888',
      owner: 'Maria',
      type: 'phone_number',
    };
    sinon.stub(Model, 'create').resolves([outputKey]);

    const keyService = new KeyService();
    const result = await keyService.registerService(inputKey);

    expect(result).to.be.deep.equal(outputKey);
  });

  it('Criando chave de tipo Phone Number inválida', async function () {
    const inputKey: IKey = {
      value: '+55 (555) 999xx-8888',
      owner: 'Maria',
      type: 'phone_number',
    };
    sinon.stub(Model, 'create').resolves();

    try {
      const keyService = new KeyService();
      await keyService.registerService(inputKey);
    } catch (error) {
      expect((error as Error).message).to.be.deep.equal(messageKeyInvalid);
    }
  });

  it('Criando chave de tipo Email com SUCESSO', async function () {
    const outputKey: Key = new Key(
      myEmailTest,
      'Fernando',
      'email',
      '633ec9fa3df977e30e993492',
    );

    const inputKey: IKey = {
      value: myEmailTest,
      owner: 'Fernando',
      type: 'email',
    };
    sinon.stub(Model, 'create').resolves([outputKey]);

    const keyService = new KeyService();
    const result = await keyService.registerService(inputKey);

    expect(result).to.be.deep.equal(outputKey);
  });

  it('Criando chave de tipo Email inválida', async function () {
    const inputKey: IKey = {
      value: 'pupygreen@@gmail.com',
      owner: 'Fernando',
      type: 'email',
    };  
    sinon.stub(Model, 'create').resolves();

    try {
      const keyService = new KeyService();
      await keyService.registerService(inputKey);
    } catch (error) {
      expect((error as Error).message).to.be.deep.equal(messageKeyInvalid);
    }
  });

  it('Criando chave de tipo Random com SUCESSO', async function () {
    const keyInput: IKey = {
      value: '123e4567-e12b-12d1-a456-426655440000',
      owner: 'Martha',
      type: 'random',
    };
    const keyOutput: Key = new Key(
      '123e4567-e12b-12d1-a456-426655440000',
      'Martha',
      'random',
      '633ec9fa3df977e30e993492',
    );
    sinon.stub(Model, 'create').resolves([keyOutput]);

    const service = new KeyService();
    const result = await service.registerService(keyInput);

    expect(result).to.be.deep.equal(keyOutput);
  });

  it('Criando chave de tipo Random é inválida', async function () {
    const keyInput: IKey = {
      value: '123',
      owner: 'Martha',
      type: 'random',
    };
    sinon.stub(Model, 'create').resolves();

    try {
      const service = new KeyService();
      await service.registerService(keyInput);
    } catch (error) {
      expect((error as Error).message).to.be.equal(messageKeyInvalid);
    }
  });

  afterEach(function () {
    sinon.restore();
  });
});
