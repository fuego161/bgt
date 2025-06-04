import { Seeder } from "./Seeder";

interface MechanicData {
	title: string;
	slug: string;
}

export class MechanicSeed extends Seeder {
	createSeedData(): MechanicData[] {
		return [
			{ ...MechanicSeed.generateTitleWithSlug("Action Drafting") },
			{ ...MechanicSeed.generateTitleWithSlug("Action Points") },
			{ ...MechanicSeed.generateTitleWithSlug("Action Queue") },
			{ ...MechanicSeed.generateTitleWithSlug("Action Retrieval") },
			{ ...MechanicSeed.generateTitleWithSlug("Alliances") },
			{
				...MechanicSeed.generateTitleWithSlug(
					"Area Majority / Influence"
				),
			},
			{ ...MechanicSeed.generateTitleWithSlug("Area Movement") },
			{ ...MechanicSeed.generateTitleWithSlug("Auction / Bidding") },
			{
				...MechanicSeed.generateTitleWithSlug(
					"Automatic Resource Growth"
				),
			},
			{ ...MechanicSeed.generateTitleWithSlug("Betting and Bluffing") },
			{ ...MechanicSeed.generateTitleWithSlug("Bribery") },
			{
				...MechanicSeed.generateTitleWithSlug(
					"Campaign / Battle Card Driven"
				),
			},
			{
				...MechanicSeed.generateTitleWithSlug(
					"Card Play Conflict Resolution"
				),
			},
			{ ...MechanicSeed.generateTitleWithSlug("Catch the Leader") },
			{ ...MechanicSeed.generateTitleWithSlug("Chaining") },
			{ ...MechanicSeed.generateTitleWithSlug("Closed Drafting") },
			{ ...MechanicSeed.generateTitleWithSlug("Communication Limits") },
			{ ...MechanicSeed.generateTitleWithSlug("Connections") },
			{ ...MechanicSeed.generateTitleWithSlug("Constrained Bidding") },
			{ ...MechanicSeed.generateTitleWithSlug("Contracts") },
			{ ...MechanicSeed.generateTitleWithSlug("Cooperative Game") },
			{
				...MechanicSeed.generateTitleWithSlug(
					"Critical Hits and Failures"
				),
			},
			{ ...MechanicSeed.generateTitleWithSlug("Deck Construction") },
			{
				...MechanicSeed.generateTitleWithSlug(
					"Deck, Bag, and Pool Building"
				),
			},
			{ ...MechanicSeed.generateTitleWithSlug("Deduction") },
			{ ...MechanicSeed.generateTitleWithSlug("Delayed Purchase") },
			{ ...MechanicSeed.generateTitleWithSlug("Dice Rolling") },
			{ ...MechanicSeed.generateTitleWithSlug("Die Icon Resolution") },
			{
				...MechanicSeed.generateTitleWithSlug(
					"Different Dice Movement"
				),
			},
			{ ...MechanicSeed.generateTitleWithSlug("End Game Bonuses") },
			{ ...MechanicSeed.generateTitleWithSlug("Events") },
			{ ...MechanicSeed.generateTitleWithSlug("Finale Ending") },
			{ ...MechanicSeed.generateTitleWithSlug("Follow") },
			{ ...MechanicSeed.generateTitleWithSlug("Force Commitment") },
			{ ...MechanicSeed.generateTitleWithSlug("Grid Coverage") },
			{ ...MechanicSeed.generateTitleWithSlug("Hand Management") },
			{ ...MechanicSeed.generateTitleWithSlug("Hexagon Grid") },
			{ ...MechanicSeed.generateTitleWithSlug("Hidden Victory Points") },
			{ ...MechanicSeed.generateTitleWithSlug("Hot Potato") },
			{ ...MechanicSeed.generateTitleWithSlug("Income") },
			{
				...MechanicSeed.generateTitleWithSlug(
					"Increase Value of Unchosen Resources"
				),
			},
			{ ...MechanicSeed.generateTitleWithSlug("Interrupts") },
			{ ...MechanicSeed.generateTitleWithSlug("Kill Steal") },
			{ ...MechanicSeed.generateTitleWithSlug("Ladder Climbing") },
			{ ...MechanicSeed.generateTitleWithSlug("Legacy Game") },
			{ ...MechanicSeed.generateTitleWithSlug("Loans") },
			{ ...MechanicSeed.generateTitleWithSlug("Lose a Turn") },
			{ ...MechanicSeed.generateTitleWithSlug("Map Addition") },
			{ ...MechanicSeed.generateTitleWithSlug("Map Deformation") },
			{ ...MechanicSeed.generateTitleWithSlug("Map Reduction") },
			{ ...MechanicSeed.generateTitleWithSlug("Market") },
			{ ...MechanicSeed.generateTitleWithSlug("Memory") },
			{ ...MechanicSeed.generateTitleWithSlug("Modular Board") },
			{ ...MechanicSeed.generateTitleWithSlug("Movement Points") },
			{ ...MechanicSeed.generateTitleWithSlug("Multi-Use Cards") },
			{ ...MechanicSeed.generateTitleWithSlug("Multiple Maps") },
			{
				...MechanicSeed.generateTitleWithSlug(
					"Narrative Choice / Paragraph"
				),
			},
			{ ...MechanicSeed.generateTitleWithSlug("Negotiation") },
			{ ...MechanicSeed.generateTitleWithSlug("Neighbour Scope") },
			{
				...MechanicSeed.generateTitleWithSlug(
					"Network and Route Building"
				),
			},
			{
				...MechanicSeed.generateTitleWithSlug(
					"Once-Per-Game Abilities"
				),
			},
			{ ...MechanicSeed.generateTitleWithSlug("Open Drafting") },
			{ ...MechanicSeed.generateTitleWithSlug("Pick-up and Deliver") },
			{ ...MechanicSeed.generateTitleWithSlug("Pieces as Map") },
			{ ...MechanicSeed.generateTitleWithSlug("Player Elimination") },
			{
				...MechanicSeed.generateTitleWithSlug(
					"Point to Point Movement"
				),
			},
			{ ...MechanicSeed.generateTitleWithSlug("Predictive Bid") },
			{ ...MechanicSeed.generateTitleWithSlug("Push Your Luck") },
			{ ...MechanicSeed.generateTitleWithSlug("Race") },
			{ ...MechanicSeed.generateTitleWithSlug("Role Playing") },
			{
				...MechanicSeed.generateTitleWithSlug(
					"Scenario / Mission / Campaign Game"
				),
			},
			{ ...MechanicSeed.generateTitleWithSlug("Score-and-Reset Game") },
			{ ...MechanicSeed.generateTitleWithSlug("Semi-Cooperative Game") },
			{ ...MechanicSeed.generateTitleWithSlug("Set Collection") },
			{ ...MechanicSeed.generateTitleWithSlug("Simulation") },
			{
				...MechanicSeed.generateTitleWithSlug(
					"Simultaneous Action Selection"
				),
			},
			{ ...MechanicSeed.generateTitleWithSlug("Solo / Solitaire Game") },
			{ ...MechanicSeed.generateTitleWithSlug("Speed Matching") },
			{ ...MechanicSeed.generateTitleWithSlug("Spelling") },
			{ ...MechanicSeed.generateTitleWithSlug("Square Grid") },
			{ ...MechanicSeed.generateTitleWithSlug("Storytelling") },
			{ ...MechanicSeed.generateTitleWithSlug("Sudden Death Ending") },
			{ ...MechanicSeed.generateTitleWithSlug("Take That") },
			{ ...MechanicSeed.generateTitleWithSlug("Team-Based Game") },
			{
				...MechanicSeed.generateTitleWithSlug(
					"Tech Trees / Tech Tracks"
				),
			},
			{ ...MechanicSeed.generateTitleWithSlug("Tile Placement") },
			{ ...MechanicSeed.generateTitleWithSlug("Track Movement") },
			{ ...MechanicSeed.generateTitleWithSlug("Trading") },
			{ ...MechanicSeed.generateTitleWithSlug("Traitor Game") },
			{ ...MechanicSeed.generateTitleWithSlug("Trick-taking") },
			{ ...MechanicSeed.generateTitleWithSlug("Turn Order: Auction") },
			{
				...MechanicSeed.generateTitleWithSlug(
					"Turn Order: Claim Action"
				),
			},
			{ ...MechanicSeed.generateTitleWithSlug("Turn Order: Pass Order") },
			{
				...MechanicSeed.generateTitleWithSlug(
					"Turn Order: Progressive"
				),
			},
			{ ...MechanicSeed.generateTitleWithSlug("Turn Order: Random") },
			{ ...MechanicSeed.generateTitleWithSlug("Turn Order: Role Order") },
			{ ...MechanicSeed.generateTitleWithSlug("Turn Order: Stat-Based") },
			{ ...MechanicSeed.generateTitleWithSlug("Turn Order: Time Track") },
			{ ...MechanicSeed.generateTitleWithSlug("Variable Phase Order") },
			{ ...MechanicSeed.generateTitleWithSlug("Variable Player Powers") },
			{ ...MechanicSeed.generateTitleWithSlug("Variable Set-up") },
			{
				...MechanicSeed.generateTitleWithSlug(
					"Victory Points as a Resource"
				),
			},
			{ ...MechanicSeed.generateTitleWithSlug("Voting") },
			{ ...MechanicSeed.generateTitleWithSlug("Worker Placement") },
			{
				...MechanicSeed.generateTitleWithSlug(
					"Worker Placement with Dice Workers"
				),
			},
			{
				...MechanicSeed.generateTitleWithSlug(
					"Worker Placement, Different Worker Types"
				),
			},
			{ ...MechanicSeed.generateTitleWithSlug("Zone of Control") },
		];
	}
}
