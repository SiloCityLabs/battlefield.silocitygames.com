import hardlineSwatOperator from "@/json/hardline/swat/operator/weapon/primary.json";
import hardlineSwatMechanic from "@/json/hardline/swat/mechanic/weapon/primary.json";

const data: Record<string, any> = {
  "hardline-swat-operator": hardlineSwatOperator,
  "hardline-swat-mechanic": hardlineSwatMechanic,
};

export function getPrimaryList(game: string): any {
  return data[game] || {};
}
