export type ProjectCategory = "delivery" | "cloud" | "messaging" | "observability" | "security";

export interface PortfolioProject {
  number: string;
  title: string;
  eyebrow: string;
  category: ProjectCategory;
  scope: string;
  description: string;
  flow: string[];
  repo: string;
  featured: boolean;
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export const projects: PortfolioProject[] = [
  {
    number: "01",
    title: "Production DevOps Platform",
    eyebrow: "Delivery systems",
    category: "delivery",
    scope: "Local-first lab",
    description: "A repeatable path from source to container to cluster, with monitoring built into the workflow rather than added as an afterthought.",
    flow: ["Jenkins", "Docker", "Kubernetes", "Prometheus", "Grafana"],
    repo: "devops-production-platform",
    featured: true,
  },
  {
    number: "02",
    title: "AWS DevOps Platform",
    eyebrow: "Cloud architecture",
    category: "cloud",
    scope: "Reference architecture",
    description: "Application tests, Docker packaging and a Jenkins pipeline paired with Terraform patterns for an AWS EKS delivery path.",
    flow: ["Tests", "Jenkins", "ECR", "EKS", "ALB"],
    repo: "aws-devops-production-platform",
    featured: true,
  },
  {
    number: "03",
    title: "SMTP Email Infrastructure",
    eyebrow: "Messaging platform",
    category: "messaging",
    scope: "Architecture reference",
    description: "An email-ingress design exploring load-balanced SMTP entry, Kafka-based processing and GreenArrow integration points.",
    flow: ["SMTP", "NLB", "Kafka", "GreenArrow"],
    repo: "smtp-email-infrastructure-platform",
    featured: false,
  },
  {
    number: "04",
    title: "Kafka Distributed Processing",
    eyebrow: "Distributed systems",
    category: "messaging",
    scope: "Hands-on lab",
    description: "Go-based producer and consumer workflows that make topics, partitions, consumer groups and processing behaviour easier to explore.",
    flow: ["Go", "Topics", "Partitions", "Consumer groups"],
    repo: "kafka-distributed-processing-platform",
    featured: true,
  },
  {
    number: "05",
    title: "Production Observability",
    eyebrow: "Signals & response",
    category: "observability",
    scope: "Local lab + manifests",
    description: "A monitoring foundation for collecting metrics, exploring service health, building dashboards and routing actionable alerts.",
    flow: ["Exporters", "Prometheus", "Grafana", "Alertmanager"],
    repo: "production-observability-platform",
    featured: true,
  },
  {
    number: "06",
    title: "Blue-Green Deployment",
    eyebrow: "Release safety",
    category: "delivery",
    scope: "Local lab",
    description: "A blue/green release pattern using Nginx routing, validation checkpoints and a clear path to switch traffic back when needed.",
    flow: ["Blue", "Validate", "Switch", "Green / rollback"],
    repo: "blue-green-deployment-platform",
    featured: true,
  },
  {
    number: "07",
    title: "AWS High Availability & DR",
    eyebrow: "Resilience engineering",
    category: "cloud",
    scope: "Reference architecture",
    description: "A resilience design covering multi-AZ placement, load balancing, scaling, managed databases, backups and recovery planning.",
    flow: ["Multi-AZ", "ALB", "ASG", "RDS", "Recovery"],
    repo: "aws-ha-dr-platform",
    featured: false,
  },
  {
    number: "08",
    title: "DevSecOps CI/CD Platform",
    eyebrow: "Secure delivery",
    category: "security",
    scope: "Pipeline lab",
    description: "Security checks integrated with delivery: tests, secret detection, dependency review, container scanning and deployment validation.",
    flow: ["Tests", "Gitleaks", "Dependencies", "Trivy", "Deploy"],
    repo: "devsecops-cicd-platform",
    featured: true,
  },
  {
    number: "09",
    title: "AWS Cost & Migration",
    eyebrow: "FinOps thinking",
    category: "cloud",
    scope: "Reference architecture",
    description: "A decision-focused approach to cost analysis, container image optimization, infrastructure trade-offs and cloud migration planning.",
    flow: ["Review", "Optimize", "Compare", "Migrate"],
    repo: "aws-cost-optimization-migration-platform",
    featured: false,
  },
];

export const skillGroups: SkillGroup[] = [
  {
    label: "Cloud & infrastructure",
    items: ["AWS", "EC2", "VPC", "IAM", "S3", "RDS", "ECR / EKS", "Load balancing", "Terraform"],
  },
  {
    label: "Delivery & runtime",
    items: ["Jenkins", "Git", "Docker", "Kubernetes", "Ansible", "Bash", "Python"],
  },
  {
    label: "Observability & security",
    items: ["Prometheus", "Grafana", "Alertmanager", "Splunk", "Gitleaks", "Trivy"],
  },
  {
    label: "Systems & messaging",
    items: ["Linux", "Kafka", "SMTP", "DNS", "TCP/IP", "HTTP / TLS"],
  },
];
