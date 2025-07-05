import { Data_Actor, Data_Armor, Data_Enemy, Data_Class, Data_Item, Data_Skill, Data_State, Data_Troop, Data_Weapon, Data_CommonEvent } from '@sigureya/rpgtypes';
export interface DataMapper<T> {
    actor: (data: Data_Actor[], fileName: string) => T;
    armor: (data: Data_Armor[], fileName: string) => T;
    enemy: (data: Data_Enemy[], fileName: string) => T;
    class: (data: Data_Class[], fileName: string) => T;
    item: (data: Data_Item[], fileName: string) => T;
    skill: (data: Data_Skill[], fileName: string) => T;
    state: (data: Data_State[], fileName: string) => T;
    troop: (data: Data_Troop[], fileName: string) => T;
    weapon: (data: Data_Weapon[], fileName: string) => T;
    commonEvent: (data: Data_CommonEvent[], fileName: string) => T;
}
export interface DataTable {
    actors: Data_Actor[];
    enemies: Data_Enemy[];
    classes: Data_Class[];
    items: Data_Item[];
    skills: Data_Skill[];
    states: Data_State[];
    armors: Data_Armor[];
    weapons: Data_Weapon[];
}
