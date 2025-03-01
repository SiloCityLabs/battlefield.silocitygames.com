import hardlineSwatOperator from "@/json/hardline/swat/operator/weapon/melee.json";

const data: Record<string, any> = {
  "hardline-swat-operator": hardlineSwatOperator,
};

export function getMeleeList(game: string): any {
  return data[game] || {};
}
