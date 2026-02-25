interface LogoProps {
  dark?: boolean
}

export function Logo({ dark = false }: LogoProps) {
  return (
    <a href="#" className="flex items-center gap-2.5">
      <div className={`flex h-8 w-8 items-center justify-center text-[13px] font-bold tracking-tight ${dark ? "bg-orange-600 text-white" : "bg-zinc-900 text-white"}`}>
        LS
      </div>
      <div className="flex flex-col leading-none">
        <span className={`text-[14px] font-semibold tracking-tight ${dark ? "text-white" : "text-zinc-900"}`}>
          Commerce
        </span>
        <span className={`text-[10px] font-normal tracking-widest uppercase ${dark ? "text-zinc-500" : "text-zinc-400"}`}>
          GmbH
        </span>
      </div>
    </a>
  )
}
