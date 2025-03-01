import hardlineSwatOperator from "@/json/hardline/swat/operator/weapon/melee.json";
import hardlineSwatMechanic from "@/json/hardline/swat/mechanic/weapon/melee.json";

const data: Record<string, any> = {
  "hardline-swat-operator": hardlineSwatOperator,
  "hardline-swat-mechanic": hardlineSwatMechanic,
};

export function getMeleeList(game: string): any {
  return data[game] || {};
}
