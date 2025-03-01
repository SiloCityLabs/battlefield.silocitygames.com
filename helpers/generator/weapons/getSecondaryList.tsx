import hardlineSwatOperator from "@/json/hardline/swat/operator/weapon/secondary.json";

const data: Record<string, any> = {
  "hardline-swat-operator": hardlineSwatOperator,
};

export function getSecondaryList(game: string): any {
  return data[game] || {};
}
