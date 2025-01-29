import { Account, Client, ID } from 'react-native-appwrite';

export const config = {
    endpoint: "https://cloud.appwrite.io/v1",
    platform: "com.futechub.aora",
    projectId: "67981fe5003dba2b9aa3",
    databaseId: "679829370002d365d2fb",
    userCollectionId: "67982a5100309459f734",
    videoCollectionId: "67982aa50012c55fef5b",
    storageId: "67982dd70024651b4bc3"
}

// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(config.endpoint) // Your Appwrite Endpoint
    .setProject(config.projectId) // Your project ID
    .setPlatform(config.platform) // Your application ID or bundle ID.
;

const account = new Account(client);

export const createUser = () => {
    account.create(ID.unique(), 'me@example.com', 'password', 'Jane Doe')
        .then(function (response) {
            console.log(response);
        }, function (error) {
            console.log(error);
        });
}
