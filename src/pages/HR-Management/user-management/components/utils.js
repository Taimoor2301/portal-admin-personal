export function checkValidation(userData, selectedRoles) {
  if (userData.firstName.length < 3) {
    return 'first name should be atleast 3 characters long'
  }
  if (userData.lastName.length < 3) {
    return 'last name should be atleast 3 characters long'
  }
  if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(userData.email) === false) {
    return 'please enter a valid email'
  }
  if (/^\+(?:[0-9] ?){6,14}[0-9]$/.test(userData.phoneNumber) === false) {
    return 'please enter a valid phone number'
  }
  if (!selectedRoles.length) {
    return 'please select atleast one role'
  } else return ''
}
