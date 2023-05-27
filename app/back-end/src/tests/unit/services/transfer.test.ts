import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import IPayment from '../../../src/Interfaces/IPayment';
import TransferService from '../../../src/Services/TransferService';
import Payment from '../../../src/Domain/Payment/Payment';

describe('Deveria criar uma transferência TRIX', function () {
  it('Deveria criar uma transferência TRIX com SUCESSO', async function () {
    // Arrange
    const paymentInput: IPayment = {
      payByPerson: 'Jobs',
      payToPerson: 'Wozniak',
      amount: 50000,
      key: '858.898.670-16',
    };
    const paymentOutput: Payment = new Payment(
      '63320b77aa12f0db4f210afe',
      paymentInput.payByPerson,
      paymentInput.payToPerson,
      paymentInput.amount,
      paymentInput.key,
      0,
    );
    sinon.stub(Model, 'create')
      .resolves(paymentOutput as unknown as IPayment[]);

    const service = new TransferService();
    const result = await service.transferService(paymentInput);

    expect(result).to.be.deep.equal(paymentOutput);
  });

  it('Deveria lançar uma exceção quando a key é inválida', async function () {
    const paymentInput: IPayment = {
      payByPerson: 'Jobs',
      payToPerson: 'Wozniak',
      amount: 50000,
      key: '858.898.670-16XX',
    };

    sinon.stub(Model, 'create').resolves();

    try {
      const service = new TransferService();
      await service.transferService(paymentInput);
    } catch (error) {
      expect((error as Error).message).to.be.equal('Invalid Key!');
    }
  });

  afterEach(function () {
    sinon.restore();
  });
});
