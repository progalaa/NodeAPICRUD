import {
     addNewContact,
     getContacts,
     getContactWithID,
     updateContact,
     deleteContact
} from "../controllers/crmController";

const routes = (app) => {

    app.route('/contact')
    .get((req,res,next)=>{
        //middleware
        console.log(`Request From: ${req.originalUrl}`)
        console.log(`Request Type: ${req.method}`)
        next();
    },getContacts)
    

    .post(addNewContact);

    app.route('/contact/:contactId')
    .get(getContactWithID)
    .put(updateContact)

    .delete(deleteContact)
}

export default routes;