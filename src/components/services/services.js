import axios from "axios";

/*
 * get server name from .env
 */
const { 
    REACT_APP_SERVICES_ORION,
    REACT_APP_SERVICES_PERSEO
} = process.env;


/*
 * set headers properties to avoid CORS rejection
 */
const httpHeaderOptions = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'fiware-service': 'gtc',
    'fiware-servicePath': '/'
};


/*--------------------------------------------------*/
                /* --- ORION --- */ 
/*--------------------------------------------------*/

// get all entities
export const getAllEntities = () => {
    return axios.get(REACT_APP_SERVICES_ORION + "/v2/entities/", {header: httpHeaderOptions})
            .then(res => res.data)
}
// get a specific entitie
export const getEntitie = ({entitieId}) => {
    return axios.get(REACT_APP_SERVICES_ORION + encodeURI(`/v2/entities/${entitieId}`), {header: httpHeaderOptions})
            .then(res => res.data)
}
// add an entitie
export const createEntitie = ({entitieBody}) => {
    return axios.post(REACT_APP_SERVICES_ORION + "/v2/entities", entitieBody, {header: httpHeaderOptions})
            .then(res => res.data)
}
// update an entitie
export const updateEntitie = ({entitieId, entitieBody}) => {
    return axios.patch(REACT_APP_SERVICES_ORION + encodeURI(`/v2/entities/${entitieId}/attrs?options=append`), entitieBody, {header: httpHeaderOptions})
            .then(res => res.data)
}
// delete an entitie
export const deleteEntitie = ({entitieID, entitieType}) => {
    return axios.delete(REACT_APP_SERVICES_ORION + encodeURI(`/v2/entities/${entitieID}?type=${entitieType}`), {header: httpHeaderOptions})
            .then(res => res.data)
}
/*------------------------------------------------------------------------------------------------------------------*/

/*--------------------------------------------------*/
            /* --- ORION Subcriptions --- */ 
/*--------------------------------------------------*/
// create entitie subscription
export const createEntitieSubscription = ({subscriptionBody}) => {
    return axios.post(REACT_APP_SERVICES_ORION + "/v2/subscriptions", subscriptionBody, {header: httpHeaderOptions})
            .then(res => res.data)
}
/*--------------------------------------------------*/
            /* --- PERSEO (RULES) --- */ 
/*--------------------------------------------------*/

// get all rules
export const getAllRules= () => {
    return axios.get(REACT_APP_SERVICES_PERSEO + "/v2/rules/", {header: httpHeaderOptions})
            .then(res => res.data)
}
// // get a specific rule
// export const getRule = ({ruleId}) => {
//     return axios.get(REACT_APP_SERVICES_PERSEO + encodeURI(`/v2/rules/${ruleId}`), {header: httpHeaderOptions})
//             .then(res => res.data)
// }
// // add a rule
// export const createRule = ({ruleBody}) => {
//     return axios.post(REACT_APP_SERVICES_PERSEO + "/v2/rules/", ruleBody, {header: httpHeaderOptions})
//             .then(res => res.data)
// }
// // update a rule
// export const updateRule = ({ruleId, ruleBody}) => {
//     return axios.patch(REACT_APP_SERVICES_PERSEO + encodeURI(`/v2/rules/${ruleId}`), ruleBody, {header: httpHeaderOptions})
//             .then(res => res.data)
// }
// // delete a rule
// export const deleteRule = ({ruleId, ruleType}) => {
//     return axios.delete(REACT_APP_SERVICES_PERSEO + encodeURI(`/v2/rules/${ruleId}?type=${ruleType}`), {header: httpHeaderOptions})
//             .then(res => res.data)
// }
/*------------------------------------------------------------------------------------------------------------------*/

