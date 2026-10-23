import WhatsAppIcon from "@/components/WhatsAppIcon";

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/917206382346?text=Hi%20TriNetix%2C%20I%20want%20to%20discuss%20a%20project."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#25d366] text-white shadow-[0_4px_18px_rgba(37,211,102,0.45)] transition-transform duration-200 hover:scale-105 active:scale-95"
    >
      <WhatsAppIcon className="h-6 w-6" />
      <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-full bg-white px-3.5 py-1.5 text-[12.5px] font-medium text-[var(--foreground)] opacity-0 shadow-[0_2px_10px_rgba(18,32,25,0.12)] transition-opacity duration-200 group-hover:opacity-100 sm:block">
        Chat with us
      </span>
    </a>
  );
}
