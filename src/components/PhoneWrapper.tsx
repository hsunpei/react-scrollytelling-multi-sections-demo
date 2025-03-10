export const PhoneWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="relative flex h-full items-center justify-center">
        <div className="relative flex aspect-[9/17] h-full max-w-xl justify-center overflow-hidden rounded-2xl border-8 border-slate-600 drop-shadow-2xl">
          <div className="h-full w-full rounded-xl">{children}</div>
          <span className="absolute left-1/2 top-5 h-3 w-3 -translate-x-1/2 -translate-y-1/2 transform rounded-full border border-slate-600 bg-slate-600"></span>
        </div>
        <div className="absolute -right-1 top-20 h-10 rounded-md border-4 border-slate-600"></div>
        <div className="absolute -right-1 top-44 h-24 rounded-md border-4 border-slate-600"></div>
      </div>
    </div>
  );
};
