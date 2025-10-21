'use client';
import { UserButton } from '@stackframe/stack';
import { BarChart3, Settings, Package, Plus } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function Skeleton({ className = '' }: { className?: string }) {
  return <div className={`animate-pulse bg-gray-200 rounded ${className}`}></div>;
}

function LoadingSidebar() {
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
        {navigation.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="flex items-center space-x-3 py-2 px-1 rounded-md transition-colors hover:bg-gray-800 text-gray-300">
            {item.icon}
            <span className="text-sm">{item.label}</span>
          </Link>
        ))}
      </nav>

      <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-700">
        <div className="flex item-center justify-between">
          <div className="flex-1 min-w-0">
            <Skeleton className="h-4 w-16 mb-1" />
            <Skeleton className="h-3 w-24" />
          </div>
          <div className="ml-3">
            <UserButton />
          </div>
        </div>
      </div>
    </div>
  );
}

function MainContentSkeleton({ showSidebar = true }: { showSidebar?: boolean }) {
  return (
    <main className={showSidebar ? 'ml-64 p-8' : 'p-8'}>
      <div className="mb-8">
        <Skeleton className="h-8 w-32 mb-2" />
        <Skeleton className="h-4 w-64" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <Skeleton className="h-6 w-24 mb-6" />
          <div className="grid grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => {
              return (
                <div key={i} className="text-center">
                  <Skeleton className="h-8 w-16 mx-auto mb-2" />
                  <Skeleton className="h-4 w-20 mx-auto mb-1" />
                  <div className="flex items-center justify-center">
                    <Skeleton className="h-3 w-8" />
                    <Skeleton className="h-3 w-3 ml-1 rounded-full" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <Skeleton className="h-6 w-40" />
          </div>
          <Skeleton className="h-48 w-full" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <Skeleton className="h-6 w-24" />
          </div>
          <div className="space-y-3">
            {[1, 2, 3, 4, 5].map((i) => {
              return (
                <div
                  key={i}
                  className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
                  <div className="flex items-center space-x-3">
                    <Skeleton className="h-3 w-13 rounded-full" />
                    <Skeleton className="h-4 w-24" />
                  </div>
                  <Skeleton className="h-4 w-16" />
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <Skeleton className="h-6 w-20" />
          </div>
          <div className="flex items-center justify-center">
            <Skeleton className="h-48 w-48 rounded-full" />
          </div>
          <div className="mt-6 space-y-2">
            {[1, 2, 3].map((i) => {
              return (
                <div key={i} className="flex items-center justify-center">
                  <div className="flex items-center space-x-2">
                    <Skeleton className="h-3 w-3 rounded-full" />
                    <Skeleton className="h-4 w-24" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}

export default function Loading() {
  const pathname = usePathname();

  const showSidebar = !['/', 'sign-in', 'sign-up'].includes(pathname);
  return (
    <div className="min-h-screen bg-gray-50">
      {showSidebar && <LoadingSidebar />}
      <MainContentSkeleton showSidebar={showSidebar} />
    </div>
  );
}
