import { generateUserProof } from '../dist/src/main';


self.onmessage = async function (e) {
    try {
        console.log('Worker Initiated');
        const result = await generateUserProof(e.data);
        console.log('Worker Result', result);
        postMessage(result);
    } catch (error) {
        console.error("Error in worker:", error);
        postMessage({ error: error.message });
    }
}
