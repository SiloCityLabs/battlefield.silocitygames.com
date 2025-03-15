import hardlineSwatOperator from "@/json/hardline/swat/operator/weapon/secondary.json";
import hardlineSwatMechanic from "@/json/hardline/swat/mechanic/weapon/secondary.json";
import hardlineSwatEnforcer from "@/json/hardline/swat/enforcer/weapon/secondary.json";
import hardlineSwatProfessional from "@/json/hardline/swat/professional/weapon/secondary.json";
//undercover
import hardlineUndercoverOperator from "@/json/hardline/undercover/operator/weapon/secondary.json";
import hardlineUndercoverMechanic from "@/json/hardline/undercover/mechanic/weapon/secondary.json";
import hardlineUndercoverEnforcer from "@/json/hardline/undercover/enforcer/weapon/secondary.json";
import hardlineUndercoverProfessional from "@/json/hardline/undercover/professional/weapon/secondary.json";
//Thieves
import hardlineThievesOperator from "@/json/hardline/thieves/operator/weapon/secondary.json";
import hardlineThievesMechanic from "@/json/hardline/thieves/mechanic/weapon/secondary.json";
import hardlineThievesEnforcer from "@/json/hardline/thieves/enforcer/weapon/secondary.json";
import hardlineThievesProfessional from "@/json/hardline/thieves/professional/weapon/secondary.json";

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

export function getSecondaryList(game: string): any {
  return data[game] || {};
}
