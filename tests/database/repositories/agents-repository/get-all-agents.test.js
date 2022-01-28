const getAllAgents = require('../../../../src/database/repositories/agents-repository/get-all-agents')

test('should get all agents', async () => {
  const agentsMock = [
    {
      name: 'Agent Smith',
      email: 'agent@smith.com',
    },
  ]

  const resultMock = { Items: agentsMock, LastEvaluatedKey: 'lala' }

  const dynamodb = {
    scan: jest.fn().mockResolvedValueOnce(resultMock),
  }

  getAllAgents.dependencies = () => ({
    dynamodb,
  })

  const result = await getAllAgents()

  expect(result).toStrictEqual({
    items: agentsMock,
    lastItem: 'lala',
  })
  expect(dynamodb.scan).toHaveBeenNthCalledWith(1, {
    ExclusiveStartKey: undefined,
    Limit: 10,
    TableName: 'booking-agents-test',
  })
})
