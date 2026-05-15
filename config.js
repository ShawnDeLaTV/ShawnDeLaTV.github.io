const TRANSLATIONS = {
    fr: {
        nav_about: "À PROPOS", nav_exp: "MON PARCOURS", nav_work: "MES PROJETS", nav_certs: "MES CERTIFICATIONS",
        sec_about: "Profil", sec_exp: "Mes Expériences Professionnelles", sec_work: "Mes Projets", sec_certs: "Mes Certifications", sec_stack: "Mon Expertise Technique",
        btn_cv: "TÉLÉCHARGER MON CV ↓",
        btn_github: "Code", btn_demo: "lien",
        footer_text: "Designé & Développé par Matthieu Sonzogni avec l'aide de Gemini.",
        about_bio: "Futur ingénieur diplômé en août 2026, mon parcours est marqué par un double diplôme exigeant et une mobilité internationale qui a profondément enrichi ma vision technique et humaine. Cette expérience à l'étranger m'a permis de développer une grande adaptabilité et de confronter mes méthodes de travail à des standards globaux, renforçant ainsi ma capacité à évoluer dans des environnements complexes.<br><br>Je me spécialise aujourd'hui dans la protection des infrastructures sur Amazon Web Services. Au-delà des connaissances acquises lors de mes stages, j'approfondis constamment mon expertise à travers la réalisation de projets personnels concrets. Je maîtrise l'automatisation via Terraform pour bâtir des environnements immuables au sein de l'écosystème AWS, en mettant un accent particulier sur l'isolation des réseaux et la gestion rigoureuse des identités.<br><br>Mon objectif est de transformer les exigences de sécurité et de conformité en véritables leviers d'agilité pour les entreprises. Passionné par la défense des systèmes modernes, je m'oriente vers les métiers de l'ingénierie sécurité cloud et je suis activement à la recherche de mon premier défi professionnel pour septembre 2026.<br><br>J'espère que vous allez apprécier mon portfolio.",
        exp: [
            { date: "MAI 2026 — AOÛT 2026", title: "Analyste Sécurité Cloud & SSDLC - Stage", co: "Banque de Développement du Canada (BDC)", desc: "[A venir]" },
            { date: "JUIN 2025 — AOÛT 2025", title: "Pentester - Stage", co: "BNP Paribas", desc: "<b>• Audits Offensifs (Web & API) :</b> Réalisation de tests d’intrusion sur des applications bancaires en environnement de qualification pour identifier des failles critiques.<br><b>• Analyse de Logique Métier :</b> Détection de vulnérabilités via des tests manuels et automatisés (Burp Suite, OWASP ZAP) visant les flux de données sensibles.<br><b>• Expertise Conseil & Remédiation :</b> Accompagnement technique des équipes de développement pour l'implémentation de correctifs de sécurité et le renforcement du code.<br><b>• Validation de Sécurité :</b> Réalisation de contre-audits systématiques pour certifier la résolution effective des failles avant la mise en production des services.<br>" },
            {   date: "2022 — 2025", 
                title: "Professeur Particulier Scientifique", 
                co: "Indépendant", 
                desc: "<b>• Enseignement Multidisciplinaire :</b> Dispense de cours de Mathématiques, Physique-Chimie et Informatique pour des élèves de niveau Collège et Lycée.<br><b>• Préparation aux Examens :</b> Élaboration de programmes de révision intensifs et de sessions d'entraînement ciblées pour la réussite du Brevet et du Baccalauréat.<br><b>• Pédagogie Adaptative :</b> Conception de supports didactiques personnalisés visant à simplifier des concepts complexes (algorithmique, mécanique, analyse mathématique).<br><b>• Suivi de Performance :</b> Analyse régulière de la progression des élèves et renforcement des méthodologies de travail pour accroître l'autonomie et les résultats académiques.<br>" 
                },
        ],
        projects: [
            { 
                title: "Analyseur de Politiques pour Escalation AWS", 
                desc: "<b>2026</b><br><br>Outil d'analyse statique des politiques AWS IAM pour détecter les méthodes d'escalade de privilèges connues.", 
                github: "https://github.com/ShawnDeLaTV/AWS-IAM-privilege-escalation-policy-scanner", 
                demo: "https://matthieusonzogni.com/AWS-IAM-privilege-escalation-policy-scanner/", 
                url: "projects/p-aws-iam-privilege-escalation-policy-scanner.html",
                tags: ["IAM", "AWS", "ZeroTrust", "JavaScript"], 
                image: "images/p-aws-iam-privilege-escalation-policy-scanner.png" 
            },
            { 
                title: "Architecture Cloud AWS   Zero Trust en Terraform", 
                desc: "<b>2026</b><br><br>Infrastructure Multi-AZ isolée via Terraform. Sécurisation via ALB/CloudFront.", 
                github: "https://github.com/ShawnDeLaTV/aws-zero-trust", 
                url: "projects/p-architecture-zero-trust.html",
                tags: ["Terraform", "AWS", "ZeroTrust", "IaC"], 
                image: "images/p-architecture-zero-trust.png" 
            },
            { 
                title: "Implémentation d'un SSO Dockerisé avec Authelia", 
                desc: "<b>2026</b><br><br>Centralisation OIDC et application du MFA sur l'ensemble des services.<br><br>", 
                github: "https://github.com/ShawnDeLaTV/sso-authelia", 
                url: "projects/sso-authelia.html",
                tags: ["Docker", "SSO", "Authelia", "Nginx"], 
                image: "images/p-sso-authelia.png" 
            },
        ],
        certs: [
            { name: "AWS Solutions Architect", date: "Associate", img: "images/certifications/AWSSAA.png" },
            { name: "HashiCorp Terraform", date: "Associate <br>(En cours de préparation)", img: "images/certifications/TFA.png" },
            { name: "TOEIC Anglais", date: "Niveau B2", img: "images/certifications/TOEIC.png" }
        ]
    },
    en: {
        nav_about: "ABOUT", nav_exp: "JOURNEY", nav_work: "PROJECTS", nav_certs: "CERTS",
        sec_about: "Profile", sec_exp: "Professional Experience", sec_work: "Technical Projects", sec_certs: "Certifications & Education", sec_stack: "Technical Expertise",
        btn_cv: "DOWNLOAD RESUME ↓",
        btn_github: "Source", btn_demo: "Live Demo",
        footer_text: "Designed & Developed by Matthieu Sonzogni with Gemini's help.",
        about_bio: "Future Graduate Engineer (2026), focusing on Cloud Architecture and Cybersecurity. My international experience and double degree have enriched my technical vision. I specialize in AWS protection, mastering Terraform for immutable and secure environments.",
        exp: [
            { date: "MAY 2026 — AUG 2026", title: "Cloud Security Analyst", co: "BDC", desc: "• AWS/Azure Hardening.<br>• IAM Governance.<br>• SecOps Automation." },
            { date: "JUNE 2025 — AUG 2025", title: "Pentester Intern", co: "BNP Paribas", desc: "• Web & API Pentesting.<br>• Business Logic Analysis.<br>• Remediation Advisory." }
        ],
        projects: [
            { 
                title: "AWS Zero Trust Architecture", 
                desc: "Multi-AZ Terraform infrastructure. Flow securing.", 
                github: "https://github.com/ShawnDeLaTV/aws-zero-trust", 
                url: "projects/p-architecture-zero-trust.html",
                tags: ["Terraform", "AWS", "Security", "HCL"], 
                image: "images/p-architecture-zero-trust.png" 
            },
            { 
                title: "SSO & IAM with Authelia", 
                desc: "OIDC centralization and MFA enforcement across all services.", 
                github: "https://github.com/ShawnDeLaTV/sso-authelia", 
                demo: "https://votre-demo.com", 
                url: "projects/sso-authelia.html",
                tags: ["Docker", "MFA", "Security"], 
                image: "images/sso.png" 
            }
        ],
        certs: [
            { name: "AWS Solutions Architect", date: "Associate", img: "images/certifications/AWSSAA.png" },
            { name: "HashiCorp Terraform", date: "Associate (In progress)", img: "images/certifications/TFA.png" }
        ]
    }
};

const STACK_DATA = [
    { cat: "Cloud & Infra", items: [{ name: "AWS", icon: "images/logo/aws.png" }, { name: "Azure", icon: "images/logo/azure.png" }, { name: "Terraform", icon: "images/logo/terraform.png" }] },
    { cat: "Sécurité & Défense", items: [{ name: "Burp Suite", icon: "https://cdn.simpleicons.org/burpsuite/white" }] },
    { cat: "Automation & DevOps", items: [{ name: "Python", icon: "https://cdn.simpleicons.org/python/white" }, { name: "Java", icon: "images/logo/java.png" }, { name: "C", icon: "images/logo/c.png" }, { name: "Bash", icon: "https://cdn.simpleicons.org/gnubash/white" }, { name: "Docker", icon: "https://cdn.simpleicons.org/docker/white" }, { name: "GitHub", icon: "https://cdn.simpleicons.org/githubactions/white" }] }
];