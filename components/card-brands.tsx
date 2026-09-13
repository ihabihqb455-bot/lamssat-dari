export function CardBrands({ className }: { className?: string }) {
  return (
    <div className={className}>
      <div className="flex items-center gap-2">
        <span className="flex h-8 items-center rounded-md border border-border bg-background px-2.5 font-heading text-sm font-bold italic tracking-tight text-[#1a1f71]">
          VISA
        </span>
        <span className="relative flex h-8 items-center gap-1 rounded-md border border-border bg-background px-2.5">
          <span className="h-4 w-4 rounded-full bg-[#eb001b]" />
          <span className="-ml-2 h-4 w-4 rounded-full bg-[#f79e1b] opacity-90" />
        </span>
        <span className="flex h-8 items-center rounded-md border border-border bg-background px-2.5 font-heading text-sm font-bold tracking-tight text-[#c8102e]">
          CMI
        </span>
      </div>
    </div>
  )
}
