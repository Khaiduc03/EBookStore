
// Định nghĩa kiểu dữ liệu cho các dịch vụ thanh toán
export type ServiceType = 'Google Pay' | 'Zalo Pay' | 'PayPal';

// Định nghĩa kiểu dữ liệu cho các trạng thái của dịch vụ thanh toán
export type PaymentStatus = Record<ServiceType, boolean>;
