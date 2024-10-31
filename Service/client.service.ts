import { Client } from "../model/Client";

let clients: Client[] = [];

export function findAllClients (): Client[]{
  return clients;
}

export function findClientById(id: number){
  return clients[id];
}

export function createClient(name: string){
  clients.push(new Client(name));
}

export function deleteClient(id: number){
  clients.splice(id, 1);
}