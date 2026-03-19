import type { ReactNode } from 'react';
import './globals.css';

const navigationItems = ['Overview', 'Library', 'Goals', 'Yearly summary'];

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-slate-950 text-slate-50 lg:grid lg:grid-cols-[260px_1fr]">
          <aside className="border-b border-white/10 bg-slate-900/95 px-6 py-8 lg:min-h-screen lg:border-b-0 lg:border-r">
            <p className="text-xs uppercase tracking-[0.3em] text-sky-300">Next.js</p>
            <h2 className="mt-3 text-2xl font-semibold">Books Tracker</h2>
            <p className="mt-2 text-sm text-slate-400">
              Read, unread, active reads, yearly goals, and recent reading summaries.
            </p>

            <nav className="mt-8">
              <ul className="space-y-2">
                {navigationItems.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="block rounded-xl px-4 py-3 text-sm text-slate-300 transition hover:bg-white/5 hover:text-white"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
