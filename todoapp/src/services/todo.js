import sendRequest from './fetchService';

export async function getTodo() {

    const todo = await sendRequest('/api/todo', { method: "GET" });

    return { todo };
}

export async function createTodo(body) {

    return await sendRequest('/api/todo', { method: "POST", body: JSON.stringify(body) });

}