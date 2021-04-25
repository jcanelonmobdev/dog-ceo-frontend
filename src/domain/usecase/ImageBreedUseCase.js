import Services from '../services/Services'
import config from '../../enviroment';

export default class ImageBreedUseCase extends Services {
    constructor() {
        super(config.API_IMAGES_BASE);
    }

    async getImages(breed) {
        try {
            const { data } = await this.request.get(config.API_IMAGES_GET.replace('{breed}', breed));
            return data.message;
        }
        catch (error) {
            console.log(`Error: ${error}`)
        }
        return null;
    }
}