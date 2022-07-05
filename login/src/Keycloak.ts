import Keycloak from "keycloak-js";
const keycloak = new Keycloak({
 url: "http://20.114.88.181:8080/auth",
 realm: "react-login",
 clientId: "douglas",
});

export default keycloak;