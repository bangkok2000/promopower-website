import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-[60vh] px-6 sm:px-8 md:px-16 py-24 flex items-center justify-center">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-primary font-headline tracking-widest uppercase text-sm mb-4">404</p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-headline font-normal text-on-surface mb-6">
          Page Not Found
        </h1>
        <p className="text-lg text-on-surface-variant mb-10">
          The page you requested could not be found. It may have moved or no longer exists.
        </p>
        <Link
          href="/"
          className="bg-white/10 backdrop-blur-md text-on-surface border border-white/20 px-8 py-4 rounded-full font-headline font-normal inline-flex items-center gap-2 hover:bg-white/20 transition-all"
        >
          Return Home
        </Link>
      </div>
    </section>
  );
}
