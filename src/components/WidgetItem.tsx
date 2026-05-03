interface Props {
  title: string;
  children: React.ReactNode;
}

export const WidgetItem = ({ title, children }: Props) => {
  return (
    <div className="md:col-span-2 lg:col-span-1">
      <div className="h-full py-8 px-6 space-y-6 rounded-2xl border border-slate-700 bg-slate-800/50 shadow-sm hover:shadow-lg hover:shadow-cyan-900/10 transition-shadow">
        <div className="flex flex-col">
          <h5 className="text-xl text-slate-300 text-center">{title}</h5>
          <div className="mt-2 flex flex-col justify-center gap-4">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
