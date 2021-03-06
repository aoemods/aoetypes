/** @noSelfInFile */

/**
 * Create a AlliedCombatFitness scoring function.
 * Returns 1.0 to 0.0, based on how the allied combat fitness is. 1.0 if the allied fitness is at or below minFitness, 0.0 if fitness is above the maxFitness, smooth transition in between. If highFitnessIsGood, returns 0.0 to 1.0 instead. 0.0 if at or below minFitness and 1.0 if at or above maxFitness.
 */
declare function AIProductionScoring_AlliedCombatFitness(aiPlayer: PlayerID, minFitness: number, maxFitness: number, aiArmyType: number, highFitnessIsGood: boolean): any;

/**
 * Create a AlliedCombatFitness scoring function (versus strongest enemy).
 * Returns 1.0 to 0.0, based on how the allied combat fitness is. 1.0 if the fitness is at or below minFitness, 0.0 if fitness is above the maxFitness, smooth transition in between. If highFitnessIsGood, returns 0.0 to 1.0 instead. 0.0 if at or below minFitness and 1.0 if at or above maxFitness.
 */
declare function AIProductionScoring_AlliedCombatFitnessVsStrongestEnemy(aiPlayer: PlayerID, minFitness: number, maxFitness: number, aiArmyType: number, highFitnessIsGood: boolean): any;

/**
 * Create a AlliedCombatFitness scoring function (versus the weakest enemy).
 * Returns 1.0 to 0.0, based on how the allied combat fitness is. 1.0 if the fitness is at or below minFitness, 0.0 if fitness is above the maxFitness, smooth transition in between. If highFitnessIsGood, returns 0.0 to 1.0 instead. 0.0 if at or below minFitness and 1.0 if at or above maxFitness.
 */
declare function AIProductionScoring_AlliedCombatFitnessVsWeakestEnemy(aiPlayer: PlayerID, minFitness: number, maxFitness: number, aiArmyType: number, highFitnessIsGood: boolean): any;

/**
 * Check if now is an appropriate time to be making scoring functions.
 * Score functions should only be made within functions referenced by ProductionGroups
 */
declare function AIProductionScoring_CanPushProductionScoringFunction(aiPlayer: PlayerID): any;

/**
 * Create a ClampedScoringFunction scoring function.
 * Clamps the returned value of the inner scoring function
 */
declare function AIProductionScoring_ClampedScoringFunction(aiPlayer: PlayerID, min: number, max: number, innerScoringFunction: any): any;

/**
 * Create a CounterScore scoring function
 * If a item is a chosen counter it will get the score = (baseScoreContributuion + (1 - baseScoreContributuion) * counter score)
 */
declare function AIProductionScoring_CounterScore(aiPlayer: PlayerID, baseScoreContributuion: number): any;

/**
 * Create a DropOffScore scoring function.
 * Returns positive score if drop off is required to either serve gathering of a resource or improve existing gathering
 */
declare function AIProductionScoring_DropOffScore(aiPlayer: PlayerID): any;

/**
 * Create a EntityCombatUpgrade scoring function.
 * Returns positive score if entity's combat fitness is improved. The aforementioned entity is the entity that the upgrade is being produce on.
 */
declare function AIProductionScoring_EntityCombatUpgrade(aiPlayer: PlayerID): any;

/**
 * Create an IslandNeedingExpansionBase scoring function.
 * Returns 1.0f if there is an island requiring an expansion base
 */
declare function AIProductionScoring_IslandNeedingExpansionBase(aiPlayer: PlayerID): any;

/**
 * Create a LackOfSecuredResourceDeposits scoring function.
 * Returns between 0 and 1, 1 if the total sum of secured resource deposits is less or equal to scarce amount, 0 if the amount is equal to or greater than well off amount, lerps in between
 */
declare function AIProductionScoring_LackOfSecuredResourceDeposits(aiPlayer: PlayerID, resourceType: number, scarceAmount: number, wellOffAmount: number): any;

/**
 * Create a LuaScoringFunction scoring function.
 * Takes a reference to a lua function. Lua function will be called and passed AIPlayer and Pbg. Lua function is expected to return a value >= 0.0 DO NOT call any methods that do stuff to the AIPlayer in your referenced lua function. The referenced lua function must exist within the player's lua context
 */
declare function AIProductionScoring_LuaScoringFunction(aiPlayer: PlayerID, scoringFunction: any): any;

/**
 * Create a MaxPopCapPercentage scoring function
 * targetPopulationPercentageAlive should be in range 0.0 -> 1.0. Return 1.0f as long as the combined population of the production item /group does not exceed a percentage of the player's max pop cap. If groupPopulation == true then all members of the item's Production Group are counted towards the current population to be compared against the target population.
 */
declare function AIProductionScoring_MaxPopCapPercentage(aiPlayer: PlayerID, targetPopulationPercentageAlive: number, groupPopulation: boolean): any;

/**
 * Create a MaxScoringFunction scoring function.
 * Returns the max value of the inner scoring functions
 */
declare function AIProductionScoring_MaxScoringFunction(aiPlayer: PlayerID, innerScoringFunction: Vector): any;

/**
 * Create a MaxWeaponDamage scoring function.
 * Units max weapon damage is normalized by max damage. (returns between 0.0 and 1.0)
 */
declare function AIProductionScoring_MaxWeaponDamage(aiPlayer: PlayerID, maxDamage: number): any;

/**
 * Create a MilitaryPlayerUpgrade scoring function.
 * Quantifies how a player upgrade will improve the current army's combat fitness. Result = 1 - (1  - combat_fitness_improvment)^upgradeExponent
 */
declare function AIProductionScoring_MilitaryPlayerUpgrade(aiPlayer: PlayerID, upgradeExponent: number): any;

/**
 * Create a MinimumGameTime scoring function.
 * minGameTime is time from start in seconds. Returns 0.0 until minGameTime has passed, 1.0f after.
 */
declare function AIProductionScoring_MinimumGameTime(aiPlayer: PlayerID, minGameTime: number): any;

/**
 * Create a MultipleProduced scoring function
 * Item will get a score of 1 +(additionalFactor * number of additional produced)
 */
declare function AIProductionScoring_MultipleProduced(aiPlayer: PlayerID, additionalFactor: number): any;

/**
 * Create a MultiplyListScoringFunction scoring function.
 * Takes a list of scoring functions and multiplies them together. This scoring function can be paired with MaxScoringFunction to generate OR scoring expressions, such as Max(IslandNeedingExpansionBase, (ProductionQueueContention * TimeToAcquire))
 */
declare function AIProductionScoring_MultiplyListScoringFunction(aiPlayer: PlayerID, innerScoringFunction: Vector): any;

/**
 * Create a NavalTransportRequired scoring function.
 * Returns 0.0 -> 1.0, depending on strategic island decisions that would require transport
 */
declare function AIProductionScoring_NavalTransportRequired(aiPlayer: PlayerID): any;

/**
 * Create an NotProducedRecently scoring function.
 * Returns 1.0f if the item was not produced within the time period supplied, 0.0f otherwise
 */
declare function AIProductionScoring_NotProducedRecently(aiPlayer: PlayerID, timePeriodSeconds: number): any;

/**
 * Create a OnlyProduceOneAtATime scoring function.
 * Returns 0.0 while another item of the same type is being produced
 */
declare function AIProductionScoring_OnlyProduceOneAtATime(aiPlayer: PlayerID): any;

/**
 * Create a PlannedPlacementScore scoring function.
 * Returns the value of the planned placement, returns 0.0 if no planned placement Will return 0.0 if placement score is below minPlacementScore. Set minPlacementScore < 0.0 to ignore this minimum filtering.
 */
declare function AIProductionScoring_PlannedPlacementScore(aiPlayer: PlayerID, minPlacementScore: number): any;

/**
 * Create a PlayerGatheringUpgrade scoring function
 * Result is gatheringImprovment * improvementScalingFactor
 */
declare function AIProductionScoring_PlayerGatheringUpgrade(aiPlayer: PlayerID, improvementScalingFactor: number, approxDistToDeposit: number): any;

/**
 * Create an AIPlayersOnDifferentIslands scoring function.
 * Returns 1.0 if any players are on different pathfinding islands, 0 if they are all on the same island
 */
declare function AIProductionScoring_PlayersOnDifferentIslands(aiPlayer: PlayerID): any;

/**
 * Create a PopCapGenerator scoring function.
 * Returns 1.0 score if the item generates required pop cap
 */
declare function AIProductionScoring_PopCapGenerator(aiPlayer: PlayerID): any;

/**
 * Create a PopulationPercentage scoring function
 * targetPopulationPercentageAlive should be in range 0.0 -> 1.0. Score will approach zero as an item's population (as a percentage of the global population) approaches the target, i.e. score =  1.0f - (currentPercentage / target)^dropOffFactor;  The global population is number of squads or structures belonging to the player alive. If groupPopulation == true then all members of the item's Production Group are counted towards the current population to be compared against the global population. if useSquadPopulation == true, number of squads will be used in calculation instead of checking if the item pbg corresponds to a squad or building
 */
declare function AIProductionScoring_PopulationPercentage(aiPlayer: PlayerID, targetPopulationPercentageAlive: number, scoreDropOffFactor: number, groupPopulation: boolean, useSquadPopulation: boolean): any;

/**
 * Create a PresenceOfEnemyTypes scoring function
 * Every time a unit type is observed it's weight is added to the return value of this scoring function. if squadTypes == false, then entity types assumed. Max return value is 1.0
 */
declare function AIProductionScoring_PresenceOfEnemyTypes(aiPlayer: PlayerID, weights: number, squadTypes: boolean): any;

/**
 * Create a PresenceOfMyTypes scoring function
 * Every time a unit type is observed it's weight is added to the return value of this scoring function. if squadTypes == false, then entity types assumed. Max return value is 1.0
 */
declare function AIProductionScoring_PresenceOfMyTypes(aiPlayer: PlayerID, weights: number, squadTypes: boolean): any;

/**
 * Create a ProductionQueueContention scoring function.
 * Returns a score of productionQueueContention / normalFactor. productionQueueContention is the number of contentions recorded for the associated item (which is a production building), normalFactor is clamped >= 1
 */
declare function AIProductionScoring_ProductionQueueContention(aiPlayer: PlayerID, contentionThreshold: number, normalFactor: number): any;

/**
 * Create an RemainingPersonnelPopCap scoring function.
 * Returns 1.0f if there is enough remaining personnel pop cap, 0.0f otherwise
 */
declare function AIProductionScoring_RemainingPersonnelPopCap(aiPlayer: PlayerID, requiredRemainingPop: number): any;

/**
 * Create a ResourceGeneratorScore scoring function.
 * Gives positive score if the item produces required resources
 */
declare function AIProductionScoring_ResourceGeneratorScore(aiPlayer: PlayerID): any;

/**
 * Create an AIShouldConsiderNaval scoring function.
 * Returns 1.0 if players start on different islands or there are large bodies of water on the map
 */
declare function AIProductionScoring_ShouldConsiderNaval(aiPlayer: PlayerID): any;

/**
 * Create a StrategicIntention scoring function
 * Weights table format: { ["weight name"] = weight, } The score is the sum of current intention values * weight, divided by the sum of weights Ex: (currentSiegeIntention* siegeIntentionWeight)/siegeIntentionWeight
 */
declare function AIProductionScoring_StrategicIntention(aiPlayer: PlayerID, weights: number): any;

/**
 * Create a TierUpgrade scoring function.
 * Returns 1.0f if the given BuildInfo is a Player Upgrade that unlocks higher tier of existing units
 */
declare function AIProductionScoring_TierUpgrade(aiPlayer: PlayerID): any;

/**
 * Create a TimeToAcquire scoring function
 * TimeToAcquire returns values between 0 and 1 and penalizes things that need lots of resources or prerequisites to be produced. Score will approach 0.01 as the time to build something approaches maxTimeSeconds. Time to build something is the sum of the time to gather the outstanding resources, time to build the item, and time to build the requirements of the item
 */
declare function AIProductionScoring_TimeToAcquire(aiPlayer: PlayerID, maxTimeSeconds: number, includeTimeToGather: boolean, includeTimeToBuildThis: boolean, includeTimeToBuildRequirements: boolean): any;

/**
 * Create a ResourceDesireVsIncome scoring function.
 * Returns 0.0 if no safe trade routes exist, 1.0 otherwise.
 */
declare function AIProductionScoring_TradeRouteExistsScore(aiPlayer: PlayerID, landRoute: boolean): any;

/**
 * Create a UnderCountLimit scoring function
 * Keeps an item within limits. If groupPopulation == true then all members of the item's Production Group are counted towards the current population to be compared against the limit.
 */
declare function AIProductionScoring_UnderCountLimit(aiPlayer: PlayerID, maxAlive: number, maxEverProduced: number, groupPopulation: boolean): any;

/**
 * Returns a boolean value from the AIPlayer's state model corresponding to the given key.
 */
declare function AIPlayer_GetStateModelBool(aiPlayer: PlayerID, key: string): any;

/**
 * Returns a float value from the AIPlayer's state model corresponding to the given key.
 */
declare function AIPlayer_GetStateModelFloat(aiPlayer: PlayerID, key: string): any;

/**
 * Returns an integer value from the AIPlayer's state model corresponding to the given key.
 */
declare function AIPlayer_GetStateModelInt(aiPlayer: PlayerID, key: string): any;

/**
 * Returns a PropertyBagGroup value from the AIPlayer's state model corresponding to the given key.
 */
declare function AIPlayer_GetStateModelPBG(aiPlayer: PlayerID, key: string): any;

/**
 * Returns a table of targets from the AIPlayer's state model corresponding to the given key.
 */
declare function AIPlayer_GetStateModelTargetListEntries(aiPlayer: PlayerID, key: string): any;

/**
 * Clears a TargetHandle value in the AISquad's state model corresponding to the given key and table row index (0 based).
 */
declare function AISquad_ClearStateModelEnumTableTarget(aiSquad: SquadID, key: string, tableRowIndex: number): any;

/**
 * Clears a TargetHandle value in the AISquad's state model corresponding to the given key.
 */
declare function AISquad_ClearStateModelTarget(aiSquad: SquadID, key: string): any;

/**
 * Returns a boolean value from the AISquad's state model corresponding to the given key.
 */
declare function AISquad_GetStateModelBool(aiSquad: SquadID, key: string): any;

/**
 * Returns an Entity value from the AISquad's state model corresponding to the given key.
 */
declare function AISquad_GetStateModelEntityTarget(aiSquad: SquadID, key: string): any;

/**
 * Returns a boolean value from the AISquad's state model corresponding to the given key and table row index (0 based).
 */
declare function AISquad_GetStateModelEnumTableBool(aiSquad: SquadID, key: string, tableRowIndex: number): any;

/**
 * Returns an Entity value from the AISquad's state model corresponding to the given key and table row index (0 based).
 */
declare function AISquad_GetStateModelEnumTableEntityTarget(aiSquad: SquadID, key: string, tableRowIndex: number): any;

/**
 * Returns a float value from the AISquad's state model corresponding to the given key and table row index (0 based).
 */
declare function AISquad_GetStateModelEnumTableFloat(aiSquad: SquadID, key: string, tableRowIndex: number): any;

/**
 * Returns an integer value from the AISquad's state model corresponding to the given key and table row index (0 based).
 */
declare function AISquad_GetStateModelEnumTableInt(aiSquad: SquadID, key: string, tableRowIndex: number): any;

/**
 * Returns a pbg value from the AISquad's state model corresponding to the given key and table row index (0 based).
 */
declare function AISquad_GetStateModelEnumTablePBG(aiSquad: SquadID, key: string, tableRowIndex: number): any;

/**
 * Returns a Player value from the AISquad's state model corresponding to the given key and table row index (0 based).
 */
declare function AISquad_GetStateModelEnumTablePlayerTarget(aiSquad: SquadID, key: string, tableRowIndex: number): any;

/**
 * Returns a Squad value from the AISquad's state model corresponding to the given key and table row index (0 based).
 */
declare function AISquad_GetStateModelEnumTableSquadTarget(aiSquad: SquadID, key: string, tableRowIndex: number): any;

/**
 * Returns a Vector3f value from the AISquad's state model corresponding to the given key and table row index (0 based).
 */
declare function AISquad_GetStateModelEnumTableVector3f(aiSquad: SquadID, key: string, tableRowIndex: number): any;

/**
 * Returns a float value from the AISquad's state model corresponding to the given key.
 */
declare function AISquad_GetStateModelFloat(aiSquad: SquadID, key: string): any;

/**
 * Returns an integer value from the AISquad's state model corresponding to the given key.
 */
declare function AISquad_GetStateModelInt(aiSquad: SquadID, key: string): any;

/**
 * Returns a pbg value from the AISquad's state model corresponding to the given key.
 */
declare function AISquad_GetStateModelPBG(aiSquad: SquadID, key: string): any;

/**
 * Returns a Player value from the AISquad's state model corresponding to the given key.
 */
declare function AISquad_GetStateModelPlayerTarget(aiSquad: SquadID, key: string): any;

/**
 * Returns a Squad value from the AISquad's state model corresponding to the given key.
 */
declare function AISquad_GetStateModelSquadTarget(aiSquad: SquadID, key: string): any;

/**
 * Returns a Vector3f value from the AISquad's state model corresponding to the given key.
 */
declare function AISquad_GetStateModelVector3f(aiSquad: SquadID, key: string): any;

/**
 * Sets a boolean value in the AISquad's state model corresponding to the given key.
 */
declare function AISquad_SetStateModelBool(aiSquad: SquadID, key: string, value: boolean): void;

/**
 * Sets an Entity TargetHandle value in the AISquad's state model corresponding to the given key.
 */
declare function AISquad_SetStateModelEntityTarget(aiSquad: SquadID, key: string, value: EntityID): void;

/**
 * Sets a boolean value in the AISquad's state model corresponding to the given key and table row index (0 based).
 */
declare function AISquad_SetStateModelEnumTableBool(aiSquad: SquadID, key: string, tableRowIndex: number, value: boolean): void;

/**
 * Sets an Entity TargetHandle value in the AISquad's state model corresponding to the given key and table row index (0 based).
 */
declare function AISquad_SetStateModelEnumTableEntityTarget(aiSquad: SquadID, key: string, tableRowIndex: number, value: EntityID): void;

/**
 * Sets a float value in the AISquad's state model corresponding to the given key and table row index (0 based).
 */
declare function AISquad_SetStateModelEnumTableFloat(aiSquad: SquadID, key: string, tableRowIndex: number, value: number): void;

/**
 * Sets an integer value in the AISquad's state model corresponding to the given key and table row index (0 based).
 */
declare function AISquad_SetStateModelEnumTableInt(aiSquad: SquadID, key: string, tableRowIndex: number, value: number): void;

/**
 * Sets a pbg value in the AISquad's state model corresponding to the given key and table row index (0 based).
 */
declare function AISquad_SetStateModelEnumTablePBG(aiSquad: SquadID, key: string, tableRowIndex: number, value: PropertyBagGroup): void;

/**
 * Sets a Player TargetHandle value in the AISquad's state model corresponding to the given key and table row index (0 based).
 */
declare function AISquad_SetStateModelEnumTablePlayerTarget(aiSquad: SquadID, key: string, tableRowIndex: number, value: PlayerID): void;

/**
 * Sets a Squad TargetHandle value in the AISquad's state model corresponding to the given key and table row index (0 based).
 */
declare function AISquad_SetStateModelEnumTableSquadTarget(aiSquad: SquadID, key: string, tableRowIndex: number, value: SquadID): void;

/**
 * Sets a Vector3f value in the AISquad's state model corresponding to the given key and table row index (0 based).
 */
declare function AISquad_SetStateModelEnumTableVector3f(aiSquad: SquadID, key: string, tableRowIndex: number, value: Position): void;

/**
 * Sets a float value in the AISquad's state model corresponding to the given key.
 */
declare function AISquad_SetStateModelFloat(aiSquad: SquadID, key: string, value: number): void;

/**
 * Sets an integer value in the AISquad's state model corresponding to the given key.
 */
declare function AISquad_SetStateModelInt(aiSquad: SquadID, key: string, value: number): void;

/**
 * Sets a pbg value in the AISquad's state model corresponding to the given key.
 */
declare function AISquad_SetStateModelPBG(aiSquad: SquadID, key: string, value: PropertyBagGroup): void;

/**
 * Sets a Player TargetHandle value in the AISquad's state model corresponding to the given key.
 */
declare function AISquad_SetStateModelPlayerTarget(aiSquad: SquadID, key: string, value: PlayerID): void;

/**
 * Sets a Squad TargetHandle value in the AISquad's state model corresponding to the given key.
 */
declare function AISquad_SetStateModelSquadTarget(aiSquad: SquadID, key: string, value: SquadID): void;

/**
 * Sets a Vector3f value in the AISquad's state model corresponding to the given key.
 */
declare function AISquad_SetStateModelVector3f(aiSquad: SquadID, key: string, value: Position): void;

/**
 * calculates a valid target position for a jump slide ability
 */
declare function AITactic_AdjustJumpSlideAbilityTarget(aiSquad: SquadID, abilityPBG: PropertyBagGroup, slideOffset: number, targetPosition: Position): any;

/**
 * Issue an AI move command to a squad
 */
declare function AITactic_AICommandSquadMove(aiSquad: SquadID, target: Position, acceptableProximity: number, reverseMove: boolean): any;

/**
 * Get tactic priority for a squad.
 * Return -1 if the tactic type isn't found.
 */
declare function AITactic_GetTacticPriority(pSquad: SquadID, tacticType: AITacticType): any;

/**
 * Get a table of all of the EBPs that match a particular EntityType. You can pass in a table of multiple EntityTypes to get a list EBPs that match ANY of the types listed.
 * If you want a blueprint to match a bunch of EntityTypes at the same time (i.e. AND instead of OR) then those types should be listed together in a sub-table. This function can potentially be quite slow as it has to parse every EBP in the game, so be careful about how you use it.
 */
declare function BP_GetEntityBlueprintsWithType(types: EntityType | any): TableOfEBPs;

/**
 * Get a table of all of the SBPs that match a particular SquadType. You can pass in a table of multiple SquadTypes to get a list SBPs that match ANY of the types listed.
 * If you want a blueprint to match a bunch of SquadTypes at the same time (i.e. AND instead of OR) then those types should be listed together in a sub-table. This function can potentially be quite slow as it has to parse every SBP in the game, so be careful about how you use it.
 */
declare function BP_GetSquadBlueprintsWithType(types: SquadType | any): TableOfSBPs;

/**
 * Converts an entity type (or set of types) into a suitable entity blueprint
 * The types listed are used to track down a specific blueprint, and the list can be augmented with information from the provided player if it isn't specified directly (for things like civilization)
 */
declare function Cardinal_ConvertTypeToEntityBlueprint(typeList: EntityType | any, player: PlayerID, returnAsTable?: boolean): EntityBlueprint;

/**
 * Converts a squad type (or set of types) into a suitable squad blueprint
 * The types listed are used to track down a specific blueprint, and the list can be augmented with information from the provided player if it isn't specified directly (for things like civilization)
 */
declare function Cardinal_ConvertTypeToSquadBlueprint(typeList: SquadType | any, player: PlayerID, returnAsTable?: boolean): SquadBlueprint;

/**
 * Attack-move a squad group in a formation to a given position
 */
declare function Cmd_FormationAttackMove(sgroup: SGroupID, destination: Position | SGroupID | EGroupID | MarkerID, queued?: boolean, deleteNearMarker?: boolean, deleteCallback?: any, deleteCallbackData?: any): void;

/**
 * Move a squad group in a formation to a given position.
 */
declare function Cmd_FormationMove(sgroup: SGroupID, destination: Position | SGroupID | EGroupID | MarkerID, queued?: boolean, deleteWhenNearMarker?: MarkerID, facingPosition?: Position): void;

/**
 * Move a squad group in a formation to a given position and delete it when it arrives, potentially calling back a function.
 */
declare function Cmd_FormationMoveToAndDestroy(sgroup: SGroupID, destination: Position | SGroupID | EGroupID | MarkerID, queued?: boolean, facingPosition?: Position, callback?: any, callbackData?: any): void;

/**
 * Stops formation of squads
 */
declare function Cmd_FormationStop(sgroup: SGroupID): void;

/**
 * Returns a number corresponding to the player's latest age upgrade.
 * The result is a number from 1 to 4, but they are also mapped onto these constants: AGE_DARK, AGE_FEUDAL, AGE_CASTLE or AGE_IMPERIAL
 */
declare function Player_GetCurrentAge(player: PlayerID): number;

/**
 * Returns a number corresponding to the maximum age a player can reach
 * The result is a number from 1 to 4, but they are also mapped onto these constants: AGE_DARK, AGE_FEUDAL, AGE_CASTLE or AGE_IMPERIAL
 */
declare function Player_GetMaximumAge(player: PlayerID): number;

/**
 * Sets the current age of a player
 * Age can be a number from 1 to 4, or any one of these: AGE_DARK, AGE_FEUDAL, AGE_CASTLE or AGE_IMPERIAL
 */
declare function Player_SetCurrentAge(player: PlayerID, age: number): void;

/**
 * Sets the maximum age a player can progress to
 * Age can be a number from 1 to 4, or any one of these: AGE_DARK, AGE_FEUDAL, AGE_CASTLE or AGE_IMPERIAL. You cannot build the landmark building at the end of the maximum age.
 */
declare function Player_SetMaximumAge(player: PlayerID, age: number): void;

/**
 * Warps all members of an SGroup immediately to a marker but puts them in formation
 */
declare function SGroup_FormationWarpToMarker(sgroup: SGroupID, marker: MarkerID, facing?: MarkerID | Position): void;

/**
 * Warps all members of an SGroup immediately to a new position but puts them in formation
 */
declare function SGroup_FormationWarpToPos(sgroup: SGroupID, pos: Position, facing?: MarkerID | Position): void;

/**
 * Get current AI player ID
 */
declare function AI_GetDebugAIPlayerID(): any;

/**
 * Set current debug AI player to the next AI player
 */
declare function AI_ToggleDebugAIPlayer(): any;

/**
 * Toggle cursor position distance drawring
 */
declare function Cursor_Distance(): any;

/**
 * Toggle clearing of cursor over entity weapon shot history debug display
 */
declare function Cursor_GetClearWeaponShotHistory(): any;

/**
 * Toggle cursor over entity weapon shot history debug display
 */
declare function Cursor_GetDrawWeaponShotHistory(): any;

/**
 * Toggle cursor position information
 */
declare function Cursor_Info(): any;

/**
 * Toggle cursor over entity weapon information
 */
declare function Cursor_WeaponInfo(): any;

/**
 * Toggle cursor over entity weapon range information
 */
declare function Cursor_WeaponRanges(): any;

/**
 * Toggles on or off under mouse check. If ignoring mouse check, all entities will have the enabled debug info displayed
 */
declare function Debug_IgnoreMouseOverCheck(): any;

/**
 * Allows the local player to issue commands to any unit regardless of ownership.
 */
declare function Debug_ToggleControlAll(): any;

/**
 * Toggles on or off all debug test activity
 */
declare function Debug_ToggleDebugTest(): any;

/**
 * Query the display adapter database for a boolean setting override.
 */
declare function DisplayAdapterDatabase_CheckBoolOverride(setting: string): any;

/**
 * Query the display adapter database for a floating-point setting override.
 */
declare function DisplayAdapterDatabase_CheckFloatOverride(setting: string): any;

/**
 * Query the display adapter database for an integer setting override.
 */
declare function DisplayAdapterDatabase_CheckIntOverride(setting: string): any;

/**
 * Output the installed display adapter driver version, the required version for the current adapter, and whether or not the installed version is equal to or greater than the required one.
 */
declare function DisplayAdapterDatabase_CheckMinimumDriverVersion(): any;

/**
 * Query the display adapter database for a uint16 setting override.
 */
declare function DisplayAdapterDatabase_CheckUint16Override(setting: string): any;

/**
 * Query the display adapter database for a uint8 setting override.
 */
declare function DisplayAdapterDatabase_CheckUint8Override(setting: string): any;

/**
 * Query the display adapter database for a uint32 setting override.
 */
declare function DisplayAdapterDatabase_CheckUintOverride(setting: string): any;

/**
 * Query the display adapter database for information about a specified adapter.
 */
declare function DisplayAdapterDatabase_GetAdapterFromID(vendor: string, device: string, subsystem: string, revision: string): any;

/**
 * Output basic information about the current display adapter.
 */
declare function DisplayAdapterDatabase_GetAdapterID(): any;

/**
 * Query the display adapter database for the minimum required driver version for a specified adapter.
 */
declare function DisplayAdapterDatabase_GetAdapterMinimumDriverVersion(vendor: string, device: string, subsystem: string, revision: string): any;

/**
 * Query the display adapter database for the performance class of the currently-installed display adapter.
 */
declare function DisplayAdapterDatabase_GetCurrentAdapterPerformanceClass(): any;

/**
 * Output basic information about the currently installed display adapter driver.
 */
declare function DisplayAdapterDatabase_GetDriverInfo(): any;

/**
 * Query the display adapter database for the performance class given a relative performance percentage.
 */
declare function DisplayAdapterDatabase_GetPerformanceClass(relativePerformance: number): any;

/**
 * Toggle blockers info
 */
declare function FOW_Blockers(): any;

/**
 * Force effects to be recreated.
 */
declare function fx_refresh(): any;

/**
 * Get physics debug toggle value
 */
declare function GetPhysicsDebug(): any;

/**
 * Get physics debug toggle value
 */
declare function GetPhysicsRaycastAsCapsuleDebug(): any;

/**
 * Toggle hold info
 */
declare function Hold_Info(): any;

/**
 * turns on the watcher and displays the lists if any
 */
declare function LCWatcher_Activate(on: boolean): any;

/**
 * Needs the proper luaConfig id, and looks through that list to add the filter.
 */
declare function LCWatcher_AddFilter(stateName: string, filter: string): any;

/**
 * Needs the proper luaConfig id, returns true if filter exists.
 */
declare function LCWatcher_FilterExists(stateName: string, filter: string): any;

/**
 * Returns true if LCWatcher is active.
 */
declare function LCWatcher_IsActive(): any;

/**
 * Needs the proper luaConfig id, removes filter added by LCWatch_AddFilter.
 */
declare function LCWatcher_RemoveFilter(stateName: string, filter: string): any;

/**
 * Selects a LuaConfig state to watch.  Returns true if state is registered and false if it has not.
 */
declare function LCWatcher_SelectState(state: string): any;

/**
 * Print text to specified file
 */
declare function LogPrintTo(file: string, txt: string): any;

/**
 * Disable collecting and displaying render stats
 */
declare function MemoryStats_Disable(): any;

/**
 * Enable collecting and displaying render stats
 */
declare function MemoryStats_Enable(): any;

/**
 * Toggle collecting and displaying render stats
 */
declare function MemoryStats_Toggle(): any;

/**
 * Clear entire draw pathfinding cell list
 */
declare function Path_ClearCells(): any;

/**
 * Draw pathfinding impassable map
 */
declare function Path_DrawImpass(): any;

/**
 * Toggle pathfinding entity path
 */
declare function Path_DrawPath(): any;

/**
 * Draw pathfinding grid overlay
 */
declare function Path_DrawPathMap(onoff: boolean): any;

/**
 * Add pathfinding cell to draw cell list
 */
declare function Path_ShowCell(x: number, y: number): any;

/**
 * Add pathfinding precise cell to draw cell list
 */
declare function Path_ShowPreciseCell(x: number, y: number): any;

/**
 * Toggle pathfinding collision circles
 */
declare function Path_ToggleCollisionCircle(): any;

/**
 * Reload mouse over entity's entire list of extension info's
 */
declare function PBG_ReloadMouseOverEntity(): any;

/**
 * Reload mouse over squad's entire list of extension info's
 */
declare function PBG_ReloadMouseOverSquad(): any;

/**
 * Reload mouse over squad's weapon property bag
 */
declare function PBG_ReloadMouseOverWeapon(): any;

/**
 * Disable collecting and displaying render stats
 */
declare function RenderStats_Disable(): any;

/**
 * Output the render stats to a CSV LogFile for viewing
 */
declare function RenderStats_DumpToLogFile(): any;

/**
 * Enable collecting and displaying render stats
 */
declare function RenderStats_Enable(): any;

/**
 * Set the render stats refresh update interval (seconds)
 */
declare function RenderStats_SetUpdateTime(time: number): void;

/**
 * Sort render stats by model instances (descending sort)
 */
declare function RenderStats_SortInstances(): any;

/**
 * Sort render stats by render calls (descending sort)
 */
declare function RenderStats_SortRenderCalls(): any;

/**
 * Sort render stats by shader changes (descending sort)
 */
declare function RenderStats_SortShaderChanges(): any;

/**
 * Sort render stats by mesh triangles (descending sort)
 */
declare function RenderStats_SortTris(): any;

/**
 * Toggle collecting and displaying render stats
 */
declare function RenderStats_Toggle(): any;

/**
 * Toggle drawing debug info for scar markers
 */
declare function Scar_DrawMarkers(): any;

/**
 * Toggle mouse over debug info on which group the entity belongs to
 */
declare function Scar_GroupInfo(): any;

/**
 * Toggle a list of all egroups and sgroups in the game
 */
declare function Scar_GroupList(): any;

/**
 * Disable collecting and displaying render stats
 */
declare function ShaderStats_Disable(): any;

/**
 * Output the render stats to a CSV LogFile for viewing
 */
declare function ShaderStats_DumpToLogFile(): any;

/**
 * Enable collecting and displaying render stats
 */
declare function ShaderStats_Enable(): any;

/**
 * Set the render stats refresh update interval (seconds)
 */
declare function ShaderStats_SetUpdateTime(time: number): void;

/**
 * Sort render stats by model instances (descending sort)
 */
declare function ShaderStats_SortPixelCount(): any;

/**
 * Sort render stats by model instances (descending sort)
 */
declare function ShaderStats_SortShaderNames(): any;

/**
 * Toggle collecting and displaying render stats
 */
declare function ShaderStats_Toggle(): any;

/**
 * Toggle check requirements information
 */
declare function Sim_CheckRequirements(): any;

/**
 * Draw the current sim tick
 */
declare function Sim_DebugDrawSimTick(): any;

/**
 * Toggle drawing debug info for the attention system
 */
declare function Sim_DrawAttention(): any;

/**
 * Toggle the crush OBB
 */
declare function Sim_DrawEntityCrusherOBB(): any;

/**
 * Toggle entity information
 */
declare function Sim_DrawEntityExtensions(): any;

/**
 * Toggle entity move state debug drawing
 */
declare function Sim_DrawEntityStateMove(): any;

/**
 * Toggle a list of all active abilities on the entity
 */
declare function Sim_EntityAbility(): any;

/**
 * Draw the per-entity decision delay if there is one
 */
declare function Sim_EntityDelay(): any;

/**
 * Toggle posture info text for selected entities
 */
declare function Sim_EntityDrawPosture(): any;

/**
 * Toggle a list of all active modifiers on the entity
 */
declare function Sim_EntityHistory(): any;

/**
 * Toggle entity information
 */
declare function Sim_EntityInfo(): any;

/**
 * Toggle a list of all active modifiers on the entity
 */
declare function Sim_EntityModifier(): any;

/**
 * Draw the OBBs for the entity
 */
declare function Sim_EntityOBB(): any;

/**
 * Draw OOC target debug info
 */
declare function Sim_EntityOOCTarget(): any;

/**
 * Toggle a list of all completed upgrades on the entity.
 */
declare function Sim_EntityUpgrades(): any;

/**
 * Toggle a list of all active player abilities
 */
declare function Sim_PlayerInfo(): any;

/**
 * Toggle a list of all active player modifiers
 */
declare function Sim_PlayerModifiers(): any;

/**
 * Toggle simulation boxes for shot blockers only
 */
declare function Sim_ShotBlockers(): any;

/**
 * Toggle simulation boxes for entities
 */
declare function Sim_SimBox(): any;

/**
 * Toggle a list of all active modifiers on the entity
 */
declare function Sim_SquadHistory(): any;

/**
 * Toggle squad information
 */
declare function Sim_SquadInfo(): any;

/**
 * Toggle squad suppression information
 */
declare function Sim_SquadSuppression(): any;

/**
 * Create a splat on the terrain
 */
declare function Terrain_CreateSplat(_name: string, xpos: number, zpos: number, scale: number): any;

/**
 * Draw a grid on the terrain with tunable increment
 */
declare function Terrain_DrawGrid(increment: number): any;

/**
 * Draw lines on a grid on the terrain with tunable spacing
 */
declare function Terrain_DrawGridLines(spacing: number): any;

/**
 * Draw terrain material map cells
 */
declare function Terrain_DrawMaterialMap(onoff: boolean): any;

/**
 * Add a timer to be triggered every 'freqInSec'. the timer will then run the passed-in command
 */
declare function TimerAdd(command: string, freqInSec: number): any;

/**
 * Add a timer to be triggered every frame the timer will then run the passed-in command
 */
declare function TimerAddFrame(command: string): any;

/**
 * Add a timer to be triggered once after 'freqInSec' has elapsed. the timer will then run the passed-in command
 */
declare function TimerAddOnce(command: string, timeInSec: number): any;

/**
 * Remove specified timer
 */
declare function TimerDel(command: string): any;

/**
 * Toggles the scanning info from the ScanForTarget track for the debug entity
 */
declare function Toggle_Scanning_Info(): any;

/**
 * Toggle physics debug drawing
 */
declare function TogglePhysicsDebug(enable: boolean): any;

/**
 * Toggle physics debug drawing
 */
declare function TogglePhysicsRaycastAsCapsuleDebug(enable: boolean): any;

/**
 * Toggles on or off vaulting debug drawing
 */
declare function Vaulting_DrawDebug(): any;

/**
 * Toggle enabling all weapon gound attack
 */
declare function Weapon_AllWeaponAttackGround(): any;

/**
 * Toggle weapon animation information
 */
declare function Weapon_AnimInfo(): any;

/**
 * Toggle weapon attack radii around the entities
 */
declare function Weapon_AttackRadii(): any;

/**
 * Toggle weapon firing lines
 */
declare function Weapon_Firing(): any;

/**
 * Toggle weapon hard point information
 */
declare function Weapon_HardPointInfo(): any;

/**
 * Toggle weapon state and calculation information
 */
declare function Weapon_Info(): any;

/**
 * Toggle weapon best target result
 */
declare function Weapon_PrintBestTarget(): any;

/**
 * Toggle weapon priority information (must TAG entity you want info about)
 */
declare function Weapon_PriorityInfo(): any;

/**
 * Toggle weapon projectile denotation timer
 */
declare function Weapon_ProjectileDetonateTimer(): any;

/**
 * Toggle weapon projectile information
 */
declare function Weapon_ProjectileInfo(): any;

/**
 * Toggle weapon scatter target information
 */
declare function Weapon_ScatterInfo(): any;

/**
 * Toggle weapon tracking lines and maximum angles
 */
declare function Weapon_Tracking(): any;

/**
 * Draw line. If you don't pass in a name, TerrainLine is used.
 */
declare function dr_drawline(pos0: Position, pos1: Position, r: number, g: number, b: number, svar: any): any;

/**
 * Draw circle on terrain.
 */
declare function dr_terraincircle(pos: Position, radius: number, r: number, g: number, b: number, divs: number, frame: string): any;

/**
 * Draw circle on terrain with lifetime.
 */
declare function dr_terraincirclewithlifetime(pos: Position, radius: number, r: number, g: number, b: number, divs: number, frame: string, lifetime: number): any;

/**
 * Draw rectangle on terrian.
 */
declare function dr_terrainrect(pos: Position, w: number, h: number, r: number, g: number, b: number, rads: number): any;

/**
 * Sets the target for an encounter to a provided marker, position, sgroup, egroup, squad, or entity
 * When you specify a group as the target, it chooses a single squad or entity - if you pass something for the closestTo parameter it will choose the closest one to that, otherwise it will just choose the first
 */
declare function AIEncounter_TargetGuidance_SetTarget(aiEncounter: AIEncounterID, OPT_closestTo?: MARKER | Position | GroupID): void;

/**
 * Add an SGroup to an existing SCAR encounter
 */
declare function Encounter_AddSGroup(encounter: EncounterTable, sgroup: SGroupID, OPT_restartIfNecessary?: boolean): any;

/**
 * Add a squad to an existing SCAR encounter
 * You can also force the encounter to restart if necessary (i.e. it had previously finished)
 */
declare function Encounter_AddSquad(encounter: EncounterTable, squad: SquadID, OPT_restartIfNecessary?: boolean): any;

/**
 * Create a new SCAR encounter for the given units
 */
declare function Encounter_Create(player: PlayerID, group: EGroupID, goal: any, OPT_debugName?: string): any;

/**
 * Find a SCAR encounter that's associated with a squad, sgroup, or an AI encounter
 */
declare function Encounter_FindAssociatedEncounter(item: SquadID | SGroupID | AIEncounterID): EncounterTable;

/**
 * Returns the underlying aiEncounter for the given encounter, if there is one. Returns nil otherwise.
 */
declare function Encounter_GetAIEncounter(encounter: EncounterTable): AiEncounter;

/**
 * Retrieve the goal data from a given encounter
 * This returns the original data as originally passed in. Internally it may have been augmented with default values and/or preprocessed in other ways, but this returns the original.
 */
declare function Encounter_GetGoalData(encounter: EncounterTable): any;

/**
 * Gets the SGroup that holds all of the units associated with an encounter
 */
declare function Encounter_GetSGroup(encounter: EncounterTable): SGroupID;

/**
 * Tells you whether an encounter is active or has finished
 */
declare function Encounter_IsActive(encounter: EncounterTable): any;

/**
 * Remove ALL squads from an existing SCAR encounter
 */
declare function Encounter_RemoveAllSquads(encounter: EncounterTable): any;

/**
 * Remove all squads in an SGroup from a given SCAR encounter
 */
declare function Encounter_RemoveSGroup(encounter: EncounterTable, sgroup: SGroupID): any;

/**
 * Remove a squad from an existing SCAR encounter
 */
declare function Encounter_RemoveSquad(encounter: EncounterTable, squad: SquadID): any;

/**
 * Restarts an encounter from the beginning
 */
declare function Encounter_Restart(encounter: EncounterTable): any;

/**
 * Update the goal data for a given encounter
 * This will cause an encounter to restart internally
 */
declare function Encounter_SetGoalData(encounter: EncounterTable, newGoal: any): void;

/**
 * Starts an encounter that has been stopped
 */
declare function Encounter_Start(encounter: EncounterTable): any;

/**
 * Stops an encounter that is running.
 */
declare function Encounter_Stop(encounter: EncounterTable, OPT_giveStopCommandToUnits?: boolean): any;

/**
 * Gets the type of game we are playing ( GT_SP = 0, GT_MP = 1, GT_Skirmish = 2)
 */
declare function getgametype(): any;

/**
 * Returns the local player index
 */
declare function getlocalplayer(): any;

/**
 * Returns the scenario name (shortname version eg. "2P Semois")
 */
declare function getmapname(): any;

/**
 * Returns the current simulation rate.
 */
declare function getsimrate(): any;

/**
 * Run the specified scar script file
 */
declare function Scar_DoFile(scriptName: string): any;

/**
 * Run the specified scar command
 */
declare function Scar_DoString(str: string): any;

/**
 * Reload all scar scripts
 */
declare function Scar_Reload(): any;

/**
 * Pause the simulation.
 */
declare function setsimpause(): any;

/**
 * Enable or diable a group of abilities for one or more players; useful for hiding glows. data can be a string (ability short name), a table of such strings. To deactivate for a player other than Player 1, pass in a table or tables as such: {player = playerID, abilities = {"name","name"}}
 */
declare function Mission_EnableAbilities(data: string, enable: boolean): any;

/**
 * Composes an assert message
 */
declare function _AudioTrigger_ComposeError(): any;

/**
 * Verifies the basic stuff all Audio Triggers need
 */
declare function _AudioTrigger_InitCore(): any;

/**
 * Activates an audio trigger
 */
declare function AudioTrigger_Activate(leader: any): any;

/**
 * Verifies whether an audio trigger can start playing
 */
declare function AudioTrigger_CanPlay(leader: any): any;

/**
 * Regularly check an Audio Trigger's conditions and update accordingly
 */
declare function AudioTrigger_CheckArea(leader: any): any;

/**
 * Regularly check an Audio Trigger's conditions and update accordingly
 */
declare function AudioTrigger_CheckConditional(leader: any): any;

/**
 * Deactivates an audio trigger
 */
declare function AudioTrigger_Deactivate(leader: any): any;

/**
 * Sets up a Leader unit's custom Leader behaviour for use in a campaign mission
 */
declare function AudioTrigger_InitAreaTrigger(bare: any): any;

/**
 * Sets up a Leader unit's custom Leader behaviour for use in a campaign mission
 */
declare function AudioTrigger_InitConditionalTrigger(bare: any): any;

/**
 * Completely removes an audio trigger from the mission
 */
declare function AudioTrigger_Remove(): any;

/**
 * Used to successfully COMPLETE all currently-active objectives
 */
declare function MissionOMatic_Cheat_Complete_Obj(): any;

/**
 * Used to FAIL all currently-active objectives
 */
declare function MissionOMatic_Cheat_Fail_Obj(): any;

/**
 * Used to FAIL the entire mission
 */
declare function MissionOMatic_Cheat_Lose(): any;

/**
 * Used to view the mission recipe that this mission was generated from
 */
declare function MissionOMatic_Cheat_ViewRecipe(): any;

/**
 * Used to WIN the entire mission
 */
declare function MissionOMatic_Cheat_Win(): any;

/**
 * Regularly check on the Leader unit to see if it needs to surrender or do anything else; should only be called as a rule at a set interval
 */
declare function Missionomatic_CheckLeader(leader: any): any;

/**
 * Finds the location data table, identifying it from a String
 */
declare function MissionOMatic_FindLocation(): any;

/**
 * Finds the module data table, identifying it from a String
 */
declare function MissionOMatic_FindModule(): any;

/**
 * If the passed SquadID corresponds to a leader, flips its Up/Down state
 */
declare function Missionomatic_FlipLeader(): any;

/**
 * Finds the player data table for one of the players in the mission, identifying them from a String ("descriptor"), PlayerID, Squad/SGroup or Entity/EGroup
 * If you pass in a PlayerTable that has already been resolved it returns it straight back
 */
declare function MissionOMatic_GetPlayer(identifier: string | PlayerID | any): PlayerTable;

/**
 * Get the relationship between two players in the mission. These players can be referenced in any way that MissionOMatic_GetPlayer() can process.
 */
declare function MissionOMatic_GetRelationship(p1: Player, p2: Player): Relationship;

/**
 * Sets up a Leader unit's custom Leader behaviour for use in a campaign mission
 */
declare function Missionomatic_InitializeLeader(bare: any): any;

/**
 * Recovers the Leader from surrender and returns it to player control
 */
declare function Missionomatic_LeaderRecovery(leader: any): any;

/**
 * Initiates the surrender of a leader unit, temporarily removing it from player control
 */
declare function Missionomatic_LeaderSurrender(leader: any): any;

/**
 * Watches for the death of a leader, which requires special handling
 */
declare function Missionomatic_OnLeaderBridged(): any;

/**
 * Pass an sgroup of units back to the UnitRequest manager to complete a request
 */
declare function MissionOMatic_RequestComplete(originalRequest: RequestData, unitsToFulfillRequest: SGroupID): any;

/**
 * Request to have units produced by available production means
 * @extdesc
 */
declare function MissionOMatic_RequestUnits(requestingModule: any, requestData: any, unitSources?: any): RequestData;

/**
 * Revives a leader at a defaulted or designated spawn point
 */
declare function Missionomatic_RespawnLeader(): any;

/**
 * Triggers the mission start title card (as long as it is properly defined in mission recipe)
 */
declare function MissionOMatic_ShowTitleCard(): any;

/**
 * Returns if a module needs reinforcements according to it's reinforcement settings
 */
declare function Reinforcement_AreReinforcementsNeeded(module: ModuleTable): boolean;

/**
 * Generates a unit table of "missing units" that a module can then request to be provided.
 * This takes the module's "ideal composition" and creates a unit list to fill the current composition back up to a portion of that ideal, as directed by the reinforcement settings.
 */
declare function Reinforcement_GenerateReplacementUnitList(module: any, idealComposition: UnitTable): UnitTable;

/**
 * Return a UnitTable of all the units currently in the request queue for a module.
 * This helps to avoid double-ordering reinforcements - you can add the units requested to the units present when considering whether to reinforce
 */
declare function Reinforcement_GetAllUnitsInRequestQueue(module: any): UnitTable;

/**
 * Once a reinforcement request has been made, this should be called in order to update tracking
 * This also makes any threshold adjustements, etc, specified in the reinforcements table. You need to pass in the requestData so it can be tracked, too, and counted in further reinforcement requests. The skipAdjustments flag lets you force-skip the adjustments step (i.e. you're backfilling after giving up units to supply another request)
 */
declare function Reinforcement_RequestHasBeenTriggered(module: ModuleTable, successfulRequestData: RequestData, skipAdjustments: boolean): any;

/**
 * Sets a module's "ideal composition" to a given unit table, overriding what was there before
 */
declare function Reinforcement_SetIdealComposition(module: any, units: UnitTable): void;

/**
 * Updates a module's "ideal composition" to subtract an sgroup's units from the high water mark (used when those units are removed from an SGroup)
 */
declare function Reinforcement_SubtractSGroupFromIdealComposition(module: any, sgroup: SGroupID): any;

/**
 * Updates a module's "ideal composition" to the high water mark of units it has or has previously had
 */
declare function Reinforcement_UpdateIdealComposition(module: any): any;

/**
 * Checks if a non-townLife module has units to fulfill a request, and is willing to give those units up according to its unitProvider data
 */
declare function UnitProvider_CanModuleProvideUnits(module: any, requestData: any): boolean;

/**
 * DO NOT call this function directly, use Event_Save(STT_Auto) instead
 */
declare function __Internal_Game_Autosave(): any;

/**
 * DO NOT call this function directly, use Event_Save(STT_Quick) instead
 */
declare function __Internal_Game_Quicksave(): any;

/**
 * DO NOT call this function directly, use Event_SaveWithName(STT_Standard) instead
 */
declare function __Internal_Game_SaveGame(): any;

/**
 * DO NOT call this function directly, use Event_SaveWithName(STT_Dev) instead
 */
declare function __Internal_Game_SaveToFileDev(): any;

/**
 * A predicate for detecting whether a BP has been hovered over
 */
declare function _Missionomatic_GoalPredicate_HoveredOverBP(): any;

/**
 * After a timer, OnHover hints should go away
 */
declare function _Missionomatic_Hint_UserHasTimedOut(): any;

/**
 * For checking whether a hinted BP is already being produced
 */
declare function _MissionOMatic_IsUpgrading(): any;

/**
 * A predicate for detecting whether a BP has been hovered over
 */
declare function _Missionomatic_SequencePredicate_HoveredOverBP(): any;

/**
 * A predicate for detecting whether an ability has been hovered over
 */
declare function _Missionomatic_TrainingPredicate_IgnoreHover(): any;

/**
 * Monitors abilities that have been flagged for usage-based hint resolution
 */
declare function _MissionOMatic_WatchForAbility(): any;

/**
 * Get race name, and convert campaign-only races to base races.
 */
declare function _PlayerUpgrades_GetRaceName(): any;

/**
 * Finds any idle raid parties
 */
declare function _Raiding_FindIdleRaiders(): any;

/**
 * Creates a unit list based on provided composition data
 */
declare function _Raiding_GenerateUnitList(): any;

/**
 * Gets one of the valid spawn locations
 */
declare function _Raiding_GetSpawnLocation(): any;

/**
 * Initiates a raid against a given position
 */
declare function _Raiding_InitRaid(): any;

/**
 * Sometimes spawns a scout to attack-move around the map, looking to engage the player
 */
declare function _Raiding_Monitor(): any;

/**
 * Resets the raid timer
 */
declare function _Raiding_ResetRaidTimer(): any;

/**
 * Resets the scout timer
 */
declare function _Raiding_ResetScoutTimer(): any;

/**
 * Called when the module goes above its threshold while defending
 */
declare function _RovingArmy_AboveThreshold(): any;

/**
 * instructs the module to begin attacking it's next target.
 */
declare function _RovingArmy_AttackTarget(): any;

/**
 * Called when the module falls below its withdraw threshold while attacking
 */
declare function _RovingArmy_BelowThreshold(): any;

/**
 * Called when the module completes its last target and there are none left
 */
declare function _RovingArmy_Complete(): any;

/**
 * Creates a new attack encounter for this army to attack its next target
 */
declare function _RovingArmy_CreateAttackEncounter(moduleData: Module): any;

/**
 * Orders the modules to defend an area. This can be when the module starts, when it falls back, or when it completes
 */
declare function _RovingArmy_CreateDefendEncounter(moduleData: Module, target: string): any;

/**
 * Called when all units in the module have died
 */
declare function _RovingArmy_Death(): any;

/**
 * Orders the rovingArmy to defend it's current average position
 */
declare function _RovingArmy_DefendCurrentPosition(): any;

/**
 * Orders the rovingArmy to defend the current target.
 */
declare function _RovingArmy_DefendCurrentTarget(): any;

/**
 * Instructs the RA to defend the nearest fallback if there is one, or the spawnLocation if there isn't one
 */
declare function _RovingArmy_DefendFallbackOrSpawn(): any;

/**
 * Called on complete. Orders the rovingArmy to defend the last completed target.
 */
declare function _RovingArmy_DefendPreviousTarget(): any;

/**
 * orders the RovingArmy to defend its spawnLocation
 */
declare function _RovingArmy_DefendSpawnLocation(): any;

/**
 * Called if the module died or fell below threshold while attacking
 */
declare function _RovingArmy_Fail(): any;

/**
 * Finds what Roving Army module is currently using a given encounter
 */
declare function _RovingArmy_FindModuleByEncounterID(): any;

/**
 * Gets the current target, if there is one
 */
declare function _RovingArmy_GetFallback(moduleData: Module): any;

/**
 * Selects a random target index from the three closest targets
 */
declare function _RovingArmy_GetMeanderingTargetIndex(): any;

/**
 * Returns the target index for the nearest target to the homeLocation. Returns nil if there are no targets
 */
declare function _RovingArmy_GetProximityTargetIndex(): any;

/**
 * returns a random index to a target other than the current one. Returns nil if no valid targets exist
 */
declare function _RovingArmy_GetRandomTargetIndex(): any;

/**
 * Checks if the module should be defending. Returns true if any of the 3 possible reasons are true.
 */
declare function _RovingArmy_HasDefendReason(moduleData: Module): any;

/**
 * returns true if rovingArmy.fallback[rovingArmy.fallbackIndex] is a valid fallback.
 */
declare function _RovingArmy_HasValidFallback(): any;

/**
 * returns true if rovingArmy.targets[rovingArmy.targetIndex] is a valid target.
 */
declare function _RovingArmy_HasValidTarget(): any;

/**
 * Ensures that all fallbacks are set properly
 */
declare function _RovingArmy_InitializeFallbacks(moduleData: any): any;

/**
 * Ensure that all targets are set properly
 */
declare function _RovingArmy_InitializeTargets(moduleData: any): any;

/**
 * Returns true if the rovingArmy is above the withdraw threshold, or if ignoreWithdrawThreshold was set to true
 */
declare function _RovingArmy_IsAboveThreshold(): any;

/**
 * Returns true if the rovingArmy is below the withdraw threshold, and ignoreWithdrawThreshold is false
 */
declare function _RovingArmy_IsBelowThreshold(): any;

/**
 * Calls BelowThreshold and AboveThreshold when needed. Calls for reinforcements when needed.
 */
declare function _RovingArmy_Monitor(context: Context, moduleData: Module): any;

/**
 * Called when a target has been cleared successfuly
 */
declare function _RovingArmy_OnEncounterSuccessAttack(): any;

/**
 * Stops the RovingArmy from attacking its target
 */
declare function _RovingArmy_StopAttacking(): any;

/**
 * Stops the RovingArmy from defending
 */
declare function _RovingArmy_StopDefending(): any;

/**
 * Used to determine if target should be handled with enRoute behavior. May need more logic to handle non-linear targetting types
 */
declare function _RovingArmy_TargetIsNotFinal(): any;

/**
 * This checks to see if the RA has died, and calls the appropriate callbacks if it has
 */
declare function _RovingArmy_UpdateEmptyStatus(): any;

/**
 * Updates fallback and fallbackIndex
 */
declare function _RovingArmy_UpdateFallback(): any;

/**
 * Updates targets, targetIndex and targetShift according to the targetingType. After running this, call _RovingArmy_HasValidTarget to find out if a new target was established.
 */
declare function _RovingArmy_UpdateTarget(): any;

/**
 * Setup a cached path that periodically updates its path between specified marker and self HQ. This allows the AI to detect whenever pathability is changed to this marker (e.g. being walled off).
 */
/* Illegal function name '0' can't be used here
declare function 0(AIPlayer_SetMarkerToUpdateCachedPathToHQ: void, marker: MarkerID, pathCheckIntervalSecs: number): any;
*/

/**
 * Setup a cached path that periodically updates its path between specified marker and position. This allows the AI to detect whenever pathability is changed to between the marker and position (e.g. being walled off).
 */
/* Illegal function name '0' can't be used here
declare function 0(AIPlayer_SetMarkerToUpdateCachedPathToPosition: void, toMarker: MarkerID, fromPosition: Position, pathCheckIntervalSecs: number): any;
*/

/**
 * Adds all the units in a battalion to a given module
 */
declare function Action_AddBattalionToModule_Do(): any;

/**
 * Adds resources to a given player
 */
declare function Action_AddResources_Do(): any;

/**
 * Dissolves a module
 */
declare function Action_DissolveModule_Do(): any;

/**
 * Dissolves a module and folds its units into another module
 */
declare function Action_DissolveModuleIntoModule_Do(): any;

/**
 * Moves units to a given marker
 */
declare function Action_MoveUnits_Do(): any;

/**
 * Notifies the player of something
 */
declare function Action_NotifyPlayer_Do(): any;

/**
 * Spawns a new entity at a given location (only once, since many entities don't like overlapping)
 */
declare function Action_SpawnBuilding_Do(): any;

/**
 * Spawns new units at a given location
 */
declare function Action_SpawnUnits_Do(): any;

/**
 * Spawns new units and adds them to a given module
 */
declare function Action_SpawnUnitsToModule_Do(): any;

/**
 * Set whether or not an action marker is visible.
 */
declare function ActionMarker_SetVisible(name: string, visible: boolean): void;

/**
 * Start the given action marker's FX.
 */
declare function ActionMarker_StartAction(name: string): any;

/**
 * Stop the given action marker's FX.
 */
declare function ActionMarker_StopAction(name: string): any;

/**
 * Adds a prefab to the AIPrefab system. Target must be set up in a follow up call with returned ID
 */
declare function AI_AddPrefab(player: PlayerID, name: string, behaviourName: string, radius: number, minDifficulty: number, maxDifficulty: number, canReassign: boolean, active: boolean): any;

/**
 * Log the combat result features of all squads owned by a player for a given conflict
 */
declare function AI_CacheCombatFeatureTrainingData(conflictID: number, playerA: PlayerID, playerB: PlayerID): any;

/**
 * Get combat fitness estimate. Return value will be between 1.0 and 0.0. 1.0 means teamA wins outright, 0.0 means teamB wins outright.
 * Buildings will be filtered from attacking team
 */
declare function AI_CalculateCombatFitnessEstimate(teamASquads: SGroupID, teamAEntities: EGroupID, teamAPBGs: PropertyBagGroup, teamBSquads: SGroupID, teamBEntities: EGroupID, teamBPBGs: PropertyBagGroup, aiPlayerA: PlayerID, playerB: PlayerID, playerAIsAttacker: boolean): any;

/**
 * Checks if this entity can cause suppression
 */
declare function AI_CanEntityCauseSuppression(aiPlayer: PlayerID, entity: EntityID): any;

/**
 * Check if the entity can load squad and shoot its target after loading (This function should only be called by AI)
 */
declare function AI_CanLoadSquadAndAttackCurrentTarget(entity: EntityID, squad: SquadID, bCheckSquadState: boolean, bOverload: boolean): any;

/**
 * Checks if this squad can cause suppression
 */
declare function AI_CanSquadCauseSuppression(aiPlayer: PlayerID, pSquad: SquadID): any;

/**
 * Checks if this squad can decrew the entity
 */
declare function AI_CanSquadDecrew(pDriverSquad: SquadID, pDecrewTargetEntity: EntityID): any;

/**
 * Clear a combat entry from the cache, typically done instead of logging it
 */
declare function AI_ClearCombatTrainingCacheEntry(conflictID: number): any;

/**
 * Clear all intents associated with this AIPrefab
 */
declare function AI_ClearPrefabAIIntents(prefabId: UniqueID, player: PlayerID): any;

/**
 * Returns true if the configured input feature calculators characterizes this squad
 */
declare function AI_CombatFitnessCharacterizesSquad(player: PlayerID, squadPBG: PropertyBagGroup): any;

/**
 * Returns the defensive upgrades for this structure archetype member
 */
declare function AI_CombatFitnessGetDefensiveUpgradesForStructureArchetypeMember(memberPBG: PropertyBagGroup): any;

/**
 * Returns healer feature option pbgs
 */
declare function AI_CombatFitnessGetHealerPBGs(): any;

/**
 * Returns the offensive upgrades for this structure archetype member
 */
declare function AI_CombatFitnessGetOffensiveUpgradesForStructureArchetypeMember(memberPBG: PropertyBagGroup): any;

/**
 * Returns the player upgrades configured in the player upgrade input calculator
 */
declare function AI_CombatFitnessGetPlayerUpgrades(): any;

/**
 * Returns squad pbgs for all squad archetypes
 */
declare function AI_CombatFitnessGetSquadArchetypeNames(): any;

/**
 * Returns squad pbgs for a given archetype (assuming that archetype is composed of squad pbgs)
 */
declare function AI_CombatFitnessGetSquadArchetypePBGs(archtypeNameStr: string): any;

/**
 * Returns entity pbgs for a given archetype (assuming that archetype is composed of entity pbgs)
 */
declare function AI_CombatFitnessGetStructureArchetypePBGs(archtypeNameStr: string): any;

/**
 * Create the combat feature logs in the game log directory
 */
declare function AI_CreateAICombatFitnessLogs(): any;

/**
 * Prints detailed rating debug info in the AILog for all squads and entities in the groups
 */
declare function AI_DebugLogGroupCombatRatings(sgroup: SGroupID, egroup: EGroupID, player: PlayerID): any;

/**
 * Prints detailed rating debug info in the AILog for all the PBGs in the list
 */
declare function AI_DebugLogPBGCombatRatings(pbgList: PropertyBagGroup, player: PlayerID): any;

/**
 * Find the closest open position from a given position for a given ability blueprint
 */
declare function AI_FindClosestOpenPositionForAbility(caster: ConstTargetHandle, pAbilityPBG: PropertyBagGroup, posIn: Position): any;

/**
 * Find the closest open position from a given position and ability blueprint, taking into account a min
 */
declare function AI_FindClosestOpenPositionForAbilityWithinRange(caster: ConstTargetHandle, pAbilityPBG: PropertyBagGroup, posIn: Position, minDist: number, maxDist: number): any;

/**
 * Find the closest open position from a given position for a given Entity blueprint
 */
declare function AI_FindClosestOpenPositionForStructure(aiPlayer: PlayerID, pEntityPBG: PropertyBagGroup, posIn: Position): any;

/**
 * Returns the maximum number of targets for the given ability, or -1 if the ability is invalid.
 */
declare function AI_GetAbilityMaxNumTargets(ability: ScarAbilityPBG): any;

/**
 * Returns the current squad target for the given squad (null if no target, or target is non-squad entity)
 */
declare function AI_GetAnySquadCombatTarget(pSquad: SquadID): any;

/**
 * Log the combat input features of all squads owned by two players for a given conflict
 */
declare function AI_LogCombatTrainingData(conflictID: number, playerA: PlayerID, playerB: PlayerID, score: number): any;

/**
 * Find a AI module that's associated with a squad or sgroup
 */
declare function AI_Module_FindAssociatedModule(item: SquadID | SGroupID | AIEncounterID): ModuleTable;

/**
 * Find a AI module that's associated with a squad or sgroup
 */
declare function AI_Module_FindModuleFromScarEncounter(item: AIEncounterID): ModuleTable;

/**
 * Takes a target, fallback, or spawnLocation, which can come in many formats, and converts it to a combatArea.
 */
declare function AI_Module_ResolveCombatArea(module: DefendModule | RovingArmyModule, t: Position | MARKER | any, combatRange?: number, leashRange?: number, direction?: Vector, idlePosition?: Position, useCustomDirection?: boolean): any;

/**
 * Push an ai intent to an existing AIPrefab. Requires an ai_prefab_intent pbg name
 */
declare function AI_PushPrefabAIIntent(prefabId: UniqueID, player: PlayerID, aiPrefabIntentBagName: string): any;

/**
 * Set the active status of an existing AIPrefab
 */
declare function AI_SetPrefabActive(prefabId: UniqueID, player: PlayerID, active: boolean): void;

/**
 * Set the can_reassign state of an existing AIPrefab
 */
declare function AI_SetPrefabCanReassign(prefabId: UniqueID, player: PlayerID, canReassign: boolean): void;

/**
 * Set the squad selection of an existing AIPrefab by SGROUP
 */
declare function AI_SetPrefabSelection_SGroup(prefabId: UniqueID, player: PlayerID, squads: SGroupID): void;

/**
 * Set the target of an existing AIPrefab by EGROUP
 */
declare function AI_SetPrefabTarget_EGroup(prefabId: UniqueID, player: PlayerID, entities: EGroupID): void;

/**
 * Set the target of an existing AIPrefab by Position
 */
declare function AI_SetPrefabTarget_Position(prefabId: UniqueID, player: PlayerID, position: Position): void;

/**
 * Set the target of an existing AIPrefab by SGROUP
 */
declare function AI_SetPrefabTarget_SGroup(prefabId: UniqueID, player: PlayerID, squads: SGroupID): void;

/**
 * Set the target of an existing AIPrefab via waypoints
 */
declare function AI_SetPrefabTarget_Waypoints(prefabId: UniqueID, player: PlayerID, waypointName: string): void;

/**
 * Checks if the cached path crosses known enemy territory
 */
declare function AIPlayer_CachedPathCrossesEnemyTerritory(aiPlayer: PlayerID, requestingID: number, minDistToEnemyTerritory: number, unused: boolean): any;

/**
 * Test if player can see entity
 */
declare function AIPlayer_CanSeeEntity(aiPlayer: PlayerID, canSee: EntityID): any;

/**
 * Delete the cached path with this ID, please remember to do this
 */
declare function AIPlayer_ClearCachedPath(player: PlayerID, requestingID: number): any;

/**
 * returns true if enemy territory has been detected
 */
declare function AIPlayer_EnemyTerritoryDetected(player: PlayerID): any;

/**
 * Tests to see if any entity in the group is part of a wall that matches the supplied conditions eGroup contains list of entities to test, minSections is minimum number of connected wall sections, unbreached means all sections must be unbroken.  Returns closest entity to refPosition
 */
declare function AIPlayer_FindClosestSiegeTarget(player: PlayerID, eGroup: EGroupID, minSections: number, unbreached: boolean, refPosition: Position): any;

/**
 * Find a clump containing the given position, or return -1 if there isn't one.
 */
declare function AIPlayer_FindClumpContainingPosition(aiPlayer: PlayerID, pos: Position, targetFilterFlags: number): any;

/**
 * Returns the anchor build position
 */
declare function AIPlayer_GetAnchorPosition(aiPlayer: PlayerID): any;

/**
 * returns a 0-based index of the best clump of enemy squads within the given tolerance to the position passed in
 */
declare function AIPlayer_GetBestClumpForPositionIdx(pPlayer: PlayerID, position: Position, pAbilityPBG: PropertyBagGroup, minRange: number, maxRange: number, targetFilterFlags: number, minNumSquads: number): any;

/**
 * returns a 0-based index of the best clump of enemy squads within the given tolerance to the AI squad
 */
declare function AIPlayer_GetBestClumpForSquadIdx(pPlayer: PlayerID, pSquad: SquadID, pAbilityPBG: PropertyBagGroup, minRange: number, maxRange: number, targetFilterFlags: number, minNumSquads: number): any;

/**
 * returns a 0-based index of the best clump of allied or enemy squads within the given tolerance to the AI player
 */
declare function AIPlayer_GetBestClumpIdx(pPlayer: PlayerID, minRange: number, maxRange: number, clumpSelectionGlobalBestMinRatio: number, targetFilterFlags: number, minNumSquads: number): any;

/**
 * returns a 0-based index of the best clump of allied or enemy squads within the given tolerance to the AI player
 */
declare function AIPlayer_GetBestClumpIdxForAbility(pPlayer: PlayerID, pAbilityPBG: PropertyBagGroup, minRange: number, maxRange: number, clumpSelectionGlobalBestMinRatio: number, targetFilterFlags: number, minNumSquads: number): any;

/**
 * returns a 0-based index of the best clump of owned squads within the given tolerance to the AI player
 */
declare function AIPlayer_GetBestOwnedClumpIdx(pPlayer: PlayerID, minRange: number, maxRange: number, clumpSelectionGlobalBestMinRatio: number, targetFilterFlags: number, minNumSquads: number): any;

/**
 * returns a 0-based index of the best clump of owned squads within the given tolerance to the AI player
 */
declare function AIPlayer_GetBestOwnedClumpIdxForAbility(pPlayer: PlayerID, pAbilityPBG: PropertyBagGroup, minRange: number, maxRange: number, clumpSelectionGlobalBestMinRatio: number, targetFilterFlags: number, minNumSquads: number): any;

/**
 * Returns a position that has the highest decayed traffic of either allies or enemies
 */
declare function AIPlayer_GetBestOwnTrafficPos(aiPlayer: PlayerID, minNumSquads: number): any;

/**
 * Returns a position that has the highest decayed traffic of either allies or enemies
 */
declare function AIPlayer_GetBestTrafficPos(aiPlayer: PlayerID, relationshipEnum: any, minNumSquads: number): any;

/**
 * Get the distance of the path requested with the given ID. < 0 means invalid request.
 */
declare function AIPlayer_GetCachedPathLength(player: PlayerID, requestingID: number): any;

/**
 * Return the path points of the calculated path from a previous pathfinding request if the result was successful and the path has at least two points.
 */
declare function AIPlayer_GetCachedPathPoints(player: PlayerID, requestingID: number): any;

/**
 * Returns an EGroup containing all capture points on the map owned by a player with the specified
 */
declare function AIPlayer_GetCapturePoints(aiPlayer: PlayerID, relationshipEnum: any, onlyCanPlaceSecuringStructure: boolean, egroupOut: EGroupID): any;

/**
 * Used for tactics; returns a "special error position" on failure that's nowhere inside the world
 */
declare function AIPlayer_GetClumpPosition(pPlayer: PlayerID, clumpIndex: number, targetFilterFlags: number): any;

/**
 * returns how close a position is to enemy territory
 */
declare function AIPlayer_GetDistanceToEnemyTerritory(player: PlayerID, position: Position): any;

/**
 * Calculate product of all multipliers in tableName
 * The result is intended to be applied to the tuning value corresponding to tableName, for use in the AI military target scoring function Allowable strings for tableName: front_line
 */
declare function AIPlayer_GetDynamicMultiplier(aiPlayer: PlayerID, tableName: Key): any;

/**
 * Calculate product of all unit type multipliers that match the entity's unit types
 * The result is intended to be used in the AI military target scoring function
 */
declare function AIPlayer_GetDynamicUnitTypeMultipliersForEntity(aiPlayer: PlayerID, targetEntity: EntityID): any;

/**
 * Calculate product of all unit type multipliers that match a unit type of an entity in the squad
 * The result is intended to be used in the AI military target scoring function
 */
declare function AIPlayer_GetDynamicUnitTypeMultipliersForSquad(aiPlayer: PlayerID, targetSquad: Squad): any;

/**
 * Returns a list of all resource deposit entities seen by the AI player
 */
declare function AIPlayer_GetKnownResourceDeposits(aiPlayer: PlayerID, resourceType: string, includeDepleted: boolean): any;

/**
 * Returns the local AIPlayer given a PlayerId (1000 and up)
 */
declare function AIPlayer_GetLocal(playerId: number): any;

/**
 * Returns the local AIPlayer given a Player pointer
 */
declare function AIPlayer_GetLocalFromPlayer(pPlayerIn: PlayerID): any;

/**
 * Get a homebase at the given position. If one doesn't exist it will be created.
 */
declare function AIPlayer_GetOrCreateHomebase(aiPlayer: PlayerID, targetPosition: Position): any;

/**
 * Used for tactics; returns a "special error position" on failure that's nowhere inside the world
 */
declare function AIPlayer_GetOwnedClumpPosition(pPlayer: PlayerID, clumpIndex: number): any;

/**
 * Returns an EGroup listing all military points owned by a player within a certain range of the position passed in that match a certain type
 */
declare function AIPlayer_GetOwnedMilitaryPointEntitiesInRange(militaryPointPBG: EntityPBG, position: Position, range: number): any;

/**
 * Returns all positions of military points allied with a player
 */
declare function AIPlayer_GetPositionsOfMilitaryPointsWithRelation(aiPlayer: PlayerID, relationshipEnum: any): any;

/**
 * Returns the utility of building the squad specified by the PBG, or 0 if not found
 */
declare function AIPlayer_GetSquadPBGProductionUtility(aiPlayer: PlayerID, squadPBG: ScarSquadPBG): any;

/**
 * Has path to target passes through a netural damaged structure
 */
declare function AIPlayer_IsDamagedStructureOnPathToTarget(aiPlayer: PlayerID, squad: SquadID, structurePbg: PropertyBagGroup, damagePercentage: number, searchRadius: number, targetPosition: Position): any;

/**
 * Returns whether the player is on an island (naval map) or not
 */
declare function AIPlayer_IsOnAnIsland(): any;

/**
 * Has the requested path been processed
 */
declare function AIPlayer_IsPathProcessed(aiPlayer: PlayerID, requestedPathRequestID: number): any;

/**
 * Returns whether or not a point is threatened (from the perspective of the player passed in)
 * If enemy builds are not filtered, allied will be. ThresholdFitness is from allied perspective. Typically you want to filter enemy buildings when defending, allied when attacking
 */
declare function AIPlayer_IsPointThreatened(aiPlayer: PlayerID, pos: Position, filterEnemyBuildings: boolean, thresholdFitness: number): any;

/**
 * Remove a multiplier previously applied to change the weight of a criteria in target scoring
 * The multiplier will be removed from the table for the given tuningValueName. Pass in the multiplier id returned from AIPlayer_PushScoreMultiplier. Allowable strings for tuningValueName: front_line
 */
declare function AIPlayer_PopScoreMultiplier(aiPlayer: PlayerID, tuningValueName: Key, id: AIScoreMultiplierID): any;

/**
 * Remove a multiplier previously applied to a unit type for target scoring
 * The multiplier will be removed from the table for the given unitTypeName. Pass in the multiplier id used earlier with AIPlayer_PushScoreMultiplier.
 */
declare function AIPlayer_PopUnitTypeScoreMultiplier(aiPlayer: PlayerID, unitTypeName: Key, id: AIScoreMultiplierID): any;

/**
 * Was the processed path successful? Only supply requestID for a processed path
 */
declare function AIPlayer_ProcessedPathSuccessful(aiPlayer: PlayerID, processedPathRequestID: number): any;

/**
 * Add a multiplier to change the weight of a criteria in target scoring
 * The multiplier will be pushed to a table for the given tuningValueName. All multipliers in the table will be multiplied together and applied to the corresponding static tuning value. The  multiplierID passed in can be passed to AIPlayer_PopScoreMultiplier to remove it. Allowable strings for tuningValueName: front_line DefendStructure AttackStructure EnemyClump
 */
declare function AIPlayer_PushScoreMultiplier(aiPlayer: PlayerID, tuningValueName: Key, multiplier: number, multiplierID: AIScoreMultiplierID): any;

/**
 * Add a multiplier to give weight to a unit type in target scoring
 * The multiplier will be pushed to a table for the given unitTypeName. All multipliers in the table will be multiplied together and applied to targets with the corresponding unit type. multiplierId identifies the
 */
declare function AIPlayer_PushUnitTypeScoreMultiplier(aiPlayer: PlayerID, unitTypeName: Key, multiplier: number, multiplierID: AIScoreMultiplierID): any;

/**
 * Remove entities (buildings) homebase assignment. Entities must be owned by player.
 */
declare function AIPlayer_RemoveEntityHomebase(aiPlayer: PlayerID, eGroup: EGroupID): any;

/**
 * Remove squads homebase assignment. Squads must be owned by player.
 */
declare function AIPlayer_RemoveSquadHomebase(aiPlayer: PlayerID, sGroup: SGroupID): any;

/**
 * Request a high path between the start and destination, supply a unique ID and the PBG of the largest entity that will be following the path.
 */
declare function AIPlayer_RequestHighPath(player: PlayerID, requestingID: number, start: Position, end: Position, pathingEntityPBG: PropertyBagGroup, requiresPartialPath: boolean): any;

/**
 * Clears the ability priority override
 */
declare function AIPlayer_ResetAbilityPriorityOverride(player: PlayerID, abilityPBG: PropertyBagGroup): any;

/**
 * Clears the ability priority override for all the abilities contained in the AIAbilityBag
 */
declare function AIPlayer_ResetAIAbilityPriorityOverride(player: PlayerID, aiAbilityPBG: PropertyBagGroup): any;

/**
 * Sets the ability priority override for all the AISquads owned by the player. -1 to disable the ability. NOTE: Encounter overrides have higher priority.
 */
declare function AIPlayer_SetAbilityPriorityOverride(player: PlayerID, abilityPBG: PropertyBagGroup, priority: number): void;

/**
 * Sets the ability priority override for all the abilities contained in the AIAbilityBag for all the AISquads owned by the player. -1 to disable the ability. NOTE: Encounter overrides have higher priority.
 */
declare function AIPlayer_SetAIAbilityPriorityOverride(player: PlayerID, aiAbilityPBG: PropertyBagGroup, priority: number): void;

/**
 * Add entities (buildings) to a homebase. Entities must be owned by player.
 */
declare function AIPlayer_SetEntityHomebase(aiPlayer: PlayerID, eGroup: EGroupID, homeBaseID: number): void;

/**
 * Add squads to a homebase. Squads must be owned by player.
 */
declare function AIPlayer_SetSquadHomebase(aiPlayer: PlayerID, sGroup: SGroupID, homeBaseID: number): void;

/**
 * Set the base strategic intention of a player
 */
declare function AIPlayer_SetStrategicBaseIntention(player: PlayerID, intentionName: string, value: number): void;

/**
 * Toggle debug draw for the specified path, -1 will draw all of them
 */
declare function AIPlayer_ToggleDrawCachedPath(requestingID: number, on: boolean): any;

/**
 * Updates what the skirmish AI is wanting to gather
 */
declare function AIPlayer_UpdateGathering(pPlayer: PlayerID): any;

/**
 * Requests the skirmish AI to update attack encounters and capture tasks
 */
declare function AIPlayer_UpdateSkirmishAttackAndCaptureTasks(pPlayer: PlayerID): any;

/**
 * Requests the skirmish AI to update player abilities
 */
declare function AIPlayer_UpdateSkirmishPlayerAbilities(pPlayer: PlayerID): any;

/**
 * Updates what the skirmish AI is trying to produce
 */
declare function AIPlayer_UpdateSkirmishProduction(pPlayer: PlayerID): any;

/**
 * Requests the skirmish AI to update scout encounters
 */
declare function AIPlayer_UpdateSkirmishScoutingTasks(pPlayer: PlayerID): any;

/**
 * Tries to find cover within a certain radius of a position, traveling a max distance to get there, and possibly comparing against current position's cover. If no cover is found, it returns an invalid position
 */
declare function AISquad_FindFilteredCoverCompareCurrent(player: PlayerID, aiSquad: SquadID, maxPathDistanceFromGoal: number, compareToCurrentCover: boolean): any;

/**
 * Returns the closest cuttable obstruction entity to the given squad
 */
declare function AISquad_GetClosestCuttableObstruction(pSquad: SquadID, radius: number): any;

/**
 * Returns the closest obstruction entity to the given squad
 */
declare function AISquad_GetClosestObstruction(pSquad: SquadID, radius: number, bFilterAllied: boolean): any;

/**
 * Returns the closest obstruction entity to the given squad
 */
declare function AISquad_GetClosestObstructionOfType(pSquad: SquadID, radius: number, pbgtype: PropertyBagGroup): any;

/**
 * Get the position on the far side of the given clump relative to the given squad.
 */
declare function AISquad_GetClumpFarBound(aiSquad: SquadID, clumpIndex: number, targetFilterFlags: number): any;

/**
 * returns the current fallback position
 */
declare function AISquad_GetCurrentFallBackPosition(aiSquad: SquadID): any;

/**
 * Checks if the squad has been attacked within this time
 */
declare function AISquad_HasBeenAttacked(pAISquad: SquadID, historyTicks: number): any;

/**
 * Checks if the squad has fired its weapon within this time
 */
declare function AISquad_HasFiredWeapon(pAISquad: SquadID, historyTicks: number): any;

/**
 * Returns true if a path shorter than maxDistance between the AISquad and the target exists
 */
declare function AISquad_HasPathWithinDistance(aiSquad: SquadID, targetPosition: Position, maxDistance: number): any;

/**
 * Checks if the squad should fall back or brace itself given the current situation.
 */
declare function AISquad_ShouldFallBackOrBraceSelf(pAISquad: SquadID): any;

/**
 * Returns all ScarMarkers from the Scenario Editor with the given name. If you don't care about the type, pass in an empty string ( "" )
 * The type is defined on the ScarMarkerBlueprint in the Scenario Editor\n
 */
declare function AllMarkers_FromName(name: string, type: string): any;

/**
 * Converts an angle in degrees (0-360) to a short string representing a compass heading. 0 degrees is north; 90 degrees is east.
 */
declare function AngleToCardinalDirection(angle: number): string;

/**
 * Remove the movie mode framerate restriction
 */
declare function App_ClearMovieModeFramerate(): any;

/**
 * Return the current app time
 */
declare function app_currenttime(): any;

/**
 * Set the ideal frame rate for the game. Set to 0 if an unbounded frame rate is desired.
 */
declare function app_setidealframerate(frameRate: number): any;

/**
 * Run the game at specified frame rate (for capturing movies). Only works with 60 or 120, other rates are defaulted to 60. Setting it to 0 disables movie mode
 */
declare function App_SetMovieModeFramerate(frameRate: number): void;

/**
 * assigns each tradecart to trade
 */
declare function AssignTradecartsToTrade(): any;

/**
 * assigns each villager to gather from the nearest bush
 */
declare function AssignVillagersToBushes(): any;

/**
 * assigns each villager to "gather" from the nearest deers
 */
declare function AssignVillagersToDeer(): any;

/**
 * assigns each villager to gather from the nearest farm
 */
declare function AssignVillagersToFarms(): any;

/**
 * assigns each villager to gather from the nearest bush
 */
declare function AssignVillagersToFish(): any;

/**
 * assigns each villager to gather from the nearest gold mine
 */
declare function AssignVillagersToGold(): any;

/**
 * assigns each villager to "gather" from the nearest sheep
 */
declare function AssignVillagersToSheep(): any;

/**
 * assigns each villager to gather from the nearest stone mine
 */
declare function AssignVillagersToStone(): any;

/**
 * assigns each villager to gather from the nearest tree
 */
declare function AssignVillagersToWood(): any;

/**
 * Support modules may not exist yet, so let's delay this until we've initialized everything
 */
declare function Attack_ConnectSupportModules(): any;

/**
 * Stops the Attack module entirely and returns the units it contained
 */
declare function Attack_Disband(moduleData: any, OPT_returned_sgroup?: SGroupID): any;

/**
 * Finds what Attack module is currently using a given encounter
 */
declare function Attack_FindModuleByEncounterID(): any;

/**
 * Returns how many units this module started with
 */
declare function Attack_GetHighestUnitCount(): any;

/**
 * Returns the units currently in the module as a percentage of the unit count the module started with
 */
declare function Attack_GetRemainingUnitRatio(): any;

/**
 * Gets the SGroup of units involved in this Attack module
 */
declare function Attack_GetSGroup(): any;

/**
 * Returns the difference between the current amound of units and the starting unit count
 */
declare function Attack_GetUnitChangeFromStart(): any;

/**
 * Returns true if all the Attack module's units are dead
 */
declare function Attack_IsDefeated(): any;

/**
 * Callback function that signals to a module that its current encounter is completed
 */
declare function Attack_OnSuccess(): any;

/**
 * Updates the target of an Attack module.
 * newTarget can be a Location (either as a String or a LocationTable), or a MarkerID or Position
 */
declare function Attack_UpdateTargetLocation(attackModule: any, newTarget: string, OPT_attackMove?: boolean): any;

/**
 * Clamps the camera's target position to a marker
 */
declare function Camera_ClampToMarker(marker: MarkerID): void;

/**
 * Execute spline pan based on queued control points. Use B-Spline interpolation of points
 */
declare function Camera_ExecuteBSplinePan(totalT: number, controlRotation: boolean): any;

/**
 * Executes a camera pan that was captured using the Capture Tool. Expects that the "camera_spline" Camera set was pushed to the CameraSwitchboard, using Camera_Push("camera_spline") Returns the duration of the spline, so that the user can call Camera_Pop()
 */
declare function Camera_ExecuteCaptureCameraPan(cameraPanTable: any): any;

/**
 * Execute spline pan based on queued control points. Use Catmull-Rom interpolation of points
 */
declare function Camera_ExecuteCatromSplinePan(totalT: number, controlRotation: boolean): any;

/**
 * Execute spline pan based on queued control points. Use linear interpolation between points
 */
declare function Camera_ExecuteLinearSplinePan(totalT: number, controlRotation: boolean): any;

/**
 * Camera would move to the specified position. bPan is a boolean flag that pans the camera if set to true
 */
declare function Camera_FocusOnPosition(pos: Position, bPan: boolean): void;

/**
 * Camera will follow specified entity
 */
declare function Camera_FollowEntity(entity: EntityID): void;

/**
 * Camera would follow current selection
 */
declare function Camera_FollowSelection(): void;

/**
 * Camera will follow specified squad
 */
declare function Camera_FollowSquad(pSquad: SquadID): void;

/**
 * Get the current position for the camera. (Where the the camera currently is.)
 */
declare function Camera_GetCurrentPos(): any;

/**
 * Get the current target position for the camera. (Where the the camera currently is.)
 */
declare function Camera_GetCurrentTargetPos(): any;

/**
 * Get the current camera declination (tilt)
 */
declare function Camera_GetDeclination(): number;

/**
 * Get the default camera orbit (rotation).
 */
declare function Camera_GetDefaultOrbit(): any;

/**
 * Get the current camera orbit (rotation)
 */
declare function Camera_GetOrbit(): number;

/**
 * Get the pivot of the camera. (The position about which the camera is pivoting).
 * For autodeclinate camera, this is the lookat position.
 */
declare function Camera_GetPivot(): any;

/**
 * Get the current position for the camera. (Where the the camera currently is.)
 */
declare function Camera_GetPos(): any;

/**
 * Get the current target position for the camera.
 */
declare function Camera_GetTargetPos(): Position;

/**
 * Get the current zoom distance for the camera.
 */
declare function Camera_GetZoomDist(): number;

/**
 * Hide the camera mesh.
 */
declare function Camera_HideMesh(): any;

/**
 * Returns the enabled/disabled state of the camera input.
 */
declare function Camera_IsInputEnabled(): boolean;

/**
 * Is the camera mesh being shown?
 */
declare function Camera_IsMeshShown(): any;

/**
 * Queue a spline control point by position relative to the last queued position. Pan is deferred until requested by an execution function
 */
declare function Camera_QueueRelativeSplinePanPos(deltaPos: Position): any;

/**
 * Queue a spline control point by absolute position. Pan is deferred until requested by an execution function
 */
declare function Camera_QueueSplinePanPos(pos: Position): any;

/**
 * Clears state info related to camera focus
 */
declare function Camera_ResetFocus(): void;

/**
 * Set the current camera orbit relative to the current orbit (relative rotation).
 */
declare function Camera_ResetOrbit(): any;

/**
 * Reset camera position to default home position
 */
declare function Camera_ResetToDefault(): void;

/**
 * Set the current camera declination (tilt)
 */
declare function Camera_SetDeclination(dec: number): void;

/**
 * Set the default camera declination (tilt).
 */
declare function Camera_SetDefaultDeclination(declination: number): void;

/**
 * Set the default camera orbit (rotation).
 */
declare function Camera_SetDefaultOrbit(orbit: number): void;

/**
 * Set the default zoom distance for the camera.
 */
declare function Camera_SetDefaultZoomDist(distance: number): void;

/**
 * Enables / Disables camera input.
 */
declare function Camera_SetInputEnabled(enabled: boolean): void;

/**
 * Set the current camera orbit (rotation)
 */
declare function Camera_SetOrbit(orbit: number): void;

/**
 * Set the current camera orbit relative to the current orbit (relative rotation).
 */
declare function Camera_SetOrbitRelative(deltaOrbit: number): void;

/**
 * Set the current zoom distance for the camera.
 */
declare function Camera_SetZoomDist(distance: number): void;

/**
 * Show the camera mesh.
 */
declare function Camera_ShowMesh(): any;

/**
 * Orbit the camera a given number of degrees clockwise from the current orbit position in a given amount of time.
 */
declare function Camera_StartDeltaOrbit(deltaOrbit: number, totalT: number): any;

/**
 * Orbit the camera to an end orbit position from the current orbit position in a given amount of time. Will choose shortest rotational direction.
 */
declare function Camera_StartOrbit(endOrbit: number, totalT: number): any;

/**
 * Pan the camera between two positions in a given amount of time. Interpolates the camera to the given zoom.
 */
declare function Camera_StartPan(startPos: Position, endPos: Position, totalT: number, zoomDistance: number): any;

/**
 * Pan the camera to a position in a given amount of time from the position in front of the queue.
 */
declare function Camera_StartPanTo(endPos: Position, totalT: number, zoomDistance: number): any;

/**
 * Pan the camera by some amount in a given amount of time. This is relative to the position in front of the queue.
 */
declare function Camera_StartRelativePan(deltaPos: Position, totalT: number, zoomDistance: number): any;

/**
 * Start a transition to a relative zoom distance over a certain amount of time.
 */
declare function Camera_StartRelativeZoomDist(deltaZoomDist: number, totalT: number): any;

/**
 * Start a transition from one zoom distance to another over a certain amount of time.
 */
declare function Camera_StartZoomDist(startZoomDist: number, endZoomDist: number, totalT: number): any;

/**
 * Start a transition to a zoom distance over a certain amount of time.
 */
declare function Camera_StartZoomDistTo(endZoomDist: number, totalT: number): any;

/**
 * Stop an ongoing camera pan.
 */
declare function Camera_StopPan(): any;

/**
 * Toggle the debug free camera
 */
declare function Camera_ToggleDebugCamera(): any;

/**
 * Toggle the camera mesh.
 */
declare function Camera_ToggleMeshShown(show: boolean): any;

/**
 * Frees up the camera (so it's not clamped to a marker anymore)
 */
declare function Camera_Unclamp(): void;

/**
 * Cheat to award all ribbons and medals
 */
declare function Cheat_GrantAllRibbonsAndMedals(): any;

/**
 * Cheat to reset all achievement progress
 */
declare function Cheat_ResetAchievementProgress(): any;

/**
 * Get the value for a command line arg.
 */
declare function cmdline_string(name: string): any;

/**
 * Basic test: can all buildings take damage
 */
declare function CombatTest_BasicBuildingDamage(): any;

/**
 * Basic test: can all combat units take damage and deal damage?
 */
declare function CombatTest_BasicDamage(): any;

/**
 * Test whether blueprint_name (squad) can kill a villager
 */
declare function CombatTest_DealDamage(): any;

/**
 * Test whether blueprint_name (entity/building) can be killed by a trebuchet
 */
declare function CombatTest_EntityTakeDamage(): any;

/**
 * Test whether blueprint_name (squad) can kill a villager. This test works better for naval attackers
 */
declare function CombatTest_NavalDealDamage(): any;

/**
 * Test whether blueprint_name (squad) can be killed by a combat unit. This test is specifically adjusted for naval units.
 */
declare function CombatTest_NavalTakeDamage(): any;

/**
 * Test whether blueprint_name (squad) can be killed by a combat unit
 */
declare function CombatTest_TakeDamage(): any;

/**
 * Returns true if a given player has spotted a given set of buildings, either any or all
 */
declare function Condition_BuildingsSpotted_Check(): any;

/**
 * Checks if a given egroup has living members or not
 */
declare function Condition_EGroupEmpty_Check(condition: any, context: any): TRUE;

/**
 * Checks whether a player has a certain number of units, optionally of a certain type
 */
declare function Condition_HasUnits_Check(): any;

/**
 * Checks if a unit with the condition's tag is at the given marker
 */
declare function Condition_TaggedUnitAtLocation_Check(condition: any, context: any): TRUE;

/**
 * Checks if all units belonging to a player are close enough to a given marker
 */
declare function Condition_UnitAtLocation_Check(condition: any, context: any): TRUE;

/**
 * Hide the cursor
 */
declare function cursor_hide(): any;

/**
 * Set the cursor position
 */
declare function cursor_setposition(x: number, y: number): any;

/**
 * Show the cursor
 */
declare function cursor_show(): any;

/**
 * Get dca variable value for an entity. Can be used to validate presentation state from lua.
 */
declare function dca_get_variable_value(pEntity: EntityID, variableName: string): any;

/**
 * Returns the current decal id in use; used in conjunction with Decal_RemoveAllDecalsAfterId
 */
declare function Decal_GetNextDecalId(): any;

/**
 * Erases all placed decals after id (inclusive); used in conjunction with Decal_GetNextDecalId
 */
declare function Decal_RemoveAllDecalsAfterId(id: number): any;

/**
 * Adds an SGroup of new units to this module's existing SGroup
 */
declare function Defend_AddSGroup(): any;

/**
 * Creates a new encounter
 */
declare function Defend_CreateEncounter(): any;

/**
 * Stops the Defend module entirely, optionally returns the units it contained to an SGroup, which is NOT cleared
 */
declare function Defend_Disband(moduleData: any, OPT_returned_sgroup?: SGroupID): any;

/**
 * Finds what Defend module is currently using a given encounter
 */
declare function Defend_FindModuleByEncounterID(): any;

/**
 * Returns how many units this module started with
 */
declare function Defend_GetHighestUnitCount(): any;

/**
 * Returns the units currently in the module as a percentage of the unit count the module started with
 */
declare function Defend_GetRemainingUnitRatio(): any;

/**
 * Retrieves the units associated with this SGroup result SGROUP
 */
declare function Defend_GetSGroup(): any;

/**
 * Returns the difference between the current amound of units and the starting unit count
 */
declare function Defend_GetUnitChangeFromStart(): any;

/**
 * Initializes a new Defend module
 */
declare function Defend_Init(): any;

/**
 * Returns true if all the Defend module's units are dead
 */
declare function Defend_IsDefeated(): any;

/**
 * Updates the Defend module based on mission context
 */
declare function Defend_Monitor(): any;

/**
 * Removes an SGroup from this module's existing SGroup
 */
declare function Defend_RemoveSGroup(moduleData: any, sgroup: SGroupID, OPT_updateComposition?: boolean): any;

/**
 * Manually orders the module to request units.
 */
declare function Defend_RequestUnits(): any;

/**
 * Stops the Defend module's encounter
 */
declare function Defend_Stop(): any;

/**
 * Updates the target of a Defend module.
 * newTarget can be a Location (either as a String or a LocationTable), or a Marker or Position
 */
declare function Defend_UpdateTargetLocation(moduleData: any, newTarget: string): any;

/**
 * Dissolves a module and folds its units into another module
 */
declare function DissolveModuleIntoModule(): any;

/**
 * Clear debug rendering.
 */
declare function dr_clear(frame: string): any;

/**
 * Draw a circle, positioned in 3D, aligned to scren.
 */
declare function dr_drawCircle(frame: string, x: number, y: number, z: number, radius: number, r: number, g: number, b: number): any;

/**
 * Set auto clear for named frame.
 */
declare function dr_setautoclear(frame: string, bEnable: boolean): any;

/**
 * Set display of named frame.
 */
declare function dr_setdisplay(frame: string, bEnable: boolean): any;

/**
 * Draw text, positioned in 2D, aligned to the screen.
 * (x,y) gives position in normalized screen coordinates cmd is the text to print r,g,b give colour values from 0-255
 */
declare function dr_text2d(frame: string, x: number, y: number, cmd: string, r: number, g: number, b: number): any;

/**
 * Draw text, positioned in 3D, aligned to screen.
 */
declare function dr_text3d(frame: string, x: number, y: number, z: number, cmd: string, r: number, g: number, b: number): any;

/**
 * Draw the ref-posed OBB of a model
 */
declare function DrawOBB(pModel: RenderModel, transform: Transform): any;

/**
 * Calls an Entity_ function on every entity in an egroup
 * The first parameter of the supplied function must be EntityID
 */
declare function EGroup_CallEntityFunction(egroup: EGroupID, entityFunction: any, list: any): void;

/**
 * Returns whether ALL or ANY entities in an egroup satisfy a condition, using an Entity_ function to perform the query on each entity
 * The first parameter of the supplied function must be EntityID
 */
declare function EGroup_CallEntityFunctionAllOrAny(egroup: EGroupID, all: boolean, entityFunction: any, list: any): void;

/**
 * Returns the total health of all units in a entity group, excluding entities that currently cannot be damaged.
 * This uses the "proper" measure of health for panel buildings, so should accurately reflect what the user sees.
 */
declare function EGroup_GetTotalHealthFromCanBeDamagedOnly(egroup: EGroupID): number;

/**
 * Build a structure in the center of a Hex properly
 * Pass in nil for Player to build a neutral object
 */
declare function Entity_BuildStructureOnHex(player: PlayerID, blueprint: Blueprint, spawn: Hex | Position, egroup?: EGroupID): EntityID;

/**
 * Starts a save event the same way as Event_Start, but automatically sets highest priority and promotes the request
 * up the queue automatically. It waits for the existing event to finish, and does not cancel the existing event. STT_Quick: Saves the game by user request. Name is generated from campaign mission or skirmish preset name. STT_Auto: Campaign only. Saves the game by script request. Name is generated from campaign mission. STT_Standard: Saves the game using the name provided, overwriting if necessary - a suitable filename will be generated - saves to Campaign or Skirmish folder depending on currently running scenario STT_Dev: Saves the game using the filename provided - for development and testing only
 */
declare function Event_Save(type: SaveTriggerType): any;

/**
 * Starts a save event the same way as Event_Save, but with a filename specified.
 * STT_Quick: Saves the game by user request. Name is generated from campaign mission or skirmish preset name. Supplied filename is ignored. STT_Auto: Campaign only. Saves the game by script request. Name is generated from campaign mission. Supplied filename is ignored. STT_Standard: Saves the game using the name provided, overwriting if necessary - a suitable filename will be generated - saves to Campaign or Skirmish folder depending on currently running scenario STT_Dev: Saves the game using the filename provided - for development and testing only
 */
declare function Event_SaveWithName(type: SaveTriggerType, fileName: string): any;

/**
 * Creates a Call to Action UI event. cta_type can be CTA_ALARM, CTA_CELEBRATE, CTA_UNIQUE_STAKES, or CTA_UNIQUE_CHANGE. onTriggerIntel plays when the Call appears and must be an Intel Event; onClickFunction plays when the Call is clicked and can be a standard function or an Intel Event. Pass in a postition, marker, or group to move the camera when user clicks on CTA
 */
declare function EventCues_CallToAction(text: string, cta_type: string, OPT_onTriggerIntel?: any, OPT_onClickFunction?: any, OPT_pos?: Position | MARKER | Group, OPT_duration?: number, OPT_customImage?: string, OPT_customStinger?: string): any;

/**
 * Clear any Call To Action that is currently displayed
 */
declare function EventCues_ClearCallToAction(): any;

/**
 * Creates a center screen high priority player cue
 */
declare function EventCues_HighPriority(text: string, description: string): any;

/**
 * Throws an error to lua and print out the error message
 */
declare function fatal(state: Lua_State): number;

/**
 * Throws an error to lua and print out the error message
 */
declare function fatal(state: Lua_State): number;

/**
 * Find a food deposit on screen that has visible UI decorators
 * Returns a food deposit entity and a boolean indicating if the entity itself has visible decorators.
 * If not, the squad has visible decorators.
 */
declare function FindDecorableFoodDepositInSight(): EntityID;

/**
 * Calculate the dimensions and centre offset of a formation for given squads.  Returns as a ScarPosition {x = Width, y = Height, z = centre offset along forward (Height) direction}.  Returns a zero vector if error.
 */
declare function Formation_GetDimensionsAndOffset(sgroup: SGroupID): any;

/**
 * Place an SGroup or table of SGroups in formation
 */
declare function Formation_PlaceSquadGroupsInFormation(sgroup: SGroupID, position: Position, direction: Position): any;

/**
 * Calculate formation positions and set the squads' positions to the formation positions
 */
declare function Formation_PlaceSquadsInFormation(sgroup: SGroupID, position: Position, direction: Position): any;

/**
 * force the gamma
 */
declare function fx_dump(): any;

/**
 * force the LOD of the FX system (use 0 to enable dynamic LOD)
 */
declare function fx_forcelod(lod: number): any;

/**
 * enable logging of fx, it it wasn't already
 */
declare function fx_logenable(enable: boolean): any;

/**
 * toggle effects on or off
 */
declare function fx_toggle(): any;

/**
 * toggle effects rendering on or off
 */
declare function fx_toggleRendering(): any;

/**
 * use the debugshader, which will render all fx green
 */
declare function fx_usedebugshader(enable: boolean): any;

/**
 * Take over control of the local player
 */
declare function Game_AIControlLocalPlayer(): any;

/**
 * deletes save game(s), even if it is not loadable with the current version of the game
 */
declare function Game_DeleteSaveGameDev(filename: string): any;

/**
 * Enables/Disables all input EXCEPT for ESC and F10.
 */
declare function Game_EnableInput(enabled: boolean): void;

/**
 * Fast forward all production queues as if x seconds passed, returns info about what has been produced Returns a lua table of the format { (string)PlayerID : { (string)EntityProducerName : { "research" : { (string)researchedItemName : (int)number of times researched }, "production" : { (string)producedItemName : (int)number of items produced }, }, }, } for each player present, for each entity that produced after fast forwarding, for each item researched and produced
 */
declare function Game_FastForwardProduction(secondsForward: number): any;

/**
 * For all players fast forwards their resource income as if x seconds passed
 */
declare function Game_FastForwardResourceIncome(secondsForward: number): any;

/**
 * get the simulation update rate
 */
declare function Game_GetSimRate(): any;

/**
 * Returns current single player difficulty. Values are GD_EASY, GD_NORMAL, GD_HARD, GD_EXPERT.
 */
declare function Game_GetSPDifficulty(): number;

/**
 * injects terrain type values into passed table to use for terrain creation
 */
declare function Game_GetTerrainTypeVariables(terrainVars: any): any;

/**
 * Returns lock state of stored data at location named by dataID.
 */
declare function Game_IsDataLocked(dataID: string): any;

/**
 * check if scenario has FTUE boolean set in match setup
 */
declare function Game_IsFtue(): any;

/**
 * Use to test whether the game is running in RTM mode or not. Using -rtm from the command line will cause this function to also return true in non-RTM builds.
 */
declare function Game_IsRTM(): boolean;

/**
 * Checks that the save system has a save queued or is actively saving.
 */
declare function Game_IsSaving(): any;

/**
 * load this scenario as an single player match
 */
declare function Game_LaunchSPGeneratedMap(biomePbgName: string, layoutPbgName: string, sizePbgName: string, difficulty: number, terrainResult: any): any;

/**
 * Load data store to disk
 */
declare function Game_LoadDataStore(id: string, path: string, binary: boolean): any;

/**
 * load this game as a single player match, full path is expected excluding extension
 */
declare function Game_LoadFromFileDev(filename: string): any;

/**
 * load the savegame with the given internal name from Campaign or Skirmish folder depending on currently running scenario
 */
declare function Game_LoadGame(name: string): any;

/**
 * load this scenario as an single player match
 */
declare function Game_LoadSP(scenarioName: string, difficulty: number): any;

/**
 * If you are running something that is non-deterministic like a getlocalplayer conditional, you can lock the random to make sure no one down the callstack will throw the game random index out of sync and cause a sync error. REMEMBER TO UNLOCK WHEN YOU ARE DONE
 */
declare function Game_LockRandom(): void;

/**
 * Quits the app immediately
 */
declare function Game_QuitApp(): void;

/**
 * Quits the app immediately with the given exitCode
 */
declare function Game_QuitAppWithCode(exitCode: number): any;

/**
 * Removes the data store at the given path.
 */
declare function Game_RemoveTableData(path: string): any;

/**
 * Loads table data stored at datastore[dataID] into global lua table var named <dataID>. Set clearFromStorage to true to clear data from store.
 */
declare function Game_RetrieveTableData(dataID: string, clearFromStorage: boolean): any;

/**
 * Save data store to disk
 */
declare function Game_SaveDataStore(id: string, path: string, binary: boolean): any;

/**
 * checks if the save game exists in dev folder and is loadable, filename is expected excluding folder and extension
 */
declare function Game_SaveGameExistsDev(filename: string): any;

/**
 * Fades the screen to a given RGBA colour over a number of seconds
 */
declare function Game_ScreenFade(r: number, g: number, b: number, a: number, timeSecs: number): void;

/**
 * Updates the status of an in-game achievement or challenge.
 */
declare function Game_SendCustomChallengeEvent(player: PlayerID, eventType: ChallengeEventType, amount: number): any;

/**
 * sets lock state for stored data at location named by dataID.
 */
declare function Game_SetDataLock(dataID: string, lock: boolean): void;

/**
 * set the simulation update rate
 */
declare function Game_SetSimRate(rate: number): void;

/**
 * Brings up the pause menu. The game does not get paused until the end of the current sim tick, so anything that comes after Game_ShowPauseMenu in your function will still get executed, as well as any rules set to run during that frame.
 */
declare function Game_ShowPauseMenu(): void;

/**
 * Stores provided table into long-lived data store at location named by dataID.
 */
declare function Game_StoreTableData(dataID: string, table: RefTable): any;

/**
 * Transitions to another atmosphere. Overwrites current transitions. Uses predefined atmosphere settings (only compatible with EEditor maps).
 */
declare function Game_TransitionToState(stateName: string, transitionTimeSec: number): any;

/**
 * unlock the random from a previous lockrandom call only
 */
declare function Game_UnLockRandom(): void;

/**
 * Finds a marker with a given core name and a cardinal heading
 */
declare function GetMarkerWithDirection(markerName: string, markerDir: number): MARKER;

/**
 * Grabs villagers and gets them moving around to look busy. Meant for non-player/AI villagers only. Should be run as an Interval Rule.
 * Example: Rule_AddInterval(IdleVillagers_MakeBusy, 5, {marker = mkr_town, player = player2, sgroup = sg_spare_villagers})
 */
declare function IdleVillagers_MakeBusy(the: In, sgroup: And, egroup: And): any;

/**
 * A class-like object used as a Singleton to read and write a JSON file
 * Initializes based on command line parameter -test_result_file <alias:path>. Checks for temporary logs on creation and inserts them into the result data. NOTE: A lot of information in the file is redundant to make it easier to process and easier to read for a human.
 */
declare function Initialize(): any;

/**
 * Dump content of inventory to a file
 */
declare function inv_dump(): any;

/**
 * Returns true if the pbg class list contains a type that has economic utility
 */
declare function IsEconomyClassStructure_CS(pbg: PropertyBagGroup): any;

/**
 * Can this structure be used to secure territory
 */
declare function IsSecuringStructure_CS(pbg: PropertyBagGroup): any;

/**
 * Can this structure be used to secure territory
 */
declare function IsSecuringStructurePlacedOnPoint_CS(pbg: PropertyBagGroup): any;

/**
 * Returns true if this object is a structure (something with a site_ext)
 */
declare function IsStructure_CS(pbg: PropertyBagGroup): any;

/**
 * Print all players information.
 */
declare function listplayers(): any;

/**
 * Get the player's equipped elite at the specified index for their currently set race
 */
declare function Loadout_GetEquippedArmyUnitAtIndex(player: PlayerID, index: number): any;

/**
 * Get the number of elites currently equipped for the player's current race
 */
declare function Loadout_GetEquippedArmyUnitsCount(player: PlayerID): any;

/**
 * DEV ONLY: Converts ansi text to localized text.
 * Your text will have to get localized properly at some point before final.   When converting text with this function you will get LOC: prefixed to your text
 */
declare function LOC(text: string): string;

/**
 * Empty string.
 * This will create an empty localized string.
 */
declare function Loc_Empty(): string;

/**
 * Returns a localized string containing the integer.
 */
declare function Loc_FormatInteger(integer: number): any;

/**
 * Returns a localized string containing the number to the specified number of decimal places.
 */
declare function Loc_FormatNumber(number: number, numDecimalPlaces: number): any;

/**
 * Returns a formatted time string in hours, minutes, and seconds. can omit leading zeroes.
 */
declare function Loc_FormatTime_H_M_S(secs: number, leading_zeroes: boolean): any;

/**
 * Returns a formatted time string in minutes and seconds. can omit leading zeroes.
 */
declare function Loc_FormatTime_M_S(secs: number, leading_zeroes: boolean): any;

/**
 * Returns a formatted time string in minutes, seconds, and milliseconds. can omit leading zeroes.
 */
declare function Loc_FormatTime_M_S_MS(secs: number, leading_zeroes: boolean): any;

/**
 * Returns the localized string identified by the specified id.
 */
declare function Loc_GetString(id: any): any;

/**
 * Finds a location based on the identifier
 * Locates locations based on identifier type: TABLE (location matching identifier), STRING (location with identifier as descriptor), ENTITY/EGROUP (location containing identifier), SCARPOS (closest location to identifier). Returns nil if nothing is found.
 */
declare function LOCATION(identifier: any | string | EntityID | EGroup | Position): any;

/**
 * Adds units to the appropriate modules associated with this location.
 * Villagers are added to Townlife if there is one. Military units are added to defend if there is one. Left over units are added to the sgroup_unassigned sgroup instead.
 */
declare function Location_AddSGroup(): any;

/**
 * Finds a location with the given descriptor. Returns nil if none exists.
 */
declare function Location_FromDescriptor(descriptor: string): any;

/**
 * Run simulation and presentation in lockstep, with simulation ticked every frame (useful for debugging sync errors)
 */
declare function lockstep_simulation_presentation_toggle(): any;

/**
 * Returns a newly created marker with the given attributes [direction] is expecting a direction vector and not a position relative to [pos]
 */
declare function Marker_Create(name: string, type: string, pos: Position, direction: Position, radius: number): any;

/**
 * Finds a marker in an entity, creates a SCAR marker there and returns the new marker's name.
 * Uses the MarkerExt to find a marker inside an entity. Creates a SCAR marker at the internal marker's location. Returns the new SCAR marker's name.
 */
declare function Marker_CreateMarkerFromEntityMarker(entity: EntityID, internalMarker: string, newMarker: string): any;

/**
 * Delete this marker, only recommended for dynamically created markers
 */
declare function Marker_Destroy(marker: MarkerID): any;

/**
 * Returns true if a generic number attribute exists for the marker type.
 */
declare function Marker_DoesNumberAttributeExist(marker: MarkerID, attrname: string): boolean;

/**
 * Returns true if a generic string attribute exists for the marker type.
 */
declare function Marker_DoesStringAttributeExist(marker: MarkerID, attrname: string): boolean;

/**
 * Returns true if marker exists. If you don't care about the type, pass in an empty string ( "" )
 */
declare function Marker_Exists(name: string, type: string): boolean;

/**
 * Returns a ScarMarker from the Mission Editor. If you don't care about the type, pass in an empty string ( "" )
 * The type is defined in the markers list of the mission editor when placing markers.  You will need the result of this function to call any functions that start with Marker_
 */
declare function Marker_FromName(name: string, type: string): MarkerID;

/**
 * Returns a vector for the marker direction
 */
declare function Marker_GetDirection(marker: MarkerID): Position;

/**
 * Returns the name of a given marker.  This value gets set in the Mission Editor.
 */
declare function Marker_GetName(marker: MarkerID): string;

/**
 * Returns a generic number attribute defined in a marker.
 * Different marker types have different attributes. Note: All marker types have Name and Proximity.  Do not use this function to retrieve these values, use Marker_GetName and Marker_GetProximity instead.
 */
declare function Marker_GetNumberAttribute(marker: MarkerID, attrname: string): number;

/**
 * Returns the position of a given marker.
 */
declare function Marker_GetPosition(marker: MarkerID): Position;

/**
 * Returns the proximity dimensions of a given marker.  If non rectangular, default value is returned Dimensions are 2d but returned in 3d world space (terrain mapped to x,z) This value gets set in the Scenario Editor.
 */
declare function Marker_GetProximityDimensionsOrDefault(marker: MarkerID, defaultWidth: number, defaultHeight: number): any;

/**
 * Returns the proximity radius of a given marker.  Only for marker with proximity type PT_Circle. This value gets set in the Mission Editor.
 */
declare function Marker_GetProximityRadius(marker: MarkerID): number;

/**
 * Returns the proximity radius of a given marker.  If non circular, default value is returned This value gets set in the Scenario Editor.
 */
declare function Marker_GetProximityRadiusOrDefault(marker: MarkerID, defaultValue: number): any;

/**
 * Function List
 */
declare function Marker_GetStringAttribute(marker: MarkerID, attrname: string): string;

/**
 * Returns the typename of a given marker.  This is the typename from the Mission Editor (name displayed when placing markers)
 */
declare function Marker_GetType(marker: MarkerID): string;

/**
 * Returns if a marker has a defined (non-default) proximity range
 */
declare function Marker_HasProximityRange(marker: MarkerID): any;

/**
 * Returns true if the given position is in the markers proximity radius or proximity rectangle (depending on the type).
 */
declare function Marker_InProximity(marker: MarkerID, pos: Position): boolean;

/**
 * Set the proximity shape of a marker to a circle with size radius
 */
declare function Marker_SetProximityCircle(marker: MarkerID, radius: number): void;

/**
 * Set the proximity shape of a marker to point marker (no proximity)
 */
declare function Marker_SetProximityPoint(marker: MarkerID): void;

/**
 * Set the proximity shape of a marker to a rectangle with dimensions width and height
 */
declare function Marker_SetProximityRectangle(marker: MarkerID, width: number, height: number): void;

/**
 * Gives the sgroup a series of queued orders to go to each marker with the same markerName.
 */
declare function MarkerPaths_AttackMoveSGroupAlongPath(sgroup: SGroupID, markerName: string, opt_markerType?: string): any;

/**
 * Clears the minimap path with the given pathName string, if there is one. If removePath, that path is entirely deleted; otherwise it persists and can be used again
 */
declare function MarkerPaths_ClearIcons(pathName: string, removePath: boolean): any;

/**
 * Follow-up gate locking function, because you can't call two commands on an Entity in the same frame
 */
declare function MarkerPaths_GenerateIcons(pathName: string, pointList: any, iconName: string, spacing: undefined | number): any;

/**
 * Gives the sgroup a series of queued orders to go to each marker with the same markerName.
 */
declare function MarkerPaths_MoveSGroupAlongPath(sgroup: SGroupID, markerName: string, opt_markerType?: string, opt_startMarker?: number, opt_endMarker?: number): any;

/**
 * Write the OS map of allocated memory to the log folder
 */
declare function memdump(): any;

/**
 * Write the OS map of allocated memory to the log folder
 */
declare function memdumpf(foldername: string): any;

/**
 * Returns the numbers of memory pools
 */
declare function mempoolcount(): any;

/**
 * Given a poolID it will return the current memory in use
 */
declare function mempoolinuse(int: number): any;

/**
 * Given a poolID it will return the max amount of memory this pool has allocated
 */
declare function mempoolmax(int: number): any;

/**
 * Given a poolID it will return the name of the pool
 */
declare function mempoolname(poolid: number): any;

/**
 * Ask the OS to reduce the memory allocated to the game
 */
declare function memshrink(): any;

/**
 * Write to a file all allocation content for specified pool
 */
declare function memtofile(pool: string): any;

/**
 * Abort straight out of the game to the frontend, without asking the user
 */
declare function Misc_AbortToFE(): void;

/**
 * Let AI take over local player
 */
declare function Misc_AIControlLocalPlayer(): boolean;

/**
 * Appends given string to a file expects to receive a filename with an alias conserves existing file content \return Number returned is # bytes successfully written
 */
declare function Misc_AppendToFile(filename: string, text: string): any;

/**
 * Returns true if the app has had any keyboard input in the last second
 */
declare function Misc_DetectKeyboardInput(): boolean;

/**
 * Returns true if the app has had any mouse input in the last second
 */
declare function Misc_DetectMouseInput(): boolean;

/**
 * Turn on or off the performance test monitoring
 */
declare function Misc_EnablePerformanceTest(toEnable: boolean): void;

/**
 * Returns the string argument for a command line option. ex: for "-init test.lua" it would return "test.lua"
 */
declare function Misc_GetCommandLineString(option: string): string;

/**
 * returns the size of the file expects to receive a filename with an alias \return file size OR 0 if the file can not be read
 */
declare function Misc_GetFileSize(filename: string): any;

/**
 * Returns true if -option is specified on the command line
 */
declare function Misc_IsCommandLineOptionSet(option: string): boolean;

/**
 * Returns whether the game is running in dev mode. The rules for dev mode are a bit complicated between builds, so we cannot simply check the command line.
 */
declare function Misc_IsDevMode(): boolean;

/**
 * Check if position is on screen
 */
declare function Misc_IsPosOnScreen(pos: Position): boolean;

/**
 * Assumes 'data:' as root; Returns a table containing the names of files matching the supplied path.
 * Wildcards are allowed.
 */
declare function Misc_QueryDataDirectory(pathQuery: string, recursiveFind: boolean): any;

/**
 * Returns a table containing the names of files matching the supplied path.
 * Wildcards are allowed.
 */
declare function Misc_QueryDirectory(pathQuery: string, recursiveFind: boolean): any;

/**
 * Reads the file as string expects to receive a filename with an alias \return file content OR empty string if the file can not be read
 */
declare function Misc_ReadFile(filename: string): any;

/**
 * Deletes the given file expects to receive a filename with an alias \return true if file was deleted or did not exist in the first place, false otherwise
 */
declare function Misc_RemoveFile(filename: string): any;

/**
 * Save a screenshot
 */
declare function Misc_Screenshot(): any;

/**
 * Set the graphic file type for screenshot (.jpg, .tga)
 */
declare function Misc_ScreenshotExt(fileExtension: string): any;

/**
 * Sets the current autotest being used.  Used to set default text in the crash reports
 */
declare function Misc_SetCurrentAutotest(description: string): void;

/**
 * Shows or hides designer splats, which are splats in the UI folder
 */
declare function Misc_SetDesignerSplatsVisibility(bVisible: boolean): void;

/**
 * Writes the given string to a file expects to receive a filename with an alias overwrites any existing file content \return Number returned is # bytes successfully written
 */
declare function Misc_WriteFile(filename: string, text: string): any;

/**
 * Ends an SP scenario with a Victory. Waits for no intel events to be playing before it ends the mission.
 * This will play any endNIS and endMovie specified in the g_missionData table. After this is called, the path is set and any subsequent calls to Mission_Complete() or Mission_Fail() are ignored.
 */
declare function Mission_Complete(): void;

/**
 * Ends an SP scenario with a Failure. Waits for no intel events to be playing before it ends the mission.
 * After this is called, the path is set and any subsequent calls to Mission_Complete() or Mission_Fail() are ignored.
 */
declare function Mission_Fail(): void;

/**
 * Associate an entity with a suitable nearby location. The entity will be added to the location's egroup.
 * If no suitable location is found, it is moved into the eg_orphanBuildings group, so it can be tried again later (maybe by then other buildings will connect it to a location)
 */
declare function MissionOMatic_AssociateEntityWithNearbyLocation(entity: EntityID): LocationTable;

/**
 * Initialize challenge timers
 */
declare function Missionomatic_ChallengeInit(playerSlot: number, playerData: any): any;

/**
 * Finds any goal sequence that has a certain key, and toggles its state
 */
declare function Missionomatic_DisableTrainingByGoalKey(searchKey: VALUE, value: boolean): any;

/**
 * Looks for a battalion whose player name matches the identifier
 */
declare function MissionOMatic_FindBattalion(): any;

/**
 * Returns a suitable SCAR squadType for a given blueprint
 * Can also pass in a squadID and it will use that squad's blueprint
 */
declare function MissionOMatic_GetTypeForBlueprint(blueprint: SquadID | SBP): string;

/**
 * Adds a training hint to a certain kind of squad that is resolved by selecting a squad of that type
 */
declare function MissionOMatic_HintOnAbilityUsed(): any;

/**
 * Adds a training hint to a certain kind of squad that is resolved by selecting a squad of that type
 */
declare function MissionOMatic_HintOnHover(): any;

/**
 * Adds a training hint to a certain kind of squad that is resolved by selecting a squad of that type
 */
declare function MissionOMatic_HintOnSquadSelect(): any;

/**
 * Initialize a player for use in campaign missions. Sets defaults for Player Names, Ages, and Colors, if not defined. Returns a World_GetPlayerAt value.
 */
declare function Missionomatic_InitPlayer(playerSlot: number, playerData: any): any;

/**
 * Function that reveals FOW on units in an SGroup in a way that follows them
 */
declare function MissionOMatic_RevealMovingSGroup(): any;

/**
 * Sets all gates in an EGroup to be either locked or unlocked
 */
declare function Missionomatic_SetGateLock(egroup: EGroupID, locked: boolean): void;

/**
 * Follow-up gate locking function, because you can't call two commands on an Entity in the same frame
 */
declare function Missionomatic_SetGateLock_B(): void;

/**
 * Prepares a command to be issued in a second or so, once a sim frame has ticked; usually used when units were just spawned by a previous command
 */
declare function MissionOMatic_SGroupCommandDelayed(sgroup: SGroupID, destination: SGroupID, attackMove: boolean, delay: number, destroyOnArrive: boolean, onDestroyCallback: any): any;

/**
 * Helper function that actually sends units somewhere once they're ready to go
 */
declare function MissionOMatic_SGroupCommandDelayed_B(): any;

/**
 * Spawns a specific pickup at a specific location
 */
declare function Missionomatic_SpawnPickup(position: MARKER | Position, resource: string, amount: undefined | number): any;

/**
 * Applies an entity modifier to an entity.
 */
declare function Modifier_ApplyToEntity(modifier: ScarModifier, entity: EntityID): number;

/**
 * Applies a player modifier to a player.
 */
declare function Modifier_ApplyToPlayer(modifier: ScarModifier, player: PlayerID): number;

/**
 * Applies a squad modifier to a squad.
 */
declare function Modifier_ApplyToSquad(modifier: ScarModifier, squad: SquadID): number;

/**
 * Returns a modifier that you can apply to stuff.
 * applicationType : MAT_EntityType, MAT_Entity, MAT_Player, MAT_Squad, MAT_SquadType, or MAT_Weapon. modtype : Name of modifier from the modifiers table in the attribute editor. usageType : MUT_Addition, MUT_Multiplication, MUT_MultiplyAdd or MUT_Enable. exclusive : This field is not currently used for modifiers created through script.  value : The value for the modifier. extname : The name of the entity/squad blueprint for when the applicationType is MAT_EntityType or MAT_SquadType.
 */
declare function Modifier_Create(applicationType: number, modtype: string, usageType: number, exclusive: boolean, value: number, v: LuaBinding): ScarModifier;

/**
 * Set up tables to track modifiers that are applied per resource
 * The game specific <game_title>/modifiers.scar file should define tables with an entry per resource and pass them as arguments
 */
declare function Modifier_InitResourceBasedModifierTables(): any;

/**
 * Checks whether the modifier is enabled (requires an Entity and an Entity enable/disable modifier)
 */
declare function Modifier_IsEnabled(pEntity: EntityID, modtype: string, bEnabledByDefault: boolean): boolean;

/**
 * Modify the food resource carry capacity of the group.
 */
declare function Modify_FoodCarryCapacity(group: SGroupID, scalefactor: number, Usage: MUT): any;

/**
 * Modify the food resource gather rate of the group.
 */
declare function Modify_FoodGatherRate(group: SGroupID, scalefactor: number, Usage: MUT): any;

/**
 * Modify the gold resource carry capacity of the group.
 */
declare function Modify_GoldCarryCapacity(group: SGroupID, scalefactor: number, Usage: MUT): any;

/**
 * Modify the gold resource gather rate of the group.
 */
declare function Modify_GoldGatherRate(group: SGroupID, scalefactor: number, Usage: MUT): any;

/**
 * Raise or lower the ceiling that a player's pop cap can reach. The does NOT change the current pop cap, use Modify_PlayerPopCap() for that.
 * Usage types are MUT_Multiplication (default) or MUT_Addition.
 */
declare function Modify_PlayerMaxPopCap(player: PlayerID, amount: number, OPT_usage?: ModifierUsageType): any;

/**
 * Modify a player's current pop cap.
 * Usage types are MUT_Multiplication (default) or MUT_Addition.
 */
declare function Modify_PlayerPopCap(player: PlayerID, amount: number, OPT_usage?: ModifierUsageType): any;

/**
 * Modify the stone resource carry capacity of the group.
 */
declare function Modify_StoneCarryCapacity(group: SGroupID, scalefactor: number, Usage: MUT): any;

/**
 * Modify the stone resource gather rate of the group.
 */
declare function Modify_StoneGatherRate(group: SGroupID, scalefactor: number, Usage: MUT): any;

/**
 * Modify the wood resource carry capacity of the group.
 */
declare function Modify_WoodCarryCapacity(group: SGroupID, scalefactor: number, Usage: MUT): any;

/**
 * Modify the wood resource gather rate of the group.
 */
declare function Modify_WoodGatherRate(group: SGroupID, scalefactor: number, Usage: MUT): any;

/**
 * Start capturing a movie, optionally downscaling to low resolution.
 */
declare function MovieCapture_Start(lowResolution: boolean): any;

/**
 * Stop a previously started movie capture.
 */
declare function MovieCapture_Stop(): any;

/**
 * toggle the outstanding network call information
 */
declare function network_show_calls(): any;

/**
 * toggle the network statgraph
 */
declare function network_show_statgraph(): any;

/**
 * Wraps the input in a table and returns it. Does nothing if it was already a table.
 */
declare function NormalizeTable(): any;

/**
 * Create an objective and returns the unique ID for it
 * type could either be OT_Primary, OT_Secondary or OT_Medal
 */
declare function Obj_Create(player: PlayerID, title: string, desc: string, icon: string, type: number, medalPBG: MedalBlueprint): number;

/**
 * Delete the objective with the specified ID
 */
declare function Obj_Delete(objectiveID: number): any;

/**
 * Delete all objectives
 */
declare function Obj_DeleteAll(): any;

/**
 * Get the count of the counter on the objective.
 */
declare function Obj_GetCounterCount(objectiveID: number): any;

/**
 * Get the maximum count of the counter on the objective.
 */
declare function Obj_GetCounterMax(objectiveID: number): any;

/**
 * Get the counter type of an objective.
 */
declare function Obj_GetCounterType(objectiveID: number): any;

/**
 * Get objective progress bar value
 */
declare function Obj_GetProgress(objectiveID: number): any;

/**
 * Get objective progress bar visibility  (not deterministic)
 */
declare function Obj_GetProgressVisible(objectiveID: number): any;

/**
 * Get objective state ( OS_Off, OS_Incomplete, OS_Complete, OS_Failed )
 */
declare function Obj_GetState(objectiveID: number): number;

/**
 * Get objective visibility
 */
declare function Obj_GetVisible(objectiveID: number): boolean;

/**
 * Set colour of objective. In order red, green, blue, alpha.
 */
declare function Obj_SetColour(objectiveID: number, red: number, green: number, blue: number, alpha: number): void;

/**
 * Set the count of the counter on the objective.
 */
declare function Obj_SetCounterCount(objectiveID: number, count: number): void;

/**
 * Set the maximum count of the counter on the objective.
 */
declare function Obj_SetCounterMax(objectiveID: number, max: number): void;

/**
 * Set the number of seconds on an objective with a timer. Only used to inform the UI.
 */
declare function Obj_SetCounterTimerSeconds(objectiveID: number, timerSeconds: number): void;

/**
 * Set the counter type of an objective.
 */
declare function Obj_SetCounterType(objectiveID: number, counterType: number): void;

/**
 * Set description text localization ID for the objective
 */
declare function Obj_SetDescription(objectiveID: number, desc: string): void;

/**
 * Set icon path for the objective
 */
declare function Obj_SetIcon(objectiveID: number, icon: string): void;

/**
 * Set callback functions for the objective.
 * FN_OnActivate is for triggering situation report. FN_OnShow is used to assign UI element when tactical map is open. FN_OnSelect is used to assign UI element when the objective is highlighted
 */
declare function Obj_SetObjectiveFunction(id: number, fnType: number, f: any): void;

/**
 * Set objective progress bar value
 */
declare function Obj_SetProgress(objectiveID: number, progress: number): void;

/**
 * Set objective progress bar visibility
 */
declare function Obj_SetProgressVisible(objectiveID: number, visible: boolean): void;

/**
 * Set objective state ( OS_Off, OS_Incomplete, OS_Complete, OS_Failed )
 */
declare function Obj_SetState(objectiveID: number, state: number): void;

/**
 * Set title text localization ID for the objective
 */
declare function Obj_SetTitle(objectiveID: number, title: string): void;

/**
 * Set objective visibility
 */
declare function Obj_SetVisible(objectiveID: number, visible: boolean): void;

/**
 * Disable displaying the Essence Profiler
 */
declare function PerfStats_Disable(): any;

/**
 * Dump the Essence Profiler data onto a file
 */
declare function PerfStats_Dump(): any;

/**
 * Enable displaying the Essence Profiler
 */
declare function PerfStats_Enable(): any;

/**
 * Get perf stats toggle value
 */
declare function PerfStats_IsEnabled(): any;

/**
 * Toggle displaying the Essence Profiler
 */
declare function PerfStats_Toggle(): any;

/**
 * Returns the number of rigid bodies in the physical world
 */
declare function Physics_GetNumRBodies(): any;

/**
 * Returns true if the current specs allows for physics to play
 */
declare function Physics_IsEnabled(): any;

/**
 * Returns the current game state of the player.
 */
declare function Player_GetState(pPlayer: PlayerID): any;

/**
 * Learns and hides upgrades for each player in mission based on individual CurrentAge and MaxAge.
 */
declare function PlayerUpgrades_Auto(playerID: PlayerID, includeCurrentAge: boolean, OPT_exceptions?: any, OPT_race?: string): any;

/**
 * Hides all unit upgrades for player beyond maxAge.
 */
declare function PlayerUpgrades_HideAllUpgrades(playerID: PlayerID, desiredAge: number, race: string): any;

/**
 * Learns all research upgrades for player up to and including desiredAge.
 */
declare function PlayerUpgrades_LearnAllResearch(playerID: PlayerID, desiredAge: number, OPT_exceptions?: any, OPT_race?: string): any;

/**
 * Learns all unit upgrades for player up to and including desiredAge.
 */
declare function PlayerUpgrades_LearnAllUnits(playerID: PlayerID, desiredAge: number, OPT_exceptions?: any, OPT_race?: string): any;

/**
 * Lock all unit upgrades for player beyond maxAge.
 */
declare function PlayerUpgrades_LockAllUpgrades(playerID: PlayerID, desiredAge: number, race: string): any;

/**
 * Prints a message on the screen
 * @extdesc
 * Prints the given message on the screen. It will stay there until you call PrintOnScreen_RemoveFromScreen()
 * or print another message on the screen to replace it.
 */
declare function PrintOnScreen(text: string): void;

/**
 * Prints the lua content of an object on the screen
 * @extdesc
 * Prints the given message on the screen. If you would like to print multiple messages without clearing them you can
 * assign them unique ID's. Must use PrintOnScreen_Remove(id) to remove each instance
 */
declare function PrintOnScreen_Add(object: any, id: string, style?: string): PrintOnScreenID;

/**
 * Removes the PrintOnScreen text of a given ID
 */
declare function PrintOnScreen_Remove(id: string): void;

/**
 * Remove any messages from the screen
 * Removes from the screen any messages put there with PrintOnScreen()
 */
declare function PrintOnScreen_RemoveFromScreen(): void;

/**
 * Exit to windows
 */
declare function quit(): any;

/**
 * Activate the raid system
 */
declare function Raiding_Activate(): any;

/**
 * Adds a new spawn location to the existing raid system
 */
declare function Raiding_AddSpawnLocation(): any;

/**
 * Counts the number of idle raiders
 */
declare function Raiding_CountIdleRaiders(): any;

/**
 * Returns the number of current raid parties
 */
declare function Raiding_CountParties(): any;

/**
 * Deactivate the raid system (can be reactivated)
 */
declare function Raiding_Dectivate(): any;

/**
 * Stops all active raid parties and returns them as an SGroup
 */
declare function Raiding_ExtractAllSquads(): any;

/**
 * Use this to initialize the raid system
 */
declare function Raiding_Init(): any;

/**
 * Returns true if the timer will allow another raid to be launched
 */
declare function Raiding_IsTimerValid(): any;

/**
 * Forcibly prunes away all dead raider parties
 */
declare function Raiding_PruneParties(): any;

/**
 * Removes a specific RovingArmy from the system
 */
declare function Raiding_RemoveParty(): any;

/**
 * Sets the maximum number of raiding parties allowed at once
 */
declare function Raiding_SetPartyLimit(): void;

/**
 * Sets whether scouts are regularly sent to look for the player
 */
declare function Raiding_SetScouting(): void;

/**
 * Spawns an extremely basic, small probe attack meant to alert the player more than anything
 */
declare function Raiding_TriggerProbe(): any;

/**
 * Use this to try to trigger a raid against the given position
 */
declare function Raiding_TriggerRaid(raidPos: SGROUP | EGroup | Position, force: boolean): Module;

/**
 * Updates the composition of the generated raid parties
 */
declare function Raiding_UpdateComposition(): any;

/**
 * Disable rendering and render update
 */
declare function render_viewport_toggle(): any;

/**
 * Populate stat tabs in the replay stat viewer.
 * Refer the following xaml for template details: //cardinal/Mainline/assets/cardinal/ui/HUD/Controls/ReplayStatViewer.xaml
 */
declare function ReplayStatViewer_PopulateReplayStatTabs(table: A): any;

/**
 * Register a callback fired right before the data contexts are set to all players
 * In the callback, manually iterate through all players and pass in the necessary data to the scarModel table of each player
 */
declare function ReplayStatViewer_RegisterDataContextUpdater(with_: any): any;

/**
 * Register a callback fired right before the data context is set to each player
 * In the callback, pass in the data for each player
 */
declare function ReplayStatViewer_RegisterPlayerDataContextUpdater(with_: any): any;

/**
 * takes a marker or locationName, and returns a marker. If it's a scarPos, return it
 */
declare function ResolveSpawnLocation(): any;

/**
 * Restart a single player game, skirmish game, or the front end. (doesn't work in multiplayer games)
 */
declare function restart(): any;

/**
 * Adds an SGroup to the RovingArmy's high-level SGroup
 */
declare function RovingArmy_AddSGroup(moduleData: Module, sgroup: SGroupID, OPT_updateComposition?: boolean): any;

/**
 * Adds a target to the target list. Skip transition means it wont start attacking the new target, and should usually be false.
 */
declare function RovingArmy_AddTarget(moduleData: Module, target: string, OPT_combatRange?: number, OPT_leashRange?: number, OPT_skipTransition?: boolean): any;

/**
 * Adds the targets to the target list
 */
declare function RovingArmy_AddTargets(moduleData: Module, targets: any): any;

/**
 * Clears current targets completely
 */
declare function RovingArmy_ClearTargets(moduleData: any): any;

/**
 * Counts how many targets have NOT been visited yet
 */
declare function RovingArmy_CountUnvisitedTargets(): any;

/**
 * Disbands the RovingArmy module entirely, optionally returning the module's units in the passed SGroup (which is NOT cleared)
 */
declare function RovingArmy_Disband(moduleData: any, OPT_returned_sgroup?: SGroupID): any;

/**
 * Orders the module to attack it's next target, and disables withdraw behaviour
 */
declare function RovingArmy_ForceStart(): any;

/**
 * Returns the nearest seen squad or entity from a group to a Roving Army
 */
declare function RovingArmy_GetNearestSeen(moduleData: RovingArmy, huntedGroup: SGROUP | EGroup): Nearest;

/**
 * Returns the average position of the rovingArmy, or the spawnLocation if it has no units.
 */
declare function RovingArmy_GetPosition(moduleData: RovingArmy): A;

/**
 * Returns the units currently in the module as a percentage of the unit count the module started with
 */
declare function RovingArmy_GetRemainingUnitRatio(): any;

/**
 * Returns the position that the module wants reinforcements to head towards.
 */
declare function RovingArmy_GetRendezvousPosition(moduleData: Module): any;

/**
 * Gets the rovingArmy's SGroup
 */
declare function RovingArmy_GetSGroup(moduleData: any): any;

/**
 * Gets the current target, if there is one
 */
declare function RovingArmy_GetTarget(moduleData: Module): any;

/**
 * Gets the target tables of the given Roving Army
 */
declare function RovingArmy_GetTargets(moduleData: Module): any;

/**
 * Returns the difference between the current amound of units and the starting unit count
 */
declare function RovingArmy_GetUnitChangeFromStart(): any;

/**
 * returns true if the module has any living units
 */
declare function RovingArmy_HasUnits(): any;

/**
 * Initializes a new RovingArmy module.
 */
declare function RovingArmy_Init(moduleData: any): any;

/**
 * Returns true if the module is now empty, but once held units
 */
declare function RovingArmy_IsDead(moduleData: Module): any;

/**
 * Returns true if all the RovingArmy module's units are dead
 */
declare function RovingArmy_IsDefeated(): any;

/**
 * Returns true if the module is now empty
 */
declare function RovingArmy_IsEmpty(moduleData: Module): any;

/**
 * Removes an SGroup from the module
 */
declare function RovingArmy_RemoveSGroup(moduleData: any, sgroup: SGroupID, OPT_updateComposition?: boolean): any;

/**
 * Instructs the rovingArmy to send out a reinforcement request.
 */
declare function RovingArmy_RequestUnits(moduleData: RovingArmy, units: any, unitSources?: any, priority?: string): undefined;

/**
 * Resets a module to start at the begining of its target list
 */
declare function RovingArmy_Reset(moduleData: any): any;

/**
 * Sets the modules target, removing any previous targets in the process. Skip transition means it wont start attacking the new target, and should usually be false.
 */
declare function RovingArmy_SetTarget(moduleData: Module, target: string, OPT_combatRange?: number, OPT_leashRange?: number, OPT_skipTransition?: boolean): void;

/**
 * Clears any previous targets away, and sets new ones
 */
declare function RovingArmy_SetTargets(moduleData: Module, targets: any): void;

/**
 * sets withdrawThreshold
 */
declare function RovingArmy_SetWithdrawThreshold(): void;

/**
 * Orders the module to attack it's next target. Call this if the modules was previously given a pause command. Calling this on a module that has withdrawn will only result in it withdrawing again. Call RovingArmy_ForceStart if you want to override withdraw behaviour.
 */
declare function RovingArmy_Start(): any;

/**
 * Tells the modules to give up some of its units for reinforcements.
 */
declare function RovingArmy_UnitRequest_Start(moduleData: Module, requestData: Request): any;

/**
 * Activate the scar RulesProfiler
 */
declare function RulesProfiler_Activate(on: boolean): any;

/**
 * Enable the scar RulesProfiler so it runs in the background. Call this before RulesProfiler_Activate
 */
declare function RulesProfiler_Enable(on: boolean): any;

/**
 * Returns true if the scar RulesProfiler is active
 */
declare function RulesProfiler_IsActive(): any;

/**
 * Don't filter the RulesProfiler displayed rules.
 */
declare function RulesProfiler_ResetTypeFilter(): any;

/**
 * Filter the RulesProfiler to filter displayed rules to given type. E.g., "SCAR", "AI"
 */
declare function RulesProfiler_SetTypeFilter(filter: string): void;

/**
 * execute command string in cheat menu domain. Will only work if dev mode is enabled! (it's OFF by default in RTM builds)
 */
declare function Scar_DebugCheatMenuExecute(command: string): any;

/**
 * execute console command string. Will only work if dev mode is enabled! (it's OFF by default in RTM builds)
 */
declare function Scar_DebugConsoleExecute(command: string): void;

/**
 * Returns ST_NIL,ST_BOOLEAN,ST_NUMBER,ST_STRING,ST_TABLE,ST_FUNCTION,ST_SCARPOS,ST_EGROUP,ST_ENTITY,ST_SGROUP,ST_SQUAD,ST_TEAM,ST_MARKER, ST_PBG, or ST_UNKNOWN
 */
declare function scartype(v: LuaBinding): number;

/**
 * Returns a string representing the scartype when passed a scartype enum value
 */
declare function scartype_enum_tostring(v: any): any;

/**
 * Returns a string representing the scartype
 */
declare function scartype_tostring(v: LuaBinding): string;

/**
 * Set the simulation rate
 */
declare function setsimframecap(fcap: number): any;

/**
 * Set the simulation rate
 */
declare function setsimrate(rate: number): any;

/**
 * Fill table with win condition options - schema is loaded from .win file
 */
declare function Setup_GetWinConditionOptions(outOptions: any): any;

/**
 * Set the UI name of a given player.
 */
declare function Setup_SetPlayerName(player: PlayerID, name: string): void;

/**
 * Set the race for a given player.  Use World_GetRaceIndex() to get the race index from the ME name.
 */
declare function Setup_SetPlayerRace(player: PlayerID, raceIndex: number): void;

/**
 * Set the starting position of a given player.
 */
declare function Setup_SetPlayerStartingPosition(player: PlayerID, pos: Position): void;

/**
 * Put a player in a team. Use TEAM_NEUTRAL as the team_id to set the player as neutral
 */
declare function Setup_SetPlayerTeam(p: PlayerID, team_id: number): void;

/**
 * Calls an Entity_ function on every entity in an sgroup
 * The first parameter of the supplied function must be EntityID
 */
declare function SGroup_CallEntityFunction(sgroup: SGroupID, entityFunction: any): void;

/**
 * Calls a Squad_ function on every squad in an sgroup
 * The first parameter of the supplied function must be SquadID
 */
declare function SGroup_CallSquadFunction(sgroup: SGroupID, squadFunction: any, list: any): void;

/**
 * Returns whether ALL or ANY squads in an sgroup satisfy a condition, using a Squad_ function to perform the query on each squad
 * The first parameter of the supplied function must be SquadID
 */
declare function SGroup_CallSquadFunctionAllOrAny(sgroup: SGroupID, all: boolean, squadFunction: any, list: any): void;

/**
 * Adds units to the internal SGroups - siege weapons go into the engines group, everything else goes into crew
 */
declare function Siege_AddSGroup(): any;

/**
 * Can this module currently render military aid?
 */
declare function Siege_CanAid(): any;

/**
 * Stops the Siege module entirely and returns the units it contained
 */
declare function Siege_Disband(moduleData: any): SGROUP;

/**
 * Returns the siege CREW only! We need this for interface reasons, but it doesn't play nicely with how Siege modules work
 */
declare function Siege_GetSGroup(): any;

/**
 * Returns true if all the Siege module's units are dead
 */
declare function Siege_IsDefeated(): any;

/**
 * Renders military aid against the target position or SGroup
 */
declare function Siege_RenderAid(): any;

/**
 * Pings all nearby modules to see if they can come help - stops when it finds one that can
 */
declare function Siege_RequestAid(): any;

/**
 * Attempts to acquire a group of units matching the given scar types; Siege modules do not yield their siege engines
 */
declare function Siege_RequestReinforcements(): any;

/**
 * Is the Market info currently being drawn?
 */
declare function Sim_GetDrawMarketInfo(): any;

/**
 * Clears the egroup, then finds and adds all trade entities registered with an entity endpoint
 * Returns the number of entities found
 */
declare function Sim_GetTradeEntitiesFromEndpoint(endpoint: EntityID, egroup: EGroupID): any;

/**
 * Add a settlement to the market trade manager with specified ID. Settlement will be marked 'not trading' with all players.
 */
declare function Sim_MarketAddSettlement(settlement: EntityID): any;

/**
 * Attempts to execute a trade on behalf of the specified player, for the specified resource, of the specified type.
 */
declare function Sim_MarketExecuteTrade(player: PlayerID, resourceName: string, tradeTypeString: string): any;

/**
 * Sets market trade status between two players, using the array index they appear at in PlayerManager::GetPlayers_CS()
 */
declare function Sim_MarketSetTradeStatusPlayer(firstPlayer: PlayerID, secondPlayer: PlayerID, status: boolean): void;

/**
 * Sets trade status between a player number and a settlement ID.
 */
declare function Sim_MarketSetTradeStatusSettlement(player: PlayerID, settlement: EntityID, status: boolean): void;

/**
 * Set/clear drawing of the market info.
 */
declare function Sim_SetDrawMarketInfo(bEnable: boolean): void;

/**
 * Play the specified movie.
 */
declare function SitRep_PlayMovie(url: string): any;

/**
 * Stop the currently playing movie.
 */
declare function SitRep_StopMovie(): any;

/**
 * Toggles the display of the terrain audio environment zones on/off.
 */
declare function Sound_Debug_ShowAudioRegions(enable: boolean): any;

/**
 * Returns true if the sound associated with the handle is currently playing.
 */
declare function Sound_IsPlaying(handle: number): any;

/**
 * Plays a 2D sound from the Data:Sound folder.  Use the path relative to Sound folder without the file extension. Returns handle to the sound container
 * The sound needs to be 2D Example: ???Sound_Play( "Blah/Mysound" )
 */
declare function Sound_Play2D(name: string): number;

/**
 * Plays a 3D sound from the Data:Sound folder on the entity.  Use the path relative to Sound folder without the file extension. Returns handle to the sound container
 * The sound needs to be 3D Example: ???Sound_Play( "Speech/SpaceMarine/AddOnComplete", TheActor )
 */
declare function Sound_Play3D(name: string, actor: EntityID): number;

/**
 * Plays a walla celebrate sound on the sgroup, respecting the size of the sgroup
 */
declare function Sound_PlayWallaCelebrateOnSGroup(sgroup: SGroupID): any;

/**
 * Plays a walla charge sound on the sgroup, respecting the size of the sgroup
 */
declare function Sound_PlayWallaChargeOnSGroup(sgroup: SGroupID): any;

/**
 * Plays a walla engage sound on the sgroup, respecting the size of the sgroup
 */
declare function Sound_PlayWallaEngageOnSGroup(sgroup: SGroupID): any;

/**
 * Plays a walla fear sound on the sgroup, respecting the size of the sgroup
 */
declare function Sound_PlayWallaFearOnSGroup(sgroup: SGroupID): any;

/**
 * Plays a walla spearwall sound on the sgroup, respecting the size of the sgroup
 */
declare function Sound_PlayWallaSpearwallOnSGroup(sgroup: SGroupID): any;

/**
 * Posts an event on an already playing sound. Returns a handle to the new sound event.
 * Can be used to e.g. call a stop event or enable/disable effects on playing sounds. \Sound_PostEvent( "VictoryEvent", handle )\n
 */
declare function Sound_PostEvent(eventName: string, handle: number): any;

/**
 * Stops sound associated with the container handle
 */
declare function Sound_Stop(handle: number): void;

/**
 * Will spawn and garrison (default: 3) units into every entity of the provided egroup. Useful for filling outposts.
 */
declare function SpawnGarrisonsIntoEGroup(egroup: EGroupID, player: Player, opt_scarType?: string, opt_count?: number): any;

/**
 * Spawns groups of units at a numbered sequence of markers
 */
declare function SpawnUnitGroups(): any;

/**
 * Spawns units at the specified location, and adds them to the module.
 */
declare function SpawnUnitsToModule(units: any, module: Module, spawnLocation: MarkerID | string, pause?: boolean): SGROUP;

/**
 * A closure-based class-like object for performing unit-tests and outputting test-results
 * unique_name 			A name used as identifier in the json result file unit_tests 				A table containing UnitTest objects which this driver manages is_long_test 			(Optional, default is false) The driver will only run if the command line argument -TestLong is set
 */
declare function standard_test(unique_name: string): any;

/**
 * A closure-based class-like object defining a single unit test
 * unique_name 		- Unique name of the test. It is used as a key in the JSON result file. description 		- Description of this test and the feature it tests. start_function 		- Executed at test start to setup any preconditions to running the test (e.g. spawning a unit) update_function 	- Function which is repeatedly executed to test when the test should end. Should return true when the test needs to continue and false when the test needs to end. e.g. a timer which returns true until 5 seconds have elapsed, a predicate which returns true while a unit is still alive etc. finish_function 	- A predicate which tests the success of the test. This is invoked when the test is finished (indicated by the update function). If finish returns true then the test is successful otherwise the test is a failure. timeout_seconds 	- A timeout will result in test termination and the test will be considered a failure.
 */
declare function standard_test(unique_name: string): any;

/**
 * Run a global state tree on an entity
 * The state tree will be queued to run when safe to do so. A global state tree has its own lifetime, separate from any other state trees running on the target. parameters: - keepAlive: whether the state tree should restart if it finishes running - openingBranchName: name of state tree node to run - entity: the entity to run the tree on. This will be the context owner for the spawned state controller
 */
declare function StateTree_QueueGlobalStateTreeEntity(keepAlive: boolean, openingBranchName: string, entity: EntityID): any;

/**
 * Run a global state tree on a player
 * The state tree will be queued to run when safe to do so. A global state tree has its own lifetime, separate from any other state trees running on the target. parameters: - keepAlive: whether the state tree should restart if it finishes running - openingBranchName: name of state tree node to run - player: the player to run the tree on. This will be the context owner for the spawned state controller
 */
declare function StateTree_QueueGlobalStateTreePlayer(keepAlive: boolean, openingBranchName: string, player: PlayerID): any;

/**
 * Run a global state tree on a squad
 * The state tree will be queued to run when safe to do so. A global state tree has its own lifetime, separate from any other state trees running on the target. parameters: - keepAlive: whether the state tree should restart if it finishes running - openingBranchName: name of state tree node to run - squad: the squad to run the tree on. This will be the context owner for the spawned state controller
 */
declare function StateTree_QueueGlobalStateTreeSquad(keepAlive: boolean, openingBranchName: string, squad: SquadID): any;

/**
 * Save the statgraph output to a file
 */
declare function statgraph_save(begin: boolean): any;

/**
 * Predicate testing if a value is of specific type
 * e.g. f = std.TypePredicate(); f() => 1; f() => 2 ...
 */
declare function std(): any;

/**
 * Performs basic type-checking on [value]
 * e.g. foo = 7; std.Validate(foo, 'foo', T_NUMBER, false)
 */
declare function std(): any;

/**
 * Makes an assertion. If the assertion turns out to be false, raises an error.
 * e.g. foo = 7; assert(foo ~= nil, 'foo should not be nil!', 'If foo is nil we don't know how many bars to spawn!'') This is intended to be a more scripter friendly version of LUA assert.
 */
declare function std(): any;

/**
 * Change the local player.
 */
declare function switchplayer(state: Lua_State): any;

/**
 * Checks whether a sync weapon can attack a target without moving or turning.
 */
declare function SyncWeapon_CanAttackNow(weapon: SyncWeaponID, target: EGroup | SGROUP | Position | MARKER): boolean;

/**
 * Returns true if a sync weapon still exists in the game world
 */
declare function SyncWeapon_Exists(weapon: SyncWeaponID): boolean;

/**
 * Returns the EntityID of a sync weapon, or nil if it's been destroyed
 */
declare function SyncWeapon_GetEntity(weapon: SyncWeaponID): EntityID;

/**
 * Registers the sync weapon in the egroup and returns a SyncWeaponID you can use to keep track of it
 */
declare function SyncWeapon_GetFromEGroup(egroup: EGroupID): SyncWeaponID;

/**
 * Registers the sync weapon in the sgroup and returns a SyncWeaponID you can use to keep track of it
 */
declare function SyncWeapon_GetFromSGroup(sgroup: SGroupID): SyncWeaponID;

/**
 * Returns the position of a sync weapon, or nil if it's been destroyed
 */
declare function SyncWeapon_GetPosition(weapon: SyncWeaponID): Position;

/**
 * Checks whether or not the actual sync weapon in a squad attacking.
 */
declare function SyncWeapon_IsAttacking(weapon: SyncWeaponID, time: number): boolean;

/**
 * Returns true if the specified player owns the sync weapon. Use a playerid of nil to see if it's unonwed.
 * If player is not specified, then the code will check to see if the SyncWeapon is owned by the world.
 */
declare function SyncWeapon_IsOwnedByPlayer(weapon: SyncWeaponID, player?: PlayerID): boolean;

/**
 * Sets whether a weapon to auto-target things or not
 */
declare function SyncWeapon_SetAutoTargetting(weapon: SyncWeaponID, hardpoint: string, enable: boolean): void;

/**
 * Creates a third table that points to every element in table1 and table2, in that order
 */
declare function Table_Concatenate(table1: any, table2: any): any;

/**
 * Checks if a table contains the specified item
 */
declare function Table_Contains(OriginalTable: any, item: Item): boolean;

/**
 * Copies the contents of the original table returns a new table with the contents of that table
 */
declare function Table_Copy(OriginalTable: any): any;

/**
 * Updates myTable by applying default values from the myDefaults table for any items that are not explicitly declared already
 * If the myDefaults table has any item with the value REQUIRED_DATA, then you are declaring that there is no default for this item and that you REQUIRE the user provides a value. You will get a Fatal Scar Error if these are left out, listing exactly which required keys are missing.
 */
declare function Table_FillWithDefaultValues(myTable: any, myDefaults: any, OPT_errorMessage?: string): any;

/**
 * Returns a random item from a table. You can return multiple items (without duplicates) by passing in an optional number parameter.
 */
declare function Table_GetRandomItem(table: any, numberofitems?: number): Item;

/**
 * Makes a table read-only. This can be done recursively to also apply to any subtables.
 * Any attempts to write to this table after this has been called will trigger a Fatal SCAR Error. You can customize the error message that will be given with the "error" parameter.
 */
declare function Table_MakeReadOnly(table: any, OPT_recursive?: boolean, OPT_errorMessage?: string): any;

/**
 * Finds the first instance of a given item in the given table and removes it
 */
declare function Table_RemoveFirstItem(table: any, toRemove: any): void;

/**
 * Reverse the order of items in a table.
 */
declare function Table_Reverse(table: any): any;

/**
 * Randomizes the order of items in a table.
 */
declare function Table_Shuffle(table: any): any;

/**
 * Takes a ScarPosition and returns a number representing the cover type at this position
 */
declare function Terrain_GetCoverType_AsNumber(pos: Position): any;

/**
 * Takes a ScarPosition and returns a string representing the cover type at this position
 */
declare function Terrain_GetCoverType_AsString(pos: Position): any;

/**
 * Auto generates a test configuration template and stores it for later saving. This is a debug feature.
 * The system tries to gather the parameters of the calling function and auto generates a template for it. The resulting template is added to a list which is written to cache:AutoConfig.json (see TestConfig_SaveCachedTestTemplates() above). If you use a non json compatible type you need to update _SerializeParameters above. See example for ScarPos.
 */
declare function TestConfig_AutoGenerateTestTemplate(optional: Stack_level): any;

/**
 * Tries to load the test configuration from the command line argument. See TEST_CONFIG_ARGUMENT_TEST_CONFIG above. See definition of TestConfig_LoadFromFile.
 */
declare function TestConfig_LoadFromCommandLine(): any;

/**
 * Tries to load the test configuration from the given file.
 * The test configuration file is a json file containing groups of tests. Each test is defined with a function to call and its parameters. The system parses the file and tries to invoke the functions in the global space (by calling _G[function_string] ). Tests marked as active: false are skipped. Parameters either need to be json compatible (strings,  numbers, boolean) or have a 'constructor' function associated to them. e.g: 2D positions { "parameters": [ 0, -20 ], "func": "Util_ScarPos" }
 */
declare function TestConfig_LoadFromFile(path: string): any;

/**
 * Writes the tests to a json file.
 */
declare function TestConfig_SaveCachedTestTemplates(): any;

/**
 * expect_destruction=nil will let the test determine this value based on entity targeting settings
 * expect_destruction=nil will let the test determine this value based on entity targeting settings
 */
declare function TestGroup_BuildingBasics(): any;

/**
 * idx used to should be unique per run to prevent entity stacking
 * expect_destruction=nil will let the test determine this value based on entity targeting settings
 */
declare function TestGroup_SquadBasics(): any;

/**
 * small version of TestGroup_SquadBasics() without the combat-specific tests
 */
declare function TestGroup_SquadBasics_NoCombat(): any;

/**
 * spawns instances of an unit in a grid, then kills it to trigger physics destruction. Fails if to rigid bodies where created. params table : testName, unitPath, quantity, spacing, slowdown,  timeout_seconds, use_telemetry
 */
declare function TestPhysics_Destruction(): any;

/**
 * Calls given method/parameter combinations one at a time to avoid blocking for long calls.
 * Expects to receive a table in the format of {{func=<function>,params=<table-containing-parameters in order}}. Calls one function at a time and queues the next function after completing the call. This allows the engine to simulate in between and will not block the other threads for extended amounts of time. Useful for tests that spawn a large amount of squads and entities and need to give them commands. Giving a callback to notify when the list has been processed is optional.
 */
declare function TestUtil_CallWithoutBlocking(t_function_parameter: any): any;

/**
 * Destroy neutral entities like wrecks, gaia, etc
 */
declare function TestUtil_DestroyAllNeutralEntities(): any;

/**
 * Destroy player squads and entities
 */
declare function TestUtil_DestroyAllPlayerSquadsAndEntities(player: Player): any;

/**
 * Destorys all player owned squads and every player or neutral entity
 */
declare function TestUtil_DestroyAllSquadsAndEntities(): any;

/**
 * Destroy specified player squads and entities from the blueprint list
 * Destroys all squads and entities belonging to player that match one of the
 */
declare function TestUtil_DestroySpecifiedPlayerSquadsAndEntities(player: Player, t_blueprintsToDestroy: string): any;

/**
 * Returns all blueprints that match the given filters.
 * Filters the property bags inside attrib/instances and returns the paths that match the filters. After matching the base filter this part of the path is removed and the detail filter is applied. Example: base_filter "sbps\\races\\eng\\" will match all english units. detail filter "archer" will return return a table with "unit_archer_2_eng", "unit_archer_3_eng", "unit_archer_4_eng"
 */
declare function TestUtil_GetAllBlueprintNames(do_entity: boolean, for_: False): any;

/**
 * Draws a circle at the given location.
 * calls a render debug function in a way that creates a visible outline on terrain. Any provided colour value that isn't within the char bit range (0 - 255) will be adjusted. The colour, segment and thickness parameters are optional and will default to reasonable values if excluded.
 */
declare function TestUtil_HighlightCircleRadius(position?: Position): any;

/**
 * Applies a modifier making player 1 build the given ebp faster. The modifier is returned.
 */
declare function TestUtil_MakeBuildingFast(ebpname_building: string): any;

/**
 * Prints the location and health of all player owned squads and entities
 * Iterates over all players and prints the position and health of all squads and entities the player owns.
 */
declare function TestUtil_PrintAllSquadsAndEntities(): any;

/**
 * Prints the location and health of all entities owned by a player
 * Iterates over all entities a player owns and prints their blueprint name, position and health.
 */
declare function TestUtil_PrintPlayerEntities(player: Player): any;

/**
 * Prints the location and health of all squads owned by a player
 * Iterates over all squads a player owns and prints their blueprint name, position and health.
 */
declare function TestUtil_PrintPlayerSquads(player: Player): any;

/**
 * Create a new unit test and add it to the given table
 * Once all tests have been added using this function, the test group passed to t_test_group should be passed
 */
declare function TestUtil_RegisterTest(a: T_test_group): any;

/**
 * Spawn entities in a grid based on a list of blueprint names.
 * Grabs one entry of the given blueprint list each iteration and spawns it. Then it creates a new timed rule requesting to be called again as soon as possible. This gives the engine time to update in between calls so that the other threads are not blocked in case a huge list of units needs to get spawned. Once every unit is spawned the given callback function will be called. The spawning grid starts at the given top left corner and spawns in an axis aligned grid based on the given spacing. The grid expands towards positive x/z
 */
declare function TestUtil_SpawnEntitiesInGridWithoutBlocking(player: Player, t_ebpnames: any): any;

/**
 * Spawn squads based on a list of blueprint names.
 * Grabs one entry of the given blueprint list each iteration and spawns it. Then it creates a new timed rule requesting to be called again as soon as possible. This gives the engine time to update in between calls so that the other threads are not blocked in case a huge list of units needs to get spawned. Once every unit is spawned the given callback function will be called.
 */
declare function TestUtil_SpawnSquadsInGridWithoutBlocking(player: Player, t_sbpnames: any): any;

/**
 * Compare two values and print to standard_test if they are close enough
 * Uses equality if acceptable_difference is nil or 0
 */
declare function TestUtil_TestClose(value1: any, value2: any, OPT_acceptable_difference?: number, OPT_value1_name?: string, OPT_value2_name?: string): any;

/**
 * Compare two values using the given comparator
 */
declare function TestUtil_TestCompare(value1: any, value2: any, OPT_value1_name?: string, OPT_value2_name?: string): any;

/**
 * Checks if directions are equal and prints message to standard_test if they are not
 * The items must of of types that can have a direction resolved on them with Util_GetDirection()
 */
declare function TestUtil_TestDirectionsSame(item1: EGroupID, item2: EGroupID): any;

/**
 * Compare two values and print to standard_test if they are equal
 * Uses equality if acceptable_difference is nil or 0
 */
declare function TestUtil_TestEqual(value1: any, value2: any, OPT_value1_name?: string, OPT_value2_name?: string): any;

/**
 * Checks if positions are equal and prints message to standard_test if they are not
 */
declare function TestUtil_TestPositionsSame(object1: EGroupID, object2: EGroupID, max_accepted_difference: number): any;

/**
 * Stops the TownLife module entirely and returns the units it contained
 */
declare function TownLife_Disband(moduleData: any, OPT_returned_sgroup?: SGroupID): any;

/**
 * Returns true if all the TownLife module's units are dead
 */
declare function TownLife_IsDefeated(): any;

/**
 * Changes the player owner
 */
declare function TownLife_SetPlayerOwner(): void;

/**
 * Starts a rule which will monitor the mission for trade cart deaths belonging to the specified players, and has a 1/3 chance of dropping a random resource pickup.
 */
declare function TrackTradeCartsForPlayers(players: any): any;

/**
 * Transfers all units from one module to another module, without destroying the source module
 */
declare function TransferModuleIntoModule(sourceModule: string, targetModule: string, pause?: boolean): undefined;

/**
 * Add a new child named childName and of type typeName to elementName.
 */
declare function UI_AddChild(elementName: string, typeName: string, childName: string, propertyTable: any): any;

/**
 * Adds a command binding for groupName.bindingName to global function callbackName.
 */
declare function UI_AddCommandBinding(groupName: string, bindingName: string, callbackName: string): any;

/**
 * Adds the event handler on elementName for event eventName to global function callbackName(elementName, eventName).
 * The callback function should take two arguments, the element name and the event name.
 */
declare function UI_AddEventHandler(elementName: string, eventName: string, callbackName: string): any;

/**
 * Add text to elementName.
 */
declare function UI_AddText(elementName: string, text: string): any;

/**
 * Clear the contents of elementName.
 */
declare function UI_Clear(elementName: string): any;

/**
 * If the message box is activated, close it.  The callback will receive the button parameter given.
 */
declare function UI_MessageBoxHide(btn: number): void;

/**
 * Reset message box data set by previous calls (to display a new message box).
 */
declare function UI_MessageBoxReset(): any;

/**
 * Set the text/tooltip/enabled state of a button on the dialog.
 */
declare function UI_MessageBoxSetButton(btn: number, text: string, tooltip: string, bEnabled: boolean): void;

/**
 * Set the title and message body of the dialog.
 */
declare function UI_MessageBoxSetText(title: string, msg: string): void;

/**
 * Remove elementName from its parent.
 */
declare function UI_Remove(elementName: string): any;

/**
 * Removes a command binding for groupName.bindingName.
 */
declare function UI_RemoveCommandBinding(groupName: string, bindingName: string): any;

/**
 * Removes the event handler on elementName for event eventName to global function callbackName(elementName, eventName).
 * The callback function should take two arguments, the element name and the event name.
 */
declare function UI_RemoveEventHandler(elementName: string, eventName: string, callbackName: string): any;

/**
 * Converts table to a data context for bindings of elementName.
 */
declare function UI_SetDataContext(elementName: string, table: any): void;

/**
 * Converts table to a data context exposed through entity models.
 */
declare function UI_SetEntityDataContext(entity: EntityID, table: any): void;

/**
 * Converts table to a data context exposed through player models.
 */
declare function UI_SetPlayerDataContext(player: PlayerID, table: any): void;

/**
 * Sets the property propertyName on elementName to value stackVar.
 */
declare function UI_SetPropertyValue(elementName: string, propertyName: string, stackVar: any): void;

/**
 * Sets the properties on elementName to the key/value pairs in propertyTable.
 */
declare function UI_SetPropertyValues(elementName: string, propertyTable: any): void;

/**
 * Converts table to a data context exposed through squad models.
 */
declare function UI_SetSquadDataContext(squad: SquadID, table: any): void;

/**
 * Forces ALL in-process deployments to complete instantly.
 */
declare function UnitEntry_CompleteAllDeploymentsImmediately(): void;

/**
 * Forces a specific in-process deployment to complete instantly.
 */
declare function UnitEntry_CompleteDeploymentImmediately(deployment: DeploymentID): void;

/**
 * Create and spawn a set of units (a "deployment") in one go.
 * See details here: http://relicwiki/display/EE/Core+Unit+Entry+Framework
 */
declare function UnitEntry_DeploySquads(player: PlayerID, sgroup: SGroupID | any, units: any, spawn: MarkerID | Position, entryMethod?: any, stagger?: number, options?: any): any;

/**
 * Returns a spawnLocation and Facing. If the unit has a custom spawn, it uses that, otherwise it gets it from deployment
 */
declare function UnitEntry_ResolveSpawnLocation(): any;

/**
 * Unit spawners can't be defeated, for now
 */
declare function UnitSpawner_IsDefeated(): any;

/**
 * Add all of the units in a UnitTable to another UnitTable
 */
declare function UnitTable_AddUnits(unitTable: any, unitsToAdd: any): any;

/**
 * Add units of a specific type to a UnitTable
 */
declare function UnitTable_AddUnitsByType(unitTable: any, type: string, OPT_amount?: number): any;

/**
 * Count how many units of a given type there are in the UnitTable
 */
declare function UnitTable_CountUnitsOfType(unitTable: any, type: string): any;

/**
 * Takes an SGroup and returns a UnitTable that reflects the SGroup's makeup
 */
declare function UnitTable_GenerateFromSGroup(sgroup: SGroupID): UnitTable;

/**
 * Returns the count of the units in a UnitTable
 */
declare function UnitTable_GetTotalUnitCount(unitTable: any): number;

/**
 * Remove all of the units in a UnitTable from another UnitTable
 */
declare function UnitTable_RemoveUnits(unitTable: any, unitsToRemove: any): any;

/**
 * Removes units of a specific type from a UnitTable
 */
declare function UnitTable_RemoveUnitsByType(unitTable: any, type: string, OPT_amount?: number): any;

/**
 * Kills an SGroup when under attack by a specific Sgroup.  Use this when you want a specific squad to kill a specifit squad.
 */
declare function Util_CinematicKill(killer: SGroupID, target: SGroupID): any;

/**
 * Returns the game time as a string. Formatted as mm:ss
 */
declare function Utility_FormatSeconds(seconds: any): string;

/**
 * Returns the game time as a string. Formatted as mm:ss
 */
declare function Utility_GetFormattedTime(): string;

/**
 * Ensures that all pending dissolves are processed
 */
declare function VerifyAllDissolves(): any;

/**
 * Add some new villagers to a VillagerLife. If job is left as nil, villagers will roam. Or you can specify "roaming", "wood", "food", "gold", or "stone".
 */
declare function VillagerLife_AddSGroup(instance: VillagerLife, sgroup: SGroupID, job: string): any;

/**
 * Private function. Orders the villagers to attack the player.
 */
declare function VillagerLife_Attack(): any;

/**
 * This is the proper way to create a VillagerLife at runtime. Villagers can be assigned to 5 different jobs, and you can provide an sgroup for each job. villager_response can be "none", "flee", or "attack". "mkr_flee" is only required if villager_response is "flee". "mkr_flee_backup" is only required if villager_response is "flee" and b_require_garrison is true. SGroups can be nil if you don't want villagers in those roles.
 */
declare function VillagerLife_Create(player: Player, name: string, sg_roaming: SGroupID, sg_wood: SGroupID, sg_food: SGroupID, sg_stone: SGroupID, sg_gold: SGroupID, villager_response: string, mkr_home: MARKER, mkr_flee: MARKER, b_require_garrison: boolean, mkr_flee_backup: MARKER): any;

/**
 * Private function. Despawns any villagers in the sgroup that have gotten close enough to the specified position.
 */
declare function VillagerLife_DestroyIfNearPosition(): any;

/**
 * Private function. Checks if mkr_flee has a valid garrisonable building nearby.
 */
declare function VillagerLife_GarrisonIsNearby(): any;

/**
 * Private function. Orders the villagers to harvest resources. Any villagers who can't find something to harvest will end up roaming.
 */
declare function VillagerLife_GoToWork(): any;

/**
 * Private function. Do not call this function in mission scripts, call VillagerLife_Create instead. VillagerLife_Create calls this, and the prefab system calls this when it creates a VillagerLife during startup.
 */
declare function villagerlife_Init(): any;

/**
 * Private function. This is the main loop that keeps villagers working. It only stops running when the villagers are attacking, or when they all die.
 */
declare function VillagerLife_Monitor(): any;

/**
 * Private function. Called when the attack encounter ends in failure.
 */
declare function VillagerLife_OnFail(): any;

/**
 * Private function. Called when the attack encounter ends in success.
 */
declare function VillagerLife_OnSuccess(): any;

/**
 * Private function. Orders a single villager to wander to a random building or random location.
 */
declare function VillagerLife_Wander(): any;

/**
 * Adds units to the wave's unit table. These units will be produced whenever prepare is called
 */
declare function Wave_AddUnits(wave: Wave, units: any): any;

/**
 * Returns an array containing all the categories that this spawn is capable of producing
 */
declare function Wave_GetSpawnableCategories(): any;

/**
 * Transfers all the units from the staging module into the assault module. If the wave is still spawning from a prepare, it will stop. Index defaults to 1.
 */
declare function Wave_Launch(wave: Wave, OPT_index?: number): any;

/**
 * Sets up a new wave
 * see http://relicwiki/display/CARD/Waves to learn more about creating a wave
 */
declare function Wave_New(wave_data: any): any;

/**
 * Sets which unit categories can be built by a building. Categories are "infantry", "ranged", "cavalry", "siege", "town_center", and "religious"
 */
declare function Wave_OverrideBuildingSpawnType(building_type: string, categories: any): any;

/**
 * Sets how long a wave spawner will be on cooldown after spawning a certain unit type
 */
declare function Wave_OverrideUnitBuildTime(type: string, time: number): any;

/**
 * Orders a wave to start spawning units. Units will go into the staging module, or into the assault module if no staging module is defined. You can optionally pass in an sgroup. All units that are spawned will go into it.
 */
declare function Wave_Prepare(wave: Wave, OPT_sg_custom?: SGroupID, OPT_data?: any): any;

/**
 * Searches the spawn area for any new buildings and adds them to the list of spawns
 */
declare function Wave_RefreshSpawns(): any;

/**
 * Updates the wave with a new unit table. These units will be produced whenever prepare is called
 */
declare function Wave_SetUnits(wave: Wave, units: any): void;

/**
 * Wins/loses a single team mission for the local teams
 */
declare function World_EndSP(win: boolean): void;

/**
 * Find a position on a path hidden from view, as close to the destination as possible whilst still satisfying your hidden checktype. Checktype can be either CHECK_IN_FOW, CHECK_OFFCAMERA or CHECK_BOTH.
 * The path is always calculated as if it were plain infantry. This function returns nil if it can't find a suitable position, so you can do a backup plan.
 */
declare function World_GetHiddenPositionOnPath(player: PlayerID, origin: MarkerID | Position, destination: MarkerID | Position, checktype: number): Position;

/**
 * - to document
 */
declare function World_IsGameOver(): boolean;

/**
 * Kills the player with a reason.
 */
declare function World_KillPlayer(player: PlayerID, reason: KillPlayerReason): any;

/**
 * Quit the game without declaring it over and return to frontend.
 */
declare function World_LeaveGameMatch(): any;

/**
 * Sets the player to a lose state, with a reason for losing, and kills the player
 */
declare function World_SetPlayerLose(player: PlayerID, identifier: string, endgame: boolean): void;

/**
 * Sets the player and all the members allied to player to a win state, with a reason for winning. Also sets all other players to a lose state, and kills them (if they're not already dead)
 */
declare function World_SetPlayerWin(player: PlayerID, identifier: string): void;

/**
 * Sets every player on a team to a win state, with a reason for winning. Also sets all other players to a lose state, and kills them (if they're not already dead)
 */
declare function World_SetTeamWin(team: number, identifier: string): void;

/**
 * overrides the Heavy Cover Occupancy for the passed EBP
 */
declare function AI_AddHeavyCoverEbpOccupancyOverride(pPlayer: PlayerID, ebp: ScarEntityPBG, occupancyOverride: number): any;

/**
 * This clears the repair priority value for a given squad or building PBG.
 * pbgShortname is the PBG of the squad or building to clear its priority value.
 */
declare function AI_ClearPBGRepairPriority(pPlayer: PlayerID, pbgShortname: string): any;

/**
 * Converts an AIEntity into an Entity
 */
declare function AI_ConvertToSimEntity(pAIEntity: EntityID): any;

/**
 * Converts an AIPlayer into a Player
 */
declare function AI_ConvertToSimPlayer(pAIPlayer: PlayerID): any;

/**
 * Converts an AISquad into a Squad
 */
declare function AI_ConvertToSimSquad(pAISquad: SquadID): any;

/**
 * Create a new encounter for player
 * EncounterType is one of: AIEncounterType_DefendArea, AIEncounterType_AttackArea, AIEncounterType_Move, AIEncounterType_Ability,
 */
declare function AI_CreateEncounter(pPlayer: PlayerID, encounterType: number): any;

/**
 * Enables/disables debugging of AI Attack Encounter Encounter Position Scoring
 */
declare function AI_DebugAttackEncounterPositionScoringEnable(enable: boolean): any;

/**
 * Returns true if AI Attack Encounter Position Scoring is enabled
 */
declare function AI_DebugAttackEncounterPositionScoringIsEnabled(): any;

/**
 * Enables/disables AI Lua Debugging
 */
declare function AI_DebugLuaEnable(enable: boolean): any;

/**
 * Returns true if AI Lua Debugging is enabled
 */
declare function AI_DebugLuaIsEnabled(): any;

/**
 * Enables/disables AI Construction Debugging
 */
declare function AI_DebugRatingEnable(enable: boolean): any;

/**
 * Returns true if AI Construction Debugging is enabled
 */
declare function AI_DebugRatingIsEnabled(): any;

/**
 * Enables/disables AI Rendering of All Task Children
 */
declare function AI_DebugRenderAllTaskChildrenEnable(enable: boolean): any;

/**
 * Returns true if AI Rendering of All Task Children is enabled
 */
declare function AI_DebugRenderAllTaskChildrenIsEnabled(): any;

/**
 * Enables/disables AI Skirmish ForwardDeploy Debugging
 */
declare function AI_DebugSkirmishForwardDeployEnable(enable: boolean): any;

/**
 * Returns true if AI Skirmish ForwardDeploy Debugging is enabled
 */
declare function AI_DebugSkirmishForwardDeployIsEnabled(): any;

/**
 * Disable all of the economy overrides for the AI player
 */
declare function AI_DisableAllEconomyOverrides(pPlayer: PlayerID): any;

/**
 * Run this string in the AI of player
 */
declare function AI_DoString(pPlayer: PlayerID, s: string): void;

/**
 * Enables/Disables an AI player
 */
declare function AI_Enable(pPlayer: PlayerID, enable: boolean): void;

/**
 * Enables/Disables all AI players
 */
declare function AI_EnableAll(enable: boolean): void;

/**
 * Enable or disable the economy override for the AI player
 */
declare function AI_EnableEconomyOverride(pPlayer: PlayerID, overrideName: string, enable: boolean): any;

/**
 * Finds an AISquad owned by the specified player
 */
declare function AI_FindAISquadByID(pPlayer: PlayerID, UID: number): any;

/**
 * Find the current best producible Entity PBG corresponding to the specified Entity Types.
 */
declare function AI_FindBestProducibleEntityPBGforEntityTypes(player: PlayerID, entityTypeNames: string): any;

/**
 * Find the current best producible Squad PBG corresponding to the specified Squad Types.
 */
declare function AI_FindBestProducibleSquadPBGforSquadTypes(player: PlayerID, squadTypeNames: string): any;

/**
 * Find a valid construction location for a pbg, using a spiral search. Returns INVALID_POS if it fails.
 */
declare function AI_FindConstructionLocation(pPlayer: PlayerID, pPbg: PropertyBagGroup, position: Position): any;

/**
 * Stores entities of a specific type owned by a player in an egroup parameter
 */
declare function AI_GetAllMilitaryPointsOfType(pAIPlayer: PlayerID, type: AIMilitaryTargetType, egroup: EGroupID): any;

/**
 * Get and reserve the next available AITaskID (which can be used to create an AIEncounter from SCAR).
 */
declare function AI_GetAndReserveNextTaskID(player: PlayerID): any;

/**
 * Gets the difficulty level of this AI player
 * Levels can be one of: AD_Easy, AD_Standard, AD_Hard, AD_Hardest
 */
declare function AI_GetDifficulty(pPlayer: PlayerID): number;

/**
 * Get the personality name of this AI player
 */
declare function AI_GetPersonality(pPlayer: PlayerID): any;

/**
 * Get the personality lua file name of this AI player
 */
declare function AI_GetPersonalityLuaFileName(pPlayer: PlayerID): any;

/**
 * Returns true if player is an AI player
 */
declare function AI_IsAIPlayer(pPlayer: PlayerID): boolean;

/**
 * Returns true if player is an AIPlayer and is targetable by other AI players.
 */
declare function AI_IsAITargetable(pPlayer: PlayerID): any;

/**
 * Checks if the AI debug display is enabled
 */
declare function AI_IsDebugDisplay(pPlayer: PlayerID): any;

/**
 * Returns true if player is a AIPlayer and is enabled
 */
declare function AI_IsEnabled(pPlayer: PlayerID): boolean;

/**
 * Returns true if the player is an AIPlayer running on the local machine
 */
declare function AI_IsLocalAIPlayer(pPlayer: PlayerID): any;

/**
 * Returns true when position in a sector that is adjacent to an in-supply sector
 */
declare function AI_IsPositionNearInSupplySector(aiPlayer: PlayerID, position: Position): any;

/**
 * Checks if this is a valid AISquad
 */
declare function AI_IsSquadValid(pSquadAI: SquadID): any;

/**
 * Locks the entity and disables its tactics (if any) and the AI will no longer use this object
 */
declare function AI_LockEntity(pPlayer: PlayerID, pEntity: EntityID): void;

/**
 * Locks the squad and disables its tactics (if any) and the AI will no longer use this object
 */
declare function AI_LockSquad(pPlayer: PlayerID, pSquad: SquadID): void;

/**
 * Locks the squads and disables its tactics (if any) and the AI will no longer use these objects
 */
declare function AI_LockSquads(pPlayer: PlayerID, squads: SGroupID): any;

/**
 * Pauses or unpauses currently running tasks
 */
declare function AI_PauseCurrentTasks(pPlayer: PlayerID, pause: boolean): any;

/**
 * Add an Exclusion area to the AI Player
 */
declare function AI_PlayerAddExclusionArea(pPlayer: PlayerID, position: Position, noPathRadius: number, noTargetRadius: number): any;

/**
 * Set a named bool value in the AIPlayer DataDictionary
 */
declare function AI_PlayerDataDictionarySetBool(player: PlayerID, varName: string, value: boolean): void;

/**
 * Set a named number value in the AIPlayer DataDictionary
 */
declare function AI_PlayerDataDictionarySetNumber(player: PlayerID, varName: string, value: number): void;

/**
 * Set a named PBG value in the AIPlayer DataDictionary
 */
declare function AI_PlayerDataDictionarySetPBG(player: PlayerID, varName: string, value: PropertyBagGroup): void;

/**
 * Remove the Exclusion area from the AI Player
 */
declare function AI_PlayerRemoveExclusionArea(pPlayer: PlayerID, position: Position, noPathRadius: number, noTargetRadius: number): any;

/**
 * This clears the importance bonus on this capture point
 */
declare function AI_RemoveCapturePointHighPriority(pPlayer: PlayerID, pEntity: EntityID): any;

/**
 * Restarts the AI
 */
declare function AI_RestartSCAR(pPlayer: PlayerID): any;

/**
 * Restores the default personality and difficulty settings of this AI player
 */
declare function AI_RestoreDefaultPersonalitySettings(pPlayer: PlayerID): any;

/**
 * Set Combat Range Policy for the AISquad, overrides the one set at Encounter/task level
 * policy is one of: AICombatRangePolicy_Default, AICombatRangePolicy_Ranged_MinRange, AICombatRangePolicy_Ranged_MaxRange, AICombatRangePolicy_MeleeRange
 */
declare function AI_SetAISquadCombatRangePolicyTaskOverride(pSquadAI: SquadID, policy: CombatRangePolicy): void;

/**
 * Enables or Disables an AI player to be targetable by other AI players.
 */
declare function AI_SetAITargetable(pPlayer: PlayerID, targetable: boolean): void;

/**
 * This sets importance bonus of the given capture point
 */
declare function AI_SetCapturePointAsHighPriority(pPlayer: PlayerID, pEntity: EntityID): void;

/**
 * Enable or disable the AI debug display
 */
declare function AI_SetDebugDisplay(pPlayer: PlayerID, enable: boolean): void;

/**
 * Set the difficulty level of this AI player
 * Levels ca be one of: AD_Easy, AD_Standard, AD_Hard, AD_Hardest
 */
declare function AI_SetDifficulty(pPlayer: PlayerID, difficultyLevel: number): void;

/**
 * This sets the repair priority value for a given squad or building PBG.
 * pbgShortname is the PBG of the squad or building to change its priority value. priorityValue must be within range [0, 1], with higher value being more desirable to repair.
 */
declare function AI_SetPBGRepairPriority(pPlayer: PlayerID, pbgShortname: string, priorityValue: number): void;

/**
 * Set the personality name of this AI player
 */
declare function AI_SetPersonality(pPlayer: PlayerID, personalityName: string): void;

/**
 * Set an AI Player's desired income of specified resource type at specified value. This will affect the AI resource gathering, building construction and production priority in trying to achieve the specified resource income.
 */
declare function AI_SetResourceIncomeDesire(player: PlayerID, resourceType: number, desiredIncome: number): void;

/**
 * Clear a named Squad in the AISquad DataDictionary
 */
declare function AI_SquadDataDictionaryClearSquad(squad: SquadID, varName: string): any;

/**
 * Get a named bool value in the AISquad DataDictionary, returns false if the value doesn't exist
 */
declare function AI_SquadDataDictionaryGetBool(squad: SquadID, varName: string): any;

/**
 * Get a named number value in the AISquad DataDictionary, returns 0 if the value doesn't exist
 */
declare function AI_SquadDataDictionaryGetNumber(squad: SquadID, varName: string): any;

/**
 * Get a named Squad in the AISquad DataDictionary, returns null if the entry doesn't exist
 */
declare function AI_SquadDataDictionaryGetSquad(squad: SquadID, varName: string): any;

/**
 * Set a named bool value in the AISquad DataDictionary
 */
declare function AI_SquadDataDictionarySetBool(squad: SquadID, varName: string, value: boolean): void;

/**
 * Set a named number value in the AISquad DataDictionary
 */
declare function AI_SquadDataDictionarySetNumber(squad: SquadID, varName: string, value: number): void;

/**
 * Set a named PBG value in the AISquad DataDictionary
 */
declare function AI_SquadDataDictionarySetPBG(squad: SquadID, varName: string, value: PropertyBagGroup): void;

/**
 * Set a named Squad in the AISquad DataDictionary
 */
declare function AI_SquadDataDictionarySetSquad(squad: SquadID, varName: string, targetSquad: SquadID): void;

/**
 * Toggles the AI debug display
 */
declare function AI_ToggleDebugDisplay(pPlayer: PlayerID): any;

declare function AI_UnlockAll(pPlayer: PlayerID): void;

/**
 * Unlocks this entity so that AI can use it again
 */
declare function AI_UnlockEntity(pPlayer: PlayerID, pEntity: EntityID): void;

/**
 * Unlocks the given squad so the AI can use it again
 */
declare function AI_UnlockSquad(pPlayer: PlayerID, pSquad: SquadID): void;

/**
 * Locks the squads and disables its tactics (if any) and the AI will no longer use these objects
 */
declare function AI_UnlockSquads(pPlayer: PlayerID, squads: SGroupID): any;

/**
 * Re-updates the AI in regards to all the static objects in the world (if SCAR creates new strategic points dynamically this will need to be called)
 */
declare function AI_UpdateStatics(pPlayer: PlayerID): void;

/**
 * Set ability for ability encounter
 */
declare function AIAbilityEncounter_AbilityGuidance_SetAbilityPBG(pEncounter: AIEncounterID, abilityPBG: PropertyBagGroup): void;

/**
 * Ends the encounter and deletes it.
 */
declare function AIEncounter_Cancel(pEncounter: AIEncounterID): any;

/**
 * add the EGroup to the Encounter forced target list. NOTE: supported only by the Attack Encounter
 */
declare function AIEncounter_CombatGuidance_AddForcedCombatTargetEGroup(pEncounter: AIEncounterID, egroup: EGroupID): any;

/**
 * add the Entity to the Encounter forced target list. NOTE: supported only by the Attack Encounter
 */
declare function AIEncounter_CombatGuidance_AddForcedCombatTargetEntity(pEncounter: AIEncounterID, pEntity: EntityID): any;

/**
 * add the SGroup to the Encounter forced target list. NOTE: supported only by the Attack Encounter
 */
declare function AIEncounter_CombatGuidance_AddForcedCombatTargetSGroup(pEncounter: AIEncounterID, sgroup: SGroupID): any;

/**
 * add the Squad to the Encounter forced target list. NOTE: supported only by the Attack Encounter
 */
declare function AIEncounter_CombatGuidance_AddForcedCombatTargetSquad(pEncounter: AIEncounterID, pSquad: SquadID): any;

/**
 * Clear the encounter Forced Combat Targets
 */
declare function AIEncounter_CombatGuidance_ClearForcedCombatTargets(pEncounter: AIEncounterID): any;

/**
 * Enables/disables squads in combat garrisoning.
 */
declare function AIEncounter_CombatGuidance_EnableCombatGarrison(pEncounter: AIEncounterID, enable: boolean): any;

/**
 * remove the EGroup from the Encounter forced target list. NOTE: supported only by the Attack Encounter
 */
declare function AIEncounter_CombatGuidance_RemoveForcedCombatTargetEGroup(pEncounter: AIEncounterID, egroup: EGroupID): any;

/**
 * remove the Entity from the Encounter forced target list. NOTE: supported only by the Attack Encounter
 */
declare function AIEncounter_CombatGuidance_RemoveForcedCombatTargetEntity(pEncounter: AIEncounterID, pEntity: EntityID): any;

/**
 * remove the SGroup from the Encounter forced target list. NOTE: supported only by the Attack Encounter
 */
declare function AIEncounter_CombatGuidance_RemoveForcedCombatTargetSGroup(pEncounter: AIEncounterID, sgroup: SGroupID): any;

/**
 * remove the Squad from the Encounter forced target list. NOTE: supported only by the Attack Encounter
 */
declare function AIEncounter_CombatGuidance_RemoveForcedCombatTargetSquad(pEncounter: AIEncounterID, pSquad: SquadID): any;

/**
 * Set Combat Range Policy for the encounter
 * policy is one of: AICombatRangePolicy_Default, AICombatRangePolicy_Ranged_MinRange, AICombatRangePolicy_Ranged_MaxRange, AICombatRangePolicy_MeleeRange
 */
declare function AIEncounter_CombatGuidance_SetCombatRangePolicy(pEncounter: AIEncounterID, policy: CombatRangePolicy): void;

/**
 * Set if the Attack Encounter should spread the attackers on multiple targets
 */
declare function AIEncounter_CombatGuidance_SetSpreadAttackers(pEncounter: AIEncounterID, value: boolean): void;

/**
 * Set a named bool value in the Encounter DataDictionary
 */
declare function AIEncounter_DataDictionarySetBool(pEncounter: AIEncounterID, varName: string, value: boolean): void;

/**
 * Set a named number value in the Encounter DataDictionary
 */
declare function AIEncounter_DataDictionarySetNumber(pEncounter: AIEncounterID, varName: string, value: number): void;

/**
 * Set a named PBG value in the Encounter DataDictionary
 */
declare function AIEncounter_DataDictionarySetPBG(pEncounter: AIEncounterID, varName: string, value: PropertyBagGroup): void;

/**
 * Enables/disables idle squads garrisoning.
 */
declare function AIEncounter_DefenseGuidance_EnableIdleGarrison(pEncounter: AIEncounterID, enable: boolean): any;

/**
 * Adds a setup location and facing direction for this encounter not specifically assigned to any squad
 */
declare function AIEncounter_EngagementGuidance_AddEncouterSetupLocation(pEncounter: AIEncounterID, pos: Position, facingDir: Position): any;

/**
 * clears the encounter setup locations
 */
declare function AIEncounter_EngagementGuidance_ClearSetupLocationOverrides(pEncounter: AIEncounterID): any;

/**
 * Enable / disable aggressive move into engagement area
 */
declare function AIEncounter_EngagementGuidance_EnableAggressiveEngagementMove(pEncounter: AIEncounterID, enable: boolean): any;

/**
 * Enable construction in Town Life encounters
 */
declare function AIEncounter_EngagementGuidance_EnableConstruction(pEncounter: AIEncounterID, enable: boolean): any;

/**
 * Enable setup locations in attack and defend encounters
 */
declare function AIEncounter_EngagementGuidance_EnableSetupLocations(pEncounter: AIEncounterID, enable: boolean): any;

/**
 * Sets a TownLife Encounter whether to allow resource gathering from deposits outside of Encounter leash.
 */
declare function AIEncounter_EngagementGuidance_SetAllowResourceGatheringOutsideLeash(pEncounter: AIEncounterID, allowOutsideLeash: boolean): void;

/**
 * Enable encounter to return to previous stages if they fail to meet conditions for current stage.
 */
declare function AIEncounter_EngagementGuidance_SetAllowReturnToPreviousStages(pEncounter: AIEncounterID, enable: boolean): void;

/**
 * Enable coordinated arrival in attack encounters
 */
declare function AIEncounter_EngagementGuidance_SetCoordinatedSetup(pEncounter: AIEncounterID, enable: boolean): void;

/**
 * Enables/disables sniper reactions
 */
declare function AIEncounter_EngagementGuidance_SetEnableSniperReactions(pEncounter: AIEncounterID, enable: boolean): void;

/**
 * Enables/disables SubEngagementAreas
 */
declare function AIEncounter_EngagementGuidance_SetEnableSubEngagementAreas(pEncounter: AIEncounterID, enable: boolean): void;

/**
 * Sets max time, in seconds, to accomplish encounter, once the target is engaged.
 */
declare function AIEncounter_EngagementGuidance_SetMaxEngagementTime(pEncounter: AIEncounterID, seconds: number): void;

/**
 * Sets max time, in seconds, to remain idle at encounter target, once engaged.
 */
declare function AIEncounter_EngagementGuidance_SetMaxIdleTime(pEncounter: AIEncounterID, seconds: number): void;

/**
 * set the sbp setup location priority override
 */
declare function AIEncounter_EngagementGuidance_SetSetupLocationSbpPriority(pEncounter: AIEncounterID, sbp: ScarSquadPBG, priority: number): void;

/**
 * set the squad setup location and facing direction
 */
declare function AIEncounter_EngagementGuidance_SetSquadSetupLocation(pEncounter: AIEncounterID, pSquad: SquadID, pos: Position, facingDir: Position): void;

/**
 * Enable/Disable Reinforce during combat
 */
declare function AIEncounter_FallbackGuidance_EnableReinforceDuringCombat(pEncounter: AIEncounterID, value: boolean): any;

/**
 * Enable retreat to break pinned.
 */
declare function AIEncounter_FallbackGuidance_EnableRetreatOnPinned(pEncounter: AIEncounterID, enable: boolean): any;

/**
 * Enable retreat to break suppression.
 */
declare function AIEncounter_FallbackGuidance_EnableRetreatOnSuppression(pEncounter: AIEncounterID, enable: boolean): any;

/**
 * Set entities remaining threshold of encounter [-1 to N] to fallback at. (negative disables)
 */
declare function AIEncounter_FallbackGuidance_SetEntitiesRemainingThreshold(pEncounter: AIEncounterID, value: number): void;

/**
 * Set capacity threshold [-1 to 1] to fallback at. (negative disables)
 */
declare function AIEncounter_FallbackGuidance_SetFallbackCapacityPercentage(pEncounter: AIEncounterID, value: number): void;

/**
 * Set combat rating threshold of area [0.0 to 1.0] to fallback at. (0.0 disables)
 */
declare function AIEncounter_FallbackGuidance_SetFallbackCombatRating(pEncounter: AIEncounterID, value: number): void;

/**
 * Set Squad health threshold [-1 to 1] to fallback at. (negative disables)
 */
declare function AIEncounter_FallbackGuidance_SetFallbackSquadHealthPercentage(pEncounter: AIEncounterID, fallbackStartValue: number, fallbackEndValue: number): void;

/**
 * Set Squad Shield threshold [-1 to 1] to fallback at. (negative disables)
 */
declare function AIEncounter_FallbackGuidance_SetFallbackSquadShieldPercentage(pEncounter: AIEncounterID, fallbackStartValue: number, fallbackEndValue: number): void;

/**
 * Set Vehicle health threshold [-1 to 1] to fallback at. (negative disables)
 */
declare function AIEncounter_FallbackGuidance_SetFallbackVehicleHealthPercentage(pEncounter: AIEncounterID, fallbackStartValue: number, fallbackEndValue: number): void;

/**
 * Set global fallback threshold (negative for individual squad).
 */
declare function AIEncounter_FallbackGuidance_SetGlobalFallbackPercentage(pEncounter: AIEncounterID, value: number): void;

/**
 * Set global retreat type (true for retreat; false for fallback).
 */
declare function AIEncounter_FallbackGuidance_SetGlobalFallbackRetreat(pEncounter: AIEncounterID, value: boolean): void;

/**
 * Set the Reinforce Health Percentage [-1 to 1] (negative disables retreat)
 */
declare function AIEncounter_FallbackGuidance_SetReinforceHealthPercentage(pEncounter: AIEncounterID, value: number): void;

/**
 * Set the Max Reinforce Distance (negative value: no distance constrain)
 */
declare function AIEncounter_FallbackGuidance_SetReinforceMaxDistance(pEncounter: AIEncounterID, value: number): void;

/**
 * Set the Min Health Ratio Required To Reach Reinforce Point [0.0, 1.0] (negative value: no constrain)
 */
declare function AIEncounter_FallbackGuidance_SetReinforceMinHealthRatioToReachReinforcePoint(pEncounter: AIEncounterID, value: number): void;

/**
 * Set combat rating threshold of area [-1 to 1] to fallback at. (negative disables)
 */
declare function AIEncounter_FallbackGuidance_SetRetreatCapacityPercentage(pEncounter: AIEncounterID, value: number): void;

/**
 * Set combat rating threshold of area [0.0 to 1.0] to retreat at. (0.0 disables)
 */
declare function AIEncounter_FallbackGuidance_SetRetreatCombatRating(pEncounter: AIEncounterID, value: number): void;

/**
 * Set retreat health threshold of area [-1 to 1] (negative disables)
 */
declare function AIEncounter_FallbackGuidance_SetRetreatHealthPercentage(pEncounter: AIEncounterID, value: number): void;

/**
 * Set fallback target.
 */
declare function AIEncounter_FallbackGuidance_SetTargetPosition(pEncounter: AIEncounterID, pos: Position): void;

/**
 * Asks the encounter to terminate in its next update (allows PhaseEncounter to set its exit info)
 */
declare function AIEncounter_ForceComplete(pEncounter: AIEncounterID): any;

/**
 * Set formup type for formation encounter to be at building of type from AE tuning list (must set before triggering)
 */
declare function AIEncounter_FormationGuidance_SetFormUpAtBuildingOfType(encounter: AIEncounterID, unitTypeList: string): void;

/**
 * Set formup entity for formation encounter (must set before triggering)
 */
declare function AIEncounter_FormationGuidance_SetFormUpAtEntityTarget(encounter: AIEncounterID, entity: EntityID): void;

/**
 * Set formup position for formation encounter (must set before triggering)
 */
declare function AIEncounter_FormationGuidance_SetFormUpAtPositionTarget(encounter: AIEncounterID, postion: Position): void;

/**
 * Set formup position for formation encounter at the average of current squad positions (must set before triggering)
 */
declare function AIEncounter_FormationGuidance_SetFormUpAtSquadAverage(encounter: AIEncounterID): void;

/**
 * Set formup position timeout and % squads that must arrive or else it will fail.  Setting zero for timeout means infinite
 */
declare function AIEncounter_FormationGuidance_SetFormUpAtTimeOutParams(encounter: AIEncounterID, timeoutSeconds: number, requiredSquadsPercent: number): void;

/**
 * Get the average position of squads of this finished formation phase encounter (may be the same as target if successful).  You should call AIEncounter_FormationPhase_HasValidExitInfo before this to avoid an error
 */
declare function AIEncounter_FormationPhase_GetEndPosition(encounterID: AITaskID): any;

/**
 * Get the end position of this finished formation phase move encounter (may be the same as target if successful)
 */
declare function AIEncounter_FormationPhase_GetEndReason(encounterID: AITaskID): any;

/**
 * Get Groups containing the enemies encountered by this formation phase encounter (encounter must have completed) false indicates the exit info was not available for this encounter
 */
declare function AIEncounter_FormationPhase_GetEnemiesAtEnd(encounterID: AITaskID, enemySquads: SGroupID, enemyBuildings: EGroupID): any;

/**
 * Get the combat fitness result for a finished phase encounter, will only be valid for exit states CombatFitnessThreshold or WasAttacked.  -1.0f means invalid.
 */
declare function AIEncounter_FormationPhase_GetExitCombatFitnessResult(encounterID: AITaskID): any;

/**
 * Get SGRoups containing the squads who made it to the destination of a formation phase move encounter and those who didn't (encounter must have completed) false indicates the exit info was not available for this encounter
 */
declare function AIEncounter_FormationPhase_GetSquadsAvailableAtEnd(encounterID: AITaskID, squadsAvailable: SGroupID, squadsUnavailable: SGroupID): any;

/**
 * Query if there is valid exit info for this encounter (will only return true for phase encounters)
 */
declare function AIEncounter_FormationPhase_HasValidExitInfo(encounterID: AITaskID): any;

/**
 * Assign a property bag contains data to support sub task coordination for combat encounters
 */
declare function AIEncounter_FormationPhaseGuidance_SetCombatCoordinator(encounter: AIEncounterID, coordinatorPBG: PropertyBagGroup): void;

/**
 * Set params for terminating a formation phase encounter based on combat, fallback params can also be used
 */
declare function AIEncounter_FormationPhaseGuidance_SetCombatExitParams(encounter: AIEncounterID, timeoutSeconds: number, testTargetDestroyed: boolean, testEnemySquadsCleared: boolean, testEnemyBuildingsCleared: boolean, enemyScanRange: number, excludeBuildingTypeNames: string): void;

/**
 * Set params for terminating a formation phase encounter that is moving somewhere and encounters enemies
 * enemyScanRange is scan range from current centre of the formation to look for enemies in meters combatFitnessThreshold is the fitness rating against all detected enemies, < 0 means do not use, 0 means our team will win taking no damage, 1.0 means the enemy will win taking now damage. enemyFormationAngle is the relative heading of the strongest enemy formation in degrees, 0 means do not use enemyFormationPosition is the relative position of the strongest enemy formation in degrees, where 360.0f means directly behind us, 0 means do not use enemyFormationDistance is the distance threshold of the strongest enemy formation in meters
 */
declare function AIEncounter_FormationPhaseGuidance_SetMoveEnemiesExitParams(encounter: AIEncounterID, enemyScanRange: number, combatFitnessThreshold: number, enemyFormationHeading: number, enemyFormationPosition: number, enemyFormationDistance: number, excludeBuildingTypeNames: string): void;

/**
 * Set params for terminating a formation phase encounter that is moving somewhere
 * timeoutSeconds is how long to wait for squads to get to destination (0 means run indefinitely) requiredSquadsPercent is how many squads must be in the target area, 1.0 means all wasRecentlyAttackedSecs was any unit attacked in this interval, 0 means do not use.  Recommend not using if you are also using combat threshold
 */
declare function AIEncounter_FormationPhaseGuidance_SetMoveExitParams(encounter: AIEncounterID, timeoutSeconds: number, requiredSquadsPercent: number, wasRecentlyAttackedSecs: number): void;

/**
 * Specify data for formation encounter to create a formation min range task state
 * repositionInterval is how often they will check to see if they need to reposition
 */
declare function AIEncounter_FormationTaskStateGuidance_MinRange(encounter: AIEncounterID, priority: number, minSquads: number, maxSquads: number, maxTasks: number, repositionIntervalSecs: number, useTactics: boolean, unitTypeNames: string, targetPriorityPBG: PropertyBagGroup): any;

/**
 * Specify data for formation encounter to create a formation min range task state with protect task
 * enemyScanRange is scan range from current centre of the formation to look for enemies in meters
 */
declare function AIEncounter_FormationTaskStateGuidance_MinRangeWithProtect(encounter: AIEncounterID, priority: number, minSquads: number, maxSquads: number, maxTasks: number, repositionIntervalSecs: number, useTactics: boolean, unitTypeNames: string, targetPriorityPBG: PropertyBagGroup, protectMinSquads: number, protectMaxSquads: number, protectProportionSquads: number, protectDistance: number, protectRepositionThreshold: number, protectRepositionIntervalSecs: number, protectUnitTypeNames: string): any;

/**
 * Specify data for formation encounter to create a formation move task state
 */
declare function AIEncounter_FormationTaskStateGuidance_Move(encounter: AIEncounterID, attackMove: boolean, priority: number, minSquads: number, maxSquads: number, maxTasks: number, unitTypeNames: string): any;

/**
 * Specify data for formation encounter to create a formation setup ranged task state
 */
declare function AIEncounter_FormationTaskStateGuidance_SetupRanged(encounter: AIEncounterID, priority: number, minSquads: number, maxSquads: number, maxTasks: number, unitTypeNames: string, targetPriorityPBG: PropertyBagGroup): any;

/**
 * Specify data for formation encounter to create a formation setup ranged task state and along with a formation of other units to protect it
 */
declare function AIEncounter_FormationTaskStateGuidance_SetupRangedWithProtect(encounter: AIEncounterID, priority: number, minSquads: number, maxSquads: number, maxTasks: number, unitTypeNames: string, targetPriorityPBG: PropertyBagGroup, protectMinSquads: number, protectMaxSquads: number, protectProportionSquads: number, protectDistance: number, protectRepositionThreshold: number, protectRepositionIntervalSecs: number, protectUnitTypeNames: string): any;

/**
 * Specify data for formation encounter to create a formation simple melee task state
 */
declare function AIEncounter_FormationTaskStateGuidance_SimpleMelee(encounter: AIEncounterID, priority: number, minSquads: number, maxSquads: number, maxTasks: number, unitTypeNames: string, targetPriorityPBG: PropertyBagGroup): any;

/**
 * Specify data for formation encounter to create a formation transport move task state
 */
declare function AIEncounter_FormationTaskStateGuidance_TransportMove(encounter: AIEncounterID, priority: number, minSquads: number, maxSquads: number, maxTasks: number, unitTypeNames: string, minPassengerSquads: number, maxPassengerSquadsPerTransport: number, unloadAbilityPBG: PropertyBagGroup, passengerUnitTypeNames: string, targetPriorityPBG: PropertyBagGroup): any;

/**
 * Returns the encounter pointer from the ID, always test for nil before using...
 */
declare function AIEncounter_GetEncounterFromID(player: PlayerID, taskID: AITaskID): any;

/**
 * Returns true if enconter has a valid AI player
 */
declare function AIEncounter_IsAIPlayerValid(pEncounter: AIEncounterID): any;

/**
 * Determines if encounter is still valid.  Must be true before calling any other of the AIEncounter_* function.  Return true if valid, false otherwise.
 */
declare function AIEncounter_IsValid(PlayerUniqueID: UniqueID, encounterTaskID: AITaskID): any;

/**
 * in non RTM builds, if verboseEncounterLogging is enabled, will spew string to AI log file
 */
declare function AIEncounter_LogDebug(pPlayer: PlayerID, encounterID: number, debugString: string): any;

/**
 * Enable / disable aggressive movements on way to engagement targets
 */
declare function AIEncounter_MoveGuidance_EnableAggressiveMove(pEncounter: AIEncounterID, enable: boolean): any;

/**
 * Set radius (follow distance) for coordinated move phase (<= 0 disables coordinated movement)
 */
declare function AIEncounter_MoveGuidance_SetSquadCoherenceRadius(pEncounter: AIEncounterID, radius: number): void;

/**
 * Clears all notification callbacks for encounter
 */
declare function AIEncounter_Notify_ClearCallbacks(pEncounter: AIEncounterID): any;

/**
 * enables/disabled the sniped callback
 */
declare function AIEncounter_Notify_SetEnableSnipedCallbacks(pEncounter: AIEncounterID, value: boolean): void;

/**
 * Sets the ID for the notification event sent out by encounter
 */
declare function AIEncounter_Notify_SetPlayerEventEncounterID(pEncounter: AIEncounterID, id: number): void;

/**
 * Pause/Unpause this encounter
 */
declare function AIEncounter_Pause(pEncounter: AIEncounterID, bPause: boolean): any;

/**
 * Calculates approximately how long it will take for a specified Encounter to produce a specified squad.
 * Returns production time in seconds.  Negative value means the specified PBG cannot be produced at the specified Encounter. pEncounter is the Encounter Module that can service a production request. pbgShortname is the PBG of the squad to query. if canAffordNowOnly is set and we currently don't have enough resource now, report "cannot be produced".
 */
declare function AIEncounter_ResourceGuidance_CalculateEstimatedSquadProductionTime(pEncounter: AIEncounterID, pbgShortname: string, canAffordNowOnly: boolean): any;

/**
 * Removes all resource entities from encounter.
 */
declare function AIEncounter_ResourceGuidance_ClearEntities(pEncounter: AIEncounterID): any;

/**
 * Removes all resource squads from encounter.
 */
declare function AIEncounter_ResourceGuidance_ClearSquads(pEncounter: AIEncounterID): any;

/**
 * Sets the resource entities for encounter.
 */
declare function AIEncounter_ResourceGuidance_EntityGroup(pEncounter: AIEncounterID, entities: EGroupID): any;

/**
 * Checks if a squad group is equal to the resource squads of an encounter.
 */
declare function AIEncounter_ResourceGuidance_IsSquadGroupEqual(pEncounter: AIEncounterID, squads: SGroupID): any;

/**
 * Sets the resource money for an encounter.
 */
declare function AIEncounter_ResourceGuidance_SetResourceMoney(pEncounter: AIEncounterID, resourceAmount: Record<number, number>): void;

/**
 * Sets the resource squads for encounter.
 */
declare function AIEncounter_ResourceGuidance_SquadGroup(pEncounter: AIEncounterID, squads: SGroupID): any;

/**
 * Set encounter name for debugging.
 */
declare function AIEncounter_SetDebugName(pEncounter: AIEncounterID, name: string): void;

/**
 * Reset all tactic filters for encounter
 */
declare function AIEncounter_TacticFilter_Reset(pEncounter: AIEncounterID): any;

/**
 * Reset all tactic ability constraints for encounter
 */
declare function AIEncounter_TacticFilter_ResetAbilityGuidance(pEncounter: AIEncounterID): any;

/**
 * Reset ability priority for all squads in encounter
 */
declare function AIEncounter_TacticFilter_ResetAbilityPriority(pEncounter: AIEncounterID, abilityPBG: PropertyBagGroup): any;

/**
 * Reset tactic priority for all squads in encounter
 */
declare function AIEncounter_TacticFilter_ResetPriority(pEncounter: AIEncounterID, tactic: AITacticType): any;

/**
 * Reset all tactic constraints for encounter
 */
declare function AIEncounter_TacticFilter_ResetTacticGuidance(pEncounter: AIEncounterID): any;

/**
 * Reset all tactic target constraints for encounter
 */
declare function AIEncounter_TacticFilter_ResetTargetGuidance(pEncounter: AIEncounterID): any;

/**
 * Set tactic ability constraints for encounter
 * maxCasters is maximum concurrent casters of this ability (-1 is unlimited), waitRetrySecs is time in seconds between ability tactic retrying ability retry, wait[self/encounter], and timeout Secs are: the number of seconds to try doing a tactic after a previous try; seconds after last successful try; how long the successful tactic can run. initialWait is true if the waitTime applies before the first ability use. maxRange is the maximum range to look for ability target from caster (other range constraints may limit the max range to a smaller value) castChanceOverride is the probability to cast the ability, must be between 0.0 and 1.0
 */
declare function AIEncounter_TacticFilter_SetAbilityGuidance(pEncounter: AIEncounterID, ability: PropertyBagGroup, maxCasters: number, retrySecs: number, waitSelfSecs: number, waitEncounterSecs: number, timeoutSecs: number, initialWait: boolean, maxRange: number, castChanceOverride: number): void;

/**
 * Set ability priority for all squads in encounter; negative priority disables
 */
declare function AIEncounter_TacticFilter_SetAbilityPriority(pEncounter: AIEncounterID, abilityPBG: PropertyBagGroup, priority: number): void;

/**
 * Set ability priority for squad in encounter
 */
declare function AIEncounter_TacticFilter_SetAbilityPriorityForSquad(pEncounter: AIEncounterID, squad: SquadID, abilityPBG: PropertyBagGroup, priority: number): void;

/**
 * Set default tactic ability constraints for encounter (ability specific guidance takes priority over defaults)
 * maxCasters is maximum concurrent casters of ability (-1 is unlimited), waitRetrySecs is time in seconds between ability tactic retrying ability, retry, wait[self/encounter], and timeout Secs are: the number of seconds to try doing a tactic after a previous try; seconds after last successful try; how long the successful tactic can run. initialWait is true if the waitTime applies before the first ability use. maxRange is the maximum range to look for ability target from caster (other range constraints may limit the max range to a smaller value) castChanceOverride is the probability to cast the ability, must be between 0.0 and 1.0
 */
declare function AIEncounter_TacticFilter_SetDefaultAbilityGuidance(pEncounter: AIEncounterID, maxCasters: number, retrySecs: number, waitSelfSecs: number, waitEncounterSecs: number, timeoutSecs: number, initialWait: boolean, maxRange: number, castChanceOverride: number): void;

/**
 * Set default tactic constraints for encounter (tactic specific guidance takes priority over defaults)
 * maxUsers is maximum concurrent users of tactic (-1 is unlimited), waitRetrySecs is time in seconds between tactic retrying retry, wait, and timeout Secs are: the number of seconds to try doing a tactic after a previous try; seconds after last successful try; how long the successful tactic can run. initialWait is true if the waitTime applies before the first tactic use. maxRange is the maximum range to look for tactic target from caster (other range constraints may limit the max range to a smaller value)
 */
declare function AIEncounter_TacticFilter_SetDefaultTacticGuidance(pEncounter: AIEncounterID, maxUsers: number, retrySecs: number, waitSecs: number, timeoutSecs: number, initialWait: boolean, maxRange: number): void;

/**
 * Set tactic priority for all squads in encounter; negative priority disables
 */
declare function AIEncounter_TacticFilter_SetPriority(pEncounter: AIEncounterID, tactic: AITacticType, priority: number): void;

/**
 * Set tactic priority for squads in encounter
 */
declare function AIEncounter_TacticFilter_SetPriorityForSquad(pEncounter: AIEncounterID, squad: SquadID, tactic: AITacticType, priority: number): void;

/**
 * Set tactic constraints for encounter
 * maxUsers is maximum concurrent users of this tactic (-1 is unlimited), waitRetrySecs is time in seconds between tactic retry retry, wait, and timeout Secs are: the number of seconds to try doing a tactic after a previous try; seconds after last successful try; how long the successful tactic can run. initialWait is true if the waitTime applies before the first tactic use. maxRange is the maximum range to look for tactic target from caster (other range constraints may limit the max range to a smaller value)
 */
declare function AIEncounter_TacticFilter_SetTacticGuidance(pEncounter: AIEncounterID, tactic: AITacticType, maxUsers: number, retrySecs: number, waitSecs: number, timeoutSecs: number, initialWait: boolean, maxRange: number): void;

/**
 * Set tactic target priority for encounter
 * policy is one of: AITacticTargetPreference_None, AITacticTargetPreference_Near,
 */
declare function AIEncounter_TacticFilter_SetTargetPolicy(pEncounter: AIEncounterID, policy: TargetPreference): void;

/**
 * Disables the patrol for the passed Squad
 */
declare function AIEncounter_TargetGuidance_DisableSquadPatrol(pEncounter: AIEncounterID, pSquad: SquadID): any;

/**
 * Sets target patrol path for encounter
 */
declare function AIEncounter_TargetGuidance_SetPatrolPathByName(pEncounter: AIEncounterID, pathName: string, delaySecs: number, invertPathAtEnd: boolean, startInverted: boolean): void;

/**
 * Sets random wander target patrol for encounter; delaySecs is the time in secs to pause at each random point
 */
declare function AIEncounter_TargetGuidance_SetPatrolWander(pEncounter: AIEncounterID, delaySecs: number, radiusMode: number, radiusOverride: number, overrideCenter: boolean, centerOverride: Position): void;

/**
 * Sets target patrol path for the squad
 */
declare function AIEncounter_TargetGuidance_SetSquadPatrolPathByName(pEncounter: AIEncounterID, pSquad: SquadID, pathName: string, delaySecs: number, invertPathAtEnd: boolean, startInverted: boolean): void;

/**
 * Sets random wander target patrol for the squad; delaySecs is the time in secs to pause at each random point
 */
declare function AIEncounter_TargetGuidance_SetSquadPatrolWander(pEncounter: AIEncounterID, pSquad: SquadID, delaySecs: number, radiusMode: number, radiusOverride: number, overrideCenter: boolean, centerOverride: Position): void;

/**
 * Sets engagement area radius around the target.
 */
declare function AIEncounter_TargetGuidance_SetTargetArea(pEncounter: AIEncounterID, radius: number): void;

/**
 * Sets target Entity for encounter
 */
declare function AIEncounter_TargetGuidance_SetTargetEntity(pEncounter: AIEncounterID, entity: EntityID): void;

/**
 * Sets leash radius around target where squads should stay within.
 */
declare function AIEncounter_TargetGuidance_SetTargetLeash(pEncounter: AIEncounterID, radius: number): void;

/**
 * Sets target position for encounter
 */
declare function AIEncounter_TargetGuidance_SetTargetPosition(pEncounter: AIEncounterID, pos: Position): void;

/**
 * Sets target Squad for encounter
 */
declare function AIEncounter_TargetGuidance_SetTargetSquad(pEncounter: AIEncounterID, squad: SquadID): void;

/**
 * Set encounter name for debugging.
 */
declare function AIEncounter_Trigger(pEncounter: AIEncounterID): any;

/**
 * Checks if the squad can lock the tactic item
 */
declare function AIPlayer_CanAISquadLockTacticItem(tacticItemEntity: EntityID, lockingAISquad: SquadID): any;

/**
 * Returns the Player at specified index out of all opponent players.  Use in conjunction with `AIPlayer_GetOpponentPlayerCount`.
 */
declare function AIPlayer_GetOpponentPlayerAtIndex(aiPlayer: PlayerID, index: number): any;

/**
 * Returns the number of opponent Players to the specified AIPlayer.
 */
declare function AIPlayer_GetOpponentPlayerCount(aiPlayer: PlayerID): any;

/**
 * Returns a table of squad ids from the AIPlayer's state model corresponding to the given key.
 */
declare function AIPlayer_GetStateModelAISquadListEntries(aiPlayer: PlayerID, key: string): any;

/**
 * Checks if a tactic item is locked
 */
declare function AIPlayer_IsTacticItemLocked(player: PlayerID, tacticItemEntity: EntityID): any;

/**
 * Checks if a tactic item is locked by the squad
 */
declare function AIPlayer_IsTacticItemLockedByAISquad(tacticItemEntity: EntityID, lockingAISquad: SquadID): any;

/**
 * Locks a tactic item for the passed player
 */
declare function AIPlayer_LockTacticItemForAISquad(tacticItemEntity: EntityID, lockingAISquad: SquadID): any;

/**
 * Temporarily hides all of the known squads belonging to the enemy player for the specified AI
 */
declare function AIPlayer_ResetEnemySquadsVisibility(player: PlayerID, enemyPlayer: PlayerID): any;

/**
 * Set the target distribution of how the ai player should use their units for gathering
 * Second argument is a map of resource type names to weights ex: { ['wood'] = 5, ... }
 */
declare function AIPlayer_SetGathererDistributionOverride(aiPlayer: PlayerID, luaGatherDistro: number): void;

/**
 * marks the player to force the stats squads to update
 */
declare function AIPlayer_SetRequiresStatsUpdate(player: PlayerID): void;

/**
 * UnLocks a tactic item for the passed player
 */
declare function AIPlayer_UnLockTacticItemForAISquad(tacticItemEntity: EntityID, lockingAISquad: SquadID): any;

/**
 * Find the best squad target which is not part of a clump.
 */
declare function AISquad_FindBestIsolatedSquadTarget(aiSquad: SquadID, targetSquads: SGroupID, tacticTargetPolicy: TargetPreference, targetAllies: boolean): any;

/**
 * returns the best squad target in the sgroup based on the passed tacticTargetPolicy
 * policy is one of: AITacticTargetPreference_None, AITacticTargetPreference_Near,
 */
declare function AISquad_FindBestSquadTarget(aiSquad: SquadID, targetSquads: SGroupID, tacticTargetPolicy: TargetPreference): any;

/**
 * returns the safest position for the AISquad in the current encounter leash area
 */
declare function AISquad_FindSafePositionInEncounterLeash(aiSquad: SquadID, maxRadius: number): any;

/**
 * returns true if the AISquad is currently running the AISquadAbilityTactic for the passed abilityPBG
 */
declare function AISquad_IsRunningSquadTacticAbility(aiSquad: SquadID, abilityPBG: PropertyBagGroup): any;

/**
 * On the AIPlayer statetree, spawn a Root Controller with tunings that can be pushed onto the Root Controller's StateModel.
 */
declare function AIStateTree_SpawnRootControllerWithStateModelTunings(pPlayer: PlayerID, openingBranchName: string, keepAlive: boolean, stateModelTuningsScarPBG: ScarAIStateModelTuningsPBG, stateModelSGroupListTunings: SGroupID, stateModelEGroupListTunings: EGroupID, stateModelPositionTargetListTunings: Position, stateModelMarkerTargetListTunings: MarkerID, stateModelEntityTypeListTunings: string, stateModelCoordinatorPBGListTunings: LuaMap, stateModelBoolTunings: boolean, stateModelFloatTunings: number, stateModelIntTunings: number): any;

/**
 * returns the Encounter that controls the Squad
 */
declare function Squad_GetInternalAIEncounterPtr(squad: SquadID): any;

/**
 * returns true if the Squad is in an Encounter
 */
declare function Squad_IsInAIEncounter(squad: SquadID): any;

/**
 * iterates through an sgroup, returns count with AIStatsSquad
 */
declare function SquadGroup_CountSpawnedAndStatsInitialized(sgroup: SGroupID, player: PlayerID): any;

/**
 * Returns an ability property bag group.
 */
declare function BP_GetAbilityBlueprint(pbgPath: string): AbilityBlueprint;

/**
 * Returns an ability property bag group.
 */
declare function BP_GetAbilityBlueprintByPbgID(pbgID: number): any;

/**
 * Returns an AIAbility property bag group.
 */
declare function BP_GetAIAbilityBlueprint(pbgShortname: string): any;

/**
 * Returns an AIAbility property bag group.
 */
declare function BP_GetAIAbilityBlueprintByPbgID(pbgID: number): any;

/**
 * Returns an AIFormationCoordinator property bag group.
 */
declare function BP_GetAIFormationCoordinatorBlueprint(pbgShortname: string): any;

/**
 * Returns an AIFormationCoordinator property bag group.
 */
declare function BP_GetAIFormationCoordinatorBlueprintByPbgID(pbgID: number): any;

/**
 * Returns an AIFormationTargetPriority property bag group.
 */
declare function BP_GetAIFormationTargetPriorityBlueprint(pbgShortname: string): any;

/**
 * Returns an AIFormationTargetPriority property bag group.
 */
declare function BP_GetAIFormationTargetPriorityBlueprintByPbgID(pbgID: number): any;

/**
 * Returns an AIStateModelTunings property bag group.
 */
declare function BP_GetAIStateModelTuningsBlueprint(pbgShortname: string): any;

/**
 * Returns an AIStateModelTunings property bag group.
 */
declare function BP_GetAIStateModelTuningsBlueprintByPbgID(pbgID: number): any;

/**
 * Returns an entity property bag group.
 */
declare function BP_GetEntityBlueprint(pbgPath: string): EntityBlueprint;

/**
 * Returns an entity property bag group.
 */
declare function BP_GetEntityBlueprintByPbgID(pbgID: number): any;

/**
 * Returns the child blueprint of the specified entity blueprint at specified index.
 */
declare function BP_GetEntityChildBlueprintAtIndex(pbgShortname: string, index: number): any;

/**
 * Returns the number of child blueprints of the specified entity blueprint.
 */
declare function BP_GetEntityChildBlueprintCount(pbgShortname: string): any;

/**
 * Returns the parent blueprint of the specified entity blueprint at specified index
 */
declare function BP_GetEntityParentBlueprintAtIndex(pbgShortname: string, index: number): any;

/**
 * Returns the number of parent blueprints of the specified entity blueprint.
 */
declare function BP_GetEntityParentBlueprintCount(pbgShortname: string): any;

/**
 * Returns race blueprint associated with an entity blueprint type_ext at specified index.
 */
declare function BP_GetEntityTypeExtRaceBlueprintAtIndex(pbgShortname: string, index: number): any;

/**
 * Returns the number of race blueprints associated with an entity blueprint type_ext.
 */
declare function BP_GetEntityTypeExtRaceCount(pbgShortname: string): any;

/**
 * Returns a table containing the ui_ext info for given entity
 */
declare function BP_GetEntityUIInfo(ebp: ScarEntityPBG): any;

/**
 * Returns a map pool property bag group.
 */
declare function BP_GetMapPoolBlueprint(pbgShortname: string): any;

/**
 * Returns a map pool property bag group.
 */
declare function BP_GetMapPoolBlueprintByPbgID(pbgID: number): any;

/**
 * Returns a move type property bag group.
 */
declare function BP_GetMoveTypeBlueprint(pbgPath: string): MoveTypeBlueprint;

/**
 * Returns a move type property bag group.
 */
declare function BP_GetMoveTypeBlueprintByPbgID(pbgID: number): any;

/**
 * Return the path name of the group
 * Example name would be "abilities\ally_mad_minute_ability"
 */
declare function BP_GetName(pbg: Blueprint): string;

/**
 * Returns an pass type property bag group.
 */
declare function BP_GetPassTypeBlueprint(pbgShortname: string): any;

/**
 * Returns an pass type property bag group.
 */
declare function BP_GetPassTypeBlueprintByPbgID(pbgID: number): any;

/**
 * Return the number of property bag groups of the same type
 * Example type would be PBG_Critical
 */
declare function BP_GetPropertyBagGroupCount(type: number): number;

/**
 * Return the path name of the group
 * Example name would be "abilities\ally_mad_minute_ability"
 */
declare function BP_GetPropertyBagGroupPathName(type: number, id: number): string;

/**
 * Returns a UIReticuleBag property bag group.
 */
declare function BP_GetReticuleBlueprint(pbgShortname: string): any;

/**
 * Returns a slot item property bag group.
 */
declare function BP_GetSlotItemBlueprint(pbgPath: string): SlotItemBlueprint;

/**
 * Returns a slot item property bag group.
 */
declare function BP_GetSlotItemBlueprintByPbgID(pbgID: number): any;

/**
 * Returns a squad property bag group.
 */
declare function BP_GetSquadBlueprint(pbgPath: string): SquadBlueprint;

/**
 * Returns a squad property bag group.
 */
declare function BP_GetSquadBlueprintByPbgID(pbgID: string): any;

/**
 * Returns the child blueprint of the specified squad blueprint at specified index.
 */
declare function BP_GetSquadChildBlueprintAtIndex(pbgShortname: string, index: number): any;

/**
 * Returns the number of child blueprints of the specified squad blueprint.
 */
declare function BP_GetSquadChildBlueprintCount(pbgShortname: string): any;

/**
 * Returns the parent blueprint of the specified squad blueprint at specified index
 */
declare function BP_GetSquadParentBlueprintAtIndex(pbgShortname: string, index: number): any;

/**
 * Returns the number of parent blueprints of the specified squad blueprint.
 */
declare function BP_GetSquadParentBlueprintCount(pbgShortname: string): any;

/**
 * Returns race blueprint associated with a squad blueprint squad_type_ext at specified index.
 */
declare function BP_GetSquadTypeExtRaceBlueprintAtIndex(pbgShortname: string, index: number): any;

/**
 * Returns the number of race blueprints associated with a squad blueprint squad_type_ext.
 */
declare function BP_GetSquadTypeExtRaceCount(pbgShortname: string): any;

/**
 * Returns a table containing the ui_ext info for given squad and race
 */
declare function BP_GetSquadUIInfo(sbp: ScarSquadPBG, rbp: ScarRacePBG): any;

/**
 * Returns the type of a blueprint.
 */
declare function BP_GetType(v: any): any;

/**
 * Returns an upgrade property bag group.
 */
declare function BP_GetUpgradeBlueprint(pbgPath: string): UpgradeBlueprint;

/**
 * Returns an upgrade property bag group.
 */
declare function BP_GetUpgradeBlueprintByPbgID(pbgID: number): any;

/**
 * Returns a table containing the ui_ext info for given upgrade
 */
declare function BP_GetUpgradeUIInfo(ubp: ScarUpgradePBG): any;

/**
 * Returns a weapon property bag group.
 */
declare function BP_GetWeaponBlueprint(pbgPath: string): WeaponBlueprint;

/**
 * Returns a weapon property bag group.
 */
declare function BP_GetWeaponBlueprintByPbgID(pbgID: number): any;

/**
 * Returns true if the UpgradePGB's list of types includes the given type
 */
declare function BP_IsUpgradeOfType(upgradePBG: ScarUpgradePBG, key: string): any;

/**
 * Returns true if an entity blueprint exists with the given name.
 */
declare function EBP_Exists(name: string): boolean;

/**
 * Returns whether the entity blueprint is of specified race
 */
declare function EBP_IsOfRace(pbgShortname: string, race: ScarRacePBG): any;

/**
 * Returns true if a squad blueprint exists with the given name.
 */
declare function SBP_Exists(name: string): boolean;

/**
 * Returns whether the squad blueprint is of specified race
 */
declare function SBP_IsOfRace(pbgShortname: string, race: ScarRacePBG): any;

/**
 * Queue moving the camera along a spline consisting of entity/marker/pos/egroup/sgroup/squad objects within seconds.
 * The camera will move from the position that was in front of it in the pan queue along the positions provided. Catmull-Rom interpolation between points is used
 */
declare function Camera_CatromSplinePanOverTime(var_: any, seconds: number, keepQueue: boolean, controlRotation: boolean): void;

/**
 * Moves the camera through a list of positions.
 */
declare function Camera_CyclePositions(list: any, pan?: boolean, panRate?: number, callback?: any): void;

/**
 * Set the camera to follow an sgroup/squad/egroup/entity.
 * The camera will follow them until the player takes control again.
 */
declare function Camera_Follow(var_: any): void;

/**
 * Queue moving the camera along a spline consisting of entity/marker/pos/egroup/sgroup/squad objects within seconds.
 * The camera will move from the position that was in front of it in the pan queue along the positions provided. Linear interpolation between points is used
 */
declare function Camera_LinearSplinePanOverTime(var_: any, seconds: number, keepQueue: boolean, controlRotation: boolean): void;

/**
 * Move the camera to an entity/marker/pos/egroup/sgroup/squad at a given speed
 */
declare function Camera_MoveTo(var_: any, pan: boolean, panRate: number, keepInputLocked: boolean, resetToDefault: boolean): void;

/**
 * Slightly refocus the camera to rest on an entity/squad/squad/sgroup/egroup/pos/marker if it's close by.
 * This function can be called through a CTRL object in NISlets.
 */
declare function Camera_MoveToIfClose(var_: any): void;

/**
 * Queue moving the camera a certain distance from the position of the camera in a specified amount of time.
 * The position used is the position the camera will be in after completing the movement(s) queued in front.
 */
declare function Camera_PanOverTimeRelative(delta: Position, seconds: number, keepQueue: boolean): void;

/**
 * Queue moving the camera to an entity/marker/pos/egroup/sgroup/squad within seconds.
 * The camera will move from the position that was in front of it in the queue.
 */
declare function Camera_PanOverTimeTo(var_: any, seconds: number, keepQueue: boolean): void;

/**
 * Reset the camera to its default rotation.
 */
declare function Camera_ResetRotation(): void;

/**
 * Rotate the camera relative to its current rotation in degrees.
 */
declare function Camera_RotateRelative(angle: number): void;

/**
 * Rotate the camera to a given angle in degrees.
 */
declare function Camera_RotateTo(angle: number): void;

/**
 * Adds a function to the Mission Cheat menu, under the title you provide. These should be registered in the Mission_Preset function.
 * If the restartMission flag is set, when the cheat is activated the mission will be restarted. Most of the startup script happens as normal: Mission_SetupVariables,  Mission_SetDifficulty, Mission_SetupRestrictions and Mission_Preset are all called as normal, but the supplied function is called INSTEAD OF the regular Mission_Start function.
 */
declare function CheatMenu_RegisterCheatFunction(cheatFunction: any, title: string, OPT_restartMission?: boolean): any;

/**
 * Order a squad group to abandon their current team weapon if they have it and they could (tuning value in attribute editor)
 */
declare function Cmd_AbandonTeamWeapon(sgroupid: SGroupID, preserveCrew?: boolean, queued?: boolean): void;

/**
 * Sends an ability command to a player, egroup or sgroup. extra parameters are provided if the ability requires them.
 */
declare function Cmd_Ability(user: PlayerID | EGroupID | SGroupID, blueprint: AbilityBlueprint, target?: Position | SGroupID | EGroupID, direction?: Position, skipCostPrereq?: boolean, queued?: boolean): void;

/**
 * Attach the squad from sgroupnameAttachee to sgroupname.  Both SGroups must contain only one squad.
 */
declare function Cmd_AttachSquads(sgroup: SGroupID, sgroupAttachee: SGroupID): void;

/**
 * Issues an attack command to an SGroup
 */
declare function Cmd_Attack(sgroup: SGroupID, target: SGROUP | EGroup | Position | MARKER, queued?: boolean, stationary?: boolean, plan?: string, check?: boolean): void;

/**
 * Order a squad group to attack move to a position (anything whose position can be queried). can be queued, can follow a plan, can search for cover within a radius
 */
declare function Cmd_AttackMove(sgroup: SGroupID, targetposition: Position, queued?: boolean, plan?: string, coverSearchRadius?: number, deleteWhenNearMarker?: MarkerID, splitCmd?: boolean): void;

/**
 * Command attacker sgroup to attack move to strategic point target; when it is capturable, the sgroup would capture it
 */
declare function Cmd_AttackMoveThenCapture(attacker: SGroupID, target: EGroupID, queued?: boolean): void;

/**
 * Order a squad group to capture team weapon entity group.
 */
declare function Cmd_CaptureTeamWeapon(sgroupid: SGroupID, targetid: EGroupID, queued: boolean): void;

/**
 * Orders a squad to contruct a building at specified position, or to continue construction on an existing building.
 * The command also checks to see if a building already exists at the location, and the squad will continue building it, if it is of the correct type.
 */
declare function Cmd_Construct(sgroupid: SGROUP, blueprint: EntityID, targetid: EGroupID | Position | MARKER, Facing?: Position, queued?: boolean): void;

/**
 * Detonates a building's demolitions
 */
declare function Cmd_DetonateDemolitions(player: PlayerID, target: EGroupID, queued?: boolean): void;

/**
 * Orders an EGroup or SGroup to kick out its occupants. If no position is specified, the occupants stay at the exit.
 */
declare function Cmd_EjectOccupants(fromgroupid: EGroupID, OPT_destination?: Position, OPT_queued?: boolean): any;

/**
 * Order a squad group to load at a random entity or squad of the group
 * overload is a flag that will allow the hold entity to ignore maximum slot check
 */
declare function Cmd_Garrison(fromsgroupid: SGroupID, togroupid: EGroupID | SGroupID, overload?: boolean, queued?: boolean, instant?: boolean): EntityID;

/**
 * Order a squad group to hold position at a given location (or just it's current location)
 * The location parameter can be a position (to hold position at that location), or a Boolean to enable/disable HoldPosition at the current location. If it's omitted entirely, it defaults to true.
 */
declare function Cmd_HoldPosition(sgroup: SGroupID, OPT_location?: boolean, OPT_queued?: boolean): any;

/**
 * Sends a instant reinforce command to all squads in a group.  count represents the number of commands to send.
 * Note: This function bypasses pre-reqs, costs and the production queue
 */
declare function Cmd_InstantReinforceUnit(sgroup: SGroupID, count: number): void;

/**
 * Order a squad group to instant setup their team weapon
 */
declare function Cmd_InstantSetupTeamWeapon(sgroupid: SGroupID, queued: boolean): void;

/**
 * Sends an instant upgrade command to a player, egroup or sgroup. accepts a single upgrade or table of upgrades.
 */
declare function Cmd_InstantUpgrade(target: PlayerID | EGroupID | SGroupID, blueprint: UpgradeBlueprint | any, count?: number): void;

/**
 * Move a squad group to a given position.
 * Supports facing, 'offset' movement, and can find cover. The sgroup can be deleted when in proximity of a marker (it assumes a proximity of 5 if you forget to set one on the marker)
 */
declare function Cmd_Move(sgroup: SGroupID, position: Position | SGroupID | EGroupID | MarkerID, queued?: boolean, deleteWhenNearMarker?: MarkerID, facing?: Position, offset?: number, distance?: number, coverSearchRadius?: number, splitCmd?: boolean): void;

/**
 * Move a squad group out of a position to a certain radius
 * All squads in the group will move away from the centre position from its current position
 */
declare function Cmd_MoveAwayFromPos(sgroup: SGroupID, position: Position, radius: number, queued?: boolean): void;

/**
 * Moves a squad group to the indicated Marker and despawns it.
 */
declare function Cmd_MoveToAndDeSpawn(sgroup: SGroupID, marker: MarkerID, queued: boolean): void;

/**
 * Moves a squad group to the indicated Marker and destroys it.
 */
declare function Cmd_MoveToAndDestroy(sgroup: SGroupID, marker: MarkerID, queued: boolean): void;

/**
 * Moves a squad group to the closest marker in a list/table of MarkerIDs.
 */
declare function Cmd_MoveToClosestMarker(sgroup: SGroupID, markertable: any): MarkerID;

/**
 * Move a squad group to a given position, attack-moving once close enough
 * Squad will move to a position, once they're within 'distance', they will attack-move the rest of the way.
 */
declare function Cmd_MoveToThenAttackMove(sgroup: SGroupID, position: Position | SGroupID | EGroupID | MarkerID, distance?: number, ANY?: boolean, queued?: boolean): void;

/**
 * Command attacker sgroup to attack move to strategic point target; when it is capturable, the sgroup would capture it
 */
declare function Cmd_MoveToThenCapture(attacker: SGroupID, target: EGroupID, queued?: boolean): void;

/**
 * Order a squad group to recrew an abandoned vehicle.
 */
declare function Cmd_RecrewVehicle(sgroupid: SGroupID, targetid: EGroupID, OPT_queued?: boolean): any;

/**
 * Sends a reinforce command to all squads in a group.  count represents the number of commands to send.
 * Note: To reinforce squad bypassing the pre-reqs and costs use Cmd_InstantReinforceUnit.
 */
declare function Cmd_ReinforceUnit(sgroup: SGroupID, count: number): void;

/**
 * Order a squad group to retreat, optionally to a specific location. The sgroup can be deleted when in proximity of a marker (it assumes a proximity of 5 if you forget to set one on the marker)
 * vulnerableRetreat will make retreating squads take more damage
 */
declare function Cmd_Retreat(sgroup: SGroupID, location?: Position, deleteWhenNearMarker?: boolean | MarkerID | Position, queued?: boolean, saveEncounters?: boolean, vulnerableRetreat?: boolean): void;

/**
 * Order a squad group to revert occupied building
 */
declare function Cmd_RevertOccupiedBuilding(sgroupid: SGroupID, targetid: EGroupID, queued: boolean): void;

/**
 * Orders a squad group to place demolition charges on a building (egroup). Function does nothing if egroup cannot be detonated, or player can't afford the demolitions
 */
declare function Cmd_SetDemolitions(sgroupid: SGroupID, targetid: EGroupID, skipCostPrereq?: boolean, queued?: boolean): void;

/**
 * Order a squad group to setup their team weapon with animation
 */
declare function Cmd_SetupTeamWeapon(sgroupid: SGroupID, OPT_queued?: boolean): any;

/**
 * Sends an camouflage stance command to all squads in a group.  stanceid should be the number returned by Util_GetCamouflageStanceID( stancename )
 */
declare function Cmd_SquadCamouflageStance(sgroup: SGroupID, stanceid: CamouflageStanceID): void;

/**
 * Send a command to the squad to follow a path. Can wait at each waypoint. The sgroup can be deleted when in proximity of a marker if you pass in the marker as the 7th argument (it assumes a proximity of 5 if you forget to set one on the marker)
 * loop can be: LOOP_NONE, LOOP_NORMAL, LOOP_TOGGLE_DIRECTION
 */
declare function Cmd_SquadPath(sgroup: SGroupID, pathName: string, bFromClosest: boolean, loop: number, bAttackMove: boolean, pauseTime: number, deleteWhenNearMarker?: MarkerID, queued?: boolean, bMoveForward?: boolean): void;

/**
 * Causes a squad to patrol a marker attacking any enemies that come within its radius. If used on circular markers, the radius must be at least 5. To stop the squad from patrolling the marker, use Cmd_Stop.
 */
declare function Cmd_SquadPatrolMarker(sgroup: SGroupID, marker: MarkerID): void;

/**
 * Retreats large numbers of units in a staggered, realistic manner.
 * vulnerableRetreat will make retreating squads take more damage
 * Each Squad in the sgroup will have a 1 in 3 chance to retreat.  After 10 seconds (or maxTries), all squads will be forced to retreat. Squads will delete on arrival at their retreat point.
 */
declare function Cmd_StaggeredRetreat(sgroup: SGroupID, markers: any, maxTries?: number, vulnerableRetreat?: boolean): void;

/**
 * Sends a stop command to egroup or sgroup.
 */
declare function Cmd_Stop(group: EGroupID | SGroupID): void;

/**
 * Orders a squad to surrender and awards the local player with an appropriate number of action points
 * The command will also overwrite the exit position as well, if you do not want the squads to exit at the map entry point.
 * Use the optional parameter to assign action points to override the default number.  The function automatically addresses squads that are in buildings or vehicles by ordering them out of the vehicle.
 */
declare function Cmd_Surrender(sgroupid: SGROUP, actionpoints?: number, exitpos?: Position, deleteAtExit?: boolean, removeWeapon?: boolean): void;

/**
 * Orders an sgroup to exit the building or vehicle that it's in. If no position is specified, the sgroup stays at the exit.
 */
declare function Cmd_UngarrisonSquad(sgroupid: SGroupID, destination?: Position, queued?: boolean): void;

/**
 * Sends an upgrade command to a player, egroup or sgroup. accepts a single upgrade or table of upgrades.
 */
declare function Cmd_Upgrade(user: PlayerID | EGroupID | SGroupID, blueprint: UpgradeBlueprint | any, count?: number, instant?: boolean): void;

/**
 * Send a entity command to a entity group(CMD_DefaultAction, CMD_Stop, CMD_Destroy, CMD_BuildSquad, CMD_CancelProduction, CMD_RallyPoint, CMD_AttackForced)
 * Entity commands are mostly used for buildings etc.  If you need to issue commands to units, use the Squad_Command function.
 */
declare function LocalCommand_Entity(player: PlayerID, egroup: EGroupID, entityCommand: EntityCommandType): any;

/**
 * Send an entity ability command (CMD_Ability) to an entity
 */
declare function LocalCommand_EntityAbility(player: PlayerID, egroup: EGroupID, abilityPBG: ScarAbilityPBG, skipCostAndPrereq: boolean, queued: boolean): any;

/**
 * Send a squad command to a entity group with custom data
 */
declare function LocalCommand_EntityBuildSquad(player: PlayerID, egroup: EGroupID, squadPbg: ScarSquadPBG): any;

/**
 * Send a entity-based command to an entity group.
 * Use this function to issue orders that require a entity to an entity group (eg. order a building to attack another building)\n See LocalCommand_Entity for a list of all the possible entityCommands.
 */
declare function LocalCommand_EntityEntity(player: PlayerID, egroup: EGroupID, entityCommand: EntityCommandType, target: EGroupID): any;

/**
 * Send a squad command to a squad group with custom data
 */
declare function LocalCommand_EntityExt(player: PlayerID, egroup: EGroupID, entityCommand: EntityCommandType, cmdparam: number, queued: boolean): any;

/**
 * Send a position command to an entity group.
 * Use this function to issue orders that require a position to an entity group (eg. set a rally point for a building)\n See LocalCommand_Entity for a list of all the possible entityCommands.
 */
declare function LocalCommand_EntityPos(player: PlayerID, egroup: EGroupID, entityCommand: EntityCommandType, target: Position): any;

/**
 * Send a positional ability command (CMD_Ability) to an entity
 * Use this function to issue ability orders that require a position to player
 */
declare function LocalCommand_EntityPosAbility(player: PlayerID, egroup: EGroupID, pos: Position, abilityPBG: ScarAbilityPBG, skipCostAndPrereq: boolean, queued: boolean): any;

/**
 * Send a positional/directional ability command (CMD_Ability) to an entity
 * Use this function to issue ability orders that require a position and a direction to player
 */
declare function LocalCommand_EntityPosDirAbility(player: PlayerID, egroup: EGroupID, pos: Position, dir: Position, abilityPBG: ScarAbilityPBG, skipCostAndPrereq: boolean, queued: boolean): any;

/**
 * Send a dual target (position and squad) command to an entity group.
 * Use this function to issue orders that require a position and a squad to an entity group (eg. unloading squad from hold)\n See LocalCommand_Entity for a list of all the possible entityCommands.
 */
declare function LocalCommand_EntityPosSquad(player: PlayerID, egroup: EGroupID, entityCommand: EntityCommandType, target: Position, sgroup: SGroupID): any;

/**
 * Send a squad-based command to an entity group.
 * Use this function to issue orders that require a squad to an entity group (eg. order a building to attack a squad)\n See LocalCommand_Entity for a list of all the possible entityCommands.
 */
declare function LocalCommand_EntitySquad(player: PlayerID, egroup: EGroupID, entityCommand: EntityCommandType, target: SGroupID): any;

/**
 * Send an entity-targeting ability command (CMD_Ability) to an entity
 * Use this function to issue ability orders that require an entity target to an entity
 */
declare function LocalCommand_EntityTargetEntityAbility(player: PlayerID, egroup: EGroupID, entityTarget: EntityID, abilityPBG: ScarAbilityPBG, skipCostAndPrereq: boolean, queued: boolean): any;

/**
 * Send an squad-targeting ability command (CMD_Ability) to an entity
 * Use this function to issue ability orders that require an entity target to an entity
 */
declare function LocalCommand_EntityTargetSquadAbility(player: PlayerID, egroup: EGroupID, squadTarget: SquadID, abilityPBG: ScarAbilityPBG, skipCostAndPrereq: boolean, queued: boolean): any;

/**
 * Send a squad command to a entity group with custom data
 */
declare function LocalCommand_EntityUpgrade(player: PlayerID, egroup: EGroupID, upgrade: ScarUpgradePBG, instant: boolean, queued: boolean): any;

/**
 * Send a player command to a player
 * PCMD_Ability
 */
declare function LocalCommand_Player(player: PlayerID, dest: PlayerID, playerCommand: PlayerCommandType): any;

/**
 * Send a player ability command (PCMD_Ability) to a player
 */
declare function LocalCommand_PlayerAbility(player: PlayerID, dest: PlayerID, abilityPBG: ScarAbilityPBG, skipCostAndPrereq: boolean): any;

/**
 * Send an entity command to a player.
 */
declare function LocalCommand_PlayerEntity(player: PlayerID, dest: PlayerID, playerCommand: PlayerCommandType, target: EGroupID): any;

/**
 * Send a player command to a player with a custom flag
 */
declare function LocalCommand_PlayerExt(player: PlayerID, dest: PlayerID, playerCommand: PlayerCommandType, cmdparam: number, queued: boolean): any;

/**
 * Send a player a command to use a multi-target ability on the given targets.
 */
declare function LocalCommand_PlayerMultiTargetAbility(caster: PlayerID, targets: Vector, abilityPBG: ScarAbilityPBG, skipCostAndPrereq: boolean): any;

/**
 * Place a planned structure
 */
declare function LocalCommand_PlayerPlaceAndConstructEntitiesPlanned(player: PlayerID, ebp: ScarEntityPBG, position: Position, facingPos: Position, queued: boolean, payOnApply: boolean): any;

/**
 * Place a planned fence
 */
declare function LocalCommand_PlayerPlaceAndConstructFencePlanned(player: PlayerID, ebp: ScarEntityPBG, posStart: Position, posEnd: Position, queued: boolean, payOnApply: boolean): any;

/**
 * Place a planned slotted spline
 */
declare function LocalCommand_PlayerPlaceAndConstructSlottedSplinePlanned(player: PlayerID, ebp: ScarEntityPBG, posStart: Position, posEnd: Position, queued: boolean, payOnApply: boolean): any;

/**
 * Send a position command to a player.
 * Use this function to issue orders that require a position to player)\n See LocalCommand_Player for a list of all the possible playerCommands.
 */
declare function LocalCommand_PlayerPos(player: PlayerID, dest: PlayerID, playerCommand: PlayerCommandType, pos: Position): any;

/**
 * Send a positional ability command (PCMD_Ability) to a player
 * Use this function to issue ability orders that require a position to player
 */
declare function LocalCommand_PlayerPosAbility(player: PlayerID, dest: PlayerID, pos: Position, abilityPBG: ScarAbilityPBG, skipCostAndPrereq: boolean): any;

/**
 * Send a positional/directional ability command (PCMD_Ability) to a player
 * Use this function to issue ability orders that require a position and a direction to player
 */
declare function LocalCommand_PlayerPosDirAbility(player: PlayerID, dest: PlayerID, pos: Position, dir: Position, abilityPBG: ScarAbilityPBG, skipCostAndPrereq: boolean): any;

/**
 * Send a position command to a player with extra info
 * Use this function to issue orders that require a position to player\n See LocalCommand_Player for a list of all the possible playerCommands.
 */
declare function LocalCommand_PlayerPosExt(player: PlayerID, dest: PlayerID, playerCommand: PlayerCommandType, pos: Position, cmdparam: number, queued: boolean): any;

/**
 * Send a player command to itself to order squads in the sgroup to construct the building at specific position and facing
 * structureBlueprint must be a valid building that can be constructed by the sgroup. This building would cost nothing and does not effect population and availability This is a special command for SCAR use
 */
declare function LocalCommand_PlayerSquadConstructBuilding(player: PlayerID, sgroup: SGroupID, ebp: ScarEntityPBG, position: Position, facingPos: Position, queued: boolean): any;

/**
 * Send a player command to itself to order squads in the sgroup to construct the building at specific position and facing
 * structureBlueprint must be a valid building that can be constructed by the sgroup. This building would cost nothing and does not effect population and availability This is a special command for SCAR use
 */
declare function LocalCommand_PlayerSquadConstructBuildingCheat(player: PlayerID, sgroup: SGroupID, ebp: ScarEntityPBG, position: Position, facingPos: Position, queued: boolean): any;

/**
 * Send a player command to itself to order squads in the sgroup to construct fences from posStart to posEnd
 * structureBlueprint must be a valid building that can be constructed by the sgroup. This building would cost nothing and does not effect population and availability This is a special command for SCAR use
 */
declare function LocalCommand_PlayerSquadConstructFence(player: PlayerID, sgroup: SGroupID, ebp: ScarEntityPBG, posStart: Position, posEnd: Position, queued: boolean): any;

/**
 * Send a player command to itself to order squads in the sgroup to construct fences from posStart to posEnd
 * structureBlueprint must be a valid building that can be constructed by the sgroup. This building would cost nothing and does not effect population and availability This is a special command for SCAR use
 */
declare function LocalCommand_PlayerSquadConstructFenceCheat(player: PlayerID, sgroup: SGroupID, ebp: ScarEntityPBG, posStart: Position, posEnd: Position, queued: boolean): any;

/**
 * Send a player command to itself to order squads in the sgroup to construct a field ranging from posStart to posEnd
 * structureBlueprint must be a valid building that can be constructed by the sgroup. This building would cost nothing and does not effect population and availability This is a special command for SCAR use
 */
declare function LocalCommand_PlayerSquadConstructField(player: PlayerID, sgroup: SGroupID, ebp: ScarEntityPBG, posStart: Position, posEnd: Position, queued: boolean): any;

/**
 * Send a player command to itself to order squads in the sgroup to construct a field ranging from posStart to posEnd
 * structureBlueprint must be a valid building that can be constructed by the sgroup. This building would cost nothing and does not effect population and availability This is a special command for SCAR use
 */
declare function LocalCommand_PlayerSquadConstructFieldCheat(player: PlayerID, sgroup: SGroupID, ebp: ScarEntityPBG, posStart: Position, posEnd: Position, queued: boolean): any;

/**
 * Send a command from player to sgroup to build ebp as a slotted spline from posStart to posEnd.
 * structureBlueprint must be a valid building that can be constructed by the sgroup. This building costs nothing and does not effect population and availability This is a special command for SCAR use
 */
declare function LocalCommand_PlayerSquadConstructSlottedSpline(player: PlayerID, sgroup: SGroupID, ebp: ScarEntityPBG, posStart: Position, posEnd: Position, queued: boolean): any;

/**
 * Send a command from player to sgroup to build ebp as a slotted spline from posStart to posEnd.
 * structureBlueprint must be a valid building that can be constructed by the sgroup. This building costs nothing and does not effect population and availability This is a special command for SCAR use
 */
declare function LocalCommand_PlayerSquadConstructSlottedSplineCheat(player: PlayerID, sgroup: SGroupID, ebp: ScarEntityPBG, posStart: Position, posEnd: Position, queued: boolean): any;

/**
 * Send a command from player to sgroup to build ebp as a slotted spline dependent entity.
 * structureBlueprint must be a valid building that can be constructed by the sgroup. This building costs nothing and does not effect population and availability This is a special command for SCAR use
 */
declare function LocalCommand_PlayerSquadConstructSlottedSplineDependent(player: PlayerID, sgroup: SGroupID, ebp: ScarEntityPBG, position: Position, facingPos: Position, queued: boolean): any;

/**
 * Send a command from player to sgroup to build ebp as a slotted spline dependent entity.
 * structureBlueprint must be a valid building that can be constructed by the sgroup. This building costs nothing and does not effect population and availability This is a special command for SCAR use
 */
declare function LocalCommand_PlayerSquadConstructSlottedSplineDependentCheat(player: PlayerID, sgroup: SGroupID, ebp: ScarEntityPBG, position: Position, facingPos: Position, queued: boolean): any;

/**
 * Send a command from player to sgroup to build ebp as a slotted spline replacer entity.
 * structureBlueprint must be a valid building that can be constructed by the sgroup. This building costs nothing and does not effect population and availability This is a special command for SCAR use
 */
declare function LocalCommand_PlayerSquadConstructSlottedSplineReplacer(player: PlayerID, sgroup: SGroupID, ebp: ScarEntityPBG, position: Position, facingPos: Position, queued: boolean): any;

/**
 * Send a command from player to sgroup to build ebp as a slotted spline replacer entity.
 * structureBlueprint must be a valid building that can be constructed by the sgroup. This building costs nothing and does not effect population and availability This is a special command for SCAR use
 */
declare function LocalCommand_PlayerSquadConstructSlottedSplineReplacerCheat(player: PlayerID, sgroup: SGroupID, ebp: ScarEntityPBG, position: Position, facingPos: Position, queued: boolean): any;

/**
 * Sends an upgrade command to a player
 */
declare function LocalCommand_PlayerUpgrade(player: PlayerID, upgrade: ScarUpgradePBG, instant: boolean, queued: boolean): any;

/**
 * Send a squad command to a squad group
 * SCMD_DefaultAction, SCMD_Move, SCMD_Stop, SCMD_Destroy, SCMD_BuildStructure, SCMD_Capture, SCMD_Attack, SCMD_ReinforceUnit, SCMD_Upgrade, SCMD_CancelProduction SCMD_AttackMove, SCMD_Ability SCMD_Load,SCMD_UnloadSquads, SCMD_DoPlan SCMD_SlotItemRemove, SCMD_InstantReinforceUnit, SCMD_InstantUpgrade
 */
declare function LocalCommand_Squad(player: PlayerID, sgroup: SGroupID, squadCommand: SquadCommandType, queued: boolean): any;

/**
 * Send a ability command (SCMD_Ability) to a squad
 */
declare function LocalCommand_SquadAbility(player: PlayerID, sgroup: SGroupID, abilityPBG: ScarAbilityPBG, skipCostAndPrereq: boolean, queued: boolean): any;

/**
 * Send a position ATTACK MOVE command to a squad group with custom data.
 * WARNING: Element plans need to be reimplemented in state trees.
 */
declare function LocalCommand_SquadAttackMovePos(player: PlayerID, sgroup: SGroupID, squadCommand: SquadCommandType, target: Position, planName: string, queued: boolean, split: boolean): any;

/**
 * Send an entity command to a squad group.
 * Use this function to isssue an entity-based command to a squad group.\n See LocalCommand_Squad for a list of all the possible squadCommands
 */
declare function LocalCommand_SquadEntity(player: PlayerID, sgroup: SGroupID, squadCommand: SquadCommandType, target: EGroupID, queued: boolean): any;

/**
 * Send a entity ability command (SCMD_Ability) to a squad
 */
declare function LocalCommand_SquadEntityAbility(player: PlayerID, sgroup: SGroupID, target: EGroupID, abilityPBG: ScarAbilityPBG, skipCostAndPrereq: boolean, queued: boolean): any;

/**
 * Send an entity command ATTACK to a squad group.
 * Use this function to issue an entity-based command to a squad group with custom FOW check flag. (eg. order a squad to attack a building)\n planName is the name of the custom plan file to execute. Pass in empty string to use the default\n stationary flag uses SCMD_StationaryAttack instead where plan file is ignored and squad does not pursue its target See LocalCommand_Squad for a list of all the possible squadCommands WARNING: Element plans need to be reimplemented in state trees.
 */
declare function LocalCommand_SquadEntityAttack(player: PlayerID, sgroup: SGroupID, target: EGroupID, bCheckFOW: boolean, bStationary: boolean, planName: string, queued: boolean): any;

/**
 * Send a entity command to a squad group with custom BOOLEAN data
 */
declare function LocalCommand_SquadEntityBool(player: PlayerID, sgroup: SGroupID, squadCommand: SquadCommandType, target: EGroupID, cmdparam: boolean, queued: boolean): any;

/**
 * Send a entity command to a squad group with custom data
 */
declare function LocalCommand_SquadEntityExt(player: PlayerID, sgroup: SGroupID, squadCommand: SquadCommandType, target: EGroupID, cmdparam: number, queued: boolean): any;

/**
 * Send special squad command to a squad group with squad load parameters
 * This is a special command for loading squads into building (entity) holds (SCMD_Load, SCMD_InstantLoad)
 */
declare function LocalCommand_SquadEntityLoad(player: PlayerID, sgroup: SGroupID, squadCommand: SquadCommandType, target: EGroupID, bOverLoad: boolean, queued: boolean): any;

/**
 * Send a squad command to a squad group with custom data
 */
declare function LocalCommand_SquadExt(player: PlayerID, sgroup: SGroupID, squadCommand: SquadCommandType, cmdparam: number, queued: boolean): any;

/**
 * Send a move to position command for a squad group.
 * Use this function to issue move orders that require a position to a squad group
 */
declare function LocalCommand_SquadMovePos(player: PlayerID, sgroup: SGroupID, target: Position, queued: boolean, reverseMove: boolean, split: boolean, acceptableProximity: number): any;

/**
 * Send a move-facing command to a squad group
 */
declare function LocalCommand_SquadMovePosFacing(player: PlayerID, sgroup: SGroupID, target: Position, facing: Position, queued: boolean, reverseMove: boolean, split: boolean, acceptableProximity: number): any;

/**
 * Send a squad a command to use a multi-target ability on the given targets.
 */
declare function LocalCommand_SquadMultiTargetAbility(caster: SquadID, targets: Vector, abilityPBG: ScarAbilityPBG, skipCostAndPrereq: boolean, queued: boolean): any;

/**
 * Send a squad patrol command (SCMD_Patrol) to a squad
 */
declare function LocalCommand_SquadPath(pPlayer: PlayerID, pSGroup: SGroupID, pathName: string, pathIndex: number, bFromClosest: boolean, loopType: LoopType, bAttackMove: boolean, pauseTime: number, bMoveForward: boolean, queued: boolean): any;

/**
 * Send a position command to a squad group.
 * Use this function to issue orders that require a position to a squad group (eg. order a squad to move to position, or attack position)\n See LocalCommand_Squad for a list of all the possible squadCommands.
 */
declare function LocalCommand_SquadPos(player: PlayerID, sgroup: SGroupID, squadCommand: SquadCommandType, target: Position, queued: boolean): any;

/**
 * Send a positional ability command (SCMD_Ability) to a squad
 */
declare function LocalCommand_SquadPosAbility(player: PlayerID, sgroup: SGroupID, pos: Position, abilityPBG: ScarAbilityPBG, skipCostAndPrereq: boolean, queued: boolean): any;

/**
 * Send a position command to a squad group with custom data
 */
declare function LocalCommand_SquadPosExt(player: PlayerID, sgroup: SGroupID, squadCommand: SquadCommandType, target: Position, cmdparam: number, queued: boolean): any;

/**
 * Send an position command ATTACK to a squad group.
 * Use this function to issue an position-based command to a squad group with custom FOW check flag. (eg. order a squad to attack a building)\n planName is the name of the custom plan file to execute. Pass in empty string to use the default\n stationary flag uses SCMD_StationaryAttack instead where plan file is ignored and squad does not pursue its target See LocalCommand_Squad for a list of all the possible squadCommands WARNING: Element plans need to be reimplemented in state trees.
 */
declare function LocalCommand_SquadPositionAttack(player: PlayerID, sgroup: SGroupID, target: Position, bCheckFOW: boolean, bStationary: boolean, planName: string, queued: boolean): any;

/**
 * Send a retreat position command to a squad group.
 * Use this function to issue retreat order that require a position to a squad group
 */
declare function LocalCommand_SquadRetreatPos(player: PlayerID, sgroup: SGroupID, target: Position, queued: boolean, allowNonInteractiveStages: boolean): any;

/**
 * Send a set CombatStance command to the squads
 * Set the CombatStance for all the Squads in the SGroup. StanceTypes: STANCE_CeaseFire (don't shoot), STANCE_StandGround (don't move, just shoot), STANCE_Attack (move and shoot)
 */
declare function LocalCommand_SquadSetCombatStance(player: PlayerID, sgroup: SGroupID, stanceType: StanceType, queued: boolean): void;

/**
 * Send a set Weapon Preference command to the squads
 * Set the Weapon Preference for all the Squads in the SGroup. WeaponPreference: WP_Melee, WP_Ranged,
 */
declare function LocalCommand_SquadSetWeaponPreference(player: PlayerID, sgroup: SGroupID, weaponPreference: WeaponPreference, queued: boolean): void;

/**
 * Send an squad-based command to a squad group.
 * Use this function to issue a squad-based command to a squad group. \n See LocalCommand_Squad for a list of all the possible squadCommands
 */
declare function LocalCommand_SquadSquad(player: PlayerID, sgroup: SGroupID, squadCommand: SquadCommandType, target: SGroupID, queued: boolean): any;

/**
 * Send a squad ability command (SCMD_Ability) to a squad
 */
declare function LocalCommand_SquadSquadAbility(player: PlayerID, sgroup: SGroupID, target: SGroupID, abilityPBG: ScarAbilityPBG, skipCostAndPrereq: boolean, queued: boolean): any;

/**
 * Send an squad-based command to a squad group.
 * Use this function to issue a squad-based command to a squad group with special boolean flag. (eg. order a squad to attack another squad)\n If bCheckFOW is set to false, the squad would be able to attack other squads hidden in FOW \n planName is the name of the custom plan file to execute. Pass in empty string to use the default\n stationary flag uses SCMD_StationaryAttack instead where plan file is ignored and squad does not pursue its target See LocalCommand_Squad for a list of all the possible squadCommands WARNING: Element plans need to be reimplemented in state trees.
 */
declare function LocalCommand_SquadSquadAttack(player: PlayerID, sgroup: SGroupID, target: SGroupID, bCheckFOW: boolean, bStationary: boolean, planName: string, queued: boolean): any;

/**
 * Send a squad command to a squad group with custom data
 */
declare function LocalCommand_SquadSquadExt(player: PlayerID, sgroup: SGroupID, squadCommand: SquadCommandType, target: SGroupID, cmdparam: number, queued: boolean): any;

/**
 * Send special squad command to a squad group with squad load parameters
 * This is a special command for loading squads into vehicle (squad) holds (SCMD_Load, SCMD_InstantLoad)
 */
declare function LocalCommand_SquadSquadLoad(player: PlayerID, sgroup: SGroupID, squadCommand: SquadCommandType, target: SGroupID, bOverLoad: boolean, queued: boolean): any;

/**
 * Sends an upgrade command to a squad group.
 */
declare function LocalCommand_SquadUpgrade(player: PlayerID, sgroup: SGroupID, upgrade: ScarUpgradePBG, instant: boolean, queued: boolean): any;

/**
 * Has a player join a specific team
 * Will remove the player from his previous team.  If you pass in nil for newTeam, will add to a new empty team
 */
declare function Core_AddPlayerToTeam(player: PlayerID, teams_table: Team): void;

/**
 * Compare two values using provided comparator
 */
declare function Core_Compare(value1: number, value2: number, comparator: Comparison): boolean;

/**
 * Returns the number of non-eliminated teams remaining.
 */
declare function Core_GetActiveTeamCount(): number;

/**
 * Returns the table reference of a PLAYERS table entry
 */
declare function Core_GetPlayersTableEntry(player: PlayerID): Players_table;

/**
 * Returns the table reference of a PLAYERS table entry
 */
declare function Core_GetPlayersTableEntryFromIndex(playerIndex: number): Players_table;

/**
 * Returns the table reference of a player's TEAMS table entry
 */
declare function Core_GetPlayerTeamsEntry(player: PlayerID): Teams_table;

/**
 * Returns the entry in the Teams table that corresponds to the given teamIndex.
 * NOTE: Use the teams table's .id entry - not the actual index of the table.
 */
declare function Core_GetTeamsEntryFromIndex(index: number): Teams_table;

/**
 * Returns true if a module is registered for delegate invocation, false if delegate invocation is disabled, nil if module not in module registry.
 */
declare function Core_IsModuleRegistered(name: string): boolean;

/**
 * Returns true if a player is eliminated from the game.
 */
declare function Core_IsPlayerEliminated(player: PlayerID): boolean;

/**
 * Returns true if the two given players are on the same team.
 */
declare function Core_IsPlayerOnPlayerTeam(playerID1: any, playerID2: any): boolean;

/**
 * Returns true if the PLAYERS table contains the given player.
 */
declare function Core_IsPlayersTableEntryValid(player: PlayerID): boolean;

/**
 * Returns true if a team is eliminated from the game. A team is considered eliminated when all of its players are eliminated.
 */
declare function Core_IsTeamEliminated(teams_table: Team): boolean;

/**
 * Returns true if teamIndex is a valid index in the Teams table.
 * NOTE: Use the teams table's .id entry - not the actual index of the table.
 */
declare function Core_IsTeamsEntryIndexValid(index: number): boolean;

/**
 * Call this function to notify other modules (via their ***_OnGameOver() callback) that the match is about to end.
 * Modules typically implement this for cleanup purposes (i.e. remove rules and UI elements) prior to the match end UI.
 */
declare function Core_OnGameOver(): void;

/**
 * Registers a script module for delegate invocation. The name should be the prefix used by all of the delegate functions in this module. This needs to be called in *global* scope of a module script with the prefix name of that module; use this instead of Scar_AddInit.
 * For example, if you call Core_RegisterModule("MySystem") then any delegate functions in your script such as "MySystem_OnGameSetup" or "MySystem_OnInit" will be called at the appropriate time during the game initialization process (after the Project delegates but before the Mission delegates).
 */
declare function Core_RegisterModule(name: string): any;

/**
 * Removes a player from player and team tables.
 */
declare function Core_RemovePlayerFromPlayersTable(player: PlayerID): void;

/**
 * Returns the value of the "Reveal FOW on Elimination" match option
 */
declare function Core_RevealFOWOnEliminationEnabled(): any;

/**
 * Sets the default presentation table for defeated players.
 */
declare function Core_SetDefaultDefeatPresentation(presentationTable: any): void;

/**
 * Sets the default presentation function for victorious players.
 */
declare function Core_SetDefaultVictoriousPresentation(presentationFunction: any): void;

/**
 * Sets the relationship between two players
 */
declare function Core_SetMutualPlayerRelationship(player1: PlayerID, player2: PlayerID, relationship: number): void;

/**
 * Sets the relationship between two entries
 * Valid Relationships: R_NEUTRAL, R_ALLY, R_ENEMY, R_UNDEFINED
 * NOTE: You should generally be setting Team to Team only.
 */
declare function Core_SetMutualRelationship(player: PlayerID | any, player2: PlayerID | any, relationship: Relationship): void;

/**
 * Sets a player as defeated.
 */
declare function Core_SetPlayerDefeated(player: PlayerID, presentationFunction: any, reason: number): void;

/**
 * Sets a player as the match winner.
 */
declare function Core_SetPlayerVictorious(player: PlayerID, presentationFunction: any, reason: number): void;

/**
 * Sets if a team is defeated
 */
declare function Core_SetTeamDefeated(teams_table: Team, presentationTable: any): void;

/**
 * Sets a team as the match winner.
 */
declare function Core_SetTeamVictorious(teams_table: Team, presentationFunction: any, reason: number): void;

/**
 * Removes a script module from the delegate invocation system.
 * This is usually used for a module to remove itself if it decided it isn't needed (i.e. a game mode that isn't relevant given the map). Please don't have modules removing each other!
 */
declare function Core_UnregisterModule(name: string): any;

/**
 * Set the game to a GameOver state without an explicit winner
 */
declare function Core_WinnerlessGameOver(presentationFunction: any, reason: number): void;

/**
 * Pauses for a given amount of time. This function MUST be called from a CTRL object in NISlet events only!
 * See Event_Start for more information on NISlet events.
 */
declare function Event_Delay(seconds: number): void;

/**
 * Returns true if the event is being skipped.
 */
declare function Event_IsBeingSkipped(): any;

/**
 * Completes execution of the event immediatley (all calls to Wait() are ignored)
 */
declare function Event_Skip(): void;

/**
 * Starts event.  Event will not start until all rules are evaluated for this frame!
 * We allow saving events in multiplayer so please don't put any non-UI events in multiplayer Running events are not saved at all.
 */
declare function Event_Start(eventFunction: any, priority: number): void;

/**
 * Starts an event the same way as Event_Start, but calls a user defined function when the event is over
 */
declare function Event_StartEx(eventFunction: any, priority: number, onComplete: any): void;

/**
 * Register an init function with the scar system.
 * This init function will be called when scar is started up. **Important: Make sure you do not register two functions with the same name; the init function names should be unique.
 */
declare function Scar_AddInit(f: any): void;

/**
 * Lets lua tell the game when it has finished initializing
 */
declare function Scar_InitComplete(): any;

/**
 * Returns true if an init function exists
 */
declare function Scar_InitExists(f: any): boolean;

/**
 * Unregister an init function that was registered from Scar_AddInit
 */
declare function Scar_RemoveInit(f: any): void;

/**
 * This is a global function that needs to exist for other things to work correctly. It used to be in module_defend.scar, but wasn't relevant to that particular chunk!
 */
declare function _idleBehaviour_stop(data: any): undefined;

/**
 * Plays the next intel event in the debug queue.  IntelEvents are played sequentially as they are defined in a mission's .events file.
 */
declare function _IntelDebugNext(): void;

/**
 * Plays the next intel event in the debug queue. IntelEvents are played sequentially as they are defined in a mission's .events file.
 */
declare function _IntelDebugPrev(): void;

/**
 * Replays the last intel event that was debugged.
 */
declare function _IntelDebugReplay(): void;

/**
 * Restores various aspects of the single player game after loading a mission from a save game
 */
declare function Game_DefaultGameRestore(): void;

/**
 * Checks whether a callback
 */
declare function Game_GetGameRestoreCallbackExists(callback: any): void;

/**
 * Removes a callback from being called on game restore
 */
declare function Game_RemoveGameRestoreCallback(callback: any): void;

/**
 * Adds a function and set of arguments to be automatically called during restore from a saved game. Maxiumum of 9 parameters. Callback will be called like this: Callback(arg[1], arg[2], ...)
 */
declare function Game_SetGameRestoreCallback(callback: any): void;

/**
 * Enters Cinematic mode
 */
declare function Util_EnterCinematicMode(OPT_VisibilityFlag?: GameUICore, OPT_of?: List, skipNISCallback?: any): any;

/**
 * Exits Cinematic mode
 */
declare function Util_ExitCinematicMode(): any;

/**
 * Enters Fullscreen mode
 */
declare function Util_FullscreenMode(OPT_VisibilityFlag?: GameUICore, OPT_of?: List): any;

/**
 * Wrapper function for command line arguments. DO NOT USE MORE THAN ONCE PER ARGUMENT.
 * It is impossible for them to change after application start, so save the result and reuse it.
 */
declare function Util_GetCommandLineArgument(key: string): undefined;

/**
 * Returns whether cinematic mode is active
 */
declare function Util_IsCinematicMode(): boolean;

/**
 * Enters Normal mode
 */
declare function Util_NormalMode(): any;

/**
 * Reverses the entries of the table that is passed to the function
 * This function will iterate over a 1D array/table and flip it, so that the first element is the last, the last is the first, and so on.
 */
declare function Util_ReverseList(list_to_reverse: any): any;

/**
 * Checks if Resources_Disable is currently applying to a player.
 */
declare function Are_Resources_Disabled(): any;

/**
 * Checks if Resources_Disable is currently applying to a player.
 */
declare function Are_Resources_Disabled(): any;

/**
 * Returns a string describing the Scartype
 */
declare function Debug_ScartypeToString(): any;

/**
 * Returns a string describing the Scartype
 */
declare function Debug_ScartypeToString(): any;

/**
 * Sets all Entities in an EGroup on fire
 */
declare function EGroup_SetOnFire(egroup: EGroupID): void;

/**
 * Sets whether or not Entities in an EGroup should continue burning while invulnerable
 */
declare function EGroup_SetStayBurningWhileInvulnerable(egroup: EGroupID, stayBurning: boolean): void;

/**
 * Finds all on-screen squads for the passed player, clearing and filling the sgroup with those squads
 */
declare function Player_GetSquadsOnscreen(player: Player, sgroup: SGROUP): void;

/**
 * Returns an average position for a table of positions
 */
declare function Position_GetAverage(): any;

/**
 * Disables any resource income - useful to stop resources accruing during the opening movie
 */
declare function Resources_Disable(): void;

/**
 * Disables any resource income - useful to stop resources accruing during the opening movie
 */
declare function Resources_Disable(): void;

/**
 * Re-enables resource income.
 */
declare function Resources_Enable(): void;

/**
 * Re-enables resource income.
 */
declare function Resources_Enable(): void;

/**
 * Gets the COUNT closest squads to POSITION from SGROUP. Does NOT remove squads from the source SGroup
 */
declare function SGroup_GetClosestSquads(): any;

/**
 * Sets the targeting type of entities in an sgroup
 */
declare function SGroup_SetTargetingType(sgroup: SGroupID, type: TargetingType): void;

/**
 * Splits an SGroup as cleanly as possible into X new SGroups, returning a table of the SGroups in question
 */
declare function SGroup_Split(sgroup: SGroupID, numNewSGroups: number): any;

/**
 * Splits an SGroup as cleanly as possible into multiple SGroups.
 */
declare function SGroup_SplitIntoExistingSGroups(sourceSGroup: SGroupID, sgroupTable: any, clearSGroups: boolean): any;

/**
 * Splits an SGroup enough even-sized groups that none is larger than the max size indicated
 */
declare function SGroup_SplitUnderCap(sgroup: SGroupID, maxSGroupSize: number): any;

/**
 * Checks if a table contains the specified item
 */
declare function Table_Contains(OriginalTable: any, item: Item): boolean;

/**
 * Copies the contents of the original table returns a new table with the contents of that table
 */
declare function Table_Copy(OriginalTable: any): any;

/**
 * Returns a random item from a table. You can return multiple items (without duplicates) by passing in an optional number parameter.
 */
declare function Table_GetRandomItem(table: any, numberofitems?: number): Item;

/**
 * Takes a table of key-value pairs, where the keys are the items, and the values are the weights. The chance that a particular key is chosen is proportional to its associated weight. Weights should be integers.
 */
declare function Table_GetRandomItemWeighted(thistable: any): Returns;

/**
 * Makes a table read-only. This can be done recursively to also apply to any subtables.
 * Any attempts to write to this table after this has been called will trigger a Fatal SCAR Error. You can customize the error message that will be given with the "error" parameter.
 */
declare function Table_MakeReadOnly(table: any, OPT_recursive?: boolean, OPT_errorMessage?: string): any;

/**
 * Adds an entity to the end of a group if the group doesnt already have it.
 */
declare function EGroup_Add(group: EGroupID, entity: EntityID): void;

/**
 * Adds an ability to all entities in an egroup.
 */
declare function EGroup_AddAbility(egroup: EGroupID, ability: AbilityBlueprint): void;

/**
 * Appends the entities in one group to another group.
 * All entities from 'grouptoadd' will be added to 'group'. If 'group' already contains an entity from 'grouptoadd' it will not be added. This function does not clear the contents of 'grouptoadd'. Example: Add group2 (0, 10, 11, 22) to group1 (1, 11, 20) --> group1 would now be (1, 11, 20, 0, 10, 22)
 */
declare function EGroup_AddEGroup(group: EGroupID, grouptoadd: EGroupID): void;

/**
 * Returns true if ALL or ANY entities in a group can see ALL or ANY entities in a given egroup.
 */
declare function EGroup_CanSeeEGroup(egroup: EGroupID, targetegroup: EGroupID, all: boolean): boolean;

/**
 * Returns true if ALL or ANY entities in a group can see ALL or ANY squads in a given sgroup.
 */
declare function EGroup_CanSeeSGroup(egroup: EGroupID, targetsgroup: SGroupID, all: boolean): boolean;

/**
 * Removes all entities from a group
 */
declare function EGroup_Clear(egroup: EGroupID): void;

/**
 * Returns true if the contents of the two groups are equal. Order of the entities does not matter.
 */
declare function EGroup_Compare(group1: EGroupID, group2: EGroupID): boolean;

/**
 * Check if a group contains ALL or ANY of the blueprints.
 */
declare function EGroup_ContainsBlueprints(egroup: EGroupID, blueprint: EBP | EntityType | any, all: boolean): boolean;

/**
 * Returns true if EGroup1 contains ANY or ALL of EGroup2
 */
declare function EGroup_ContainsEGroup(egroup1: EGroupID, egroup2: EGroupID, all: boolean): boolean;

/**
 * Returns true if EGroup contains a particular EntityID
 */
declare function EGroup_ContainsEntity(egroup: EGroupID, entity: EntityID): boolean;

/**
 * Returns the total number of spawned and despawned entities in a group.
 */
declare function EGroup_Count(egroup: EGroupID): number;

/**
 * Get the number of alive entities (both spawned and despawned)
 */
declare function EGroup_CountAlive(egroup: EGroupID): number;

/**
 * Returns the total count of all entities in a given EGroup with the provided blueprint
 */
declare function EGroup_CountBlueprints(sgroup: EGroupID, ebp: EntityBlueprint | any): number;

/**
 * Returns the number of despawned entities in a group.
 */
declare function EGroup_CountDeSpawned(egroup: EGroupID): number;

/**
 * Returns the number of spawned entities in a group.
 */
declare function EGroup_CountSpawned(egroup: EGroupID): number;

/**
 * Returns a new entity group with the given name.
 * Entity groups are used for buildings and objects such as rocks and trees. If you need to issue orders to a group vehicles or units you must use a SquadGroupObs.
 */
declare function EGroup_Create(name: string): EGroupID;

/**
 * Find a entity group from name.  Creates a new one with given name if it doesnt exist.
 */
declare function EGroup_CreateIfNotFound(egroupname: string): EGroupID;

/**
 * Create and display kicker message on the each entity in the egroup to the player
 */
declare function EGroup_CreateKickerMessage(group: EGroupID, textid: string): void;

/**
 * Returns an EGroup with a unique name, prefixed by the 'prefix' parameter.
 */
declare function EGroup_CreateUnique(prefix?: string): EGroup;

/**
 * Returns a new entity group with an autogenerated unique name, optionally prefixed by the string passed in.
 * Use this if you want to create a new EGroup but don't necessarily care about the name.\n Entity groups are used for buildings and objects such as rocks and trees.\n
 */
declare function EGroup_CreateUniqueWithPrefix(prefix: string): any;

/**
 * Despawn all spawned entities in a group.
 */
declare function EGroup_DeSpawn(egroup: EGroupID): void;

/**
 * Manually destroy a group that you dont need anymore.
 */
declare function EGroup_Destroy(egroup: EGroupID): void;

/**
 * Destroys all spawned and despawned entities in a group.
 * @extdesc
 * Be careful not to confuse this with EGroup_Destroy which destroys the group and NOT the items it contains.  This function will destroy
 * spawned and despawned items in a group
 */
declare function EGroup_DestroyAllEntities(egroup: EGroupID): void;

/**
 * Duplicates an EGroup. Creates a copy of egroup1 in egroup2. The function will clear egroup2 beforehand if necessary.
 */
declare function EGroup_Duplicate(egroupid1: EGroupID, egroupid2: EGroupID): void;

/**
 * Enables or disables the minimap indicator for all entities in a group
 */
declare function EGroup_EnableMinimapIndicator(egroup: EGroupID, enable: boolean): void;

/**
 * Enable or disable decorators on all entities in the egroup. Sets selection visuals as well unless enableSelection is specified.
 */
declare function EGroup_EnableUIDecorator(group: SGroupID, enable: boolean, enableSelection: boolean): void;

/**
 * Returns true if the entity group with the given name exists
 */
declare function EGroup_Exists(name: string): boolean;

/**
 * Filters an EGroup by blueprint or type.
 * @extdesc
 * Blueprints can be provided by name or by ID, and in a table if you want to filter on more than one type.
 * Setting filtertype to FILTER_KEEP results in the group only containing entities of the types listed in the blueprint table.
 * Setting filtertype to FILTER_REMOVE will strip those same entities out and leave those that aren't of the types listed.
 */
declare function EGroup_Filter(egroup: EGroupID, blueprint: ID | any | string, filtertype: number, splitGroup?: EGroupID): void;

/**
 * Filters an EGroup by whether units are on screen or not. Percent refers to the screen area you are considering (0.8 is a good value to use - it won't include things that are right at the screen edge).
 * Setting filtertype to FILTER_KEEP results in the group only containing those entities that are on screen.
 */
declare function EGroup_FilterOnScreen(egroup: EGroupID, percent: number, filtertype: number): void;

/**
 * Filters an EGroup by construction status. Set the filtertype to FILTER_REMOVE to remove buildings under construction.
 * Setting filtertype to FILTER_KEEP results in the group only containing those entities that are in the process of being built.
 */
declare function EGroup_FilterUnderConstruction(egroup: EGroupID, filtertype: number): void;

/**
 * Call a lua function for each item in a group. Function will recieve (groupid, itemindex, itemid) and should return true to break or false to continue.
 * function Rule_Test( ) ???local DespawnEntity = function( egroupid, itemindex, entityID ) ??????Entity_Despawn( entityID ) ???end ???EGroup_ForEach( EGroup_FromName("eg_PlayersHQ"), DespawnEntity ) end Note: This function iterates over SPAWNED ENTITIES ONLY.
 */
declare function EGroup_ForEach(egroup: EGroupID, f: LuaBinding): boolean;

/**
 * Call a lua function for each item in a group. Function will recieve (groupid, itemindex, itemid) and should return a bool.
 * Only use this to TEST conditions on entities. DO NOT use this to perform operations on all entities, since it may not call your function on all entities (due to short circuit evaluation). This is used for checking if ALL or ANY items in a group match a given predicate. (eg. Are all items in a group choas marines) Note: This function iterates over SPAWNED ENTITIES ONLY.
 */
declare function EGroup_ForEachAllOrAny(egroup: EGroupID, all: boolean, f: LuaBinding): boolean;

/**
 * Same as EGroup_ForEachAllOrAny except you have a choice to iterate over spawned entities, despawned entities, or both.
 */
declare function EGroup_ForEachAllOrAnyEx(egroup: EGroupID, all: boolean, f: LuaBinding, spawned: boolean, despawned: boolean): boolean;

/**
 * Same as EGroup_ForEach except you have a choice to iterate over spawned entities, despawned entities, or both.
 */
declare function EGroup_ForEachEx(egroup: EGroupID, f: LuaBinding, spawned: boolean, despawned: boolean): boolean;

/**
 * Find an entity group with a given name.
 */
declare function EGroup_FromName(name: string): EGroupID;

/**
 * Returns the average health ratio of all units in a entity group.
 * This uses the "proper" measure of health for panel buildings, so should accurately reflect what the user sees.
 */
declare function EGroup_GetAvgHealth(egroup: EGroupID): number;

/**
 * Get the closest entity in an egroup to a given position
 */
declare function EGroup_GetClosestEntity(egroupid: EGroupID, position: MARKER | Position): any;

/**
 * Returns the despawned entity at the given index.
 * Use EGroup_GetSpawnedEntityAt if you want the spawned items in the group Use index 1 to get the first entity in the group. It is an error if index > EGroup_GetCountDeSpawned()
 */
declare function EGroup_GetDeSpawnedEntityAt(group: EGroupID, index: number): EntityID;

/**
 * Returns the entity at the given index.
 * Use EGroup_GetSpawnedEntityAt or EGroup_GetDeSpawnedEntityAt if you want the spawned/despawned items in the group\n Use index 1 to get the first entity in the group.\n It is an error if index > EGroup_GetCount()\n
 */
declare function EGroup_GetEntityAt(group: EGroupID, int: number): any;

/**
 * Check invulnerablity state for ALL or ANY entity in an entity group.
 */
declare function EGroup_GetInvulnerable(egroup: EGroupID, all: boolean): boolean;

/**
 * Gets the last attacker(s) for all the entities in an EGroup
 * Gets the last attacker for all the squads in an SGroup and stores that in SGroupAttacker
 */
declare function EGroup_GetLastAttacker(EGroupVictim: EGroup, SGroupAttacker: SGROUP): void;

/**
 * Returns the name of a given entity group.
 */
declare function EGroup_GetName(egroup: EGroupID): string;

/**
 * Returns a position (a certain distance away) relative to an entity's current position/orientation. see ScarUtil.scar for explanation of 'offset' parameter
 */
declare function EGroup_GetOffsetPosition(egroup: EGroupID, offset: number, value: number): Position;

/**
 * Returns the center position of an entity group.
 */
declare function EGroup_GetPosition(group: EGroupID): Position;

/**
 * Get a random spawned entity from egroup
 */
declare function EGroup_GetRandomSpawnedEntity(egroupid: EGroup): EntityID;

/**
 * Builds a table of EGroupIDs that are named in a sequence. i.e. a name of "eg_building" will find groups "eg_building1", "eg_building2" and so on, up until it looks for a group that isn't there.
 */
declare function EGroup_GetSequence(name: string): any;

/**
 * Returns the spawned entity at the given index.
 * Use EGroup_GetDeSpawnedEntityAt if you want the despawned items in the group Use index 1 to get the first entity in the group. It is an error if index > EGroup_GetCountSpawned()
 */
declare function EGroup_GetSpawnedEntityAt(group: EGroupID, index: number): EntityID;

/**
 * Get the closest entity in an egroup to a given position
 * Get the first spawned entity from egroup that meets the condition (a function that takes an entity)
 */
declare function EGroup_GetSpawnedEntityFilter(egroupid: EGroup, position: MARKER | Position): EntityID;

/**
 * Returns the distance from the centre of the group of the entity that furthest out.
 */
declare function EGroup_GetSpread(egroup: EGroupID): number;

/**
 * Returns an sgroup containing all squads held by any entities in an egroup
 */
declare function EGroup_GetSquadsHeld(egroup: EGroupID, sgroupRecipient: SGroupID): void;

/**
 * Returns the total health of all units in a entity group.
 * This uses the "proper" measure of health for panel buildings, so should accurately reflect what the user sees.
 */
declare function EGroup_GetTotalHealth(egroup: EGroupID): number;

/**
 * Test whether ANY or ALL buildings in a group have a specified ability
 */
declare function EGroup_HasAbility(egroup: EGroupID, ability: AbilityBlueprint, all: boolean): boolean;

/**
 * Check if ANY or ALL of the entities in a group match the blueprint specified.
 * The blueprint can be a table of blueprints or types (see Entity_HasBlueprint() for details)
 */
declare function EGroup_HasBlueprint(egroup: EGroupID, blueprint: EBP | EntityType | any, all: boolean): boolean;

/**
 * Returns whether ANY or ALL entities in an EGroup have the specified upgrade
 */
declare function EGroup_HasUpgrade(egroup: EGroupID, upgrade: UpgradeID, all: boolean): boolean;

/**
 * Hide or show all entities in an EGroup
 * Bool should be true to hide, false to show
 */
declare function EGroup_Hide(egroup: EGroupID, hide: boolean): void;

/**
 * Change the ownership of a Strategic Point
 */
declare function EGroup_InstantCaptureStrategicPoint(egroup: EGroupID, player: PlayerID): void;

/**
 * Reverts an occupied building
 */
declare function EGroup_InstantRevertOccupiedBuilding(egroup: EGroupID): void;

/**
 * Performs a group intersection.
 * Only entities that are in both groups will be added to 'group'. The contents of 'grouptointersect' will not be changed. Example: group = (1,2,3,4,5,6)  grouptointersect = (2,4,6,8,10)   --> group will now equal (2,4,6)
 */
declare function EGroup_Intersection(group: EGroupID, grouptointersect: EGroupID): void;

/**
 * Checks if ANY or ALL entities in an egroup are on fire (ignition threshold exceeded)
 */
declare function EGroup_IsBurning(egroup: EGroupID, ALL: boolean): boolean;

/**
 * Returns true if all or any strategic points in a group have been captured. Use ANY or ALL.
 * This function will ignore all entities that cannot be captured and will return false if no entities in the group can be captured.
 */
declare function EGroup_IsCapturedByPlayer(egroup: EGroupID, playerId: PlayerID, all: boolean): boolean;

/**
 * Returns true if all or any strategic points in a group have been captured. Use ANY or ALL.
 * This function will ignore all entities that cannot be captured and will return false if no entities in the group can be captured.
 */
declare function EGroup_IsCapturedByTeam(egroup: EGroupID, teamId: TeamID, all: boolean): boolean;

/**
 * Returns true if ALL or ANY entities are attacking within the time
 */
declare function EGroup_IsDoingAttack(egroup: EGroupID, all: boolean, time: number): boolean;

/**
 * Returns true if a named entity group contains no spawned or despawned entities
 */
declare function EGroup_IsEmpty(egroup: EGroupID): boolean;

/**
 * Returns whether any entity in an EGroup has a hold on anything
 */
declare function EGroup_IsHoldingAny(egroup: EGroupID): void;

/**
 * Returns true if ALL or ANY entities are in cover.
 */
declare function EGroup_IsInCover(egroup: EGroupID, all: boolean): boolean;

/**
 * Returns true if ANY or ALL entities in an EGroup are moving.
 */
declare function EGroup_IsMoving(egroupid: EGroupID, all: boolean): boolean;

/**
 * Returns true if ANY or ALL (use those keywords) of the enities in the group are present onscreen. You can pass in a percentage of the screen to check, so 0.8 would be a centered rectangle occupying 80% of the screen.
 */
declare function EGroup_IsOnScreen(player: PlayerID, group: EGroupID, all: boolean, percent?: number): boolean;

/**
 * Returns true if ALL or ANY entities in a group are currently producing squads
 * Set all to true to check for ALL or set to false to check for ANY
 */
declare function EGroup_IsProducingSquads(egroup: EGroupID, all: boolean): boolean;

/**
 * Checks if ANY or ALL entities in an group are currently spawned or not.
 */
declare function EGroup_IsSpawned(egroup: EGroupID, ALL: boolean): boolean;

/**
 * Returns true if ALL or ANY entities are under attack within the time
 */
declare function EGroup_IsUnderAttack(egroup: EGroupID, all: boolean, time: number): boolean;

/**
 * Check if the entities are attacked by the player
 */
declare function EGroup_IsUnderAttackByPlayer(group: EGroupID, attackerplayer: PlayerID, duration: number): boolean;

/**
 * Returns true if ALL or ANY entities are under attack from a direction within the time. see ScarUtil.scar for types of directions. you can pass in a table of offsets
 */
declare function EGroup_IsUnderAttackFromDirection(egroup: EGroupID, all: boolean, offset: number | any, time: number): boolean;

/**
 * Checks if ANY or ALL squads within an EGroup are using an ability
 * also used for emplacements/entities that are built but function through the use of squads.  Does not check WHAT ability a squad is using.
 */
declare function EGroup_IsUsingAbility(egroup: EGroupID, ALL: boolean): boolean;

/**
 * Check to see if an egroup still exists without needing the name.
 */
declare function EGroup_IsValid(egroupID: number): any;

/**
 * Kill all entities in an EGroup
 */
declare function EGroup_Kill(egroup: EGroupID): void;

/**
 * Calls a function when any entity in an EGroup gets destroyed by the player clicking the "Detonate me" button
 */
declare function EGroup_NotifyOnPlayerDemolition(id: EGroupID, function_: any): void;

/**
 * Removes an entity from a group.
 */
declare function EGroup_Remove(group: EGroupID, entity: EntityID): void;

/**
 * Removes all demolition charges on an egroup
 */
declare function EGroup_RemoveDemolitions(egroup: EGroupID): void;

/**
 * Remove from the first SGroup all squads contained in the second SGroup. SGroup2 remains untouched.
 */
declare function EGroup_RemoveGroup(group: SGroupID, grouptoremove: SGroupID): void;

/**
 * Removes all the entities from the EGroup that don't have HoldExt on them
 */
declare function EGroup_RemoveNonHoldEntities(egroup: EGroupID): any;

/**
 * Removes upgrade(s) from an egroup
 */
declare function EGroup_RemoveUpgrade(egroup: EGroupID, upgrade: UpgradeBlueprint | any): void;

/**
 * Respawn all despawned entities in a group.
 */
declare function EGroup_ReSpawn(egroup: EGroupID): void;

/**
 * Trigger animation action for an EGroup. Please only use this for simple animations
 */
declare function EGroup_SetAnimatorAction(egroup: EGroupID, actionName: string): void;

/**
 * Set animation event for an EGroup. Please only use this for simple animations
 */
declare function EGroup_SetAnimatorEvent(egroup: EGroupID, eventName: string): void;

/**
 * Set animation state of a state machine for an EGroup. Please only use this for simple animations
 */
declare function EGroup_SetAnimatorState(egroup: EGroupID, stateMachineName: string, stateName: string): void;

/**
 * Set animation variable value for an EGroup. Please only use this for simple animations
 */
declare function EGroup_SetAnimatorVariable(egroup: EGroupID, variableName: string, value: number): void;

/**
 * Sets whether a weapon to auto-target things or not
 */
declare function EGroup_SetAutoTargetting(group: EGroupID, hardpoint: string, enable: boolean): void;

/**
 * Sets the health of each unit in an entity group to a given percent [0.0, 1.0].
 */
declare function EGroup_SetAvgHealth(egroup: EGroupID, healthPercent: number): number;

/**
 * Overrides crushable behavior for an egroup
 */
declare function EGroup_SetCrushable(egroup: EGroupID, crushable: boolean): void;

/**
 * Instantly wires a building for demolitions
 */
declare function EGroup_SetDemolitions(player: PlayerID, egroupid: EGroupID, numcharges?: number): void;

/**
 * Set the minimum health for this entity
 * This is usually set to zero, any higher value prevents the entity from having its health reduced below this given value
 */
declare function EGroup_SetHealthMinCap(egroup: EGroupID, minhealth: number): void;

/**
 * Enable/Disable invulnerablity for an entire entity group. Use true and false for simple on/off, or use a number between 0.0 and 1.0 for more precise control on how much damage an entity can take before it takes no more.
 * The optional reset_time is used to automatically remove invulnerability after a set time. If invulnerable, health damage is disabled.
 */
declare function EGroup_SetInvulnerable(egroup: EGroupID, enabled: boolean, reset_time?: number): void;

/**
 * Changes the player owner for all spawned and despawned entities of an EGroup.
 * Strategic/capturable point does not support setting player owner directly
 */
declare function EGroup_SetPlayerOwner(egroup: EGroup, owner: PlayerID): void;

/**
 * Set the rally point for this entity
 * This is usually set to zero, any higher value prevents the entity from having its health reduced below this given value
 */
declare function EGroup_SetRallyPoint(egroup: EGroupID, target: Position): void;

/**
 * Sets all entities in an egroup to be recrewable or not when abandoned
 */
declare function EGroup_SetRecrewable(sgroup: EGroupID, recrewable: boolean): void;

/**
 * Set player selectable state of entities in the egroup
 */
declare function EGroup_SetSelectable(egroup: EGroupID, selectable: boolean): void;

/**
 * Enables shared team production on a building (teammates can build using THEIR resources)
 */
declare function EGroup_SetSharedProductionQueue(egroup: EGroupID, enable: boolean): void;

/**
 * Sets a strategic point to neutral (not owned by any team)
 */
declare function EGroup_SetStrategicPointNeutral(egroup: EGroupID): void;

/**
 * Makes an egroup neutral
 */
declare function EGroup_SetWorldOwned(egroup: EGroupID): void;

/**
 * Creates an entity group containing a single entity
 * @extdesc
 * Creates an EGroup containing just one entity, creating the group if it doesn't exist and clearing it if it does. It returns the name of the EGroup.
 */
declare function EGroup_Single(egroup: EGroupID, entity: EntityID): EGroupID;

/**
 * Sorts the EGroup based on health
 */
declare function EGroup_SortBasedOnHealth(egroup: EGroupID, ascending: boolean): any;

/**
 * Warps all members of an EGroup immediately to a marker
 */
declare function EGroup_WarpToMarker(entity: EGroupID, marker: MarkerID): void;

/**
 * Warps all members of an EGroup immediately to a new position
 */
declare function EGroup_WarpToPos(entity: EGroupID, pos: Position): void;

/**
 * Returns the total health of all units combined in a squad group.
 */
declare function SGroup_GetTotalHealth(sgroup: SGroupID): number;

/**
 * Returns true if ANY or ALL of the squad's entities have the specified upgrade
 */
declare function SGroup_HasEntityUpgrade(egroup: EGroupID, upgrade: UpgradeID, all: boolean): boolean;

/**
 * Disables all encounters
 */
declare function AI_DisableAllEncounters(): void;

/**
 * Enables all encounters
 */
declare function AI_EnableAllEncounters(): void;

/**
 * Returns a table with all active (not dead) encounters.
 */
declare function AI_GetActiveEncounters(): any;

/**
 * Returns the number of alive encounters currently managed by the AI manager.
 */
declare function AI_GetNumEncounters(): number;

/**
 * Returns True if the current AI_Manager difficulty matches any in a given list.
 */
declare function AI_IsMatchingDifficulty(difficultyList: number | any): boolean;

/**
 * Overrides the current difficulty setting (only for the AI Manager). Pass 'nil' to reset to Game_GetSPDifficulty() value
 */
declare function AI_OverrideDifficulty(level: number): void;

/**
 * Clears goals on all encounters, then empties the encounter list. Can also issue a stop command to all units.
 */
declare function AI_RemoveAllEncounters(stopAll: boolean): void;

/**
 * Set the level of debug information shown but Ai:Print().
 */
declare function AI_SetDebugLevel(num: any): void;

/**
 * Sets the default player to use when creating an encounter.
 */
declare function AI_SetDefaultEnemyPlayer(player: PlayerID): void;

/**
 * Toggle encounter/goal debug information on screen.
 */
declare function AI_ToggleDebugData(): void;

/**
 * Toggle printing console debug information for encounters.
 */
declare function AI_ToggleDebugPrint(): void;

/**
 * Adjust default goal data for ability goals.  Sets the default GoalData to the current defaults plus additionalDefaultGoalData; any values specified are used for unspecified encounter ability goal values.
 */
declare function AIAbilityGoal_AdjustDefaultGoalData(additionalDefaultGoalData: any): any;

/**
 * Set default goal data for ability goals.  defaultGoalData is cloned; any values specified are used for unspecified encounter ability goal values.
 */
declare function AIAbilityGoal_SetDefaultGoalData(defaultGoalData: any): void;

/**
 * Set modify goal data for ability goals.  modifyGoalData is cloned; values specified via keyname_Multiplier are used for the numeric keyname encounter ability goal value.
 */
declare function AIAbilityGoal_SetModifyGoalData(modifyGoalData: any): void;

/**
 * Set override goal data for ability goals.  overrideGoalData is cloned; any values specified are used for encounter ability goal values.
 */
declare function AIAbilityGoal_SetOverrideGoalData(overrideGoalData: any): void;

/**
 * Adjust default goal data for attack goals.  Sets the default GoalData to the current defaults plus additionalDefaultGoalData; any values specified are used for unspecified encounter attack goal values.
 */
declare function AIAttackGoal_AdjustDefaultGoalData(additionalDefaultGoalData: any): any;

/**
 * Set default goal data for attack goals.  defaultGoalData is cloned; any values specified are used for unspecified encounter attack goal values.
 */
declare function AIAttackGoal_SetDefaultGoalData(defaultGoalData: any): void;

/**
 * Set modify goal data for attack goals.  modifyGoalData is cloned; values specified via keyname_Multiplier are used for the numeric keyname encounter attack goal value.
 */
declare function AIAttackGoal_SetModifyGoalData(modifyGoalData: any): void;

/**
 * Set override goal data for attack goals.  overrideGoalData is cloned; any values specified are used for encounter attack goal values.
 */
declare function AIAttackGoal_SetOverrideGoalData(overrideGoalData: any): void;

/**
 * Adjust default goal data.  Sets the default GoalData to the current defaults plus additionalDefaultGoalData; any values specified are used for unspecified encounter goal values.
 */
declare function AIBaseGoal_AdjustDefaultGoalData(additionalDefaultGoalData: any): any;

/**
 * Set default goal data.  defaultGoalData is cloned; any values specified are used for unspecified encounter goal values.
 */
declare function AIBaseGoal_SetDefaultGoalData(defaultGoalData: any): void;

/**
 * Set modify goal data.  modifyGoalData is cloned; values specified via keyname_Multiplier are used for the numeric keyname encounter goal value.
 */
declare function AIBaseGoal_SetModifyGoalData(modifyGoalData: any): void;

/**
 * Set override goal data.  overrideGoalData is cloned; any values specified are used for encounter goal values.
 */
declare function AIBaseGoal_SetOverrideGoalData(overrideGoalData: any): void;

/**
 * Adjust default goal data for defend goals.  Sets the default GoalData to the current defaults plus additionalDefaultGoalData; any values specified are used for unspecified encounter defend goal values.
 */
declare function AIDefendGoal_AdjustDefaultGoalData(additionalDefaultGoalData: any): any;

/**
 * Set default goal data for defend goals.  defaultGoalData is cloned; any values specified are used for unspecified encounter defend goal values.
 */
declare function AIDefendGoal_SetDefaultGoalData(defaultGoalData: any): void;

/**
 * Set modify goal data for defend goals.  modifyGoalData is cloned; values specified via keyname_Multiply are used for the numeric keyname encounter defend goal value.
 */
declare function AIDefendGoal_SetModifyGoalData(modifyGoalData: any): void;

/**
 * Set override goal data for defend goals.  overrideGoalData is cloned; any values specified are used for encounter defend goal values.
 */
declare function AIDefendGoal_SetOverrideGoalData(overrideGoalData: any): void;

/**
 * Adjust default goal data for attack goals.  Sets the default GoalData to the current defaults plus additionalDefaultGoalData; any values specified are used for unspecified encounter attack goal values.
 */
declare function AIFormationAttackGoal_AdjustDefaultGoalData(additionalDefaultGoalData: any): any;

/**
 * Set default goal data for attack goals.  defaultGoalData is cloned; any values specified are used for unspecified encounter attack goal values.
 */
declare function AIFormationAttackGoal_SetDefaultGoalData(defaultGoalData: any): void;

/**
 * Set modify goal data for attack goals.  modifyGoalData is cloned; values specified via keyname_Multiplier are used for the numeric keyname encounter attack goal value.
 */
declare function AIFormationAttackGoal_SetModifyGoalData(modifyGoalData: any): void;

/**
 * Set override goal data for attack goals.  overrideGoalData is cloned; any values specified are used for encounter attack goal values.
 */
declare function AIFormationAttackGoal_SetOverrideGoalData(overrideGoalData: any): void;

/**
 * Adjust default goal data for DefendArea goals.  Sets the default GoalData to the current defaults plus additionalDefaultGoalData; any values specified are used for unspecified encounter DefendArea goal values.
 */
declare function AIFormationDefendAreaGoal_AdjustDefaultGoalData(additionalDefaultGoalData: any): any;

/**
 * Set default goal data for DefendArea goals.  defaultGoalData is cloned; any values specified are used for unspecified encounter DefendArea goal values.
 */
declare function AIFormationDefendAreaGoal_SetDefaultGoalData(defaultGoalData: any): void;

/**
 * Set modify goal data for DefendArea goals.  modifyGoalData is cloned; values specified via keyname_Multiplier are used for the numeric keyname encounter DefendArea goal value.
 */
declare function AIFormationDefendAreaGoal_SetModifyGoalData(modifyGoalData: any): void;

/**
 * Set override goal data for DefendArea goals.  overrideGoalData is cloned; any values specified are used for encounter DefendArea goal values.
 */
declare function AIFormationDefendAreaGoal_SetOverrideGoalData(overrideGoalData: any): void;

/**
 * Adjust default goal data for move goals.  Sets the default GoalData to the current defaults plus additionalDefaultGoalData; any values specified are used for unspecified encounter move goal values.
 */
declare function AIMoveGoal_AdjustDefaultGoalData(additionalDefaultGoalData: any): any;

/**
 * Set default goal data for move goals.  defaultGoalData is cloned; any values specified are used for unspecified encounter move goal values.
 */
declare function AIMoveGoal_SetDefaultGoalData(defaultGoalData: any): void;

/**
 * Set modify goal data for move goals.  modifyGoalData is cloned; values specified via keyname_Multiply are used for the numeric keyname encounter move goal value.
 */
declare function AIMoveGoal_SetModifyGoalData(modifyGoalData: any): void;

/**
 * Set override goal data for move goals.  overrideGoalData is cloned; any values specified are used for encounter move goal values.
 */
declare function AIMoveGoal_SetOverrideGoalData(overrideGoalData: any): void;

/**
 * Adjust default goal data for TownLife goals.  Sets the default GoalData to the current defaults plus additionalDefaultGoalData; any values specified are used for unspecified encounter TownLife goal values.
 */
declare function AITownLifeGoal_AdjustDefaultGoalData(additionalDefaultGoalData: any): any;

/**
 * Set default goal data for TownLife goals.  defaultGoalData is cloned; any values specified are used for unspecified encounter TownLife goal values.
 */
declare function AITownLifeGoal_SetDefaultGoalData(defaultGoalData: any): void;

/**
 * Set modify goal data for TownLife goals.  modifyGoalData is cloned; values specified via keyname_Multiply are used for the numeric keyname encounter TownLife goal value.
 */
declare function AITownLifeGoal_SetModifyGoalData(modifyGoalData: any): void;

/**
 * Set override goal data for TownLife goals.  overrideGoalData is cloned; any values specified are used for encounter TownLife goal values.
 */
declare function AITownLifeGoal_SetOverrideGoalData(overrideGoalData: any): void;

/**
 * Callback helper function for relocate an Encounter goal. Name of parameters: 'encounter'.
 * Example usage: Event_*(EventHandler_ResetGoalRelocation, {encounter = <myEncounter>}, ...)
 */
declare function EventHandler_RelocateGoal(data: any): any;

/**
 * Callback helper function for relocate  an Encounter goal to the original location. Name of parameters: 'encounter'.
 * Example usage: Event_*(EventHandler_ResetGoalRelocation, {encounter = <myEncounter>}, ...)
 */
declare function EventHandler_ResetGoalRelocation(data: any): any;

/**
 * Callback helper function for triggering an Encounter goal. Name of parameters: 'encounter'.
 * Invokes Encounter:TriggerGoal() for data.encounter Example usage: Event_*(EventHandler_TriggerEncounterGoal, {encounter = <myEncounter>}, ...)
 */
declare function EventHandler_TriggerEncounterGoal(data: any): any;

/**
 * Merge clones two table (recursively) into a single table combining into a new table allowing for unadulterated use of the data
 */
declare function MergeClone(defaultTable: any, overrideTable: any): any;

/**
 * Allows the entity to use this ability
 */
declare function Entity_AddAbility(entity: EntityID, ability: ScarAbilityPBG): any;

/**
 * Advance ability cooldown
 */
declare function Entity_AdjustAbilityCooldown(entity: EntityID, tickAmount: number): any;

/**
 * Builds the cycle list based on current tagged entity
 */
declare function Entity_BuildCycleList(): any;

/**
 * pass in a entity and position to resolve the position into a open space position, if the position is not free, position returned will try to be the closest position near the original position
 */
declare function Entity_CalculatePassableSpawnPosition(entity: EntityID, pos: Position): any;

/**
 * Returns whether an entity can attack a target without moving or turning.
 */
declare function Entity_CanAttackNow(attacker: EntityID, target: Position): boolean;

/**
 * Cancels an item in a production queue.  Index 0 is the currently producing item.
 */
declare function Entity_CancelProductionQueueItem(entity: EntityID, index: number): any;

/**
 * Check if an entity can currently be damaged.
 */
declare function Entity_CanCurrentlyBeDamaged(entity: EntityID): any;

/**
 * Check if the entity can load squad or not
 */
declare function Entity_CanLoadSquad(entity: EntityID, squad: SquadID, bCheckSquadState: boolean, bOverload: boolean): boolean;

/**
 * Returns true if a target entity is in the entities sight radius
 */
declare function Entity_CanSeeEntity(entity: EntityID, target: EntityID): boolean;

/**
 * Returns true if a target squad is in the squads sight radius
 */
declare function Entity_CanSeeSquad(entity: EntityID, target: SquadID): boolean;

/**
 * Check if an entity can target and attack another entity.
 */
declare function Entity_CanTargetEntity(entity: EntityID, target: EntityID, checkFOW: boolean): any;

/**
 * Clear the pending death flag manually. Should be used when campaign leaders are revived.
 */
declare function Entity_ClearPendingDeathFlag(entity: EntityID): any;

/**
 * Clears any previous posture suggestions made to an entity
 */
declare function Entity_ClearPostureSuggestion(entity: EntityID): void;

/**
 * Clears a TargetHandle value in the entity's state model corresponding to the given key and table row index (0 based).
 */
declare function Entity_ClearStateModelEnumTableTarget(entity: EntityID, key: string, tableRowIndex: number): any;

/**
 * Clears a TargetHandle value in the entity's state model corresponding to the given key.
 */
declare function Entity_ClearStateModelTarget(entity: EntityID, key: string): any;

/**
 * Clears the tagged entity used for debugging
 */
declare function Entity_ClearTagDebug(): any;

/**
 * Instantly adds an upgrade to a given entity
 */
declare function Entity_CompleteUpgrade(pEntity: EntityID, upgradePBG: ScarUpgradePBG): any;

/**
 * Converts Entity's blueprint to the specified blueprint.
 */
declare function Entity_ConvertBlueprint(entity: EntityID, pbg: PropertyBagGroup): any;

/**
 * Cycle through the existing list built for the originally tagged entity
 */
declare function Entity_CycleDebug(): any;

/**
 * DeSpawn the entity at its current position
 */
declare function Entity_DeSpawn(entity: EntityID): void;

/**
 * Remove an entity from the world and destroy it.
 */
declare function Entity_Destroy(entity: EntityID): void;

/**
 * Forces the cancel construction command to be disabled, meaning you can't cancel construction for this
 */
declare function Entity_DisableCancelConstructionCommand(entity: EntityID, disable: boolean): any;

/**
 * Adjusts the entity's burn level by val
 */
declare function Entity_DoBurnDamage(entity: EntityID, val: number, ignoreMaxDamagePerSecond: boolean): any;

/**
 * Sets whether an entity pays attention to its surroundings
 */
declare function Entity_EnableAttention(entity: EntityID, attentive: boolean): void;

/**
 * Sets whether an entity can produce anything (including upgrades)
 */
declare function Entity_EnableProductionQueue(entity: EntityID, enable: boolean): void;

/**
 * Sets whether an strategic point is active
 */
declare function Entity_EnableStrategicPoint(entity: EntityID, enable: boolean): any;

/**
 * Returns total entity extension count.
 */
declare function Entity_ExtensionCount(): any;

/**
 * Returns true if the entity has the specific extension enabled.
 */
declare function Entity_ExtensionEnabled(pEntity: EntityID, extID: ComponentDependencyIndex): any;

/**
 * Returns true if the specified extension on the entity will update every frame.
 */
declare function Entity_ExtensionExecuting(pEntity: EntityID, extID: ComponentDependencyIndex): any;

/**
 * Returns a string name of the given extension on the entity.
 */
declare function Entity_ExtensionName(pEntity: EntityID, extID: ComponentDependencyIndex): any;

/**
 * Force constructs this entity but only if its a building
 */
declare function Entity_ForceConstruct(e: EntityID): void;

/**
 * Force a building to self construct if it's a building
 */
declare function Entity_ForceSelfConstruct(e: EntityID): any;

/**
 * Get an entity from a mission editor ID.
 */
declare function Entity_FromID(id: number): any;

/**
 * Returns the active entity command.  Some valid entity commands: STATEID_StructureBuilding, STATEID_Dead, STATEID_Idle, STATEID_Pause
 */
declare function Entity_GetActiveCommand(entity: EntityID): number;

/**
 * Find the entity target. If found, the target squad is added to the sgroup. Entity targets like buildings are ignored.
 */
declare function Entity_GetAttackTarget(entity: EntityID, sgroup: SGroupID): any;

/**
 * Returns the entity targeted by the given entity.
 */
declare function Entity_GetAttackTargetEntity(entity: EntityID): any;

/**
 * Returns the squad targeted by the given entity.
 */
declare function Entity_GetAttackTargetSquad(entity: EntityID): any;

/**
 * Returns the entity's blueprint
 */
declare function Entity_GetBlueprint(entity: EntityID): EntityBlueprint;

/**
 * Returns the construction progress (with range [0.0, 1.0] for a given entity.  Returns 0.0 if the entity is not a building.
 */
declare function Entity_GetBuildingProgress(pEntity: EntityID): number;

/**
 * Get cover safety value from the where the entity is standing. The safety value is number from -.5 to .5.
 * Higher value means better cover. If the entity doesn't have cover_ext, value of 0 would be returned
 */
declare function Entity_GetCoverValue(entity: EntityID): number;

/**
 * Get the currently tagged debug entity
 */
declare function Entity_GetDebugEntity(): any;

/**
 * Returns number of entities that will be placed if this ebp is built in a fence.
 */
declare function Entity_GetFenceEntityCount(ebp: PropertyBagGroup, startPos: Position, endPos: Position): any;

/**
 * Returns the number of filled slots for squads in a hold in the HoldExtInfo
 */
declare function Entity_GetFilledHoldSquadSlots(entity: EntityID): any;

/**
 * Returns the heading of the entity.  The heading is currently a lua table with three entries (x, y, z)
 */
declare function Entity_GetHeading(entity: EntityID): Position;

/**
 * Returns the health of an entity.
 * Health will be zero for entities with no health extension.
 */
declare function Entity_GetHealth(entity: EntityID): number;

/**
 * Returns the max health of an entity.
 * Max health will be zero for entities with no health extension.
 */
declare function Entity_GetHealthMax(entity: EntityID): number;

/**
 * Returns the percentage health, taking into account destructible buildings
 * Health will be zero for entities with no health extension nor building destruction
 */
declare function Entity_GetHealthPercentage(entity: EntityID): number;

/**
 * Returns the entities unique id in the world
 */
declare function Entity_GetID(entity: EntityID): any;

/**
 * Check if the entity is invulnerable or not
 */
declare function Entity_GetInvulnerable(squad: SquadID): boolean;

/**
 * Returns the invulnerable point in terms of percentage
 * For buildings, retrieve the percentage value of healthy below which no more panels could be destroyed
 */
declare function Entity_GetInvulnerableMinCap(entity: EntityID): number;

/**
 * Find the last squad attacker on this entity. If found, the squad is added to the sgroup
 */
declare function Entity_GetLastAttacker(entity: EntityID, group: SGroupID): void;

/**
 * Find the squad attackers on this entity from the last seconds specified. If found, the squads are added to the sgroup. Building attackers are ignored
 */
declare function Entity_GetLastAttackers(entity: EntityID, group: SGroupID, timeSeconds: number): void;

/**
 * Find the entity attackers on this entity from the last seconds specified. The sgroup is cleared, then any squads found are added to the sgroup. Building attackers are ignored.
 */
declare function Entity_GetLastEntityAttackers(entity: EntityID, group: EGroupID, timeSeconds: number): any;

/**
 * Gets the maximum capture crew size from a recrewable entity
 */
declare function Entity_GetMaxCaptureCrewSize(entity: EntityID): any;

/**
 * Returns the number of specified slots for squads in a hold in the HoldExtInfo
 */
declare function Entity_GetMaxHoldSquadSlots(entity: EntityID): any;

/**
 * Returns the number of blocks the entity will perform per number of attacks
 * For each numAttacks melee attacks the entity receives, it will block a random numBlocks of them. Block rate is numBlocks / numAttacks
 */
declare function Entity_GetMeleeBlocksPerAttacks(entity: EntityID): any;

/**
 * Returns the number of entities connected to an entity via the interaction system.
 * interactionType should match one of the values defined in the `interaction_type` attribute enum
 */
declare function Entity_GetNumInteractors(entity: EntityID, interactionType: string): any;

/**
 * Returns a position relative to an entity's current position and orientation. see ScarUtil.scar for explanation of 'offset' parameter.
 */
declare function Entity_GetOffsetPosition(entity: EntityID, offset: number, distance: number): Position;

/**
 * Returns the Player owner of the given entity. Entity MUST NOT be owned by the world.
 * Use World_OwnsEntity to make sure entity is not owned by the world before calling this function
 */
declare function Entity_GetPlayerOwner(entity: EntityID): PlayerID;

/**
 * Returns the position of the entity.  The position is currently a lua table with three entries (x, y, z)
 */
declare function Entity_GetPosition(entity: EntityID): Position;

/**
 * Returns the blueprint for a production queue item with index.
 */
declare function Entity_GetProductionQueueItem(entity: EntityID, index: number): Blueprint;

/**
 * Returns the production type (PITEM_Upgrade, PITEM_Spawn, PITEM_SquadUpgrade, PITEM_SquadReinforce, PITEM_PlayerUpgrade) for a production queue item with index.
 */
declare function Entity_GetProductionQueueItemType(entity: EntityID, index: number): number;

/**
 * Returns the number of items in the entities production queue.
 * It is an error to call this function on an entity that does not have a production queue. Use Entity_HasProductionQueue to check that the entity has a queue.
 */
declare function Entity_GetProductionQueueSize(entity: EntityID): number;

/**
 * Returns the number of blocks the entity will perform per number of attacks
 * For each numAttacks projectile attacks the entity receives, it will block a random numBlocks of them. Block rate is numBlocks / numAttacks
 */
declare function Entity_GetProjectileBlocksPerAttacks(entity: EntityID): any;

/**
 * Returns the number of blocks the entity will perform per number of attacks
 * For each numAttacks ranged attacks the entity receives, it will block a random numBlocks of them. Block rate is numBlocks / numAttacks
 */
declare function Entity_GetRangedBlocksPerAttacks(entity: EntityID): any;

/**
 * Get remaining resource amount of the given entity.
 */
declare function Entity_GetRemainingResourceDepositAmount(entity: EntityID): any;

/**
 * Returns the inner sight radius for this entity
 * Radius will be zero for entities without a sight extension
 */
declare function Entity_GetSightInnerHeight(entity: EntityID): number;

/**
 * Returns the inner sight radius for this entity
 * Radius will be zero for entities without a sight extension
 */
declare function Entity_GetSightInnerRadius(entity: EntityID): number;

/**
 * Returns the outer sight radius for this entity
 * Radius will be zero for entities without a sight extension
 */
declare function Entity_GetSightOuterHeight(entity: EntityID): number;

/**
 * Returns the outer sight radius for this entity
 * Radius will be zero for entities without a sight extension
 */
declare function Entity_GetSightOuterRadius(entity: EntityID): number;

/**
 * Returns the Squad for the passed Entity. (May be NULL)
 */
declare function Entity_GetSquad(pEntity: EntityID): SquadID;

/**
 * Adds squads held by an entity to an SGroup
 */
declare function Entity_GetSquadsHeld(pEntity: EntityID, sgroup: SGroupID): boolean;

/**
 * Returns a boolean value from the entity's state model corresponding to the given key.
 */
declare function Entity_GetStateModelBool(entity: EntityID, key: string): any;

/**
 * Returns an Entity value from the entity's state model corresponding to the given key.
 */
declare function Entity_GetStateModelEntityTarget(entity: EntityID, key: string): any;

/**
 * Returns a boolean value from the entity's state model corresponding to the given key and table row index (0 based).
 */
declare function Entity_GetStateModelEnumTableBool(entity: EntityID, key: string, tableRowIndex: number): any;

/**
 * Returns an Entity value from the entity's state model corresponding to the given key and table row index (0 based).
 */
declare function Entity_GetStateModelEnumTableEntityTarget(entity: EntityID, key: string, tableRowIndex: number): any;

/**
 * Returns a float value from the entity's state model corresponding to the given key and table row index (0 based).
 */
declare function Entity_GetStateModelEnumTableFloat(entity: EntityID, key: string, tableRowIndex: number): any;

/**
 * Returns an integer value from the entity's state model corresponding to the given key and table row index (0 based).
 */
declare function Entity_GetStateModelEnumTableInt(entity: EntityID, key: string, tableRowIndex: number): any;

/**
 * Returns a Player value from the entity's state model corresponding to the given key and table row index (0 based).
 */
declare function Entity_GetStateModelEnumTablePlayerTarget(entity: EntityID, key: string, tableRowIndex: number): any;

/**
 * Returns a Squad value from the entity's state model corresponding to the given key and table row index (0 based).
 */
declare function Entity_GetStateModelEnumTableSquadTarget(entity: EntityID, key: string, tableRowIndex: number): any;

/**
 * Returns a Vector3f value from the entity's state model corresponding to the given key and table row index (0 based).
 */
declare function Entity_GetStateModelEnumTableVector3f(entity: EntityID, key: string, tableRowIndex: number): any;

/**
 * Returns a float value from the entity's state model corresponding to the given key.
 */
declare function Entity_GetStateModelFloat(entity: EntityID, key: string): any;

/**
 * Returns an integer value from the entity's state model corresponding to the given key.
 */
declare function Entity_GetStateModelInt(entity: EntityID, key: string): any;

/**
 * Returns a Player value from the entity's state model corresponding to the given key.
 */
declare function Entity_GetStateModelPlayerTarget(entity: EntityID, key: string): any;

/**
 * Returns a Squad value from the entity's state model corresponding to the given key.
 */
declare function Entity_GetStateModelSquadTarget(entity: EntityID, key: string): any;

/**
 * Returns a Vector3f value from the entity's state model corresponding to the given key.
 */
declare function Entity_GetStateModelVector3f(entity: EntityID, key: string): any;

/**
 * Returns an Entity value from the entity's StateTree EntityTargetingExt with the given type and key.
 */
declare function Entity_GetStateTreeTargeting_EntityTarget(entity: EntityID, type: string, key: string): any;

/**
 * Returns an Player value from the entity's StateTree EntityTargetingExt with the given type and key.
 */
declare function Entity_GetStateTreeTargeting_PlayerTarget(entity: EntityID, type: string, key: string): any;

/**
 * Returns an Squad value from the entity's StateTree EntityTargetingExt with the given type and key.
 */
declare function Entity_GetStateTreeTargeting_SquadTarget(entity: EntityID, type: string, key: string): any;

/**
 * Returns an Vector3f value from the entity's StateTree EntityTargetingExt with the given type and key.
 */
declare function Entity_GetStateTreeTargeting_Vector3f(entity: EntityID, type: string, key: string): any;

/**
 * Returns the number of entities or squads currently securing this strategic point
 */
declare function Entity_GetStrategicPointSecureCount(entity: EntityID): any;

/**
 * Get the entity's targeting type - auto, manual, or none
 */
declare function Entity_GetTargetingType(entity: EntityID): any;

/**
 * Returns a weapon hardpoint
 */
declare function Entity_GetWeaponBlueprint(entity: EntityID, hardPointIndex: number): WeaponBlueprint;

/**
 * Returns how many hardpoints an entity has
 */
declare function Entity_GetWeaponHardpointCount(entity: EntityID): number;

/**
 * Call HandleAssert on an EntityAssertHandler for each entity
 */
declare function Entity_HandleAllAsserts(): any;

/**
 * Tests to see if an entity has an ability
 */
declare function Entity_HasAbility(entity: EntityID, ability: ScarAbilityPBG): any;

/**
 * Checks whether an entity is of any of the Blueprints or EntityTypes specified.
 * Blueprint can be a single Blueprint, a single EntityType, or a table of multiple Blueprints or EntityTypes. If you want to see if an entity has ALL of a set of EntityTypes, then wrap them all in a sub-table.
 */
declare function Entity_HasBlueprint(entity: EntityID, blueprints: EBP | EntityType | any): boolean;

/**
 * Returns true if an entity has a production queue.
 */
declare function Entity_HasProductionQueue(entity: EntityID): boolean;

/**
 * Return true if the entity has purchased the specified upgrade.
 */
declare function Entity_HasUpgrade(pEntity: EntityID, upgradePBG: UpgradeBlueprint): boolean;

/**
 * Strategic point will be captured instantly by the team of the supplied player
 */
declare function Entity_InstantCaptureStrategicPoint(entity: EntityID, player: PlayerID): void;

/**
 * instantly converts a building into a fieldsupport
 */
declare function Entity_InstantConvertBuildingToFieldSupport(building: EntityID, owner: PlayerID): any;

/**
 * Reverts an occupied building
 */
declare function Entity_InstantRevertOccupiedBuilding(entity: EntityID): void;

/**
 * True if the ability is active
 */
declare function Entity_IsAbilityActive(entity: EntityID, pbg: ScarAbilityPBG): any;

/**
 * Returns true if entity is alive and spawned
 */
declare function Entity_IsActive(pEntity: EntityID): any;

/**
 * Returns true if entity is still alive
 */
declare function Entity_IsAlive(pEntity: EntityID): number;

/**
 * Returns true if the entity is attacking within the time
 * Time is in seconds
 */
declare function Entity_IsAttacking(entity: EntityID, time: number): boolean;

/**
 * Returns true if the given entity is a building
 */
declare function Entity_IsBuilding(e: EntityID): boolean;

/**
 * Returns true if the entity can be set on fire
 */
declare function Entity_IsBurnable(e: EntityID): any;

/**
 * Returns true if the given entity is burning (buildings on fire or non-buildings with burn_exts)
 */
declare function Entity_IsBurning(e: EntityID): any;

/**
 * Returns whether the entity is camouflaged.
 */
declare function Entity_IsCamouflaged(entity: EntityID): boolean;

/**
 * Returns true if the entity is a capturable building
 */
declare function Entity_IsCapturableBuilding(entity: EntityID): boolean;

/**
 * Returns true if entity is a casualty else false
 */
declare function Entity_IsCasualty(entity: EntityID): boolean;

/**
 * Returns whether this entity is cuttable
 */
declare function Entity_IsCuttable(entity: EntityID): any;

/**
 * Returns whether this entity's demolition charges are ready to be detonated
 */
declare function Entity_IsDemolitionReady(entity: EntityID): boolean;

/**
 * True if entity is currently performing the given ability
 */
declare function Entity_IsDoingAbility(entity: EntityID, pbg: ScarAbilityPBG): any;

/**
 * Returns true if the given blueprint is a building
 */
declare function Entity_IsEBPBuilding(ebp: EntityBlueprint): number;

/**
 * Returns true if the given blueprint is objcover
 */
declare function Entity_IsEBPObjCover(ebp: EntityBlueprint): boolean;

/**
 * Returns true if the given blueprint is of the given type. Types are defined in type_ext/unit_type_list
 */
declare function Entity_IsEBPOfType(ebp: ScarEntityPBG, type: string): any;

/**
 * Returns whether a hardpoint is active
 */
declare function Entity_IsHardpointActive(entity: EntityID, hardPointIndex: number): boolean;

/**
 * Check if the entity has a hold on anything
 */
declare function Entity_IsHoldingAny(entity: EntityID): boolean;

/**
 * Returns whether or not the entity is in the background.
 */
declare function Entity_IsInBackground(pEntity: EntityID): any;

/**
 * Returns true if entity is in cover.
 */
declare function Entity_IsInCover(entityId: EntityID): boolean;

/**
 * Returns whether an entity is an infantry unit
 */
declare function Entity_IsInfantry(pEntity: EntityID): any;

/**
 * get if an entity is invulnerable
 */
declare function Entity_IsInvulnerable(entity: EntityID): any;

/**
 * Returns whether an entity is moving.
 */
declare function Entity_IsMoving(pEntity: EntityID): boolean;

/**
 * Determines if this entity is of the given type. Types are defined in type_ext/unit_type_list
 */
declare function Entity_IsOfType(entity: EntityID, type: string): boolean;

/**
 * Returns if an Entity is currently on walkable wall.
 */
declare function Entity_IsOnWalkableWall(entity: EntityID): any;

/**
 * Returns true if the entity is part of a squad
 */
declare function Entity_IsPartOfSquad(pEntity: EntityID): boolean;

/**
 * Returns whether an entity is a plane (has a flight extension)
 */
declare function Entity_IsPlane(pEntity: EntityID): any;

/**
 * Returns whether an entity is a planned structure.
 */
declare function Entity_IsPlannedStructure(entity: EntityID): any;

/**
 * Returns whether a particular squad blueprint is being produced by a given entity
 */
declare function Entity_IsProducingSquad(entity: EntityID, pbg: ScarSquadPBG): any;

/**
 * Returns true if an entity has a production queue and if the queue is available
 */
declare function Entity_IsProductionQueueAvailable(entity: EntityID): any;

/**
 * Returns true if the entity is a resource generator and has resources remaining
 */
declare function Entity_IsResourceGenerator(entity: EntityID): any;

/**
 * Return true if the entity is a slot item
 */
declare function Entity_IsSlotItem(entity: EntityID): any;

/**
 * if entity is spawned return true
 */
declare function Entity_IsSpawned(entity: EntityID): boolean;

/**
 * Returns true if the entity is a starting position
 */
declare function Entity_IsStartingPosition(entity: EntityID): boolean;

/**
 * Returns true if the entity is a strategic point.
 */
declare function Entity_IsStrategicPoint(entity: EntityID): boolean;

/**
 * Returns true if strategic point is captured by the team of the player provided.
 */
declare function Entity_IsStrategicPointCapturedBy(entity: EntityID, player: PlayerID): boolean;

/**
 * Return true if the entity is a team weapon
 */
declare function Entity_IsSyncWeapon(entity: EntityID): boolean;

/**
 * Returns true if the entity is under attack.
 */
declare function Entity_IsUnderAttack(entity: EntityID, time: number): boolean;

/**
 * Returns true if the entity is under attack by a certain player
 */
declare function Entity_IsUnderAttackByPlayer(entity: EntityID, pAttackerOwner: PlayerID, time: number): boolean;

/**
 * Returns true if the entity was under attack from a certain direction (8 offset types, see LuaConsts.scar)
 */
declare function Entity_IsUnderAttackFromDirection(entity: EntityID, offset: number, timeSeconds: number): boolean;

/**
 * Returns true if the entity is being repaired.
 */
declare function Entity_IsUnderRepair(entity: EntityID): any;

/**
 * Check if an entity with the given ID can be found in the world
 */
declare function Entity_IsValid(id: number): boolean;

/**
 * Returns whether an entity can be vaulted
 */
declare function Entity_IsVaultable(pEntity: EntityID): any;

/**
 * Returns whether an entity is a vehicle
 */
declare function Entity_IsVehicle(pEntity: EntityID): boolean;

/**
 * Returns true if entityID is a victory point
 */
declare function Entity_IsVictoryPoint(pEntity: EntityID): boolean;

/**
 * Kill the entity.  Sets health to 0, and triggers death effects.
 */
declare function Entity_Kill(entity: EntityID): void;

/**
 * Calls a function when an entity gets destroyed by the player clicking the "Detonate me" button next to an entity.
 */
declare function Entity_NotifyOnPlayerDemolition(entity: EntityID, function_: any): void;

/**
 * get entity pop cost, use CT_Personnel, CT_Vehicle, CT_Medic for captype
 */
declare function Entity_Population(entity: EntityID, type: CapType): any;

/**
 * trigger the RagDoll skeleton driving.
 */
declare function Entity_RagDoll(entity: EntityID): any;

/**
 * Removes an ability that was previously added by Entity_AddAbility. You cannot remove static abilities (from AE: ability_ext)
 */
declare function Entity_RemoveAbility(entity: EntityID, ability: ScarAbilityPBG): any;

/**
 * Removes all booby-traps on this entity
 */
declare function Entity_RemoveBoobyTraps(pEntityTarget: EntityID): void;

/**
 * Removes all demolition charges on an entity
 */
declare function Entity_RemoveDemolitions(entity: EntityID): void;

/**
 * Removes an upgrade from an entity
 */
declare function Entity_RemoveUpgrade(entity: EntityID, upgrade: UpgradeBlueprint): void;

/**
 * Returns true if you should call Misc_UpdateSlottedSplinesContainingEGroupAfterBlueprintConversion with an egroup containing this entity after blueprint converting it. Make sure to batch together all your entities when using that function to reduce duplicated work.
 */
declare function Entity_RequiresSlottedSplineUpdateAfterBlueprintConversion(entity: EntityID): any;

/**
 * Reset melee block rate to AE tuned values
 */
declare function Entity_ResetMeleeBlocksPerAttacks(entity: EntityID): any;

/**
 * Reset Projectile block rate to AE tuned values
 */
declare function Entity_ResetProjectileBlocksPerAttacks(entity: EntityID): any;

/**
 * Reset ranged block rate to AE tuned values
 */
declare function Entity_ResetRangedBlocksPerAttacks(entity: EntityID): any;

/**
 * Restore the targeting type to the default found in the ebp
 */
declare function Entity_RestoreTargetingType(entity: EntityID): any;

/**
 * Trigger animation action for an entity. Please only use this for simple animations
 */
declare function Entity_SetAnimatorAction(pEntity: EntityID, actionName: string): void;

/**
 * Set animation action parameter for an entity. Please only use this for simple animations
 */
declare function Entity_SetAnimatorActionParameter(pEntity: EntityID, actionParameterName: string, actionParameterValue: string): void;

/**
 * Set animation event for an entity. Please only use this for simple animations
 */
declare function Entity_SetAnimatorEvent(pEntity: EntityID, eventName: string): void;

/**
 * Set animation state of a state machine for an entity. Please only use this for simple animations
 */
declare function Entity_SetAnimatorState(pEntity: EntityID, stateMachineName: string, stateName: string): void;

/**
 * Set animation variable value for an entity. Please only use this for simple animations
 */
declare function Entity_SetAnimatorVariable(pEntity: EntityID, variableName: string, value: number): void;

/**
 * Sets the entity to be in the background or foreground. By default, all entities are in the foreground
 */
declare function Entity_SetBackground(pEntity: EntityID, isInBackground: boolean): void;

/**
 * Enables or disables the BurnExt extensions for squads / entities
 */
declare function Entity_SetBurnExtEnabled(unit: EGroup | EntityID, enabled: boolean): void;

/**
 * Overrides crushable behavior for an entity
 */
declare function Entity_SetCrushable(entity: EntityID, crushable: boolean): void;

/**
 * Changes the crush mode of a given entity.  Entity must have a crush extension.
 */
declare function Entity_SetCrushMode(entity: EntityID, mode: CrushMode): void;

/**
 * Fully wires this entity for demolitions, if it's set up to be demolishable. 'player' is the one that owns the demolitions and can detonate them.
 */
declare function Entity_SetDemolitions(player: PlayerID, entity: EntityID, numcharges: number): boolean;

/**
 * enable or disable the casualtext
 */
declare function Entity_SetEnableCasualty(enable: boolean, entity: EntityID): void;

/**
 * Enables/disables an extension on the entity.
 */
declare function Entity_SetExtEnabled(entity: EntityID, extID: string, enabled: boolean): void;

/**
 * Sets the heading of the entity.  The position is currently a lua table with three entries (x, y, z)
 */
declare function Entity_SetHeading(entity: EntityID, pos: Position, bInterpolate: boolean): void;

/**
 * Sets the heading of the entity.  The position is currently a lua table with three entries (x, y, z)
 */
declare function Entity_SetHeadingGroundSnapOptional(entity: EntityID, pos: Position, bSnapToGround: boolean, bInterpolate: boolean): void;

/**
 * Set the health of an entity.  healthPercent must be in the range [0.0, 1.0].
 */
declare function Entity_SetHealth(entity: EntityID, healthPercent: number): void;

/**
 * Set invulnerability on the entity. Reset time is in seconds. If it it set, the invulnerability will expire after this time.
 */
declare function Entity_SetInvulnerable(entity: EntityID, enable: boolean, reset_time: number): void;

/**
 * Make an entity invulnerable to physical damage when health is below the minimum health percentage
 * resetTime is the time in seconds that vulnerability will be restored.; zero time for reset time means the buff will last forever
 */
declare function Entity_SetInvulnerableMinCap(entity: EntityID, minHealthPercentage: number, resetTime: number): void;

/**
 * Set the number of blocks the entity will perform per number of attacks
 * For each numAttacks melee attacks the entity receives, it will block a random numBlocks of them. Block rate is numBlocks / numAttacks
 */
declare function Entity_SetMeleeBlocksPerAttacks(entity: EntityID, blocks: number, attacks: number): void;

/**
 * Sets an object on fire (also works on buildings)
 */
declare function Entity_SetOnFire(entity: EntityID): void;

/**
 * Changes the owner of the given squad.
 * This function doesn't work with strategic/capturable point
 */
declare function Entity_SetPlayerOwner(entity: EntityID, owner: PlayerID): void;

/**
 * Sets the position of the entity.  The position is currently a lua table with three entries (x, y, z)
 */
declare function Entity_SetPosition(entity: EntityID, pos: Position): void;

/**
 * If the entity is at the same cell as desiredPosition, try to set the entity position to it. If the cell is next to impass, set it to the center of the cell.
 */
declare function Entity_SetPositionWithinCell(entity: EntityID, desiredPosition: Position): void;

/**
 * Set the number of blocks the entity will perform per number of attacks
 * For each numAttacks projectile attacks the entity receives, it will block a random numBlocks of them. Block rate is numBlocks / numAttacks
 */
declare function Entity_SetProjectileBlocksPerAttacks(entity: EntityID, blocks: number, attacks: number): void;

/**
 * Sets whether or not a projectile can explode.
 */
declare function Entity_SetProjectileCanExplode(projectile: EntityID, canExplode: boolean): void;

/**
 * Set the number of blocks the entity will perform per number of attacks
 * For each numAttacks ranged attacks the entity receives, it will block a random numBlocks of them. Block rate is numBlocks / numAttacks
 */
declare function Entity_SetRangedBlocksPerAttacks(entity: EntityID, blocks: number, attacks: number): void;

/**
 * Sets an entity to be recrewable or not when it becomes abandoned
 */
declare function Entity_SetRecrewable(entity: EntityID, capturable: boolean): void;

/**
 * Set remaining resource amount of the given entity.
 */
declare function Entity_SetRemainingResourceDepositAmount(entity: EntityID, amount: number): void;

/**
 * Enables shared team production on a building (teammates can build using THEIR resources)
 */
declare function Entity_SetSharedProductionQueue(entity: EntityID, shared: boolean): void;

/**
 * Show or hide the entity's silhouette when behind other objects
 */
declare function Entity_SetShowSilhouette(entity: EntityID, show: boolean): void;

/**
 * Sets a boolean value in the entity's state model corresponding to the given key.
 */
declare function Entity_SetStateModelBool(entity: EntityID, key: string, value: boolean): void;

/**
 * Sets an Entity TargetHandle value in the entity's state model corresponding to the given key.
 */
declare function Entity_SetStateModelEntityTarget(entity: EntityID, key: string, value: EntityID): void;

/**
 * Sets a boolean value in the entity's state model corresponding to the given key and table row index (0 based).
 */
declare function Entity_SetStateModelEnumTableBool(entity: EntityID, key: string, tableRowIndex: number, value: boolean): void;

/**
 * Sets an Entity TargetHandle value in the entity's state model corresponding to the given key and table row index (0 based).
 */
declare function Entity_SetStateModelEnumTableEntityTarget(entity: EntityID, key: string, tableRowIndex: number, value: EntityID): void;

/**
 * Sets a float value in the entity's state model corresponding to the given key and table row index (0 based).
 */
declare function Entity_SetStateModelEnumTableFloat(entity: EntityID, key: string, tableRowIndex: number, value: number): void;

/**
 * Sets an integer value in the entity's state model corresponding to the given key and table row index (0 based).
 */
declare function Entity_SetStateModelEnumTableInt(entity: EntityID, key: string, tableRowIndex: number, value: number): void;

/**
 * Sets a Player TargetHandle value in the entity's state model corresponding to the given key and table row index (0 based).
 */
declare function Entity_SetStateModelEnumTablePlayerTarget(entity: EntityID, key: string, tableRowIndex: number, value: PlayerID): void;

/**
 * Sets a Squad TargetHandle value in the entity's state model corresponding to the given key and table row index (0 based).
 */
declare function Entity_SetStateModelEnumTableSquadTarget(entity: EntityID, key: string, tableRowIndex: number, value: SquadID): void;

/**
 * Sets a Vector3f value in the entity's state model corresponding to the given key and table row index (0 based).
 */
declare function Entity_SetStateModelEnumTableVector3f(entity: EntityID, key: string, tableRowIndex: number, value: Position): void;

/**
 * Sets a float value in the entity's state model corresponding to the given key.
 */
declare function Entity_SetStateModelFloat(entity: EntityID, key: string, value: number): void;

/**
 * Sets an integer value in the entity's state model corresponding to the given key.
 */
declare function Entity_SetStateModelInt(entity: EntityID, key: string, value: number): void;

/**
 * Sets a Player TargetHandle value in the entity's state model corresponding to the given key.
 */
declare function Entity_SetStateModelPlayerTarget(entity: EntityID, key: string, value: PlayerID): void;

/**
 * Sets a Squad TargetHandle value in the entity's state model corresponding to the given key.
 */
declare function Entity_SetStateModelSquadTarget(entity: EntityID, key: string, value: SquadID): void;

/**
 * Sets a Vector3f value in the entity's state model corresponding to the given key.
 */
declare function Entity_SetStateModelVector3f(entity: EntityID, key: string, value: Position): void;

/**
 * Sets a flag that tells a building to keep burning while invulnerable (for atmosphere).
 */
declare function Entity_SetStayBurningWhileInvulnerable(entity: EntityID, shouldStayBurning: boolean): void;

/**
 * Sets a strategic point to neutral (not owned by any team)
 */
declare function Entity_SetStrategicPointNeutral(entity: EntityID): void;

/**
 * Sets whether a strategic point's reticule is visible
 */
declare function Entity_SetStrategicPointReticuleVisible(entity: EntityID, visible: boolean): void;

/**
 * Set the allowable methods of targeting this entity
 * Targeting_Automatic: allow auto and manual targeting Targeting_Manual: only allow manual targeting Targeting_None: do not allow targeting
 */
declare function Entity_SetTargetingType(entity: EntityID, type: TargetingType): void;

/**
 * Makes an entity neutral
 */
declare function Entity_SetWorldOwned(entity: EntityID): void;

/**
 * Shows/hides the entity in the simulation
 */
declare function Entity_SimHide(entity: EntityID, hide: boolean): void;

/**
 * Snaps the entity to the grid and ground.
 */
declare function Entity_SnapToGridAndGround(entity: EntityID, interpolate: boolean): any;

/**
 * Spawn the entity at its current position
 */
declare function Entity_Spawn(entity: EntityID): void;

/**
 * Spawn the entity at its current position without pathfinding and collision
 */
declare function Entity_SpawnDoNotAddPathfindingAndCollision(entity: EntityID): any;

/**
 * Spawn the entity at a given position
 */
declare function Entity_SpawnToward(entity: EntityID, pos: Position, toward: Position, spawnType: string): any;

/**
 * Abruptly stops an active ability
 */
declare function Entity_StopAbility(entity: EntityID, ability: AbilityBlueprint, bEarlyExit: boolean): void;

/**
 * Puts out the fire on an object (also works on buildings)
 */
declare function Entity_StopFire(entity: EntityID): any;

/**
 * Suggests a posture to an entity, lasting the passed duration
 * Posture of 0 is prone, 1 is kneel/crouch, and 2 is standing.  Duration is in seconds, negative means indefinate.
 */
declare function Entity_SuggestPosture(entity: EntityID, posture: number, duration: number): void;

/**
 * Returns whether this entity is set up to have demolitions placed on it
 */
declare function Entity_SupportsDemolition(entity: EntityID): boolean;

/**
 * Tags the entity to be used for debugging
 */
declare function Entity_TagDebug(entity: EntityID): void;

/**
 * Hides or shows an entity visually.
 */
declare function Entity_VisHide(pEntity: EntityID, bHide: boolean): void;

/**
 * Warps an entity immediately to a new position
 */
declare function Entity_WarpToPos(entity: EntityID, pos: Position): void;

/**
 * Checks if the given position has an associated district.
 */
declare function Misc_DoesPositionHaveAssociatedDistrict(pos: Position): any;

/**
 * Do weapon hit effect on the ground
 * WeaponID is the property bag group id; if penetrated is set to false, deflection effect would be played instead
 */
declare function Misc_DoWeaponHitEffectOnPosition(pos: Position, weaponPBG: WeaponBlueprint, penetrated: boolean): void;

/**
 * Find deposits within the specified range of a squad
 */
declare function Misc_FindDepositsCloseToSquad(group: EGroupID, squad: SquadID, searchRange: number): any;

/**
 * Finds resource deposits of given type within the specified range of a position, that can be collected by the provided gathererEBP
 * Returns an egroup of resource deposits named "eg_Misc_FindNearbyDepositOfType_result", sorted by proximity to the position
 */
declare function Misc_FindDepositsOfTypeCloseToPosition(resourceType: number, gathererEBP: EBP, position: Position, searchRange: number): any;

/**
 * Return the entity generating the district containing the given position. Use with Misc_DoesPositionHaveAssociatedDistrict
 */
declare function Misc_GetDistrictGeneratorFromPosition(pos: Position): any;

/**
 * Return the district value of the district containing the given position. Use with Misc_DoesPositionHaveAssociatedDistrict
 */
declare function Misc_GetDistrictValueFromPosition(pos: Position): any;

/**
 * Updates the slotted spline system to handle the fact that the entities in the given EGroup have done a blueprint conversion. This must be called after converting slotted spline entities from script.
 */
declare function Misc_UpdateSlottedSplinesContainingEGroupAfterBlueprintConversion(egroup: EGroupID): any;

/**
 * Creates a Callback Event that triggers when ALL of the specified events are triggered.
 */
declare function Event_CreateAND(callback: any, data: any, events: any, delay: number): any;

/**
 * Callback given callback function with data, when the certain objects die.
 */
declare function Event_Death(callback: any, group: EGroupID, selection: ALL_UNITS | ANY_MEMBER | ANY_SQUAD, repeat: boolean, requireAllEntitiesDead: boolean, data: any): any;

/**
 * Callback given callback function with data, when any squad in the encounter can see any squad owned by the player
 */
declare function Event_EncounterCanSeePlayerSquads(callback: any, data: any, encounter: SGroupID, player: PlayerID, delay: number): any;

/**
 * Callback given callback function with data when target enters range
 */
declare function Event_EnterProximity(callback: any, data: any, target: ConstTargetHandle, arequireAll: boolean, location: MARKER, range: number, repeat: boolean, triggerOnEnter: boolean): any;

/**
 * Callback given callback function with data when target exits range
 */
declare function Event_ExitProximity(callback: any, data: any, target: ConstTargetHandle, arequireAll: boolean, location: MARKER, range: number, repeat: boolean, triggerOnEnter: boolean): any;

/**
 * Callback given callback function with data, when the amount of objects matches the requested conditions - Note: Does not count team weapons
 */
declare function Event_GroupCount(callback: any, data: any, SGroup: EGroupID, amount: number, repeat: boolean): any;

/**
 * Callback given callback function with data, when group is dead(empty).
 */
declare function Event_GroupIsDeadOrRetreating(callback: any, data: any, SGroup: EGroupID, delay: number): any;

/**
 * Callback given callback function with data, when the amount of entities left in a group drops below amount.
 */
declare function Event_GroupLeftAlive(callback: any, data: any, SGroup: EGroupID, amount: number, delay: number): any;

/**
 * Callback given callback function with data, when group is doing an attack or is under attack in the last attackTime seconds.
 */
declare function Event_IsEngaged(callback: any, data: any, attackTime: number, delay: number): any;

/**
 * Callback given callback function with data, when group is out of combat  in the last attackTime seconds.
 */
declare function Event_IsOutOfCombat(callback: any, data: any, SGroup: EGroupID, attackTime: number, delay: number): any;

/**
 * Callback when a target element is selected.
 */
declare function Event_IsSelected(callback: any, data: any): any;

/**
 * Callback given callback function with data, when sgroup or egroup are under attack in the last attackTime seconds.
 */
declare function Event_IsUnderAttack(callback: any, data: any, SGroup: SGroupID, EGroup: EGroupID, attackTime: number, player: PlayerID, delay: number): any;

/**
 * Callback given callback function with data, when the given player can see the element.
 */
declare function Event_PlayerCanSeeElement(callback: any, data: any, team: PlayerID, element: SGroupID): any;

/**
 * Callback given callback function with data when target enters location.
 */
declare function Event_Proximity(callback: any, data: any, target: ConstTargetHandle, location: MARKER, range: number, delay: number): any;

/**
 * Callback given callback function with data, when the amount of members left in a squad matches the requested conditions
 */
declare function Event_SGroupCountMember(callback: any, data: any, group: SGroupID, amount: number, repeat: boolean): any;

/**
 * Callback given callback function with data when target remains in range (called every interval seconds)
 */
declare function Event_WhileInProximity(callback: any, data: any, target: ConstTargetHandle, arequireAll: boolean, location: MARKER, range: number, repeat: boolean, triggerOnEnter: boolean): any;

/**
 * Explores entire map for all players. (Careful where this is used. For example, if used before the first tick, a statetree may change an entity's visual on the first tick, so the ghost's visual will not reflect the entity's.)
 */
declare function FOW_ExploreAll(): any;

/**
 * Reveal FOW except blockers for all players. Does not create ghosts and ghosts will not be present if undone.
 */
declare function FOW_ForceRevealAllUnblockedAreas(): any;

/**
 * Explores entire map for one player. (Careful where this is used. For example, if used before the first tick, a statetree may change an entity's visual on the first tick, so the ghost's visual will not reflect the entity's.)
 */
declare function FOW_PlayerExploreAll(player: PlayerID): any;

/**
 * Reveal FOW for specified player
 */
declare function FOW_PlayerRevealAll(player: PlayerID): any;

/**
 * Reveals a circular area for the given player over a given duration.
 * Pass in a duration of -1 for indefinite duration ( or until unreveal is called on the same position )
 */
declare function FOW_PlayerRevealArea(player: PlayerID, pos: Position, radius: number, durationSecs: number): any;

/**
 * Reveals a SGroup in the Fog of War for a player over a given duration.
 * Pass in a duration of -1 for indefinite duration ( until the squads are dead or UnReveal is called )
 */
declare function FOW_PlayerRevealSGroup(player: PlayerID, group: SGroupID, radius: number, durationSecs: number): any;

/**
 * Unexplores entire map for one player.
 */
declare function FOW_PlayerUnExploreAll(player: PlayerID): any;

/**
 * Use to undo a FOW_RevealAll for specified player
 */
declare function FOW_PlayerUnRevealAll(player: PlayerID): any;

/**
 * UnReveals a circular area that was previously revealed for a given player.
 */
declare function FOW_PlayerUnRevealArea(player: PlayerID, pos: Position): any;

/**
 * UnReveal a SGroup previously revealed to a Player
 */
declare function FOW_PlayerUnRevealSGroup(player: PlayerID, group: SGroupID): any;

/**
 * Reveal FOW for all players
 */
declare function FOW_RevealAll(): void;

/**
 * Reveals a circular area for all alive players over a given duration. YOU SHOULD ONLY CALL THIS ONCE FOR EACH AREA.
 * Pass in a duration of -1 for indefinite duration ( until unreveal is called )
 */
declare function FOW_RevealArea(pos: Position, radius: number, durationSecs: number): void;

/**
 * Reveals an entity groups line of sight(LOS) for all alive players over a given duration. YOU SHOULD ONLY CALL THIS ONCE FOR EACH AREA.
 * Pass in a duration of -1 for indefinite duration ( until the entities are dead )
 */
declare function FOW_RevealEGroup(group: EGroupID, durationSecs: number): void;

/**
 * Reveals an entity group in the FOW for alive players for a duration.
 * Pass in a duration of -1 for an indefinite duration.
 */
declare function FOW_RevealEGroupOnly(group: EGroup, durationSeconds: number): void;

/**
 * Reveals an entities line of sight (LOS) for all alive players over a given duration. YOU SHOULD ONLY CALL THIS ONCE FOR EACH AREA.
 * Pass in a duration of -1 for indefinite duration ( until the entity is dead )
 */
declare function FOW_RevealEntity(entity: EntityID, durationSecs: number): void;

/**
 * Reveals an area the size of a given markers proximity at that markers position for a given amount of time. Pass in a duration of -1 for indefinite duration. YOU SHOULD ONLY CALL THIS ONCE FOR EACH AREA.
 * This function will reveal the FOW for ALL alive players. This does not work with markers with rectangular proximity type
 */
declare function FOW_RevealMarker(marker: MarkerID, duration: number): void;

/**
 * Reveals a squad groups line of sight(LOS) for all alive players over a given duration. YOU SHOULD ONLY CALL THIS ONCE FOR EACH AREA.
 * Pass in a duration of -1 for indefinite duration ( until the squads are dead )
 */
declare function FOW_RevealSGroup(group: SGroupID, durationSecs: number): void;

/**
 * Reveals a squad group in the FOW for alive players for a duration.
 * Pass in a duration of -1 for an indefinite duration.
 */
declare function FOW_RevealSGroupOnly(group: SGROUP, durationSeconds: number): void;

/**
 * Reveals a squads line if sight(LOS) for all alive players over a given duration. YOU SHOULD ONLY CALL THIS ONCE FOR EACH AREA.
 * Pass in a duration of -1 for indefinite duration ( until the entity is dead )
 */
declare function FOW_RevealSquad(squad: SquadID, durationSecs: number): void;

/**
 * Reveals a territory to a player
 */
declare function FOW_RevealTerritory(player: PlayerID, sectorID: number, durationSecs: number, mustOwn: boolean): void;

/**
 * Reveal FOW for all players by disabling rendering of FOW without triggering a FOW in the game simulation
 */
declare function FOW_UIRevealAll(): any;

/**
 * Use to transition from game to RevealAll
 */
declare function FOW_UIRevealAll_Transition(duration: number): any;

/**
 * Use to reveal all Entities in FoW
 */
declare function FOW_UIRevealAllEntities(): any;

/**
 * Use to undo a FOW_UIRevealAll
 */
declare function FOW_UIUnRevealAll(): any;

/**
 * Use to transition into game
 */
declare function FOW_UIUnRevealAll_Transition(duration: number): any;

/**
 * Use to unreveal all Entities in FoW
 */
declare function FOW_UIUnRevealAllEntities(): any;

/**
 * Use to undo a FOW_ForceRevealAllUnblockedAreas.
 */
declare function FOW_UndoForceRevealAllUnblockedAreas(): any;

/**
 * Unexplores entire map for all players
 */
declare function FOW_UnExploreAll(): any;

/**
 * Use to undo a FOW_RevealAll
 */
declare function FOW_UnRevealAll(): void;

/**
 * UnReveals a circular area for all alive players. YOU SHOULD ONLY CALL THIS ONCE FOR EACH AREA.
 */
declare function FOW_UnRevealArea(pos: Position, radius: number): void;

/**
 * Unreveals an area the size of a given markers proximity at that markers position. YOU SHOULD ONLY CALL THIS ONCE FOR EACH AREA.
 * This does not work with markers with rectangular proximity type
 */
declare function FOW_UnRevealMarker(marker: MarkerID): void;

/**
 * Unreveals a territory sector
 */
declare function FOW_UnRevealTerritory(player: PlayerID, sectorID: number): void;

/**
 * Returns a table of egroups NOT in the world builder
 * See Marker_GetTable for more info on format parameter
 */
declare function EGroup_CreateTable(format: string, size: number): any;

/**
 * Returns a table of egroups from the world builder
 * See Marker_GetTable for more info on format parameter
 */
declare function EGroup_GetWBTable(format: string): any;

/**
 * Returns a fixed size table of markers from the world builder.  Markers that do not
 * exist in the WB, will be nil in the table.  This is why we call it 'non-sequential'
 */
declare function Marker_GetNonSequentialTable(format: string, size: number): any;

/**
 * Returns a table of markers from the world builder. Creates as many as it finds
 * mkr_table = Marker_GetTable( 'mkr_%d' ) -- creates a table with 3 markers named 'mkr_1', 'mkr_2', and 'mkr_3' (and so on) from the WB\n\n
 * mkr_table2 = Marker_GetTable( 'mkr_%02d' )  -- creates a table with 3 markers named 'mkr_01', 'mkr_02', 'mkr_03' (and so on) from the WB\n\n
 * mkr_table3 = Marker_GetTable( 'mkr_%03d_patrol' )  -- creates a table with 3 markers named 'mkr_001_patrol', 'mkr_002_patrol' (and so on) from the WB\n\n
 */
declare function Marker_GetTable(format: string): any;

/**
 * Returns a table of sgroups NOT in the world builder
 * See Marker_GetTable for more info on format parameter
 */
declare function SGroup_CreateTable(format: string, size: number): any;

/**
 * Returns a table of sgroups from the world builder
 * See Marker_GetTable for more info on format parameter
 */
declare function SGroup_GetWBTable(format: string): any;

/**
 * Returns all ScarMarkers from the Mission Editor with the given name. If you don't care about the type, pass in an empty string ( "" )
 * The type is defined in the markers list of the mission editor when placing markers.\n
 */
declare function AllMarkersFromName(name: string, type: string): any;

/**
 * Builds a table of MarkerIDs that are named in a sequence. i.e. a name of "spot" will find markers "spot1", "spot2" and so on, up until it looks for a marker that isn't there.
 */
declare function Marker_GetSequence(name: string, type: string): any;

/**
 * Returns the number of ScarMarkers with the given name If you don't care about the type, pass in an empty string ( "" )
 * The type is defined in the markers list of the mission editor when placing markers.
 */
declare function MarkerCountFromName(name: string, type: string): any;

/**
 * Ends an SP scenario with a Victory. Waits for no intel events to be playing before it ends the mission.
 * This will play any endNIS and endMovie specified in the g_missionData table. After this is called, the path is set and any subsequent calls to Mission_Complete() or Mission_Fail() are ignored.
 */
declare function Mission_Complete(): void;

/**
 * Ends an SP scenario with a Failure. Waits for no intel events to be playing before it ends the mission.
 * After this is called, the path is set and any subsequent calls to Mission_Complete() or Mission_Fail() are ignored.
 */
declare function Mission_Fail(): void;

/**
 * Checks if a modifier is enabled on all or any entities in an egroup
 */
declare function Modifier_IsEnabledOnEGroup(egroup: EGroupID, modifier: string, modtype: string, all: boolean, bEnabledByDefault: boolean): void;

/**
 * Set up tables to track modifiers that are applied per resource
 * Remove an applied modifier.
 * The game specific <game_title>/modifiers.scar file should define tables with an entry per resource and pass them as arguments
 * @result
 */
declare function Modifier_Remove(modifier: Modids): void;

/**
 * Removes all SCAR-applied modifiers for a specific EGroup.
 */
declare function Modifier_RemoveAllFromEGroup(egroup: EGroupID): void;

/**
 * Removes all SCAR-applied modifiers for a specific SGroup.
 */
declare function Modifier_RemoveAllFromSGroup(sgroup: SGroupID): void;

/**
 * Modifies the cast time of an ability
 */
declare function Modify_AbilityCastTime(player: PlayerID, ability: AbilityID, scalefactor: number, mathtype?: number): Modids;

/**
 * Modifies the channeling time of an ability
 */
declare function Modify_AbilityChannelingTime(player: PlayerID, ability: AbilityID, scalefactor: number, mathtype?: number): Modids;

/**
 * Modifies the initial delay time of an ability
 */
declare function Modify_AbilityDelayTime(player: PlayerID, ability: AbilityID, scalefactor: number): Modids;

/**
 * Modifies the duration of an ability
 */
declare function Modify_AbilityDurationTime(player: PlayerID, ability: AbilityID, scalefactor: number): Modids;

/**
 * Modifies the manpower cost of an ability
 */
declare function Modify_AbilityManpowerCost(player: PlayerID, ability: AbilityID, scalefactor: number, mathtype?: number): Modids;

/**
 * Modifies the maximum casting range of an ability. NOTE: it assumes that the actions that the ability executes can also handle the modified range
 */
declare function Modify_AbilityMaxCastRange(player: PlayerID, ability: AbilityID, scalefactor: number): Modids;

/**
 * Modifies the minimum casting range of an ability. NOTE: it assumes that the actions that the ability executes can also handle the modified range
 */
declare function Modify_AbilityMinCastRange(player: PlayerID, ability: AbilityID, scalefactor: number): Modids;

/**
 * Modifies the munitions cost of an ability
 */
declare function Modify_AbilityMunitionsCost(player: PlayerID, ability: AbilityID, scalefactor: number, mathtype?: number): Modids;

/**
 * Modifies the recharge time of an ability
 */
declare function Modify_AbilityRechargeTime(player: PlayerID | EntityID | SquadID, ability: AbilityID, scalefactor: number, mathtype?: number): Modids;

/**
 * Modifies a squad or entity's armor
 */
declare function Modify_Armor(group: SGroupID | EGroupID, scalefactor: number, exclusive?: boolean): Modids;

/**
 * Modifies the capture time of all strategic points in an EGroup.
 */
declare function Modify_CaptureTime(egroup: EGroupID, scalefactor: number): Modids;

/**
 * Modifies the capture time of all cover objects in an EGroup.  Higher = less time to capture.
 */
declare function Modify_CoverCaptureTime(egroup: EGroupID, scalefactor: number): Modids;

/**
 * Enable or disable hold (garrisoning) for an egroup or sgroup
 */
declare function Modify_DisableHold(group: EGroupID, disable: boolean): Modids;

/**
 * Enable or disable camoflage for an egroup or sgroup
 */
declare function Modify_EnableCamoflage(group: EGroupID, disable: boolean): Modids;

/**
 * Modifies the time taken to build a particular EBP. This only affects the given player.
 */
declare function Modify_EntityBuildTime(playerId: PlayerID, ebp: string, scalefactor: number): Modids;

/**
 * Modifies an entity's construction rate
 * Should only be used on entities, NOT squads
 */
declare function Modify_EntityConstructionRate(group: EGroupID, Factor: number, Usage: MUT): any;

/**
 * Modifies the cost of an entity for a particular player.
 */
declare function Modify_EntityCost(player: PlayerID, blueprint: string, resourcetype: number, addition: number): Modids;

/**
 * Modifies an entity's health regen
 * Should only be used on entities, NOT squads
 */
declare function Modify_EntityHealthRegen(group: EGroupID, Factor: number, Usage: MUT): any;

/**
 * Modifies an entity's max health
 * Should only be used on entities, NOT squads
 */
declare function Modify_EntityMaxHealth(group: EGroupID, Factor: number, Usage: MUT): any;

/**
 * Modifies an entity's selection name
 * Should only be used on entities, NOT squads
 */
declare function Modify_EntitySelectionName(group: EGroupID, value: number, Usage: MUT): Modids;

/**
 * Modifies the veterancy experience received by a player
 */
declare function Modify_PlayerExperienceReceived(player: PlayerID, factor: number): Modids;

/**
 * Modifies the production rate of a player.
 */
declare function Modify_PlayerProductionRate(sgroup: PlayerID, scalefactor: number): Modids;

/**
 * Modifies a player's resource cap. Possible math types are MUT_Multiplication, MUT_Addition.
 */
declare function Modify_PlayerResourceCap(playerId: PlayerID, resourceType: number, scalefactor: number, mathtype?: number): Modids;

/**
 * Modifies a player's incoming resource rate. Possible math types are MUT_Multiplication, MUT_Addition.
 */
declare function Modify_PlayerResourceRate(playerId: PlayerID, resourceType: number, scalefactor: number, mathtype?: number): Modids;

/**
 * Modifies the sight radius for a player.
 */
declare function Modify_PlayerSightRadius(player: PlayerID, scalefactor: number): Modids;

/**
 * Modifies the upkeep for a player's resource.  Possible math types are MUT_Multiplication, MUT_Addition.
 */
declare function Modify_PlayerUpkeep(playerId: PlayerID, resourceType: number, scalefactor: number, mathtype?: number): Modids;

/**
 * Modifies the production rate of all factories in an EGroup
 */
declare function Modify_ProductionRate(sgroup: EGroupID, scalefactor: number): Modids;

/**
 * Modifies the build time for a particular upgrade. This only affects the given player.
 */
declare function Modify_ProductionSpeed(entity: EntityID, scalefactor: number): Modids;

/**
 * Modifies a projectile's delay_detonate_time.
 */
declare function Modify_ProjectileDelayTime(player: PlayerID, entityBP: PBG, factor: number): Modids;

/**
 * Modifies the chance of a squad/entity being hit
 */
declare function Modify_ReceivedAccuracy(group: SGroupID | EGroupID, scalefactor: number, exclusive?: boolean): Modids;

/**
 * Modifies the damage a squad/entity receives.
 */
declare function Modify_ReceivedDamage(group: SGroupID | EGroupID, scalefactor: number, exclusive?: boolean): Modids;

/**
 * Modifies the rate at which a squad gets suppressed
 */
declare function Modify_ReceivedSuppression(sgroup: SGroupID, scalefactor: number): Modids;

/**
 * Sets the cost of an upgrade. This only affects the given player
 */
declare function Modify_SetUpgradeCost(playerId: PlayerID, upgrade: UpgradeID, resourceType: number, newCost: number): Modids;

/**
 * Modifies the sight radius for an egroup or an sgroup.
 */
declare function Modify_SightRadius(group: SGroupID | EGroupID, scalefactor: number): Modids;

/**
 * Modifies the availability limit of a squad type for any given player
 */
declare function Modify_SquadAvailability(player: PlayerID, blueprint: string, addition: number): Modids;

/**
 * Modifies a squad's rate at which it will capture a strategic point.
 */
declare function Modify_SquadCaptureRate(group: SGroupID, scalefactor: number): Modids;

/**
 * Modifies the cost of an squad for a particular player.
 */
declare function Modify_SquadCost(player: PlayerID, blueprint: string, resourcetype: number, addition: number): Modids;

/**
 * Modifies a squad's health regen.
 */
declare function Modify_SquadHealthRegen(group: SGroupID, Factor: number, Usage: MUT, OPT_exclusive?: boolean): any;

/**
 * Enable or Disable a squad's vulnerability to knock back
 */
declare function Modify_SquadInvulnerableToKnockback(group: SGroupID, disable: boolean): Modids;

/**
 * Modifies a squad's max health
 * Should only be used on squads
 */
declare function Modify_SquadMaxHealth(group: SGroupID, Factor: number, Usage: MUT): any;

/**
 * Modifies the sight radius of a squad type for any given player
 */
declare function Modify_SquadTypeSightRadius(player: PlayerID, blueprint: string, scalefactor: number): Modids;

/**
 * Modifies the target priority of a squad or entity group from the attacker. The value is an addition
 */
declare function Modify_TargetPriority(group: SGroupID | EGroupID, addition: number): Modids;

/**
 * Modifies a sync weapon only.
 * The hardpoint defaults to "hardpoint_01"
 */
declare function Modify_TeamWeapon(group: SGroupID | EGroupID, modifier: string, scalefactor: number, hardpoint?: string): Modids;

/**
 * Modifies the territory radius for an egroup or an sgroup.
 */
declare function Modify_TerritoryRadius(group: EGroupID, scalefactor: number): Modids;

/**
 * Modifies the maximum speed for a vehicle. This has no effect on infantry.
 */
declare function Modify_UnitSpeed(sgroup: SGroupID, scalefactor: number): Modids;

/**
 * Modifies the Veterancy Experience value of the target SGroup, EGroup, Entity, or Squad. Mathtype is Multiplication by default
 */
declare function Modify_UnitVeterancyValue(group: SGROUP | EGroup, scalefactor: number, mathtype?: number): ModID;

/**
 * Modifies the build time for a particular upgrade. This only affects the given player.
 */
declare function Modify_UpgradeBuildTime(playerId: PlayerID, upgrade: UpgradeID, scalefactor: number): Modids;

/**
 * Modifies the vehicle repair rate of all a player's engineers
 */
declare function Modify_VehicleRepairRate(player: PlayerID, factor: number, engineer_entity_blueprint: string): Modids;

/**
 * Modifies the vehicle rotation speed
 */
declare function Modify_VehicleRotationSpeed(group: EGroupID | SGroupID, factor: number): Modids;

/**
 * Modifies the turret rotation speed of a vehicle squad
 * The hardpoint should be specified as a string - i.e. "hardpoint_01"
 */
declare function Modify_VehicleTurretRotationSpeed(group: SGroupID | EGroupID, hardpoint: string, scalefactor: number): Modids;

/**
 * Increases the received accuracy, penetration, and damage on a squad by the scalefactor.  For example, a scalefactor of 2 means that the squad gets 2x the received accuracy, 2x the received penetration, and 2x the received damage.
 */
declare function Modify_Vulnerability(group: EGroupID | SGroupID, scalefactor: number): Modids;

/**
 * Modifies a squad's weapon accuracy.
 * The hardpoint should be specified as a string - i.e. "hardpoint_01"
 */
declare function Modify_WeaponAccuracy(group: SGroupID | EGroupID, hardpoint: string, scalefactor: number): Modids;

/**
 * Modifies a squad's weapon burst length (time).
 * The hardpoint should be specified as a string - i.e. "hardpoint_01"
 */
declare function Modify_WeaponBurstLength(group: SGroupID | EGroupID, hardpoint: string, scalefactor: number): Modids;

/**
 * Modifies a squad's weapon rate of fire.
 * The hardpoint should be specified as a string - i.e. "hardpoint_01"
 */
declare function Modify_WeaponBurstRateOfFire(group: SGroupID | EGroupID, hardpoint: string, scalefactor: number): Modids;

/**
 * Modifies a squad's weapon cooldown time.
 * The hardpoint should be specified as a string - i.e. "hardpoint_01"
 */
declare function Modify_WeaponCooldown(group: SGroupID | EGroupID, hardpoint: string, scalefactor: number): Modids;

/**
 * Modifies a squad's weapon damage.
 * The hardpoint should be specified as a string - i.e. "hardpoint_01"
 */
declare function Modify_WeaponDamage(group: SGroupID | EGroupID, hardpoint: string, scalefactor: number): Modids;

/**
 * Enables or disables a weapon hardpoint
 * The hardpoint should be specified as a string - i.e. "hardpoint_01"
 */
declare function Modify_WeaponEnabled(group: SGroupID | EGroupID, hardpoint: string, enabled: boolean): Modids;

/**
 * Modifies a squad's weapon penetration. Does not work on artillery (mortar, nebelwerfer, etc.)
 * The hardpoint should be specified as a string - i.e. "hardpoint_01"
 */
declare function Modify_WeaponPenetration(group: SGroupID | EGroupID, hardpoint: string, scalefactor: number): Modids;

/**
 * Modifies a squad's weapon range. Does not work on artillery (mortar, nebelwerfer, etc.)
 * The hardpoint should be specified as a string - i.e. "hardpoint_01"
 */
declare function Modify_WeaponRange(group: SGroupID | EGroupID, hardpoint: string, scalefactor: number): Modids;

/**
 * Modifies a squad's weapon reload time.
 * The hardpoint should be specified as a string - i.e. "hardpoint_01"
 */
declare function Modify_WeaponReload(group: SGroupID | EGroupID, hardpoint: string, scalefactor: number): Modids;

/**
 * Modifies a squad's weapon scatter.
 * The hardpoint should be specified as a string - i.e. "hardpoint_01"
 */
declare function Modify_WeaponScatter(group: SGroupID | EGroupID, hardpoint: string, scalefactor: number): Modids;

/**
 * Modifies a squad's weapon suppression. Does not work on artillery (mortar, nebelwerfer, etc.)
 * The hardpoint should be specified as a string - i.e. "hardpoint_01"
 */
declare function Modify_WeaponSuppression(group: SGroupID | EGroupID, hardpoint: string, scalefactor: number): Modids;

/**
 * Gets the 'default music movement'.  This is the current default that can always be called
 */
declare function Music_GetDefaultMovement(): string;

/**
 * Translates the string music event level into the engine designated intensity value
 */
declare function Music_GetMusicEventIntensityLevel(music: string): any;

/**
 * Lock the music's intensity to a given level, for a given length of time (if you omit duration, the music plays indefinately until Music_UnlockIntensity is called)
 * You can chain several level/duration pairs together to create a playlist of sorts. To do this, just use more parameters: Music_LockIntensity(level1, duration1, level2, duration2, ...)
 */
declare function Music_LockIntensity(level: number, OPT_duration?: number): any;

/**
 * Plays the music end outro segement and stop music after for about 50 secs.
 */
declare function Music_Outro_End(): any;

/**
 * Play Music at the 'default music movement'
 * Set current music movement with Music_SetDefaultMovement
 */
declare function Music_PlayDefaultMovement(): any;

/**
 * Plays a specific movement immediately - useful for things like NISes
 */
declare function Music_PlayMovement(movement: string): any;

/**
 * Plays a stinger audio event.  The wwise event should handle ducking, ending, etc.
 */
declare function Music_PlayStinger(Stinger: string): any;

/**
 * Plays the music short end outro segement after combat finishes and goes to silence for around 20 secs.
 */
declare function Music_PostCombat_End(): any;

/**
 * This restart the music after objective after certain
 */
declare function Music_RestartAfterObjective(duration: number): any;

/**
 * Sets the 'default music movement'.  This is the current default that can always be called
 */
declare function Music_SetDefaultMovement(newMovement: string): void;

/**
 * This restart the music after objective after certain
 */
declare function Music_SetIntensityAfterObjective(delay: number, level: number, duration: number): void;

/**
 * Stops all music currently playing
 */
declare function Music_Stop(): any;

/**
 * This stops music after objective and make sound go to silence
 */
declare function Music_StopAfterObjective(delay: number): any;

/**
 * Unlock the music's intensity and revert to gameplay-driven
 */
declare function Music_UnlockIntensity(): any;

/**
 * ONLY USE THIS INSIDE AN NIS EVENT. Wait until the NIS camera hits its counterpart checkpoint.
 * Makes the script pause and wait until the camera portion hits "nis_pause()" (the counterpart checkpoint) on it's timeline. With these two functions, you can have the event script and camera sync up - i.e. make one wait for the other - at various points in the NIS and avoid all sorts of timing issues.
 */
declare function NIS_CameraCheckpoint(): any;

/**
 * ONLY USE THIS INSIDE AN NIS EVENT. Transition from the NIS back to the game.
 * You can safely do any cleanup after calling this, and it will occur once the screen is black.
 */
declare function NIS_END(details?: any): void;

/**
 * Used to create a fade cut in an NIS
 * Call this in your NIS Event.  This will require an nis_pause() frame in your NIS file in order to work.
 */
declare function NIS_FadeCameraCut(): any;

/**
 * ONLY USE THIS INSIDE AN NIS EVENT. Transition from the game into an NIS preamble - a quick section before the NIS proper. A preamble is totally optional, if you want to go straight into an NIS, skip this and use NIS_START instead.
 * See NIS_START for information about the details table.
 */
declare function NIS_PREAMBLE(details: any): void;

/**
 * ONLY USE THIS INSIDE AN NIS EVENT. Transition from the game (or a preamble) into an NIS.
 * You can do any setup after calling this, as that will occur once the screen has faded to black on the transition in. The game will fade back in to the NIS over the next half second or so (apart from opening cinematics, which is two seconds), so you may want to delay your first action accordingly. The details table should include, at the very least, the following items: style (NIS_OPENING, NIS_MID, or NIS_CLOSING), revealFOW (a Boolean). If you included details in a preamble, you don't need to supply them again here.
 */
declare function NIS_START(details?: any): void;

/**
 * ONLY USE THIS INSIDE AN NIS EVENT with an NIS camera. Starts the NIS camera drifting.
 * "Drifting" moves the camera around in the shape of an infinity symbol, so it doesn't look quite so static.
 */
declare function NIS_StartDrift(totalTime?: number, driftScale?: number): void;

/**
 * ONLY USE THIS INSIDE AN NIS EVENT with an NIS camera. Stops the NIS camera drifting.
 * "Drifting" moves the camera around in the shape of an infinity symbol, so it doesn't look quite so static.
 */
declare function NIS_StopDrift(): void;

/**
 * Stores the current camera position as the NIS's end_camera position.
 * Useful if you want the camera to always end where the player was last looking. If it does not return a position, nothing will be stored.
 */
declare function NIS_StoreCurrentCameraPos(): any;

/**
 * Adds a map highlight around a specific point
 * AreaType is AT_CIRCLE (the default) or AT_SQUARE. Color is a table with three values for red, green and blue - i.e. {255, 0, 0}.
 */
declare function Objective_AddAreaHighlight(objTable: any, pos: MARKER | Position | Group, areatype?: AreaType, scale?: number, color?: any, alpha?: number): ElementID;

/**
 * Adds a map highlight around a specific point
 * AreaType is AT_CIRCLE (the default) or AT_SQUARE. Color is a table with three values for red, green and blue - i.e. {255, 0, 0}.
 */
declare function Objective_AddAreaHighlight(objTable: any, pos: MARKER | Position | Group, areatype?: AreaType, scale?: number, color?: any, alpha?: number): ElementID;

/**
 * Adds a visual splat on the ground in the world around a certain position, returning the ID
 * The reticule blueprint (the circle on the ground) and the hintpoint template (the arrow) are by defualt taken from the objective type, but you can override them or set them to false to turn that element off.
 */
declare function Objective_AddGroundReticule(objTable: any, position: MARKER | Position, size?: number, reticuleBlueprint?: BP, hintpointTemplate?: string): ReticuleID;

/**
 * Adds a visual splat on the ground in the world around a certain position, returning the ID
 * The reticule blueprint (the circle on the ground) and the hintpoint template (the arrow) are by defualt taken from the objective type, but you can override them or set them to false to turn that element off.
 */
declare function Objective_AddGroundReticule(objTable: any, position: MARKER | Position, size?: number, reticuleBlueprint?: BP, hintpointTemplate?: string): ReticuleID;

/**
 * Adds a Healthbar tied to a squad or entity at a location.  Will update the health bar as the unit's health fluctuates.  Can be removed with Objective_RemoveHealthBar or completing/failing the objective
 * If you want to use one of the "global" progress bars (if your project supports them), supply the relevant barIndex value and text string to show alongside it.
 */
declare function Objective_AddHealthBar(objTable: any, group: Squad | SGROUP | EntityID | EGroup, onlyWhenDamaged?: boolean, barIndex?: number, text?: string | LocID): ElementID;

/**
 * Adds a Healthbar tied to a squad or entity at a location.  Will update the health bar as the unit's health fluctuates.  Can be removed with Objective_RemoveHealthBar or completing/failing the objective
 * If you want to use one of the "global" progress bars (if your project supports them), supply the relevant barIndex value and text string to show alongside it.
 */
declare function Objective_AddHealthBar(objTable: any, group: Squad | SGROUP | EntityID | EGroup, onlyWhenDamaged?: boolean, barIndex?: number, text?: string | LocID): ElementID;

/**
 * Adds a tactical map ping to an objective
 */
declare function Objective_AddPing(objectiveTable: any, pos: Position): PingID;

/**
 * Adds a tactical map ping to an objective
 */
declare function Objective_AddPing(objectiveTable: any, pos: Position): PingID;

/**
 * Adds a Timer bar for objective timers, which is automatically updated. The bar can be removed with Objective_RemoveTimerBar or by completing/failing the objective.
 * Requires a timer to have been started with Objective_StartTimer to work. If you want to use one of the "global" progress bars (if your project supports them), supply the relevant barIndex value and text string to show alongside it.
 */
declare function Objective_AddTimerBar(objTable: any, barIndex?: number, text?: string | LocID): ElementID;

/**
 * Adds a Timer bar for objective timers, which is automatically updated. The bar can be removed with Objective_RemoveTimerBar or by completing/failing the objective.
 * Requires a timer to have been started with Objective_StartTimer to work. If you want to use one of the "global" progress bars (if your project supports them), supply the relevant barIndex value and text string to show alongside it.
 */
declare function Objective_AddTimerBar(objTable: any, barIndex?: number, text?: string | LocID): ElementID;

/**
 * Adds multiple UI elements on one position. 'pos' can be group/entity/squad/marker. worldArrow adds a 3D arrow which points to the thing in the world. hintpointText adds a hint point that appears on the thing when moused over. If you're adding an arrow or a hintpoint, this thing will be among those potentially pointed to by the 2D HUD arrow. objectiveArrowOffset is an offset applied to the arrow's position (you can specify a height offset or a 3D position offset).
 */
declare function Objective_AddUIElements(objTable: any, pos: Position, ping?: boolean, hintpointText?: string, worldArrow?: boolean, objectiveArrowOffset?: number | Position, objectiveArrowFacing?: EntityID | Squad | Position, actionType?: HintPointActionType, iconName?: string, templateName?: string): ElementID;

/**
 * Adds multiple UI elements on one position. 'pos' can be group/entity/squad/marker. worldArrow adds a 3D arrow which points to the thing in the world. hintpointText adds a hint point that appears on the thing when moused over. If you're adding an arrow or a hintpoint, this thing will be among those potentially pointed to by the 2D HUD arrow. objectiveArrowOffset is an offset applied to the arrow's position (you can specify a height offset or a 3D position offset).
 */
declare function Objective_AddUIElements(objTable: any, pos: Position, ping?: boolean, hintpointText?: string, worldArrow?: boolean, objectiveArrowOffset?: number | Position, objectiveArrowFacing?: EntityID | Squad | Position, actionType?: HintPointActionType, iconName?: string, templateName?: string): ElementID;

/**
 * Returns whether all primary objectives have been completed.
 */
declare function Objective_AreAllPrimaryObjectivesComplete(): boolean;

/**
 * Returns whether all primary objectives have been completed.
 */
declare function Objective_AreAllPrimaryObjectivesComplete(): boolean;

/**
 * Returns whether ALL or ANY sub-objectives of the given objective are complete
 */
declare function Objective_AreSubObjectivesComplete(objTable: any, all: boolean): boolean;

/**
 * Returns whether ALL or ANY sub-objectives of the given objective are complete
 */
declare function Objective_AreSubObjectivesComplete(objTable: any, all: boolean): boolean;

/**
 * Returns whether ALL or ANY sub-objectives of the given objective are expired
 */
declare function Objective_AreSubObjectivesExpired(objTable: any, all: boolean): boolean;

/**
 * Returns whether ALL or ANY sub-objectives of the given objective are failed
 */
declare function Objective_AreSubObjectivesFailed(objTable: any, all: boolean): boolean;

/**
 * Returns whether ALL or ANY sub-objectives of the given objective are failed
 */
declare function Objective_AreSubObjectivesFailed(objTable: any, all: boolean): boolean;

/**
 * Bring attention to some UI elements by blinking them. This causes the hintpoint and the off-screen arrow to blink, but leaves the minimap ping and other elements constant.
 */
declare function Objective_BlinkUIElements(objTable: any, elementID: number): void;

/**
 * Bring attention to some UI elements by blinking them. This causes the hintpoint and the off-screen arrow to blink, but leaves the minimap ping and other elements constant.
 */
declare function Objective_BlinkUIElements(objTable: any, elementID: number): void;

/**
 * Completes an objective and removes it from the list (unless it is a sub-objective, in which case it is marked as complete but stays visible until the parent objective is finished)
 * Automatically removes any elements added with Objective_AddUIElements(). The showTitle and playIntel flags let you control whether the titlecard and Intel_Complete event are played (default: true).
 */
declare function Objective_Complete(objTable: any, showTitle?: boolean, playIntel?: boolean): void;

/**
 * Completes an objective and removes it from the list (unless it is a sub-objective, in which case it is marked as complete but stays visible until the parent objective is finished)
 * Automatically removes any elements added with Objective_AddUIElements(). The showTitle and playIntel flags let you control whether the titlecard and Intel_Complete event are played (default: true).
 */
declare function Objective_Complete(objTable: any, showTitle?: boolean, playIntel?: boolean): void;

/**
 * Expires an objective and removes it from the list (unless it is a sub-objective, in which case it is marked as expired but stays visible until the parent objective is finished)
 * Automatically removes any elements added with Objective_AddUIElements(). The showTitle and playIntel flags let you control whether the titlecard and Intel_Expire event are played (default: true).
 */
declare function Objective_Expire(objTable: any, showTitle?: boolean, playIntel?: boolean): void;

/**
 * Fails an objective and removes it from the list (unless it is a sub-objective, in which case it is marked as failed but stays visible until the parent objective is finished)
 * Automatically removes any elements added with Objective_AddUIElements(). The showTitle and playIntel flags let you control whether the titlecard and Intel_Fail event are played (default: true).
 */
declare function Objective_Fail(objTable: any, showTitle?: boolean, playIntel?: boolean): void;

/**
 * Fails an objective and removes it from the list (unless it is a sub-objective, in which case it is marked as failed but stays visible until the parent objective is finished)
 * Automatically removes any elements added with Objective_AddUIElements(). The showTitle and playIntel flags let you control whether the titlecard and Intel_Fail event are played (default: true).
 */
declare function Objective_Fail(objTable: any, showTitle?: boolean, playIntel?: boolean): void;

/**
 * Returns the current count associated with this objective.
 */
declare function Objective_GetCounter(objTable: any): number;

/**
 * Returns the current count associated with this objective.
 */
declare function Objective_GetCounter(objTable: any): number;

/**
 * Returns a table of all sub-objectives of the given objective
 */
declare function Objective_GetSubObjectives(objTable: any): any;

/**
 * Returns a table of all sub-objectives of the given objective
 */
declare function Objective_GetSubObjectives(objTable: any): any;

/**
 * Returns the amount of seconds on the timer (time remaining or time elapsed, based on the type of timer used)
 */
declare function Objective_GetTimerSeconds(objTable: any): number;

/**
 * Returns the amount of seconds on the timer (time remaining or time elapsed, based on the type of timer used)
 */
declare function Objective_GetTimerSeconds(objTable: any): number;

/**
 * Increases the counter that is associated with this objective in the UI. You can provide an amount to increase by.
 */
declare function Objective_IncreaseCounter(objTable: any, amount?: number): void;

/**
 * Increases the counter that is associated with this objective in the UI. You can provide an amount to increase by.
 */
declare function Objective_IncreaseCounter(objTable: any, amount?: number): void;

/**
 * Returns whether an objective is complete
 */
declare function Objective_IsComplete(objTable: any): boolean;

/**
 * Returns whether an objective is complete
 */
declare function Objective_IsComplete(objTable: any): boolean;

/**
 * Returns true if a counter has been set for this objective
 */
declare function Objective_IsCounterSet(objTable: any): boolean;

/**
 * Returns true if a counter has been set for this objective
 */
declare function Objective_IsCounterSet(objTable: any): boolean;

/**
 * Returns whether an objective is expired
 */
declare function Objective_IsExpired(objTable: any): boolean;

/**
 * Returns whether an objective is failed
 */
declare function Objective_IsFailed(objTable: any): boolean;

/**
 * Returns whether an objective is failed
 */
declare function Objective_IsFailed(objTable: any): boolean;

/**
 * Returns whether an objective has been started. Completed and failed / expired objectives will also return true.
 */
declare function Objective_IsStarted(objTable: any): boolean;

/**
 * Returns whether an objective has been started. Completed and failed / expired objectives will also return true.
 */
declare function Objective_IsStarted(objTable: any): boolean;

/**
 * Returns true if a timer has been set for this objective
 */
declare function Objective_IsTimerSet(objTable: any): boolean;

/**
 * Returns true if a timer has been set for this objective
 */
declare function Objective_IsTimerSet(objTable: any): boolean;

/**
 * Returns whether an objective is visible or not.
 */
declare function Objective_IsVisible(objTable: any): boolean;

/**
 * Returns whether an objective is visible or not.
 */
declare function Objective_IsVisible(objTable: any): boolean;

/**
 * Pauses the objective's timer. If a timer has not been set, it does nothing.
 */
declare function Objective_PauseTimer(objTable: any): void;

/**
 * Pauses the objective's timer. If a timer has not been set, it does nothing.
 */
declare function Objective_PauseTimer(objTable: any): void;

/**
 * 'Registers' an objective. Wrapper function for Objective_Create with a few other features.
 * Includes pings as defined by the objective table created in the main scar file. You can pass in a team or player, so that the objective only applies to it.
 */
declare function Objective_Register(objTable: any, owner?: PlayerID | TeamID): ObjectiveID;

/**
 * 'Registers' an objective. Wrapper function for Objective_Create with a few other features.
 * Includes pings as defined by the objective table created in the main scar file. You can pass in a team or player, so that the objective only applies to it.
 */
declare function Objective_Register(objTable: any, owner?: PlayerID | TeamID): ObjectiveID;

/**
 * Removes an existing ground reticule by its ID
 */
declare function Objective_RemoveGroundReticule(): any;

/**
 * Removes an existing ground reticule by its ID
 */
declare function Objective_RemoveGroundReticule(): any;

/**
 * Removes a health bar monitor
 */
declare function Objective_RemoveHealthBar(objectiveTable: any, healthBarID: Element): void;

/**
 * Removes a health bar monitor
 */
declare function Objective_RemoveHealthBar(objectiveTable: any, healthBarID: Element): void;

/**
 * Removes a tactical map ping from an objective
 */
declare function Objective_RemovePing(objectiveTable: any, PingID: number): void;

/**
 * Removes a tactical map ping from an objective
 */
declare function Objective_RemovePing(objectiveTable: any, PingID: number): void;

/**
 * Remove a progress bar for this objective.
 */
declare function Objective_RemoveProgressBar(objTable: any): any;

/**
 * Removes a timer bar monitor
 */
declare function Objective_RemoveTimerBar(objectiveTable: any, timerBarID: Element): void;

/**
 * Removes a timer bar monitor
 */
declare function Objective_RemoveTimerBar(objectiveTable: any, timerBarID: Element): void;

/**
 * Removes a group of UI elements that were added by Objective_AddUIElements
 */
declare function Objective_RemoveUIElements(objTable: any, elementID: number): void;

/**
 * Removes a group of UI elements that were added by Objective_AddUIElements
 */
declare function Objective_RemoveUIElements(objTable: any, elementID: number): void;

/**
 * Resume the objective's timer. If a timer has not been set, it does nothing.
 */
declare function Objective_ResumeTimer(objTable: any): void;

/**
 * Resume the objective's timer. If a timer has not been set, it does nothing.
 */
declare function Objective_ResumeTimer(objTable: any): void;

/**
 * Sets whether this objective always shows detailed text, the HUD arrow, or the hintpoints. There can only be one objective at a time that forces the HUD arrow to show up. If you pass in 'nil' for hud_arrow then its behavior is not affected.
 */
declare function Objective_SetAlwaysShowDetails(objTable: any, title: boolean, hud_arrow: boolean, hintpoints: boolean): void;

/**
 * Sets whether this objective always shows detailed text, the HUD arrow, or the hintpoints. There can only be one objective at a time that forces the HUD arrow to show up. If you pass in 'nil' for hud_arrow then its behavior is not affected.
 */
declare function Objective_SetAlwaysShowDetails(objTable: any, title: boolean, hud_arrow: boolean, hintpoints: boolean): void;

/**
 * Sets a counter that is associated with this objective in the UI. You can provide a 'maximum' so that it shows up as "1 of 5"
 */
declare function Objective_SetCounter(objTable: any, current: number, maximum?: number): void;

/**
 * Sets a counter that is associated with this objective in the UI. You can provide a 'maximum' so that it shows up as "1 of 5"
 */
declare function Objective_SetCounter(objTable: any, current: number, maximum?: number): void;

/**
 * Show a progress bar for this objective with the given value (which should be a percentage from 0.0 (empty) to 1.0 (full)). This bar can be removed with Objective_RemoveProgressBar or by completing or failing the mission.
 * If you want to use one of the "global" progress bars (if your project supports them), supply the relevant barIndex value and text string to show alongside it.
 */
declare function Objective_SetProgressBar(objTable: any, value: number, OPT_flashing?: boolean, OPT_barIndex?: number, OPT_text?: string): void;

/**
 * Shows or hides an objective from the UI and tactical map
 */
declare function Objective_Show(objective_table: any, on: boolean, ShowTitle: boolean): void;

/**
 * Shows or hides an objective from the UI and tactical map
 */
declare function Objective_Show(objective_table: any, on: boolean, ShowTitle: boolean): void;

/**
 * Shows an objective to the player and activates it
 * Includes pings and FOW as defined by the SetupUI() function. The showTitle and playIntel flags let you control whether the titlecard and Intel_Start event are played (default: true).
 */
declare function Objective_Start(objTable: any, showTitle?: boolean, playIntel?: boolean): void;

/**
 * Shows an objective to the player and activates it
 * Includes pings and FOW as defined by the SetupUI() function. The showTitle and playIntel flags let you control whether the titlecard and Intel_Start event are played (default: true).
 */
declare function Objective_Start(objTable: any, showTitle?: boolean, playIntel?: boolean): void;

/**
 * Starts a timer that is associated with this objective in the UI. Use COUNT_DOWN or COUNT_UP for the 'direction' parameter
 */
declare function Objective_StartTimer(objTable: any, direction: number, initialTime?: number, flashThreshold?: number): void;

/**
 * Starts a timer that is associated with this objective in the UI. Use COUNT_DOWN or COUNT_UP for the 'direction' parameter
 */
declare function Objective_StartTimer(objTable: any, direction: number, initialTime?: number, flashThreshold?: number): void;

/**
 * Stops an objective that is in progress and puts it back into the waiting-to-start state
 * @extdesc
 */
declare function Objective_Stop(objTable: any): void;

/**
 * Stops an objective that is in progress and puts it back into the waiting-to-start state
 * @extdesc
 */
declare function Objective_Stop(objTable: any): void;

/**
 * Stops the objective's counter. If a counter has not been set, it does nothing.
 */
declare function Objective_StopCounter(objTable: any): void;

/**
 * Stops the objective's counter. If a counter has not been set, it does nothing.
 */
declare function Objective_StopCounter(objTable: any): void;

/**
 * Stops the objective's timer. If a timer has not been set, it does nothing.
 */
declare function Objective_StopTimer(objTable: any): void;

/**
 * Stops the objective's timer. If a timer has not been set, it does nothing.
 */
declare function Objective_StopTimer(objTable: any): void;

/**
 * Toggles minimap blips on or off.
 */
declare function Objective_TogglePings(objective_table: any, on: boolean): void;

/**
 * Toggles minimap blips on or off.
 */
declare function Objective_TogglePings(objective_table: any, on: boolean): void;

/**
 * ONLY CALL THIS FROM INSIDE AN OBJECTIVE'S INTEL START / COMPLETE / FAIL EVENT. The objective titlecard will present itself at this point inside the event.
 * If you omit this call, the titlecard will appear at the end of the event by default. You also do not have to wrap this with CTRL and WAIT stuff - it does all of the internally.
 */
declare function Objective_TriggerTitleCard(): any;

/**
 * ONLY CALL THIS FROM INSIDE AN OBJECTIVE'S INTEL START / COMPLETE / FAIL / EXPIRE EVENT. The objective titlecard will present itself at this point inside the event.
 * If you omit this call, the titlecard will appear at the end of the event by default. You also do not have to wrap this with CTRL and WAIT stuff - it does all of the internally.
 */
declare function Objective_TriggerTitleCard(): any;

/**
 * Updates the title and description for the objective. If you only want to set one of them, pass in nil for the other
 * Use the immediate flag to make this change happen immediately, bypassing the queue that objective updates normally sit in (i.e. you're updating the objective's title in the middle of its PreStart() function!)
 */
declare function Objective_UpdateText(objTable: any, new_title: string, new_description: string, showTitle?: boolean, immediate?: boolean): void;

/**
 * Updates the title and description for the objective. If you only want to set one of them, pass in nil for the other
 * Use the immediate flag to make this change happen immediately, bypassing the queue that objective updates normally sit in (i.e. you're updating the objective's title in the middle of its PreStart() function!)
 */
declare function Objective_UpdateText(objTable: any, new_title: string, new_description: string, showTitle?: boolean, immediate?: boolean): void;

/**
 * Add an ability to a player
 */
declare function Player_AddAbility(pPlayer: PlayerID, pAbilityPBG: AbilityBlueprint): void;

/**
 * Specifies a marker where an ability cannot be used. This only applies to abilities where you use the cursor to pick a location in the world (like a location to paradrop at).
 */
declare function Player_AddAbilityLockoutZone(player: PlayerID, abilityPBG: AbilityBlueprint, marker: MarkerID): void;

/**
 * Add resource to player, as opposed to just setting it.
 * Player::AddResourceReason, the resource add reason enum, can be nil, RES_Other, RES_Gift, RES_Resourcing, RES_Refund, RES_RefundOnDeath
 */
declare function Player_AddResource(playerId: PlayerID, resourceType: number, value: number): void;

/**
 * Add resources to player, as opposed to just setting it.
 */
declare function Player_AddResources(playerId: PlayerID, resources: any): void;

/**
 * For the given player, get all of the squads gathered into a squadgroup of your naming.
 * Squads will be added to given squad group.  If the given squad group does not exist it will be created.
 */
declare function Player_AddSquadsToSGroup(playerId: PlayerID, squadgroupName: string): SGroupID;

/**
 * Gives the player new command points to spent on
 */
declare function Player_AddUnspentCommandPoints(player: PlayerID, points: number): void;

/**
 * Returns true if ANY of a players squads are in proximity of a marker
 */
declare function Player_AreSquadsNearMarker(playerid: PlayerID, marker: MarkerID): boolean;

/**
 * Tests if the player can currently use an ability on target entity
 */
declare function Player_CanCastAbilityOnEntity(player: PlayerID, abilityPBG: ScarAbilityPBG, targetEntity: EntityID): any;

/**
 * Tests if the player can currently use an ability on target player
 */
declare function Player_CanCastAbilityOnPlayer(player: PlayerID, abilityPBG: ScarAbilityPBG, targetPlayer: PlayerID): any;

/**
 * Tests if the player can currently use an ability on target position
 */
declare function Player_CanCastAbilityOnPosition(player: PlayerID, abilityPBG: ScarAbilityPBG, targetPosition: Position): any;

/**
 * Tests if the player can currently use an ability on target squad
 */
declare function Player_CanCastAbilityOnSquad(player: PlayerID, abilityPBG: ScarAbilityPBG, targetSquad: SquadID): any;

/**
 * Tests if the player is able to construct a given blueprint
 */
declare function Player_CanConstruct(player: PlayerID, pbg: PropertyBagGroup): any;

/**
 * Returns TRUE if player can construct the specified entity at specified position and facing.  Otherwise, returns FALSE.
 */
declare function Player_CanConstructOnPosition(player: PlayerID, sgroupid: SGROUP, ebp: EntityID, targetid: EGroupID | Position | MARKER, Facing?: Position): boolean;

/**
 * Check if a player of specified group can place an entity at the specified position and facing angle.
 * ebp is the structureBlueprint that must be a valid building that can be constructed by the sgroup.
 */
declare function Player_CanPlaceStructureOnPosition(player: PlayerID, sgroup: SGroupID, ebp: ScarEntityPBG, position: Position, facing: Position): any;

/**
 * Returns true if a player can see ALL or ANY items in an egroup
 */
declare function Player_CanSeeEGroup(playerid: PlayerID, egroup: EGroupID, all: boolean): boolean;

/**
 * Returns true if a player can see a given entity
 */
declare function Player_CanSeeEntity(player: PlayerID, entity: EntityID): boolean;

/**
 * Returns true if a player can see a given position.
 */
declare function Player_CanSeePosition(player: PlayerID, pos: Position): boolean;

/**
 * Returns true if a player can see ALL or ANY items in an sgroup
 */
declare function Player_CanSeeSGroup(playerid: PlayerID, sgroup: SGroupID, all: boolean): boolean;

/**
 * Returns true if a player can see ALL or ANY units in a given squad
 * Set all to true to check that ALL units are visible or set to false to check for ANY.
 */
declare function Player_CanSeeSquad(player: PlayerID, squad: SquadID, all: boolean): boolean;

/**
 * Any of the player's units in the marker area move out of the area, and can be made invulnerable for a bit whilst they do it
 * You can replace the marker with a position and a range - i.e. Player_ClearArea(player, pos, range, invulnerable)
 */
declare function Player_ClearArea(player: PlayerID, marker: MarkerID, invulnerable: boolean): void;

/**
 * Clears item, command and construction menu availabilities for the player.
 */
declare function Player_ClearAvailabilities(player: PlayerID): void;

/**
 * Clears the pop cap override so that modifiers can take effect again
 */
declare function Player_ClearPopCapOverride(player: PlayerID): void;

/**
 * Clears a TargetHandle value in the player's state model corresponding to the given key and table row index (0 based).
 */
declare function Player_ClearStateModelEnumTableTarget(player: Player, key: string, tableRowIndex: number): any;

/**
 * Clears a TargetHandle value in the Player's state model corresponding to the given key.
 */
declare function Player_ClearStateModelTarget(player: Player, key: string): any;

/**
 * Finish upgrade for a player
 */
declare function Player_CompleteUpgrade(pPlayer: PlayerID, pUpgradePBG: UpgradeBlueprint): void;

/**
 * Searches the player list in the world and returns the id of the first enemy player
 */
declare function Player_FindFirstEnemyPlayer(player: PlayerID): PlayerID;

/**
 * Searches the player list in the world and returns the id of the first neutral player
 */
declare function Player_FindFirstNeutralPlayer(player: PlayerID): any;

/**
 * Returns a player given a player id from the ME.  NOTE: this is a temp function, and will be replaced with Player_FromName
 */
declare function Player_FromId(id: number): PlayerID;

/**
 * Returns the modified cost of the given ability including all modifications added by the given player
 */
declare function Player_GetAbilityBPCost(pPlayer: PlayerID, pbg: PropertyBagGroup): any;

/**
 * Returns the type of the given player if it is an AI.  Possible types are: AII_None, AII_Normal, AII_LocalHumanTakeover, AII_RemoteAITakeover, AII_RemoteHumanTakeover (-1 if the player does not exist)
 */
declare function Player_GetAIType(pPlayer: PlayerID): number;

/**
 * Creates/Clears groups that contain all of a player's units and buildings. Defaults - sg_allsquads and eg_allentities
 * Fills an SGroup with all of the given player's squads, and an EGroup with all the player's entities.
 * If you don't provide and groups, then it defaults to using sg_allsquads and eg_allentities.
 */
declare function Player_GetAll(player: PlayerID, sgroup?: SGroupID, egroup?: EGroupID): void;

/**
 * Returns an sim::EntityGroupObs containing all the players entities including ones in squad.
 * This function returns a 'global' entity group with the name '__Player%dEntities', where %d is the player ID.  This means that you should never need to destroy it./n However, if you do destroy it, it will be recreated the next time this function is called.
 */
declare function Player_GetAllEntities(player: Player): any;

/**
 * Returns an EGroup containing all of the players entities(including non_squad entities) of a specific unit_type (as defined by the type_ext on the entity)
 * This function returns a new EGroup to allow tracking of different types.
 */
declare function Player_GetAllEntitiesFromType(player: PlayerID, unitType: string): EGroup;

/**
 * Gather together all of a player's entities that are in proximity to a marker, a position, or within a territory sector into an EGroup. The EGroup is cleared beforehand.
 * You can override a marker's normal proximity by specifying a range.
 */
declare function Player_GetAllEntitiesNearMarker(playerid: PlayerID, egroup: EGroupID, position: MarkerID | Position | SectorID, range?: number): void;

/**
 * Gather together all of a player's squads that are in proximity to a marker, a position, or within a territory sector into an SGroup. The SGroup is cleared beforehand.
 * You can override a marker's normal proximity by specifying a range.
 */
declare function Player_GetAllSquadsNearMarker(player: PlayerID, sgroup: SGroupID, position: MarkerID | Position | SectorID, range?: number): void;

/**
 * Returns the entityID of the first player owned building listed in the table.
 * This only looks at completed buildings
 */
declare function Player_GetBuildingID(player: PlayerID, entitytypes: BlueprintTable | string[]): EntityID;

/**
 * Returns the total number of buildings owned by this player.
 */
declare function Player_GetBuildingsCount(playerId: PlayerID): number;

/**
 * Returns the total number of buildings owned by this player (with exclusions).
 */
declare function Player_GetBuildingsCountExcept(playerId: PlayerID, exceptions: BlueprintTable): number;

/**
 * Returns the number of buildings owned by this player (inclusive).
 */
declare function Player_GetBuildingsCountOnly(playerId: PlayerID, ebplist: BlueprintTable): number;

/**
 * Returns the entityID of the first player owned building listed in the table.
 * This only looks at under construction buildings
 */
declare function Player_GetBuildingUnderConstructionID(player: PlayerID, entitytypes: BlueprintTable | string[]): EntityID;

/**
 * Use capType CT_Personnel to get current squad cap, CT_Vehicle to get current vehicle cap, CT_Medic to get current medic cap
 */
declare function Player_GetCurrentPopulation(player: PlayerID, capType: number): number;

/**
 * Returns the players UI name.
 */
declare function Player_GetDisplayName(player: PlayerID): string;

/**
 * Returns an EntityGroupObs containing all the players entities.
 * This function returns a 'global' entity group with the name '__Player%dEntities', where %d is the player ID.  This means that you should never need to destroy it./n However, if you do destroy it, it will be recreated the next time this function is called.
 */
declare function Player_GetEntities(player: PlayerID): EGroupID;

/**
 * Gets all the player's current entities and loads them into the specified egroup.
 * Gets all the player's current entities and loads them into the specified egroup. The egroup is cleared before being loaded.
 */
declare function Player_GetEntitiesEGroup(player: Player, group: EGroupID): any;

/**
 * Returns an EGroup containing all of the players entities(excluding non_squad entities) of a specific unit_type (as defined by the type_ext on the entity)
 * This function returns a new EGroup to allow tracking of different types.
 */
declare function Player_GetEntitiesFromType(player: PlayerID, unitType: string): EGroup;

/**
 * Returns the modified cost of the given entity including all modifications added by the given player
 */
declare function Player_GetEntityBPCost(player: PlayerID, pbg: PropertyBagGroup): any;

/**
 * Finds the greatest (or least) concentration of entities owned by a player.
 * This function is slow, so don't call it very often
 */
declare function Player_GetEntityConcentration(player: PlayerID, popcapOnly?: boolean, includeBlueprints?: any, excludeBlueprints?: any, bLeastConcentrated?: boolean, onlyInThisMarker?: MarkerID | any): EGroup;

/**
 * Returns the number of entities a player currently owns
 */
declare function Player_GetEntityCount(player: PlayerID): number;

/**
 * Returns the number of entities of a certain unit type
 */
declare function Player_GetEntityCountByUnitType(player: Player, unitTypeString: string): any;

/**
 * Returns the name of an entity a player currently owns
 */
declare function Player_GetEntityName(player: PlayerID, index: number): string;

/**
 * Returns the id of the player
 */
declare function Player_GetID(player: PlayerID): number;

/**
 * Use capType CT_Personnel to get max squad cap or CT_VehicleCap to get max vehicle cap.
 */
declare function Player_GetMaxPopulation(player: PlayerID, capType: number): number;

/**
 * Returns the number of squads currently gathering resources of a given type
 */
declare function Player_GetNumGatheringSquads(player: Player, type: number): any;

/**
 * Returns the number of strategic points (not objectives) this player owns
 */
declare function Player_GetNumStrategicPoints(p: PlayerID): number;

/**
 * Returns the number of strategic objectives this player owns
 */
declare function Player_GetNumVictoryPoints(p: PlayerID): number;

/**
 * Gets the current personnel or vehicle population as a percetange of the current max-cap. The captype is either CT_Personnel or CT_Vehicle.
 * captype is CT_Personnel by default.
 * If MaxPopulation is 0, returns 1.0
 */
declare function Player_GetPopulationPercentage(playerid: PlayerID, captype?: number): number;

/**
 * Returns the race index for the given player.
 */
declare function Player_GetRace(player: PlayerID): number;

/**
 * Returns the name of the race for a given player (eg. allies, allies_commonwealth, axis, axis_panzerelite) and always in english
 */
declare function Player_GetRaceName(player: PlayerID): string;

/**
 * Returns the relationship between 2 players.  Possible relationships are R_ENEMY, R_ALLY, R_NEUTRAL, R_UNDEFINED.
 */
declare function Player_GetRelationship(player1: PlayerID, player2: PlayerID): number;

/**
 * Returns the amount of resources a given player has.  Possible resource types are RT_Manpower, RT_Fuel, RT_Munition, RT_Action, RT_Command
 */
declare function Player_GetResource(player: PlayerID, resourceType: number): number;

/**
 * Returns the amount of resources a given player is getting per second.  Possible resource types are RT_Manpower, RT_Fuel, RT_Munition, RT_Action, RT_Command
 */
declare function Player_GetResourceRate(player: PlayerID, resourceType: number): number;

/**
 * Returns the list of all the resources a given player has.
 */
declare function Player_GetResources(player: Player): any;

/**
 * Returns the lobby slot index for this player, starting at one
 */
declare function Player_GetSlotIndex(player: Player): any;

/**
 * Returns the modified cost of the given unit including all modifications added by the given player
 */
declare function Player_GetSquadBPCost(pPlayer: PlayerID, pbg: PropertyBagGroup): any;

/**
 * Finds the greatest (or least) concentration of squads owned by a player.
 * This function is slow, so don't call it very often
 */
declare function Player_GetSquadConcentration(player: PlayerID, popcapOnly?: boolean, includeBlueprints?: any, excludeBlueprints?: any, bLeastConcentrated?: boolean, onlyInThisMarker?: MarkerID | any): SGROUP;

/**
 * Returns the number of squads a player currently owns
 */
declare function Player_GetSquadCount(player: PlayerID): number;

/**
 * Returns a SquadGroupObs containing all the players units.
 * This function returns a 'global' squad group with the name '__Player%dSquads', where %d is the player ID.  This means that you should never need to destroy it./n However, if you do destroy it, it will be recreated the next time this function is called.
 */
declare function Player_GetSquads(player: PlayerID): SGroupID;

/**
 * Returns an SGroup containing all of the players squads of a specific unit_type (as defined by the type_ext on the squad)
 * This function returns a new SGroup.
 */
declare function Player_GetSquadsFromType(player: PlayerID, unitType: string): SGROUP;

/**
 * Returns the starting position for this player
 */
declare function Player_GetStartingPosition(player: PlayerID): Position;

/**
 * Returns a boolean value from the Player's state model corresponding to the given key.
 */
declare function Player_GetStateModelBool(player: Player, key: string): any;

/**
 * Returns an Entity value from the Player's state model corresponding to the given key.
 */
declare function Player_GetStateModelEntityTarget(player: Player, key: string): any;

/**
 * Returns a boolean value from the player's state model corresponding to the given key and table row index (0 based).
 */
declare function Player_GetStateModelEnumTableBool(player: Player, key: string, tableRowIndex: number): any;

/**
 * Returns an Entity value from the player's state model corresponding to the given key and table row index (0 based).
 */
declare function Player_GetStateModelEnumTableEntityTarget(player: Player, key: string, tableRowIndex: number): any;

/**
 * Returns a float value from the player's state model corresponding to the given key and table row index (0 based).
 */
declare function Player_GetStateModelEnumTableFloat(player: Player, key: string, tableRowIndex: number): any;

/**
 * Returns an integer value from the player's state model corresponding to the given key and table row index (0 based).
 */
declare function Player_GetStateModelEnumTableInt(player: Player, key: string, tableRowIndex: number): any;

/**
 * Returns a Player value from the player's state model corresponding to the given key and table row index (0 based).
 */
declare function Player_GetStateModelEnumTablePlayerTarget(player: Player, key: string, tableRowIndex: number): any;

/**
 * Returns a Squad value from the player's state model corresponding to the given key and table row index (0 based).
 */
declare function Player_GetStateModelEnumTableSquadTarget(player: Player, key: string, tableRowIndex: number): any;

/**
 * Returns a Vector3f value from the player's state model corresponding to the given key and table row index (0 based).
 */
declare function Player_GetStateModelEnumTableVector3f(player: Player, key: string, tableRowIndex: number): any;

/**
 * Returns a float value from the Player's state model corresponding to the given key.
 */
declare function Player_GetStateModelFloat(player: Player, key: string): any;

/**
 * Returns an integer value from the Player's state model corresponding to the given key.
 */
declare function Player_GetStateModelInt(player: Player, key: string): any;

/**
 * Returns a Player value from the Player's state model corresponding to the given key.
 */
declare function Player_GetStateModelPlayerTarget(player: Player, key: string): any;

/**
 * Returns a Squad value from the Player's state model corresponding to the given key.
 */
declare function Player_GetStateModelSquadTarget(player: Player, key: string): any;

/**
 * Returns a Vector3f value from the Player's state model corresponding to the given key.
 */
declare function Player_GetStateModelVector3f(player: Player, key: string): any;

/**
 * Returns a value (-1.0 to 1.0) of how close a point is to being controlled by the team of the player provided
 * Progress between -1.0 and 0 means an enemy has progress toward owning a point.  Values between 0 and 1.0 represent progress being made toward capture. 1.0 is a team controlled point.  -1.0 is an enemy controlled point.
 */
declare function Player_GetStrategicPointCaptureProgress(player: PlayerID, strategicPoint: EntityID): any;

/**
 * Get the team a player is on
 */
declare function Player_GetTeam(p: PlayerID): number;

/**
 * Gets the toal population including Personnel, Vehicle and Medic
 * Directly uses the C++ API Player_GetCurrentPopulation to get the current population for CT_Personnel, CT_Vehicle and CT_Medic.
 */
declare function Player_GetTotalPopulation(player: Player): any;

/**
 * Returns the UI colour of a player with respect to the local machine. Access with .r .g .b .a. Values are in the range 0-255.
 */
declare function Player_GetUIColour(player: Player): any;

/**
 * Returns the current number of units the player has.
 */
declare function Player_GetUnitCount(player: PlayerID): number;

/**
 * Returns the cost of an upgrade.
 */
declare function Player_GetUpgradeBPCost(player: PlayerID, upgradePBG: ScarUpgradePBG): any;

/**
 * Returns the cost of an upgrade in a specific resource.
 */
declare function Player_GetUpgradeBPCostByResource(player: PlayerID, upgradePBG: ScarUpgradePBG, type: number): any;

/**
 * Set the gifted resource amount for a given player A positive resource amount means the player receives the resources A negative resource amount means the player sends the resources Ignores income cap and resource sharing.
 */
declare function Player_GiftResource(player: Player, type: number, amount: number): any;

/**
 * Tests to see if a player has an ability
 */
declare function Player_HasAbility(player: Player, pAbilityPBG: ScarAbilityPBG): any;

/**
 * Returns true if this player owns any buildings listed in the table.
 * This only looks at completed buildings - use Player_HasBuildingUnderConstruction to see if the player is building something
 */
declare function Player_HasBuilding(player: PlayerID, entitytypes: BlueprintTable | string[]): boolean;

/**
 * Returns true if this player owns any buildings. (with exclusions).
 */
declare function Player_HasBuildingsExcept(playerId: PlayerID, exceptions: BlueprintTable | string[]): boolean;

/**
 * Returns true if this player owns any buildings listed in the table currently under construction.
 */
declare function Player_HasBuildingUnderConstruction(player: PlayerID, entitytypes: BlueprintTable | string[]): boolean;

/**
 * Returns true if the given player has units that are able to capture in the capturable area of the given strategic point
 */
declare function Player_HasCapturingSquadNearStrategicPoint(player: PlayerID, strategicPoint: EntityID): any;

/**
 * Tests to see if the player has any entities with the specified PBG
 */
declare function Player_HasEntity(player: Player, entity: ScarEntityPBG): any;

/**
 * Returns whether a player has a map entry position
 */
declare function Player_HasMapEntryPosition(player: PlayerID): boolean;

/**
 * Return true if the squad has purchased the specified upgrade.
 */
declare function Player_HasUpgrade(pPlayer: PlayerID, upgradePBG: UpgradeBlueprint): boolean;

/**
 * Returns true or false, depending on whether the passed in player ability is active on the player
 */
declare function Player_IsAbilityActive(player: Player, abilityPBG: ScarAbilityPBG): any;

/**
 * Returns true if player is still alive and false if player is dead.  Will error if playerIdx is an invalid index.
 */
declare function Player_IsAlive(player: PlayerID): boolean;

/**
 * Returns true if the players are allied and false if they are not.
 */
declare function Player_IsAllied(playerId1: PlayerID, playerId2: PlayerID): boolean;

/**
 * Returns whether a player is human controlled (local or remote), not dead, and not replaced by an AI
 */
declare function Player_IsHuman(pPlayer: PlayerID): boolean;

/**
 * Returns true if player has surrendered and false if not.  Will error if playerIdx is an invalid index.
 */
declare function Player_IsSurrendered(player: Player): any;

/**
 * Check if id corresponds to a player
 */
declare function Player_IsValid(id: number): any;

/**
 * Returns the number of upgrades that this player has. The upgradeName should be a relative filename (eg. upgrade/allies/research/phase_2.lua)
 */
declare function Player_NumUpgradeComplete(player: PlayerID, upgradeName: string): number;

/**
 * Get the relationship that observer has to target.
 */
declare function Player_ObserveRelationship(observer: PlayerID, target: PlayerID): any;

/**
 * Get the reputation that observer has to target.
 */
declare function Player_ObserveReputation(observer: PlayerID, target: PlayerID): any;

/**
 * Returns true if a given player owns ALL or ANY items in a group
 */
declare function Player_OwnsEGroup(player: Player, egroup: EGroupID, all?: boolean): boolean;

/**
 * Returns true if a given player owns an entity
 */
declare function Player_OwnsEntity(playerid: PlayerID, entity: EntityID): boolean;

/**
 * Returns true if a given player owns ALL or ANY items in a group
 */
declare function Player_OwnsSGroup(player: Player, sgroup: SGroupID, all?: boolean): boolean;

/**
 * Returns true if a given player owns a squad
 */
declare function Player_OwnsSquad(playerid: PlayerID, squad: SquadID): boolean;

/**
 * Removes a marker that was previously a lockout zone.
 */
declare function Player_RemoveAbilityLockoutZone(player: PlayerID, abilityPBG: AbilityBlueprint, marker: MarkerID): void;

/**
 * Removes all upgrade from a player
 */
declare function Player_RemoveAllUpgrades(player: Player): any;

/**
 * Removes an upgrade from a player
 */
declare function Player_RemoveUpgrade(player: PlayerID, upgrade: UpgradeBlueprint): void;

/**
 * Reset the cooldown of an ability on every unit a player has, and the player itself.
 */
declare function Player_ResetAbilityCooldowns(player: Player, ability: ScarAbilityPBG): any;

/**
 * Reset the resource amount for a given player to zero.  Also reset team weapon
 * Possible resource types are RT_Manpower, RT_Fuel, RT_Munition, RT_Action, RT_Command.
 */
declare function Player_ResetResource(player: PlayerID, resourceType: number): void;

/**
 * Restrict a list of addons.
 * list should contain an array of strings to restrict.
 */
declare function Player_RestrictAddOnList(playerid: PlayerID, addonlist: any): void;

/**
 * Restrict a list of buildings.
 * list should contain an array of strings to restrict.
 */
declare function Player_RestrictBuildingList(playerid: PlayerID, blueprintlist: any): void;

/**
 * Restrict a list of research items.
 * list should contain an array of strings to restrict.
 */
declare function Player_RestrictResearchList(playerid: Player, list: string[]): void;

/**
 * Sets the availability of an ability. Availability can be either ITEM_LOCKED, ITEM_UNLOCKED, ITEM_REMOVED or ITEM_DEFAULT
 */
declare function Player_SetAbilityAvailability(player: PlayerID, bp: AbilityBlueprint | any, availability: number): void;

/**
 * Sets availability of ALL entity, squad and player commands.
 */
declare function Player_SetAllCommandAvailabilityInternal(player: Player, availability: Availability, reason: string): void;

/**
 * Sets the availability of entity, squad and player commands. Availability can be either ITEM_LOCKED, ITEM_UNLOCKED, ITEM_REMOVED or ITEM_DEFAULT
 */
declare function Player_SetCommandAvailability(player: PlayerID, command: number | any, availability: number): void;

/**
 * Sets the availability of a construction menu. Availability can be either ITEM_LOCKED, ITEM_UNLOCKED, ITEM_REMOVED or ITEM_DEFAULT
 */
declare function Player_SetConstructionMenuAvailability(player: PlayerID, menuname: string | any, availability: number): void;

/**
 * Set default squad mood mode which can be overrided by squad level mood mode settings
 */
declare function Player_SetDefaultSquadMoodMode(pPlayer: PlayerID, mode: number): void;

/**
 * Sets the availability of an entity production item. Availability can be either ITEM_LOCKED, ITEM_UNLOCKED, ITEM_REMOVED or ITEM_DEFAULT
 */
declare function Player_SetEntityProductionAvailability(player: PlayerID, bp: EntityBlueprint | any, availability: number): void;

/**
 * Sets the current personnel or vehicle max-cap for a player. The captype is either CT_Personnel or CT_Vehicle (you can't adjust Medic caps just yet).
 * you will have to call Player_SetMaxPopulation to adjust the current max population to do this.
 * Note that any modifiers that adjust the current max cap will be applied on top of this.  Also note, this is only adjusting the max cap, not the current cap,
 */
declare function Player_SetMaxCapPopulation(playerid: PlayerID, captype: number, newcap: number): void;

/**
 * Sets the current personnel or vehicle cap for a player. The captype is either CT_Personnel or CT_Vehicle (you can't adjust Medic caps just yet).
 * Note that any modifiers that adjust the current cap will be applied on top of this.  Also note, the current cap cannot go higher than the max cap.
 */
declare function Player_SetMaxPopulation(playerid: PlayerID, captype: number, newcap: number): void;

/**
 * Sets a pop cap override that ignores any modifiers.
 */
declare function Player_SetPopCapOverride(player: PlayerID, personnel: number): void;

/**
 * Set the relationship that observer has to target. If the relationship does not match the current reputation, the reputation will be changed to match it.
 */
declare function Player_SetRelationship(observer: PlayerID, target: PlayerID, relationship: Relationship): void;

/**
 * Set the reputation that observer has to target. If the reputation does not match the current relationship, the relationship will be changed to match it.
 */
declare function Player_SetReputation(observer: PlayerID, target: PlayerID, reputation: BaseType): void;

/**
 * Set the resource amount for a given player.  Ignores income cap and resource sharing.
 * Possible resource types are RT_Manpower, RT_Fuel, RT_Munition, RT_Action, RT_Command.
 */
declare function Player_SetResource(player: PlayerID, resourceType: number, amt: number): void;

/**
 * Set the resource amount for a given player.  Ignores income cap and resource sharing.
 */
declare function Player_SetResourceInternal(player: Player, type: number, amt: number, reason: AddResourceReason): void;

/**
 * Set all the resource amount for a given player.  Ignores income cap and resource sharing.
 */
declare function Player_SetResources(player: Player, resourceAmount: Record<number, number>): void;

/**
 * Sets the availability of a squad production item. Availability can be either ITEM_LOCKED, ITEM_UNLOCKED, ITEM_REMOVED or ITEM_DEFAULT
 */
declare function Player_SetSquadProductionAvailability(player: PlayerID, bp: SquadBlueprint | any, availability: number): void;

/**
 * Sets a boolean value in the Player's state model corresponding to the given key.
 */
declare function Player_SetStateModelBool(player: Player, key: string, value: boolean): void;

/**
 * Sets an Entity TargetHandle value in the Player's state model corresponding to the given key.
 */
declare function Player_SetStateModelEntityTarget(player: Player, key: string, value: EntityID): void;

/**
 * Sets a boolean value in the player's state model corresponding to the given key and table row index (0 based).
 */
declare function Player_SetStateModelEnumTableBool(player: Player, key: string, tableRowIndex: number, value: boolean): void;

/**
 * Sets an Entity TargetHandle value in the player's state model corresponding to the given key and table row index (0 based).
 */
declare function Player_SetStateModelEnumTableEntityTarget(player: Player, key: string, tableRowIndex: number, value: EntityID): void;

/**
 * Sets a float value in the player's state model corresponding to the given key and table row index (0 based).
 */
declare function Player_SetStateModelEnumTableFloat(player: Player, key: string, tableRowIndex: number, value: number): void;

/**
 * Sets an integer value in the player's state model corresponding to the given key and table row index (0 based).
 */
declare function Player_SetStateModelEnumTableInt(player: Player, key: string, tableRowIndex: number, value: number): void;

/**
 * Sets a Player TargetHandle value in the player's state model corresponding to the given key and table row index (0 based).
 */
declare function Player_SetStateModelEnumTablePlayerTarget(player: Player, key: string, tableRowIndex: number, value: PlayerID): void;

/**
 * Sets a Squad TargetHandle value in the player's state model corresponding to the given key and table row index (0 based).
 */
declare function Player_SetStateModelEnumTableSquadTarget(player: Player, key: string, tableRowIndex: number, value: SquadID): void;

/**
 * Sets a Vector3f value in the player's state model corresponding to the given key and table row index (0 based).
 */
declare function Player_SetStateModelEnumTableVector3f(player: Player, key: string, tableRowIndex: number, value: Position): void;

/**
 * Sets a float value in the Player's state model corresponding to the given key.
 */
declare function Player_SetStateModelFloat(player: Player, key: string, value: number): void;

/**
 * Sets an integer value in the Player's state model corresponding to the given key.
 */
declare function Player_SetStateModelInt(player: Player, key: string, value: number): void;

/**
 * Sets a Player TargetHandle value in the Player's state model corresponding to the given key.
 */
declare function Player_SetStateModelPlayerTarget(player: Player, key: string, value: PlayerID): void;

/**
 * Sets a Squad TargetHandle value in the Player's state model corresponding to the given key.
 */
declare function Player_SetStateModelSquadTarget(player: Player, key: string, value: SquadID): void;

/**
 * Sets a Vector3f value in the Player's state model corresponding to the given key.
 */
declare function Player_SetStateModelVector3f(player: Player, key: string, value: Position): void;

/**
 * Sets the availability of an upgrade. Availability can be either ITEM_LOCKED, ITEM_UNLOCKED, ITEM_REMOVED or ITEM_DEFAULT
 */
declare function Player_SetUpgradeAvailability(player: PlayerID, bp: UpgradeBlueprint | any, availability: number): void;

/**
 * Abruptly stops an active ability
 */
declare function Player_StopAbility(player: PlayerID, ability: AbilityBlueprint, bEarlyExit: boolean): void;

/**
 * Prevents a player from earning any action points (and by extention, command points)
 */
declare function Player_StopEarningActionPoints(player: PlayerID): void;

/**
 * Returns the relationship between 2 teams.
 */
declare function Team_GetRelationship(team1: number, team2: number): any;

/**
 * Adds a function to the Mission Cheat menu, under the title you provide. These should be registered in the Mission_Preset function.
 * When activated, the mission is restarted. Most of the startup script happens as normal: Mission_SetupVariables,  Mission_SetDifficulty, Mission_SetupRestrictions and Mission_Preset are all called as normal, but the supplied function is called INSTEAD OF the regular Mission_Start function.
 */
declare function CheatMenu_RegisterCheatFunction(cheat_function: any, title: string): any;

/**
 * Applies the defaults listed in the prefab schema to the instance data. Any items NOT included explicitly in the instance data will have default values pulled from the schema.
 */
declare function Prefab_ApplyDefaults(instance_data: string, prefab_schema: any): any;

/**
 * Calls an action function with a given name on an instance, making sure it calls the right version for the type of Prefab. Instance can be a string, this will convert it.
 * Example: Calling the "Trigger" action on an instance that is a PlaneCrash prefab will look for a function called "PlaneCrash_Trigger"
 */
declare function Prefab_DoAction(instance_data: string, actionName: string, OPT_param1?: any, OPT_param2?: any): any;

/**
 * Finalize the initialization of any prefab instances that have been run through Prefab_Init(). This is automatically called one frame after a prefab is initialized, but you can force it early if necessary.
 * If you are creating prefabs and using them in the same frame, call this function once, after all the Prefab_Inits, but before you start using them. This will force the post-initialization to occur early.
 */
declare function Prefab_ForcePostInit(): any;

/**
 * Returns a table of all current prefabs matching the instance type
 */
declare function Prefab_GetAllOfType(instance_data: string, prefab_schema: any): any;

/**
 * Returns the instance data for a given instance, specified by a number of methods.
 * This normalizes your instance data. You can pass in the instance name as a string, a data table with an instance subtable (i.e. the input params from an event function) or a real instance data table, and it normalizes the format and returns you the instance data table.
 */
declare function Prefab_GetInstance(instance: any | string): InstanceData;

/**
 * Initialize a specific prefab instance. In many cases, this is all you need to do (see the documentation for the specific prefab for details)
 */
declare function Prefab_Init(instance_data: any): string;

/**
 * Returns if a String is a valid
 */
declare function Prefab_IsValid(instance: string): boolean;

/**
 * Stop and restart a prefab instance, pulling a fresh set of the instance data from the WB-exported prefabs. This is meant for testing and debug purposes, rather than use in mission scripts.
 */
declare function Prefab_Reset(instance_data: string): any;

/**
 * Stops a prefab instance from continuing to run.
 * If the prefab has a prefabName_Stop() function, that will be called. Also, all events with the instance as the data parameter will be removed.
 */
declare function Prefab_Stop(instance_data: string): any;

/**
 * Triggers the specified prefab
 */
declare function Prefab_Trigger(instance_data: string): any;

/**
 * Add this helper function to your prefab's Init function to cover standard trigger zone functionality.
 * It will call a Trigger function in your prefab when appropriate. Your schema needs to include the standard elements: trigger_enable, ignore_planes, trigger_player, trigger_zone and delay
 */
declare function PrefabHelper_StandardTriggerSystem(instance_data: string, action_name: string, trigger_parameters: any): any;

/**
 * Returns how many times this instance has been triggered
 */
declare function canseetrigger_GetTriggerCount(instance: any | string): number;

/**
 * Start triggering the items listed in the CanSeeTrigger prefab
 * This prefab can only be triggered once, either by the trigger zone or by script, whichever is first
 */
declare function canseetrigger_Trigger(instance: string): any;

/**
 * Start running the HealthTrigger prefab
 */
declare function healthtrigger_Activate(instance: string): any;

/**
 * Start triggering the items listed in the HealthTrigger prefab
 * This prefab can only be triggered once
 */
declare function healthtrigger_Trigger(instance: string): any;

/**
 * Start running the CanSeeTrigger prefab
 */
declare function pcanseetrigger_Activate(instance: string): any;

/**
 * Start running the PlayerTrigger prefab
 */
declare function playertrigger_Activate(instance: string): any;

/**
 * Returns how many times this trigger zone instance has been triggered
 */
declare function playertrigger_GetTriggerCount(instance: any | string): number;

/**
 * Start triggering the items listed in the PlayerTrigger prefab
 * This prefab can only be triggered once, either by the trigger zone or by script, whichever is first
 */
declare function playertrigger_Trigger(instance: string): any;

/**
 * Plays a speech event for a given actor WITH a portrait and subtitle
 * If the speech file is not available, a placeholder time will be calculated for the message using the number of words and the message will be displayed for that length of time.\n
 * speechbubble: Who a speech bubble should appear over ingame. Can be a squadID or an SGroup (where it appears over the first guy in the group) \n
 * It can also be a table in the format {sgroup = sg_orkboys, closest_to = sg_gorgutz} where it finds the squad in the group closest to the reference point. It can also be in the format {sbp = SBP.ORKS.ORK_BOY, closest_to = mkr_orkIdol} to find the closest unit of the specified type, and you can also add a player entry to that table to specify which player (default is the local player)\n
 * You can also specify just an SBP, in which case it will play on the first SBP found owned - use this for elite units who may or may not be on the map
 * audioCtrlEvent:  is a wwise event name. This parameter is used to apply an effect on the line of speech. Ex. "Comm_on" plays speech through a comm effect. Work with an audio designer to get more effects.
 */
declare function Actor_PlaySpeech(actor: ActorTable, locID: number, speechbubble?: SGROUP | SquadID | any, audioCtrlEvent?: string): void;

/**
 * Plays a speech event for a given actor WITHOUT a portrait or subtitle. See Actor_PlaySpeech for more details
 */
declare function Actor_PlaySpeechWithoutPortrait(actor: ActorTable, locID: number, speechbubble?: SGROUP | SquadID | any, audioCtrlEvent?: string): void;

/**
 * Returns true if ANY or ALL entities from a group are in range of a given position, marker, or territory sector.
 * Markers with proximity type rectangle will use circular proximity check if custom range is supplied\n
 * You MUST specify a range if you are using a position rather than a marker.
 */
declare function Prox_AreEntitiesNearMarker(egroup: EGroupID, position: MarkerID | Position | SectorID, all: boolean, range?: number): boolean;

/**
 * Returns true if ANY or ALL of a player's entities are in range of a given position, marker, or territory sector. THIS FUNCTION IS VERY SLOW. DO NOT USE THIS UNLESS ABSOLUTELY NECESSARY.
 * Markers with proximity type rectangle will use circular proximity check if custom range is supplied\n
 * You MUST specify a range if you are using a position rather than a marker.\n
 */
declare function Prox_ArePlayerEntitiesNearMarker(player: PlayerID, position: MarkerID | Position | SectorID, all: boolean, range?: number, filterlist?: EBP | any, filtertype?: number, ignore_camouflage?: boolean): boolean;

/**
 * Returns true if ANY or ALL of a player's members (i.e. individual guys, not squads as a whole) are in range of a given position, marker, or territory sector. DO NOT USE THIS FUNCTION UNLESS YOU ABSOLUTELY HAVE TO!!
 * You MUST specify a range if you are using a position rather than a marker.
 */
declare function Prox_ArePlayerMembersNearMarker(player: PlayerID, position: MarkerID | Position | SectorID, all: boolean, range?: number, filterlist?: SBP | any, filtertype?: number, ignore_camouflage?: boolean): boolean;

/**
 * Returns true if ANY or ALL of a player's squads are in range of a given position, marker, or territory sector. THIS FUNCTION IS VERY SLOW. DO NOT USE THIS UNLESS ABSOLUTELY NECESSARY.
 * Markers with proximity type rectangle will use circular proximity check if custom range is supplied\n
 * You MUST specify a range if you are using a position rather than a marker.\n
 */
declare function Prox_ArePlayersNearMarker(player: PlayerID, position: MarkerID | Position | SectorID, all: boolean, range?: number, filterlist?: SBP | any, filtertype?: number, ignore_camouflage?: boolean): boolean;

/**
 * Returns true if ANY or ALL squad members (i.e. individual guys, not squads as a whole) from a group are in range of a given position, marker, or territory sector. DO NOT USE THIS FUNCTION UNLESS YOU ABSOLUTELY HAVE TO!!
 * Markers with proximity type rectangle will use circular proximity check if custom range is supplied\n
 * You MUST specify a range if you are using a position rather than a marker.\n
 */
declare function Prox_AreSquadMembersNearMarker(sgroup: SGroupID, position: MarkerID | Position | SectorID, all: boolean, range?: number): boolean;

/**
 * Returns true if ANY or ALL squads from a group are in range of a given position, marker, or territory sector
 * Markers with proximity type rectangle will use circular proximity check if custom range is supplied\n
 * You MUST specify a range if you are using a position rather than a marker.\n
 */
declare function Prox_AreSquadsNearMarker(sgroup: SGroupID, position: MarkerID | Position | SectorID, all: boolean, range?: number): boolean;

/**
 * Returns true if ANY or ALL of a teams's squads are in range of a given position, marker, or territory sector. THIS FUNCTION IS VERY SLOW. DO NOT USE THIS UNLESS ABSOLUTELY NECESSARY.
 * Markers with proximity type rectangle will use circular proximity check if custom range is supplied\n
 * You MUST specify a range if you are using a position rather than a marker.\n
 */
declare function Prox_AreTeamsNearMarker(team: TeamID, position: MarkerID | Position | SectorID, all: boolean, range?: number, filterlist?: SBP | any, filtertype?: number, ignore_camouflage?: boolean): boolean;

/**
 * Returns the distance between two entity groups. use checktype PROX_SHORTEST, PROX_LONGEST, or PROX_CENTER.
 * @extdesc
 * If check is PROX_SHORTEST this will return the shortest distance between the two groups.\n
 * If check is PROX_LONGEST this will return the longest distance between the two groups.\n
 * If check is PROX_CENTER this will return the distance between the two groups centers.\n
 */
declare function Prox_EGroupEGroup(egroup1: EGroupID, egroup2: EGroupID, checktype: ProxType): number;

/**
 * Returns the distance between an entity group and a squad group.  use checktype PROX_SHORTEST, PROX_LONGEST, or PROX_CENTER.
 * @extdesc
 * If check is PROX_SHORTEST this will return the shortest distance between the two groups.\n
 * If check is PROX_LONGEST this will return the longest distance between the two groups.\n
 * If check is PROX_CENTER this will return the distance between the two groups centers.\n
 */
declare function Prox_EGroupSGroup(egroup1: EGroupID, sgroup2: SGroupID, checktype: ProxType): number;

/**
 * Checks if ALL or ANY entities are in proximity of a given entity group.
 * Set "all" to true to check that ALL entities are in proximity, or set "all" to false to check for ANY.
 */
declare function Prox_EntitiesInProximityOfEntities(egroup1: EGroupID, egroup2: EGroupID, proximity: number, all: boolean): boolean;

/**
 * Takes something (Entity, Squad, SGroup, EGroup, Position) in, then returns a random position
 * Minimum is ignored if it is greater than the radius
 * Minimum is the distance from the origin point that is guaranteed to have a return greater than
 */
declare function Prox_GetRandomPosition(item: any, radius: number, minimum: number): Position;

/**
 * Returns the distance between a marker and an entity group.  use checktype PROX_SHORTEST, PROX_LONGEST, or PROX_CENTER.
 * @extdesc
 * If check is PROX_SHORTEST this will return the shortest distance between the two groups.\n
 * If check is PROX_LONGEST this will return the longest distance between the two groups.\n
 * If check is PROX_CENTER this will return the distance between the two groups centers.\n
 */
declare function Prox_MarkerEGroup(marker: MarkerID, egroup: EGroupID, checktype: ProxType): number;

/**
 * Returns the distance between a marker and a squad group.  use checktype PROX_SHORTEST, PROX_LONGEST, or PROX_CENTER.
 * @extdesc
 * If check is PROX_SHORTEST this will return the shortest distance between the two groups.\n
 * If check is PROX_LONGEST this will return the longest distance between the two groups.\n
 * If check is PROX_CENTER this will return the distance between the two groups centers.\n
 */
declare function Prox_MarkerSGroup(marker: MarkerID, sgroup: SGroupID, checktype: ProxType): number;

/**
 * Checks if ALL or ANY players squads are in proximity of a given entity group.
 * Set "all" to true to check that ALL entities are in proximity, or set "all" to false to check for ANY.
 */
declare function Prox_PlayerEntitiesInProximityOfEntities(playerid: PlayerID, egroup: EGroupID, proximity: number, all: boolean, exclude: EntityID): boolean;

/**
 * Checks if ALL or ANY players entities are in proximity of a given squad group.
 * Set "all" to true to check that ALL entities are in proximity, or set "all" to false to check for ANY.
 */
declare function Prox_PlayerEntitiesInProximityOfPlayerSquads(playerentities: PlayerID, playersquads: PlayerID, proximity: number, all: boolean): boolean;

/**
 * Checks if ALL or ANY players entities are in proximity of a given squad group.
 * Set "all" to true to check that ALL entities are in proximity, or set "all" to false to check for ANY.
 */
declare function Prox_PlayerEntitiesInProximityOfSquads(playerid: PlayerID, sgroup: SGroupID, proximity: number, all: boolean): boolean;

/**
 * Checks if ALL or ANY players squads are in proximity of a given entity group.
 * Set "all" to true to check that ALL squads are in proximity, or set "all" to false to check for ANY.
 */
declare function Prox_PlayerSquadsInProximityOfEntities(playerid: PlayerID, egroup: EGroupID, proximity: number, all: boolean, filterlist: SBP | any, filtertype: number, ignore_camouflage: boolean): boolean;

/**
 * Checks if ALL or ANY players squads are in proximity of a given players entities.
 * Set "all" to true to check that ALL squads are in proximity, or set "all" to false to check for ANY.
 */
declare function Prox_PlayerSquadsInProximityOfPlayerEntities(playersquads: PlayerID, playerentities: PlayerID, proximity: number, all: boolean): boolean;

/**
 * Checks if ALL or ANY players squads are in proximity of a given players squads.
 * Set "all" to true to check that ALL squads are in proximity, or set "all" to false to check for ANY.
 */
declare function Prox_PlayerSquadsInProximityOfPlayerSquads(playerid1: PlayerID, playerid2: PlayerID, proximity: number, all: boolean): boolean;

/**
 * Checks if ALL or ANY players squads are in proximity of a given squad group.
 * Set "all" to true to check that ALL squads are in proximity, or set "all" to false to check for ANY.
 */
declare function Prox_PlayerSquadsInProximityOfSquads(playerid: PlayerID, sgroup: SGroupID, proximity: number, all: boolean, exclude: SquadID, filterlist: SBP | any, filtertype: number, ignore_camouflage: boolean): boolean;

/**
 * Returns the distance between two squad groups. use checktype PROX_SHORTEST, PROX_LONGEST, or PROX_CENTER.
 * @extdesc
 * If check is PROX_SHORTEST this will return the shortest distance between the two groups.\n
 * If check is PROX_LONGEST this will return the longest distance between the two groups.\n
 * If check is PROX_CENTER this will return the distance between the two groups centers.\n
 */
declare function Prox_SGroupSGroup(sgroup1: SGroupID, sgroup2: SGroupID, checktype: ProxType): number;

/**
 * Checks if ALL or ANY squads are in proximity of a given entity group.
 * Set "all" to true to check that ALL squads are in proximity, or set "all" to false to check for ANY.
 */
declare function Prox_SquadsInProximityOfEntities(sgroup: SGroupID, egroup: EGroupID, proximity: number, all: boolean): boolean;

/**
 * Checks if ALL or ANY squads are in proximity of a given squad group.
 * Set "all" to true to check that ALL squads are in proximity, or set "all" to false to check for ANY.
 */
declare function Prox_SquadsInProximityOfSquads(sgroup1: SGroupID, sgroup2: SGroupID, proximity: number, all: boolean): boolean;

/**
 * Add a decal to the terrain. Returns a unique decal id allow for future removal via Decal_Destroy
 */
declare function Decal_Create(decalName: string, position: Position, xScale: number, yScale: number, zScale: number, rotationDegrees: number, r: number, g: number, b: number, a: number): any;

/**
 * Destroy a decal by unique id
 */
declare function Decal_Destroy(decalID: number): any;

/**
 * Get the Decal ID that represents an invalid decal (useful to check if creation failed)
 */
declare function Decal_GetInvalidID(): any;

/**
 * Precache entity resources and listen for event GE_EntityPrecached that it is done
 * callback example: Rule_AddGlobalEvent(EntityPrecacheComplete, GE_EntityPrecached) Params: ebp - entity blueprint skinID - this is the server item id for a skin, it will precache and equip it player - the player that we want to precache the entity or squad for cacheName - name of cache where resource will be loaded into source - helps identify who requested the precaching id - id to table of data that will be used once entity/squad is loaded
 */
declare function Entity_Precache(ebp: ScarEntityPBG, skinItemDefinitionID: number, player: PlayerID, resourceContainerCacheName: string, source: string, id: string): any;

/**
 * Cleanup resources in cache. Only for debug purposes, not in RTM.
 */
declare function ResourceContainer_ClearCache(cacheName: string): any;

/**
 * Create a cache to load resources into giving its name and number of resources to hold
 * Once cache is full, the oldest resource will get removed and clean itself up
 */
declare function ResourceContainer_CreateCache(cacheName: string, cacheSize: number): any;

/**
 * Log resource references to log. Only for debug purposes, not in RTM.
 * dumps inventory information to ResourceContainerLog file
 */
declare function ResourceContainer_LogRefs(): any;

/**
 * Add a splat to the terrain. Returns a unique decal id allow for future removal via Splat_Destroy
 */
declare function Splat_Create(splatName: string, position: Position, xScale: number, zScale: number, rotationDegrees: number, r: number, g: number, b: number, a: number, mirrorX: boolean, mirrorZ: boolean): any;

/**
 * Destroy a splat by unique id
 */
declare function Splat_Destroy(handle: TerrainSplatObject): any;

/**
 * Get the Splat ID that represents an invalid splat (useful to check if creation failed)
 */
declare function Splat_GetInvalidID(): any;

/**
 * Precache squad resources and listen for event GE_EntityPrecached that it is done
 * callback example: Rule_AddGlobalEvent(EntityPrecacheComplete, GE_SquadPrecached) Params: sbp - squad blueprint skinID - this is the server item id for a skin, it will precache and equip it player - the player that we want to precache the entity or squad for cacheName - name of cache where resource will be loaded into source - helps identify who requested the precaching id - id to table of data that will be used once entity/squad is loaded
 */
declare function Squad_Precache(sbp: ScarSquadPBG, skinItemDefinitionID: number, player: PlayerID, resourceContainerCacheName: string, source: string, id: string): any;

/**
 * Load the saved terrain height map. This will restore the state of the terrain height map to
 */
declare function Terrain_LoadHeightMap(): any;

/**
 * Save the current terrain height map. It can be restored to that state by using Terrain_LoadHeightMap.
 */
declare function Terrain_SaveHeightMap(): any;

/**
 * Hide metadata layer overlay on terrain
 */
declare function TerrainHighlight_Hide(): any;

/**
 * Display metadata layer on terrain. Replaces previously displayed terrain highlight
 */
declare function TerrainHighlight_Show(metadataLayerName: string, opacity: number): any;

/**
 * Add a rule to be executed every frame.
 * Returns the ID of the rule just added.
 */
declare function Rule_Add(f: any, data?: any, group?: RuleGroup): number;

/**
 * Add a rule to be executed when the event of 'eventType' has happened on entities in the 'egroup'
 * Event types are: GE_EntityKilled, GE_EntityParadropComplete, GE_EntityCommandIssued, GE_ProjectileFired, GE_AbilityExecuted, GE_SpawnActionComplete
 */
declare function Rule_AddEGroupEvent(rule: any, egroup: EGroupID, eventtype: number): void;

/**
 * Add a rule to be executed when the event of 'eventType' has happened on the 'entity'
 * Event types are: GE_EntityKilled, GE_EntityParadropComplete, GE_EntityCommandIssued, GE_ProjectileFired, GE_AbilityExecuted, GE_SpawnActionComplete
 */
declare function Rule_AddEntityEvent(rule: any, entity: EntityID, eventtype: number): void;

/**
 * Add a rule to be executed when the event of 'eventType' has happened, regardless of source
 * Event types are: GE_PlayerBeingAttacked
 */
declare function Rule_AddGlobalEvent(rule: any, eventtype: number): void;

/**
 * Add a rule to be executed. Can include a start delay, an interval between rule calls and a count of how many times the rule is called.
 * interval can be a number (the interval between subsequent rule calls) or a table with the keys: "delay", "interval" and "count". Returns the ID of the rule just added.
 */
declare function Rule_AddInterval(f: any, interval: number | any, data?: any, group?: RuleGroup): number;

/**
 * Add a rule to be executed once, after 'delay' seconds.
 * Returns the ID of the rule just added.
 */
declare function Rule_AddOneShot(rule: any, delay?: number, data?: any, group?: RuleGroup): number;

/**
 * Add a rule to be executed when the event of 'eventType' has happened on the 'player'
 * Event types are: GE_PlayerBeingAttacked, GE_PlayerCommandIssued, GE_AbilityExecuted, GE_UpgradeComplete, GE_ConstructionComplete, GE_BuildItemComplete, GE_PlayerKilled, GE_SpawnActionComplete, GE_AIPlayer_EncounterNotification
 */
declare function Rule_AddPlayerEvent(rule: any, player: PlayerID, eventtype: number): void;

/**
 * Add a rule to be executed when the event of 'eventType' has happened on squads in the 'sgroup'
 * Event types are: GE_SquadKilled, GE_SquadPinned, GE_SquadParadropComplete, GE_SquadCommandIssued, GE_AbilityExecuted, GE_SpawnActionComplete
 */
declare function Rule_AddSGroupEvent(rule: any, sgroup: SGroupID, eventtype: number): void;

/**
 * Add a rule to be executed when the event of 'eventType' has happened on the 'squad'
 * Event types are: GE_SquadKilled, GE_SquadPinned, GE_SquadParadropComplete, GE_SquadCommandIssued, GE_AbilityExecuted, GE_SpawnActionComplete
 */
declare function Rule_AddSquadEvent(rule: any, squad: SquadID, eventtype: number): void;

/**
 * Change 'interval' seconds of all rules with LuaFunction f
 */
declare function Rule_ChangeInterval(rule: any, interval: number): void;

/**
 * Change 'interval' seconds of an existing rule with id
 */
declare function Rule_ChangeIntervalWithID(id: number, interval: number): void;

/**
 * Triggers when a group (SGroup/EGroup) gets close enough to a location
 */
declare function Rule_EnterProximity(f: any, all: boolean, who: SGROUP | EGroup, where: MARKER, range?: number, recur?: boolean, data?: any): void;

/**
 * Test if a rule with LuaFunction f is currently active
 */
declare function Rule_Exists(rule: any): boolean;

/**
 * Test if a rule with id is currently active. Only for TimeRules
 */
declare function Rule_ExistsWithID(id: number): boolean;

/**
 * Triggers when a group (SGroup/EGroup) gets far enough from a location (the group must enter the range before this can trigger)
 */
declare function Rule_ExitProximity(f: any, all: boolean, who: SGROUP | EGroup, where: MARKER, range?: number, recur?: boolean, data?: any): void;

/**
 * Comparison is one of IS_LESS_THAN; IS_LESS_THAN_OR_EQUAL; IS_EQUAL; IS_NOT_EQUAL; IS_GREATER_THAN; IS_GREATER_THAN_OR_EQUAL. Triggers when the number of objects in the group, when compared to value by comparison, is true
 */
declare function Rule_GroupCount(f: any, group: SGROUP | EGroup, comparison: Comparison, value: number, recur: boolean, data: any): void;

/**
 * Pause all rules with LuaFunction for
 */
declare function Rule_Pause(f: any): void;

/**
 * Pause all currently active rules. Ignores Unpauseable rules.
 */
declare function Rule_PauseAll(Table: number): void;

/**
 * Pause all rules with with id. Only for TimeRules
 */
declare function Rule_PauseWithID(id: number): void;

/**
 * Refreshes all Time and Event rules
 */
declare function Rule_Refresh(): any;

/**
 * Remove all currently active rules with LuaFunction f (this does not remove any event rules)
 */
declare function Rule_Remove(rule: any): void;

/**
 * Kills all rules below a certain priority. The default is to remove ALL rules.
 */
declare function Rule_RemoveAll(max_priority: number): void;

/**
 * Remove an active event rule for entities in the 'egroup'
 */
declare function Rule_RemoveEGroupEvent(rule: any, egroup: EGroupID): void;

/**
 * Remove an active event rule for the 'entity'
 */
declare function Rule_RemoveEntityEvent(rule: any, entity: EntityID): void;

/**
 * Remove an active event rule that's been applied 'globally'
 */
declare function Rule_RemoveGlobalEvent(rule: any): void;

/**
 * Remove a currently executing rule (only works inside a rule function)
 */
declare function Rule_RemoveMe(): void;

/**
 * Remove an active event rule for the 'player'
 */
declare function Rule_RemovePlayerEvent(rule: any, player: PlayerID): void;

/**
 * Remove an active event rule for squads in the 'sgroup'
 */
declare function Rule_RemoveSGroupEvent(rule: any, sgroup: SGroupID): void;

/**
 * Remove an active event rule for the 'squad'
 */
declare function Rule_RemoveSquadEvent(rule: any, squad: SquadID): void;

/**
 * Remove a currently active rule with id (this does not remove any event rules)
 */
declare function Rule_RemoveWithID(id: number): void;

/**
 * Replaces the function callback for all currently active rules with LuaFunction f (This only applies to TimeRules)
 */
declare function Rule_Replace(oldf: any, newf: any): void;

/**
 * Replaces the function callback for all currently active rules with an id (This only applies to TimeRules)
 */
declare function Rule_ReplaceWithID(id: number, newf: any): void;

/**
 * Unpause all rules with LuaFunction for
 */
declare function Rule_Unpause(f: any): void;

/**
 * Unpause all rules
 */
declare function Rule_UnpauseAll(): any;

/**
 * Unpause all rules with with id. Only for TimeRules
 */
declare function Rule_UnpauseWithID(id: number): void;

/**
 * Triggers every interval seconds that the group is within range of the location
 */
declare function Rule_WhileInProximity(f: any, all: boolean, who: SGROUP | EGroup, where: MARKER, range?: number, interval?: number, recur?: boolean, data?: any): void;

/**
 * Pass in a group to command to 'stop'. Pass in booleans for capturing and building
 */
declare function Cmd_StopSquadsExcept(sgroup1: SGroupID, stopCapture?: boolean, stopBuild?: boolean): void;

/**
 * Instantly adds an upgrade to all entities in a given EGroup.
 */
declare function EGroup_CompleteUpgrade(egroup: EGroupID, upgrade: number): any;

/**
 * Filters an EGroup to either FILTER_REMOVE or FILTER_KEEP entities that are currently camouflaged (stealthed included)
 * @extdesc
 */
declare function EGroup_FilterCamouflaged(sgroup: EGroupID, filtertype: number, splitEGroup?: EGroupID): void;

/**
 * Restore the targeting type of the entities in this EGroup to their respective defaults (as found in their EBPs)
 */
declare function EGroup_RestoreTargetingType(egroup: EGroupID): any;

/**
 * Enables or disables the burn extenstion
 */
declare function EGroup_SetBurnExtEnabled(egroup: EGroupID, enabled: boolean): void;

/**
 * Set the allowable methods of targeting the entities in this EGroup.
 */
declare function EGroup_SetTargetingType(egroup: EGroupID, targetingType: TargetingType): void;

/**
 * Test whether ANY or ALL of an EGroup is on screen currently (not strict)
 */
declare function Misc_IsEGroupOnScreen(group: EGroupID, percent: number, all: boolean): any;

/**
 * Test whether ANY or ALL of an SGroup is on screen currently (not strict)
 */
declare function Misc_IsSGroupOnScreen(group: SGroupID, percent: number, all: boolean): any;

/**
 * Adds an squadron to the end of a group if the group doesnt already have it.
 */
declare function SGroup_Add(group: SGroupID, squadron: SquadID): void;

/**
 * Adds an ability to all squads in an sgroup.
 */
declare function SGroup_AddAbility(sgroup: SGroupID, ability: AbilityBlueprint): void;

/**
 * Same as EGroup_AddGroup.  Note: You cannot mix squad groups and entity groups.
 */
declare function SGroup_AddGroup(group: SGroupID, grouptoadd: SGroupID): void;

/**
 * Add a list of multiple sgroups into an existing group.
 */
declare function SGroup_AddGroups(sgroup: SGroupID, groupList: any): void;

/**
 * Adds a leader to all squads in a group that can take a leader.
 * This function will bypass all cost and queue prereqs
 */
declare function SGroup_AddLeaders(sgroup: SGroupID): void;

/**
 * Adds the amount of resource type for a squad.
 * If SGroup contains multiple squads, it will add for all
 */
declare function SGroup_AddResource(sgroup: SGroupID, resource: number, amount: number): void;

/**
 * Add to the list of slot items to drop when any one of the squads is wiped out
 * example:	local item = Util_GetSlotItemID( "slot_item/allies_m9bazooka.lua" )
 * @extdesc			SGroup_AddSlotItemToDropOnDeath( squadid, item, false )
 * exlusive means the squad would only drop this item, thus erasing all previous items in list
 * Drop chance is percentage chance the item will drop (0.0-1.0)
 */
declare function SGroup_AddSlotItemToDropOnDeath(groupid: SGroupID, itemid: number, drop_chance: number, exclusive: boolean): void;

/**
 * Test whether ANY or ALL of a group can be ordered to do this ability on the target squad
 */
declare function SGroup_CanCastAbilityOnEntity(caster: SGroupID, ability: number, target_entity: EntityID, all: boolean): any;

/**
 * Test whether ANY or ALL of a group can be ordered to do this ability on the target position
 */
declare function SGroup_CanCastAbilityOnPosition(caster: SGroupID, ability: number, position: Position, all: boolean): any;

/**
 * Test whether ANY or ALL of a group can be ordered to do this ability on the target entity
 */
declare function SGroup_CanCastAbilityOnSquad(caster: SGroupID, ability: number, target_squad: SquadID, all: boolean): any;

/**
 * Return true if ANY or ALL of a group can reinforce now
 */
declare function SGroup_CanInstantReinforceNow(group: SGroupID, all: boolean): boolean;

/**
 * Returns true if ALL or ANY entities in a group can see ALL or ANY entities in a given egroup.
 */
declare function SGroup_CanSeeEGroup(sgroup: SGroupID, targetegroup: EGroupID, all: boolean): boolean;

/**
 * Returns true if ALL or ANY squads in a group can see ALL or ANY squads in a target sgroup.
 */
declare function SGroup_CanSeeSGroup(sgroup: SGroupID, targetsgroup: SGroupID, all: boolean): boolean;

/**
 * Removes all entities from a group.
 */
declare function SGroup_Clear(sgroup: SGroupID): void;

/**
 * Clears any previous posture suggestions made to a squad
 */
declare function SGroup_ClearPostureSuggestion(sgroup: SGroupID): void;

/**
 * Returns true if the contents of the two groups are equal. Order of the entities does not matter.
 */
declare function SGroup_Compare(group1: SGroupID, group2: SGroupID): boolean;

/**
 * Applies an upgrade to all squad entities in an sgroup.
 */
declare function SGroup_CompleteEntityUpgrade(sgroup: SGroupID, upgrade: UpgradeID): void;

/**
 * Instantly adds an upgrade to all squads in a given SGroup.
 */
declare function SGroup_CompleteUpgrade(sgroup: SGroupID, upgrade: number): any;

/**
 * Check if a group contains ALL or ANY of the blueprints.
 */
declare function SGroup_ContainsBlueprints(sgroup: SGroupID, blueprints: BP | any, all: boolean): boolean;

/**
 * Returns true if SGroup1 contains ANY or ALL of SGroup2
 */
declare function SGroup_ContainsSGroup(group1: SGroupID, group2: SGroupID, all: boolean): boolean;

/**
 * Returns true if SGroup contains a particular SquadID
 */
declare function SGroup_ContainsSquad(group: SGroupID, SquadID: number): boolean;

/**
 * Returns the total number of spawned and despawned squads in a group.
 * NOTE: SGroup_Count does not count the individiual soldiers in an SGroup.  For that, use SGroup_TotalMembersCount
 */
declare function SGroup_Count(sgroup: SGroupID): number;

/**
 * Returns the number of squads within an Sgroup that match an alliance with the player passed in
 */
declare function SGroup_CountAlliedSquads(group: SGroupID, player: PlayerID): any;

/**
 * Returns the total count of all squads in a given SGroup with the provided blueprint or type
 */
declare function SGroup_CountBlueprints(sgroup: SGroupID, sbp: SBP | string | any): number;

/**
 * Returns the number of despawned squads in a group.
 */
declare function SGroup_CountDeSpawned(sgroup: SGroupID): number;

/**
 * Returns the number of squads within an Sgroup that match an alliance with the player passed in
 */
declare function SGroup_CountEnemySquads(group: SGroupID, player: PlayerID): any;

/**
 * Counts the total population cost of an SGroup by iterating over each individual Squad
 */
declare function SGroup_CountPopulation(sgroup: SGroupID): number;

/**
 * Returns the number of spawned squads in a group.
 */
declare function SGroup_CountSpawned(sgroup: SGroupID): number;

/**
 * Returns a new squadron group with the given name.
 * Squad groups are used for all units and vehicles.  You can issue orders such as move and attack to an entire squad group.  If you want a group for buildings or objects such as trees, use an EntityGroupObs instead.  Note that you are allowed to have unamed squadgroups or squadgroups with the samename.  Be careful not to create  duplicates of your squad group when you dont intend to.  To be safe, you can check if the SquadGroupObs you want to create  exists using SGroup_Exists( )
 */
declare function SGroup_Create(name: string): SGroupID;

/**
 * Find a squad group from name.  Creates a new one with given name if it doesnt exist.
 */
declare function SGroup_CreateIfNotFound(name: string): SGroupID;

/**
 * Create and display kicker message on the each squad in the sgroup to the player
 */
declare function SGroup_CreateKickerMessage(group: SGroupID, player: PlayerID, textid: string): void;

/**
 * Returns an SGroup with a unique name, prefixed by the 'prefix' parameter.
 */
declare function SGroup_CreateUnique(prefix?: string): SGROUP;

/**
 * Returns a new squad group with an autogenerated unique name, optionally prefixed by the string passed in.
 * Use this if you want to create a new SGroup but don't necessarily care about the name.\n Squad groups are used for all units and vehicles.  You can issue orders such as move and attack to an entire squad group.\n
 */
declare function SGroup_CreateUniqueWithPrefix(prefix: string): any;

/**
 * Despawn all spawned squads in a group.
 */
declare function SGroup_DeSpawn(groupid: SGroupID): void;

/**
 * Manually destroy a group that you dont need anymore.
 */
declare function SGroup_Destroy(egroup: SGroupID): void;

/**
 * Destroys all items in a group that are in proximity to a given marker.
 */
declare function SGroup_DestroyAllInMarker(sgroup: SGroupID, marker: MarkerID): void;

/**
 * Destroys all spawned and despawned squads in a group.
 * @extdesc
 * Be careful not to confuse this with SGroup_Destroy which destroys the group and NOT the squads it contains.  This function will destroy
 * spawned and despawned items in a group
 */
declare function SGroup_DestroyAllSquads(sgroup: SGroupID): void;

/**
 * Disables all current combat plans for the squads in the sgroup
 */
declare function SGroup_DisableCombatPlans(groupID: SGroupID): void;

/**
 * Duplicates an SGroup. Creates a copy of sgroup1 in sgroup2. The function will clear sgroup2 beforehand if necessary.
 */
declare function SGroup_Duplicate(sgroup1: SGroupID, sgroup2: SGroupID): void;

/**
 * Sets whether an entity pays attention to its surroundings
 */
declare function SGroup_EnableAttention(sgroup: SGroupID, attentive: boolean): void;

/**
 * Enable or disable minimap indicator on all squads in the sgroup
 */
declare function SGroup_EnableMinimapIndicator(group: SGroupID, enable: boolean): void;

/**
 * Enables or disables the surprise feature for an sgroup
 */
declare function SGroup_EnableSurprise(groupid: SGroupID, enable: boolean): void;

/**
 * Enable or disable decorators on all squads in the sgroup
 */
declare function SGroup_EnableUIDecorator(group: SGroupID, enable: boolean): void;

/**
 * Returns true if the squad group with the given name exists
 */
declare function SGroup_Exists(name: string): boolean;

/**
 * Makes two SGroups face each other
 */
declare function SGroup_FaceEachOther(sgroup1: SGroupID, sgroup2: SGroupID): void;

/**
 * Makes a SGroup face a marker.
 */
declare function SGroup_FaceMarker(sgroup: SGroupID, marker: MarkerID): void;

/**
 * Filters an SGroup by blueprint.
 * A table of blueprints can be specified if you want to filter on more than one type.
 * Setting filtertype to FILTER_KEEP results in the group only containing squads of the types listed in the blueprint table.
 * Setting filtertype to FILTER_REMOVE will strip those same squads out and leave those that aren't of the types listed.
 * Setting splitSGroup will move any squads being KEEP or REMOVE to it.  This SGroup will NOT be cleared beforehand.
 * SquadTypes can also be used in place of Blueprints. If you want a squad to match a bunch of SquadTypes at the same time (i.e. AND instead of OR) then they can be listed together in a sub-table.
 */
declare function SGroup_Filter(sgroup: SGroupID, blueprint: SBP | SquadType | any, filtertype: number, splitSGroup?: SGroupID): void;

/**
 * Filters an sgroup base on proximity. Use FILTER_KEEP to keep the affected units, or FILTER_REMOVE to remove them. Set invertPosition to TRUE to affect the units outside the position.
 */
declare function SGroup_FilterByProximity(sgroup: SGroupID, position: Position, filtertype: number, OPT_OPT_range?: number, OPT_OPT_splitSGroup?: SGroupID): any;

/**
 * Filters an SGroup to either FILTER_REMOVE or FILTER_KEEP units that are currently camouflaged (stealthed included)
 * @extdesc
 */
declare function SGroup_FilterCamouflaged(sgroup: SGroupID, filtertype: number, splitSGroup?: SGroupID): void;

/**
 * Pass in a group and it will filter it down to the indicated number
 */
declare function SGroup_FilterCount(sgroup1: SGroupID, groupSize: number, splitSGroup?: SGroupID): void;

/**
 * Filters an SGroup by whether units are on screen or not. Percent refers to the screen area you are considering (0.8 is a good value to use - it won't include things that are right at the screen edge).
 * Setting filtertype to FILTER_KEEP results in the group only containing those squads that are on screen.
 */
declare function SGroup_FilterOnScreen(egroup: SGroupID, percent: number, filtertype: number): void;

/**
 * Filters an sgroup on spawned/despawned status. Use FILTER_KEEP to keep the spawned units (therefore removing the despawned), or FILTER_REMOVE to remove the spawned units (and keep the despawned).
 */
declare function SGroup_FilterSpawned(sgroup: SGroupID, filtertype: number, OPT_splitSGroup?: SGroupID): any;

/**
 * Searches an SGroup and finds the first threat within the table (searching first to last) and removes all other SBPs.
 * @extdesc
 * Optional parameter bEmpty can be set to true, will clear the SGroup if none of the SBPS in the table are found.
 */
declare function SGroup_FilterThreat(sgroup: SGroupID, tableSBPs: any, bEmpty?: boolean): void;

/**
 * Call a lua function for each item in a group. Function will recieve (groupid, itemindex, itemid) and should return true to break or false to continue.
 * function Rule_Test( ) ???local DespawnSquad = function( sgroupid, itemindex, squadID ) ??????Squad_Despawn( squadID ) ???end ???SGroup_ForEach( SGroup_FromName("sg_Squads"), DespawnSquad ) end This functions iterates over spawned squads only.
 */
declare function SGroup_ForEach(sgroup: SGroupID, f: LuaBinding): boolean;

/**
 * Call a lua function for each item in a group. Function will recieve (groupid, itemindex, itemid) and should return a bool.
 * Only use this to TEST conditions on squads. DO NOT use this to perform operations on all squads, since it may not call your function on all squads (due to short circuit evaluation). This is used for checking if ALL or ANY items in a group match a given predicate. (eg. Are all items in a group choas marines) This functions iterates over spawned squads only.
 */
declare function SGroup_ForEachAllOrAny(sgroup: SGroupID, all: boolean, f: LuaBinding): boolean;

/**
 * Same as SGroup_ForEachAllOrAny except you have a choice to iterate over spawned squads, despawned squads, or both.
 */
declare function SGroup_ForEachAllOrAnyEx(sgroup: SGroupID, all: boolean, f: LuaBinding, spawned: boolean, despawned: boolean): boolean;

/**
 * Same as SGroup_ForEach except you have a choice to iterate over spawned squads, despawned squads, or both.
 */
declare function SGroup_ForEachEx(sgroup: SGroupID, f: LuaBinding, spawned: boolean, despawned: boolean): boolean;

/**
 * Find an squadron group with a given name.
 */
declare function SGroup_FromName(name: string): SGroupID;

/**
 * Returns the average health ratio of all units in a squad group.
 * It now uses the same health measure that's used by the UI, so it does take into account fallen members of a squad
 */
declare function SGroup_GetAvgHealth(sgroup: SGroupID): number;

/**
 * Return the average health ratio, including shield strengths, of the squads in the SGroup
 */
declare function SGroup_GetAvgHealthPercentageWithShields(sgroup: SGroupID, includeBonuses: boolean): any;

/**
 * Returns the average loadout of all squads in a group as a percent [0.0, 1.0].
 * Example: A group of squads with loadouts of 4/8 and 1/1 would return 0.75
 */
declare function SGroup_GetAvgLoadout(sgroup: SGROUP): number;

/**
 * Return the average shield strengths of the squads in the SGroup (as a percentage)
 */
declare function SGroup_GetAvgShieldPercentage(sgroup: SGroupID): any;

/**
 * Get the closest squad in an sgroup to a given position
 */
declare function SGroup_GetClosestSquad(sgroupid: SGROUP, position: MARKER | Position): SquadID;

/**
 * Returns the despawned squad at a certain position in the group.
 * This is a one-based index (use index 1 to get the first squad in the group.)    It is an error if index > SGroup_GetDeSpawnedCount().
 */
declare function SGroup_GetDeSpawnedSquadAt(group: SGroupID, index: number): SquadID;

/**
 * Get the entity id of the building that any squad of the sgroup is garrisoned in
 */
declare function SGroup_GetGarrisonedBuildingEntity(groupid: SGroupID): EntityID;

/**
 * Gets all the entities that an SGroup may occupy and adds them to the EGroupHold
 */
declare function SGroup_GetHoldEGroup(sgroup: SGroupID, EGroupHold: EGroup): void;

/**
 * Gets all the squads that an SGroup may occupy and adds them to the SGroupHold
 */
declare function SGroup_GetHoldSGroup(sgroup: SGroupID, SGroupHold: SGROUP): void;

/**
 * Check invulnerablity state for ALL or ANY squads in a squad group.
 */
declare function SGroup_GetInvulnerable(sgroup: SGroupID, all: boolean): boolean;

/**
 * Gets the last attacker(s) for all the squads in an SGroup
 * Gets the last attacker for all the squads in an SGroup and stores that in SGroupAttacker
 */
declare function SGroup_GetLastAttacker(SGroupVictim: SGROUP, SGroupAttacker: SGROUP, seconds?: number): void;

/**
 * Get the squad id of the vehicle squad that any squad of the sgroup is loaded in
 */
declare function SGroup_GetLoadedVehicleSquad(groupid: SGroupID): SquadID;

/**
 * Returns the name of a given squad group.
 */
declare function SGroup_GetName(sgroup: SGroupID): string;

/**
 * Get the number of slot items with the same ID that the squads in the sgroup own
 */
declare function SGroup_GetNumSlotItem(group: SGroupID, itemID: number): number;

/**
 * Returns a position (a certain distance away) relative to a squad's current position/orientation. see ScarUtil.scar for explanation of 'offset' parameter
 */
declare function SGroup_GetOffsetPosition(sgroup: SGroupID, offset: number, value: number): Position;

/**
 * Returns the center position of a squad group.
 * Despawned squads are ignored.
 */
declare function SGroup_GetPosition(group: SGroupID): Position;

/**
 * Get a random spawned squad from sgroup
 */
declare function SGroup_GetRandomSpawnedSquad(sgroupid: SGROUP): SquadID;

/**
 * Gets the amount of resource type for a squad.
 * If SGroup contains multiple squads, it will be the total of all
 */
declare function SGroup_GetResource(sgroup: SGroupID, resource: number): number;

/**
 * Builds a table of SGroupIDs that are named in a sequence. i.e. a name of "sg_killer" will find groups "sg_killer1", "sg_killer2" and so on, up until it looks for a group that isn't there.
 */
declare function SGroup_GetSequence(name: string): any;

/**
 * Returns the spawned squad at a certain position in the group.
 * This is a one-based index (use index 1 to get the first squad in the group.)    It is an error if index > SGroup_GetSpawnedCount().
 */
declare function SGroup_GetSpawnedSquadAt(group: SGroupID, index: number): SquadID;

/**
 * Returns the distance from the centre of the group of the unit that furthest out.
 */
declare function SGroup_GetSpread(sgroup: SGroupID): number;

/**
 * Returns the squad at a certain position in the group.
 * This is a one-based index (use index 1 to get the first squad in the group.) It is an error if index > SGroup_Count().
 */
declare function SGroup_GetSquadAt(group: SGroupID, int: number): any;

/**
 * Returns an sgroup containing all squads held by any squad in an sgroup
 */
declare function SGroup_GetSquadsHeld(sgroup: SGroupID, sgroupRecipient: SGroupID): void;

/**
 * Get the suppression level for the first squad in the sgroup
 */
declare function SGroup_GetSuppression(groupid: SGroupID): number;

/**
 * Get the veterancy experience value for the first squad in the sgroup
 */
declare function SGroup_GetVeterancyExperience(groupid: SGroupID): number;

/**
 * Get the veterancy rank for the first squad in the sgroup
 */
declare function SGroup_GetVeterancyRank(groupid: SGroupID): number;

/**
 * Test whether ANY or ALL units in a group have a specified ability
 */
declare function SGroup_HasAbility(sgroup: SGroupID, ability: AbilityBlueprint, all: boolean): boolean;

/**
 * Check if ALL or ANY squads in a sgroup have a leader
 */
declare function SGroup_HasLeader(sgroup: SGroupID, all: boolean): boolean;

/**
 * Check if ALL or ANY of the squads in a group have a specific blueprint.
 * The blueprint can be a table of blueprints or types (see Squad_HasBlueprint() for details)
 */
declare function SGroup_HasSquadBlueprint(sgroup: SGroupID, blueprint: SBP | SquadType | any, all: boolean): boolean;

/**
 * Returns true if ANY or ALL of the squads in an SGroup are carrying some kind of team weapon
 */
declare function SGroup_HasTeamWeapon(sgroup: SGroupID, all: boolean): boolean;

/**
 * Returns whether ANY or ALL squads in an SGroup have the specified upgrade
 */
declare function SGroup_HasUpgrade(sgroup: SGroupID, upgrade: UpgradeID, all: boolean): boolean;

/**
 * Hide or show all entities in all squads in an SGroup
 * Bool should be true to hide, false to show
 */
declare function SGroup_Hide(sgroup: SGroupID, hide: boolean): void;

/**
 * Increase squad veterancy experience for all squads in the sgroup. Can do silent promotion (no sound/UI). Can skip modifiers, giving you direct control of experience gained.
 */
declare function SGroup_IncreaseVeterancyExperience(groupid: SGroupID, experience: number, silent?: boolean, applyModifiers?: boolean): void;

/**
 * Increase squad veterancy rank for all squads in the sgroup. By default, increases rank by 1. Can do silent promotion (no sound/UI. ex: mass rank insrease at mission start)
 */
declare function SGroup_IncreaseVeterancyRank(groupid: SGroupID, numranks?: number, silent?: boolean): void;

/**
 * Same as EGroup_Intersection. Note: You cannot mix squad groups and entity groups.
 * Only squads that are in both groups will be added to 'group'. The contents of 'grouptointersect' will not be changed. Example: group = (1,2,3,4,5,6)  grouptointersect = (2,4,6,8,10)   --> group will now equal (2,4,6)
 */
declare function SGroup_Intersection(group: SGroupID, grouptointersect: SGroupID): void;

/**
 * Returns true if a named squad group is not empty and its average health is > 0.0
 */
declare function SGroup_IsAlive(sgroup: SGroupID): boolean;

/**
 * Returns true if ANY or ALL squads in an SGroup are attack moving.
 */
declare function SGroup_IsAttackMoving(sgroup: SGroupID, all: boolean): boolean;

/**
 * Returns true if ANY or ALL of the squads in an SGroup are camouflaged
 */
declare function SGroup_IsCamouflaged(sgroup: SGroupID, all: boolean): boolean;

/**
 * Checks if ANY or ALL squads in an SGroup are capturing
 */
declare function SGroup_IsCapturing(sgroup: SGroupID, ALL: boolean): boolean;

/**
 * Returns true if ALL or ANY squads in a group are currently constructing a building.
 * Set all to true to check for ALL or set to false to check for ANY
 */
declare function SGroup_IsConstructingBuilding(sgroup: SGROUP, all: boolean): boolean;

/**
 * Returns if ANY or ALL members of an SGroup are doing an ability
 */
declare function SGroup_IsDoingAbility(sgroupid: SGroupID, ability: AbilityID, all: boolean): boolean;

/**
 * Returns true if ALL or ANY squads are attacking within the time.
 */
declare function SGroup_IsDoingAttack(sgroup: SGroupID, all: boolean, time: number): boolean;

/**
 * Returns true if ANY or ALL of the squads in the SGroup is dug in (or in the process of digging in)
 */
declare function SGroup_IsDugIn(group: SGroupID, all: boolean): boolean;

/**
 * Returns true if a named squad group is empty
 */
declare function SGroup_IsEmpty(sgroup: SGroupID): boolean;

/**
 * Returns true if ANY or ALL squads are female
 */
declare function SGroup_IsFemale(sgroup: SGroupID, all: boolean): boolean;

/**
 * Returns whether any entity in an SGroup has a hold on anything
 */
declare function SGroup_IsHoldingAny(sgroup: SGroupID): void;

/**
 * Checks if ANY or ALL squads in an SGroup are idle
 */
declare function SGroup_IsIdle(sgroup: SGroupID, ALL: boolean): boolean;

/**
 * Returns the percentage of the SGroup members that are in cover. Alternatively, specify ANY or ALL as a second parameter to return true/false.
 */
declare function SGroup_IsInCover(sgroup: SGroupID, all?: boolean): number;

/**
 * Returns true if ALL or ANY squads in a group are infiltrated
 */
declare function SGroup_IsInfiltrated(sgroup: SGroupID, all: boolean): boolean;

/**
 * Checks if ANY or ALL squads in an SGroup are garrisoned in an entity (building)
 */
declare function SGroup_IsInHoldEntity(sgroup: SGroupID, ALL: boolean): boolean;

/**
 * Checks if ANY or ALL squads in an SGroup are garrisoned in a squad (transport vehicle)
 */
declare function SGroup_IsInHoldSquad(sgroup: SGroupID, ALL: boolean): boolean;

/**
 * Returns true if ANY or ALL squads in an SGroup are moving.
 */
declare function SGroup_IsMoving(sgroup: SGroupID, all: boolean): boolean;

/**
 * Returns true if ANY or ALL (use those keywords) of the squads in the group are present onscreen. You can pass in a percentage of the screen to check, so 0.8 would be a centered rectangle occupying 80% of the screen.
 */
declare function SGroup_IsOnScreen(player: PlayerID, group: SGroupID, all: boolean, percent?: number): boolean;

/**
 * Returns true if ANY or ALL of a group is pinned
 */
declare function SGroup_IsPinned(group: SGroupID, all: boolean): boolean;

/**
 * Returns true if ALL or ANY squads in a group are currently calling for reinforcments.
 * Set all to true to check for ALL or set to false to check for ANY
 */
declare function SGroup_IsReinforcing(sgroup: SGroupID, all: boolean): boolean;

/**
 * Returns true if ANY or ALL of the squads in an SGroup are currently retreating
 */
declare function SGroup_IsRetreating(sgroup: SGroupID, all: boolean): boolean;

/**
 * Returns true if ANY or ALL squads are setting demolitions
 */
declare function SGroup_IsSettingDemolitions(sgroup: SGroupID, all: boolean): boolean;

/**
 * Returns true is ANY or ALL of a group is suppressed
 */
declare function SGroup_IsSuppressed(group: SGroupID, all: boolean): boolean;

/**
 * Returns true if ALL or ANY squads are under attack within the time.
 */
declare function SGroup_IsUnderAttack(sgroup: SGroupID, all: boolean, time: number): boolean;

/**
 * Check if the squads are attacked by the player
 */
declare function SGroup_IsUnderAttackByPlayer(group: SGroupID, attackerplayer: PlayerID, duration: number): boolean;

/**
 * Returns true if ALL or ANY squads are under attack from a direction within the time. see ScarUtil.scar for types of directions. you can pass in a table of directions
 */
declare function SGroup_IsUnderAttackFromDirection(sgroup: SGroupID, all: boolean, offset: number, time: number): boolean;

/**
 * Returns true if ALL or ANY squads in a group are currently upgrading. You can pass in nil for upgradeid if it doesn't matter what is being upgraded.
 * Set all to true to check for ALL or set to false to check for ANY
 */
declare function SGroup_IsUpgrading(sgroup: SGroupID, blueprint: UpgradeBlueprint, all: boolean): boolean;

/**
 * Checks if ANY or ALL squads in an SGroup are using an ability
 * Does not check WHAT ability a squad is using.
 */
declare function SGroup_IsUsingAbility(sgroup: SGroupID, ALL: boolean): boolean;

/**
 * Check to see if an sgroup still exists without needing the name.
 */
declare function SGroup_IsValid(sgroupID: number): any;

/**
 * Kills all squads in an SGroup. This kills them 'naturally', as opposed to SGroup_DestroyAllSquads() which makes them blink out of existance.
 */
declare function SGroup_Kill(sgroup: SGroupID): void;

/**
 * Removes an squadron from a group.
 */
declare function SGroup_Remove(group: SGroupID, squadron: SquadID): void;

/**
 * Removes an ability that was previously added by SGroup_AddAbility. You cannot remove static abilities (from AE: squad_ability_ext)
 */
declare function SGroup_RemoveAbility(sgroup: SGroupID, ability: AbilityBlueprint): void;

/**
 * Remove from the first SGroup all squads contained in the second SGroup. SGroup2 remains untouched.
 */
declare function SGroup_RemoveGroup(group: SGroupID, grouptoremove: SGroupID): void;

/**
 * Removes upgrade(s) from an sgroup
 */
declare function SGroup_RemoveUpgrade(sgroup: SGroupID, upgrade: UpgradeBlueprint | any): void;

/**
 * Respawn all despawned squads in a group.
 */
declare function SGroup_ReSpawn(groupid: SGroupID): void;

/**
 * Restore all current combat plans for the squads in the sgroup
 */
declare function SGroup_RestoreCombatPlans(sgroupID: SGroupID): void;

/**
 * Give action points to the squad
 */
declare function SGroup_RewardActionPoints(sgroup: SGroupID, actionpoint: number): void;

/**
 * Trigger animation action for an SGroup. Please only use this for simple animations
 */
declare function SGroup_SetAnimatorAction(sgroupid: SGroupID, actionName: string): void;

/**
 * Trigger animation event for an SGroup. Please only use this for simple animations
 */
declare function SGroup_SetAnimatorEvent(sgroupid: SGroupID, eventName: string): void;

/**
 * Set animation state of a state machine for an SGroup. Please only use this for simple animations
 */
declare function SGroup_SetAnimatorState(sgroupid: SGroupID, stateMachineName: string, stateName: string): void;

/**
 * Sets whether a weapon will auto-target things or not
 */
declare function SGroup_SetAutoTargetting(group: SGroupID, hardpoint: string | number, enable: boolean): void;

/**
 * Sets the health of each squad in a squad group to a given percent [0.0, 1.0].
 */
declare function SGroup_SetAvgHealth(sgroup: SGroupID, healthpercent: number): number;

/**
 * Sets the moral of each squad in a squad group to a given percent [0.0, 1.0].
 */
declare function SGroup_SetAvgMorale(sgroup: SGROUP, moralepercent: number): number;

/**
 * Overrides crushable behavior for an sgroup
 */
declare function SGroup_SetCrushable(sgroup: SGroupID, crushable: boolean): void;

/**
 * Enable/Disable invulnerablity for an entire SGroup. Use true and false for simple on/off, or use a number between 0.0 and 1.0 for more precise control on how much damage a squad can take before it takes no more.
 * The optional reset_time is used to automatically remove invulnerability after a set time. If invulnerable, both health damage is disabled.
 */
declare function SGroup_SetInvulnerable(sgroup: SGroupID, enabled: boolean | number, reset_time?: number): void;

/**
 * Set soldier mood mode. Mode could be MM_Auto, MM_ForceCalm or MM_ForceTense
 */
declare function SGroup_SetMoodMode(group: SGroupID, mode: number): void;

/**
 * Changes the player owner of spawned and despawned squads in an SGroup.
 */
declare function SGroup_SetPlayerOwner(sgroup: SGroupID, owner: PlayerID): void;

/**
 * Sets all squads in as sgroup to be recrewable or not when abandoned
 */
declare function SGroup_SetRecrewable(sgroup: SGroupID, recrewable: boolean): void;

/**
 * Sets the amount of resource type for a squad.
 * If SGroup contains multiple squads, it will set for all
 */
declare function SGroup_SetResource(sgroup: SGroupID, resource: number, amount: number): void;

/**
 * Set player selectable state of squads in the sgroup
 */
declare function SGroup_SetSelectable(sgroupid: SGROUP, selectable: boolean): void;

/**
 * Enables shared team production on a building (teammates can build using THEIR resources)
 */
declare function SGroup_SetSharedProductionQueue(egroup: SGroupID, enable: boolean): void;

/**
 * Set the suppression level for all squads in the sgroup
 */
declare function SGroup_SetSuppression(groupid: SGroupID, suppression: number): void;

/**
 * Set team weapon in the squads to be capturable or not
 */
declare function SGroup_SetTeamWeaponCapturable(group: SGroupID, enable: boolean): void;

/**
 * Sets the visibility of in-game veterancy art for the squads in given SGroup
 */
declare function SGroup_SetVeterancyDisplayVisibility(groupid: SGroupID, visible: boolean): void;

/**
 * Makes an sgroup neutral
 */
declare function SGroup_SetWorldOwned(sgroup: SGroupID): void;

/**
 * Creates a squad group containing a single squad
 * @extdesc
 * Creates an SGroup containing just one squad, creating the group if it doesn't exist and clearing it if it does. It returns the name of the SGroup.
 */
declare function SGroup_Single(groupID: SGroupID, squad: SquadID): SGroupID;

/**
 * Makes two SGroups face each other at no time
 */
declare function SGroup_SnapFaceEachOther(sgroup1: SGroupID, sgroup2: SGroupID): void;

/**
 * Suggests a posture to an SGroup, lasting the passed duration
 * Posture of 0 is prone, 1 is kneel/crouch, and 2 is standing.  Duration is in seconds, negative means indefinate.
 */
declare function SGroup_SuggestPosture(sgroup: SGroupID, posture: number, duration: number): void;

/**
 * Returns the total count of all members of all the squads in a given SGroup.
 */
declare function SGroup_TotalMembersCount(sgroup: SGroupID, dontCountTeamWeapons: boolean): number;

/**
 * Warps all members of an SGroup immediately to a marker
 */
declare function SGroup_WarpToMarker(sgroup: SGroupID, marker: MarkerID): void;

/**
 * Warps all members of an SGroup immediately to a new position
 */
declare function SGroup_WarpToPos(sgroup: SGroupID, pos: Position): void;

/**
 * Grabs the selected squads/entities and returns them in a group. Only works with -dev.
 * Tries to return an SGroup first. If it's empty, it will return an EGroup. (Both types can't be selected at the same time)
 */
declare function Util_Grab(subselect: boolean): SGROUP;

/**
 * for the cheat menu
 */
declare function Sound_ForceMusicEnabled(): any;

/**
 * Force set the combat intensity to be at least combatIntensity for a duration.
 * Use a duration of -1 for an indefinite override. Use a duration of 0 to cancel the override. Does not trigger any music events.
 */
declare function Sound_ForceSetMinimumMusicCombatIntensity(combatIntensity: number, durationSeconds: number): void;

/**
 * for the cheat menu
 */
declare function Sound_ForceSilenceEnabled(): any;

/**
 * stops the music immediately and go into silence.
 */
declare function Sound_MusicStop(): any;

/**
 * Play a speech event based on the local player's race.
 */
declare function Sound_PlaySpeech(eventName: string, eventArgs: number): any;

/**
 * Play a speech event based on a player's race.
 */
declare function Sound_PlaySpeechForPlayer(player: PlayerID, eventName: string, eventArgs: number): any;

/**
 * tells the music system if it should be trying to enter/stay in the playing music state
 */
declare function Sound_SetForceMusic(value: boolean): void;

/**
 * tells the music system if it should be trying to enter/stay in the silent state
 */
declare function Sound_SetForceSilence(value: boolean): void;

/**
 * Prevents the music system from automatically switching between layers and stopping for the duration.
 */
declare function Sound_SetManualMusicSelectDuration(durationSecs: number): void;

/**
 * Set the target combat intensity to at least the value of value combatIntensity for a duration.
 * Use a duration of -1 for an indefinite override. Use a duration of 0 to cancel the override.
 */
declare function Sound_SetMinimumMusicCombatIntensity(combatIntensity: number, durationSeconds: number): void;

/**
 * sets the scaling multiplier for the music intensity value
 */
declare function Sound_SetMusicIntensityScaling(scale: number): void;

/**
 * sets the race rtpc for controlling what race's music gets played
 */
declare function Sound_SetMusicRaceCode(raceCode: string): void;

/**
 * stops the music immediately and go into silence.
 */
declare function Sound_StartMusicOutro(outroEvent: string): any;

/**
 * Try to group the squads, returning the squads in groupings that are at least the ideal squad range apart
 */
declare function separated(not: Or, smallvector: SGroupID, sgroup: SGroupID, spawnedOnly: boolean, idealSquadRadius: number): any;

/**
 * Try group the given list of squads into clusters and returns the average distance between these clusters.  Returns -1 if any error occurs.
 */
declare function SGroup_CalculateClusterSeparation(sgroup: SGroupID, spawnedOnly: boolean, numClusters: number): any;

/**
 * Works like Squad_FacePosition.  All Squads will face the same direction, with the squad the closest to the center determining the direction.
 * This function works on spawned squads only.
 */
declare function SGroup_FacePosition(sgroup: SGroupID, pos: Position): void;

/**
 * Works like SGroup_FacePosition except with no interpolation.  All Squads will face the same direction, with the squad the closest to the center determining the direction.
 * This function works on spawned squads only.
 */
declare function SGroup_SnapFacePosition(sgroup: SGroupID, pos: Position): void;

/**
 * Allows the squad to use this ability
 */
declare function Squad_AddAbility(squad: SquadID, ability: ScarAbilityPBG): any;

/**
 * Add resources of all types to the specified squad by the specified amount, specifically to the SquadResourceExt.
 */
declare function Squad_AddAllResources(squad: SquadID, amount: number): any;

/**
 * Add to the list of slot items to drop when this squad is wiped out
 * Squad_AddSlotItemToDropOnDeath( squadid, item, false )
 */
declare function Squad_AddSlotItemToDropOnDeath(squad: SquadID, pbg: SlotItemBlueprint, dropChance: number, exclusive: boolean): void;

/**
 * Advance ability cooldown
 */
declare function Squad_AdjustAbilityCooldown(squad: SquadID, tickAmount: number): any;

/**
 * Check if squad can attack target
 */
declare function Squad_CanAttackEntity(attacker: SquadID, target: EntityID, checkFOW: boolean, checkVis: boolean): any;

/**
 * Returns true if squad can capture stategic point
 */
declare function Squad_CanCaptureStrategicPoint(squad: SquadID, entity: EntityID): boolean;

/**
 * True if the squad can capture the entity sync weapon
 */
declare function Squad_CanCaptureTeamWeapon(pSquad: SquadID, pEntity: EntityID): boolean;

/**
 * Test whether a squad can be ordered to do this ability on any member of the target EGroup
 */
declare function Squad_CanCastAbilityOnEGroup(caster: SquadID, ability: number, target_egroup: EGroupID): any;

/**
 * Test whether a squad can be ordered to do this ability on the target squad
 */
declare function Squad_CanCastAbilityOnEntity(castingSquad: SquadID, abilityPBG: ScarAbilityPBG, targetEntity: EntityID): any;

/**
 * Test whether a squad can be ordered to do this ability on the target squad
 */
declare function Squad_CanCastAbilityOnPosition(castingSquad: SquadID, abilityPBG: ScarAbilityPBG, targetPos: Position): any;

/**
 * Test whether a squad can be ordered to do this ability on any member of the target SGroup
 */
declare function Squad_CanCastAbilityOnSGroup(caster: SquadID, ability: number, target_sgroup: SGroupID): any;

/**
 * Test whether a squad can be ordered to do this ability on the target squad
 */
declare function Squad_CanCastAbilityOnSquad(castingSquad: SquadID, abilityPBG: ScarAbilityPBG, targetSquad: SquadID): any;

/**
 * Cancels an item in a production queue.  Index 0 is the currently producing item.
 */
declare function Squad_CancelProductionQueueItem(squad: SquadID, index: number): any;

/**
 * Checks whether a squad can hold any squad
 */
declare function Squad_CanHold(squad: SquadID): boolean;

/**
 * Returns true if the squad is available to be reinforced
 */
declare function Squad_CanInstantReinforceNow(squad: SquadID): boolean;

/**
 * Checks whether a squad can load another squad
 */
declare function Squad_CanLoadSquad(squad: SquadID, loadthis: SquadID, bCheckSquadState: boolean, bOverload: boolean): boolean;

/**
 * True if the squad can pickup the entity slot item
 */
declare function Squad_CanPickupSlotItem(pSquad: SquadID, pEntity: EntityID): any;

/**
 * True if the squad can recrew the entity
 */
declare function Squad_CanRecrew(pSquad: SquadID, pEntity: EntityID): any;

/**
 * Returns true if a given entity is in the squads sight radius
 */
declare function Squad_CanSeeEntity(squad: SquadID, entity: EntityID): boolean;

/**
 * Returns true if a target squad is in the squads sight radius
 */
declare function Squad_CanSeeSquad(squad: SquadID, target: SquadID): boolean;

/**
 * Check if a squad can target and attack a given entity.
 */
declare function Squad_CanTargetEntity(squad: Squad, target: EntityID, checkFOW: boolean): any;

/**
 * Check if a squad can target and attack at least one entity in the given target squad.
 */
declare function Squad_CanTargetSquad(squad: Squad, target: Squad, checkFOW: boolean): any;

/**
 * Clears any previous posture suggestions made to a squad
 */
declare function Squad_ClearPostureSuggestion(squad: SquadID): void;

/**
 * Clears a TargetHandle value in the squad's state model corresponding to the given key and table row index (0 based).
 */
declare function Squad_ClearStateModelEnumTableTarget(squad: SquadID, key: string, tableRowIndex: number): any;

/**
 * Clears a TargetHandle value in the squad's state model corresponding to the given key.
 */
declare function Squad_ClearStateModelTarget(squad: SquadID, key: string): any;

/**
 * Instantly adds an upgrade to a given squad
 */
declare function Squad_CompleteUpgrade(pSquad: SquadID, upgradePBG: ScarUpgradePBG): any;

/**
 * Returns the number of units currently in a squad (spawned AND despawned!!)
 */
declare function Squad_Count(squad: SquadID): number;

/**
 * Create a squad, spawn it and assign it to a player.
 * This will create a squad of size 'loadoutCount' and of unit type 'unit_base' (from squad blueprint) Note: loadoutCount will be clipped to loadoutMin and loadoutMax from the squad blueprint. A loudoutCount  of zero means create the whole squad as is.
 */
declare function Squad_CreateAndSpawnToward(sbp: SquadBlueprint, player: PlayerID, loadoutCount: number, pos: Position, toward: Position): SquadID;

/**
 * Despawn the entire squad at its current position.
 */
declare function Squad_DeSpawn(squad: SquadID): void;

/**
 * Remove an squad from the world and destroy it.
 */
declare function Squad_Destroy(squad: SquadID): void;

/**
 * Sets whether a squad can produce anything (including upgrades)
 */
declare function Squad_EnableProductionQueue(squad: SquadID, enable: boolean): void;

/**
 * Enables or disables the surprise feature on thie given squad
 */
declare function Squad_EnableSurprise(squad: SquadID, enable: boolean): void;

/**
 * ZERO-BASED get of entities out of squads
 */
declare function Squad_EntityAt(squad: SquadID, index: number): any;

/**
 * Returns total squad extension count.
 */
declare function Squad_ExtensionCount(): any;

/**
 * Returns true if the squad has the specific extension enabled.
 */
declare function Squad_ExtensionEnabled(pSquad: SquadID, extID: ComponentDependencyIndex): any;

/**
 * Returns a string name of the given extension on the squad.
 */
declare function Squad_ExtensionName(pSquad: SquadID, extID: ComponentDependencyIndex): any;

/**
 * Set the rotation of all troopers in a squad to face the position.
 * The center of the squad will face the position and all other troops will use the same rotation as the from center vector. This function works on spawned squads only.
 */
declare function Squad_FacePosition(squad: SquadID, pos: Position): void;

/**
 * Get 2 squads to face each other. This function works on spawned squads only.
 */
declare function Squad_FaceSquad(squad1: SquadID, squad2: SquadID): void;

/**
 * Tries to find cover within a certain radius of a position. If no cover is found, it returns the position used for the search.
 */
declare function Squad_FindCover(squad: SquadID, pos: Position, coverSearchRadius: number): Position;

/**
 * Tries to find cover within a certain radius of a position, traveling a max distance to get there, and possibly comparing against current position's cover. If no cover is found, it returns the position used for the search.
 */
declare function Squad_FindCoverCompareCurrent(squad: SquadID, pos: Position, coverSearchRadius: number, maxPathDistanceFromGoal: number, compareToCurrentCover: boolean): Position;

/**
 * Get a squad from a mission editor ID.
 */
declare function Squad_FromID(id: number): any;

/**
 * Returns all active upgrades this squad has.
 */
declare function Squad_GetActiveUpgrades(squad: Squad): any;

/**
 * Find the squad member current or forced targets. If found, the targets squads are added to the sgroup. Entity targets like buildings are ignored
 */
declare function Squad_GetAttackTargets(squad: SquadID, group: SGroupID): void;

/**
 * Returns the name of the squad blueprint (from the attribute editor)
 */
declare function Squad_GetBlueprint(squad: SquadID): SquadBlueprint;

/**
 * Returns a number representing how good squad cover is -1 for awful, 0 for none, 1 for light, 2 for heavy
 */
declare function Squad_GetCoverLevel(squad: SquadID): any;

/**
 * Returns the squad's destination, if it's moving. IMPORTANT: you must only call this function if Squad_HasDestination has returned true.
 */
declare function Squad_GetDestination(squad: SquadID): Position;

/**
 * Returns the average heading of the spawned units in the squad. The heading is currently a lua table with three entries (x, y, z)
 */
declare function Squad_GetHeading(squad: SquadID): Position;

/**
 * Returns the current health of a squad.
 * The current health of the squad is the total health of each entity in that squad.
 */
declare function Squad_GetHealth(squad: SquadID): number;

/**
 * Returns the max health of the squad.
 * The max health of a squad is the max health of each entity in that squad.  This means that the max health of a squad may change when entities are added or removed from the squad.
 */
declare function Squad_GetHealthMax(squad: SquadID): number;

/**
 * Returns how much of an original squad's health is left, accounting for deaths (ex: a squad of 3 riflemen would be at 50% health, since they started with 6 members) Note: This is the same percentage that the UI uses.
 */
declare function Squad_GetHealthPercentage(squad: SquadID): number;

/**
 * Returns how much of the squad's health is left as a percentage.
 */
declare function Squad_GetHealthPercentageWithShields(squad: SquadID, includeBonuses: boolean): any;

/**
 * Get which building (entity) is the squad garrisoned
 * Please use Squad_IsInHold() to check first
 */
declare function Squad_GetHoldEntity(squad: SquadID): EntityID;

/**
 * Get which vehicle (squad) is the squad garrisoned
 * Please use Squad_IsInHold() to check first
 */
declare function Squad_GetHoldSquad(squad: SquadID): SquadID;

/**
 * Returns an integer containing the unqiue squad ID for this squad.
 */
declare function Squad_GetID(squad: SquadID): any;

/**
 * Check if the squad is invulnerable or not
 */
declare function Squad_GetInvulnerable(squad: SquadID): boolean;

/**
 * Returns the number of invulnerable member
 */
declare function Squad_GetInvulnerableEntityCount(squad: SquadID): any;

/**
 * Returns the highest invulnerable min cap percentage from members of the squad.
 */
declare function Squad_GetInvulnerableMinCap(squad: SquadID): number;

/**
 * Find the last squad attacker on this squad. If found, the squad is added to the sgroup
 */
declare function Squad_GetLastAttacker(squad: SquadID, group: SGroupID): void;

/**
 * Find the squad attackers on this squad from the last seconds specified. If found, the squads are added to the sgroup. Building attackers are ignored
 */
declare function Squad_GetLastAttackers(squad: SquadID, group: SGroupID, timeSeconds: number): void;

/**
 * Find the last entity attacker on this squad. If found, the entity added to egroup
 */
declare function Squad_GetLastEntityAttacker(pSquad: SquadID, pEGroup: EGroupID): void;

/**
 * Returns the max number of units allowed in the squadron (from squad_loadout_ext)
 */
declare function Squad_GetMax(squad: SquadID): number;

/**
 * Returns the sum of all entities in a squad's resourceDropOffDistance state model value if it exists and the entities have a state model ext.  Otherwise it will return 0.0f
 */
declare function Squad_GetMaxEntityDropOffDistance(targetSquad: SquadID): any;

/**
 * Returns the current minimum armor of a squad.
 * The current armor of the squad is the minimum armor amongst all entities in that squad.
 */
declare function Squad_GetMinArmor(squad: SquadID): any;

/**
 * Returns the command ID of the most recent queued command on the Squad.
 */
declare function Squad_GetMostRecentQueuedCommandID(squad: SquadID): any;

/**
 * Get the number of slot items with the same ID that the squad has
 * Squad_GetNumSlotItem( squadid, item )
 */
declare function Squad_GetNumSlotItem(squad: SquadID, pbg: SlotItemBlueprint): number;

/**
 * Returns a position relative to a squad's current position and orientation. see ScarUtil.scar for explanation of 'offset' parameter.
 */
declare function Squad_GetOffsetPosition(squad: SquadID, offset: number, distance: number): Position;

/**
 * Returns the Player owner of the given squad. Squad MUST NOT be owned by the world.
 */
declare function Squad_GetPlayerOwner(squad: SquadID): PlayerID;

/**
 * Returns the average position of the spawned units in the squad. The position is currently a lua table with three entries (x, y, z)
 */
declare function Squad_GetPosition(squad: SquadID): Position;

/**
 * Returns the average position of the despawned AND spawned units in the squad.
 */
declare function Squad_GetPositionDeSpawned(squad: SquadID): Position;

/**
 * Returns the blueprint for a production queue item with index.
 */
declare function Squad_GetProductionQueueItem(squad: SquadID, index: number): Blueprint;

/**
 * Returns the production type (PITEM_Upgrade, PITEM_Spawn, PITEM_SquadUpgrade, PITEM_SquadReinforce, PITEM_PlayerUpgrade) for a production queue item with index.
 */
declare function Squad_GetProductionQueueItemType(squad: SquadID, index: number): number;

/**
 * Returns the number of items in the squad's production queue.
 * It is an error to call this function on a squad that does not have a production queue. Use Squad_HasProductionQueue to check that the squad has a queue.
 */
declare function Squad_GetProductionQueueSize(squad: SquadID): number;

/**
 * Returns the race property bag group for the given squad
 */
declare function Squad_GetRace(squad: SquadID): any;

/**
 * Returns how much of the squad's shield is left as a percentage.
 */
declare function Squad_GetShieldPercentage(squad: SquadID): any;

/**
 * Returns the ID of the slot item. Use Squad_GetSlotItemCount to determine how many slot items the squad has. The first index is 1
 */
declare function Squad_GetSlotItemAt(squad: SquadID, index: number): number;

/**
 * Returns how many slot items this squad has
 */
declare function Squad_GetSlotItemCount(squad: SquadID): number;

/**
 * Returns a table of SlotItem ID's that this squad currently owns
 */
declare function Squad_GetSlotItemsTable(squadid: SquadID): any;

/**
 * returns the Squad that sent the passed squad in a disable state
 * Disable states are: knocked back, stunned, levitate, stasis
 */
declare function Squad_GetSquadDoingDisableOnSquad(pSquad: SquadID): any;

/**
 * Adds all squads held by 'squad' to an sgroup
 */
declare function Squad_GetSquadsHeld(squad: SquadID, sgroup: SGroupID): boolean;

/**
 * Returns a boolean value from the squad's state model corresponding to the given key.
 */
declare function Squad_GetStateModelBool(squad: SquadID, key: string): any;

/**
 * Returns an Entity value from the squad's state model corresponding to the given key.
 */
declare function Squad_GetStateModelEntityTarget(squad: SquadID, key: string): any;

/**
 * Returns a boolean value from the squad's state model corresponding to the given key and table row index (0 based).
 */
declare function Squad_GetStateModelEnumTableBool(squad: SquadID, key: string, tableRowIndex: number): any;

/**
 * Returns an Entity value from the squad's state model corresponding to the given key and table row index (0 based).
 */
declare function Squad_GetStateModelEnumTableEntityTarget(squad: SquadID, key: string, tableRowIndex: number): any;

/**
 * Returns a float value from the squad's state model corresponding to the given key and table row index (0 based).
 */
declare function Squad_GetStateModelEnumTableFloat(squad: SquadID, key: string, tableRowIndex: number): any;

/**
 * Returns an integer value from the squad's state model corresponding to the given key and table row index (0 based).
 */
declare function Squad_GetStateModelEnumTableInt(squad: SquadID, key: string, tableRowIndex: number): any;

/**
 * Returns a Player value from the squad's state model corresponding to the given key and table row index (0 based).
 */
declare function Squad_GetStateModelEnumTablePlayerTarget(squad: SquadID, key: string, tableRowIndex: number): any;

/**
 * Returns a Squad value from the squad's state model corresponding to the given key and table row index (0 based).
 */
declare function Squad_GetStateModelEnumTableSquadTarget(squad: SquadID, key: string, tableRowIndex: number): any;

/**
 * Returns a Vector3f value from the squad's state model corresponding to the given key and table row index (0 based).
 */
declare function Squad_GetStateModelEnumTableVector3f(squad: SquadID, key: string, tableRowIndex: number): any;

/**
 * Returns a float value from the squad's state model corresponding to the given key.
 */
declare function Squad_GetStateModelFloat(squad: SquadID, key: string): any;

/**
 * Returns an integer value from the squad's state model corresponding to the given key.
 */
declare function Squad_GetStateModelInt(squad: SquadID, key: string): any;

/**
 * Returns a Player value from the squad's state model corresponding to the given key.
 */
declare function Squad_GetStateModelPlayerTarget(squad: SquadID, key: string): any;

/**
 * Returns a Squad value from the squad's state model corresponding to the given key.
 */
declare function Squad_GetStateModelSquadTarget(squad: SquadID, key: string): any;

/**
 * Returns a Vector3f value from the squad's state model corresponding to the given key.
 */
declare function Squad_GetStateModelVector3f(squad: SquadID, key: string): any;

/**
 * Check current squad suppresion level. Return value from 0 to 1
 */
declare function Squad_GetSuppression(squad: SquadID): number;

/**
 * Gets the mobile driver squad from a vehicle squad
 */
declare function Squad_GetVehicleMobileDriverSquad(pSquad: SquadID): any;

/**
 * Get current squad veterancy
 */
declare function Squad_GetVeterancy(squad: SquadID): any;

/**
 * Get current squad veterancy rank.
 */
declare function Squad_GetVeterancyRank(squad: SquadID): number;

/**
 * Gives a slot item to the squad. Can fail due to not enough slots left
 */
declare function Squad_GiveSlotItem(squad: SquadID, pbg: SlotItemBlueprint): void;

/**
 * Gives all slot items in a table to the squad. The table should come from Squad_GetSlotItemsTable
 */
declare function Squad_GiveSlotItemsFromTable(squadid: SquadID, itemTable: any): void;

/**
 * Tests to see if a squad has an ability
 */
declare function Squad_HasAbility(squad: SquadID, ability: ScarAbilityPBG): any;

/**
 * Returns true if there's an active command currently for the squad
 */
declare function Squad_HasActiveCommand(squad: SquadID): boolean;

/**
 * Checks whether a squad is of any of the Blueprints or SquadTypes specified.
 * Blueprint can be a single Blueprint, a single SquadType, or a table of multiple Blueprints or SquadTypes. If you want to see if a squad has ALL of a set of SquadTypes, then wrap them all in a sub-table.
 */
declare function Squad_HasBlueprint(squad: SquadID, blueprints: SBP | SquadType | any): boolean;

/**
 * Returns true if the given squad has a building in it (includes team weapons)
 */
declare function Squad_HasBuilding(pSquad: SquadID): any;

/**
 * Returns whether this squad is moving and has a destination
 */
declare function Squad_HasDestination(squad: SquadID): boolean;

/**
 * Returns if squad contains an entity with at least minAttachedCount attached interactibles of interactionTypeName type
 */
declare function Squad_HasEntityWithNInteractors(targetSquad: SquadID, interactionTypeName: string, minAttachedCount: number): any;

/**
 * Returns true if the given squad has a heavy weapon (non moving setup weapon)
 */
declare function Squad_HasHeavyWeapon(pSquad: SquadID): any;

/**
 * Returns true if the given squad has at least one infantry unit in it (includes team weapons)
 */
declare function Squad_HasInfantry(pSquad: SquadID): any;

/**
 * Returns true if a squad has a production queue.
 */
declare function Squad_HasProductionQueue(squad: SquadID): boolean;

/**
 * Returns true if the given squad has team weapon setup for attack
 */
declare function Squad_HasSetupTeamWeapon(pSquad: SquadID): any;

/**
 * Check if a squad has a specific slot item
 */
declare function Squad_HasSlotItem(squad: SquadID, slotItem: SlotItemID): boolean;

/**
 * Returns true if the squad is carrying some kind of team weapon
 */
declare function Squad_HasTeamWeapon(squad: SquadID): boolean;

/**
 * Return true if the squad has purchased the specified upgrade.
 */
declare function Squad_HasUpgrade(squad: SquadID, pbg: UpgradeBlueprint): boolean;

/**
 * Returns true if the given squad has a vehicle in it (includes team weapons)
 */
declare function Squad_HasVehicle(pSquad: SquadID): any;

/**
 * Returns true if the given squad has at least one Entity who has the specified weapon hardpoint.
 */
declare function Squad_HasWeaponHardpoint(pSquad: SquadID, hardPointName: string): any;

/**
 * Increase current squad veterancy
 */
declare function Squad_IncreaseVeterancy(squad: SquadID, veterancy: number, silent: boolean, applyModifiers: boolean): any;

/**
 * Increase current squad veterancy rank
 */
declare function Squad_IncreaseVeterancyRank(squad: SquadID, numranks: number, silent: boolean): void;

/**
 * Stops current squads activity and instant setup the team weapon if they have one
 */
declare function Squad_InstantSetupTeamWeapon(squad: SquadID): void;

/**
 * True if the ability is active
 */
declare function Squad_IsAbilityActive_CS(squad: SquadID, pbg: ScarAbilityPBG): any;

/**
 * Check if the squad is alive
 */
declare function Squad_IsAlive(squad: SquadID): any;

/**
 * Returns true if any unit in the squad is attacking within the time
 * Time is in seconds
 */
declare function Squad_IsAttacking(squad: SquadID, time: number): boolean;

/**
 * Returns true if the squad is currently attack-moving.
 */
declare function Squad_IsAttackMoving(squad: SquadID): any;

/**
 * Returns whether ANY entity in the squad is camouflaged
 */
declare function Squad_IsCamouflaged(squad: SquadID): boolean;

/**
 * Returns true if the squad is currently capturing.
 */
declare function Squad_IsCapturing(squad: SquadID): any;

/**
 * Returns true if any spawned entity in the squad is a casualty
 */
declare function Squad_IsCasualty(squad: SquadID): any;

/**
 * Returns true if the squad is currently constructing.
 */
declare function Squad_IsConstructing(squad: SquadID): any;

/**
 * True if squad is currently performing the given ability
 */
declare function Squad_IsDoingAbility(squad: SquadID, pbg: AbilityBlueprint): boolean;

/**
 * Returns whether the passed in squad is female
 */
declare function Squad_IsFemale(squad: SquadID): any;

/**
 * Returns if squad contains an entity that is performing a specific unit role
 */
declare function Squad_IsGatheringResourceType(targetSquad: SquadID, type: number): any;

/**
 * Check if the squad has a hold on anything (use this on vehicles)
 */
declare function Squad_IsHoldingAny(squad: SquadID): boolean;

/**
 * Returns true if Squad is holding position.
 */
declare function Squad_IsHoldingPosition(squad: SquadID): any;

/**
 * Returns true if the squad is idling
 */
declare function Squad_IsIdle(squad: SquadID): any;

/**
 * Returns whether or not the squad is in the background. Default returns false (if the squad is empty)
 */
declare function Squad_IsInBackground(pSquad: SquadID): any;

/**
 * Returns true if ALL or ANY troopers in a squad are in cover.
 * Set all to true to check if all troopers are in cover or set to false to check if any.
 */
declare function Squad_IsInCover(squadId: SquadID, all: boolean): boolean;

/**
 * Check if the squad is garrisoned in entity (building)
 */
declare function Squad_IsInHoldEntity(squad: SquadID): boolean;

/**
 * Check if the squad is loaded in squad (vehicle
 */
declare function Squad_IsInHoldSquad(squad: SquadID): boolean;

/**
 * Returns true if the squad is in melee combat
 */
declare function Squad_IsInMeleeCombat(pSquad: SquadID): any;

/**
 * True if the squad is currently being knocked back
 */
declare function Squad_IsKnockedBack(squad: SquadID): any;

/**
 * Returns whether any entity in the squad is moving
 */
declare function Squad_IsMoving(squad: SquadID): boolean;

/**
 * Determines if this squad is of the given type. Types are defined in squad_type_ext/squad_type_list
 */
declare function Squad_IsOfType(squad: SquadID, type: string): any;

/**
 * Returns true if any entity of a squad (all=false) or the whole (all=true) squad is on walkable wall.
 */
declare function Squad_IsOnWalkableWall(squad: SquadID, all: boolean): any;

/**
 * True if squad is currently pinned
 */
declare function Squad_IsPinned(squad: SquadID): boolean;

/**
 * True if squad is currently pinned or suppressed
 */
declare function Squad_IsPinnedOrSuppressed(squad: SquadID): any;

/**
 * Returns true if the squad is currently reinforcing.  This function will return false if the squad does not have a reinforce ext.
 */
declare function Squad_IsReinforcing(squad: SquadID): boolean;

/**
 * Returns true if the squad is currently retreating
 */
declare function Squad_IsRetreating(squadid: SquadID): boolean;

/**
 * Returns true if the given blueprint is of the given type. Types are defined in squad_type_ext/squad_type_list
 */
declare function Squad_IsSBPOfType(sbp: ScarSquadPBG, type: string): any;

/**
 * Returns true if the squad is currently placing charges.
 */
declare function Squad_IsSettingDemolitions(squad: SquadID): any;

/**
 * Returns true if the supplied squad pbg is a siege unit
 */
declare function Squad_IsSiege(pbg: ScarSquadPBG): any;

/**
 * True if the squad is currently stunned
 */
declare function Squad_IsStunned(squad: SquadID): any;

/**
 * True if squad is currently suppressed
 */
declare function Squad_IsSuppressed(squad: SquadID): boolean;

/**
 * Returns true if any unit in the squad is under attack within the time
 * Time is in seconds
 */
declare function Squad_IsUnderAttack(squad: SquadID, time: number): boolean;

/**
 * Returns true if squad is under attack by enemy from a particular player
 * Time is in seconds
 */
declare function Squad_IsUnderAttackByPlayer(squad: SquadID, pAttackerOwner: PlayerID, time: number): boolean;

/**
 * Returns true if the squad was under attack from a certain direction (8 offset types, see LuaConsts.scar)
 */
declare function Squad_IsUnderAttackFromDirection(squad: SquadID, offset: number, timeSeconds: number): boolean;

/**
 * Returns true if the squad is currently upgrading something specific.
 */
declare function Squad_IsUpgrading(squad: SquadID, upgrade: UpgradeBlueprint): boolean;

/**
 * Returns true if the squad is currently upgrading anything.
 */
declare function Squad_IsUpgradingAny(squad: SquadID): boolean;

/**
 * Check if a squad with the given ID can be found in the world
 */
declare function Squad_IsValid(id: number): boolean;

/**
 * Kill whole squad.  Sets health to 0, and triggers death effects.
 */
declare function Squad_Kill(squad: SquadID): void;

/**
 * Returns the number of upgrades that this squad has.
 */
declare function Squad_NumUpgradeComplete(squad: SquadID, upgradePBG: ScarUpgradePBG): any;

/**
 * get squad pop cost, use CT_Personnel, CT_Vehicle, CT_Medic for captype
 */
declare function Squad_Population(squad: SquadID, type: CapType): any;

/**
 * Removes an ability that was previously added by Squad_AddAbility. You cannot remove static abilities (from AE: squad_ability_ext)
 */
declare function Squad_RemoveAbility(squad: SquadID, ability: ScarAbilityPBG): any;

/**
 * Removes a slot item from the squad.
 */
declare function Squad_RemoveSlotItemAt(squad: SquadID, index: number, bInstantWeaponChange: boolean): any;

/**
 * Removes a boolean value in the squad's state model list corresponding to the given key.
 */
declare function Squad_RemoveStateModelListBool(squad: SquadID, key: string, value: boolean): any;

/**
 * Removes an Entity TargetHandle value in the squad's state model list corresponding to the given key.
 */
declare function Squad_RemoveStateModelListEntityTarget(squad: SquadID, key: string, value: EntityID): any;

/**
 * Removes a float value in the squad's state model list corresponding to the given key.
 */
declare function Squad_RemoveStateModelListFloat(squad: SquadID, key: string, value: number): any;

/**
 * Removes an integer value in the squad's state model list corresponding to the given key.
 */
declare function Squad_RemoveStateModelListInt(squad: SquadID, key: string, value: number): any;

/**
 * Removes a Player TargetHandle value in the squad's state model list corresponding to the given key.
 */
declare function Squad_RemoveStateModelListPlayerTarget(squad: SquadID, key: string, value: PlayerID): any;

/**
 * Removes a Squad TargetHandle value in the squad's state model list corresponding to the given key.
 */
declare function Squad_RemoveStateModelListSquadTarget(squad: SquadID, key: string, value: SquadID): any;

/**
 * Removes a Vector3f value in the squad's state model list corresponding to the given key.
 */
declare function Squad_RemoveStateModelListVector3f(squad: SquadID, key: string, value: Position): any;

/**
 * Removes an upgrade from a squad
 */
declare function Squad_RemoveUpgrade(squad: SquadID, upgrade: UpgradeBlueprint): void;

/**
 * Give squad action points
 */
declare function Squad_RewardActionPoints(squad: SquadID, actionPoint: number): void;

/**
 * ZERO-BASED get of entity blueprints out of squad blueprint
 */
declare function Squad_SBPEntityAt(sbp: ScarSquadPBG, index: number): any;

/**
 * Returns the max number of units allowed in the squad blueprint
 */
declare function Squad_SBPGetMax(sbp: ScarSquadPBG): any;

/**
 * Trigger animation action for a squad. Please only use this for simple animations
 */
declare function Squad_SetAnimatorAction(squadid: SquadID, actionName: string): void;

/**
 * Trigger animation event for a squad. Please only use this for simple animations
 */
declare function Squad_SetAnimatorEvent(squadid: SquadID, actionName: string): void;

/**
 * Set animation state of a state machine for a squad. Please only use this for simple animations
 */
declare function Squad_SetAnimatorState(squadid: SquadID, stateMachineName: string, stateName: string): void;

/**
 * Sets the squad to be in the background or foreground. By default, all squads are in the foreground
 */
declare function Squad_SetBackground(pSquad: SquadID, isInBackground: boolean): void;

/**
 * Enables or disables the squad's UI extension (which controls all UI elements related to the squad)
 */
declare function Squad_SetExtEnabled(pSquad: SquadID, extID: string, enabled: boolean): void;

/**
 * Set the health of all units in a squad.  Health must be in range [0.0, 1.0]
 */
declare function Squad_SetHealth(squad: SquadID, healthPercent: number): void;

/**
 * Set invulnerability on the squad. Reset time is in seconds. If it is non-negative, the invulnerability will expire after this time.
 */
declare function Squad_SetInvulnerable(squad: SquadID, enable: boolean, reset_time: number): void;

/**
 * Make a squad invulnerable to physical damage when number of members drop to or below specified count.
 * member count, 0 means squad is vulnerable; above 0 means number of alive entities will not go below this count resetTime is the time in seconds that vulnerability will be restored.; zero time for reset time means the buff will last forever
 */
declare function Squad_SetInvulnerableEntityCount(squad: SquadID, invEntityCount: number, resetTime: number): void;

/**
 * Make a squad invulnerable to physical damage.
 * resetTime is the time in seconds that vulnerability will be restored.; zero time for reset time means the buff will last forever
 */
declare function Squad_SetInvulnerableMinCap(squad: SquadID, minHealthPercentage: number, resetTime: number): void;

/**
 * Set soldier mood mode. Can be MM_Auto, MM_ForceCalm and MM_ForceTense
 */
declare function Squad_SetMoodMode(squad: SquadID, mode: number): void;

/**
 * Sets the squad's move type
 */
declare function Squad_SetMoveType(squad: SquadID, movetypePBG: MoveTypeBlueprint): void;

/**
 * Changes the owner of the given squad.
 */
declare function Squad_SetPlayerOwner(squad: SquadID, owner: PlayerID): void;

/**
 * Moves the squad to an arbitrary new position
 */
declare function Squad_SetPosition(squad: SquadID, pos: Position, toward: Position): void;

/**
 * Moves the squad to an arbitrary new 3D position.
 * Note that the squad will still have the same properties, so any squad that snaps to the terrain (most land based squads) will interpolate to the terrain height immediately after this move. This function should really only be used for skimmers and other units that require the y axis to be specified. Use Squad_SetPosition() otherwise.
 */
declare function Squad_SetPosition3D(squad: SquadID, pos: Position, toward: Position): void;

/**
 * Set entity inside the squad to be recrewable or not when it becomes abandoned
 */
declare function Squad_SetRecrewable(squad: SquadID, capturable: boolean): void;

/**
 * Enables shared team production on a building (teammates can build using THEIR resources)
 */
declare function Squad_SetSharedProductionQueue(squad: SquadID, shared: boolean): void;

/**
 * Sets a boolean value in the squad's state model corresponding to the given key.
 */
declare function Squad_SetStateModelBool(squad: SquadID, key: string, value: boolean): void;

/**
 * Sets an Entity TargetHandle value in the squad's state model corresponding to the given key.
 */
declare function Squad_SetStateModelEntityTarget(squad: SquadID, key: string, value: EntityID): void;

/**
 * Sets a boolean value in the squad's state model corresponding to the given key and table row index (0 based).
 */
declare function Squad_SetStateModelEnumTableBool(squad: SquadID, key: string, tableRowIndex: number, value: boolean): void;

/**
 * Sets an Entity TargetHandle value in the squad's state model corresponding to the given key and table row index (0 based).
 */
declare function Squad_SetStateModelEnumTableEntityTarget(squad: SquadID, key: string, tableRowIndex: number, value: EntityID): void;

/**
 * Sets a float value in the squad's state model corresponding to the given key and table row index (0 based).
 */
declare function Squad_SetStateModelEnumTableFloat(squad: SquadID, key: string, tableRowIndex: number, value: number): void;

/**
 * Sets an integer value in the squad's state model corresponding to the given key and table row index (0 based).
 */
declare function Squad_SetStateModelEnumTableInt(squad: SquadID, key: string, tableRowIndex: number, value: number): void;

/**
 * Sets a Player TargetHandle value in the squad's state model corresponding to the given key and table row index (0 based).
 */
declare function Squad_SetStateModelEnumTablePlayerTarget(squad: SquadID, key: string, tableRowIndex: number, value: PlayerID): void;

/**
 * Sets a Squad TargetHandle value in the squad's state model corresponding to the given key and table row index (0 based).
 */
declare function Squad_SetStateModelEnumTableSquadTarget(squad: SquadID, key: string, tableRowIndex: number, value: SquadID): void;

/**
 * Sets a Vector3f value in the squad's state model corresponding to the given key and table row index (0 based).
 */
declare function Squad_SetStateModelEnumTableVector3f(squad: SquadID, key: string, tableRowIndex: number, value: Position): void;

/**
 * Sets a float value in the squad's state model corresponding to the given key.
 */
declare function Squad_SetStateModelFloat(squad: SquadID, key: string, value: number): void;

/**
 * Sets an integer value in the squad's state model corresponding to the given key.
 */
declare function Squad_SetStateModelInt(squad: SquadID, key: string, value: number): void;

/**
 * Sets a boolean value in the squad's state model list corresponding to the given key.
 */
declare function Squad_SetStateModelListBool(squad: SquadID, key: string, value: boolean, allowDuplicates: boolean): void;

/**
 * Sets an Entity TargetHandle value in the squad's state model list corresponding to the given key.
 */
declare function Squad_SetStateModelListEntityTarget(squad: SquadID, key: string, value: EntityID, allowDuplicates: boolean): void;

/**
 * Sets a float value in the squad's state model list corresponding to the given key.
 */
declare function Squad_SetStateModelListFloat(squad: SquadID, key: string, value: number, allowDuplicates: boolean): void;

/**
 * Sets an integer value in the squad's state model list corresponding to the given key.
 */
declare function Squad_SetStateModelListInt(squad: SquadID, key: string, value: number, allowDuplicates: boolean): void;

/**
 * Sets a Player TargetHandle value in the squad's state model list corresponding to the given key.
 */
declare function Squad_SetStateModelListPlayerTarget(squad: SquadID, key: string, value: PlayerID, allowDuplicates: boolean): void;

/**
 * Sets a Squad TargetHandle value in the squad's state model list corresponding to the given key.
 */
declare function Squad_SetStateModelListSquadTarget(squad: SquadID, key: string, value: SquadID, allowDuplicates: boolean): void;

/**
 * Sets a Vector3f value in the squad's state model list corresponding to the given key.
 */
declare function Squad_SetStateModelListVector3f(squad: SquadID, key: string, value: Position, allowDuplicates: boolean): void;

/**
 * Sets a Player TargetHandle value in the squad's state model corresponding to the given key.
 */
declare function Squad_SetStateModelPlayerTarget(squad: SquadID, key: string, value: PlayerID): void;

/**
 * Sets a Squad TargetHandle value in the squad's state model corresponding to the given key.
 */
declare function Squad_SetStateModelSquadTarget(squad: SquadID, key: string, value: SquadID): void;

/**
 * Sets a Vector3f value in the squad's state model corresponding to the given key.
 */
declare function Squad_SetStateModelVector3f(squad: SquadID, key: string, value: Position): void;

/**
 * Set current squad suppresion level. Suppression value value from 0 to 1
 */
declare function Squad_SetSuppression(squad: SquadID, percentage: number): void;

/**
 * Turn on/off display of the unit portrait veterancy stars
 */
declare function Squad_SetVeterancyDisplayVisibility(squad: SquadID, visible: boolean): void;

/**
 * Makes a squad neutral
 */
declare function Squad_SetWorldOwned(squad: SquadID): void;

/**
 * Spawn the entire squad at a given position
 */
declare function Squad_Spawn(squad: SquadID, pos: Position): boolean;

/**
 * Spawn the entire squad at a given position
 */
declare function Squad_SpawnToward(squad: SquadID, pos: Position, toward: Position): boolean;

/**
 * Split the squad into 2. The new squad size is specified by the number passed in
 * The new squad size is specified by the number passed in.
 */
declare function Squad_Split(squad: SquadID, num: number): SquadID;

/**
 * Abruptly stops an active ability
 */
declare function Squad_StopAbility(squad: SquadID, ability: AbilityBlueprint, bEarlyExit: boolean): void;

/**
 * Suggests a posture to a squad, lasting the passed duration
 * Posture of 0 is prone, 1 is kneel/crouch, and 2 is standing.  Duration is in seconds, negative means indefinate.
 */
declare function Squad_SuggestPosture(squad: SquadID, posture: number, duration: number): void;

/**
 * Returns the closest free position to the target position for the squad
 */
declare function Squad_TryFindClosestFreePosition(squad: SquadID, targetPosition: Position): any;

/**
 * Warps a squad immediately to a new position
 */
declare function Squad_WarpToPos(squad: SquadID, pos: Position): void;

/**
 * Add resource to each member of a team, as opposed to just setting it. Possible resource types are RT_FOOD, RT_WOOD, RT_STONE, RT_GOLD, RT_ACTION
 */
declare function Team_AddResource(team: TeamID, resourceType: number, value: number): void;

/**
 * For the given team, get all of the squads gathered into a squadgroup of your naming.
 * This will add all squads for the entire team to one group.  To do so for each player, iterate the team table
 * Squads will be added to given squad group.  If the given squad group does not exist it will be created.
 */
declare function Team_AddSquadsToSGroup(team: TeamID, squadgroupName: string): SGroupID;

/**
 * Returns true if ANY of a teams squads are in proximity of a marker
 */
declare function Team_AreSquadsNearMarker(team: TeamID, marker: MarkerID): boolean;

/**
 * Returns true if a team can see ALL or ANY items
 */
declare function Team_CanSee(teamid: TeamID, item: EGroupID | SGroupID | EntityID | SquadID | PositionID | MarkerID, all: boolean): boolean;

/**
 * Any of the team's units in the marker area move out of the area, and can be made invulnerable for a bit whilst they do it
 * You can replace the marker with a position and a range - i.e. Team_ClearArea(team, pos, range, invulnerable)
 */
declare function Team_ClearArea(team: TeamID, marker: MarkerID, invulnerable: boolean): void;

/**
 * Returns total number of players on a team
 */
declare function Team_CountPlayers(teamid: any): number;

/**
 * Returns 4 playerIDs (player1, player2, player3, player4) for Humans/Allies
 */
declare function Team_DefineAllies(): PlayerIDs;

/**
 * Returns 4 playerIDs (player5, player6, player7, player8) for Enemy Players
 */
declare function Team_DefineEnemies(): PlayerIDs;

/**
 * Returns the TeamID for a given race. See LuaConsts for constants to use.
 * You can pass in multiple races, for example: allies and commonwealth.
 */
declare function Team_FindByRace(race: string, race2?: string): TeamID;

/**
 * Tests a condition on teams. Calls your function for each player. Parameters of your function: (TeamID, player index, PlayerID). Your function must return true or false to indicate whether the player meets the condition.
 */
declare function Team_ForEachAllOrAny(team: TeamID, all: boolean, function_: any): boolean;

/**
 * Creates/Clears groups that contain all of a team's units and buildings. Defaults - sg_allsquads and eg_allentities
 * Fills an SGroup with all of the given team's squads, and an EGroup with all the team's entities.
 * If you don't provide and groups, then it defaults to using sg_allsquads and eg_allentities.
 */
declare function Team_GetAll(team: TeamID, sgroup?: SGroupID, egroup?: EGroupID): void;

/**
 * Gather together all of a teams's entities that are in proximity to a marker, a position, or within a territory sector into an EGroup. The EGroup is cleared beforehand.
 * You can override a marker's normal proximity by specifying a range.
 */
declare function Team_GetAllEntitiesNearMarker(team: TeamID, egroup: EGroupID, position: MarkerID | Position | SectorID, range?: number): void;

/**
 * Gather together all of a teams's squads that are in proximity to a marker, a position, or within a territory sector into an SGroup. The SGroup is cleared beforehand.
 * You can override a marker's normal proximity by specifying a range.
 */
declare function Team_GetAllSquadsNearMarker(team: TeamID, sgroup: SGroupID, position: MarkerID | Position | SectorID, range?: number): void;

/**
 * Returns the entityID of the first team owned building listed in the table.
 * This only looks at completed buildings
 * Use ALL to return a table containing the first building listed for each player on the team
 */
declare function Team_GetBuildingID(player: PlayerID, entitytypes: BlueprintTable, bool?: any): EntityID;

/**
 * Returns the total number of buildings owned by this team.
 */
declare function Team_GetBuildingsCount(team: TeamID): number;

/**
 * Returns the total number of buildings owned by this team (with exclusions).
 */
declare function Team_GetBuildingsCountExcept(team: TeamID, exceptions: BlueprintTable): number;

/**
 * Returns the number of buildings owned by this team (inclusive).
 */
declare function Team_GetBuildingsCountOnly(team: TeamID, ebplist: BlueprintTable): number;

/**
 * Returns a team's enemy
 */
declare function Team_GetEnemyTeam(team: TeamID): TeamID;

/**
 * Returns an EGroup containing all of the teams entities of a specific unit_type (as defined by the type_ext on the entity)
 * This function returns a new EGroup to allow tracking of different types.
 */
declare function Team_GetEntitiesFromType(team: TeamID, unitType: string): EGroup;

/**
 * Returns true if this team owns any buildings listed in the table.
 * Use ALL to check if all players on the team have this building
 * This only looks at completed buildings - use Team_HasBuildingUnderConstruction to see if the team is building something
 */
declare function Team_HasBuilding(team: TeamID, entitytypes: BlueprintTable, bool?: any): boolean;

/**
 * Returns true if this team owns any buildings. (with exclusions).
 * Use ALL to check if all players on the team have buildings EXCEPT this one
 */
declare function Team_HasBuildingsExcept(team: TeamID, exceptions: BlueprintTable, bool?: any): boolean;

/**
 * Returns true if this team owns any buildings listed in the table currently under construction.
 * Use ALL to check if all players on the team have this building under construction
 */
declare function Team_HasBuildingUnderConstruction(team: TeamID, entitytypes: BlueprintTable, bool?: any): boolean;

/**
 * Returns true if this team has any players that are human.
 */
declare function Team_HasHuman(team: TeamID, bool?: any): boolean;

/**
 * Returns whether a team is still alive or not (all member players must be 'alive')
 */
declare function Team_IsAlive(teamid: any): boolean;

/**
 * Returns whether a team has surrendered
 */
declare function Team_IsSurrendered(teamid: any, any: any): boolean;

/**
 * Returns true if a given team owns ALL or ANY items in a group
 */
declare function Team_OwnsEGroup(team: TeamID, egroup: EGroupID, any?: boolean): boolean;

/**
 * Returns true if a given team owns an entity
 */
declare function Team_OwnsEntity(team: TeamID, entity: EntityID): boolean;

/**
 * Returns true if a given team owns ALL or ANY items in a group
 */
declare function Team_OwnsSGroup(team: TeamID, sgroup: SGroupID, all?: boolean): boolean;

/**
 * Returns true if a given team owns a squad
 */
declare function Team_OwnsSquad(team: TeamID, squad: SquadID): boolean;

/**
 * Restrict a list of addons.
 * list should contain an array of strings to restrict.
 */
declare function Team_RestrictAddOnList(team: TeamID, addonlist: any): void;

/**
 * Restrict a list of buildings.
 * list should contain an array of strings to restrict.
 */
declare function Team_RestrictBuildingList(team: TeamID, blueprintlist: any): void;

/**
 * Restrict a list of research items.
 * list should contain an array of strings to restrict.
 */
declare function Team_RestrictResearchList(team: TeamID, list: string[]): void;

/**
 * Sets the availability of an ability. Availability can be either ITEM_LOCKED, ITEM_UNLOCKED, ITEM_REMOVED or ITEM_DEFAULT
 */
declare function Team_SetAbilityAvailability(team: TeamID, bp: number, availability: number): void;

/**
 * Sets the availability of entity, squad and player commands. Availability can be either ITEM_LOCKED, ITEM_UNLOCKED, ITEM_REMOVED or ITEM_DEFAULT
 */
declare function Team_SetCommandAvailability(team: TeamID, command: number, availability: number): void;

/**
 * Sets the availability of a construction menu. Availability can be either ITEM_LOCKED, ITEM_UNLOCKED, ITEM_REMOVED or ITEM_DEFAULT
 */
declare function Team_SetConstructionMenuAvailability(team: TeamID, menuname: string, availability: number): void;

/**
 * Sets the availability of an entity production item. Availability can be either ITEM_LOCKED, ITEM_UNLOCKED, ITEM_REMOVED or ITEM_DEFAULT
 */
declare function Team_SetEntityProductionAvailability(team: TeamID, bp: number, availability: number): void;

/**
 * Sets the current personnel or vehicle max-cap for each player on a team. The captype is either CT_Personnel or CT_Vehicle (you can't adjust Medic caps just yet).
 * you will have to call Team_SetMaxPopulation to adjust the current max population to do this.
 * Note that any modifiers that adjust the current max cap will be applied on top of this.  Also note, this is only adjusting the max cap, not the current cap,
 */
declare function Team_SetMaxCapPopulation(team: TeamID, captype: number, newcap: number): void;

/**
 * Sets the current personnel or vehicle cap for each player on a team. The captype is either CT_Personnel or CT_Vehicle (you can't adjust Medic caps just yet).
 * Note that any modifiers that adjust the current cap will be applied on top of this.  Also note, the current cap cannot go higher than the max cap.
 */
declare function Team_SetMaxPopulation(team: TeamID, captype: number, newcap: number): void;

/**
 * Sets the availability of a squad production item. Availability can be either ITEM_LOCKED, ITEM_UNLOCKED, ITEM_REMOVED or ITEM_DEFAULT
 */
declare function Team_SetSquadProductionAvailability(team: TeamID, bp: number, availability: number): void;

/**
 * Sets up the tech tree for a whole team based off the year
 */
declare function Team_SetTechTreeByYear(team: TeamID, year: number): void;

/**
 * Sets the availability of an upgrade. Availability can be either ITEM_LOCKED, ITEM_UNLOCKED, ITEM_REMOVED or ITEM_DEFAULT
 */
declare function Team_SetUpgradeAvailability(team: TeamID, bp: number, availability: number): void;

/**
 * Sets the cost of an upgrade.
 */
declare function Team_SetUpgradeCost(team: TeamID, upgrade: UpgradeID, food: number, wood: number, stone: number, gold: number): void;

/**
 * Returns true if the Territory contains the given SectorID.
 */
declare function Territory_ContainsSectorID(sectorID: SectorID): any;

/**
 * Returns the SectorID of the closest Sector Generator point to the given ScarPosition.
 */
declare function Territory_FindClosestSectorToPoint(pos3D: Position): any;

/**
 * Returns a table of SectorIDs that are adjacent to the given SectorID.
 */
declare function Territory_GetAdjacentSectors(sectorID: SectorID): any;

/**
 * Returns the primary entity in the given sector, if one exists, and nil otherwise.
 */
declare function Territory_GetPrimaryEntityInSector(sectorID: SectorID): any;

/**
 * Returns the sector containing the given ScarPosition.
 */
declare function Territory_GetSectorContainingPoint(pos3D: Position): any;

/**
 * Get the creator entity of the sector by sectorID
 */
declare function Territory_GetSectorCreatorEntity(sectorID: SectorID): any;

/**
 * Returns the generator point of the given sector, snapped to the surface of the terrain.
 */
declare function Territory_GetSectorGeneratorPointOnTerrain(sectorID: SectorID): any;

/**
 * Get the ID of the owner of the sector
 */
declare function Territory_GetSectorOwnerID(sectorID: SectorID): any;

/**
 * Returns true if the territory is a HexagonTerritory.
 */
declare function Territory_IsHexagonTerritory(): any;

/**
 * Add the amount of time to the specified timer
 */
declare function Timer_Add(timerID: number, period: number): void;

/**
 * Advances the timer by the specified amount of time
 */
declare function Timer_Advance(timerID: number, period: number): void;

/**
 * Display (in the console) the amount of time remaining in the specified timer.
 */
declare function Timer_Display(timerID: number): void;

/**
 * Displays a timer on the screen - You need to call this regularly (i.e. every second) to update the onscreen display. THIS IS A TEMPORARY FUNCTION - WELL GET PROPER UI SUPPORT LATER ON
 */
declare function Timer_DisplayOnScreen(timerID: number): void;

/**
 * Stop the specified timer.
 */
declare function Timer_End(timerID: number): void;

/**
 * Returns whether the timer with this ID exists
 */
declare function Timer_Exists(timerID: number): boolean;

/**
 * Returns how much time has elapsed since this timer has been started
 */
declare function Timer_GetElapsed(timerID: number): number;

/**
 * Returns TWO values: minutes and seconds. Provide it a function like Timer_GetRemaining or Timer_GetElapsed
 */
declare function Timer_GetMinutesAndSeconds(getTimeFunction: any, TimerID: number): void;

/**
 * Get the remaining time for the specified timer.
 */
declare function Timer_GetRemaining(timerID: number): number;

/**
 * Check if the timer is paused.
 */
declare function Timer_IsPaused(timerID: number): boolean;

/**
 * Pause the specified timer.
 * Pause and Resume calls are ref-counted: if you have called Pause *twice* on a timer, you will also need to call Resume twice in order to start the timer up again.
 */
declare function Timer_Pause(timerID: number): void;

/**
 * Resume the specified timer.
 * Pause and Resume calls are ref-counted: if you have called Pause *twice* on a timer, you will also need to call Resume twice in order to start the timer up again. Set the force parameter to true if you want to bypass the refcounting and make sure a timer starts up again.
 */
declare function Timer_Resume(timerID: number, force?: boolean): void;

/**
 * Start a timer with the specified id, taking the required period ( in seconds )
 */
declare function Timer_Start(timerID: number, period: number): void;

/**
 * register two callbacks to a goal. One fires when starts while the other fires when completes.
 */
declare function Training_AddCallbacksToGoal(target: The): any;

/**
 * add an extra tag to an existing goal.
 */
declare function Training_AddExTagToGoal(): any;

/**
 * Adds a sequence of goals to the training system, also starting the sequence's timer
 */
declare function Training_AddGoalSequence(): any;

/**
 * Enable/disable goal sequence
 * Also restarts the timer for the goal sequence
 */
declare function Training_EnableGoalSequence(goalSequence: GoalSequence, enabled: boolean): any;

/**
 * Enable/disable goal sequence with given id
 */
declare function Training_EnableGoalSequenceByID(id: string, enabled: boolean): any;

/**
 * Terminates a goal sequence
 */
declare function Training_EndGoalSequence(): any;

/**
 * Creates a goal object
 * A goal represents one step in a training sequence. Each goal gets one hint popup. Only one goal hint will be displayed at a time. key is the object to visually anchor the hint to. This can be: - the name of an adornable UI element - an entity - a squad - the pbg of a production button - a squad or entity unique id - UniqueSquadButton will anchor to the hero selection - UniqueRespawningSquadButton will anchor to the respawning hero element - CenterLeftSecondaryInfo will anchor to the information panel left of the command card. data is a table of arbitrary information for use in the isCompletePredicate and is routed to the ui. It should include: Message: Localized text to display on the hint pop-up. Use DataTemplate: template for the UI hint. Options are: - LeftClickTrainingDataTemplate: a box displaying an image of a left clicking mouse and message text - RightClickTrainingDataTemplate: a box displaying an image of a right clicking mouse and message text - PanCameraTrainingDataTemplate: a box displaying an image of a middle clicking mouse and message text - GenericTrainingDataTemplate: a box displaying message text - LargeGenericDataTemplate: a larger box dislpaying message text isComplete predicate to run on the goal. It should return true if and only if the goal is complete.
 */
declare function Training_Goal(key: string, data: any): any;

/**
 * Creates a goal sequence
 * A Goal Sequence represents the a single high-level task to prompt the user to do, composed of one or more goals. The goal sequence will begin when its trigger predicate is met, assuming its ignore and bypass conditions aren't met first. Only one goal sequence will be run at a time. id - unique string id to identify or reference the goal seqeuence repeatMax - if the goal sequence has been completed less than repeatMax times and its triggerPredicate passes, the goal sequence will run again. Infinite if less than 0. remindMax - if the . Infinite if less than 0. trigger - predicate to run on the goal sequence. If it returns true, start the goal sequence. ignore - predicate to run on the goal sequence. If it returns true, don't show the goal sequence even if trigger passes. remind - predicate to run on the goal sequence. It should indicate that the player needs a reminder on how to do the task. If it returns true, show the goal sequence again. bypass - predicate to run on the goal sequence. It should indicate whether the player has completed the goal without prompting. If true, the goal sequence will be ended and its completion count incremented. canRegress - if the complete condition for the current goal in the sequence stops passing, back up to the previous goal goals - list of goals to proceed through to as part of this goal sequence repeatMax and remindMax will be infinite if less than 0.
 */
declare function Training_GoalSequence(id: string, repeatMax: number, remindMax: number, goalTriggeredAudioEvent: string, completeAudioEvent: string): any;

/**
 * Send a message to a player with generic type a body
 */
declare function Command_PlayerBroadcastMessage(player: PlayerID, dest: PlayerID, messageType: number, message: string): any;

/**
 * Enables or disables the FOW, including out of bound areas and all entities on the map
 */
declare function FOW_Enable(enable: boolean): void;

/**
 * Returns the input enabled flag as an integer.
 */
declare function Game_ConvertInputEnabledFlagEnumToInt(flag: InputEnabledFlag): any;

/**
 * Returns the visibility flag as an integer.
 */
declare function Game_ConvertVisibilityFlagEnumToInt(flag: VisibilityFlag): any;

/**
 * Removes title text displayed with Game_SubTextFade(...) immediately
 */
declare function Game_EndSubTextFade(): any;

/**
 * Removes title text displayed with Game_TextTitleFade(...) immediately
 */
declare function Game_EndTextTitleFade(): any;

/**
 * Returns the input enabled flag.
 */
declare function Game_GetInputEnabledFlag(): any;

/**
 * Get the local player. (should only be used for UI purpose)
 */
declare function Game_GetLocalPlayer(): PlayerID;

/**
 * Get the local player id. (should only be used for UI purpose) (not deterministic)
 */
declare function Game_GetLocalPlayerID(): any;

/**
 * Returns the game's visibility flag.
 */
declare function Game_GetVisibilityFlag(): any;

/**
 * Determine if there is a valid local player. (UI only -- nondeterminstic)
 */
declare function Game_HasLocalPlayer(): boolean;

/**
 * Returns whether the game is paused.
 */
declare function Game_IsPaused(): any;

/**
 * Returns true if the we're running the performance test.
 */
declare function Game_IsPerformanceTest(): any;

/**
 * Requests the local player to be set on the next update. (not deterministic)
 */
declare function Game_RequestSetLocalPlayer(player: PlayerID): void;

/**
 * Sets the input enabled flag.
 */
declare function Game_SetInputEnabledFlag(flag: number): void;

/**
 * Set the player color for the world visuals from preset colors defined in tuning_simulation\ui_team_colours.
 */
declare function Game_SetPlayerColour(player: Target, Colour_Neutral: Or): void;

/**
 * Set the player color for the world visuals by slot index from preset colors defined in tuning_simulation\ui_player_colours.
 */
declare function Game_SetPlayerSlotColour(player: Target, based: _1): void;

/**
 * Set the player color for the UI from preset colors defined in tuning_simulation\ui_team_colours. Does not affect world visuals.
 */
declare function Game_SetPlayerUIColour(player: Target, Colour_Neutral: Or): void;

/**
 * Set the player color for the UI by slot index from preset colors defined in tuning_simulation\ui_player_colours. Does not affect world visuals.
 */
declare function Game_SetPlayerUISlotColour(player: Target, based: _1): void;

/**
 * Sets the visibility of the specified game visibility flag.
 */
declare function Game_SetVisibility(flag: VisibilityFlag, visible: boolean): void;

/**
 * Sets the game visibility flag.
 */
declare function Game_SetVisibilityFlag(flag: number): void;

/**
 * Skips all events. Can either delete or skip queued events.
 */
declare function Game_SkipAllEvents(bDeleteQueued: boolean): void;

/**
 * Skips the currently playing event (and stops current sound)
 */
declare function Game_SkipEvent(): void;

/**
 * Fade in and out two or three lines of subtext.
 * This function has to support two lines, for backwards compatibility. The 'detail' line is therefore optional.
 */
declare function Game_SubTextFade(location: string, time: string, detail: string, in_: number, lifetime: number, out: number): void;

/**
 * Fade in and out one, two or three lines of subtext with an icon
 */
declare function Game_SubTextFadeWithIcon(line: string, line2: string, line3: string, detail: string, in_: number, lifetime: number, out: number, icon: string): any;

/**
 * Shows title text that fades in and out over a specified durations
 * Call UI_TitleDestroy to remove.
 */
declare function Game_TextTitleFade(text: string, fadeIn: number, duration: number, fadeOut: number): any;

/**
 * Disable the spotting of enemy entities that may become ghosts in the FoW
 */
declare function Ghost_DisableSpotting(): void;

/**
 * Enable the spotting of enemy entities that may become ghosts in the FoW
 */
declare function Ghost_EnableSpotting(): void;

/**
 * Adds a Hint Point that will only appear on Mouseover of the target.
 */
declare function HintMouseover_Add(hintText: string, hintTarget: MARKER | Position | EGroup | SGROUP, targetRadius: number, looping: boolean): void;

/**
 * Removes a Mouseover Hint Point from the managing function.
 */
declare function HintMouseover_Remove(hintText: string, hintTarget: MARKER | EGroup | SGROUP): void;

/**
 * Creates a hintpoint attached to a Marker, EGroup, SGroup or position
 * If range is set to 0, then the hintpoint is rangeless, see the design document for rangeless features.
 * The following types of hintpoint actions are available.
 * HPAT_Objective
 * HPAT_Hint
 * HPAT_Critical
 * HPAT_Movement
 * HPAT_Attack
 * HPAT_FormationSetup
 * HPAT_RallyPoint
 * HPAT_DeepSnow
 * HPAT_CoverGreen
 * HPAT_CoverYellow
 * HPAT_CoverRed
 * HPAT_Detonation
 * HPAT_Vaulting
 */
declare function HintPoint_Add(where: any, bVisible: boolean, hintText: string, height?: number, actionType?: HintPointActionType, iconName?: string, priority?: number, visibleInFOW?: boolean, dataTemplate?: string): HintPointID;

/**
 * Deprecated.
 */
declare function HintPoint_AddToEGroup(egroup: EGroupID, priority: number, visible: boolean, function_: any, dataTemplate: string, hint: string, arrow: boolean, arrowOffset: Position, actionType: number, iconName: string, visibleInFOW: boolean): any;

/**
 * For internal use only.
 */
declare function HintPoint_AddToEntity(entity: EntityID, priority: number, visible: boolean, function_: any, dataTemplate: string, hint: string, arrow: boolean, arrowOffset: Position, objectiveID: number, actionType: number, iconName: string, visibleInFOW: boolean): any;

/**
 * For internal use only.
 */
declare function HintPoint_AddToPosition(position: Position, priority: number, visible: boolean, function_: any, dataTemplate: string, hint: string, arrow: boolean, arrowOffset: Position, objectiveID: number, actionType: number, iconName: string, visibleInFOW: boolean): any;

/**
 * Deprecated.
 */
declare function HintPoint_AddToSGroup(sgroup: SGroupID, priority: number, visible: boolean, function_: any, dataTemplate: string, hint: string, arrow: boolean, arrowOffset: Position, actionType: number, iconName: string, visibleInFOW: boolean): any;

/**
 * For internal use only.
 */
declare function HintPoint_AddToSquad(squad: SquadID, priority: number, visible: boolean, function_: any, dataTemplate: string, hint: string, arrow: boolean, arrowOffset: Position, objectiveID: number, actionType: number, iconName: string, visibleInFOW: boolean): any;

/**
 * Clear the hint point arrow facing value.
 */
declare function HintPoint_ClearFacing(id: number): any;

/**
 * Removes a hintpoint.
 */
declare function HintPoint_Remove(HintPointID: number): void;

/**
 * Removes all hintpoints.
 */
declare function HintPoint_RemoveAll(): void;

/**
 * Sets a hintpoint's display offset, which is 3D for world hintpoints and 2D for taskbar binding hintpoints (ignore z)
 */
declare function HintPoint_SetDisplayOffset(hintpointID: number, x: number, y: number, z?: number): void;

/**
 * Add a projected offset to the specified hint point.
 */
declare function HintPoint_SetDisplayOffsetInternal(id: number, offset: Position): void;

/**
 * Face the hint point arrow towards this entity.
 */
declare function HintPoint_SetFacingEntity(id: number, entity: EntityID): void;

/**
 * Face the hint point arrow towards this position.
 */
declare function HintPoint_SetFacingPosition(id: number, position: Position): void;

/**
 * Face the hint point arrow towards this squad.
 */
declare function HintPoint_SetFacingSquad(id: number, squad: SquadID): void;

/**
 * Sets a hintpoint's visibility. Currently, FOW is not accounted for.
 */
declare function HintPoint_SetVisible(HintPointID: number, bVisible: boolean): void;

/**
 * Show or hide the specified hint point.
 */
declare function HintPoint_SetVisibleInternal(id: number, visible: boolean): void;

/**
 * Clear the map icon facing value.
 */
declare function MapIcon_ClearFacing(id: number): any;

/**
 * Creates an arrow on the metamap between the two locations provided
 */
declare function MapIcon_CreateArrow(position_from: MARKER | Position, position_to: MARKER | Position, red: number, green: number, blue: number, alpha: number): any;

/**
 * Create a map icon targetting an entity.
 */
declare function MapIcon_CreateEntity(entity: EntityID, icon: string, scale: number, red: number, green: number, blue: number, alpha: number): any;

/**
 * Create a map icon targetting a position.
 */
declare function MapIcon_CreatePosition(position: Position, icon: string, scale: number, red: number, green: number, blue: number, alpha: number): any;

/**
 * Create a map icon targetting a squad.
 */
declare function MapIcon_CreateSquad(squad: SquadID, icon: string, scale: number, red: number, green: number, blue: number, alpha: number): any;

/**
 * Remove a map icon.
 */
declare function MapIcon_Destroy(id: number): any;

/**
 * Remove all map icons.
 */
declare function MapIcon_DestroyAll(): any;

/**
 * Face the map icon towards this entity.
 */
declare function MapIcon_SetFacingEntity(id: number, entity: EntityID): void;

/**
 * Face the map icon towards this position.
 */
declare function MapIcon_SetFacingPosition(id: number, position: Position): void;

/**
 * Face the map icon towards this squad.
 */
declare function MapIcon_SetFacingSquad(id: number, squad: SquadID): void;

/**
 * Add another circle in which commands are restricted to.
 */
declare function Misc_AddRestrictCommandsCircle(position: Position, radius: number): any;

/**
 * Add another marker in which commands are restricted to.
 */
declare function Misc_AddRestrictCommandsMarker(marker: MarkerID): any;

/**
 * Add another AABB in which commands are restricted to.
 */
declare function Misc_AddRestrictCommandsOBB(minPosition: Position, maxPosition: Position): any;

/**
 * Returns the enabled/disabled state of the right-click command input.
 */
declare function Misc_AreDefaultCommandsEnabled(): boolean;

/**
 * Clears a specific control group.
 */
declare function Misc_ClearControlGroup(groupIndex: number): any;

/**
 * Clears the current selection.
 */
declare function Misc_ClearSelection(): any;

/**
 * Clears the current sub selection.
 */
declare function Misc_ClearSubselection(): any;

/**
 * Do weapon hit effect on the entity from the view camera origin
 * WeaponID is the property bag group id; if penetrated is set to false, deflection effect would be played instead
 */
declare function Misc_DoWeaponHitEffectOnEntity(entity: EntityID, pos: Position, weaponPBG: WeaponBlueprint, penetrated: boolean): void;

/**
 * Returns contents of a control group (0 to 9). Squads are put into an sgroup, and non-squad entities are put into an egroup.
 */
declare function Misc_GetControlGroupContents(groupIndex: number, squads: SGroupID, nonSquadEntities: EGroupID): void;

/**
 * Returns the control group index that this entity belongs to, from 0 to 9, or -1 if none
 */
declare function Misc_GetEntityControlGroup(entity: EntityID): number;

/**
 * Returns a hidden position on path from origin to destination. If there's none, it returns the origin position
 * Possible check types are CheckHiddenFromCamera, CheckHiddenInFOW and CheckHiddenBothCameraFOW Camera check determined by the camera frustum. use cameraPadding to increase the area around the camera when doing the check FOW check requires a valid player ID passed in stepDistance is the interval along the path that the hidden points will be checked ( min is 1 metre ) If no hidden position is found, position ( 0, 0, 0 ) is returned Don't use this for multi-player SCAR script!!
 */
declare function Misc_GetHiddenPositionOnPath(checkType: number, origin: Position, dest: Position, ebp: EntityBlueprint, stepDistance: number, cameraPadding: number, FOWPlayer: PlayerID, debugDisplay: boolean): Position;

/**
 * Returns the world position of the mouse on the terrain
 */
declare function Misc_GetMouseOnTerrain(): Position;

/**
 * Returns the entity under the mouse (if any)
 */
declare function Misc_GetMouseOverEntity(): EntityID;

/**
 * Returns the entity squad under the mouse (if any) (not deterministic)
 */
declare function Misc_GetMouseOverSquad(): any;

/**
 * Clears a given egroup and adds the current selection to the group
 */
declare function Misc_GetSelectedEntities(group: EGroupID, subSelection: boolean): void;

/**
 * Clears a given sgroup and adds the current selection to the group
 */
declare function Misc_GetSelectedSquads(group: SGroupID, subSelection: boolean): void;

/**
 * Returns the control group index that this squad belongs to, from 0 to 9, or -1 if none
 */
declare function Misc_GetSquadControlGroup(squad: SquadID): number;

/**
 * Returns true if ANY or ALL of the EGroup is selected
 */
declare function Misc_IsEGroupSelected(egroup: EGroupID, all: boolean): boolean;

/**
 * Check if the entity is on screen currently
 */
declare function Misc_IsEntityOnScreen(entity: EntityID, pct: number): boolean;

/**
 * Returns true if an entity is currently selected
 */
declare function Misc_IsEntitySelected(entity: EntityID): boolean;

/**
 * Returns true if the mouse is over an entity
 */
declare function Misc_IsMouseOverEntity(): boolean;

/**
 * Returns true if the mouse is over a squad (not deterministic)
 */
declare function Misc_IsMouseOverSquad(): any;

/**
 * Returns the enabled/disabled state of the selection input.
 */
declare function Misc_IsSelectionInputEnabled(): boolean;

/**
 * Returns true if ANY or ALL of the SGroup is selected
 */
declare function Misc_IsSGroupSelected(sgroup: SGroupID, all: boolean): boolean;

/**
 * Check if the squad is on screen currently
 */
declare function Misc_IsSquadOnScreen(squad: SquadID, pct: number): boolean;

/**
 * Returns true if a squad is currently selected
 */
declare function Misc_IsSquadSelected(squad: SquadID): boolean;

/**
 * Can issue commands anywhere
 */
declare function Misc_RemoveCommandRestriction(): void;

/**
 * Can only issue commands inside this marker
 */
declare function Misc_RestrictCommandsToMarker(marker: MarkerID): void;

/**
 * Select all the entities in an EGroup
 */
declare function Misc_SelectEGroup(egroup: EGroupID): any;

/**
 * Select the entity as if you had clicked it.
 */
declare function Misc_SelectEntity(pEntity: EntityID): void;

/**
 * Select (or deselect) all the squads in an SGroup
 */
declare function Misc_SelectSGroup(sgroup: SGroupID, selected: boolean): any;

/**
 * Add or remove squad members from the current selection
 */
declare function Misc_SelectSquad(squad: SquadID, bSelected: boolean): void;

/**
 * Enables / Disables right-click command input.
 */
declare function Misc_SetDefaultCommandsEnabled(enabled: boolean): void;

/**
 * Allow all entities in an EGroup to be selectable (or not)
 */
declare function Misc_SetEGroupSelectable(egroup: EGroupID, selectable: boolean): void;

/**
 * Makes a squad belong to a specific control group. If it already belongs to another control group, it's removed from that one before being added to the new one.
 */
declare function Misc_SetEntityControlGroup(entity: EntityID, groupIndex: number): boolean;

/**
 * Disable/enable selectability of the specified entity.
 */
declare function Misc_SetEntitySelectable(entity: EntityID, selectable: boolean): void;

/**
 * Enables / Disables selection input.
 */
declare function Misc_SetSelectionInputEnabled(enabled: boolean): void;

/**
 * Allow all squads in an SGroup to be selectable (or not)
 */
declare function Misc_SetSGroupSelectable(sgroup: SGroupID, selectable: boolean): void;

/**
 * Makes a squad belong to a specific control group. If it already belongs to another control group, it's removed from that one before being added to the new one.
 */
declare function Misc_SetSquadControlGroup(squad: SquadID, groupIndex: number): boolean;

/**
 * Disable/enable selectability of the specified squad.
 */
declare function Misc_SetSquadSelectable(squad: SquadID, selectable: boolean): void;

/**
 * Hide the objective progress panel.
 */
declare function Obj_HideProgress(): any;

/**
 * Hide the specified objective progress panel.
 */
declare function Obj_HideProgressEx(progressBarIndex: number): any;

/**
 * Make the objective progress bar blink or stop blinking.
 */
declare function Obj_SetProgressBlinking(blinking: boolean): void;

/**
 * Show the objective progress panel with a progress bar - call repeatedly to update progress.  Value should be normalized between [0 - 1].
 */
declare function Obj_ShowProgress(title: string, progress: number): any;

/**
 * Show the objective progress panel with a progress bar - call repeatedly to update progress.  Value should be normalized between [0 - 1].  Appears in center of screen.
 */
declare function Obj_ShowProgress2(title: string, progress: number): any;

/**
 * Show the specified objective progress panel with a progress bar - call repeatedly to update progress. Value should be normalized between [0 - 1].  If critical, progress bar will pulse.
 */
declare function Obj_ShowProgressEx(progressBarIndex: number, title: string, progress: number, critical: boolean): any;

/**
 * Show the objective progress panel with a timer icon - call repeatedly to update progress.  Value should be in seconds.
 */
declare function Obj_ShowProgressTimer(progress: number): any;

/**
 * Clears the config changed callback
 */
declare function PlayerColour_ClearConfigChangedCallback(): any;

/**
 * Clear player color overriding and use the "PlayerColour" setting instead.
 */
declare function PlayerColour_Disable(): any;

/**
 * Force enable player color that overrides the current "PlayerColour" setting.
 */
declare function PlayerColour_Enable(): any;

/**
 * Sets a callback firing when user changes the config for player colour
 */
declare function PlayerColour_SetConfigChangedCallback(function_: any): void;

/**
 * Prematurely finish all queued speech
 * This is useful for skipping all speech events that may have been queued
 */
declare function Subtitle_EndAllSpeech(): any;

/**
 * Prematurely finish currently playing speech and advance the next one in queue
 * This is useful for skipping speech events
 */
declare function Subtitle_EndCurrentSpeech(): void;

/**
 * Plays a narrative event as a series of subtitled speech transitions when given the event's reflect ID.
 * Pass in the reflect ID (make sure it is represented as an integer) of a NarrativeEvent which is authored in a NarrativeCollection data object. This function will add a wait object which will terminate when all transitions are complete.
 */
declare function Subtitle_PlayNarrativeEvent(str: string): any;

/**
 * Plays a global speech with subtitle and actor icon specified in the narrative line with given ID.
 * The line should be present in an authorable narrative collection and referenced by the reflect ID Adds a wait object if successful. Returns the title ID, call UI_TitleDestroy to remove.
 */
declare function Subtitle_PlayNarrativeLine(str: string): any;

/**
 * Plays a global speech with subtitle and actor icon in the overlay with speech bubbles on squad decorators.
 * localization id is used for both subtitle text and speech If the speech file is 3D, make sure that is3D is set to true. Shows speech bubble indicator on squad decorator. Call UI_TitleDestroy to remove.
 */
declare function Subtitle_PlaySpeechForSquadFromLocString(briefingActorPBG: ScarBriefingActorPBG, loc: string, disableIconSubtitle: boolean, audioCtrlEvent: string, squad: SquadID, is3D: boolean): any;

/**
 * Plays a global speech with subtitle and actor icon in the overlay
 * localization id is used for both subtitle text and speech please make sure that the the speech file is 2D Call UI_TitleDestroy to remove.
 */
declare function Subtitle_PlaySpeechInternal(briefingActorPBG: ScarBriefingActorPBG, loc: string, disableIconSubtitle: boolean, audioCtrlEvent: string, squad: SquadID, is3D: boolean): any;

/**
 * Removes "sticky" state from currently playing speech (if any)
 */
declare function Subtitle_UnstickCurrentSpeech(): void;

/**
 * Send a player ability command (PCMD_Ability) to a player.
 * Only use this function from code which is executed for a single player (such as UI button callbacks).
 */
declare function SynchronizedCommand_PlayerAbility(player: PlayerID, dest: PlayerID, abilityPBG: ScarAbilityPBG, skipCostAndPrereq: boolean): any;

/**
 * Send a positional ability command (PCMD_Ability) to a player
 * Only use this function from code which is executed for a single player (such as UI button callbacks).
 */
declare function SynchronizedCommand_PlayerPosAbility(player: PlayerID, dest: PlayerID, pos: Position, abilityPBG: ScarAbilityPBG, skipCostAndPrereq: boolean): any;

/**
 * Send a positional/directional ability command (PCMD_Ability) to a player
 * Only use this function from code which is executed for a single player (such as UI button callbacks).
 */
declare function SynchronizedCommand_PlayerPosDirAbility(player: PlayerID, dest: PlayerID, pos: Position, dir: Position, abilityPBG: ScarAbilityPBG, skipCostAndPrereq: boolean): any;

/**
 * Returns whether the taskbar is visible
 */
declare function Taskbar_IsVisible(): boolean;

/**
 * sets taskbar visibility!
 */
declare function Taskbar_SetVisibility(visible: boolean): void;

/**
 * Adds a threat to an existing group
 */
declare function ThreatArrow_Add(GroupID: number, Threat: EntityID | Squad | EGroup | SGROUP | Position | MARKER, icon?: string): void;

/**
 * Creates a group of threats that are represented by a single arrow. Threats can be entities, squads, egroups, sgroups, positions or markers
 */
declare function ThreatArrow_CreateGroup(dataTemplate: string, target1: MARKER | Position | EntityID | Squad | Group, target2?: MARKER | Position | EntityID | Squad | Group): number;

/**
 * Destroy all threat groups
 */
declare function ThreatArrow_DestroyAllGroups(): void;

/**
 * Destroy a threat group
 */
declare function ThreatArrow_DestroyGroup(GroupID: number): void;

/**
 * Removes a threat from an existing group
 */
declare function ThreatArrow_Remove(GroupID: number, Threat: EntityID | Squad | EGroup | SGROUP | Position | MARKER): void;

/**
 * Creates and flashes an ability button on the taskbar if the unit is selected
 * Length parameter determines how long to flash the item, and the blueprint filter is used if
 * certain squad types need to be selected before flashing the button.
 */
declare function UI_AddHintAndFlashAbility(playerid: PlayerID, abilityID: AbilityID, text: string, length: number, blueprint_filter?: any | Blueprint): void;

/**
 * Toggle off all territory lines. Each call to UI_AllTerritoryHide must be matched by a call to UI_AllTerritoryShow
 */
declare function UI_AllTerritoryHide(): any;

/**
 * Toggle on all territory lines. Each call to UI_AllTerritoryShow must be matched by a call to UI_AllTerritoryHide
 */
declare function UI_AllTerritoryShow(): any;

/**
 * DEPRECATED! Removes a message added by UI_AutosaveMessageShow.
 */
declare function UI_AutosaveMessageHide(): any;

/**
 * DEPRECATED! Shows a message indicating that the game is autosaving.
 * DEPRECATED! Call UI_AutosaveMessageHide to remove the message.
 */
declare function UI_AutosaveMessageShow(): any;

/**
 * Toggle off capture-point boundary lines. Each call to UI_CapturePointLinesHide must be matched by a call to UI_CapturePointLinesShow
 */
declare function UI_CapturePointLinesHide(): any;

/**
 * Toggle on capture-point boundary lines. Each call to UI_CapturePointLinesShow must be matched by a call to UI_CapturePointLinesHide
 */
declare function UI_CapturePointLinesShow(): any;

/**
 * Clears an event cue with a specific ID. The ID is obtained as a return value from either UI_CreateEventCueClickable or UI_CreateEventCueClickableByType.
 */
declare function UI_ClearEventCueFromID(id: number): any;

/**
 * Clears all active event cues
 */
declare function UI_ClearEventCues(): void;

/**
 * Clears the ability phase callback
 */
declare function UI_ClearModalAbilityPhaseCallback(): void;

/**
 * Clears the construction phase callback.
 */
declare function UI_ClearModalConstructionPhaseCallback(): any;

/**
 * Clears the construction phase callback.
 */
declare function UI_ClearModalHoverCallback(): any;

/**
 * Clears the try-to-skip-NIS callback
 */
declare function UI_ClearSkipNISCallback(): any;

/**
 * Set the numner of columns in the command card.
 */
declare function UI_CommandCardSetColumns(columns: number): void;

/**
 * Set the numner of rows in the command card.
 */
declare function UI_CommandCardSetRows(rows: number): void;

/**
 * Toggle off cover preview. Each call to UI_CoverPreviewHide must be matched by a call to UI_CoverPreviewShow
 */
declare function UI_CoverPreviewHide(): void;

/**
 * Toggle on cover preview. Each call to UI_CoverPreviewShow must be matched by a call to UI_CoverPreviewHide
 */
declare function UI_CoverPreviewShow(): void;

/**
 * Create a table that will be interpreted as a command for UI properties.
 */
declare function UI_CreateCommand(): any;

/**
 * Create a event cue from a sender.
 */
declare function UI_CreateCustomEventCueFrom(player: Sender, type: Event, duration: Visible, repeat: boolean, repeatTime: When, repeatTime2: When, data: Ui, cue: Event, cue2: Event, event: Control): any;

/**
 * Create a table that will be interpreted as a data context for UI properties.
 */
declare function UI_CreateDataContext(dataContext: any): any;

/**
 * Create a custom kicker message on the entity and display to the player
 */
declare function UI_CreateEntityKickerMessage(player: PlayerID, entity: EntityID, message: string): void;

/**
 * Creates an event cue without a callback (you won't know when it's clicked).
 */
declare function UI_CreateEventCue(title: string, description: string | undefined, data_template: string, icon_path: string, sound_path: string, visibility?: EventCueVisibility, lifetime?: number): Event;

/**
 * Creates a event cue with custom lua callback function when icon is clicked. Lifetime of -1 means use the default. The return value is an event cue ID. The callback receives one parameter: the ID of the event cue that was clicked.
 * the lua function is executed when the event cue icon is pressed          example: UI_CreateEventCueClickable( "event_cue_icons/icon_player_attacked", "General_alert", 42761, 42762, prt, -1 )
 */
declare function UI_CreateEventCueClickable(iconPath: string, soundPath: string, title: string, description: string, f: any, lifetime: number, dismissOnClick: boolean): number;

/**
 * Creates a named event cue. Returns the ID associated to the created event cue item. This ID can be used to clear the event cue item with UI_ClearEventCueFromID. The Lua function callback passed in takes an ID as an argument which can be used to clear the event cue with UI_ClearEventCueFromID.
 */
declare function UI_CreateEventCueClickableByType(eventType: UIEventType, lifetime: number, title: string, description: string, dataTemplate: string, iconPath: string, soundPath: string, red: number, green: number, blue: number, alpha: number, visibility: EventCueVisibility, function_: any): any;

/**
 * Creates a blip on the minimap; return the ID of the blip.
 * 'where' can be an entity, marker, position, egroup, sgroup, or squad.
 */
declare function UI_CreateMinimapBlip(where: any, lifetime: number, blipDataTemplate: string): BlipID;

/**
 * Create a blips on a ScarMarker from a sender. sender is used for retrieving player information like team color
 */
declare function UI_CreateMinimapBlipOnMarkerFrom(sender: PlayerID, marker: MarkerID, lifeTime: number, dataTemplate: string): any;

/**
 * Create a blips on a position from a sender. sender is used for retrieving player information like team color
 */
declare function UI_CreateMinimapBlipOnPosFrom(sender: PlayerID, position: Position, lifeTime: number, dataTemplate: string): any;

/**
 * Create a custom kicker message on position and display to the player using default colour
 */
declare function UI_CreatePositionKickerMessage(player: PlayerID, position: Position, message: string): void;

/**
 * Create a custom kicker message on the squad and display to the player.
 */
declare function UI_CreateSGroupKickerMessage(player: PlayerID, sgroup: SGROUP, message: string): void;

/**
 * Create a custom kicker message on the squad and display to the player
 */
declare function UI_CreateSquadKickerMessage(player: PlayerID, squad: SquadID, message: string): void;

/**
 * Create a position tag.
 */
declare function UI_CreateTagForPosition(scar: A): any;

/**
 * Hides the mouse cursor
 */
declare function UI_CursorHide(): any;

/**
 * Shows the mouse cursor if it has been hidden
 */
declare function UI_CursorShow(): any;

/**
 * Removes a blip already created on the minimap
 */
declare function UI_DeleteMinimapBlip(blipID: number): void;

/**
 * Destroy a position tag.
 * position: same of or extremely close (std::numeric_limits<float>::min()) to an existing position. If there are multiple candidates, delete the closest.
 */
declare function UI_DestroyTagForPosition(position: Position): void;

/**
 * Enable or disable entity decorator. The default is decorator enabled.
 */
declare function UI_EnableEntityDecorator(entity: EntityID, enabled: boolean): any;

/**
 * Turn on or off entity minimap indicator. The default is enabled
 */
declare function UI_EnableEntityMinimapIndicator(entity: EntityID, enabled: boolean): void;

/**
 * Enable or disable entity selection visuals. The default is visuals enabled.
 */
declare function UI_EnableEntitySelectionVisuals(entity: EntityID, enabled: boolean): any;

/**
 * Enables or disables event cues.
 */
declare function UI_EnableGameEventCueType(gameEventType: GameEventID, enable: boolean): any;

/**
 * Enables or disables resource kickers. Possible resource types are RT_Manpower, RT_Fuel, RT_Munition, RT_Action, RT_Command.
 */
declare function UI_EnableResourceTypeKicker(resourceType: number, enable: boolean): void;

/**
 * Turn on or off squad decorator. The default is decorator enabled
 */
declare function UI_EnableSquadDecorator(squad: SquadID, enabled: boolean): void;

/**
 * Turn on or off squad minimap indicator. The default is enabled
 */
declare function UI_EnableSquadMinimapIndicator(squad: SquadID, enabled: boolean): void;

/**
 * Enables or disables event cues.
 */
declare function UI_EnableUIEventCueType(uiEventType: UIEventType, enable: boolean): any;

/**
 * Triggers an event cue to start its fadeout animation. The animation is determined in XAML.
 */
declare function UI_FadeOutEventCueFromID(id: number): any;

/**
 * Begins flashing an ability widget.
 * Flashes a taskbar binding associated with a specific ability ID.
 */
declare function UI_FlashAbilityButton(ability: AbilityBlueprint, bStopOnClick: boolean, blipType: number): number;

/**
 * Flashes a construction button associated to a building EBP.
 */
declare function UI_FlashConstructionButton(ebp: EntityBlueprint, bStopOnClick: boolean, blipType: number): number;

/**
 * Flashes the entity using attributes from [tuning][ui]
 */
declare function UI_FlashEntity(entity: EntityID, actionOnName: string): void;

/**
 * Flash an entity order command button.  Pass the return value to UI_StopFlashing to stop flashing the button.
 */
declare function UI_FlashEntityCommandButton(command: EntityCommandType, stopOnClick: boolean): any;

/**
 * Flashes an event cue icon
 */
declare function UI_FlashEventCue(eventCueID: number, bStopOnClick: boolean, blipType: number): number;

/**
 * Flash a menu command button.  Pass the return value to UI_StopFlashing to stop flashing the button.
 */
declare function UI_FlashMenu(menuName: string, stopOnClick: boolean): any;

/**
 * Flashes an objective counter
 */
declare function UI_FlashObjectiveCounter(objectiveID: number, blipType: number): number;

/**
 * Flashes an objective icon
 */
declare function UI_FlashObjectiveIcon(objectiveID: number, bStopOnClick: boolean, blipType: number): number;

/**
 * Flash a production building button.  Pass the return value to UI_StopFlashing to stop flashing the button.
 * Type should match the unit_class of a Production Building in the army bag for the player's race
 */
declare function UI_FlashProductionBuildingButton(type: string, stopOnClick: boolean): any;

/**
 * Begins flashing a production widget.
 * Flashes a taskbar binding associated with a production type and PBG id. Use PGB id of -1 if you only care about the production type. Type may be one of PITEM_Spawn, PITEM_SquadUpgrade, PITEM_Reinforce
 */
declare function UI_FlashProductionButton(pType: number, pbg: Blueprint, bStopOnClick: boolean, blipType: number): number;

/**
 * Flash a squad order command button.  Pass the return value to UI_StopFlashing to stop flashing the button.
 */
declare function UI_FlashSquadCommandButton(command: SquadCommandType, stopOnClick: boolean): any;

/**
 * Flash a button on the USS for this entity.  Pass the return value to UI_StopFlashing to stop flashing the button.
 */
declare function UI_FlashUSSEntityButton(entity: EntityID, stopOnClick: boolean): any;

/**
 * Flash a button on the USS for this squad.  Pass the return value to UI_StopFlashing to stop flashing the button.
 */
declare function UI_FlashUSSSquadButton(squad: SquadID, stopOnClick: boolean): any;

/**
 * Returns the icon name for a given ability
 */
declare function UI_GetAbilityIconName(abilityBag: ScarAbilityPBG): any;

/**
 * Converts a colour table to an ARGB hex string (e.g. {a=0, r=255, g=204, b=136} => #00FFCC88).
 */
declare function UI_GetColourAsString(): any;

/**
 * Returns whether all decorators are enabled or not
 */
declare function UI_GetDecoratorsEnabled(): boolean;

/**
 * Gets an enum value indicating the visibility of decorators for an entity.
 */
declare function UI_GetDecoratorVisibilityEntity(entity: EntityID): any;

/**
 * Gets an enum value indicating the visibility of decorators for a squad.
 */
declare function UI_GetDecoratorVisibilitySquad(squad: Squad): any;

/**
 * Highlights an SGroup in the UI for the given duration
 */
declare function UI_HighlightSGroup(sgroup: SGroupID, duration: number): void;

/**
 * Turn on squad highlight UI feature for the duration
 */
declare function UI_HighlightSquad(squad: SquadID, duration: number): void;

/**
 * Is a replay match currently.
 */
declare function UI_IsReplay(): any;

/**
 * Fades the letterbox to a given RGBA colour over a number of seconds by a given aspect ratio.
 * Call UI_TitleDestroy to remove.
 */
declare function UI_LetterboxFade(r: number, g: number, b: number, a: number, duration: number, aspectRatio: number, persistent: boolean): any;

/**
 * Create a reticule
 */
declare function UI_ModalVisual_CreateReticule(reticulePbg: ScarReticulePBG, radius: number): any;

/**
 * Destroy a modal visual
 */
declare function UI_ModalVisual_Destroy(id: number): any;

/**
 * Brings up a message and arrow pointing to a HUD feature.
 * Accepted parameters are:  HUDF_AbilityCard, HUDF_MiniMap, HUDF_Upgrades, HUDF_CommandCard, HUDF_None Call UI_TitleDestroy to remove.
 */
declare function UI_NewHUDFeature(newHUDFeature: HUDFeatureType, featureText: string, featureIcon: string, duration: number): any;

/**
 * Toggle off terrain out of bounds lines. Each call to UI_OutOfBoundsLinesHide must be matched by a call to UI_OutOfBoundsLinesShow
 */
declare function UI_OutOfBoundsLinesHide(): any;

/**
 * Toggle on terrain out of bounds lines. Each call to UI_OutOfBoundsLinesShow must be matched by a call to UI_OutOfBoundsLinesShowHide
 */
declare function UI_OutOfBoundsLinesShow(): any;

/**
 * Only allow buildings to be placed inside a marker
 */
declare function UI_RestrictBuildingPlacement(mkr: MarkerID): void;

/**
 * Fades the screen to a given RGBA colour over a number of seconds. mouse input is blocked during the fade, and you can control whether the input keeps being blocked after the fade has ended (be careful!)
 */
declare function UI_ScreenFade(r: number, g: number, b: number, a: number, duration: number, bKeepBlockingInput: boolean): void;

/**
 * Toggle off sector lines. Each call to UI_SectorsHide must be matched by a call to UI_SectorsShow
 */
declare function UI_SectorsHide(): any;

/**
 * Toggle on sector lines. Each call to UI_SectorsShow must be matched by a call to UI_SectorsHide
 */
declare function UI_SectorsShow(): any;

/**
 * Sets the game to allow allied squads to be selected at the same time as your own squads
 */
declare function UI_SetAlliedBandBoxSelection(allow: boolean): void;

/**
 * Enables or disable load and save features at the pause menu
 */
declare function UI_SetAllowLoadAndSave(allowLoadAndSave: boolean): void;

/**
 * Sets a callback firing when user select a control group either by hotkey or by control group button
 */
declare function UI_SetControlGroupSelectedCallback(the: In): void;

/**
 * Sets the visibility of the Command Point meter.
 */
declare function UI_SetCPMeterVisibility(visible: boolean): void;

/**
 * Enables or disables all decorators
 */
declare function UI_SetDecoratorsEnabled(enabled: boolean): void;

/**
 * Enable/Disable pause menu showing up when the pause menu hot key is pressed.
 */
declare function UI_SetEnablePauseMenu(isEnable: boolean): void;

/**
 * Explicitly set the decorator a squad should use.
 */
declare function UI_SetEntityDecorator(entity: EntityID, decorator: string): void;

/**
 * Sets the game to force show subtitles even if the player has them turned off.
 */
declare function UI_SetForceShowSubtitles(forceShowSubtitles: boolean): void;

/**
 * Sets the angle of True North for the minimap in degrees
 */
declare function UI_SetMinimapTrueNorth(trueNorthAngleDeg: number): void;

/**
 * Sets a function to be called when the player clicks an ability and gets a targetting UI. Your function will have 2 arguments: [Blueprint] ability blueprint, [Real] phase: MAP_Placing, MAP_Facing (only if ability requires facing) or MAP_Confirmed
 */
declare function UI_SetModalAbilityPhaseCallback(f: any): void;

/**
 * Sets a function to be called when the player clicks a construction item and gets a targeting UI. Your function will have 2 arguments: [Blueprint] ability blueprint, [integer] phase: TP_Position, TP_Facing (only if ability requires facing), TP_Issued (not strict) or TP_Cancelled (for all issuables)
 */
declare function UI_SetModalConstructionPhaseCallback(function_: any): void;

/**
 * Sets a function to be called when the player clicks a construction item and gets a targeting UI. Your function will have 2 arguments: [Blueprint] ability blueprint, [integer] phase: TP_Position, TP_Facing (only if ability requires facing), TP_Issued (not strict) or TP_Cancelled (for all issuables)
 */
declare function UI_SetModalHoverCallback(function_: any): void;

/**
 * Sets a level decorator that's defined in all of the squads squad_ui_ext in the target SGroup
 * if level value is -1 it will hide the special decorator, if no level is defined -1 is default
 */
declare function UI_SetSGroupSpecialLevel(sgroup: SGROUP, level: number): void;

/**
 * Enables or disables the silhouettes for squads / entities
 */
declare function UI_SetSilhouetteEnabled(unit: SGROUP | EGroup | Squad | EntityID, enabled: boolean): void;

/**
 * Sets a callback firing when user try to skip the NIS
 */
declare function UI_SetSkipNISCallback(function_: any): void;

/**
 * Explicitly set the decorator a squad should use.
 */
declare function UI_SetSquadDecorator(squad: SquadID, decorator: string): void;

/**
 * Turn on of off the squad decorator being always visible. The default is decorator not always visible.
 */
declare function UI_SetSquadDecoratorAlwaysVisible(squad: SquadID, alwaysVisible: boolean): void;

/**
 * Enables or disables the UI extensions for squads / entities
 */
declare function UI_SetUIExtEnabled(unit: SGROUP | EGroup | Squad | EntityID, enabled: boolean): void;

/**
 * Stops a flash handler of a given id.
 * If the given flash handler doesn't exist, then there is no effect.
 */
declare function UI_StopFlashing(updaterID: number): void;

/**
 * Removes a message added by Game_ShowSystemMessage.
 */
declare function UI_SystemMessageHide(message: string): any;

/**
 * Shows a system message in the area where Game Paused text appears.
 * Call Game_HideSystemMessage to remove the message.
 */
declare function UI_SystemMessageShow(message: string): any;

/**
 * Removes a title using an id returned by the title creating function.
 */
declare function UI_TitleDestroy(): any;

/**
 * Toggles all decorators on or off.
 */
declare function UI_ToggleDecorators(): void;

/**
 * Removes the restriction on building placement
 */
declare function UI_UnrestrictBuildingPlacement(): void;

/**
 * Displays a breif UI warning in the critical alert message area.
 */
declare function UIWarning_Show(locText: string): void;

/**
 * Triggers a UI event cue and an audio cue that the player is about to lose the game.
 * The lower the warningLevel, the closer the player is to losing and the more intense the warning is
 */
declare function WinWarning_PublishLoseReminder(player: PlayerID, warningLevel: number): void;

/**
 * Call UI_TitleDestroy to remove.
 */
declare function WinWarning_ShowLoseWarning(text: string, fadeIn: number, duration: number, fadeOut: number): any;

/**
 * E-mails a warning out with logfiles at the end of the game.
 * Example: bug( "This shouldn't happen, fix "..problem.here)
 */
declare function bug(errormessage: string): void;

/**
 * Clones a table allowing for unadulterated use of the data. By default this cloning is done recursively, but that can be changed with the optional recursive flag.
 */
declare function Clone(data: any, recursive?: boolean): any;

/**
 * Converts any enum value to a number
 */
declare function Enum_ToNumber(var_: any): any;

/**
 * Converts any enum value to a string
 */
declare function Enum_ToString(var_: any): any;

/**
 * Returns true if any standard (non-save) event has been queued to run.
 * TODO: This function name is misleading. We should maybe change it, but this is being called in many mission scripts so we are leaving it for later.
 */
declare function Event_IsAnyRunning(): boolean;

/**
 * Ends the single player game (win/lose).
 */
declare function Game_EndSP(win: boolean, winReason?: number, nis?: boolean, sandmap?: boolean): void;

/**
 * Fades the screen to black - FADE_OUT to fade to black, FADE_IN to fade back in
 */
declare function Game_FadeToBlack(direction: boolean, length: number): void;

/**
 * Loads a scar file if it hasn't been loaded yet
 */
declare function Import_Once(Path: string): undefined;

/**
 * Returns a formatted localized string.
 * Use this function to format localized text. ie %1PLAYERNAME% is going to win. It accepts up to 9 additional values as parameters.
 */
declare function Loc_FormatText(FormatID: number, parameters?: Argc): string;

/**
 * Modify whether or not the group is revealed in the fog of war.
 */
declare function Modify_EnableIsVisibleInFOW(group: EGroupID, enable: boolean, durationSeconds: number): any;

/**
 * Modify the damage done to the entity per tick when it is on fire
 * Can modify the value to zero to allow buildings to be on fire without taking damage
 */
declare function Modify_OnFireDamagePerTick(egroup: EGroupID, mathtype: ModifierUsageType, value: number): Modids;

/**
 * Modify the amount that the burn level decays per tick when not on fire
 */
declare function Modify_OnFireDecayAmountPerTick(egroup: EGroupID, mathtype: ModifierUsageType, value: number): Modids;

/**
 * Modify the health threshold required to set the entity on fire
 */
declare function Modify_OnFireHealthPercentage(egroup: EGroupID, mathtype: ModifierUsageType, value: number): Modids;

/**
 * Modify the burn level threshold required to set the entity on fire. A LOWER value means it lights on fire FASTER.
 */
declare function Modify_OnFireThreshold(egroup: EGroupID, mathtype: ModifierUsageType, value: number): Modids;

/**
 * Modify the number of entities spawned in new squads
 * Intended use case is spawning damaged squadss
 */
declare function Modify_PlayerSquadLoadoutMax(player: Player, mathtype: ModifierUsageType, value: number): Modids;

/**
 * Modifies an entity's shield regen
 * Should only be used on squads
 */
declare function Modify_SquadShieldRegen(group: SGroupID, Factor: number, Usage: MUT): any;

/**
 * Check if a position is valid or not... useful for functions that may return INVALID_POS
 */
declare function Position_IsValid(pos: Position): any;

/**
 * Play sound on the centermost squad in the sgroup
 */
declare function Sound_PlayOnSquad(soundpathname: string, sgroupid: SGroupID | Squad): number;

/**
 * Finds the greatest (or least) concentration of entities owned by a team.
 * This function is slow, so don't call it very often
 */
declare function Team_GetEntityConcentration(team: TeamID, popcapOnly?: boolean, includeBlueprints?: any, excludeBlueprints?: any, bLeastConcentrated?: boolean, onlyInThisMarker?: MarkerID | any): EGroup;

/**
 * Finds the greatest (or least) concentration of squads owned by a team.
 * This function is slow, so don't call it very often
 */
declare function Team_GetSquadConcentration(team: TeamID, popcapOnly?: boolean, includeBlueprints?: any, excludeBlueprints?: any, bLeastConcentrated?: boolean, onlyInThisMarker?: MarkerID | any): SGROUP;

/**
 * Forces all in-process spawns / deploys to complete instantly.
 */
declare function UnitEntry_CompleteAllImmediately(): void;

/**
 * Forces a specific index of the deploy table to complete instantly.
 */
declare function UnitEntry_CompleteImmediately(index: any): void;

/**
 * Forces all in-process exits to complete instantly.
 */
declare function UnitExit_CompleteAllImmediately(): any;

/**
 * If there's a squad under the mouse cursor, this adds it to a unique SGroup. Return value is the SGroup it was added to, or nil if there was no squad under the mouse cursor. Pass in true for 'clearGroup' to clear the sgroup before adding the squad.
 */
declare function Util_AddMouseoverSquadToSGroup(clearGroup?: boolean): SGroupID;

/**
 * Applies any modifier to the target SGroup, EGroup, or Player
 * Valid applytypes are MAT_...(Entity, Squad etc.), if left default assumption is default type for the target
 * Cases you want to define applytype: Weapon Modifiers, Enable Modifiers, or a player modifier for all entity or squad types
 * Valid mathtypes are MUT...(Addition, Multiplication, etc.)
 * Exclusive modifiers will replace all pre-existing modifiers of that modifier type on the target
 */
declare function Util_ApplyModifier(groupid: SGroupID | EGroupID | Player, modifier: string, scalefactor: number, mathtype: number, applytype?: number, exclusive?: boolean, targetname?: string): Modids;

/**
 * Auto-generate an Ambient Event. These are Low priority, and will hopefully interrupt nothing.
 * Takes a table of Actors and LOC numbers
 */
declare function Util_AutoAmbient(intelEventTable: any): void;

/**
 * Auto-generate an Intel Event. These are medium priority, and will interrupt ambient, but not an NIS.
 * Takes a table of parameters defining speaker(s) and line(s)
 */
declare function Util_AutoIntel(intelEventTable: any): void;

/**
 * Auto-generate an NISlet Event, a simple NIS meant to convey mission location. These are high priority, and will interrupt ambient and Intel Events.
 * Takes an NISLET type and a table of parameters defining speaker(s) and line(s)
 * NISLET_BLACK2GAME	= 1 -- starts in black and fades up, ends in gamplay
 * NISLET_GAME2GAME 	= 2 -- transitions from game play to letterbox and backto gameplay
 * NISLET_GAME2BLACK	= 3 -- starts in gameplay and ends in black
 * NISLET_GAME2LETTER	= 4 -- starts in gameplay and ends in letterbox mode (for transition to sitrep)
 * NISLET_TIME 		= 1 -- use seconds to wait on camera movements
 * NISLET_VO			= 2 -- use voice to wait on camera movements
 * t_eventes.nislet_start = {
 * {camPos = pos1, waitType = NISLET_TIME, waitValue = 5},
 * {camPos = pos2, waitType = NISLET_VO, waitValue = {ACTOR.GenericAlly, 000000}},
 * }
 */
declare function Util_AutoNISlet(nisletType: number, intelEventTable: any, bFOWvisible?: boolean): void;

/**
 * Automatically save the game for the player. The savegame name is built using the abbreviated mission name + checkpoint. You can optionally have it wait until the player is out of combat.
 * This function checks the user setting regarding autosaves (so you don't have to!), and does nothing if the player has them disabled.
 */
declare function Util_AutoSave(waitUntilOutOfCombat?: boolean, onlyCareAboutCombatOnScreen?: boolean, maxWaitTime?: number): void;

/**
 * Clears vehicle wrecks from a given area.
 * Area can be a marker (with or without a range override), a position and range combo, or a territory sector ID. Uses EBP.WRECKED_VEHICLES unless wrecksList is defined.
 */
declare function Util_ClearWrecksFromMarker(position: MarkerID | Position | SectorID, range?: number, wrecksList?: any): void;

/**
 * Helper function to process comparisons that use the Comparison enum... i.e. return true if value1 IS_LESS_THAN value2
 * Comparison type can be IS_EQUAL, IS_LESS_THAN, IS_LESS_THAN_OR_EQUAL, IS_GREATER_THAN, IS_GREATER_THAN_OR_EQUAL or IS_NOT_EQUAL
 */
declare function Util_Comparison(value1: number, comparison: Comparison, value2: number): any;

/**
 * Creates a given number of entities at a location and adds them to an egroup. A PlayerID of nil will create the entities as world objects.
 * The skipForceConstruct parameter allows you to skip the step that normally spawns buildings fully constructed, so you can spawn buildings that self-construct.
 * The toward parameter should be a world location that the entity should look at, NOT a direction. Leave it blank if
 * you want the location's orientation to be used for a direction (assuming location is a marker).
 * The useMarkerTransform parameter, if no toward is passed in, will determine if the marker's transform should be
 * used for the entity OR if the marker's direction should be used in which case the entity will face the same way as the marker.
 */
declare function Util_CreateEntities(player: PlayerID, egroup: EGroupID, blueprintID: number, location: MarkerID | Position, numentities: number, toward?: MarkerID | Position, snapToGround?: boolean, skipForceConstruct?: boolean, useMarkerTransform?: boolean): EGroup;

/**
 * High level function to create squads and give them basic orders upon spawning. Detailed explanation found in ScarUtil.scar
 */
declare function Util_CreateSquads(player: PlayerID, sgroup: SGroupID | any | string, sbp: SquadBlueprint | any, spawn_point: MARKER | Position | SGROUP | EGroup, destination?: Position, numsquads?: number, loadout?: number, attackmove?: boolean, dest_facing?: Position, upgrades?: UpgradeBlueprint | any, spawn_facing?: Position, spawntype?: string, first?: The, is?: Or, due?: Or, the?: Then, into?: Load, attack?: Or, the2?: If, the3?: Then, the4?: Then, determines?: This, determines2?: This, the5?: And, marker?: The, will?: This): SGROUP;

/**
 * High level function to deploy squads in different ways. Details can be found in UnitEntry.scar
 * Spawntype spawntype - enum of the spawn type (ex: SPAWN.Race_Teleport). SPAWN.No_Type can be used to force a spawn with no type\n
 */
declare function Util_DeploySquads(spawntype: Spawntype, player: PlayerID, sgroup: SGroupID | any | string, location: Position, squadlist: any, stagger: number, callback: any, ignorepathfindinggroup: EGroup): any;

/**
 * Takes in a table and chooses the right variable for the difficulty setting. 1-4 elements. Acquires current difficulty by default.
 */
declare function Util_DifVar(difficultyVariables: any, difficulty?: number): any;

/**
 * Returns the result of the dot product of two items in radians
 * The params must be 3D vectors
 */
declare function Util_DotProductRadians(vectorA: Vector, vectorB: Vector): number;

/**
 * Returns true if a Player/Team can see any or all of an SGroup/Squad/EGroup/Entity/Position/Marker
 */
declare function Util_ElementCanSee(playerID: PlayerID | TeamID, element: EGroupID): any;

/**
 * Checks the entity count for the world and returns true or false depending on the result. A specific value can be passed in to override the default amount.
 */
declare function Util_EntityLimit(entityLimit?: number): boolean;

/**
 * High level function to have squad exit the map (despawn) in different ways. Details can be found in UnitExit.scar
 */
declare function Util_ExitSquads(squads: SGroupID, exitType: ExitType, data: any, staggered: boolean): any;

/**
 * Try to garrison a loadable building within radius that is closer to the first squad of the sgroup than enemy
 * The squad suppression would be resetted before fallling back so that they would not succumb to pinned state
 * Returns the entity id of the building that the squad try to garrison into. Return nil if nothing is found
 */
declare function Util_FallBackToGarrisonBuilding(sgroupid: SGroupID, radius: number): EntityID;

/**
 * Finds a hidden position based on what the local player can and can't see
 * If no position is found, returns nil
 */
declare function Util_FindHiddenItem(items: Position | EGroup | EntityID | SGROUP | Squad): Position;

/**
 * Following a path from origin to destination, finds the HS_CLOSEST/HS_FURTHEST hidden position to/from the destination
 * If no position is found, returns origin
 */
declare function Util_FindHiddenSpawn(origin: Position, destination: Position, furthest: boolean): Position;

/**
 * Following a path from origin to destination, finds the HS_CLOSEST/HS_FURTHEST visible position to/from the destination
 * If no position is found, returns destination
 */
declare function Util_FindVisibleSpawn(origin: Position, destination: Position, furthest: boolean): Position;

/**
 * Forces all squads given to retreat, regardless of whether they are on team weapons or not. Disables aiEncounters input (true disables all encounters).
 */
declare function Util_ForceRetreatAll(sgroup: SGroupID, marker: MARKER, aiEncounterDisable: boolean): any;

/**
 * Finds a nearby building to garrison. can ignore occupied [friendly] buildings. return ID of entity it found, or nil if not found
 * Can also filter out groups not to occupy
 */
declare function Util_GarrisonNearbyBuilding(sgroup: SGroupID, pos: Position, radius: number, occupied?: boolean, filter?: SGROUP | any): EntityID;

/**
 * Finds a nearby vehicle to garrison. can ignore occupied [friendly] vehicles. return ID of vehicle it found, or nil if not found,
 * Can also filter out groups not to occupy
 */
declare function Util_GarrisonNearbyVehicle(sgroup: SGroupID, pos: Position, radius: number, occupied?: boolean, filter?: SGROUP | any): SquadID;

/**
 * Returns the angle (in degrees) between two items
 * The items must of of types that can have a direction resolved on them with Util_GetDirection()
 */
declare function Util_GetAngleDifference(item1: MARKER | Position | EntityID | EGroup | Squad | SGROUP, item2: MARKER | Position | EntityID | EGroup | Squad | SGROUP): number;

/**
 * Returns the closest MarkerID to the entity/marker/pos/egroup/sgroup/squad from the table of markers provided
 */
declare function Util_GetClosestMarker(var_: any, markers: any): MarkerID;

/**
 * Returns the heading of an item.
 */
declare function Util_GetDirection(item: MARKER | Position | EntityID | EGroup | Squad | SGROUP): Position;

/**
 * Returns the direction heading from point a towards point b
 */
declare function Util_GetDirectionFromAtoB(a: MarkerID | Position | Squad | EntityID | SGROUP | EGroup, b: MarkerID | Position | Squad | EntityID | SGROUP | EGroup): Position;

/**
 * Returns the distance between two objects
 */
declare function Util_GetDistance(Object1: EntityID | Squad | EGroup | SGROUP | MARKER | Position, Object2: EntityID | Squad | EGroup | SGROUP | MARKER | Position): number;

/**
 * Returns the _squared_ distance between two objects
 * This is much cheaper to calculate that Util_GetDistance(), and fine for when you're only comparing results against other squared distances (i.e. to find the closest item)
 */
declare function Util_GetDistanceSquared(Object1: EntityID | Squad | EGroup | SGROUP | MARKER | Position, Object2: EntityID | Squad | EGroup | SGROUP | MARKER | Position): number;

/**
 * Find all the entities with a given blueprint in sourcegroup and add them to destgroup.
 * See also: EGroup_Filter()
 */
declare function Util_GetEntitiesByBP(sourcegroup: EGroupID, destgroup: EGroupID, ebp: EntityBlueprint): void;

/**
 * Converts a direction into a facing.
 */
declare function Util_GetFacingFromDirection(pos: Position, direction: Position): Position;

/**
 * Determines the health percentage of a given object
 * Returns average health if the object is a group
 */
declare function Util_GetHealth(var_: Squad | EntityID | SGROUP | EGroup): number;

/**
 * Returns a unique SGroup used to hold mouseover squads obtained from Util_AddMouseoverSquadToSGroup
 */
declare function Util_GetMouseoverSGroup(): void;

/**
 * Returns a position relative to a entity/squad/egroup/sgroup/marker/position's current position and orientation.
 */
declare function Util_GetOffsetPosition(pos: EntityID | Squad | EGroup | SGROUP | MARKER | Position, offset: number, distance: number): Position;

/**
 * Returns the player owner for any of: entity, squad, egroup, sgroup, player. for groups, the first item is used. Returns nil for world owned or empty groups
 */
declare function Util_GetPlayerOwner(Object: EntityID | Squad | EGroup | SGROUP | Player): PlayerID;

/**
 * Returns a position from entity/marker/pos/egroup/sgroup/squad
 */
declare function Util_GetPosition(var_: any): Position;

/**
 * Returns a random position within an area that is not near a player
 * searchRadius is the area to look for the location in.  Distance is how far from the player's units the position must be.
 * Useful for dropping artillery NEAR a player, but not on him, for example.
 */
declare function Util_GetPositionAwayFromPlayer(pos: MarkerID | Position | EGroupID | SGroupID, player: PlayerID, searchRadius?: number, distance?: number): Position;

/**
 * Returns a position that is distance metres from point A, headed in the direction of point B.
 * You can also pass in a percentage (0.0 to 1.0) instead of a distance in metres.
 */
declare function Util_GetPositionFromAtoB(a: MarkerID | Position, b: MarkerID | Position, distance: number): Position;

/**
 * Finds a hidden position based on what the local player can and can't see
 * If no position is found, returns nil
 */
declare function Util_GetRandomHiddenPosition(items: Position | EGroup | EntityID | SGROUP | Squad): Position;

/**
 * Returns a random position either within the marker's proximity or with a pos and range provided. Range is ignored for rectangular markers
 */
declare function Util_GetRandomPosition(range?: number): Position;

/**
 * Gets the relationship between two of: entity, squad, egroup, sgroup, player. for groups, the first item is used. returns R_ENEMY, R_ALLY, R_NEUTRAL, R_UNDEFINED, or nil (if world owned or invalid parameters)
 */
declare function Util_GetRelationship(Object_1: EntityID | Squad | EGroup | SGROUP | Player, Object_2: EntityID | Squad | EGroup | SGROUP | Player): Relationship;

/**
 * Returns a relative offset position to an element
 */
declare function Util_GetRelativeOffset(element: EntityID | Squad | EGroup | SGROUP | MARKER | Position, pos: EntityID | Squad | EGroup | SGROUP | MARKER | Position): Position;

/**
 * Find all the squads with a given blueprint in sourcegroup and add them to destgroup.
 * See also: SGroup_Filter()
 */
declare function Util_GetSquadsByBP(sourcegroup: SGroupID, destgroup: SGroupID, sbp: SquadBlueprint): void;

/**
 * Returns trailing numbers from a string, if it exists, nil otherwise. E.G. "marker23" would return 23.
 */
declare function Util_GetTrailingNumber(val: string): number;

/**
 * Returns true if given entity/marker/pos/egroup/sgroup/squad has a position; if false, Util_GetPosition will fail.
 */
declare function Util_HasPosition(var_: any): boolean;

/**
 * Hides all of a player's squads and/or buildings
 * Doesn't hide buildings a player is in, or any base structures. Only items like sandbags, tanktraps, mg nests, etc. Put multiple playerIDs in a table to hide many players together, or use ALL for the playerID to apply to all players at once.
 */
declare function Util_HidePlayerForNIS(player: PlayerID, hide: boolean): void;

/**
 * Returns whether the currently running sequence has been skipped
 */
declare function Util_IsSequenceSkipped(): boolean;

/**
 * Kills a given object
 */
declare function Util_Kill(var_: Player | Squad | EntityID | SGROUP | EGroup): void;

/**
 * Tracks a syncweapon ID and destroys it (by default) or makes it uncapturable (if kill is set to false)
 */
declare function Util_LogSyncWpn(syncweapon: SGroupID, kill?: boolean): void;

/**
 * Play an events file at a given markers location
 */
declare function Util_MarkerFX(markername: string, eventfile: string): void;

/**
 * Play the mission title fade.
 */
declare function Util_MissionTitle(title: string, time_fade_in?: number, lifetime?: number, time_fade_out?: number): void;

/**
 * Calls UI_NewHUDFeature() as an IntelEvent. Will get queued as any other event. See UI_NewHUDFeature() for parameter details.
 */
declare function Util_NewHUDFeatureEvent(newHUDFeature: HUDFeatureType, featureText: string, featureIcon: string, duration: number): void;

/**
 * Play a movie.
 * If onCompleteAfterMovie is true, the onComplete function will play as soon as the movie is over, instead of after the fade-in
 * Plays a movie file after fading out the screen. Fades back in and triggers onComplete once it ends. If fadeIn < 0, does not face back in once complete.
 */
declare function Util_PlayMovie(name: string, fadeOut?: number, fadeIn?: number, onComplete?: any, delay?: number, onCompleteAfterMovie?: boolean): void;

/**
 * Plays music from the Data:Sound folder, and stores the music track so it can be resumed after a save/load
 * The new music will phase out the old one. There can only be one music playing at anytime.
 */
declare function Util_PlayMusic(name: string): void;

/**
 * Simply prints something if the first variable is true
 */
declare function Util_PrintIf(boolean: any, toPrint: any): undefined;

/**
 * Prints out the entire contents of an Object
 * Objects can be anything (Player, SGroup, Int, Table, String, etc.), but this is most useful for Tables
 * This is most useful when used in conjunction with fatal() or bug() to populate the log file.
 */
declare function Util_PrintObject(obj: any, max_depth?: number, data_type?: string, print_func?: any): void;

/**
 * Simply prints out everything in a table including nested tables
 */
declare function Util_PrintTable(toPrint: any, indent: any): undefined;

/**
 * Prints out a unit table. indent is the number of tabs at the beginning of each line
 */
declare function Util_PrintUnitTable(toPrint: any, indent: any): undefined;

/**
 * Reloads the running scar script. Current running rules would also be updated to the redefined functioin.
 */
declare function Util_ReloadScript(): void;

/**
 * Resumes playing the music track that was last triggered i.e. after a save/load
 */
declare function Util_RestoreMusic(): void;

/**
 * Converts a 2D top down position to a 3D ScarPosition. returns Position, if y-height is nil, y-height = ground height, terrain ground or walkable
 * @extdesc
 * 3D ScarPositions have the x axis left to right, the z axis in to out, and the y axis down to up (y axis represents the height of the terrain).  Use this function to convert a top-down 2D position to a 3D world position.\n\n
 * Note: (0,0) is in the center of the map.
 */
declare function Util_ScarPos(xpos: number, zpos: number, ypos: number): Position;

/**
 * Sets it so that a player can skip a scripted sequence. When the skip key is pressed, calls back the given function as a post-sequence setup. noFadeIn stops the system from fading back into gameplay when finished. Call Util_SetPlayerUnableToSkipSequence() when the sequence is finished to disable
 */
declare function Util_SetPlayerCanSkipSequence(event: any, skippedCallback: any, noFadeIn: boolean, fadeInTime?: number): void;

/**
 * Sets the player owner for an entity, squad, egroup or sgroup. Also sets player owner of whatever is garrisoned inside them
 */
declare function Util_SetPlayerOwner(Object: EntityID | Squad | EGroup | SGROUP, owner: PlayerID, bApplyToSquadsHeld?: boolean): void;

/**
 * Disables Util_SetPlayerCanSkipSequence
 */
declare function Util_SetPlayerUnableToSkipSequence(event: any, skippedCallback: any, noFadeIn: boolean): void;

/**
 * Returns a table of positions sorted from closest to furthest (or furthes to closest if reverse is true) from the origin
 */
declare function Util_SortPositionsByClosest(origin: EGroupID, positions: any): any;

/**
 * Play a Speech Ambient. These are the lowest priority, and will be bumped by Intel Events or NIS's.
 * This function should used instead of Event_Start because it handles priorities.
 */
declare function Util_StartAmbient(func: any): void;

/**
 * Play an Intel Event. These are medium priority, and will interrupt a ambient, but not an NIS.
 * This function should used instead of Event_Start because it handles priorities.
 */
declare function Util_StartIntel(func: any): void;

/**
 * Plays an NIS. The NIS should have a call to NIS_START(details) at the beginning, and NIS_END() at the end.
 * Example details table keys: {style = NIS_OPENING, NIS_MID or NIS_CLOSING, exemptions = {sg_unit_to_not_despawn}, revealFOW = true, callbackStart = func, callbackEnd = func}
 */
declare function Util_StartNIS(NIS: any): void;

/**
 * Play a quick, one-line Intel event.  These are medium priority, and will interrupt ambient, but not an NIS.
 * Use this when playing a single line.  For multi-line events, use Util_StartIntel
 */
declare function Util_StartQuickIntel(actor: string, speech: string): void;

/**
 * Splits a string into a table of substrings based on a given separator.
 * Comma is used as the default separator if none is provided.
 */
declare function Util_StringSplit(str: any, sep: any): any;

/**
 * Checks the first layer of a table and looks for a specified Object, returns true if found.
 * Objects can be anything (Player, SGroup, Int, Table, String, etc.)
 */
declare function Util_TableContains(targetTable: any, obj: any): boolean;

/**
 * Debug function used to toggle whether or not IntelEvents are played. Only works with -dev parameter
 */
declare function Util_ToggleAllowIntelEvents(): void;

/**
 * Library function to trigger NIS event under a certain sets of conditions.  NOTE: if checking against a marker DO NOT specify a range.  The range of the marker set in the WorldBuilder will be used.
 * onscreen_only set to TRUE means the squad must be onscreen if the event is to be triggered.
 * non_combat set to TRUE means the squad cannot be in combat if the event is to be triggered.
 * 6 arguments when using marker, 7 arguments when using position, egroup and sgroup with the additional range value
 * triggering event when one of the player's squads come near a particular SGroup, EGroup, Marker, or Position and that squad is onscreen, and that squad is not in combat.
 */
declare function Util_TriggerEvent(playerid: PlayerID, position: MARKER | EGroup | SGROUP | Position, range: number, func: any, non_combat: boolean, onscreen_only: boolean, onscreen_duration: number): void;

/**
 * Returns a table containing either the total or a specific player's squad count, entity count, and vehicle count.
 * table can be accessed as scene below
 * Get Player Example:\n
 * local t = Util_UnitCounts(player1)\n
 * print(t.squad)\n
 * print(t.entity)\n
 * print(t.vehicle)\n
 * Get World Example:\n
 * local t = Util_UnitCounts(true)\n
 * print(t.squad)\n
 * print(t.entity)\n
 * print(t.vehicle)\n
 * Alternate Format:\n
 * print(Util_UnitCounts(true).squad)\n
 */
declare function Util_UnitCounts(world: boolean): any;

/**
 * Kills ALL world entities near a marker
 */
declare function World_KillAllNeutralEntitesNearMarker(marker: MarkerID): void;

/**
 * Kill off a specific player's dead bodies (enter ALL to clean them all up) in a marker radius
 */
declare function Marker_CleanUpTheDead(player: PlayerID, marker: MarkerID): void;

/**
 * Calculates the length of the provided vector
 */
declare function Vector_Length(pos: Position): number;

/**
 * Linearly interpolates between the two provided vectors based on the provided factor
 */
declare function Vector_Lerp(factor: number, pos1: Position, pos2: Position): Position;

/**
 * Returns the normalized version of the provided vector.
 * Returns a vector pointing the same direction as the provided vector, but shortened/elongated to a length of 1. Don't pass in a vector of length 0, or you'll get a divide-by-zero error!
 */
declare function Vector_Normalize(pos: Position): Position;

/**
 * Returns the average positions of the entities in the area
 * Owner type could be OT_Player, OT_Ally, OT_Enemy or OT_Neutral It filters out entities not belonging to a squad, when onlyEntitiesInSquads is true
 */
declare function World_CalculateEntitiesAveragePositionInArea(player: PlayerID, pos: Position, radius: number, ownerType: OwnerType, onlyEntitiesInSquads: boolean): any;

/**
 * Changes target interactivity zones to adjusted interactivity (255 max), probably only safe to use post NIS
 */
declare function World_ChangeZoneInteractivity(targetInteractivity: number, adjustedInteractivity: number): any;

/**
 * Kill off a specific player's dead bodies (enter ALL to clean them all up)
 */
declare function World_CleanUpTheDead(player: PlayerID): void;

/**
 * Destroys walls (entities with a wall_ext) near a marker
 */
declare function World_DestroyWallsNearMarker(marker: MarkerID): void;

/**
 * Get the distance between a squad group and a point.
 * Pass in true for 3rd parameter to get the closest point and pass in false to get the furthest point.  The closest/furthest point is calculated on a per entity basis.  So the closest distance would be that of the closest entity. Also note, it is an error to call this function with an empty group.
 */
declare function World_DistanceEGroupToPoint(egroup: EGroupID, p1: Position, closest: boolean): number;

/**
 * Get the distance between two points.
 */
declare function World_DistancePointToPoint(p1: Position, p2: Position): number;

/**
 * Get the distance between a squad group and a point.
 * Pass in true for 3rd parameter to get the closest point and pass in false to get the furthest point.  The closest/furthest point is calculated on a per squadron basis.  So the closest distance would be that of the closest squadron. It is an error to call this function with an empty group.  Check the group size with SquadGroup_Count( ) first.
 */
declare function World_DistanceSGroupToPoint(sgroup: SGroupID, p1: Position, closest: boolean): number;

/**
 * Get the distance squared between two points.
 */
declare function World_DistanceSquaredPointToPoint(p1: Position, p2: Position): number;

/**
 * *** You must call this from OnGameSetup, otherwise it's too late *** Determines whether empty players get converted to null resource points.
 * see Attribute Editor under tuning/player/empty_player_replacement_object
 */
declare function World_EnableReplacementObjectForEmptyPlayers(enable: boolean): void;

/**
 * Enables or disables shared line of sight between these two players
 */
declare function World_EnableSharedLineOfSight(p0: PlayerID, p1: PlayerID, enableSharedVision: boolean): any;

/**
 * Clears the egroup, then finds and adds all neutral entities to it
 * Returns the number of entities found
 */
declare function World_GetAllNeutralEntities(egroup: EGroupID): any;

/**
 * Returns all entities with this blueprint - warning this function iterates over all entities so it is slow
 */
declare function World_GetBlueprintEntities(pbg: ScarEntityPBG, outEntities: EGroupID): any;

/**
 * Returns the closest object from the table of marker/pos/egroup/sgroup to the closest marker/pos/egroup/sgroup specified
 * The table may mix together objects of different types.
 */
declare function World_GetClosest(var_: any, items: any | SGROUP | EGroup): any;

/**
 * Appends all cover points to an egroup.
 * Takes an egroup where you want to put the points. If this 'group' already contains a cover point, this cover point will not be added a second time. This function does not clear the contents of 'group'.\n
 */
declare function World_GetCoverPoints(group: EGroupID): any;

/**
 * Find and add entities near the marker to the egroup
 * Entities belonging to a squad would not be added to the egroup
 */
declare function World_GetEntitiesNearMarker(player: PlayerID, egroup: EGroupID, marker: MarkerID, ownerType: number): number;

/**
 * Find and add entities near the point to the egroup
 * Entities belonging to a squad would not be added to the egroup
 */
declare function World_GetEntitiesNearPoint(player: PlayerID, egroup: EGroupID, pos: Position, radius: number, ownerType: number): number;

/**
 * Find and add entities within the territory sector to the egroup
 * Entities belonging to a squad would not be added to the egroup
 */
declare function World_GetEntitiesWithinTerritorySector(player: PlayerID, egroup: EGroupID, sectorID: number, ownerType: number): number;

/**
 * Returns the furthest object from the table of marker/pos/egroup/sgroup to the furthest marker/pos/egroup/sgroup specified.
 * The table may mix together objects of different types.
 */
declare function World_GetFurthest(var_: any, items: any): any;

/**
 * Return the total number of game (simulation) ticks elapsed.
 */
declare function World_GetGameTicks(): any;

/**
 * Return the total game time in seconds.
 */
declare function World_GetGameTime(): number;

/**
 * returns the height of ground at 2D pos x,y
 */
declare function World_GetHeightAt(x: number, y: number): number;

/**
 * Returns the interaction stage of the cell in the provided position
 * Returns a value between 0 - 63
 */
declare function World_GetInteractionStageAtPoint(position: Position): any;

/**
 * Returns the total playable length of the game world (z coordinate)
 * Since the center of the map is 0,0 the world z range is (-l/2 -> l/2)
 */
declare function World_GetLength(): number;

/**
 * Get the Biome PBG's name of the specified terrain metadata layer and the specified coordinates.
 */
declare function World_GetMetadataBiomePBGName(layerName: string, x: number, y: number): any;

/**
 * Get the boolean value of the specified terrain metadata layer and the specified coordinates.
 */
declare function World_GetMetadataLayerBoolean(layerName: string, x: number, y: number): any;

/**
 * Get the integer value of the specified terrain metadata layer and the specified coordinates.
 */
declare function World_GetMetadataLayerInteger(layerName: string, x: number, y: number): any;

/**
 * Get the numeric value of the specified terrain metadata layer and the specified coordinates.
 */
declare function World_GetMetadataLayerNumber(layerName: string, x: number, y: number): any;

/**
 * Get the PBG of the specified terrain metadata layer and the specified coordinates.
 */
declare function World_GetMetadataLayerPBG(layerName: string, x: number, y: number): any;

/**
 * Get the PBG of the specified terrain metadata layer and the specified coordinates.
 */
declare function World_GetMetadataLayerString(layerName: string, x: number, y: number): any;

/**
 * returns the nearest intractable position to the supplied position
 */
declare function World_GetNearestInteractablePoint(position: Position): any;

/**
 * Find and add neutral entities near the marker to the egroup
 * Entities belonging to a squad would not be added to the egroup
 */
declare function World_GetNeutralEntitiesNearMarker(egroup: EGroupID, marker: MarkerID): number;

/**
 * Find and add neutral entities near the point to the egroup
 * Entities belonging to a squad would not be added to the egroup
 */
declare function World_GetNeutralEntitiesNearPoint(egroup: EGroupID, pos: Position, radius: number): number;

/**
 * Find and add neutral entities within the territory sector to the egroup
 * Entities belonging to a squad would not be added to the egroup
 */
declare function World_GetNeutralEntitiesWithinTerritorySector(egroup: EGroupID, sectorID: number): number;

/**
 * Return the number of entities of the same ebp in the sphere volume
 */
declare function World_GetNumEntitiesNearPoint(ebp: EntityBlueprint, pos: Position, radius: number): number;

/**
 * Returns the number of strategic points on this map (does not count strat. objectives)
 */
declare function World_GetNumStrategicPoints(): number;

/**
 * Returns a position that is offset a certain distance from the position/heading passed in. see LuaConsts.scar for explanation of 'offset' parameter.
 */
declare function World_GetOffsetPosition(position: Position, heading: Position, offset: number, distance: number): Position;

/**
 * Offsets the input position relative to the facing target
 */
declare function World_GetOffsetPositionRelativeToFacingTarget(position: Position, facingTarget: Position, offset: number): any;

/**
 * Returns a position that is offset from the input position by the offset vector rotated by the direction supplied
 */
declare function World_GetOffsetVectorPosition(position: Position, heading: Position, offset: Position): any;

/**
 * - Returns the player at a given index, numbers start at one
 */
declare function World_GetPlayerAt(index: number): PlayerID;

/**
 * Return the total number of players in the world
 */
declare function World_GetPlayerCount(): number;

/**
 * - Returns the player index given the Player*
 */
declare function World_GetPlayerIndex(player: PlayerID): number;

/**
 * Returns the blueprint of a chosen squad for a race
 */
declare function World_GetPossibleSquadsBlueprint(race_index: number, squad_index: number): SquadBlueprint;

/**
 * Returns the number of types of squads a race can build
 */
declare function World_GetPossibleSquadsCount(race_index: number): number;

/**
 * Returns the race index of a race, given its name (from the ME).
 */
declare function World_GetRaceBlueprint(racename: string): any;

/**
 * Returns a random Real with range [min, max]
 * It is recomended you use this instead of luas math.random function
 */
declare function World_GetRand(min: number, max: number): number;

/**
 * Returns maximum number of players in this match
 */
declare function World_GetScenarioMaxPlayers(): any;

/**
 * Given any position in the world, this function will return position safe for spawning a given entity
 */
declare function World_GetSpawnablePosition(around: Position, entity: EntityID): Position;

/**
 * Find and add squads near the marker to the sgroup
 * This function is faster if radius is small and/or number of squads to search for is large
 */
declare function World_GetSquadsNearMarker(player: PlayerID, sgroup: SGroupID, marker: MarkerID, ownerType: number): number;

/**
 * Find and add squads near the point to the sgroup
 * This function is faster if radius is small and/or number of squads to search for is large
 */
declare function World_GetSquadsNearPoint(player: PlayerID, sgroup: SGroupID, pos: Position, radius: number, ownerType: number): number;

/**
 * Find and add squads within territory sector identified by sector ID
 * Owner type could be OT_Player, OT_Ally, OT_Enemy or OT_Neutral
 */
declare function World_GetSquadsWithinTerritorySector(player: PlayerID, sgroup: SGroupID, sectorID: number, ownerType: number): number;

/**
 * Appends all the strategic resource points to an egroup.
 * takes the egroup where you want to put the points, and 2nd parameter is a bool which indicates if you want to include VPs or not If 'group' already contains an entity from 'grouptoadd' it will not be added.\n This function does not clear the contents of 'group'.\n Example: World_GetStrategyPoints(mypointgroup, true) --puts all the points including vps into mypointgroup
 */
declare function World_GetStrategyPoints(group: EGroupID, bIncludeVP: boolean): any;

/**
 * Returns one or more sector IDs that would connect two unconnected pieces of territory. return value is through a table (since there can be more than one way to connect territory) - each entry in this table is a table of sector IDs.
 * Currently only finds single gaps - i.e. if two territories are 'almost' connected.
 */
declare function World_GetTeamTerritoryGaps(sectorid1: number, sectorid2: number, results: LuaBinding): boolean;

/**
 * returns the cell type of the cell in the specified coordinates. 0 = Sky, 1 = Land, 2 = Water.
 */
declare function World_GetTerrainCellType(x: number, y: number): any;

/**
 * Return the sector ID from the position
 */
declare function World_GetTerritorySectorID(pos: Position): number;

/**
 * Returns the position of a sector based on the capture entity (ex: the fuel point's position)
 */
declare function World_GetTerritorySectorPosition(sectorID: number): Position;

/**
 * Returns the total playable width of the game world (x coordinate)
 * Since the center of the map is 0,0 the world x range is (-w/2 -> w/2)
 */
declare function World_GetWidth(): number;

/**
 * Returns whether the interaction stage is currently active
 */
declare function World_IsCurrentInteractionStageActive(stage: number): any;

/**
 * Returns true if position is in-supply for the given player
 */
declare function World_IsInSupply(player: PlayerID, pos: Position): boolean;

/**
 * Returns whether or not the game type of this world is multiplayer
 */
declare function World_IsMultiplayerGame(): any;

/**
 * Returns true if position if part of the entity territory
 * Note that this does not care if territory is in supply or not
 */
declare function World_IsPointInPlayerTerritory(player: PlayerID, position: Position): boolean;

/**
 * Returns if a position is on walkable wall
 */
declare function World_IsPosOnWalkableWall(p: Position): any;

/**
 * Returns TRUE if the game is currently in a replay state.
 */
declare function World_IsReplay(): any;

/**
 * Find if player has ownership to this territory sector.
 * Other players on the same team would also have the ownership to the sector
 */
declare function World_IsTerritorySectorOwnedByPlayer(player: PlayerID, sectorID: number): boolean;

/**
 * Returns whether ANY or ALL of the entities in the group are owned by the world (i.e. neutral)
 */
declare function World_OwnsEGroup(egroup: EGroupID, all: boolean): boolean;

/**
 * Returns true if the squad is owned by the world
 */
declare function World_OwnsEntity(entity: EntityID): boolean;

/**
 * Returns whether ANY or ALL of the squads in the group are owned by the world (i.e. neutral)
 */
declare function World_OwnsSGroup(sgroup: SGroupID, all: boolean): boolean;

/**
 * Returns true if the squad is owned by the world
 */
declare function World_OwnsSquad(squad: SquadID): boolean;

/**
 * Returns true if two world positions are in proximity to each other
 */
declare function World_PointPointProx(p1: Position, p2: Position, prox: number): boolean;

/**
 * Creates a new Position object.
 * A position object is basically a table with an x, y, and z attribute.  You can directly access the individual components in the same way that you would access a field in a table.  Example:   --* lua script snip   local pos = World_Pos(2, 0, 0)   pos.x = pos.x + 1   print pos.x -- this will print 3   --* lua script snip
 */
declare function World_Pos(x: number, y: number, z: number): Position;

/**
 * Returns if given position is in playable area.
 */
declare function World_PosInBounds(pos: Position): any;

/**
 * DO NOT CALL UNLESS YOU DO AUTOMATED TESTING
 * This resets the world into a state comparable to a fresh scenario start. Used in automated testing to avoid tests being dependent on each other.
 */
declare function World_Reset(): any;

/**
 * Unlocks all the interaction stages
 */
declare function World_SetAllInteractiveStagesVisibility(visibilityStatus: boolean): void;

/**
 * Sets a particular sector in the world as a supply provider (or not)
 */
declare function World_SetDesignerSupply(point: Position, bSupply: boolean): void;

/**
 * Set current interaction stage to value supplied, must be >= 0
 */
declare function World_SetInteractionStage(stage: number): void;

/**
 * Enables or disables shared line of sight between these two players, and merges explored maps when needed
 */
declare function World_SetSharedLineOfSightEnabledAndMergeExploredMaps(p0: PlayerID, p1: PlayerID, enableSharedVision: boolean): void;

/**
 * spawn a demolitions charge at a position, 'player' is the one that owns the demolitions and can detonate them.
 */
declare function World_SpawnDemolitionCharge(player: PlayerID, pos: Position): any;

/**
 * Returns true if the two points are in the same territory region, and owned by the specified territory team, Returns false otherwise.
 */
declare function World_TeamTerritoryPointsConnected(team_index: number, p1: Position, p2: Position): boolean;

/**
 * Enables or disables cheering on an Sgroup. Defaults to 60 second duration; pass in -1 for infinite. Defaults to short celebrate walla. WARNING: Units cannot move while cheering. Only works on bipeds. audioDelay delays audio but not animation.
 */
declare function SGroup_EnableCheering(sgroup: SGroupID, enable: boolean, OPT_duration?: number, OPT_walla?: string, OPT_audioDelay?: number): any;

/**
 * Enable or disable the crown over leader units. The Leader must be the first squad in the sgroup.
 */
declare function SGroup_EnableLeaderCrown(sgroup: SGroupID, enable: boolean): any;

/**
 * Plays a speech file on the first squad in an sgroup. Pass in a string with the filepath of the audio file under Cardinal_Speech_Sources e.g. "Civ_Rus/rus_manatarms/rus_manatarms_attack_iHigh_cHigh_03"
 */
declare function SGroup_PlaySpeech(sgroup: SGroupID, filepath: string): any;

/**
 * Plays a speech file on the first squad in an sgroup. Pass in a string with the filepath of the audio file under Cardinal_Speech_Sources e.g. "Civ_Rus/rus_manatarms/rus_manatarms_attack_iHigh_cHigh_03"
 * Destroy all Squads and disable Mission_Fail rules
 */
declare function Util_ClearSquadsForCine(sgroup: SGROUP, filepath: string): undefined;

/**
 * Spawn (and immediately kill) a series of units to create a field of corpses for outro cameras. units_table can either be a single SBP or a table/tables in the same basic format as UnitDeploy functions. Each entry in that table can optionally have numSqauds (defaults to 15), spawn (an override spawn location), rad_min (radius from center not to spawn in; defaults to 2), rad_max (defaults to marker radius or 20), player (defaults to player 2). cleanLocation allows you to have a marker that will be cleared of corpses.
 */
declare function Util_CorpseField(units_table: any | SBP, spawnlocation: Position | MARKER, cleanlocation?: MARKER): undefined;

/**
 * Run a series of camera splines, each with optional speech lines and functions
 */
declare function Util_PlayCameras(cameraData: any): undefined;

/**
 * Create a shield wall stretching from posA to posB, using the units in the sgroup. Units stand in a line shoulder to shoulder, and excess units are used as backfill.
 * PosA should be the left end (as you look at the line), PosB the right, so if the units are facing the wrong way then flip the two positions. If immediate is set to true, units start in wall formation, otherwise they move into position.
 */
declare function ShieldWall_Create(posA: MARKER | Position, posB: MARKER | Position, units: SGroupID, specialUnitsPerRow: any, immediate?: boolean, name?: string): ShieldWallID;

/**
 * Release units from a shield wall
 * @extdesc
 */
declare function ShieldWall_Release(wall: ShieldWallID): void;

/**
 * Wrapper to trigger proper audio and video settings for entering or exiting intro and outro cameras. Setting enable to true enters the camera mode; false exits. Pass in CAM_INTRO or CAM_OUTRO for camera_type. Keep_gampelayunits_forOutro removes gameplay units by default unless set to true. fowUnRevealDelay sets the delay for when to hide units in FoW (3.825 seconds is the default).
 */
declare function Util_EnableCardinalCinematicMode(enable: boolean, camera_type: boolean, OPT_Keep_gampelayunits_forOutro?: boolean, OPT_fowUnRevealDelay?: number): any;

/**
 * Spawn a series of units and have them move along a path in a parade. Useful for bringing in or out units in a long line rather than a broad formation. marker_table should be the path of the parade. unit_table should follow the format for UnitEntry functions; each entry is a "row" in the parade. Preferably each should have separate spawn point. If there is a destination defined in a unit entry, that row will go to the destination after completing the parade.
 */
declare function Util_UnitParade(marker_table: any, unit_table: any, parade_sgroup?: SGROUP, delay?: number, player?: Player): undefined;

/**
 * Wrapper to trigger proper audio and video settings for entering or exiting intro and outro cameras. Setting enable to true enters the camera mode; false exits. Pass in CAM_INTRO or CAM_OUTRO for camera_type. Keep_gampelayunits_forOutro removes gameplay units by default unless set to true. fowUnRevealDelay sets the delay for when to hide units in FoW (3.825 seconds is the default).
 */
declare function __UnRevealEntities(enable: boolean, camera_type: boolean, Keep_gampelayunits_forOutro?: boolean, fowUnRevealDelay?: number): undefined;

/**
 * Enable or diable a group of abilities for one or more players; useful for hiding glows. data can be a string (ability short name), a table of such strings. To deactivate for a player other than Player 1, pass in a table or tables as such: {player = playerID, abilities = {"name","name"}}
 * Triggers the mission start title card (as long as it is properly defined in mission recipe)
 * 
 */
declare function Action_SkipNIS(data: string | any, enable: boolean): undefined;

/**
 * Enables or disables cheering on an Sgroup. Defaults to 60 second duration; pass in -1 for infinite. Defaults to short celebrate walla. WARNING: Units cannot move while cheering. Only works on bipeds. audioDelay delays audio but not animation.
 * Enable or disable the crown over leader units. The Leader must be the first squad in the sgroup.
 */
declare function _QuickDelay(sgroup: SGROUP, enable: boolean, duration?: number, walla?: string, audioDelay?: number): undefined;

/**
 * Forces all in-process exits to complete instantly.
 */
declare function UnitEntry_NoType_StartFunc(data: any): void;

/**
 * Predicate testing if a value is of specific type
 * Performs basic type-checking on [value]
 * Makes an assertion. If the assertion turns out to be false, raises an error.
 * e.g. foo = 7; assert(foo ~= nil, 'foo should not be nil!', 'If foo is nil we don't know how many bars to spawn!'')
 * This is intended to be a more scripter friendly version of LUA assert.
 * e.g. foo = 7; std.Validate(foo, 'foo', T_NUMBER, false)
 * e.g. f = std.TypePredicate(); f() => 1; f() => 2 ...
 */
declare function AppendString(a: any, b: any): any;

/**
 * Displays info about the panel that is intersected by the passed in ray
 */
declare function Entity_BuildingPanelInfo(pEntity: EntityID, cam: Position, terrain: Position): void;

/**
 * Check if the entity can load an sgroup or not
 */
declare function Entity_CanLoadSGroup(entity: EntityID, loadthis: SGroupID, bCheckSquadState: boolean, bOverload: boolean): boolean;

/**
 * Creates an entity at a given position and assigns it to a given player.  'blueprint' is a string value containing the name of the entity blueprint. This function does not spawn the entity so you will need to call Entity_Spawn to see this entity
 */
declare function Entity_Create(ebp: EntityBlueprint, player: PlayerID, pos: Position, toward: Position): EntityID;

/**
 * Creates an entity at a given position and assigns it to a given player.  'blueprint' is a string value containing the name of the entity blueprint. This function spawns the entity so there is no need to call Entity_Spawn
 */
declare function Entity_CreateENV(ebp: EntityBlueprint, pos: Position, toward: Position): EntityID;

/**
 * Disables the death of the given entity building, only works for panel based destructible buldings
 */
declare function Entity_DisableBuildingDeath(pEntity: EntityID, bDisableDeath: boolean): boolean;

/**
 * Damages this entity but only if its a destructible building
 * dmgType of 0 is damage accessory, 1 is damage panel, 2 is destroy panel and 3 is destroy radius
 */
declare function Entity_DoBuildingDamageRay(pEntity: EntityID, cam: Position, terrain: Position, dmgType: number, radius: number): void;

/**
 * Get an entity from a mission editor ID.
 */
declare function Entity_FromWorldID(id: number): EntityID;

/**
 * Returns the entities unique id in the world
 */
declare function Entity_GetGameID(entity: EntityID): number;

/**
 * Returns the number of combat slots in total of a certain hold-able type
 */
declare function Entity_GetNumCombatSlots(entity: EntityID, holdTypeName: string): number;

/**
 * Gets the total number of panels in a building (returns 0 for anything but panel based destructible buldings)
 */
declare function Entity_GetTotalPanelCount(pEntity: EntityID): number;

/**
 * Gets the current number of undestroyed panels in a building (returns 0 for anything but panel based destructible buldings)
 */
declare function Entity_GetUndestroyedPanelCount(pEntity: EntityID): number;

/**
 * Return true if the entity has the given criticalID applied to it
 */
declare function Entity_HasCritical(pEntity: EntityID, criticalPBG: CriticalBlueprint): boolean;

/**
 * Returns whether an entity is a soldier
 */
declare function Entity_IsSoldier(pEntity: EntityID): boolean;

/**
 * Get the unit kill count for entities. Possible kill types are VS_Infantry, VS_LightArmor, VS_HeavyArmor, VS_Building
 */
declare function Entity_GetKillCount(pEntity: EntityID, killType: number): number;

/**
 * Overrides whether to display a critical or not. types are: CT_VehicleFront, CT_VehicleBack, CT_VehicleLeft, CT_VehicleRight, CT_VehicleEngineGreen, CT_VehicleEngineYellow, CT_VehicleEngineRed, CT_VehiclePrimaryWeapon, CT_VehicleSecondaryWeapon
 */
declare function Entity_OverrideCriticalDisplay(entity: EntityID, type: number, override: boolean, on: boolean): void;

declare interface TAi {
    GetEncountersBySquad(squad: Squad): any;
    GetEncountersBySGroup(sgroup: SGROUP, all: any | ALL): any;
}

declare const Ai: TAi;

declare interface TEncounter {
    SetGoalOnFailure(func: any): void;
    SetGoalOnSuccess(func: any): void;
    SetOnDeath(func: any): void;
    RemoveOnDeath(includeUnits: boolean): void;
    CompleteDeployImmediately(): void;
    AddSGroup(squadgroup: any, name: any, onDeath: any): void;
    RemoveUnitBySquad(squad: any): void;
    RemoveUnitsBySGroup(squadgroup: any): void;
    RebootIfNeeded(): void;
    Disable(): void;
    Enable(): void;
    GetEgroupNearbyAllies(): EGroup;
    GetSGroup(): SGROUP;
    GetGoalData(): GoalData;
    UpdateGoal(goalData: GoalData): void;
    RestartGoal(previousEncounterID: any, wasAlreadyTriggered: any): boolean;
    ResetGoalRelocation(): void;
    TriggerGoal(data: any, relocationData: any): void;
    ClearGoal(): void;
    HasGoal(): boolean;
    SetGoal(goalData: GoalData, triggerGoal: boolean, previousEncounterID?: HandleID): void;
    AddUnits(unitData: any, spawnType: SPAWN): void;
    ConvertSGroup(squadgroup: SGROUP): Encounter;
    CreateBasic(name: string, spawnLoc: MARKER | Position, encUnits: SBP | any, dynamicSpawn?: MARKER | Position): Encounter;
    CreateTownLife(name: string, encUnits: SBP | any, spawnLoc: MARKER | Position, encTarget: EGroup | SGroup | MARKER | Position, dynamicSpawn?: MARKER | Position, townLifeRange?: number): Encounter;
    CreateAbility(name: string, encUnits: SBP | any, spawnLoc: MARKER | Position, encTarget: EGroup | SGroup | MARKER | Position, dynamicSpawn?: MARKER | Position, moveRange?: number): Encounter;
    CreateMove(name: string, encUnits: SBP | any, spawnLoc: MARKER | Position, encTarget: EGroup | SGroup | MARKER | Position, dynamicSpawn?: MARKER | Position, moveRange?: number): Encounter;
    CreatePatrol(name: string, encUnits: SBP | any, spawnLoc: MARKER | Position, encPath: MARKER | string, dynamicSpawn?: MARKER | Position, pathWait?: number, pathLoop?: number): Encounter;
    CreateDefend(name: string, encUnits: SBP | any, spawnLoc: MARKER | Position, encTarget: EGroup | SGroup | MARKER | Position, dynamicSpawn?: MARKER | Position, encRange?: MARKER | number, encLeash?: MARKER | number): Encounter;
    CreateAttack(name: string, encUnits: SBP | any, spawnLoc: MARKER | Position, encTarget: EGroup | SGroup | MARKER | Position, dynamicSpawn?: MARKER | Position, encRange?: MARKER | number, encLeash?: MARKER | number): Encounter;
    CreateFormationDefendArea(name: string, encUnits: SBP | any, spawnLoc: MARKER | Position, encTarget: EGroup | SGroup | MARKER | Position, dynamicSpawn?: MARKER | Position, encRange?: MARKER | number, encLeash?: MARKER | number): Encounter;
    CreateFormationAttack(name: string, encUnits: SBP | any, spawnLoc: MARKER | Position, encTarget: EGroup | SGroup | MARKER | Position, dynamicSpawn?: MARKER | Position, encRange?: MARKER | number, encLeash?: MARKER | number): Encounter;
    Create(data: EncounterData, spawnNow?: boolean, spawnStaggered?: boolean | number): Encounter;
}

declare const Encounter: TEncounter;

/**
 * @compileMembersOnly
 */
declare enum AddResourceReason {
    RES_Gift,
    RES_Other,
    RES_Refund,
    RES_Resourcing,
    RES_RefundOnDeath,
}

/**
 * @compileMembersOnly
 */
declare enum AIBuildStyle {
    BS_AwayFromResources,
    BS_COUNT,
    BS_Dock,
    BS_ExpansionBase,
    BS_FinishIncompleteStructure,
    BS_ForwardDefense,
    BS_Gates,
    BS_Keep,
    BS_Landmark,
    BS_NearAnchor,
    BS_NearBlueprint,
    BS_NearResourceDropoff,
    BS_NearResources,
    BS_NearSameBlueprint,
    BS_Outpost,
    BS_ProductionBuilding,
    BS_Secure,
    BS_Siege,
    BS_TargetedRequest,
    BS_Tower,
    BS_WallEmplacement,
    BS_Walls,
    BS_Wonder,
}

/**
 * @compileMembersOnly
 */
declare enum AICombatRangePolicy {
    CombatRangePolicy_Count,
    CombatRangePolicy_Default,
    CombatRangePolicy_INVALID,
    CombatRangePolicy_MeleeRange,
    CombatRangePolicy_Ranged_MaxRange,
    CombatRangePolicy_Ranged_MinRange,
}

/**
 * @compileMembersOnly
 */
declare enum AICombatType {
    COMBAT_Attack,
    COMBAT_COUNT,
    COMBAT_Default,
    COMBAT_Defend,
}

/**
 * @compileMembersOnly
 */
declare enum AIDifficultyLevel {
    Count,
    Default,
    Easy,
    Expert,
    Hard,
    INT8_MAX,
    Invalid,
    Max,
    Normal,
}

/**
 * @compileMembersOnly
 */
declare enum AIMilitaryEngagementType {
    AIMET_AttackStructure,
    AIMET_AttackArea,
    AIMET_AllyClump,
    AIMET_DefendStructure,
    AIMET_NeutralStructure,
    AIMET_Capture,
    AIMET_NeutralClump,
    AIMET_Gather,
    AIMET_EnemyClump,
    AIMET_DefendArea,
}

/**
 * @compileMembersOnly
 */
declare enum AIMilitaryTargetType {
    AllyClump,
    AttackArea,
    AttackStructure,
    Capture,
    COUNT,
    DefendArea,
    DefendStructure,
    EnemyClump,
    Gather,
    NeutralClump,
    NeutralStructure,
}

/**
 * @compileMembersOnly
 */
declare enum AITacticTargetPreference {
    TacticTargetPreference_Best,
    TacticTargetPreference_COUNT,
    TacticTargetPreference_HighDamage,
    TacticTargetPreference_LowHealth,
    TacticTargetPreference_Near,
    TacticTargetPreference_NearAndBest,
    TacticTargetPreference_None,
    TacticTargetPreference_Support,
}

/**
 * @compileMembersOnly
 */
declare enum AITacticType {
    TACTIC_Ability,
    TACTIC_Avoid,
    TACTIC_CapturePoint,
    TACTIC_CaptureTeamWeapon,
    TACTIC_COUNT,
    TACTIC_Cover,
    TACTIC_FinishHealing,
    TACTIC_ForceAttack,
    TACTIC_Hold,
    TACTIC_Lua,
    TACTIC_MinRange,
    TACTIC_Pickup,
    TACTIC_ProvideReinforcementPoint,
    TACTIC_Recrew,
    TACTIC_Sequence,
    TACTIC_Vehicle,
    TACTIC_VehicleDecrew,
}

/**
 * @compileMembersOnly
 */
declare enum AITaskType {
    TASK_AbilityEncounter,
    TASK_AttackEncounter,
    TASK_COUNT,
    TASK_DefendEncounter,
    TASK_ENCOUNTERS_END,
    TASK_ENCOUNTERS_START,
    TASK_EntityAbility,
    TASK_FormationAttackMoveEncounter,
    TASK_FormationAutoHealState,
    TASK_FormationDefendAreaEncounter,
    TASK_FormationFleeState,
    TASK_FormationHoldableUnloadState,
    TASK_FormationIdleState,
    TASK_FormationLoadToHoldState,
    TASK_FormationMinRangeState,
    TASK_FormationMoveEncounter,
    TASK_FormationMoveState,
    TASK_FormationPathToMeleeState,
    TASK_FormationPhaseEncounter,
    TASK_FormationProtectState,
    TASK_FormationSetupRangedAttackState,
    TASK_FormationSimpleMeleeAttackState,
    TASK_FormationTargetedAbilityState,
    TASK_FormationTargetedConstructState,
    TASK_FormationTransportMoveState,
    TASK_FormationUnitTypeAttackState,
    TASK_GatherEncounter,
    TASK_MoveEncounter,
    TASK_PlayerAbility,
    TASK_ScoutEncounter,
    TASK_SquadAbility,
    TASK_SquadCapture,
    TASK_SquadCombat,
    TASK_SquadCombatState,
    TASK_SquadConstruction,
    TASK_SquadFallbackState,
    TASK_SquadFollow,
    TASK_SquadForwardBase,
    TASK_SquadGather,
    TASK_SquadHold,
    TASK_SquadImmobileCombat,
    TASK_SquadLeader,
    TASK_SquadMoveState,
    TASK_SquadPatrol,
    TASK_SquadPickUp,
    TASK_SquadProduction,
    TASK_SquadRetreatState,
    TASK_SquadSimpleMoveState,
    TASK_SquadTacticState,
    TASK_TownLifeEncounter,
}

/**
 * @compileMembersOnly
 */
declare enum AIType {
    AII_Normal,
    AII_RemoteAITakeover,
    AII_LocalHumanTakeover,
    AII_RemoteHumanTakeover,
    AII_None,
}

/**
 * @compileMembersOnly
 */
declare enum Availability {
    eAvailablityCOUNT,
    eDefault,
    eLocked,
    eRemoved,
    eUnlocked,
}

/**
 * @compileMembersOnly
 */
declare enum ButtonIconStyle {
    BIS_Count,
    BIS_Icon,
    BIS_IconState,
}

/**
 * @compileMembersOnly
 */
declare enum CameraMode {
    CM_COUNT,
    CM_FOLLOW,
    CM_PERSON,
    CM_ROT_TRANS,
}

/**
 * @compileMembersOnly
 */
declare enum CanProduceResult {
    CANPRODUCE_Disabled,
    CANPRODUCE_Error,
    CANPRODUCE_NoItem,
    CANPRODUCE_NoResources,
    CANPRODUCE_Ok,
    CANPRODUCE_OutOfTerritory,
    CANPRODUCE_PopulationCapFull,
    CANPRODUCE_PrerequisitesItem,
    CANPRODUCE_PrerequisitesProducer,
    CANPRODUCE_ProductionItemFull,
    CANPRODUCE_ProductionQueueFull,
    CANPRODUCE_UpgradeItemFull,
    OutOfReinforceRadius,
}

/**
 * @compileMembersOnly
 */
declare enum CapType {
    CT_Begin,
    CT_Count,
    CT_Invalid,
    CT_Medic,
    CT_Personnel,
    CT_Vehicle,
}

/**
 * @compileMembersOnly
 */
declare enum CheckHiddenType {
    CHECK_BOTH,
    CHECK_COUNT,
    CHECK_IN_FOW,
    CHECK_OFFCAMERA,
}

/**
 * @compileMembersOnly
 */
declare enum CrushMode {
    Count,
    Heavy,
    Light,
    Medium,
    Off,
}

/**
 * @compileMembersOnly
 */
declare enum DeathReason {
    DEATHREASON_CASUALTY,
    DEATHREASON_COUNT,
    DEATHREASON_DEATH_AS_DRIVER,
    DEATHREASON_NORMAL,
    DEATHREASON_ON_BLUEPRINT_CONVERT,
    DEATHREASON_OUTOFCONTROL,
    DEATHREASON_SUBMERGE,
    DEATHREASON_SYNC_KILL,
    DEATHREASON_WALKABLE_SURFACE,
}

/**
 * @compileMembersOnly
 */
declare enum DecoratorVisibility {
    DV_MouseOverOrDamagedEnemy,
    DV_Visible,
    DV_EnemyOnly,
    DV_Hidden,
    DV_Default,
    DV_MouseOver,
    DV_Count,
}

/**
 * @compileMembersOnly
 */
declare enum DialogButton {
    DB_Button1,
    DB_Button2,
    DB_Button3,
    DB_Close,
    DB_Invalid,
}

/**
 * @compileMembersOnly
 */
declare enum DialogClass {
    DC_Count,
    DC_Default,
    DC_Iconographic,
}

/**
 * @compileMembersOnly
 */
declare enum EasingFunction {
    None,
    Sine,
}

/**
 * @compileMembersOnly
 */
declare enum EasingType {
    EaseIn,
    EaseInOut,
    EaseOut,
}

/**
 * @compileMembersOnly
 */
declare enum EntityCommandType {
    CMD_Ability,
    CMD_Attack,
    CMD_AttackForced,
    CMD_AttackFromHold,
    CMD_AttackMove,
    CMD_AttackStop,
    CMD_Brace,
    CMD_BuildEntity,
    CMD_BuildSquad,
    CMD_BuildStructure,
    CMD_CancelConstruction,
    CMD_CancelProduction,
    CMD_Capture,
    CMD_Casualty,
    CMD_ChangeCombatSlot,
    CMD_COUNT,
    CMD_Death,
    CMD_DefaultAction,
    CMD_DefuseMine,
    CMD_Destroy,
    CMD_Disable,
    CMD_Enable,
    CMD_Evacuate,
    CMD_Face,
    CMD_FieldSupportConvert,
    CMD_FlightMove,
    CMD_Gather,
    CMD_Halt,
    CMD_HoldPositionOff,
    CMD_HoldPositionOn,
    CMD_InstantBuildSquad,
    CMD_InstantDeath,
    CMD_InstantLoad,
    CMD_InstantSetupTeamWeapon,
    CMD_InstantUpgrade,
    CMD_KnockedBack,
    CMD_Load,
    CMD_Melee,
    CMD_Move,
    CMD_MoveToCover,
    CMD_Paradrop,
    CMD_Patrol,
    CMD_PickUpSimItem,
    CMD_PlaceCharge,
    CMD_Projectile,
    CMD_RallyPoint,
    CMD_RescueCasualty,
    CMD_ResolveOverlap,
    CMD_RetreatMove,
    CMD_SetHoldHeading,
    CMD_SetupTeamWeapon,
    CMD_Stop,
    CMD_StopAbility,
    CMD_Stun,
    CMD_Taunted,
    CMD_Teardown,
    CMD_Teleport,
    CMD_Trade,
    CMD_Unload,
    CMD_UnloadSquads,
    CMD_Upgrade,
    CMD_Vault,
}

/**
 * @compileMembersOnly
 */
declare enum EntityStateID {
    STATEID_Count,
    STATEID_Dead,
    STATEID_Idle,
    STATEID_Invalid,
    STATEID_Projectile,
}

/**
 * @compileMembersOnly
 */
declare enum EventCueActionVisibility {
    ECAV_ExecuterIsAlly,
    ECAV_ExecuterIsEnemy,
    ECAV_ExecuterIsOwnOrAlly,
    ECAV_CanSeeTarget,
    ECAV_ExecuterIsOwn,
    ECAV_Global,
    ECAV_AlliedToTargetAndExecuterIsEnemy,
    ECAV_CanEnemySeeExecutor,
    ECAV_CanSeeTargetAndExecutorIsOwn,
    ECAV_OwnsTargetAndExecuterIsEnemy,
    ECAV_CanSeeTargetAndExecutorIsOwnOrAlly,
    ECAV_CanSeeExecutor,
    ECAV_TargetIsOwn,
    ECAV_TargetIsAlly,
}

/**
 * @compileMembersOnly
 */
declare enum EventCueVisibility {
    ECV_None,
    ECV_Title,
    ECV_Queue,
}

/**
 * @compileMembersOnly
 */
declare enum ExplosionDebugVisuals {
    All,
    Count,
    None,
    Selected,
}

/**
 * @compileMembersOnly
 */
declare enum Field {
    AIIslandDecision_Combat,
    AIIslandDecision_Inhabit,
    AIIslandDecision_Scout,
    AIIslandDecision_Build,
    AIIslandDecision_Gather,
}

/**
 * @compileMembersOnly
 */
declare enum HintPointActionType {
    HPAT_Artillery,
    HPAT_Attack,
    HPAT_AttackLooping,
    HPAT_Bonus,
    HPAT_Count,
    HPAT_CoverGreen,
    HPAT_CoverRed,
    HPAT_CoverYellow,
    HPAT_Critical,
    HPAT_DeepSnow,
    HPAT_Detonation,
    HPAT_FormationSetup,
    HPAT_Hint,
    HPAT_Movement,
    HPAT_MovementLooping,
    HPAT_Objective,
    HPAT_RallyPoint,
    HPAT_Vaulting,
}

/**
 * @compileMembersOnly
 */
declare enum HUDFeatureType {
    HUDF_AbilityCard,
    HUDF_CommandCard,
    HUDF_Count,
    HUDF_MiniMap,
    HUDF_None,
    HUDF_Upgrades,
}

/**
 * @compileMembersOnly
 */
declare enum InputEnabledFlag {
    IEF_All,
    IEF_Camera,
    IEF_Command,
    IEF_Default,
    IEF_None,
    IEF_Selection,
    x0000,
    x0001,
    x0002,
    x0004,
}

/**
 * @compileMembersOnly
 */
declare enum KillPlayerReason {
    KPR_NetworkAbort,
    KPR_NetworkKickedOut,
    KPR_Lost,
    KPR_NetworkDisconnected,
    KPR_COUNT,
    KPR_Endgame,
    KPR_UnusedPlayer,
    KPR_Surrendered,
    KPR_NetworkOutOfSync,
}

/**
 * @compileMembersOnly
 */
declare enum LabelAlignHorizontal {
    LAH_Center,
    LAH_Count,
    LAH_Justify,
    LAH_Left,
    LAH_Right,
}

/**
 * @compileMembersOnly
 */
declare enum LabelAlignVertical {
    LAV_Bottom,
    LAV_Center,
    LAV_Count,
    LAV_None,
    LAV_Top,
}

/**
 * @compileMembersOnly
 */
declare enum LoopType {
    LOOP_INVALID,
    LOOP_NONE,
    LOOP_NORMAL,
    LOOP_TOGGLE_DIRECTION,
}

/**
 * @compileMembersOnly
 */
declare enum ModalAbilityPhase {
    Cancelled,
    Count,
    Facing,
    Issued,
    None,
    Position,
    TargetingPhase,
    TP_Cancelled,
    TP_Count,
    TP_Facing,
    TP_Issued,
    TP_None,
    TP_Position,
}

/**
 * @compileMembersOnly
 */
declare enum ModifierApplicationType {
    MAT_Ability,
    MAT_AbilityTypeAndDescendants,
    MAT_Entity,
    MAT_EntityType,
    MAT_EntityTypeAndDescendants,
    MAT_NUMBER_OF_TYPES,
    MAT_Player,
    MAT_Squad,
    MAT_SquadType,
    MAT_SquadTypeAndDescendants,
    MAT_Upgrade,
    MAT_UpgradeTypeAndDescendants,
    MAT_Weapon,
    MAT_WeaponCategory,
    MAT_WeaponType,
    MAT_WeaponTypeAndDescendants,
}

/**
 * @compileMembersOnly
 */
declare enum ModifierUsageType {
    MUT_Addition,
    MUT_Enable,
    MUT_Multiplication,
    MUT_MultiplicationAddition,
    MUT_MultiplyAdd,
    MUT_NUMBER_OF_TYPES,
    MUT_Set,
}

/**
 * @compileMembersOnly
 */
declare enum MoodMode {
    MM_Auto,
    MM_ForceCalm,
    MM_ForceTense,
    MM_NumMoodModes,
}

/**
 * @compileMembersOnly
 */
declare enum ObjectiveFunction {
    FN_LuaTableQuery,
    FN_NumFunctions,
    FN_OnActivate,
    FN_OnSelect,
    FN_OnShow,
}

/**
 * @compileMembersOnly
 */
declare enum ObjectiveState {
    Disabled,
    IdleDisplacement,
    StrafeEntry,
}

/**
 * @compileMembersOnly
 */
declare enum ObjectiveType {
    OT_Bonus,
    OT_Information,
    OT_NumTypes,
    OT_Primary,
    OT_Secondary,
}

/**
 * @compileMembersOnly
 */
declare enum OwnerType {
    Default,
    LocalEntity,
    LocalSquad,
    Player,
}

/**
 * @compileMembersOnly
 */
declare enum PlayerCommandType {
    FCMD_COUNT,
    PCMD_Ability,
    PCMD_AIPlayer,
    PCMD_AIPlayer_EncounterNotification,
    PCMD_AIPlayer_EncounterSniped,
    PCMD_AIPlayer_ResourceBonus,
    PCMD_BroadcastMessage,
    PCMD_CancelProduction,
    PCMD_CheatBuildTime,
    PCMD_CheatIgnoreCosts,
    PCMD_CheatResources,
    PCMD_CheatRevealAll,
    PCMD_COUNT,
    PCMD_DetonateCharges,
    PCMD_EndTurn,
    PCMD_FormationSquadGroupAddSquad,
    PCMD_FormationSquadGroupCreateBegin,
    PCMD_FormationSquadGroupCreateEnd,
    PCMD_InstantUpgrade,
    PCMD_PlaceAndConstructEntities,
    PCMD_ResourceDonation,
    PCMD_SlotItemRemove,
    PCMD_StopAbility,
    PCMD_Surrender,
    PCMD_TentativeUpgrade,
    PCMD_TentativeUpgradePurchaseAll,
    PCMD_TentativeUpgradeRemoveAll,
    PCMD_Upgrade,
    PCMD_UpgradeRemove,
    PCMD_WaitObjectDone,
}

/**
 * @compileMembersOnly
 */
declare enum PlayerState {
    ABORTED,
    COUNT,
    DISCONNECTED,
    INVALID,
    KICKED,
    KILLED,
    LOST,
    OUTOFSYNC,
    PLAYING,
    SURRENDERED,
    WON,
}

/**
 * @compileMembersOnly
 */
declare enum PresentationEventType {
    GE_CommandReceiverStatusUpdate,
    GE_CommandStatusUpdate,
    GE_DefaultCommandIssued,
    GE_EntityCommandIssued,
    GE_EntityPrecached,
    GE_FormationSquadGroupCommandIssued,
    GE_GameOver,
    GE_GameStart,
    GE_MusicIntensityChange,
    GE_Ping,
    GE_PlayerCommandIssued,
    GE_PlayerDropped,
    GE_PlayerEndStateChanged,
    GE_PlayerHostMigrated,
    GE_PlayerKicked,
    GE_PlayerKilled,
    GE_PlayerLagComplaint,
    GE_PlayerLose,
    GE_PlayerPingOfShame,
    GE_PlayerPingOfShameLocal,
    GE_PlayerWin,
    GE_PresentationSoundEvent,
    GE_SectorOutOfSupply,
    GE_SelectionChanged,
    GE_SpeechTelemetryEvent,
    GE_SquadAudioGameObjectRemoved,
    GE_SquadBuildCommandIssued,
    GE_SquadCommandIssued,
    GE_SquadHitEvent,
    GE_SquadPrecached,
    GE_SubselectionChanged,
    PE_ControlGroupChanged,
    PresentationEvent_Count,
}

/**
 * @compileMembersOnly
 */
declare enum PresetColour {
    Colour_Enemy,
    Colour_Local,
    Colour_Neutral,
    Colour_Ally,
}

/**
 * @compileMembersOnly
 */
declare enum ProductionItemType {
    Count,
    PITEM_PlayerUpgrade,
    PITEM_Spawn,
    PITEM_SquadReinforce,
    PITEM_SquadUpgrade,
    PITEM_Upgrade,
    SelfConstructed,
}

/**
 * @compileMembersOnly
 */
declare enum Relationship {
    R_ALLY,
    R_UNDEFINED,
    R_ENEMY,
    R_NEUTRAL,
}

/**
 * @compileMembersOnly
 */
declare enum RuleComparison {
    IS_EQUAL,
    IS_GREATER_THAN,
    IS_GREATER_THAN_OR_EQUAL,
    IS_LESS_THAN,
    IS_LESS_THAN_OR_EQUAL,
    IS_NOT_EQUAL,
}

/**
 * @compileMembersOnly
 */
declare enum RuleSelection {
    ALL_UNITS,
    ANY_ENTITY,
    ANY_SQUAD,
}

/**
 * @compileMembersOnly
 */
declare enum SaveTriggerType {
    STT_Auto,
    STT_Count,
    STT_Dev,
    STT_Quick,
    STT_Standard,
}

/**
 * @compileMembersOnly
 */
declare enum ScarType {
    ST_AIENCOUNTER,
    ST_AIENTITY,
    ST_AIPLAYER,
    ST_AISQUAD,
    ST_BOOLEAN,
    ST_CONSTENTITY,
    ST_CONSTPLAYER,
    ST_CONSTSQUAD,
    ST_CONSTVALTABLE,
    ST_Count,
    ST_CUSTOM_TYPES_COUNT,
    ST_CUSTOM_TYPES_END,
    ST_CUSTOM_TYPES_START,
    ST_EGROUP,
    ST_ENTITY,
    ST_ENUM,
    ST_FUNCTION,
    ST_INTEGER,
    ST_LOCSTRING,
    ST_MARKER,
    ST_MODIFIER,
    ST_NIL,
    ST_NUMBER,
    ST_PBG,
    ST_PLAYER,
    ST_PREFAB,
    ST_RESOURCEAMOUNT,
    ST_SCARPOS,
    ST_SGROUP,
    ST_SPLAT,
    ST_SQUAD,
    ST_STRING,
    ST_TABLE,
    ST_UIGAMEITEMINFO,
    ST_UNKNOWN,
}

/**
 * @compileMembersOnly
 */
declare enum SimulationEventType {
    GE_AbilityCanCast,
    GE_AbilityComplete,
    GE_AbilityExecuted,
    GE_AbilityRecharged,
    GE_AccessoryWeaponFired,
    GE_AIPlayer_EncounterNotification,
    GE_AIPlayer_EncounterSniped,
    GE_AIPlayer_Migrated,
    GE_AITakeOver,
    GE_AnimatorSwap,
    GE_ArtilleryFired,
    GE_BoobyTrapTriggered,
    GE_BroadcastMessage,
    GE_BuildItemCancelled,
    GE_BuildItemComplete,
    GE_BuildItemStart,
    GE_CasualtySquadSpawned,
    GE_ChallengeCustomEvent,
    GE_CommandReceiverStatusUpdate,
    GE_CommandStatusUpdate,
    GE_ConstructionCancelled,
    GE_ConstructionComplete,
    GE_ConstructionFieldComplete,
    GE_ConstructionPlanComplete,
    GE_ConstructionStart,
    GE_CustomUIEvent,
    GE_DamageArea,
    GE_DamageReceived,
    GE_DistrictChanged,
    GE_DistrictCreated,
    GE_DistrictRatingChanged,
    GE_DistrictRemoved,
    GE_DriverDecrewed,
    GE_DriverRecrewed,
    GE_EnemyActivitySpotted,
    GE_EnemyTerritoryEntered,
    GE_EntityAbandoned,
    GE_EntityBlueprintChanged,
    GE_EntityCrushed,
    GE_EntityDespawn,
    GE_EntityKilled,
    GE_EntityLandmarkDestroyed,
    GE_EntityOwnerChange,
    GE_EntityParadropComplete,
    GE_EntityRecrewed,
    GE_EntityRestored,
    GE_EntitySelectionVisualChanged,
    GE_EntitySpawn,
    GE_EntityTeleported,
    GE_EntityWrecked,
    GE_ExperienceGranted,
    GE_FieldSupportChange,
    GE_Garrison,
    GE_GarrisonSquad,
    GE_ImportantUnitSighted,
    GE_InfluenceUpdate,
    GE_ItemAvailabilityChanged,
    GE_LocalPlayerChanged,
    GE_MineDefused,
    GE_MoveFailed,
    GE_MovementNodeUpdated,
    GE_NonGlobalCamoDetected,
    GE_OccupiedBuildingChangedOwner,
    GE_OnHealthExtBPConvert,
    GE_PathfindingBlockersUpdated,
    GE_PathfindingCanBuildBlockersAdded,
    GE_PathfindingCanBuildBlockersRemoved,
    GE_PathFound,
    GE_PlannedStructureCancelled,
    GE_PlannedStructurePlaced,
    GE_PlayerAddEntity,
    GE_PlayerAddResource,
    GE_PlayerBeingAttacked,
    GE_PlayerCheat,
    GE_PlayerDebug_DELETED,
    GE_PlayerDebugBuildOrder,
    GE_PlayerDebugBuildTime,
    GE_PlayerDebugDestroy,
    GE_PlayerDebugEndMatch,
    GE_PlayerDebugFogOfWar,
    GE_PlayerDonation,
    GE_PlayerFormationFinalized,
    GE_PlayerNameChanged,
    GE_PlayerObjectiveChanged,
    GE_PlayerObjectiveDeleted,
    GE_PlayerPhaseUp,
    GE_PlayerRemoveEntity,
    GE_PlayerRemoveSquad,
    GE_PlayerResourcesAwarded,
    GE_PlayerSetResource,
    GE_PlayerSquadInitialized,
    GE_PlayerSubResource,
    GE_PlayerSurrendered,
    GE_PlayerTeamIdUpdated,
    GE_ProjectileFired,
    GE_ProjectileLanded,
    GE_ReinforcementCreated,
    GE_ResourceDepleted,
    GE_ResourceGathererAtCapacity,
    GE_SectorLinkProviderChanged,
    GE_SectorOutOfSupply,
    GE_SpawnActionComplete,
    GE_SpeechAction,
    GE_SpeechWarningAction,
    GE_SquadCalledIn,
    GE_SquadCold,
    GE_SquadFormation,
    GE_SquadFreezing,
    GE_SquadIdleEnter,
    GE_SquadIdleExit,
    GE_SquadItemDeposit,
    GE_SquadItemPickup,
    GE_SquadKilled,
    GE_SquadMembersChanged,
    GE_SquadMerge,
    GE_SquadOwnerChange,
    GE_SquadParadropComplete,
    GE_SquadPinned,
    GE_SquadProductionQueue,
    GE_SquadReplaced,
    GE_SquadRetreat,
    GE_SquadRetreatMsgReceived,
    GE_SquadSizeChanged,
    GE_SquadSpawn,
    GE_SquadSplit,
    GE_SquadTeleported,
    GE_SquadUnloaded,
    GE_SquadVeterancyRank,
    GE_StatsCustomEvent,
    GE_StrategicPointChanged,
    GE_StructureReplaced,
    GE_SuperAbility,
    GE_TerrainAreaDeformed,
    GE_TerritoryCornerDeoccupied,
    GE_TerritoryEdgeDeoccupied,
    GE_TerritoryEntered,
    GE_TickerValuesUpdated,
    GE_UpgradeCancelled,
    GE_UpgradeComplete,
    GE_UpgradeRemoved,
    GE_UpgradeStart,
    GE_UpgradeTentative,
    GE_WaitObjectDone,
    GE_WalkableSurfacePurgeOrphans,
    GE_WallCombatEnded,
    GE_WallCombatStarted,
    GE_WallWalked,
    GE_WeaponChanged,
}

/**
 * @compileMembersOnly
 */
declare enum SquadCommandType {
    CMD_COUNT,
    SCMD_AbandonTeamWeapon,
    SCMD_Ability,
    SCMD_AddPatrolPoint,
    SCMD_Attack,
    SCMD_AttackMove,
    SCMD_AttackWithinLeashArea,
    SCMD_BuildSquad,
    SCMD_BuildStructure,
    SCMD_CancelProduction,
    SCMD_CancelQueuedCommand,
    SCMD_Capture,
    SCMD_CaptureTeamWeapon,
    SCMD_CombatStance,
    SCMD_COUNT,
    SCMD_DefaultAction,
    SCMD_DefuseCharge,
    SCMD_DefuseMine,
    SCMD_Destroy,
    SCMD_DoPlan,
    SCMD_Evacuate,
    SCMD_Face,
    SCMD_Gather,
    SCMD_HoldPosition,
    SCMD_InstantLoad,
    SCMD_InstantReinforceUnit,
    SCMD_InstantSetupTeamWeapon,
    SCMD_InstantUpgrade,
    SCMD_JoinFormationSquadGroup,
    SCMD_Load,
    SCMD_Merge,
    SCMD_Move,
    SCMD_MoveToCover,
    SCMD_Patrol,
    SCMD_PickUpSimItem,
    SCMD_PickUpSlotItem,
    SCMD_PlaceCharge,
    SCMD_RallyPoint,
    SCMD_Recrew,
    SCMD_ReinforceUnit,
    SCMD_RescueCasualty,
    SCMD_RespondToBeingBreached,
    SCMD_Retreat,
    SCMD_RevertFieldSupport,
    SCMD_SetMoveType,
    SCMD_SetupTeamWeapon,
    SCMD_SlotItemRemove,
    SCMD_StationaryAttack,
    SCMD_Stop,
    SCMD_StopAbility,
    SCMD_Surprise,
    SCMD_Teleport,
    SCMD_Trade,
    SCMD_Unload,
    SCMD_UnloadSquads,
    SCMD_Upgrade,
    SCMD_Vault,
    SCMD_WeaponPreference,
}

/**
 * @compileMembersOnly
 */
declare enum StanceType {
    STANCE_Attack,
    STANCE_CeaseFire,
    STANCE_Count,
    STANCE_StandGround,
}

/**
 * @compileMembersOnly
 */
declare enum TargetingType {
    Targeting_None,
    Targeting_Automatic,
    Targeting_Manual,
}

/**
 * @compileMembersOnly
 */
declare enum UICombineType {
    UI_DoNotCombine,
    UI_Intersection,
    UI_Union,
}

/**
 * @compileMembersOnly
 */
declare enum UIEventType {
    AbilityExectued,
    AllyAttacked,
    BoobyTrap,
    CallToAction,
    CasualtySquadSpawned,
    CommandPointGained,
    ConstructionComplete,
    Count,
    Default,
    EnemyReveal,
    EnemyTerritoryEntered,
    InfantryAttacked,
    InfantryComplete,
    InfantryReplaced,
    MineDetected,
    PhaseUp,
    PlayerAttacked,
    ResourceDepleted,
    Sniped,
    SquadCold,
    SquadFreezing,
    SquadPinned,
    SquadVeterancy,
    StrategicPointCaptured,
    StrategicPointReverting,
    StrategicPointSecured,
    SuperAbility,
    TerritoryEntered,
    UpgradeComplete,
    VehicleAttacked,
    VehicleComplete,
    VehicleReplaced,
}

/**
 * @compileMembersOnly
 */
declare enum UpgradeOwnerType {
    UOT_COUNT,
    UOT_EntityInSquad,
    UOT_None,
    UOT_Player,
    UOT_Self,
}

/**
 * @compileMembersOnly
 */
declare enum VisibilityFlag {
    VF_All,
    VF_ComponentChatControl,
    VF_ComponentDecorators,
    VF_ComponentHintPoint,
    VF_ComponentKickers,
    VF_ComponentReplayControls,
    VF_ComponentReplayTaskbar,
    VF_Components,
    VF_ComponentSimulation,
    VF_ComponentTaskbar,
    VF_ComponentTitles,
    VF_Default,
    VF_MiscPaused,
    VF_None,
    VF_VisualArcs,
    VF_VisualCoverPreview,
    VF_VisualDistricts,
    VF_VisualEntityColors,
    VF_VisualMissionArea,
    VF_VisualModals,
    VF_VisualPathPreview,
    VF_Visuals,
    VF_VisualSelectionSilhouettes,
    VF_VisualTerritoryCapturePoint,
    VF_VisualTerritoryOutOfBoundsBorders,
    VF_VisualTerritorySectors,
}

/**
 * @compileMembersOnly
 */
declare enum WeaponPreference {
    WP_Count,
    WP_Melee,
    WP_Ranged,
}

declare interface Position {
    x: number;
    y: number;
    z: number;
}

declare interface EntityID {
    EntityID: number;
}

declare interface Player {
    id: PlayerID;
}

declare interface LocString {
    LocString: string;
}

declare interface _1 {
}

declare interface PlayerID {
}

declare interface Vector {
}

declare interface SquadID {
}

declare interface PropertyBagGroup {
}

declare interface EntityType {
}

declare interface TableOfEBPs {
}

declare interface SquadType {
}

declare interface TableOfSBPs {
}

declare interface EntityBlueprint {
}

declare interface SquadBlueprint {
}

declare interface SGroupID {
}

declare interface EGroupID {
}

declare interface MarkerID {
}

declare interface AIEncounterID {
}

declare interface Marker {
}

declare interface GroupID {
}

declare interface EncounterTable {
}

declare interface AiEncounter {
}

declare interface PlayerTable {
}

declare interface RequestData {
}

declare interface ModuleTable {
}

declare interface UnitTable {
}

declare interface Module {
}

declare interface Context {
}

declare interface UniqueID {
}

declare interface ConstTargetHandle {
}

declare interface ScarAbilityPBG {
}

declare interface DefendModule {
}

declare interface RovingArmyModule {
}

declare interface Key {
}

declare interface Squad {
}

declare interface EntityPBG {
}

declare interface ScarSquadPBG {
}

declare interface AIScoreMultiplierID {
}

declare interface TRUE {
}

declare interface RenderModel {
}

declare interface Transform {
}

declare interface Blueprint {
}

declare interface Hex {
}

declare interface Group {
}

declare interface Lua_State {
}

declare interface ChallengeEventType {
}

declare interface RefTable {
}

declare interface In {
}

declare interface And {
}

declare interface EGroup {
}

declare interface LocationTable {
}

declare interface VALUE {
}

declare interface SBP {
}

declare interface ScarModifier {
}

declare interface LuaBinding {
}

declare interface MUT {
}

declare interface MedalBlueprint {
}

declare interface PrintOnScreenID {
}

declare interface SGroup {
}

declare interface A {
}

declare interface RovingArmy {
}

declare interface Nearest {
}

declare interface Request {
}

declare interface SyncWeaponID {
}

declare interface Item {
}

declare interface Stack_level {
}

declare interface False {
}

declare interface T_test_group {
}

declare interface DeploymentID {
}

declare interface VillagerLife {
}

declare interface Wave {
}

declare interface ScarEntityPBG {
}

declare interface CombatRangePolicy {
}

declare interface AITaskID {
}

declare interface TargetPreference {
}

declare interface ScarAIStateModelTuningsPBG {
}

declare interface LuaMap {
}

declare interface AbilityBlueprint {
}

declare interface MoveTypeBlueprint {
}

declare interface SlotItemBlueprint {
}

declare interface ScarRacePBG {
}

declare interface UpgradeBlueprint {
}

declare interface ScarUpgradePBG {
}

declare interface WeaponBlueprint {
}

declare interface CamouflageStanceID {
}

declare interface Team {
}

declare interface Comparison {
}

declare interface Players_table {
}

declare interface Teams_table {
}

declare interface GameUICore {
}

declare interface List {
}

declare interface Returns {
}

declare interface EBP {
}

declare interface ID {
}

declare interface UpgradeID {
}

declare interface TeamID {
}

declare interface ComponentDependencyIndex {
}

declare interface ALL_UNITS {
}

declare interface ANY_MEMBER {
}

declare interface ANY_SQUAD {
}

declare interface Modids {
}

declare interface AbilityID {
}

declare interface PBG {
}

declare interface ModID {
}

declare interface AreaType {
}

declare interface ElementID {
}

declare interface BP {
}

declare interface ReticuleID {
}

declare interface LocID {
}

declare interface PingID {
}

declare interface ObjectiveID {
}

declare interface Element {
}

declare interface SectorID {
}

declare interface BlueprintTable {
}

declare interface BaseType {
}

declare interface InstanceData {
}

declare interface ActorTable {
}

declare interface ProxType {
}

declare interface TerrainSplatObject {
}

declare interface RuleGroup {
}

declare interface Or {
}

declare interface SlotItemID {
}

declare interface PositionID {
}

declare interface PlayerIDs {
}

declare interface The {
}

declare interface GoalSequence {
}

declare interface Target {
}

declare interface HintPointID {
}

declare interface ScarBriefingActorPBG {
}

declare interface Sender {
}

declare interface Event {
}

declare interface Visible {
}

declare interface When {
}

declare interface Ui {
}

declare interface Control {
}

declare interface BlipID {
}

declare interface GameEventID {
}

declare interface ScarReticulePBG {
}

declare interface Argc {
}

declare interface Then {
}

declare interface Load {
}

declare interface If {
}

declare interface This {
}

declare interface Spawntype {
}

declare interface ExitType {
}

declare interface MARKER {
}

declare interface ShieldWallID {
}

declare interface SGROUP {
}

declare interface ALL {
}

declare interface GoalData {
}

declare interface HandleID {
}

declare interface SPAWN {
}

declare interface Encounter {
}

declare interface EncounterData {
}

declare interface CriticalBlueprint {
}

declare const __AI_debugLevel: 2;

declare const __AI_encounterCounter: 0;

declare const __stagRetreatID: 0;

declare const __t_trainingBriefInterval: 1;

declare const __t_trainingHoverInterval: 3;

declare const __t_trainingInfiniteTimerDuration: 99999;

declare const __t_trainingLongDistance: 50;

declare const __t_trainingLongInterval: 60;

declare const __t_trainingModerateInterval: 30;

declare const __t_trainingShortInterval: 15;

declare const __t_trainingTimerIDOffset: 3000;

declare const __t_trainingVeryLargeTimerDuration: 9999;

declare const __t_trainingWonderInterval: 15;

declare const _StartMission_HoldReferenceCount: 0;

declare const AGE_CASTLE: 3;

declare const AGE_DARK: 1;

declare const AGE_FEUDAL: 2;

declare const AGE_IMPERIAL: 4;

declare const AGE_NONE: 0;

declare const AI_MODULE_COMBAT_RANGE: 40;

declare const AI_MODULE_LEASH_BUFFER: 20;

declare const AIArmyType_ANY: 2;

declare const AIArmyType_LAND: 0;

declare const AIArmyType_NAVAL: 1;

declare const AID_EASY: 0;

declare const AID_EXPERT: 3;

declare const AID_HARD: 2;

declare const AID_INVALID: 127;

declare const AID_NORMAL: 1;

declare const AIEncounterNotification_Cancelled: 3;

declare const AIEncounterNotification_Failure: 1;

declare const AIEncounterNotification_SquadAdded_Count: 8;

declare const AIEncounterNotification_SquadAdded_ID: 7;

declare const AIEncounterNotification_SquadReleased_Count: 6;

declare const AIEncounterNotification_SquadReleased_ID: 5;

declare const AIEncounterNotification_StateTreeExit: 4;

declare const AIEncounterNotification_Success: 0;

declare const AIEncounterNotification_Transition: 2;

declare const AIEncounterStage_Engaged: 3;

declare const AIEncounterStage_Fallback: 4;

declare const AIEncounterStage_Idle: 1;

declare const AIEncounterStage_Moving: 2;

declare const AIEncounterType_Ability: 3;

declare const AIEncounterType_AttackArea: 1;

declare const AIEncounterType_DefendArea: 0;

declare const AIEncounterType_FormationAttackMove: 5;

declare const AIEncounterType_FormationDefendArea: 6;

declare const AIEncounterType_FormationMove: 4;

declare const AIEncounterType_FormationPhase: 8;

declare const AIEncounterType_Move: 2;

declare const AIEncounterType_TownLife: 7;

declare const AIFormationPhaseEncounter_EndReason_AtDestination: 1;

declare const AIFormationPhaseEncounter_EndReason_CannotReachDestination: 7;

declare const AIFormationPhaseEncounter_EndReason_CombatThreshold: 3;

declare const AIFormationPhaseEncounter_EndReason_EnemiesAtTargetCleared: 5;

declare const AIFormationPhaseEncounter_EndReason_Invalid: 0;

declare const AIFormationPhaseEncounter_EndReason_SelfSquadsEmpty: 9;

declare const AIFormationPhaseEncounter_EndReason_ShouldFallback: 4;

declare const AIFormationPhaseEncounter_EndReason_Timeout: 2;

declare const AIFormationPhaseEncounter_EndReason_Torndown: 8;

declare const AIFormationPhaseEncounter_EndReason_WasAttacked: 6;

declare const AIMTT_hq: 0;

declare const AIMTT_INVALID: 2147483647;

declare const AIMTT_relic: 1;

declare const AIMTT_relic_dropoff: 2;

declare const AIMTT_resource_deposit: 3;

declare const AIMTT_squad: 4;

declare const AIMTT_structure: 5;

declare const AIMTT_wall: 6;

declare const AIMTT_wonder: 7;

declare const AISniperReactionMode_FallbackAnyDamaged: 3;

declare const AISniperReactionMode_FallbackSelfDamaged: 2;

declare const AISniperReactionMode_None: 0;

declare const AISniperReactionMode_Respond: 1;

declare const AIWanderRadiusMode_Leash: 0;

declare const AIWanderRadiusMode_Override: 2;

declare const AIWanderRadiusMode_TargetArea: 1;

declare const ARMY_DEFEND_TYPE_CURRENT_POSITION: "Current Position";

declare const ARMY_DEFEND_TYPE_FALLBACK: "Fallback";

declare const ARMY_DEFEND_TYPE_SPAWN: "Spawn";

declare const ARMY_DEFEND_TYPE_TARGET: "Target";

declare const ARMY_STATUS_ATTACKING: "Attacking";

declare const ARMY_STATUS_DEFENDING: "Defending";

declare const ARMY_STATUS_DISSOLVED: "Dissolved";

declare const ARMY_STATUS_DISSOLVING_INTO_MODULE: "Dissolving into module";

declare const ARMY_STATUS_EMPTY: "Empty";

declare const ARMY_TARGETING_CYCLE: "Cycle";

declare const ARMY_TARGETING_DISCARD: "Discard";

declare const ARMY_TARGETING_PROX: "Proximity";

declare const ARMY_TARGETING_RANDOM: "Random";

declare const ARMY_TARGETING_RANDOM_MEANDERING: "RandomMeandering";

declare const ARMY_TARGETING_REVERSE: "Reverse";

declare const AT_CIRCLE: "icons/minimap/area_circle";

declare const AT_SQUARE: "icons/minimap/area_square";

declare const AUDIO_TRIGGER_AREA: 1;

declare const AUDIO_TRIGGER_CONDITION: 2;

declare const CampaignAutotestStatus_Fail: 3;

declare const CampaignAutotestStatus_InProgress: 1;

declare const CampaignAutotestStatus_NotRun: 0;

declare const CampaignAutotestStatus_Pass: 2;

declare const CE_ABBCAMELSUPPORTTRACKING: 0;

declare const CE_ABBCONVERSIONIMMUNITY: 1;

declare const CE_ABBIMPROVEDDEPOSITSTRACKING: 2;

declare const CE_ABBMEDICALCENTERHEALTRACKING: 3;

declare const CE_ABBSINGLEUNITCONVERSION: 4;

declare const CE_ACHIEVALLCANNONSSURVIVEFORMIGNY: 5;

declare const CE_ACHIEVALLGOLDCHESTSPATAY: 6;

declare const CE_ACHIEVBEGINSACREDSITECAPTURE: 7;

declare const CE_ACHIEVCINEISENDING: 8;

declare const CE_ACHIEVCINEISSTARTING: 9;

declare const CE_ACHIEVDANECAMPLOOTED: 10;

declare const CE_ACHIEVDEFEATSIEGEOFLINCOLNEARLY: 11;

declare const CE_ACHIEVDESTROYALLSIEGEOFKAZAN: 12;

declare const CE_ACHIEVDIEDTOZHANGJIAKOUGATE: 13;

declare const CE_ACHIEVFREGUILDHALLRESOURCES: 14;

declare const CE_ACHIEVFULLTRANSPORTDEATH: 15;

declare const CE_ACHIEVHORSEARCHERSSURVIVE: 16;

declare const CE_ACHIEVHUIHUIPAOSURVIVES: 17;

declare const CE_ACHIEVNETWORKOFCASTLESDOWN: 18;

declare const CE_ACHIEVNETWORKOFCASTLESUP: 19;

declare const CE_ACHIEVNODEATHSINCOMBAT30ARENA: 20;

declare const CE_ACHIEVOUTPOSTKILLSUGRA: 21;

declare const CE_ACHIEVPAYMONGOLTRIBUTEEARLY: 22;

declare const CE_ACHIEVPROTECTWALLSWALLINGFORD: 23;

declare const CE_ACHIEVPURCHASEKNIGHTSTINCHEBRAY: 24;

declare const CE_ACHIEVRUSHUNTINGCABINGOLD: 25;

declare const CE_ACHIEVSHUTDOWNCHARGE: 26;

declare const CE_ACHIEVSTOPMONGOLENTERCITY: 27;

declare const CE_ACHIEVSUBUTAIBEATSBATU: 28;

declare const CE_ACHIEVUPGRADECANNONSNORMANDY: 29;

declare const CE_Begin: 0;

declare const CE_CASTLEAGEUPDELAY: 30;

declare const CE_CHIDYNASTYUNITSPAWNSPIRITWAYINFLUENCED: 31;

declare const CE_CHIIMPADDGOLDBASETAX: 32;

declare const CE_CHIIMPADDGOLDSQUADSPAWNED: 33;

declare const CE_CHIIMPADDGOLDUPGRADECOMPLETE: 34;

declare const CE_CHISPYREVEALVILLAGERS: 35;

declare const CE_Count: 56;

declare const CE_DEERSTONESSTONEBONUS: 36;

declare const CE_ENGCAMPFIREHEAL: 37;

declare const CE_ENGINFLUENCEDFARM: 38;

declare const CE_FRELANCERCHARGEBEGINS: 39;

declare const CE_FRELANCERCHARGEENDS: 40;

declare const CE_HREHEALINGAURA: 41;

declare const CE_HREINSPIREACTIVATE: 42;

declare const CE_HREINSPIREDEACTIVATE: 43;

declare const CE_MONKCONVERSIONTRACKING: 44;

declare const CE_MONRAIDRESOURCEADDED: 45;

declare const CE_MONSIGNALARROWACTIVATE: 46;

declare const CE_ORTOOSPEEDAURA: 47;

declare const CE_PALINGDAMAGE: 48;

declare const CE_RELICGATHER: 49;

declare const CE_RUSBLESSINGAURA: 50;

declare const CE_RUSBOUNTY: 51;

declare const CE_RUSINFLUENCEDLUMBERCAMP: 52;

declare const CE_SULBERRYENHANCE: 53;

declare const CE_SULSCHOLARLOADMADRASA: 54;

declare const CE_SULTRACKMOSQUEHEALING: 55;

declare const CONDITION_LIST_ALL: "all";

declare const CONDITION_LIST_ANY: "any";

declare const CONDITION_LIST_NONE: "none";

declare const CORE_ENCOUNTER_SQUAD_COUNT_LIMIT: 250;

declare const COUNT_DOWN: 1;

declare const COUNT_UP: 0;

declare const COUNTER_Count: 2;

declare const COUNTER_CountUpTo: 3;

declare const COUNTER_None: -1;

declare const COUNTER_TimerDecreasing: 0;

declare const COUNTER_TimerIncreasing: 1;

declare const COUNTER_TurnsDecreasing: 4;

declare const COUNTER_TurnsIncreasing: 5;

declare const CTA_ALARM: "cta_alarm";

declare const CTA_CELEBRATE: "cta_celebration";

declare const CTA_UNIQUE_CHANGE: "cta_focus_change";

declare const CTA_UNIQUE_STAKES: "cta_raised_stakes";

declare const DO_NOTHING: 0;

declare const DST_CLOSEST_HIDDEN: 2;

declare const DST_CLOSEST_VISIBLE: 3;

declare const DST_FURTHEST_HIDDEN: 0;

declare const DST_FURTHEST_VISIBLE: 1;

declare const DT_BONUS_DEFAULT: "BonusObjectiveDataTemplate";

declare const DT_INFO_DEFAULT: "InfoObjectiveDataTemplate";

declare const DT_PRIMARY_DEFAULT: "PrimaryObjectiveDataTemplate";

declare const DT_PRIMARY_OR: "PrimaryOrObjectiveDataTemplate";

declare const DT_SECONDARY_DEFAULT: "SecondaryObjectiveDataTemplate";

declare const EVENT_AMBIENT: 2;

declare const EVENT_INTEL: 1;

declare const EVENT_NIS: 0;

declare const EXTID_Ability: "ability_ext";

declare const EXTID_ActionApply: "action_apply_ext";

declare const EXTID_AideStation: "aide_station_ext";

declare const EXTID_AttachmentChild: "attachment_child_ext";

declare const EXTID_Attention: "attention_ext";

declare const EXTID_AttentionGen: "attention_gen_ext";

declare const EXTID_Burn: "burn_ext";

declare const EXTID_Camouflage: "camouflage_ext";

declare const EXTID_Casualty: "casualty_ext";

declare const EXTID_Combat: "combat_ext";

declare const EXTID_Construction: "construction_ext";

declare const EXTID_Cost: "cost_ext";

declare const EXTID_Cover: "cover_ext";

declare const EXTID_Crew: "crew_ext";

declare const EXTID_Crush: "crush_ext";

declare const EXTID_Crushee: "crushee_ext";

declare const EXTID_Demolishable: "demolishable_ext";

declare const EXTID_DemolitionCharge: "demolition_charge_ext";

declare const EXTID_Element: "element_ext";

declare const EXTID_Explosion: "explosion_ext";

declare const EXTID_FieldSupport: "field_support_ext";

declare const EXTID_Flight: "flight_ext";

declare const EXTID_Health: "health_ext";

declare const EXTID_Hold: "hold_ext";

declare const EXTID_Holdable: "holdable_ext";

declare const EXTID_InteractiveObject: "interactive_object_ext";

declare const EXTID_Market: "market_ext";

declare const EXTID_Medic: "medic_ext";

declare const EXTID_Mine: "mine_ext";

declare const EXTID_MineClearer: "mine_clearer_ext";

declare const EXTID_Modifier: "modifier_ext";

declare const EXTID_ModifierApply: "modifier_apply_ext";

declare const EXTID_MovementBlocker: "movement_blocker_ext";

declare const EXTID_MoveType: "movetype_ext";

declare const EXTID_Moving: "moving_ext";

declare const EXTID_MultiControlTerritoryController: "multi_control_territory_controller_ext";

declare const EXTID_ObjCover: "obj_cover_ext";

declare const EXTID_OOCTarget: "ooc_target_ext";

declare const EXTID_Paradrop: "paradrop_ext";

declare const EXTID_Posture: "posture_ext";

declare const EXTID_ProductionQueue: "production_queue_ext";

declare const EXTID_Projectile: "projectile_ext";

declare const EXTID_Recrewable: "recrewable_ext";

declare const EXTID_RepairEngineer: "repair_engineer_ext";

declare const EXTID_RepairStation: "repair_station_ext";

declare const EXTID_Resource: "resource_ext";

declare const EXTID_Road: "road_ext";

declare const EXTID_Sight: "sight_ext";

declare const EXTID_StimulusEmission: "stimulus_emission_ext";

declare const EXTID_StimulusPerception: "stimulus_perception_ext";

declare const EXTID_StrategicPoint: "strategic_point_ext";

declare const EXTID_Supply: "supply_ext";

declare const EXTID_SupplyRoad: "supply_road_ext";

declare const EXTID_TeamWeaponUser: "team_weapon_user_ext";

declare const EXTID_Territory: "territory_ext";

declare const EXTID_UI: "ui_ext";

declare const EXTID_Upgrade: "upgrade_ext";

declare const EXTID_WalkableSurface: "walkable_surface_ext";

declare const EXTID_Wall: "wall_ext";

declare const EXTID_Weapon: "weapon_ext";

declare const FILTER_KEEP: 0;

declare const FILTER_REMOVE: 1;

declare const g_AIManagerDifficulty: 1;

declare const g_audioTriggerCounter: 1;

declare const g_TimerRate: 1;

declare const GAMEOVER_OBJECTIVE_TIME: 6.5;

declare const GAMEOVER_PRESENTATION_TIME: 20;

declare const GD_EASY: 0;

declare const GD_EXPERT: 3;

declare const GD_HARD: 2;

declare const GD_INVALID: 127;

declare const GD_NORMAL: 1;

declare const GE_AbilityCanCast: 7929856;

declare const GE_AbilityComplete: 2490368;

declare const GE_AbilityExecuted: 2424832;

declare const GE_AbilityRecharged: 2555904;

declare const GE_AccessoryWeaponFired: 2752512;

declare const GE_AIPlayer_EncounterNotification: 6619136;

declare const GE_AIPlayer_EncounterSniped: 6684672;

declare const GE_AIPlayer_Migrated: 7143424;

declare const GE_AITakeOver: 6553600;

declare const GE_AnimatorSwap: 8781824;

declare const GE_ArtilleryFired: 2228224;

declare const GE_BoobyTrapTriggered: 3145728;

declare const GE_BroadcastMessage: 7733248;

declare const GE_BuildItemCancelled: 7995392;

declare const GE_BuildItemComplete: 1638400;

declare const GE_BuildItemStart: 1572864;

declare const GE_CasualtySquadSpawned: 4259840;

declare const GE_ChallengeCustomEvent: 9371648;

declare const GE_CommandReceiverStatusUpdate: 1704192;

declare const GE_CommandStatusUpdate: 1638656;

declare const GE_ConstructionCancelled: 917504;

declare const GE_ConstructionComplete: 983040;

declare const GE_ConstructionFieldComplete: 1114112;

declare const GE_ConstructionPlanComplete: 1048576;

declare const GE_ConstructionStart: 851968;

declare const GE_CustomUIEvent: 7077888;

declare const GE_DamageArea: 6881280;

declare const GE_DamageReceived: 5111808;

declare const GE_DefaultCommandIssued: 852224;

declare const GE_DistrictChanged: 9109504;

declare const GE_DistrictCreated: 8978432;

declare const GE_DistrictRatingChanged: 9175040;

declare const GE_DistrictRemoved: 9043968;

declare const GE_DriverDecrewed: 7274496;

declare const GE_DriverRecrewed: 7340032;

declare const GE_EnemyActivitySpotted: 7864320;

declare const GE_EnemyTerritoryEntered: 6029312;

declare const GE_EntityAbandoned: 3276800;

declare const GE_EntityBlueprintChanged: 393216;

declare const GE_EntityCommandIssued: 721152;

declare const GE_EntityCrushed: 589824;

declare const GE_EntityDespawn: 262144;

declare const GE_EntityKilled: 458752;

declare const GE_EntityLandmarkDestroyed: 655360;

declare const GE_EntityOwnerChange: 327680;

declare const GE_EntityParadropComplete: 2293760;

declare const GE_EntityPrecached: 1179904;

declare const GE_EntityRecrewed: 3342336;

declare const GE_EntityRestored: 786432;

declare const GE_EntitySelectionVisualChanged: 8650752;

declare const GE_EntitySpawn: 196608;

declare const GE_EntityTeleported: 524288;

declare const GE_EntityWrecked: 720896;

declare const GE_ExperienceGranted: 5177344;

declare const GE_FieldSupportChange: 3407872;

declare const GE_FormationSquadGroupCommandIssued: 590080;

declare const GE_GameOver: 983296;

declare const GE_GameStart: 917760;

declare const GE_Garrison: 1441792;

declare const GE_GarrisonSquad: 1507328;

declare const GE_ImportantUnitSighted: 3211264;

declare const GE_InfluenceUpdate: 9240576;

declare const GE_ItemAvailabilityChanged: 7536640;

declare const GE_LocalPlayerChanged: 6094848;

declare const GE_MineDefused: 2359296;

declare const GE_MoveFailed: 2883584;

declare const GE_MovementNodeUpdated: 5898240;

declare const GE_MusicIntensityChange: 1769728;

declare const GE_NonGlobalCamoDetected: 2162688;

declare const GE_OccupiedBuildingChangedOwner: 1310720;

declare const GE_OnHealthExtBPConvert: 1376256;

declare const GE_PathfindingBlockersUpdated: 3080192;

declare const GE_PathfindingCanBuildBlockersAdded: 2949120;

declare const GE_PathfindingCanBuildBlockersRemoved: 3014656;

declare const GE_PathFound: 2818048;

declare const GE_Ping: 459008;

declare const GE_PlannedStructureCancelled: 1900544;

declare const GE_PlannedStructurePlaced: 1835008;

declare const GE_PlayerAddEntity: 8257536;

declare const GE_PlayerAddResource: 8126464;

declare const GE_PlayerBeingAttacked: 5046272;

declare const GE_PlayerCheat: 5242880;

declare const GE_PlayerCommandIssued: 786688;

declare const GE_PlayerDebug_DELETED: 5308416;

declare const GE_PlayerDebugBuildOrder: 5570560;

declare const GE_PlayerDebugBuildTime: 5505024;

declare const GE_PlayerDebugDestroy: 5636096;

declare const GE_PlayerDebugEndMatch: 5373952;

declare const GE_PlayerDebugFogOfWar: 5439488;

declare const GE_PlayerDonation: 6160384;

declare const GE_PlayerDropped: 196864;

declare const GE_PlayerEndStateChanged: 1966336;

declare const GE_PlayerFormationFinalized: 8716288;

declare const GE_PlayerHostMigrated: 393472;

declare const GE_PlayerKicked: 262400;

declare const GE_PlayerKilled: 327936;

declare const GE_PlayerLagComplaint: 131328;

declare const GE_PlayerLose: 1114368;

declare const GE_PlayerNameChanged: 6225920;

declare const GE_PlayerObjectiveChanged: 6356992;

declare const GE_PlayerObjectiveDeleted: 6291456;

declare const GE_PlayerPhaseUp: 6422528;

declare const GE_PlayerPingOfShame: 256;

declare const GE_PlayerPingOfShameLocal: 65792;

declare const GE_PlayerRemoveEntity: 8323072;

declare const GE_PlayerRemoveSquad: 8454144;

declare const GE_PlayerResourcesAwarded: 6488064;

declare const GE_PlayerSetResource: 9306112;

declare const GE_PlayerSquadInitialized: 8388608;

declare const GE_PlayerSubResource: 8192000;

declare const GE_PlayerSurrendered: 7012352;

declare const GE_PlayerTeamIdUpdated: 8585216;

declare const GE_PlayerWin: 1048832;

declare const GE_PresentatonSoundEvent: 1835264;

declare const GE_ProjectileFired: 2621440;

declare const GE_ProjectileLanded: 2686976;

declare const GE_ReinforcementCreated: 1703936;

declare const GE_ResourceDepleted: 2031616;

declare const GE_ResourceGathererAtCapacity: 2097152;

declare const GE_SectorLinkProviderChanged: 7208960;

declare const GE_SectorOutOfSupply: 9568256;

declare const GE_SelectionChanged: 1442048;

declare const GE_SpawnActionComplete: 6815744;

declare const GE_SpeechAction: 7405568;

declare const GE_SpeechTelemetryEvent: 1900800;

declare const GE_SpeechWarningAction: 7798784;

declare const GE_SquadAudioGameObjectRemoved: 1310976;

declare const GE_SquadBuildCommandIssued: 524544;

declare const GE_SquadCalledIn: 4718592;

declare const GE_SquadCold: 4587520;

declare const GE_SquadCommandIssued: 655616;

declare const GE_SquadFormation: 4194304;

declare const GE_SquadFreezing: 4653056;

declare const GE_SquadIdleEnter: 3932160;

declare const GE_SquadIdleExit: 3997696;

declare const GE_SquadItemDeposit: 3866624;

declare const GE_SquadItemPickup: 3801088;

declare const GE_SquadKilled: 3538944;

declare const GE_SquadMembersChanged: 4521984;

declare const GE_SquadMerge: 4456448;

declare const GE_SquadOwnerChange: 4915200;

declare const GE_SquadParadropComplete: 4325376;

declare const GE_SquadPinned: 3604480;

declare const GE_SquadPrecached: 1245440;

declare const GE_SquadProductionQueue: 3670016;

declare const GE_SquadReplaced: 4784128;

declare const GE_SquadRetreat: 4063232;

declare const GE_SquadRetreatMsgReceived: 4128768;

declare const GE_SquadSizeChanged: 7667712;

declare const GE_SquadSpawn: 3473408;

declare const GE_SquadSplit: 4390912;

declare const GE_SquadTeleported: 4980736;

declare const GE_SquadUnloaded: 4849664;

declare const GE_SquadVeterancyRank: 3735552;

declare const GE_StatsCustomEvent: 9437184;

declare const GE_StrategicPointChanged: 1769472;

declare const GE_StructureReplaced: 1966080;

declare const GE_SubselectionChanged: 1507584;

declare const GE_SuperAbility: 6750208;

declare const GE_TerrainAreaDeformed: 6946816;

declare const GE_TerritoryCornerDeoccupied: 1245184;

declare const GE_TerritoryEdgeDeoccupied: 1179648;

declare const GE_TerritoryEntered: 5963776;

declare const GE_TickerValuesUpdated: 8519680;

declare const GE_TradeRouteCompleted: 25601;

declare const GE_UpgradeCancelled: 7602176;

declare const GE_UpgradeComplete: 65536;

declare const GE_UpgradeRemoved: 7471104;

declare const GE_UpgradeStart: 0;

declare const GE_UpgradeTentative: 131072;

declare const GE_WaitObjectDone: 8060928;

declare const GE_WalkableSurfacePurgeOrphans: 9502720;

declare const GE_WallCombatEnded: 5832704;

declare const GE_WallCombatStarted: 5767168;

declare const GE_WallWalked: 5701632;

declare const GOAL_ABILITY: "Ability";

declare const GOAL_ATTACK: "Attack";

declare const GOAL_DEFEND: "Defend";

declare const GOAL_FORMATION_ATTACK: "FormationAttack";

declare const GOAL_FORMATION_DEFEND: "FormationDefend";

declare const GOAL_MOVE: "Move";

declare const GOAL_TOWNLIFE: "TownLife";

declare const INVALID_AISQUADID: 0;

declare const IT_B_Default: "icons/objectives/objectives_generic_small";

declare const IT_I_Default: "icons/objectives/objectives_warning_small";

declare const IT_P_Default: "icons/objectives/objectives_generic_small";

declare const IT_S_Default: "icons/objectives/objectives_generic_small";

declare const LOCATION_ASSOCIATION_DISTANCE: 40;

declare const LOCATION_LABEL_HEIGHT: 10;

declare const MIX_RETURN_TO_GAME: "mix_set_game_flow_state_in_game";

declare const MIX_START_INTRO_CAM: "mix_set_game_flow_state_nis";

declare const MIX_START_OUTRO_CAM: "mix_set_game_flow_state_nis";

declare const MUS_STING_BONUS_OBJ_COMPLETE: "sfx_ui_event_queue_campaign_objective_complete";

declare const MUS_STING_BONUS_OBJ_FAIL: "sfx_ui_event_queue_campaign_objective_fail";

declare const MUS_STING_BONUS_OBJ_START: "sfx_ui_event_queue_campaign_objective_start";

declare const MUS_STING_NEGATIVE: "mus_stinger_campaign_negative";

declare const MUS_STING_POSITIVE: "mus_stinger_campaign_positive";

declare const MUS_STING_PRIMARY_OBJ_COMPLETE: "sfx_ui_event_queue_campaign_objective_complete";

declare const MUS_STING_PRIMARY_OBJ_COMPLETE_ENDGAME: "sfx_ui_event_queue_campaign_objective_complete_endgame";

declare const MUS_STING_PRIMARY_OBJ_FAIL: "sfx_ui_event_queue_campaign_objective_fail";

declare const MUS_STING_PRIMARY_OBJ_START: "sfx_ui_event_queue_campaign_objective_start";

declare const MUS_STING_TRIUMPHANT: "mus_stinger_campaign_triumph_short";

declare const MUS_STING_WARN_OBJ_COMPLETE: "sfx_ui_event_queue_campaign_objective_complete";

declare const MUS_STING_WARN_OBJ_FAIL: "sfx_ui_event_queue_campaign_objective_fail";

declare const MUS_STING_WARN_OBJ_START: "sfx_ui_event_queue_campaign_objective_start";

declare const MUS_STINGER_ALERT: "mus_stinger_campaign_alert";

declare const MUS_STINGER_WARNING: "mus_stinger_campaign_warning";

declare const MUSIC_COMBAT: "mus_combat_intensity_state_comb";

declare const MUSIC_COMBAT_RARE: "mus_combat_intensity_state_comb_rare";

declare const MUSIC_DEFAULT: "mus_combat_intensity_state_exp";

declare const MUSIC_EXPLORE: "mus_combat_intensity_state_exp";

declare const MUSIC_EXPLORE_RARE: "mus_combat_intensity_state_exp_rare";

declare const MUSIC_EXPLORE_TENSE: "mus_combat_intensity_state_exp_tens";

declare const MUSIC_EXPLORE_TENSE_RARE: "mus_combat_intensity_state_exp_tens_rare";

declare const MUSIC_RARE: "mus_combat_intensity_state_rare";

declare const MUSIC_SILENT: "silent";

declare const MUSIC_STOP: "mus_core_event_stop_all_civs";

declare const MUSIC_TENSE: "mus_combat_intensity_state_tens";

declare const MUSIC_TENSE_COMBAT: "mus_combat_intensity_state_tens_comb";

declare const MUSIC_TENSE_COMBAT_RARE: "mus_combat_intensity_state_tens_comb_rare";

declare const MUSIC_TENSE_RARE: "mus_combat_intensity_state_tens_rare";

declare const NIS_CLOSING: 2;

declare const NIS_CLOSING_NOFADE: 6;

declare const NIS_MID: 1;

declare const NIS_OPENING: 0;

declare const NIS_OPENING_BLACK: 3;

declare const NIS_OPENING_BLEND: 5;

declare const NIS_OPENING_FULLSCREEN: 4;

declare const NIS_PERF_TEST: 7;

declare const NISLET_BLACK2GAME: 1;

declare const NISLET_GAME2BLACK: 3;

declare const NISLET_GAME2GAME: 2;

declare const NISLET_GAME2LETTER: 4;

declare const NISLET_TIME: 1;

declare const NISLET_VO: 2;

declare const OFFSET_BACK: 4;

declare const OFFSET_BACK_LEFT: 5;

declare const OFFSET_BACK_RIGHT: 3;

declare const OFFSET_FRONT: 0;

declare const OFFSET_FRONT_LEFT: 7;

declare const OFFSET_FRONT_RIGHT: 1;

declare const OFFSET_LEFT: 6;

declare const OFFSET_RIGHT: 2;

declare const PB_CENTER: 1;

declare const PB_LEFT: 0;

declare const PB_OBJ: 2;

declare const PBG_Ability: 0;

declare const PBG_Camera: 4653312;

declare const PBG_EntityProperties: 1245184;

declare const PBG_Formation: 1310720;

declare const PBG_HitMaterial: 1572864;

declare const PBG_Material: 1900544;

declare const PBG_MoveType: 2097152;

declare const PBG_PassType: 2555904;

declare const PBG_Posture: 2818048;

declare const PBG_Race: 2228224;

declare const PBG_SlotItem: 2883584;

declare const PBG_SquadFormation: 2949120;

declare const PBG_SquadProperties: 3014656;

declare const PBG_Tuning: 3276800;

declare const PBG_TurnPlan: 3342336;

declare const PBG_UIMissionArea: 4260096;

declare const PBG_UISelection: 3604480;

declare const PBG_UITacticalMap: 4456704;

declare const PBG_UITerritory: 3735552;

declare const PBG_Upgrade: 3407872;

declare const PBG_Weapon: 3866624;

declare const PBGTYPE_Entity: 1245184;

declare const PBGTYPE_Squad: 3014656;

declare const PBGTYPE_Upgrade: 3407872;

declare const PROX_CENTER: 2;

declare const PROX_LONGEST: 1;

declare const PROX_SHORTEST: 0;

declare const RT_Action: 0;

declare const RT_Begin: 0;

declare const RT_Command: 1;

declare const RT_Count: 8;

declare const RT_Food: 2;

declare const RT_Gold: 3;

declare const RT_Militia_HRE: 4;

declare const RT_Popcap: 5;

declare const RT_Stone: 6;

declare const RT_Wood: 7;

declare const SCARTYPE_AIENCOUNTER: 1634297198;

declare const SCARTYPE_AIENTITY: 1634297204;

declare const SCARTYPE_AIPLAYER: 1634300012;

declare const SCARTYPE_AISQUAD: 1634300785;

declare const SCARTYPE_CONSTENTITY: 1667591796;

declare const SCARTYPE_CONSTPLAYER: 1668312178;

declare const SCARTYPE_CONSTSQUAD: 1668510052;

declare const SCARTYPE_EGROUP: 1701257248;

declare const SCARTYPE_ENTITY: 1701737504;

declare const SCARTYPE_LOCSTRING: 1970562616;

declare const SCARTYPE_MARKER: 1835758112;

declare const SCARTYPE_MODIFIER: 1836016754;

declare const SCARTYPE_PBG: 1885497120;

declare const SCARTYPE_PLAYER: 1886157170;

declare const SCARTYPE_PREFAB: 1885757794;

declare const SCARTYPE_RESOURCEAMOUNT: 1919251297;

declare const SCARTYPE_SCARPOS: 1936748403;

declare const SCARTYPE_SGROUP: 1936138272;

declare const SCARTYPE_SQUAD: 1936811040;

declare const SFX_VICTORY_TIMER_FINAL: "sfx_ui_victory_countdown_update_final";

declare const SFX_VICTORY_TIMER_FIRST: "sfx_ui_victory_countdown_update_first";

declare const SFX_VICTORY_TIMER_MIX_EVENT: "mus_shared_victory_countdown_mix_event";

declare const SFX_VICTORY_TIMER_MIX_RESET_EVENT: "mus_shared_victory_countdown_mix_event_reset";

declare const SFX_VICTORY_TIMER_SECOND: "sfx_ui_victory_countdown_update_second";

declare const SPAWN_ATMARKER: 1;

declare const SPAWN_ATSQUAD: 2;

declare const SQUADEXTID_Ability: "squad_ability_ext";

declare const SQUADEXTID_ActionApply: "squad_action_apply_ext";

declare const SQUADEXTID_Attention: "squad_attention_ext";

declare const SQUADEXTID_Audio: "squad_audio_ext";

declare const SQUADEXTID_CombatBehaviour: "squad_combat_behaviour_ext";

declare const SQUADEXTID_CombatStance: "squad_combat_stance_ext";

declare const SQUADEXTID_Experience: "squad_experience_ext";

declare const SQUADEXTID_Formation: "squad_formation_ext";

declare const SQUADEXTID_Health: "squad_health_ext";

declare const SQUADEXTID_Holdable: "squad_holdable_ext";

declare const SQUADEXTID_Item: "squad_item_ext";

declare const SQUADEXTID_ItemSlot: "squad_item_slot_ext";

declare const SQUADEXTID_Loadout: "squad_loadout_ext";

declare const SQUADEXTID_Modifier: "squad_modifier_ext";

declare const SQUADEXTID_MoveType: "squad_move_type_ext";

declare const SQUADEXTID_PlantDemolition: "squad_plant_demolition_ext";

declare const SQUADEXTID_Production: "squad_production_queue_ext";

declare const SQUADEXTID_Resource: "squad_resource_ext";

declare const SQUADEXTID_TeamWeapon: "squad_team_weapon_ext";

declare const SQUADEXTID_UI: "squad_ui_ext";

declare const SQUADEXTID_Upgrade: "squad_upgrade_ext";

declare const SQUADEXTID_Veterancy: "squad_veterancy_ext";

declare const STINGER_ALERT: "mus_stinger_alert";

declare const STINGER_COMBAT_THREAT: "mus_stinger_event_combat_threat";

declare const TASK_COUNT: 47;

declare const TEAM_NEUTRAL: 10001;

declare const TFF_All: 0;

declare const TFF_CausingSuppression: 8;

declare const TFF_FriendlyTargets: 512;

declare const TFF_InEnemySectors: 64;

declare const TFF_Infantry: 2;

declare const TFF_InFriendlySectors: 32;

declare const TFF_InjuredInfantry: 1024;

declare const TFF_InMostClumpedSector: 128;

declare const TFF_InSectorProducingResources: 2048;

declare const TFF_MeleeCombat: 4096;

declare const TFF_NotNearPlayerStartingPositions: 256;

declare const TFF_NotVisible: 16;

declare const TFF_RangedCombat: 8192;

declare const TFF_Vehicle: 4;

declare const TFF_Visible: 1;

declare const TIMER_PAUSED: typeof NaN;

declare const UI_TYPE_COMMAND: 1;

declare const UI_TYPE_DATA_CONTEXT: 2;

declare const WALLA_CAMP_CELEBRATE_LARGE: "sfx_campaign_scripted_large_group_celebrate";

declare const WALLA_CAMP_CELEBRATE_MEDIUM: "sfx_campaign_scripted_medium_group_celebrate";

declare const WALLA_CAMP_CELEBRATE_SMALL: "sfx_campaign_scripted_small_group_celebrate";

declare const WALLA_CAMP_CHARGE_LARGE: "sfx_campaign_scripted_large_group_charge";

declare const WALLA_CAMP_CHARGE_MEDIUM: "sfx_campaign_scripted_medium_group_charge";

declare const WALLA_CAMP_CHARGE_SMALL: "sfx_campaign_scripted_small_group_charge";

declare const WALLA_CAMP_ENGAGE_LARGE: "sfx_campaign_scripted_large_group_engage";

declare const WALLA_CAMP_ENGAGE_MEDIUM: "sfx_campaign_scripted_medium_group_engage";

declare const WALLA_CAMP_ENGAGE_SMALL: "sfx_campaign_scripted_small_group_din_engage";

declare const WALLA_CAMP_FEAR_LARGE: "sfx_campaign_scripted_large_group_fear";

declare const WALLA_CAMP_FEAR_MEDIUM: "sfx_campaign_scripted_medium_group_fear";

declare const WALLA_CAMP_FEAR_SMALL: "sfx_campaign_scripted_small_group_fear";

declare const WALLA_CAMP_SPEARWALL_LARGE: "sfx_campaign_scripted_large_group_spearwall";

declare const WALLA_CAMP_SPEARWALL_MEDIUM: "sfx_campaign_scripted_medium_group_spearwall";

declare const WALLA_CAMP_SPEARWALL_SMALL: "sfx_campaign_scripted_small_group_spearwall";

declare const WM_ACCURACY: "accuracy_weapon_modifier";

declare const WM_BURST: "burst_weapon_modifier";

declare const WM_COOLDOWN: "cooldown_weapon_modifier";

declare const WM_DAMAGE: "damage_weapon_modifier";

declare const WM_ENABLE: "enable_weapon_modifier";

declare const WM_PENETRATION: "weapon_penetration_modifier";

declare const WM_RANGE: "range_weapon_modifier";

declare const WM_RELOAD: "reload_weapon_modifier";

declare const WR_ANNIHILATION: 0;

declare const WR_Begin: 0;

declare const WR_CONQUEST: 1;

declare const WR_Count: 14;

declare const WR_ELIMINATION: 2;

declare const WR_KEEPRUSH: 3;

declare const WR_NONE: 4;

declare const WR_OBJECTIVECOMPLETE: 5;

declare const WR_OBJECTIVEFAILED: 6;

declare const WR_REGICIDE: 7;

declare const WR_RELICHUNT: 8;

declare const WR_RELIGIOUS: 9;

declare const WR_SETTLEMENTS: 10;

declare const WR_SIEGE: 11;

declare const WR_SURRENDER: 12;

declare const WR_WONDER: 13;

