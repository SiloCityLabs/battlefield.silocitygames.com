import hardlineSwatOperator from "@/json/hardline/swat/operator/weapon/primary.json";
import hardlineSwatMechanic from "@/json/hardline/swat/mechanic/weapon/primary.json";
import hardlineSwatEnforcer from "@/json/hardline/swat/enforcer/weapon/primary.json";
import hardlineSwatProfessional from "@/json/hardline/swat/professional/weapon/primary.json";
//undercover
import hardlineUndercoverOperator from "@/json/hardline/undercover/operator/weapon/primary.json";
import hardlineUndercoverMechanic from "@/json/hardline/undercover/mechanic/weapon/primary.json";
import hardlineUndercoverEnforcer from "@/json/hardline/undercover/enforcer/weapon/primary.json";
import hardlineUndercoverProfessional from "@/json/hardline/undercover/professional/weapon/primary.json";

const data: Record<string, any> = {
  "hardline-swat-operator": hardlineSwatOperator,
  "hardline-swat-mechanic": hardlineSwatMechanic,
  "hardline-swat-enforcer": hardlineSwatEnforcer,
  "hardline-swat-professional": hardlineSwatProfessional,
  "hardline-undercover-operator": hardlineUndercoverOperator,
  "hardline-undercover-mechanic": hardlineUndercoverMechanic,
  "hardline-undercover-enforcer": hardlineUndercoverEnforcer,
  "hardline-undercover-professional": hardlineUndercoverProfessional,
};

export function getPrimaryList(game: string): any {
  return data[game] || {};
}
