resource "aws_dynamodb_table" "agent_users" {
  name           = "${var.project}-agent-users-${terraform.workspace}"
  hash_key       = "agentId"
  range_key      = "userId"
  billing_mode   = "PROVISIONED"
  read_capacity  = local.read_min_capacity
  write_capacity = local.write_min_capacity

  attribute {
    name = "agentId"
    type = "S"
  }

  attribute {
    name = "userId"
    type = "S"
  }

  # Safety measure
  lifecycle {
    prevent_destroy = true
  }
}
