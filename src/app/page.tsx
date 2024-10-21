import { api, HydrateClient } from "@/trpc/server";
import { Button } from "@nextui-org/react";
import Link from "next/link";

export default async function Home() {
  void api.post.getLatest.prefetch();

  return (
    <HydrateClient>
      <main className="flex h-screen w-full items-center justify-center">
        <div className="text-center">
          <h1 className="mb-6 text-6xl font-light">
            Share Beautiful Docs instantly!
          </h1>
          <Link href="/auth">
            <Button variant="shadow" color="primary" disableRipple>
              Start Creating
            </Button>
          </Link>
        </div>
      </main>
    </HydrateClient>
  );
}
