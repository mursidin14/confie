import { httpAuthClient } from "utils/http-common"


export const getNotification = async () => {
  try {
    const response = await httpAuthClient.get('/api/notifications')
    return response
  } catch (error) {
    return error
  }
}

export const readNotifications = async () => {
  try {
    const response = await httpAuthClient.post('/api/notifications/mark-all-as-read')
    return response
  } catch (error) {
    return error
  }
}