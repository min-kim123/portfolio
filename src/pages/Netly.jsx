import netlypic from "../assets/netlypic.png";
import groupsImg from "../assets/netly/groups.jpeg";
import groupImg from "../assets/netly/group.jpeg";
import groupEventsImg from "../assets/netly/group_events.jpeg";
import groupJoinImg from "../assets/netly/group_join.png";
import groupBoardImg from "../assets/netly/group_board.jpeg";
import dashboardImg from "../assets/netly/dashboard.jpeg";
import profileImg from "../assets/netly/profile.jpeg";

export default function Netly() {
  const screenshots = [
    {
      src: groupImg,
      alt: "Group details",
      text: "View key club information all in one page. Icons on the left bar are for your personal events, clubs and applications, icons at top left are for general school-wide navigation, and top right are personal notifications/messages/profile. ",
    },
    {
      src: groupEventsImg,
      alt: "Group events",
      text: "Browse upcoming events with times, locations, and RSVP actions.",
    },
    {
      src: groupBoardImg,
      alt: "Club Board",
      text: "Club board member coffee chats.",
    },
    {
      src: groupJoinImg,
      alt: "Join group flow",
      text: "Join/apply flow with confirmation and next steps.",
    },
    {
      src: groupsImg,
      alt: "Groups explore",
      text: "Explore all student groups with filters and search.",
    },
    {
      src: profileImg,
      alt: "Profile",
      text: "Student profile with groups and engagement history.",
    },
    {
      src: dashboardImg,
      alt: "Dashboard",
      text: "Upcoming events for clubs you're a part of.",
    },
  ];
  return (
    <div>
      <div className="mx-6 mt-4">
        <h1 className="text-3xl mb-3 pb-2 text-left">Netly</h1>
        <a className="block text-left mb-1">
          My freshman year at NYU I noticed that the platform NYU paid for to
          allow students to access all NYU clubs and events was not
          user-friendly, so I decided to build a better one. You can see the
          clickable prototype here:
        </a>
        <a
          href="https://www.figma.com/proto/kurWnzRhsojtvffINrrlSH/just-nyu?node-id=50-487&starting-point-node-id=8%3A2271&hide-ui=1"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 underline text-left block mb-2"
        >
          https://www.figma.com/proto/kurWnzRhsojtvffINrrlSH/just-nyu?node-id=50-487&starting-point-node-id=8%3A2271&hide-ui=1
        </a>
        <div className="p-2 md:p-4">
          <div className="space-y-8 max-w-5xl">
            {screenshots.map((shot, idx) => (
              <div key={idx} className="w-full rounded-md overflow-hidden">
                <img
                  src={shot.src}
                  alt={shot.alt ?? `Netly screenshot ${idx + 1}`}
                  className="w-full h-auto block"
                  style={{ clipPath: "inset(1px 1px 3px 1px)" }}
                />
                {shot.text && (
                  <p className="mt-2 text-left text-gray-700">{shot.text}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
