// Types for the sales management application

import { Item, Pattern } from "@prisma/client";

export interface Admin {
  id: string;
  email: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Sale {
  id: string;
  productName: string;
  price: number;
  totalAmount: number;
  saleDate: Date;
  status: 'completed' | 'pending' | 'cancelled';
  adminId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
}

export interface CreateSaleRequest {
  productName: string;
  quantity: number;
  price: number;
}

export interface UpdateSaleRequest {
  productName?: string;
  quantity?: number;
  price?: number;
  status?: 'completed' | 'pending' | 'cancelled';
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

export enum SaleStatusEnum {
  PendenteEnvio = "PENDENTE_ENVIO",
  Completed = "COMPLETED",
  Cancelled = "CANCELLED"
}

export interface ItemWithPattern {
  item: Item;
  pattern: Pattern;
  quantity: number;
}