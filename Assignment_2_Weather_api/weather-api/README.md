# Weather Information API

Fetch real-time weather for a city using OpenWeatherMap.

## Tech Stack
- Node.js
- Express.js
- MongoDB
- Axios

## How to Run
1. Clone repo and run `npm install`
2. Set environment variables in `.env`
3. Start server with `node server.js`
4. API Endpoint: `GET /api/weather?city=London`

## Sample Response
```json
{
  "city": "London",
  "temperature": 18.5,
  "humidity": 72,
  "condition": "Clouds"
}
```
