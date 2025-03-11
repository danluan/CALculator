# 📊 CALculator 🔥

**CALculator** is a nutrition tracking application that allows users to set daily macronutrient goals (calories, carbohydrates, proteins, and fats) and log their meals to track their daily intake.

---

## 🚀 Features

- Set daily calorie and macronutrient goals
- Register meals with detailed nutritional information
- Track daily consumption compared to goals
- User-friendly interface for easy input and analysis
- Data persistence for long-term tracking

---

## 🛠️ Technologies Used

- **Next.js** - Frontend framework
- **PostgreSQL** - Database for storing user data
- **Prisma** - ORM for database management
- **NextAuth.js** - Authentication system
- **TypeScript** - Strongly typed JavaScript

---

## 📦 Installation

1. **Clone the repository**
   ```sh
   git clone https://github.com/danluan/CALculator.git
   cd CALculator
   ```

2. **Install dependencies**
   ```sh
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory and configure the following variables:
   ```env
   DATABASE_URL="postgresql://user:password@localhost:5432/calculator_db"
   NEXTAUTH_SECRET="your-secret-key"
   ```

4. **Run database migrations**
   ```sh
   npx prisma migrate dev --name init
   ```

5. **Start the development server**
   ```sh
   npm run dev
   ```

The application will be available at `http://localhost:3000`.

## 📬 Contact

For any questions or feedback, feel free to reach out:

- **Email**: danielluanlourencol@gmail.com
- **GitHub**: [danluan](https://github.com/danluan)
