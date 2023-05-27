import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import IPayment from '../../../src/Interfaces/IPayment';
import TransferService from '../../../src/Services/TransferService';

describe('Quando cancelar um Trix', function () {
  describe('Com parâmetos válidos', function () {
    const paymentInput: IPayment = {
      payByPerson: 'Pedrão',
      payToPerson: 'Juju',
      amount: 5000,
      key: '858.898.670-16',
    };

    it('Deveria cancelar com sucesso', function () {
      const updateStub = sinon.stub(Model, 'findByIdAndUpdate');

      const service = new TransferService();

      service.undoTransferService('63320b77aa12f0db4f210b00', paymentInput);
      expect(updateStub.calledOnce).to.equal(true);
    });

    describe('Com ID inválida', function () {
      it('Deveria lançar uma exceção de Invalid Mongo ID', function () {
        try {
          const updateStub = sinon.stub(Model, 'findByIdAndUpdate');

          const service = new TransferService();
          service.undoTransferService('ID INVALIDA DE PROPOSITO', paymentInput);
          expect(updateStub.calledOnce).to.equal(false);
        } catch (error) { 
          expect((error as Error).message).to.be.equal('Invalid Mongo id');
        }
      });
    });
  });

  describe('Com parâmetos key inválida', function () {
    const paymentInput: IPayment = {
      payByPerson: 'Pedrão',
      payToPerson: 'Juju',
      amount: 5000,
      key: '858.898.670-16XX',
    };

    it('Deveria lançar uma exceção de Invalid Key', function () {
      const updateStub = sinon.stub(Model, 'findByIdAndUpdate').resolves();

      try {
        const service = new TransferService();
        service.undoTransferService('63320b77aa12f0db4f210b00', paymentInput);
        expect(updateStub.calledOnce).to.equal(false);
      } catch (error) { 
        expect((error as Error).message).to.be.equal('Invalid Key!');
      }
    });
  });
  
  afterEach(function () {
    sinon.restore();
  });
});