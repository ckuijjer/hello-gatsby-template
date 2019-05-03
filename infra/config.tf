provider "aws" {
  shared_credentials_file = "~/.aws/credentials"
  profile                 = "default"
  region                  = "eu-west-1"
  version                 = "~> 2.7"
}

terraform {
  required_version = "~> 0.11.13"
}
