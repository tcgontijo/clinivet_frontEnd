import axios from "axios";

const httpClient = axios.create({
    //baseURL: "https://clinivet-tulio.herokuapp.com",
    baseURL: "http://localhost:8080",
    headers: {
        "Content-type": "application/json"
    }
})

//Doenças

export const getAllDoencas = async() => {
    return httpClient.get("/doencas");
};

export const getDoenca = id => {
    return httpClient.get(`/doencas/${id}`);
};

export const createDoenca = data => {
    return httpClient.post("/doencas", data);
};

export const updateDoenca = (id, data) => {
    return httpClient.put(`/doencas/${id}`, data);
};

export const removeDoenca = id => {
    return httpClient.delete(`/doencas/${id}`);
};

//Anamnese

export const getAllAnamnese = () => {
    return httpClient.get("/anamnese");
};

export const getAnamnese = id => {
    return httpClient.get(`/anamnese/${id}`);
};

export const createAnamnese = data => {
    return httpClient.post("/anamnese", data);
};

export const updateAnamnese = (id, data) => {
    return httpClient.put(`/anamnese/${id}`, data);
};

export const removeAnamnese = id => {
    return httpClient.delete(`/anamnese/${id}`);
};

//Animal

export const getAllAnimal = () => {
    return httpClient.get("/animal");
};

export const getAnimal = id => {
    return httpClient.get(`/animal/${id}`);
};

export const createAnimal = data => {
    return httpClient.post("/animal", data);
};

export const updateAnimal = (id, data) => {
    return httpClient.put(`/animal/${id}`, data);
};

export const removeAnimal = id => {
    return httpClient.delete(`/animal/${id}`);
};

//Exame

export const getAllExame = () => {
    return httpClient.get("/exame");
};

export const getExame = id => {
    return httpClient.get(`/exame/${id}`);
};

export const createExame = data => {
    return httpClient.post("/exame", data);
};

export const updateExame = (id, data) => {
    return httpClient.put(`/exame/${id}`, data);
};

export const removeExame = id => {
    return httpClient.delete(`/exame/${id}`);
};

//Consulta

export const getAllConsulta = () => {
    return httpClient.get("/consulta");
};

export const getConsulta = id => {
    return httpClient.get(`/consulta/${id}`);
};

export const createConsulta = data => {
    return httpClient.post("/consulta", data);
};

export const updateConsulta = (id, data) => {
    return httpClient.put(`/consulta/${id}`, data);
};

export const removeConsulta = id => {
    return httpClient.delete(`/consulta/${id}`);
};