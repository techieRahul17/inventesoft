import EventDetailsPage from "../components/EventDetailsPage"

export default function Home() {
  const codeOlympicsData = {
    eventName: "CodeOlympics",
    department: "DEPARTMENT OF COMPUTER SCIENCE AND ENGINEERING",
    prizes: { first: "Rs.7000", second: "Rs.3000", third: "Rs.2000" },
    description:
        "Join us in coding competition hosted by our computer science and engineering department. Participants will compete against each other in a series of 2 to 3 competitive programming contest.",
    domain: "CP",
    teamSize: "2",
    prizeDescription:
        "The first round is a team round where participants solve algorithmic coding competition problems. The top teams will advance to the final round where they will compete individually to solve 3 problems within the time limit. Winners will be selected based on the number of problems solved.",
    qualifyingCriteria:
        "This round may be teams to make the rounds from intermediate level. Teams will give their input and solve the coding challenges. The top teams will advance to the next round which will be without mentoring.",
    eventHeads: [
      { name: "Name1", phone: "0000000000" },
      { name: "Name1", phone: "0000000000" },
    ],
  }

  return (
      <div>
        <EventDetailsPage {...codeOlympicsData} />
      </div>
  )
}
