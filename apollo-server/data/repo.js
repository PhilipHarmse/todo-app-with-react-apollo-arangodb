'use strict';
var Database = require('arangojs').Database;

// Initiate a database instance that can be used
var db = new Database('http://root:i-07e5a251a6438e643@52.59.53.121:8529');
var dbName = "openPortal"


db.createDatabase(dbName,function (err) {
    // Check to see if the error is becuase the database already exists if so do nothing
    if(!err) console.log('Database created')
    else{
        if(err.code == 409) console.log('The database exists already so it wont be created again');
        else console.error('Failed to create database: ',err);
    }    
});

// Get a reference to the database whether it exists or not
db.useDatabase(dbName);

// Get a handle on the collection and if it doesn't already exist get a reference to it.
let col = db.collection('users');
col.create({
    waitForSync:true
})
.then(
    () => console.log('Collection created'),
    err => {
        if(err.code == 409) console.log('The collection exists already so it wont be created again');
        else console.error('Failed to create collection: ',err);
    }
)


// Add a object to the db
function AddDocument(doc) {
    return col.save(doc).then(
        meta => {console.log('Document saved: ',meta._rev); },
        err => console.error('Failed to save document: ', err) 
    )
}

// Retrieve a document by its handle
function GetDocByHandle(handle){
    return col.document(handle).then(
        (doc) => {
            return doc
        }
    ).catch( err => console.error('Failed to trieve document by its handle: ',err))
}
 
var doc = {"id":"0000a096-84cf-49e7-a652-f4db38c7b4ea","accountId":"b0d31714-7822-46f2-9cf7-d7e8361c6e9b","accountName":"Maria Helene Kappel","isCurrentVersion":false,"isMerged":false,"isLogin":true,"username":"markap97","passwordHash":"SHA256:Weqn7Y/8bsNdNWFOsz1gRdEQw49PWKrRoTWzN9MRe6kgaISCoA==","passwordHistory":[{"passwordHash":"SHA256:Weqn7Y/8bsNdNWFOsz1gRdEQw49PWKrRoTWzN9MRe6kgaISCoA==","date":"2015-02-22T17:42:58.694554+01:00"},{"passwordHash":"SHA256:rF3ZLpG9cg1foETgvfbhAVZIc1ODMW3MjYYe5YVswPGvcvyb","date":"2013-08-24T12:42:40.407"}],"dateCreated":"2014-08-08T05:32:25.5275906Z","dateModified":"2015-02-22T16:43:34.9185997Z","lastPasswordChange":"2015-02-22T17:42:58.694554+01:00","profileDataModified":"0001-01-01T00:00:00","profileImageModified":"0001-01-01T00:00:00","isEnabled":true,"lastProfileVerification":"2015-02-22T16:43:34.9185997Z","verificationStatus":1,"hasProfileImage":false,"lastName":"Kappel","firstName":"Maria Helene","displayName":"Maria Helene Kappel","middleName":"","lastNamePrefix":"","gender":2,"maritalStatus":1,"birthDate":"1997-11-29T00:00:00","age":18,"countryCode":"no","address":{"addressLine1":"Orerønningen 6","addressLine2":"","addressLine3":"","postalCode":"3189","city":"HORTEN","region":"","countryCode":"no","formattedAddress":"Orerønningen 6\r\n3189 HORTEN\r\n","countryName":"Norway"},"homePhone":{"formatted":"+47 33074273","countryCode":"no","prefix":"47","number":"33074273"},"email":"maria_kappel@hotmail.com","verifiedEmail":"maria_kappel@hotmail.com","proposedEmail":"","emailVerified":true,"proposedEmailWasVerified":false,"verificationCode":"","shortEmailVerificationCode":"","emailVerificationDate":"0001-01-01T00:00:00","cellPhone":{"formatted":"+47 33074273","countryCode":"no","prefix":"47","number":"33074273"},"proposedCellPhone":{"formatted":"+47 33074273","countryCode":"no","prefix":"47","number":"33074273"},"cellPhoneVerified":false,"attributes":{"pmo":{"hasDependents":false,"policyAgreementVersion":11.0,"guardianId":17427,"personId":24159,"policyAgreementStatus":1,"familyId":2591676,"secondGuardianId":10022,"homeAddress":{"addressLine1":"Orerønningen 6","addressLine2":"","addressLine3":"","postalCode":"3189","city":"HORTEN","region":"","countryCode":"no","formattedAddress":"Orerønningen 6\r\n3189 HORTEN\r\n","countryName":"Norway"},"canSetBirthDate":false,"personNumber":"29119746661","activeStatus":0,"homeChurchId":42,"temporaryChurchId":0}},"homeAddress":{"addressLine1":"Orerønningen 6","addressLine2":"","addressLine3":"","postalCode":"3189","city":"HORTEN","region":"","countryCode":"no","formattedAddress":"Orerønningen 6\r\n3189 HORTEN\r\n","countryName":"Norway"},"personId":24159,"guardianId":17427,"secondGuardianId":10022,"familyId":2591676,"hasDependents":false,"activeStatus":0,"personNumber":"29119746661","policyAgreementStatus":1,"policyAgreementVersion":11.0,"canSetBirthDate":false,"churchId":42,"homeChurchId":42,"temporaryChurchId":0,"cultureName1":"nb-NO","cultureName2":"nb-NO","cultureName3":"nb-NO","telephoneList":true,"birthdayList":true,"profileVisibility":1,"type":"user"}


// let times = [];

// function AddAThousandDocuments (){
//     let startTime = Date.now();  
//     const promises = []
//     for (let i =0;i < 1;i++){
//         promises.push(AddDocument(doc).then(() => {
//             times.push(Date.now() - startTime);
//         }));
//     }

//     return Promise.all(promises)
// }

// console.time("addDoc")
// AddAThousandDocuments().then(
//     meta => console.timeEnd("addDoc"),
//     err => console.error('Failed to save documents')
// ).then(() => {
//     let sum = times.reduce((sum, curValue) => {
//         return sum + curValue;
//     }, 0);
//     let averageTime = sum / times.length;
//     console.log("Average time:", averageTime);
// });

export default GetDocByHandle;



