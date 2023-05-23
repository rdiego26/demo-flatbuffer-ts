import fs from "fs";

export class FileSystem {

    basePath: string = `/app/files/`;

    constructor() {
        if (!fs.existsSync(this.basePath)) {
            fs.mkdirSync(this.basePath);

            console.log(`Folder ${this.basePath} was created!`);
        }
    }

    async createFolder(folder: string): Promise<void> {
        const fullPath: string = `${this.basePath}${folder}`;

        if (!fs.existsSync(fullPath)) {
            fs.mkdirSync(fullPath);

            console.log(`Folder ${fullPath} was created!`);
        }
    }
}
