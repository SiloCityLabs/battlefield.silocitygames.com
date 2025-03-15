import hardlineSwatOperator from "@/json/hardline/swat/operator/weapon/melee.json";
import hardlineSwatMechanic from "@/json/hardline/swat/mechanic/weapon/melee.json";
import hardlineSwatEnforcer from "@/json/hardline/swat/enforcer/weapon/melee.json";
import hardlineSwatProfessional from "@/json/hardline/swat/professional/weapon/melee.json";
//undercover
import hardlineUndercoverOperator from "@/json/hardline/undercover/operator/weapon/melee.json";
import hardlineUndercoverMechanic from "@/json/hardline/undercover/mechanic/weapon/melee.json";
import hardlineUndercoverEnforcer from "@/json/hardline/undercover/enforcer/weapon/melee.json";
import hardlineUndercoverProfessional from "@/json/hardline/undercover/professional/weapon/melee.json";
//Thieves
import hardlineThievesOperator from "@/json/hardline/thieves/operator/weapon/melee.json";
import hardlineThievesMechanic from "@/json/hardline/thieves/mechanic/weapon/melee.json";
import hardlineThievesEnforcer from "@/json/hardline/thieves/enforcer/weapon/melee.json";
import hardlineThievesProfessional from "@/json/hardline/thieves/professional/weapon/melee.json";

const data: Record<string, any> = {
  "hardline-swat-operator": hardlineSwatOperator,
  "hardline-swat-mechanic": hardlineSwatMechanic,
  "hardline-swat-enforcer": hardlineSwatEnforcer,
  "hardline-swat-professional": hardlineSwatProfessional,
  "hardline-undercover-operator": hardlineUndercoverOperator,
  "hardline-undercover-mechanic": hardlineUndercoverMechanic,
  "hardline-undercover-enforcer": hardlineUndercoverEnforcer,
  "hardline-undercover-professional": hardlineUndercoverProfessional,
  "hardline-thieves-operator": hardlineThievesOperator,
  "hardline-thieves-mechanic": hardlineThievesMechanic,
  "hardline-thieves-enforcer": hardlineThievesEnforcer,
  "hardline-thieves-professional": hardlineThievesProfessional,
};

export function getMeleeList(game: string): any {
  return data[game] || {};
}
