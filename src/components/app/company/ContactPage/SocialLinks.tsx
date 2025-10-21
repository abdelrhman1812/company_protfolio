import Link from "next/link";

export const SocialLinks = () => {
  return (
    <>
      {/* Social Links */}
      <div className="grid grid-cols-2 md:gird-cols-3 lg:grid-cols-5 gap-4 mt-8 ">
        {["Facebook", "Twitter", "Linkedin", "Skype"].map((social) => (
          <Link
            key={social}
            href="/"
            className="shadow text-center px-3 py-2 hover:bg-primary hover:text-white rounded transition duration-500 ease-in-out"
          >
            {social}
          </Link>
        ))}
      </div>
    </>
  );
};

export default SocialLinks;
