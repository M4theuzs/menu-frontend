import { api } from "@/lib/axios";
import type { SpotDto } from "../dtos/spot.dto";

const ENDPOINT = '/spots';

export const SpotService = {

   async listAll(): Promise<SpotDto[]>{
        const result = await api.get<SpotDto[]>(ENDPOINT)
        return result.data;

    },

    async findOne(id: string): Promise<SpotDto>{
        const result = await api.get<SpotDto>('${ENDPOINT}/${id}')
        return result.data;

    }

    
}