# Useful commands

## Starting local app

1. Start dynamodb

```
npm run dynamodb:local
``` 

2. In a different console, load the mock data

``` 
npm run dynamodb:local:load
``` 

3. And start the api

``` 
npm run start:local
``` 

Upon start serveless will display in the console output the available apis

## Unit Testing

```
npm run test
```

## Linting

```
npm run lint
```

# Using DynamoDB locally

Full Reference: https://www.serverless.com/plugins/serverless-dynamodb-local

## Install dynamodb

```
sls dynamodb install --stage local
```

## Run it locally

```
npm run dynamodb:local
```

# Data Model

## Tables

### booking-users-table

```javascript
{
  userId: '123e4567-e89b-12d3-a456-426614174000',
  email: 'email@email',
}
```

### booking-agents-table

```javascript
{
  agentId: '123e4567-e89b-12d3-a456-426614174000',
  email: 'email@email.com',
  roles: ['ADMIN']
}
```

### booking-bookings-table

```javascript
{
  bookingId: '123e4567-e89b-12d3-a456-426614174000',
  startAt: '2022-01-28T13:15:57.749Z',
  startAtUnique: '2022-01-28T13:15:57.749Z-123e4567-e89b-12d3-a456-426614174000' // ${startAt-bookingId}
  finishAt: '2022-01-29T13:15:57.749Z',
  user: {
    userId: '123e4567-e89b-12d3-a456-426614174000',
    email: 'email@email.com',
  },
  agent: {
    agentId: '123e4567-e89b-12d3-a456-426614174000',
    email: 'email@email.com',
  },
  status: 'ACTIVE'
}
```

### booking-agent-users-table

```javascript
{
  agentId: '123e4567-e89b-12d3-a456-42661417400',
  userId: '123e4567-e89b-12d3-a456-426614174000',
  user: {
    userId: '123e4567-e89b-12d3-a456-426614174000',
    email: 'email@email.com',
  },
}
```

## Queries and Commands

### Find all bookings and user data between dates

```
Query (
  Table: booking-bookings-table
  Index: status_startAtUnique_gsi
  Condition: (
    status = ACTIVE
    startAtUnique between ($input_date) and ($input_date + 1 week)
  )
)
```

### Create booking

```
Put (
  Table: booking-bookings-table
  Item: {
    bookingId: random_uuid(),
    startAt: $input_start_at,
    startAtUnique: $input_start_at + bookingId 
    finishAt: $input_finish_at,
    user: { user_data },
    agent: { agent_data },
    status: 'ACTIVE'
  }
)
```

### Delete booking by id

```
Delete (
  Table: booking-bookings-table
  Key: (
    id = $input_id
  )
)
```

### Find all users by responsible agent

```
Query (
  Table: booking-agent-users-table
  Condition: (
    agentId = $input_id
  )
)
```

### Find all agents

```
Query (
  Table: booking-agents-table
  Condition: (
    status = ACTIVE
    Limit = 10
    LastEvaluatedKey = last item from previous query
  )
)
```
