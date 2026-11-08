import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/wedding/Hero";
import { Invitation } from "@/components/wedding/Invitation";
import { Contact } from "@/components/wedding/Contact";
import { Countdown } from "@/components/wedding/Countdown";
import { Location } from "@/components/wedding/Location";
import { VenueInfo } from "@/components/wedding/VenueInfo";
import { Accounts } from "@/components/wedding/Accounts";
import { Rsvp } from "@/components/wedding/Rsvp";
import { Guestbook } from "@/components/wedding/Guestbook";
import { Footer } from "@/components/wedding/Footer";
import { Divider } from "@/components/wedding/Divider";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "손정원 · 이다빈의 모바일 청첩장" },
      { name: "description", content: "손정원과 이다빈의 결혼식에 초대합니다." },
      { property: "og:title", content: "손정원 · 이다빈의 모바일 청첩장" },
      { property: "og:description", content: "손정원과 이다빈의 결혼식에 초대합니다. " },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen w-full bg-foreground/5 flex justify-center">
      <main className="relative w-full max-w-[480px] min-h-screen bg-background text-foreground shadow-2xl overflow-hidden dot-pattern">
        <Hero />
        <Divider />
        <Invitation />
        <Divider />
        <Contact />
        <Divider />
        <Countdown />
        <Divider />
        <Location />
        <Divider />
        <VenueInfo />
        <Divider />
        <Accounts />
        <Divider />
        <Rsvp />
        <Divider />
        <Guestbook />
        <Divider />
        <Footer />
      </main>
      <Toaster position="top-center" />
    </div>
  );
}
