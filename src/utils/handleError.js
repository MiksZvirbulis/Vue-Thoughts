export default function handleError(error) {
    switch(error) {
        case 'INCORRECT_CREDENTIALS':
        return "Username or password was entered incorrectly!"
        case 'NO_PAYLOAD':
        return "Server did not receive any data from the form!"
        default:
        return error
    }
}