import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import {
  getUserCompanions,
  getUserSessions,
  getBookmarkedCompanions,
} from "@/lib/actions/companion.actions";
import Image from "next/image";
import CompanionsList from "@/components/CompanionsList";

const Profile = async () => {
  const user = await currentUser();

  if (!user) redirect("/sign-in");

  const companions = await getUserCompanions(user.id);
  const sessionHistory = await getUserSessions(user.id);
  const bookmarkedCompanions = await getBookmarkedCompanions(user.id);

  return (
    <main className="w-full px-4 py-8 lg:w-3/4 mx-auto space-y-10">
      {/* Profile Section */}
      <section className="flex justify-between gap-4 max-sm:flex-col items-center">
        <div className="flex gap-4 items-center">
          <Image
            src={user.imageUrl}
            alt={user.firstName || "User Avatar"}
            width={110}
            height={110}
            className="rounded-full object-cover"
          />
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-2xl">
              {user.firstName} {user.lastName}
            </h1>
            <p className="text-sm text-muted-foreground">
              {user.emailAddresses[0].emailAddress}
            </p>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="flex gap-4 flex-wrap">
          <div className="border border-black rounded-xl p-4 gap-2 flex flex-col items-start h-fit shadow-sm">
            <div className="flex gap-2 items-center">
              <Image
                src="/icons/check.svg"
                alt="checkmark"
                width={22}
                height={22}
              />
              <p className="text-2xl font-bold">{sessionHistory.length}</p>
            </div>
            <p className="text-sm text-muted-foreground">Lessons Completed</p>
          </div>
          <div className="border border-black rounded-xl p-4 gap-2 flex flex-col items-start h-fit shadow-sm">
            <div className="flex gap-2 items-center">
              <Image src="/icons/cap.svg" alt="cap" width={22} height={22} />
              <p className="text-2xl font-bold">{companions.length}</p>
            </div>
            <p className="text-sm text-muted-foreground">Companions Created</p>
          </div>
        </div>
      </section>

      {/* Accordion Sections */}
      <Accordion type="multiple" className="space-y-4">
        {/* Bookmarked */}
        <AccordionItem value="bookmarks">
          <AccordionTrigger className="text-xl lg:text-2xl font-semibold">
            Bookmarked Companions ({bookmarkedCompanions.length})
          </AccordionTrigger>
          <AccordionContent>
            <CompanionsList
              companions={bookmarkedCompanions}
              title="Bookmarked Companions"
            />
          </AccordionContent>
        </AccordionItem>

        {/* Recent Sessions */}
        <AccordionItem value="recent">
          <AccordionTrigger className="text-xl lg:text-2xl font-semibold">
            Recent Sessions
          </AccordionTrigger>
          <AccordionContent>
            <CompanionsList
              title="Recent Sessions"
              companions={sessionHistory}
            />
          </AccordionContent>
        </AccordionItem>

        {/* My Companions */}
        <AccordionItem value="companions">
          <AccordionTrigger className="text-xl lg:text-2xl font-semibold">
            My Companions ({companions.length})
          </AccordionTrigger>
          <AccordionContent>
            <CompanionsList title="My Companions" companions={companions} />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </main>
  );
};

export default Profile;
