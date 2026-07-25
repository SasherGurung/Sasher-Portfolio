export default function GridBackground() {
  return (
    <div className="absolute inset-0 -z-10 min-h-full w-full bg-black overflow-hidden">

      <div
        className="
          absolute inset-0
          [background-size:40px_40px]
          [background-image:linear-gradient(to_right,#303030_1px,transparent_1px),linear-gradient(to_bottom,#303030_1px,transparent_1px)]
        "
      />

      <div className="absolute -top-50 -left-50 h-[500px] w-[500px] bg-white/30 blur-[130px] rounded-full" />

      <div className="absolute -top-60 -right-60 h-[500px] w-[500px] bg-white/30 blur-[140px] rounded-full" />

      <div className="absolute -bottom-40 -left-30 h-[500px] w-[500px] bg-white/30 blur-[180px] rounded-full" />

      <div className="absolute -bottom-60 -right-60 h-[500px] w-[500px] bg-white/30 blur-[140px] rounded-full" />
    </div>
  );
}
