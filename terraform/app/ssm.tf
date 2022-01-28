# I'd store any variable value that depends on stage in ssm, and read those values during serverless deployment

resource "aws_ssm_parameter" "dynamodb_table_agent_users" {
  name  = "/${terraform.workspace}/dynamodb/table/agent_users"
  type  = "String"
  value = aws_dynamodb_table.agent_users.name
}

resource "aws_ssm_parameter" "dynamodb_table_agents" {
  name  = "/${terraform.workspace}/dynamodb/table/agents"
  type  = "String"
  value = aws_dynamodb_table.agents.name
}

resource "aws_ssm_parameter" "dynamodb_table_bookings" {
  name  = "/${terraform.workspace}/dynamodb/table/bookings"
  type  = "String"
  value = aws_dynamodb_table.bookings.name
}

resource "aws_ssm_parameter" "dynamodb_table_users" {
  name  = "/${terraform.workspace}/dynamodb/table/users"
  type  = "String"
  value = aws_dynamodb_table.users.name
}

resource "aws_ssm_parameter" "dynamodb_table_users_arn" {
  name  = "/${terraform.workspace}/dynamodb/table/users_arn"
  type  = "String"
  value = aws_dynamodb_table.agent_users.arn
}
