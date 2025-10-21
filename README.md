# Inventory Management System

A modern, full-stack inventory management application built with Next.js 15, TypeScript, and Prisma. Features real-time analytics, product management, and low stock alerts.

## 🚀 Features

- **Dashboard Analytics**: Real-time metrics including total products, inventory value, and stock levels
- **Product Management**: Add, view, and delete products with comprehensive details
- **Inventory Tracking**: Monitor stock levels with configurable low stock alerts
- **Search & Filter**: Find products quickly with search functionality
- **Responsive Design**: Modern UI that works on all devices
- **Authentication**: Secure user authentication with Stack Auth
- **Data Visualization**: Interactive charts for inventory insights

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS 4
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: Stack Auth
- **Charts**: Recharts
- **Validation**: Zod
- **Icons**: Lucide React

## 📋 Prerequisites

- Node.js 18+
- PostgreSQL database
- npm or yarn

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/AhmedQeshta/inventory-management-app.git
cd inventory-management-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Environment Setup

Create a `.env.local` file in the root directory:

```env
DATABASE_URL="postgresql://username:password@localhost:5432/inventory_db"
NEXT_PUBLIC_STACK_PROJECT_ID="your_stack_project_id"
STACK_API_KEY="your_stack_api_key"
```

### 4. Database Setup

```bash
# Generate Prisma client
npx prisma generate

# Run database migrations
npx prisma db push

# Seed the database (optional)
npm run seed
```

### 5. Start the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
inventory-management/
├── app/                    # Next.js app router pages
│   ├── dashboard/         # Analytics dashboard
│   ├── inventory/         # Product inventory page
│   ├── add-product/       # Add new product form
│   └── settings/          # User settings
├── components/            # Reusable UI components
│   ├── sidebar.tsx        # Navigation sidebar
│   ├── key-metrics.tsx   # Dashboard metrics
│   ├── stock-levels.tsx  # Stock level indicators
│   └── pagination.tsx    # Table pagination
├── lib/                   # Utility functions and actions
│   ├── actions/          # Server actions
│   ├── auth.ts           # Authentication logic
│   ├── prisma.ts         # Database client
│   └── utils.ts          # Helper functions
├── prisma/               # Database schema and migrations
└── stack/               # Stack Auth configuration
```

## 🎯 Key Features

### Dashboard

- **Total Products**: Count of all products in inventory
- **Total Value**: Calculated inventory value
- **Low Stock Alerts**: Products below threshold
- **Stock Level Distribution**: Visual breakdown of stock status
- **Weekly Product Trends**: Chart showing product additions over time

### Product Management

- **Add Products**: Form with validation for name, price, quantity, SKU, and low stock threshold
- **View Inventory**: Paginated table with search functionality
- **Delete Products**: Remove products from inventory
- **Stock Monitoring**: Automatic low stock detection

### Data Models

**Product Schema:**

```typescript
{
  id: string
  userId: string
  name: string
  sku?: string
  price: Decimal
  quantity: number
  lowStockAt?: number
  createdAt: DateTime
  updatedAt: DateTime
}
```

## 🔧 Available Scripts

```bash
npm run dev          # Start development server with Turbopack
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run seed         # Seed database with sample data
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Other Platforms

The app can be deployed to any platform that supports Next.js:

- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🔒 Environment Variables

| Variable                       | Description                  | Required |
| ------------------------------ | ---------------------------- | -------- |
| `DATABASE_URL`                 | PostgreSQL connection string | Yes      |
| `NEXT_PUBLIC_STACK_PROJECT_ID` | Stack Auth project ID        | Yes      |
| `STACK_API_KEY`                | Stack Auth API key           | Yes      |

## 📊 Database Schema

The application uses a single `Product` model with the following fields:

- **id**: Unique identifier (CUID)
- **userId**: Owner of the product
- **name**: Product name
- **sku**: Optional SKU code
- **price**: Product price (decimal)
- **quantity**: Current stock quantity
- **lowStockAt**: Low stock threshold
- **createdAt**: Creation timestamp
- **updatedAt**: Last update timestamp

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/your-repo/issues) page
2. Create a new issue with detailed information
3. Include error messages and steps to reproduce

## 🔮 Future Enhancements

- [ ] Product categories and tags
- [ ] Bulk import/export functionality
- [ ] Advanced reporting and analytics
- [ ] Barcode scanning support
- [ ] Multi-location inventory tracking
- [ ] Supplier management
- [ ] Purchase order tracking
- [ ] API endpoints for external integrations
