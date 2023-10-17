import { generateUserProof } from './bundle.js';

console.log("Worker script loaded");

onmessage = async function (e) {
    const inputData = e.data;
    console.log('ZK Worker Running')
    try {
        const result = await generateUserProof(inputData);
        console.log('Generated Proof', result)
        postMessage({ success: true, data: result });
    } catch (error) {
        postMessage({ success: false, error: error.message });
    }
};