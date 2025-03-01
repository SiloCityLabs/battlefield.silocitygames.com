import hardlineSwatOperator from "@/json/hardline/swat/operator/weapon/primary.json";

const data: Record<string, any> = {
  "hardline-swat-operator": hardlineSwatOperator,
};

export function getPrimaryList(game: string): any {
  return data[game] || {};
}
