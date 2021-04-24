import Services from '../services/Services'
import config from '../../enviroment';

export default class BreedUseCase extends Services {
    constructor() {
        super(config.API_BREED_ALL);
    }

    async getListAll() {
        try {
            const { data } = await this.request.get();

            const processed = Object.entries(data.message).map((element, idx) => {
                return {
                    id: idx,
                    breed: element[0],
                    selected: false,
                    subbreeds: element[1].map((e, idz) => {
                        return {
                            id: idz,
                            name: e,
                            selected: false
                        }
                    })
                }
            });

            return processed;

        }
        catch (error) {
            console.log(`Error: ${error}`)
        }
        return
    }
}