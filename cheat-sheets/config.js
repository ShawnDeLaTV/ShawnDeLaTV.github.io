const CHEATSHEET_DATA = {
    fr: [
        {
          category: "HashiCorp Terraform",
          memos: [
            {
              title: "Gestion fine des blocs Lifecycle",
              tags: ["IaC", "Production"],
              search: "terraform lifecycle prevent_destroy rds s3",
              markdown: "Permet d'éviter la suppression accidentelle d'une ressource critique (comme une instance `RDS` ou un bucket d'état `S3`) lors d'un `terraform apply` instable ou d'un refactoring de code un peu trop agressif.",
              lang: "hcl",
              code: `resource "aws_db_instance" "prod_db" {
  # ... configuration de la ressource
  
  lifecycle {
    prevent_destroy = true
  }
}`
            }
          ]
        },
        {
          category: "AWS Security & Network",
          memos: [
            {
              title: "Génération et décodage du Credential Report",
              tags: ["AWS-CLI", "Audit"],
              search: "aws iam credential report mfa audit cve",
              markdown: "Génère et extrait un rapport d'audit complet au format **CSV**. C'est un outil essentiel pour monitorer l'état de sécurité du compte :\\n1. Vérification du statut d'activation globale du **MFA**.\\n2. Analyse de l'âge des clés d'accès et historique des rotations.",
              lang: "bash",
              code: `# Déclencher la génération du rapport côté AWS
aws iam generate-credential-report

# Récupérer le contenu et le décoder du base64 pour l'afficher à l'écran
aws iam get-credential-report --output text --query 'Content' | base64 -d`
            }
          ]
        }
    ],
    en: [
        {
          category: "HashiCorp Terraform",
          memos: [
            {
              title: "Advanced Lifecycle Blocks Control",
              tags: ["IaC", "Production"],
              search: "terraform lifecycle prevent_destroy rds s3",
              markdown: "Prevents accidental deletion of critical resources (such as an `RDS` database instance or an `S3` state bucket) during unstable `terraform apply` runs or aggressive code refactoring.",
              lang: "hcl",
              code: `resource "aws_db_instance" "prod_db" {
  # ... resource configuration
  
  lifecycle {
    prevent_destroy = true
  }
}`
            }
          ]
        },
        {
          category: "AWS Security & Network",
          memos: [
            {
              title: "Credential Report Generation & Decoding",
              tags: ["AWS-CLI", "Audit"],
              search: "aws iam credential report mfa audit cve",
              markdown: "Generates and extracts an account-wide audit report in **CSV** format. Critical tool for account security monitoring:\\n1. Global **MFA** activation status verification.\\n2. Access keys age tracking and rotation cycles analysis.",
              lang: "bash",
              code: `# Trigger the report generation on AWS side
aws iam generate-credential-report

# Retrieve the payload and decode it from base64 to print it out
aws iam get-credential-report --output text --query 'Content' | base64 -d`
            }
          ]
        }
    ]
};