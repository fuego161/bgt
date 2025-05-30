import { Seeder } from "./Seeder";

interface MechanicData {
	title: string;
	slug: string;
}

export class MechanicSeed extends Seeder {
	constructor() {
		super();
	}

	createSeedData(): MechanicData[] {
		return [
			{ ...this.generateTitleWithSlug("Action Drafting") },
			{ ...this.generateTitleWithSlug("Action Points") },
			{ ...this.generateTitleWithSlug("Action Queue") },
			{ ...this.generateTitleWithSlug("Action Retrieval") },
			{ ...this.generateTitleWithSlug("Alliances") },
			{ ...this.generateTitleWithSlug("Area Majority / Influence") },
			{ ...this.generateTitleWithSlug("Area Movement") },
			{ ...this.generateTitleWithSlug("Auction / Bidding") },
			{ ...this.generateTitleWithSlug("Automatic Resource Growth") },
			{ ...this.generateTitleWithSlug("Betting and Bluffing") },
			{ ...this.generateTitleWithSlug("Bribery") },
			{ ...this.generateTitleWithSlug("Campaign / Battle Card Driven") },
			{ ...this.generateTitleWithSlug("Card Play Conflict Resolution") },
			{ ...this.generateTitleWithSlug("Catch the Leader") },
			{ ...this.generateTitleWithSlug("Chaining") },
			{ ...this.generateTitleWithSlug("Closed Drafting") },
			{ ...this.generateTitleWithSlug("Communication Limits") },
			{ ...this.generateTitleWithSlug("Connections") },
			{ ...this.generateTitleWithSlug("Constrained Bidding") },
			{ ...this.generateTitleWithSlug("Contracts") },
			{ ...this.generateTitleWithSlug("Cooperative Game") },
			{ ...this.generateTitleWithSlug("Critical Hits and Failures") },
			{ ...this.generateTitleWithSlug("Deck Construction") },
			{ ...this.generateTitleWithSlug("Deck, Bag, and Pool Building") },
			{ ...this.generateTitleWithSlug("Deduction") },
			{ ...this.generateTitleWithSlug("Delayed Purchase") },
			{ ...this.generateTitleWithSlug("Dice Rolling") },
			{ ...this.generateTitleWithSlug("Die Icon Resolution") },
			{ ...this.generateTitleWithSlug("Different Dice Movement") },
			{ ...this.generateTitleWithSlug("End Game Bonuses") },
			{ ...this.generateTitleWithSlug("Events") },
			{ ...this.generateTitleWithSlug("Finale Ending") },
			{ ...this.generateTitleWithSlug("Follow") },
			{ ...this.generateTitleWithSlug("Force Commitment") },
			{ ...this.generateTitleWithSlug("Grid Coverage") },
			{ ...this.generateTitleWithSlug("Hand Management") },
			{ ...this.generateTitleWithSlug("Hexagon Grid") },
			{ ...this.generateTitleWithSlug("Hidden Victory Points") },
			{ ...this.generateTitleWithSlug("Hot Potato") },
			{ ...this.generateTitleWithSlug("Income") },
			{
				...this.generateTitleWithSlug(
					"Increase Value of Unchosen Resources"
				),
			},
			{ ...this.generateTitleWithSlug("Interrupts") },
			{ ...this.generateTitleWithSlug("Kill Steal") },
			{ ...this.generateTitleWithSlug("Ladder Climbing") },
			{ ...this.generateTitleWithSlug("Legacy Game") },
			{ ...this.generateTitleWithSlug("Loans") },
			{ ...this.generateTitleWithSlug("Lose a Turn") },
			{ ...this.generateTitleWithSlug("Map Addition") },
			{ ...this.generateTitleWithSlug("Map Deformation") },
			{ ...this.generateTitleWithSlug("Map Reduction") },
			{ ...this.generateTitleWithSlug("Market") },
			{ ...this.generateTitleWithSlug("Memory") },
			{ ...this.generateTitleWithSlug("Modular Board") },
			{ ...this.generateTitleWithSlug("Movement Points") },
			{ ...this.generateTitleWithSlug("Multi-Use Cards") },
			{ ...this.generateTitleWithSlug("Multiple Maps") },
			{ ...this.generateTitleWithSlug("Narrative Choice / Paragraph") },
			{ ...this.generateTitleWithSlug("Negotiation") },
			{ ...this.generateTitleWithSlug("Neighbour Scope") },
			{ ...this.generateTitleWithSlug("Network and Route Building") },
			{ ...this.generateTitleWithSlug("Once-Per-Game Abilities") },
			{ ...this.generateTitleWithSlug("Open Drafting") },
			{ ...this.generateTitleWithSlug("Pick-up and Deliver") },
			{ ...this.generateTitleWithSlug("Pieces as Map") },
			{ ...this.generateTitleWithSlug("Player Elimination") },
			{ ...this.generateTitleWithSlug("Point to Point Movement") },
			{ ...this.generateTitleWithSlug("Predictive Bid") },
			{ ...this.generateTitleWithSlug("Push Your Luck") },
			{ ...this.generateTitleWithSlug("Race") },
			{ ...this.generateTitleWithSlug("Role Playing") },
			{
				...this.generateTitleWithSlug(
					"Scenario / Mission / Campaign Game"
				),
			},
			{ ...this.generateTitleWithSlug("Score-and-Reset Game") },
			{ ...this.generateTitleWithSlug("Semi-Cooperative Game") },
			{ ...this.generateTitleWithSlug("Set Collection") },
			{ ...this.generateTitleWithSlug("Simulation") },
			{ ...this.generateTitleWithSlug("Simultaneous Action Selection") },
			{ ...this.generateTitleWithSlug("Solo / Solitaire Game") },
			{ ...this.generateTitleWithSlug("Speed Matching") },
			{ ...this.generateTitleWithSlug("Spelling") },
			{ ...this.generateTitleWithSlug("Square Grid") },
			{ ...this.generateTitleWithSlug("Storytelling") },
			{ ...this.generateTitleWithSlug("Sudden Death Ending") },
			{ ...this.generateTitleWithSlug("Take That") },
			{ ...this.generateTitleWithSlug("Team-Based Game") },
			{ ...this.generateTitleWithSlug("Tech Trees / Tech Tracks") },
			{ ...this.generateTitleWithSlug("Tile Placement") },
			{ ...this.generateTitleWithSlug("Track Movement") },
			{ ...this.generateTitleWithSlug("Trading") },
			{ ...this.generateTitleWithSlug("Traitor Game") },
			{ ...this.generateTitleWithSlug("Trick-taking") },
			{ ...this.generateTitleWithSlug("Turn Order: Auction") },
			{ ...this.generateTitleWithSlug("Turn Order: Claim Action") },
			{ ...this.generateTitleWithSlug("Turn Order: Pass Order") },
			{ ...this.generateTitleWithSlug("Turn Order: Progressive") },
			{ ...this.generateTitleWithSlug("Turn Order: Random") },
			{ ...this.generateTitleWithSlug("Turn Order: Role Order") },
			{ ...this.generateTitleWithSlug("Turn Order: Stat-Based") },
			{ ...this.generateTitleWithSlug("Turn Order: Time Track") },
			{ ...this.generateTitleWithSlug("Variable Phase Order") },
			{ ...this.generateTitleWithSlug("Variable Player Powers") },
			{ ...this.generateTitleWithSlug("Variable Set-up") },
			{ ...this.generateTitleWithSlug("Victory Points as a Resource") },
			{ ...this.generateTitleWithSlug("Voting") },
			{ ...this.generateTitleWithSlug("Worker Placement") },
			{
				...this.generateTitleWithSlug(
					"Worker Placement with Dice Workers"
				),
			},
			{
				...this.generateTitleWithSlug(
					"Worker Placement, Different Worker Types"
				),
			},
			{ ...this.generateTitleWithSlug("Zone of Control") },
		];
	}
}
