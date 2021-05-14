// configuration module
import { Client } from '@typeit/discord';
import * as dotenv from 'dotenv';
// configuration setup
dotenv.config();

const TOKEN: string = process.env.TOKEN!;
console.log(`${TOKEN} = token`);


export class Main {
    // initializing the Client
    private static _client: Client;

    // making the Client
    static get Client(): Client {
        return this._client;
    }
    
    static start() {
        this._client = new Client();
        this._client.login(
            process.env.TOKEN!,
            `${__dirname}/discord/*.ts`,
            `${__dirname}/discord/*.js`
        );

        console.log(Client.getCommands());
    }
}
                                                                                                                                       

// run the script
Main.start();