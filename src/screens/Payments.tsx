import React from 'react';
import {View, Text} from 'react-native';
import GooglePay, {
  CardNetworkTypes,
  CardAuthMethodsTypes,
  RequestDataType,
} from '../components/GooglePayComponent/GooglePay';

const allowedCardNetworks: CardNetworkTypes[] = ['VISA', 'MASTERCARD'];
const allowedCardAuthMethods: CardAuthMethodsTypes[] = [
  'PAN_ONLY',
  'CRYPTOGRAM_3DS',
];

const requestData: RequestDataType = {
  cardPaymentMethod: {
    tokenizationSpecification: {
      type: 'PAYMENT_GATEWAY',
      gateway: 'example',
      gatewayMerchantId: 'exampleGatewayMerchantId',
    },
    allowedCardNetworks,
    allowedCardAuthMethods,
  },
  transaction: {
    totalPrice: '10',
    totalPriceStatus: 'FINAL',
    currencyCode: 'USD',
  },
  merchantName: 'Example Merchant',
};

export default function Payments() {
  return (
    <View>
      <Text>Payments screens</Text>
      <GooglePay
        allowedCardNetworks={allowedCardNetworks}
        allowedCardAuthMethods={allowedCardAuthMethods}
        requestData={requestData}
        environment='TEST'
        processPaymentCallback={(token: string) => console.log(token)}
        errorCallback={(error: any) => console.log(error)}
      />
    </View>
  );
}
