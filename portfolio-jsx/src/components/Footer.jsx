import { Github, Linkedin, Mail } from "lucide-react";

const GITHUB_URL = "https://github.com/Vishal-Sharma-6033";
const LINKEDIN_URL = "https://www.linkedin.com/in/vishal-sharma-a49603315/";
const CONTACT_EMAIL = "vishalsharma952877@gmail.com";

const Footer = () => {
  return (
    <footer className="border-t border-border py-8">
      <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Developer. All rights reserved.</p>

        <div className="flex items-center gap-4">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="GitHub Profile"
          >
            <Github size={18} />
          </a>

          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={18} />
          </a>

          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Send Email"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
