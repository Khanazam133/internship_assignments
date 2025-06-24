# Weather API (Mock Version)

Simple beginner API that returns mock weather data.

## Tech Stack
- Node.js
- Express.js
- MongoDB

## How to Run

1. Run MongoDB locally (or use MongoDB Compass for GUI)
2. Install dependencies:
   ```
   npm install
   ```
3. Start server:
   ```
   node server.js
   ```

4. Test API:
   ```
   GET http://localhost:5000/api/weather?city=Delhi
   ```

## Sample Response

```json
{
  "city": "Delhi",
  "temperature": 30,
  "humidity": 60,
  "condition": "Clear"
}
```
