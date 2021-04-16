type Pokemon = [{
    id: number;
    num: string;
    name: string;
    img: string;
    type: Array<string>;
    height: string;
    weight: string;
    candy: string;
    candy_count: number;
    egg: string;
    spawn_chance: number;
    avg_spawns: number;
    spawn_time: string;
    multipliers: Array<number>;
    weaknesses: Array<string, string,string, string>;
    prev_evolution: Array<{num:string,name:string}>;
    next_evolution: Array<{num:string,name:string}>;
}];