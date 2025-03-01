import { getPrimaryList } from "@/helpers/generator/weapons/getPrimaryList";
import { getSidearmList } from "@/helpers/generator/weapons/getSidearmList";
import { randomListItem } from "@/helpers/_silabs/randomListItem";
import { mergeObjectsWithRekey } from "@/helpers/_silabs/mergeObjectsWithRekey";
//Types
import { Weapon } from "@/types/Generator";

const weaponListGetters: Record<string, (game: string) => any> = {
  primary: getPrimaryList,
  sidearm: getSidearmList,
  all: (game: string) =>
    mergeObjectsWithRekey(getPrimaryList(game), getSidearmList(game)),
};

const rarityListGetters: Record<string, any> = {
  primary: primaryRaritys,
  sidearm: sidearmRaritys,
};

export function fetchWeapon(
  type: string = "",
  game: string,
  excludeWeapon: string = "",
  needsAttachments: boolean = false
): Weapon {
  const getWeaponList = weaponListGetters[type];
  let rollAgain = false;

  if (getWeaponList) {
    let data: Weapon;

    do {
      rollAgain = false;
      data = randomListItem(getWeaponList(game));

      //Roll a weapon that has attachments\
      if (needsAttachments && data.no_attach) {
        rollAgain = true;
      }
    } while (data.name === excludeWeapon || rollAgain);

    return data;
  } else {
    return {} as Weapon;
  }
}
