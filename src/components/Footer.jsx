import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-12 p-6 border-t text-sm text-gray-500">
      <div className="flex items-center justify-center gap-2">
        <p>© {new Date().getFullYear()} Min Kim</p>
        <a
          href="https://www.linkedin.com/in/153minkim/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-gray-600 text-xl transition-colors"
        >
          <FaLinkedin />
        </a>
      </div>
      <div>
        153minkim@gmail.com
      </div>
    </footer>
  );
}
