import client, { Channel, Connection} from "amqplib";

export class Queue {

    connection?: Connection;
    channel?: Channel;

    public async init(): Promise<void> {
        this.connection = await client.connect(
            `amqp://${process.env.RABBIT_MQ_USER}:${process.env.RABBIT_MQ_PASS}@localhost:5672`
        );

        this.channel = await this.connection.createChannel();
    }

    async sendMessage(queue: string, message: string): Promise<void> {
        await this.channel?.assertQueue(queue);
        this.channel?.sendToQueue(queue, Buffer.from(message));
    }
}
