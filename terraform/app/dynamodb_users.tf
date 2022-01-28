resource "aws_dynamodb_table" "users" {
  name           = "${var.project}-users-${terraform.workspace}"
  hash_key       = "userId"
  billing_mode   = "PROVISIONED"
  read_capacity  = local.read_min_capacity
  write_capacity = local.write_min_capacity

  attribute {
    name = "userId"
    type = "S"
  }

  # Safety measure
  lifecycle {
    prevent_destroy = true
  }
}
