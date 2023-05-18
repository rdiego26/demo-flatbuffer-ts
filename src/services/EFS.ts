import {
    EFSClient,
    CreateFileSystemRequest,
    PerformanceMode,
    CreateFileSystemCommand, FileSystemDescription
} from "@aws-sdk/client-efs";

export class EFS {
    client: EFSClient;

    constructor() {
        this.client = new EFSClient({ region: "us-east-1", endpoint: "http://localstack_main:4566/" });
    }

    async createFileSystem(creationToken: string): Promise<FileSystemDescription> {
        const input: CreateFileSystemRequest = {
            CreationToken: creationToken,
            PerformanceMode: PerformanceMode.GENERAL_PURPOSE,
            Encrypted: false,
            Backup: false
        };

        const command: CreateFileSystemCommand = new CreateFileSystemCommand(input);
        return await this.client.send(command);
    }
}
