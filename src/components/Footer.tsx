export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line px-5 py-8 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-xs uppercase tracking-[0.15em] text-muted sm:flex-row">
        <p>© {year} Dale Alerta. All rights reserved.</p>
        <a href="#top" className="hover:text-red transition-colors">
          Back to Top ↑
        </a>
      </div>
    </footer>
  );
}
