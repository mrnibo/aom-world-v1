import LoadingBear from "@/components/loader/LoadingBear";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: {
    default: "Contact",
    template: "%s | AoM World",
  },
  description:
    "View real-time leaderboard rankings for Age of Mythology World. Track top players and their stats.",
  keywords: [
    "Age of Mythology",
    "AoM World",
    "live leaderboard",
    "RTS game",
    " competitive gaming",
    "player rankings",
    "AoM stats",
    "AoM Leaderboard",
    "Aom",
  ],
};

export default function ContactPage() {
  return (
    <div className="flex flex-col gap-4 justify-center items-center h-screen">
      <LoadingBear />
      <h1 className="text-3xl font-bold">Contact Page</h1>
      <p className="text-lg text-center">Working on it...</p>
    </div>
  );
}
