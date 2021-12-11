import { IConfig } from "./@types/types";

export const config = (config: IConfig) => {
    return new MailMaze(config);
}

class MailMaze implements IConfig {
    public items: any[];
    public looped: boolean;
    public loopTimes: number;
    public constructor(config: IConfig) {
        this.items = config.items || undefined;
        this.looped = config.looped || false;
        this.loopTimes = config.loopTimes || 1;
    }
}
