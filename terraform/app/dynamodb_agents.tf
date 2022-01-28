resource "aws_dynamodb_table" "agents" {
  name           = "${var.project}-agents-${terraform.workspace}"
  hash_key       = "agentId"
  billing_mode   = "PROVISIONED"
  read_capacity  = local.read_min_capacity
  write_capacity = local.write_min_capacity

  attribute {
    name = "agentId"
    type = "S"
  }

  attribute {
    name = "status"
    type = "S"
  }

  global_secondary_index {
    name            = "status_gsi"
    hash_key        = "status"
    projection_type = "ALL"
    read_capacity   = local.read_min_capacity
    write_capacity  = local.write_min_capacity
  }

  # Safety measure
  lifecycle {
    prevent_destroy = true
  }
}
