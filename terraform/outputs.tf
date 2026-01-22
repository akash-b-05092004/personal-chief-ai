output "frontend_repo_url" {
  value = aws_ecr_repository.frontend.repository_url
}

output "backend_repo_url" {
  value = aws_ecr_repository.backend.repository_url
}

output "postgres_repo_url" {
  value = aws_ecr_repository.postgres.repository_url
}

output "ecs_cluster_name" {
  value = aws_ecs_cluster.app_cluster.name
}

output "frontend_task_family" {
  value = aws_ecs_task_definition.frontend_task.family
}

output "backend_task_family" {
  value = aws_ecs_task_definition.backend_task.family
}
