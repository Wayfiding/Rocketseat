# API, REST e RESTFUL

This repository is for studies about API standards, REST and than turn it in RESTful.

## What's a API?

API is Application Programming Interface, it purpose is to take care between the Client APP resquest and  API server response. In another words it's how a Client App can get information from another Application and run that inside their aplications. 

In portuguese: Acronimo de Aplication Programming Interface (Interface de Programção de Aplicações) é basicamente um conjunto de rotinas e padrões estabelecidos por uma aplicação, para que outras aplicações possam utilizar as funcionalidades destas aplicação.


- Responsible for stablishe connection between differents services.
- Middleware between technologys
- Intermediary for exchange of informations.


## What's REST?

REST is Representational Stational Transfer, so REST requires some protocol to this be implemented.

### 6 Requirements (constraints) to be a  RESTful

- Client-Server_: Separate client and database, and by that we can have portability on our system, using React on Web and React Native on Mobiles. 

- _Stateless_: Every request that a client does to a server should contain all informations required for the server understand and response and understand the requests.

Example: The user session need to send on every request to know if this user are authenticate and able to use the services, and the server aren't allowed to remember his past authenticates. On our courses we use Tokens for comunication.

- _Cacheable_: The responses to a request need to be explicity about the request been able or not to be cacheable by Client. 

- _Layered System_: O cliente acessa a um endpoint, sem precisar saber da complexidade, de quais passos estão sendo necessários para o servidor responder a requisição, ou quais outras camadas o servidor estará lidando, para que a requisição seja respondida.

- _Code on demand(optional)_: Give us the possibility of our application get code, like JavaScript and apply on client-side.

So RESTful, is a application on REST standards.


## Good pratices will be implemented along the code.

 - Use verbs HTTP for our requests
 - Use plural or ssingular on endpoints creation? This doesn't matter implement a standard
 - Dont leave '/' on the final endpoint.
 - Never leave your client without response.

### Verbs HTTP 
GET : Receive data from a Resource
POST : Send data or informaton to be proccessed by a Resource.
PUT  : Refresh a data from a Resource
DELETE : Delete a Resource


## Response Status

- 1xx: Information
- 2xx: Success 
    - 200: Ok
    - 201: Created
    - 204: Don't Have information PUT,POST and DELETE. 
- 3xx: Redirection
- 4xx: Client Error
    - 400: Bad Request
    - 404: Not Found!
- 5xx: Server Error
    - 500: Internal Server Error