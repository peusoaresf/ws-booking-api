variable "project" {
  default = "booking"
}

variable "profile" {}

variable "region" {}

variable "read_min_capacity_map" {
  type = map(string)

  default = {
    dev = "1"
    prd = "1"
  }
}

variable "write_min_capacity_map" {
  type = map(string)

  default = {
    dev = "1"
    prd = "1"
  }
}

variable "read_max_capacity_map" {
  type = map(string)

  default = {
    dev = "1"
    prd = "5"
  }
}

variable "write_max_capacity_map" {
  type = map(string)

  default = {
    dev = "1"
    prd = "5"
  }
}

# In case we need to use auto scaling for dynamodb
locals {
  read_min_capacity  = lookup(var.read_min_capacity_map, terraform.workspace, "dev")
  write_min_capacity = lookup(var.write_min_capacity_map, terraform.workspace, "dev")
  read_max_capacity  = lookup(var.read_max_capacity_map, terraform.workspace, "dev")
  write_max_capacity = lookup(var.write_max_capacity_map, terraform.workspace, "dev")
}
