import type { User, Order, Product } from './products';

const mockUsers: User[] = [
  {
    email: 'alice.johnson@example.com',
    status: 'active',
    role: 'customer',
    orders: [
      {
        number: 'ORD-001',
        name: 'Alice Johnson',
        price: 29.99,
        transactionId: 'TXN-2024-001',
        authorizationId: 'AUTH-2024-001',
        paymentMethod: 'credit_card',
        merchantId: 'MERCH-001',
        key: 'KEY-ABC123',
        status: 'completed',
        externalOrderId: 'EXT-001',
        serviceFee: 2.99,
        totalPrice: 32.98,
        paypalAccount: 'alice@paypal.com',
        claimedKey: 'CLAIMED-ABC123',
        claimedDate: '2024-01-15T10:30:00Z',
        claimedIP: '192.168.1.100',
        product: {
          title: 'Premium Software License',
          price: 29.99
        }
      },
      {
        number: 'ORD-002',
        name: 'Alice Johnson',
        price: 49.99,
        transactionId: 'TXN-2024-002',
        authorizationId: 'AUTH-2024-002',
        paymentMethod: 'paypal',
        merchantId: 'MERCH-001',
        key: 'KEY-DEF456',
        status: 'pending',
        externalOrderId: 'EXT-002',
        serviceFee: 4.99,
        totalPrice: 54.98,
        paypalAccount: 'alice@paypal.com',
        claimedKey: '',
        claimedDate: '',
        claimedIP: '',
        product: {
          title: 'Enterprise Software License',
          price: 49.99
        }
      }
    ]
  },
  {
    email: 'bob.smith@example.com',
    status: 'active',
    role: 'customer',
    orders: [
      {
        number: 'ORD-003',
        name: 'Bob Smith',
        price: 19.99,
        transactionId: 'TXN-2024-003',
        authorizationId: 'AUTH-2024-003',
        paymentMethod: 'credit_card',
        merchantId: 'MERCH-002',
        key: 'KEY-GHI789',
        status: 'completed',
        externalOrderId: 'EXT-003',
        serviceFee: 1.99,
        totalPrice: 21.98,
        paypalAccount: '',
        claimedKey: 'CLAIMED-GHI789',
        claimedDate: '2024-01-20T14:15:00Z',
        claimedIP: '192.168.1.101',
        product: {
          title: 'Basic Software License',
          price: 19.99
        }
      }
    ]
  },
  {
    email: 'carol.williams@example.com',
    status: 'active',
    role: 'premium',
    orders: [
      {
        number: 'ORD-004',
        name: 'Carol Williams',
        price: 79.99,
        transactionId: 'TXN-2024-004',
        authorizationId: 'AUTH-2024-004',
        paymentMethod: 'paypal',
        merchantId: 'MERCH-001',
        key: 'KEY-JKL012',
        status: 'completed',
        externalOrderId: 'EXT-004',
        serviceFee: 7.99,
        totalPrice: 87.98,
        paypalAccount: 'carol@paypal.com',
        claimedKey: 'CLAIMED-JKL012',
        claimedDate: '2024-02-01T09:00:00Z',
        claimedIP: '192.168.1.102',
        product: {
          title: 'Professional Software Bundle',
          price: 79.99
        }
      },
      {
        number: 'ORD-005',
        name: 'Carol Williams',
        price: 29.99,
        transactionId: 'TXN-2024-005',
        authorizationId: 'AUTH-2024-005',
        paymentMethod: 'credit_card',
        merchantId: 'MERCH-002',
        key: 'KEY-MNO345',
        status: 'completed',
        externalOrderId: 'EXT-005',
        serviceFee: 2.99,
        totalPrice: 32.98,
        paypalAccount: '',
        claimedKey: 'CLAIMED-MNO345',
        claimedDate: '2024-02-10T16:45:00Z',
        claimedIP: '192.168.1.102',
        product: {
          title: 'Premium Software License',
          price: 29.99
        }
      }
    ]
  },
  {
    email: 'david.brown@example.com',
    status: 'suspended',
    role: 'customer',
    orders: [
      {
        number: 'ORD-006',
        name: 'David Brown',
        price: 99.99,
        transactionId: 'TXN-2024-006',
        authorizationId: 'AUTH-2024-006',
        paymentMethod: 'credit_card',
        merchantId: 'MERCH-003',
        key: 'KEY-PQR678',
        status: 'completed',
        externalOrderId: 'EXT-006',
        serviceFee: 9.99,
        totalPrice: 109.98,
        paypalAccount: '',
        claimedKey: 'CLAIMED-PQR678',
        claimedDate: '2024-02-15T11:20:00Z',
        claimedIP: '192.168.1.103',
        product: {
          title: 'Ultimate Software Package',
          price: 99.99
        }
      }
    ]
  },
  {
    email: 'eve.davis@example.com',
    status: 'active',
    role: 'admin',
    orders: [
      {
        number: 'ORD-007',
        name: 'Eve Davis',
        price: 39.99,
        transactionId: 'TXN-2024-007',
        authorizationId: 'AUTH-2024-007',
        paymentMethod: 'paypal',
        merchantId: 'MERCH-001',
        key: 'KEY-STU901',
        status: 'completed',
        externalOrderId: 'EXT-007',
        serviceFee: 3.99,
        totalPrice: 43.98,
        paypalAccount: 'eve@paypal.com',
        claimedKey: 'CLAIMED-STU901',
        claimedDate: '2024-02-20T13:30:00Z',
        claimedIP: '192.168.1.104',
        product: {
          title: 'Standard Software License',
          price: 39.99
        }
      },
      {
        number: 'ORD-008',
        name: 'Eve Davis',
        price: 19.99,
        transactionId: 'TXN-2024-008',
        authorizationId: 'AUTH-2024-008',
        paymentMethod: 'credit_card',
        merchantId: 'MERCH-002',
        key: 'KEY-VWX234',
        status: 'pending',
        externalOrderId: 'EXT-008',
        serviceFee: 1.99,
        totalPrice: 21.98,
        paypalAccount: '',
        claimedKey: '',
        claimedDate: '',
        claimedIP: '',
        product: {
          title: 'Basic Software License',
          price: 19.99
        }
      },
      {
        number: 'ORD-009',
        name: 'Eve Davis',
        price: 59.99,
        transactionId: 'TXN-2024-009',
        authorizationId: 'AUTH-2024-009',
        paymentMethod: 'paypal',
        merchantId: 'MERCH-003',
        key: 'KEY-YZA567',
        status: 'completed',
        externalOrderId: 'EXT-009',
        serviceFee: 5.99,
        totalPrice: 65.98,
        paypalAccount: 'eve@paypal.com',
        claimedKey: 'CLAIMED-YZA567',
        claimedDate: '2024-03-01T10:00:00Z',
        claimedIP: '192.168.1.104',
        product: {
          title: 'Advanced Software License',
          price: 59.99
        }
      }
    ]
  }
];

export default mockUsers;

