import { sendMessage } from '../ws/websocket';

export function readFile(zip: string, path: string ): Promise<void> {
    return sendMessage('unzip.readFile', {zip,path });

};

export function fileList(zip: string): Promise<string> {
    return sendMessage('unzip.fileList', { zip });
};
