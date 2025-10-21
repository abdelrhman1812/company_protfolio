import LoginForm from "@/components/app/dashboard/login/login-form";
import { Card } from "@/components/ui/card";
import { DecorativeBorder } from "@/components/ui/DecorativeBorder";
import LeftSide from "@/components/app/dashboard/login/leftSide";
const AdminLoginPage = () => {
  return (
    <section className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      <LeftSide />

      <div className="flex items-center justify-center p-6 bg-[hsl(var(--muted))]">
        <div className="relative">
          <DecorativeBorder />
          <Card className="relative w-full md:w-[480px] bg-[hsl(var(--card))]/70 backdrop-blur-md shadow-2xl border border-[hsl(var(--border))]">
            <LoginForm />
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AdminLoginPage;
