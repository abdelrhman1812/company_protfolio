import AppointmentForm from "@/components/app/company/AppointmentsPage/AppointmentForm";
import HeroPage from "@/components/common/HeroPage/HeroPage";

const page = () => {
  const appointmentStyle = {
    backgroundImage: "url('/Image/appoinment/01 (2).png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };
  return (
    <main className="overflow-hidden">
      <HeroPage
        title="Appointments"
        imageUrl="/Image/About/hero.png"
        height="50vh"
        textColor="white"
        path="/appointments"
      />
      <section style={appointmentStyle}>
        <AppointmentForm />
      </section>
    </main>
  );
};

export default page;
