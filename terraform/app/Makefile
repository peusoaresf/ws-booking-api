default: dev

dev: apply
qa: apply
prd: apply

apply:
	env TF_WORKSPACE=default terraform init -reconfigure -backend-config=../$(MAKECMDGOALS).tfvars
	terraform workspace select $(MAKECMDGOALS) || terraform workspace new $(MAKECMDGOALS)
	terraform apply -var-file=../$(MAKECMDGOALS).tfvars
