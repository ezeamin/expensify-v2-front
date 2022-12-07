import { optionsModes } from "@constants/settingsOptions/optionsModes";

export interface OptionsItemType {
    name: string
    mode: optionsModes
    path?: string
}

export interface OptionsItemProps extends OptionsItemType {
    delay?: number
}