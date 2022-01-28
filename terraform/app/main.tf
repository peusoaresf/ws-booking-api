# I'd have some form of cloud backend to share state with other devs
terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 3.63"
    }
  }

  backend "s3" {
    key = "apps/booking/terraform.tfstate"
  }
}

# Connect to the profile configured in the tfvars files
provider "aws" {
  profile = var.profile
  region  = var.region
}
