# Training Plan Backend

This is the Express backend server for your triathlon and duathlon training plan web app. It integrates with the OpenAI API.

## Setup

1. Install dependencies:

```bash
npm install
```

2. Add your OpenAI key in a `.env` file:

```
OPENAI_API_KEY=your_openai_api_key
```

3. Start the server:

```bash
npm start
```

## Endpoint

**POST /generate-plan**

Request body:
```json
{
  "message": "Athlete info and plan preferences..."
}
```

Response:
```json
{
  "reply": "Here is your custom training plan..."
}
```
