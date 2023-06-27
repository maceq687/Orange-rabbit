![React 18.2.0.](https://img.shields.io/badge/React-18.2.0-blue")
![Bootstrap 5.3.0.](https://img.shields.io/badge/Bootstrap-5.3.0-blue")

# Orange-rabbit

### Festival signup form created using React and Bootstrap

Showcasing:
- Implementing a simple design (from Figma) using HTML & CSS.
- Simple DOM manipulation with Javascript (creating, inserting, deleting elements, event listeners, etc.).
- Manipulating data structures with JavaScript.
- Writing asynchronous JavaScript.
- Making requests to an API.

Objective:  
The form will be used by users who want to sign up themselves and optional additional participants for an event. 

The form starts with the following fields:
1. Name
1. Email address
1. Phone number
1. Birthdate

The user should have the option to add the same fields to add more participants. 
It should also be possible to remove the additional participants but not the main participant.

The form data should be submitted (async) to a fake API endpoint. Suppose that the endpoint accepts a JSON body with the structure defined below. Note that there’s an additional ID field for each participant which is not part of the form.

Single Participant
```
{
  id: 0,
  name: "",
  email: "",
  phone: "",
  birthdate: ""
}
```

Payload (post request body)
```
{
  main_participant: {}
  sub_participants: [{}]
}
```
