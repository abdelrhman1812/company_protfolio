import Footer from "@/components/common/Footer/Footer";
import Header from "@/components/common/Header/Header";
import { TopNavBar } from "@/components/common/TopNavBar/TopNavBar";

export default function CompanyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <TopNavBar />
      <Header />
      {children}
      <Footer />
    </main>
  );
}
