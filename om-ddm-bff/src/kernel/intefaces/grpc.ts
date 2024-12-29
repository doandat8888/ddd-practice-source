/* eslint-disable prettier/prettier */
import { Observable } from 'rxjs';

export interface GrpcService {
  getBilling(request: { invoiceId: string }): Observable<{ invoiceId: string; amount: number; isConfirmed: boolean }>;
  createBilling(request: { invoiceId: string; amount: number }): Observable<{ success: boolean; message: string }>;
}