'use strict';

import {ClotheType} from "@/models/clotheType.ts";

export default interface ClotheItemData {
    id: string,
    photo: string,
    canBeIroned: boolean,
    lastWash: string,
    type: ClotheType,
    lastUsed: string,
    user: string
}