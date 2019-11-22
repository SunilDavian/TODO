import sendRequest from './fetchService';

export async function getBucket() {

    const Bucket = await sendRequest('/api/bucket', { method: "GET" });

    return { Bucket };
}

export async function updateBucket(body) {

    return await sendRequest('/api/Bucket', { method: "POST", body: JSON.stringify(body) });

}