import logoText from "../assets/logo-text.png";
const Footer = () => {
  const productLinks = ["Home", "Technologies", "Projects"];
  const companyLinks = ["About", "Contact", "Careers"];
  const legalLinks = ["Privacy Policy", "Terms of Service"];

  return (
    <footer className="border-t border-base-300 mt-20">
      <div className="container mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <img src={logoText} alt="" />
          </div>
          <p className="text-sm text-base-content/60 mb-4">
            Curated tools, technologies, and resources for developers
            building modern software.
          </p>
          <div className="flex gap-4 text-sm text-base-content/60">
            <a href="#" className="hover:text-base-content">GitHub</a>
            <a href="#" className="hover:text-base-content">Twitter</a>
            <a href="#" className="hover:text-base-content">LinkedIn</a>
          </div>
        </div>

        <LinkGroup title="Product" links={productLinks} />
        <LinkGroup title="Company" links={companyLinks} />
        <LinkGroup title="Legal" links={legalLinks} />
      </div>

      <div className="border-t border-base-300">
        <div className="container mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-base-content/50">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-base-content">Privacy</a>
            <a href="#" className="hover:text-base-content">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Small helper used 3 times above, so we write the <ul> markup once here
// instead of copy-pasting it for Product / Company / Legal.
const LinkGroup = ({ title, links }: { title: string; links: string[] }) => {
  return (
    <div>
      <h4 className="text-xs font-semibold mb-3">{title.toUpperCase()}</h4>
      <ul className="flex flex-col gap-2 text-sm text-base-content/60">
        {links.map((link) => (
          <li key={link}>
            <a href="#" className="hover:text-base-content">{link}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
