export class ExtractedFeature {
    companyId: string;
    personId: string;
    imageId: string;
    features: number[];

    constructor(companyId: string, personId: string, imageId: string, features: number[]) {
        this.companyId = companyId;
        this.personId = personId;
        this.imageId = imageId;
        this.features = features;
    }
}
