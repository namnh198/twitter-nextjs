export default function SidebarLink({ text, Icon, active }) {
  return (
    <div
      className={`flex items-center justify-center xl:justify-start text-lg space-x-3 hoverAnimation text-[#d9d9d9] ${
        active && "font-bold"
      }`}
    >
      <Icon className="h-7" />
      <span className="hidden xl:inline">{text}</span>
    </div>
  );
}
