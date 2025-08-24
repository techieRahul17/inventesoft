export default function EventDetailsPage({
  eventName = "CodeOlympics",
  department = "DEPARTMENT OF COMPUTER SCIENCE AND ENGINEERING",
  prizes = { first: "Rs.7000", second: "Rs.3000", third: "Rs.2000" },
  description = "This is a coding competition based purely on Data structures and Algorithms. Participants will contest against each other in teams of 2 in a competitive programming contest.",
  domain = "CP",
  teamSize = "2",
  prizeDescription = "Prelims (Sabotage Round Included)\n" +
      "The first round is a prelims round where participants take part in a coding competition consisting of 3-5 questions; the questions are of easy-medium-hard levels. Participants are to switch positions with their teammates every 3 minutes.(Special sabotage round included 😈)",
  qualifyingCriteria = "Guess the Code\n" +
      "This round has the teams trying to guess the code from executable files. Teams will give their input and view the output, then code the logic by analyzing input and output, which will be verified manually.",
  eventHeads = [
    { name: "Name 1", phone: "0000000000" },
    { name: "Name 1", phone: "0000000000" },
  ],
}) {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat p-8"
      style={{
        backgroundImage: `url('/vintage-aged-paper-texture-background.png')`,
      }}
    >
      {/* Content Container */}
      <div className="max-w-2xl mx-auto py-12">
        {/* Event Title Card */}
        <div className="text-center mb-8">
          <div className="inline-block bg-black text-white px-8 py-3 rounded-full text-xl font-bold mb-4">
            {eventName}
          </div>
          <p className="text-gray-800 font-bold text-sm tracking-wider leading-tight">
            HOSTED BY
            <br />
            {department}
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8 mx-4">
          <div className="text-center">
            <div className="grid grid-cols-3 items-center text-gray-800 font-bold">
              {/* First Prize - Left */}
              <div className="flex items-center justify-start gap-2">
                <img src="/gold.png" alt="First Prize" className="w-20 h-30" />
                <span>{prizes.first}</span>
              </div>

              {/* Second Prize - Center */}
              <div className="flex items-center justify-center gap-2">
                <img src="/silver.png" alt="Second Prize" className="w-20 h-30" />
                <span>{prizes.second}</span>
              </div>

              {/* Third Prize - Right */}
              <div className="flex items-center justify-end gap-2">
                <img src="/bronze.png" alt="Third Prize" className="w-20 h-30" />
                <span>{prizes.third}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8 mx-4">
          <p className="text-gray-800 text-sm leading-relaxed text-center">{description}</p>
        </div>

        <div className="flex justify-center gap-4 mb-8">
          <div className="bg-black text-white px-6 py-2 rounded-full font-bold text-sm">Domain: {domain}</div>
          <div className="bg-black text-white px-6 py-2 rounded-full font-bold text-sm">Team: {teamSize}</div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8 mx-4">
          <p className="text-gray-800 text-sm leading-relaxed mb-4 text-center">
            <strong>Prelims(Sabotage Round Included)</strong>
          </p>
          <p className="text-gray-800 text-sm leading-relaxed text-center">{prizeDescription}</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8 mx-4">
          <p className="text-gray-800 text-sm leading-relaxed text-center">
            <strong>Guess the code</strong>
            <br />
            {qualifyingCriteria}
          </p>
        </div>

        <div className="text-center">
          <div className="inline-block bg-black text-orange-500 px-8 py-3 rounded-full text-lg font-bold mb-6">
            Event Head
          </div>

          <div className="flex justify-center gap-4">
            {eventHeads.map((head, index) => (
              <div
                key={`${head.name}-${head.phone}-${index}`}
                className="bg-black text-white px-6 py-4 rounded-lg min-w-[140px]"
              >
                <div className="font-bold text-sm mb-1">{head.name}</div>
                <div className="font-bold text-xs">{head.phone}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
