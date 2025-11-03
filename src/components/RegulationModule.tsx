import React, { useState } from "react";

const RegulationModule: React.FC = () => {
  const leagues = ["DLeague Australia", "DLeague USA", "DLeague Philippines"];
  const [selectedLeague, setSelectedLeague] = useState("DLeague Australia");

  const regulations: Record<string, string> = {
    "DLeague Australia": `
About our league rules and guidelines for DLeague

1. These rules are applicable only for the DLeague 2K24 Season.
2. These rules are in accordance with the tournament format.
3. These rules are subject to change and will be communicated internally among the players.

Player Eligibility
1. DLeague is a Filipino-Australian league. Players must be Filipino-blooded (either your Grandfather, Grandmother, Mother or Father came from Filipino bloodline).
2. DLeague is a mixed Youth & Men’s developmental basketball division.
3. Players must be fully paid to join & play in our basketball season.
4. Players who have played in professional leagues are not allowed in this league.
5. Players who are 16 years old and above are allowed to play in this league.
6. Players under 18 must have a signed parental waiver before the first game.
7. Registrants must be medically fit to join competitive sports.
8. A player cannot join more than one team, but may change teams within the first 5 rounds.
9. Players must have either Medicard or Private cover to join DLeague. The league doesn’t provide medical insurance.
10. DLeague is a recreational/developmental league. Players are screened to ensure enjoyable competition.
11. The league reserves the right to choose who plays based on screening and assessment.
12. Fill-ins and unregistered players are not allowed.
13. Violating player eligibility results in automatic team loss per game.
14. Player eligibility contests are allowed only within the first 3 rounds of the season.

Player Uniforms & Wearables
1. Players must wear complete uniforms for official games.
2. Earrings, rings, watches, and metallic accessories are not allowed.
3. Compression wear, warmers, and cultural headgear are allowed.
4. Sports goggles and fracture masks are allowed.

Gameplay Elimination Round
1. Single Round Robin format — teams play within their division.
2. Two 20-minute halves, running time except for last 2 minutes & OT.
3. Each player gets 5 fouls.
4. Two timeouts per half; time runs except last 2 mins & OT.
5. Roster changes allowed until 5th game, pending committee approval.
6. OT: 2 mins for first, 1 min for succeeding; fouls continue.
7. Forfeits incur -10 Team Avg and possible elimination.
8. Failure to notify forfeiture 24h prior incurs $250 AUD fine.
9. Division placement is final after announcement.
10. Minimum 5 players required to start; fewer later allowed if due to injury.
11. Team Average used as tiebreaker.
12. Videos cannot overturn results; used for misconduct review.
13. Two forfeits = elimination.
14. Round 1 forfeit = 50-0 score.
15. Minimum 4 games required for playoff eligibility and awards.

Post-season / Playoffs
1. Rosters locked after Elimination Round.
2. Only Top 8 teams per division qualify for Quarterfinals (knockout).
3. Semifinals and Finals are knockout rounds.
4. Grand Finals have stop-clock in 2nd half and 24s shot clock.
5. Two timeouts per quarter; 2-min OT (stop clock).

Major Player Awards
1. MVP: 70% stats, 25% team ranking, 5% votes.
2. Rookie of the Year: best 1st-year player.
3. DPOY: most blocks, team rank as tiebreaker.
4. Captain of the Year: top-seeded team.
5. Finals MVP: best Grand Finals performance.
6. Only Grand Finals champions get rings.
7. Division Finals MVP, All-Star Mentions, MIP, Sportsmanship Award.

Misconducts
1. Falsification = permanent ban.
2. Trash talk and violence not tolerated.
3. Intentional harm → suspension or ban.
4. Only captains/coaches may approach referees.
5. Suspended/banned players lose eligibility & awards.
6. Teams responsible for damages & crowd behavior.
7. Walk-offs = zero stats + $250 fine.
8. Crowd rule: disrespectful crowds = no-crowd penalty.

Injuries & Emergencies
1. No insurance; only first aid is provided.
2. Emergency (000) calls are player’s responsibility.
3. Injured players carried off cannot return.

Refunds & Cancellations
1. No refunds for uniforms.
2. No refunds after playing a game.
3. Refunds processed within 14 days to nominated bank account.
    `,

    "DLeague USA": `
League rules and guidelines for DLeague USA will be available soon.
    `,

    "DLeague Philippines": `
League rules and guidelines for DLeague Philippines will be available soon.
    `
  };

  return (
    <div className="p-6 bg-gray-900 text-white rounded-2xl max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">League Regulations</h2>

      <select
        value={selectedLeague}
        onChange={(e) => setSelectedLeague(e.target.value)}
        className="p-2 rounded-md bg-gray-800 text-white border border-gray-700"
      >
        {leagues.map((league) => (
          <option key={league} value={league}>
            {league}
          </option>
        ))}
      </select>

      <div className="mt-6 bg-gray-800 p-4 rounded-xl whitespace-pre-line text-gray-200 overflow-y-auto max-h-[70vh]">
        {regulations[selectedLeague]}
      </div>
    </div>
  );
};

export default RegulationModule;
