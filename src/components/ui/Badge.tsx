const Badge = ({ text, className }: { text: string; className?: string }) => {
  return (
    <div
      className={`inline-flex w-fit flex-row items-center justify-center gap-[8px] rounded-[6px] bg-[#EDE9FE] px-[10px] py-[4px] ${className}`}
    >
      <div className="h-[6px] w-[6px] rounded-full bg-[#8B5CF6]"></div>
      <p className="whitespace-nowrap text-center font-mono text-[12px] font-[500] uppercase leading-[20px] tracking-[0.06em] text-[#8B5CF6]">
        {text}
      </p>
    </div>
  );
};

export default Badge;