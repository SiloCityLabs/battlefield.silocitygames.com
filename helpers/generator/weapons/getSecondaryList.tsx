import hardlineSwatOperator from "@/json/hardline/swat/operator/weapon/secondary.json";
import hardlineSwatMechanic from "@/json/hardline/swat/mechanic/weapon/secondary.json";

const data: Record<string, any> = {
  "hardline-swat-operator": hardlineSwatOperator,
  "hardline-swat-mechanic": hardlineSwatMechanic,
};

export function getSecondaryList(game: string): any {
  return data[game] || {};
}
