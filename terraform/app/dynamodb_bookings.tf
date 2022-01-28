resource "aws_dynamodb_table" "bookings" {
  name           = "${var.project}-bookings-${terraform.workspace}"
  hash_key       = "agentId"
  billing_mode   = "PROVISIONED"
  read_capacity  = local.read_min_capacity
  write_capacity = local.write_min_capacity

  attribute {
    name = "bookingId"
    type = "S"
  }

  attribute {
    name = "status"
    type = "S"
  }

  attribute {
    name = "startAtUnique"
    type = "S"
  }

  global_secondary_index {
    name            = "status_startAtUnique_gsi"
    hash_key        = "status"
    range_key       = "startAtUnique"
    projection_type = "ALL"
    read_capacity   = local.read_min_capacity
    write_capacity  = local.write_min_capacity
  }

  # Safety measure
  lifecycle {
    prevent_destroy = true
  }
}
