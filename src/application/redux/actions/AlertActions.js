export const sendAlertMessage = (message) => {
    return {
        type: 'SEND_ALERT',
        message
    }
}