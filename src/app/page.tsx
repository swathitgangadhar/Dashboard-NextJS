const stats = [
  {
    label: 'Books read',
    value: '24',
    detail: '4 ahead of schedule',
    accent: 'from-emerald-500/20 to-emerald-500/5',
  },
  {
    label: 'Unread books',
    value: '18',
    detail: '6 added this quarter',
    accent: 'from-slate-500/20 to-slate-500/5',
  },
  {
    label: 'Currently reading',
    value: '3',
    detail: '2 finishing this week',
    accent: 'from-amber-500/20 to-amber-500/5',
  },
];

const currentReads = [
  { title: 'The Night Circus', author: 'Erin Morgenstern', progress: 76, due: 'Finish by Mar 24' },
  { title: 'Atomic Habits', author: 'James Clear', progress: 58, due: 'Book club on Mar 29' },
  { title: 'Project Hail Mary', author: 'Andy Weir', progress: 32, due: 'Weekend reading sprint' },
];

const yearlyGoals = [
  { label: '2026 goal', value: '36 / 48 books', note: '75% complete' },
  { label: 'Pages read', value: '8,420', note: 'Target 12,000 pages' },
  { label: 'Best streak', value: '19 days', note: 'Current streak: 11 days' },
];

const yearlySummary = [
  { year: '2026', read: 36, favorite: 'Tomorrow, and Tomorrow, and Tomorrow', focus: 'More literary fiction' },
  { year: '2025', read: 44, favorite: 'Yellowface', focus: 'Built a daily reading habit' },
  { year: '2024', read: 31, favorite: 'Remarkably Bright Creatures', focus: 'Started tracking formats' },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col gap-8 px-6 py-8 lg:px-10">
        <header className="flex flex-col gap-6 rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-slate-950/30 backdrop-blur md:flex-row md:items-start md:justify-between">
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.3em] text-sky-300">Books tracker dashboard</p>
            <div>
              <h1 className="text-4xl font-semibold tracking-tight">Reading dashboard</h1>
              <p className="mt-2 max-w-2xl text-sm text-slate-300 md:text-base">
                Track what you have read, what is still unread, what you are currently reading,
                and how your yearly reading goals are progressing.
              </p>
            </div>
          </div>

          <div className="self-start rounded-2xl border border-sky-400/30 bg-slate-900/80 p-4 text-right shadow-lg shadow-sky-950/30 md:min-w-72">
            <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Account</p>
            <div className="mt-3 flex items-center justify-end gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-500/20 text-lg font-semibold text-sky-200">
                AL
              </div>
              <div>
                <p className="text-lg font-semibold">Ava Lewis</p>
                <p className="text-sm text-slate-400">Premium Reader</p>
              </div>
            </div>
            <dl className="mt-4 grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-xl bg-white/5 p-3">
                <dt className="text-slate-400">Library</dt>
                <dd className="mt-1 font-semibold text-white">45 books</dd>
              </div>
              <div className="rounded-xl bg-white/5 p-3">
                <dt className="text-slate-400">Reading goal</dt>
                <dd className="mt-1 font-semibold text-white">48 books</dd>
              </div>
            </dl>
          </div>
        </header>

        <section className="grid gap-4 md:grid-cols-3">
          {stats.map((stat) => (
            <article
              key={stat.label}
              className={`rounded-3xl border border-white/10 bg-gradient-to-br ${stat.accent} p-5 shadow-lg shadow-slate-950/20`}
            >
              <p className="text-sm text-slate-300">{stat.label}</p>
              <p className="mt-4 text-4xl font-semibold tracking-tight">{stat.value}</p>
              <p className="mt-2 text-sm text-slate-300">{stat.detail}</p>
            </article>
          ))}
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <article className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-xl shadow-slate-950/20">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-semibold">Currently reading</h2>
                <p className="mt-1 text-sm text-slate-400">Keep momentum on the books already in progress.</p>
              </div>
              <span className="rounded-full bg-amber-400/15 px-3 py-1 text-sm text-amber-200">3 active</span>
            </div>

            <div className="mt-6 space-y-4">
              {currentReads.map((book) => (
                <div key={book.title} className="rounded-2xl border border-white/10 bg-slate-900/70 p-4">
                  <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3 className="text-lg font-medium text-white">{book.title}</h3>
                      <p className="text-sm text-slate-400">{book.author}</p>
                    </div>
                    <p className="text-sm text-sky-200">{book.due}</p>
                  </div>
                  <div className="mt-4">
                    <div className="mb-2 flex items-center justify-between text-sm text-slate-400">
                      <span>Progress</span>
                      <span>{book.progress}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-white/10">
                      <div className="h-2 rounded-full bg-sky-400" style={{ width: `${book.progress}%` }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-xl shadow-slate-950/20">
            <h2 className="text-2xl font-semibold">Yearly goals</h2>
            <p className="mt-1 text-sm text-slate-400">A quick view of the metrics that matter this year.</p>
            <div className="mt-6 space-y-4">
              {yearlyGoals.map((goal) => (
                <div key={goal.label} className="rounded-2xl border border-white/10 bg-slate-900/70 p-4">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm text-slate-400">{goal.label}</p>
                      <p className="mt-1 text-2xl font-semibold text-white">{goal.value}</p>
                    </div>
                    <p className="max-w-28 text-right text-sm text-emerald-200">{goal.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </article>
        </section>

        <section className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-xl shadow-slate-950/20">
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-2xl font-semibold">Yearly summary</h2>
              <p className="mt-1 text-sm text-slate-400">Compare your recent reading years at a glance.</p>
            </div>
            <p className="text-sm text-slate-400">Sorted by most recent year</p>
          </div>

          <div className="mt-6 overflow-hidden rounded-2xl border border-white/10">
            <table className="min-w-full divide-y divide-white/10 text-left text-sm">
              <thead className="bg-slate-900/80 text-slate-300">
                <tr>
                  <th className="px-4 py-3 font-medium">Year</th>
                  <th className="px-4 py-3 font-medium">Books read</th>
                  <th className="px-4 py-3 font-medium">Favorite book</th>
                  <th className="px-4 py-3 font-medium">Summary</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10 bg-slate-950/30">
                {yearlySummary.map((item) => (
                  <tr key={item.year}>
                    <td className="px-4 py-4 font-semibold text-white">{item.year}</td>
                    <td className="px-4 py-4 text-slate-200">{item.read}</td>
                    <td className="px-4 py-4 text-slate-200">{item.favorite}</td>
                    <td className="px-4 py-4 text-slate-400">{item.focus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}
