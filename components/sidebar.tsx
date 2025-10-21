import { UserButton } from '@stackframe/stack';
import { BarChart3, Package, Plus, Settings } from 'lucide-react';
import Link from 'next/link';

export default function Sidebar({ currentPath = '/dashboard' }: { currentPath: string }) {
  const navigation = [
    {
      label: 'Dashboard',
      href: '/dashboard',
      icon: <BarChart3 className="w-5 h-5" />,
    },
    {
      label: 'Inventory',
      href: '/inventory',
      icon: <Package className="w-5 h-5" />,
    },
    {
      label: 'Add Product',
      href: '/add-product',
      icon: <Plus className="w-5 h-5" />,
    },
    {
      label: 'Settings',
      href: '/settings',
      icon: <Settings className="w-5 h-5" />,
    },
  ];
  return (
    <div className="fixed left-0 top-0 w-64 min-h-screen bg-gray-900 text-white border-r p-6 z-10">
      <div className="mb-8">
        <div className="flex items-center space-x-2 mb-4">
          <BarChart3 className="w-7 h-7" />
          <span className="text-xl font-bold">Inventory App</span>
        </div>
      </div>

      <nav className="space-y-1">
        <div className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">
          Inventory
        </div>
        {navigation.map((item, key) => (
          <Link
            key={key}
            href={item.href}
            className={`flex items-center space-x-3 py-2 px-1 rounded-md ${
              currentPath === item.href ? 'bg-white text-gray-800' : 'hover:bg-gray-800'
            }`}>
            {item.icon}
            <span className="text-sm">{item.label}</span>
          </Link>
        ))}
      </nav>

      <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-700">
        <div className="flex item-center justify-between">
          <UserButton showUserInfo />
        </div>
      </div>
    </div>
  );
}
