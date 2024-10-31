import {createClient, deleteClient, findAllClients, findClientById} from '../Service/client.service';

export function findAllClientsController () {
  const clients = findAllClients();
  console.log("----------- All Clients --------------");
  clients.map((client, index) => {
    console.log(`ID: ${index+1} | Client Name: ${client.name}`);
  });
  console.log();
}

export function findClientByIdController(id: number){
  const client = findClientById(id-1);
  if(!client) return console.log("Client not found");
  console.log("--------- Client by ID ------------");
  console.log(`ID: ${id} | Client Name: ${client.name}`);
}

export function createClientController(name: string){
  if(name.trim() == "") return console.log("Invalid name");
  createClient(name);
  console.log("Client registered");
}

export function deleteClientController(id: number){
  const client = findClientById(id-1);
  if(!client) return console.log("Client not found");
  deleteClient(id-1);
  console.log("Client deleted");
}