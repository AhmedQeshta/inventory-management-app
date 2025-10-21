import Sidebar from '@/components/sidebar';
import { createProduct } from '@/lib/actions/products';
import { getCurrentUser } from '@/lib/auth';
import Link from 'next/link';

export default async function AddProductPage() {
  const user = await getCurrentUser();
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar currentPath="/add-product" />

      <main className="ml-64 p-8">
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">Add Product</h1>
              <p className="text-sm text-gray-500">Add a new products to your inventory.</p>
            </div>
          </div>
        </div>

        <div className="max-w-2xl">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <form action={createProduct} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium  mb-2">
                  <span className="text-gray-700">Product Name</span>
                  <span className="text-red-700">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-transparent"
                  placeholder="Enter product name"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="quantity" className="block text-sm font-medium  mb-2">
                    <span className="text-gray-700">Quantity</span>
                    <span className="text-red-700">*</span>
                  </label>
                  <input
                    type="number"
                    id="quantity"
                    name="quantity"
                    min="0"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-transparent"
                    placeholder="0.0"
                  />
                </div>
                <div>
                  <label htmlFor="price" className="block text-sm font-medium  mb-2">
                    <span className="text-gray-700">Price</span>
                    <span className="text-red-700">*</span>
                  </label>
                  <input
                    type="number"
                    id="price"
                    name="price"
                    min="0"
                    step="0.01"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-transparent"
                    placeholder="0.0"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="sku" className="block text-sm font-medium  mb-2">
                  <span className="text-gray-700">SKU</span>
                  <span className="text-gray-900">(optional)</span>
                </label>
                <input
                  type="text"
                  id="sku"
                  name="sku"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-transparent"
                  placeholder="Enter SKU"
                />
              </div>

              <div>
                <label htmlFor="lowStockAt" className="block text-sm font-medium  mb-2">
                  <span className="text-gray-700">Low Stock At</span>
                  <span className="text-gray-900">(optional)</span>
                </label>
                <input
                  type="number"
                  id="lowStockAt"
                  name="lowStockAt"
                  min="0"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-transparent"
                  placeholder="Enter Low Stock threshold"
                />
              </div>

              <div className="flex justify-end gap-5">
                <button
                  type="submit"
                  className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 inline-block cursor-pointer">
                  Add Product
                </button>
                <Link
                  href="/inventory"
                  className="px-6 py-3 bg-purple-200 text-gray-800 rounded-lg hover:bg-gray-300 inline-block cursor-pointer">
                  Cancel
                </Link>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
