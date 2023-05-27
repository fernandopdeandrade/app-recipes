import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import PaymentStatus from '../../../src/utils/PaymentStatus';
import TransferService from '../../../src/Services/TransferService';
import Payment from '../../../src/Domain/Payment/Payment';
import IPayment from '../../../src/Interfaces/IPayment';

describe('Deveria buscar uma transferência por key', function () {
  it('Deveria retornar a lista das transferências por key', async function () {
    // Arrange
    const cpfKeyPayment = '187.401.600-33';

    const paymentOutput: Payment = new Payment(
      '63319d80feb9f483ee823ac5',
      'Vinicius',
      'Ricardo',
      50,
      '187.401.600-33',
      PaymentStatus.conclued,
    );
    sinon.stub(Model, 'find').resolves([paymentOutput]);

    // Act
    const service = new TransferService();

    const newPayment: IPayment = {
      payByPerson: 'Vinicius',
      payToPerson: 'Ricardo',
      amount: 50,
      key: cpfKeyPayment,
    };

    const result = await service
      .findAllKeyTransferService(cpfKeyPayment, newPayment);

    // Assert
    expect(result).to.be.deep.equal([paymentOutput]);

    sinon.restore();
  });
});