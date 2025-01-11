import { defineAction } from "astro:actions";
import { z } from "astro:schema";

export const getAvailabilityById = defineAction({
    accept:"json",
    input: z.string(),
    handler: async(placeId)=>{
        await new Promise((resolve)=>setTimeout(resolve, 3000))
        const isAvailability = Math.random() > 0.5
        const spotsAvailability = Math.floor(Math.random()*10)+1
        let message = "No spots available"
        if(isAvailability){
            message = (spotsAvailability >1 ) ? `${spotsAvailability} espacios disponibles`: "Un espacio disponible"
        }
        return {
            isAvailability: isAvailability,
            id: placeId,
            spotsAvailability: spotsAvailability,
            message: message

        }
    }
})