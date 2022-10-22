
export const ACCESS_TOKEN_LIFETIME = process.env.REACT_APP_ACCESS_TOKEN_LIFETIME || 4
export const BACK_PORT = process.env.REACT_APP_BACK_EXTERNAL_PORT || 8000
export const BACK_SERVICE_HOST = process.env.REACT_APP_BACK_SERVICE_HOST || 'localhost'
export const API_BASE_URL = `http://${BACK_SERVICE_HOST}:${BACK_PORT}/`