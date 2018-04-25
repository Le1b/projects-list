export async function get(id) {
    const response = await fetch(`/api/v1/projects/${id}`);

    return parseResponse(response)
        .catch(err => console.log(err));
}

export async function getAll() {
    const response = await fetch('/api/v1/projects');

    return parseResponse(response);
}

export async function update(id, data) {
    const response = await fetch(`/api/v1/projects/${id}`, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });

    return parseResponse(response)
        .catch(err => console.log(err));
}

export async function add(data) {
    const response = await fetch('/api/v1/projects', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });

    return parseResponse(response)
        .catch(err => console.log(err));
}

export async function remove(id) {
    const response = await fetch(`/api/v1/projects/${id}`, {
        method: 'DELETE'
    });

    return parseResponse(response)
        .catch(err => console.log(err));
}

export async function getUsers() {
    const response = await fetch('/api/v1/users');

    return parseResponse(response);
}

const parseResponse = async (response) => {
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
};