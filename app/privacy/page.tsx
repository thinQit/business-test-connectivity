const Image = "img" as any;

export default function PrivacyPage() {
  return (
    <div className="section">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
            Privacy
          </p>
          <h1 className="mt-3 text-4xl md:text-5xl font-bold tracking-tighter">
            Privacy policy
          </h1>
          <p className="mt-5 text-muted-foreground">
            This is placeholder policy text for the Business demo site.
          </p>

          <div className="mt-10 relative overflow-hidden rounded-2xl bg-card">
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/35 to-black/75" />
            <Image
              src="/images/product-2.png"
              alt="Privacy visual"
              width={1400}
              height={900}
              className="h-[260px] w-full object-cover md:h-[320px]"
              priority
            />
            <div className="absolute inset-0 flex items-end p-6 md:p-10">
              <p className="text-white text-lg font-semibold tracking-tighter">
                Minimal collection. Maximum clarity.
              </p>
            </div>
          </div>

          <div className="mt-10 space-y-4 text-muted-foreground">
            <p>
              We may collect information you submit via forms (e.g., name, email,
              message) to respond to inquiries.
            </p>
            <p>
              Replace this page with your real policy before production use.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
