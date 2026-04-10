// aq é só exemplo

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000';

interface RequestOptions {
  token?: string;
}

async function makeRequest(
  endpoint: string,
  method: 'GET' | 'POST' | 'PUT' | 'DELETE',
  data?: any,
  options?: RequestOptions
) {
  const url = `${API_BASE_URL}${endpoint}`;
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
  };

  if (options?.token) {
    headers['Authorization'] = `Bearer ${options.token}`;
  }

  const config: RequestInit = {
    method,
    headers,
  };

  if (data && (method === 'POST' || method === 'PUT')) {
    config.body = JSON.stringify(data);
  }

  const response = await fetch(url, config);
  return response.json();
}

export async function registerAdmin(
  email: string,
  password: string,
  name: string
) {
  return makeRequest('/api/auth/register', 'POST', {
    email,
    password,
    name,
  });
}

export async function loginAdmin(email: string, password: string) {
  return makeRequest('/api/auth/login', 'POST', {
    email,
    password,
  });
}

export async function getSales(token: string) {
  return makeRequest('/api/sales', 'GET', undefined, { token });
}

export async function createSale(
  token: string,
  productName: string,
  quantity: number,
  price: number
) {
  return makeRequest(
    '/api/sales',
    'POST',
    {
      productName,
      quantity,
      price,
    },
    { token }
  );
}

export async function getSale(token: string, id: string) {
  return makeRequest(`/api/sales/${id}`, 'GET', undefined, { token });
}

export async function updateSale(
  token: string,
  id: string,
  data: {
    productName?: string;
    quantity?: number;
    price?: number;
    status?: 'completed' | 'pending' | 'cancelled';
  }
) {
  return makeRequest(`/api/sales/${id}`, 'PUT', data, { token });
}

export async function deleteSale(token: string, id: string) {
  return makeRequest(`/api/sales/${id}`, 'DELETE', undefined, { token });
}

export async function getSalesStats(token: string) {
  return makeRequest('/api/sales/stats', 'GET', undefined, { token });
}

// ============ Example Usage ============
// 
// async function exampleUsage() {
//   try {
//     // 1. Register a new admin
//     const registerResponse = await registerAdmin(
//       'admin@example.com',
//       'password123',
//       'John Doe'
//     );
//     console.log('Register response:', registerResponse);

//     const token = registerResponse.data.token;

//     // 2. Get all sales
//     const salesResponse = await getSales(token);
//     console.log('Sales response:', salesResponse);

//     // 3. Create a new sale
//     const createSaleResponse = await createSale(
//       token,
//       'Laptop',
//       2,
//       1000
//     );
//     console.log('Create sale response:', createSaleResponse);

//     const saleId = createSaleResponse.data.id;

//     // 4. Get a specific sale
//     const getSaleResponse = await getSale(token, saleId);
//     console.log('Get sale response:', getSaleResponse);

//     // 5. Update a sale
//     const updateSaleResponse = await updateSale(token, saleId, {
//       quantity: 3,
//       status: 'pending',
//     });
//     console.log('Update sale response:', updateSaleResponse);

//     // 6. Get sales statistics
//     const statsResponse = await getSalesStats(token);
//     console.log('Stats response:', statsResponse);

//     // 7. Login with existing admin
//     const loginResponse = await loginAdmin(
//       'admin@example.com',
//       'password123'
//     );
//     console.log('Login response:', loginResponse);

//     // 8. Delete a sale
//     const deleteSaleResponse = await deleteSale(token, saleId);
//     console.log('Delete sale response:', deleteSaleResponse);
//   } catch (error) {
//     console.error('Error:', error);
//   }
// }
// 
// Uncomment to run example
// exampleUsage();
