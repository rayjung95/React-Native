export const BASE = 'http://ec2-34-221-16-108.us-west-2.compute.amazonaws.com';

// Api-key and Token
const API_KEY = 'j05wd2ae49d212578ef13cb607cef64b';
const SESSION_TOKEN = 'Kw/xlaGwyV/6mmf6CF2oxo9Y4eqokxzO';

// Api Endpoint Urls
const CREATE_EVENT_URL = `${BASE}/event`

// Header
const HEADER = {
  'Content-Type': 'application/json',
  'api-key': API_KEY,
  'session': SESSION_TOKEN
}

// Api Calls
export function createEvent(event) {
  console.debug(`POST ${CREATE_EVENT_URL}`);
  return fetch(CREATE_EVENT_URL + `?owner_id=${event.owner_id}&name=${event.name}&detail=${event.detail}&start=${event.start}&end=${event.end}&location_name=${event.location_name}&lat=${event.lat}&long=${event.long}`, {
    method: 'POST',
    headers: HEADER
  });
}

