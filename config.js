const TRANSLATIONS = {
    fr: {
        nav_about: "À PROPOS", nav_exp: "MON PARCOURS", nav_work: "MES PROJETS", nav_certs: "MES CERTIFICATIONS",
        sec_about: "Profil", sec_exp: "Mes Expériences Professionnelles", sec_work: "Mes Projets", sec_certs: "Mes Certifications", sec_stack: "Mon Expertise Technique",
        btn_cv: "TÉLÉCHARGER MON CV ↓",
        btn_github: "Code", btn_demo: "lien",
        btn_more: "VOIR PLUS DE PROJETS ↓",
        btn_less: "REPLIER ↑",
        footer_text: "Designé & Développé par Matthieu Sonzogni avec l'aide de Gemini.",
        about_bio: "Futur ingénieur diplômé en août 2026, mon parcours est marqué par un double diplôme exigeant et une mobilité internationale qui a profondément enrichi ma vision technique et humaine. Cette expérience à l'étranger m'a permis de développer une grande adaptabilité et de confronter mes méthodes de travail à des standards globaux, renforçant ainsi ma capacité à évoluer dans des environnements complexes.<br><br>Je me spécialise aujourd'hui dans la protection des infrastructures sur Amazon Web Services. Au-delà des connaissances acquises lors de mes stages, j'approfondis constamment mon expertise à travers la réalisation de projets personnels concrets. Je maîtrise l'automatisation via Terraform pour bâtir des environnements immuables au sein de l'écosystème AWS, en mettant un accent particulier sur l'isolation des réseaux et la gestion rigoureuse des identités.<br><br>Mon objectif est de transformer les exigences de sécurité et de conformité en véritables leviers d'agilité pour les entreprises. Passionné par la défense des systèmes modernes, je m'oriente vers les métiers de l'ingénierie sécurité cloud et je suis activement à la recherche de mon premier défi professionnel pour septembre 2026.<br><br>J'espère que vous allez apprécier mon portfolio.",
        exp: [
            { date: "MAI 2026 — AOÛT 2026", title: "Analyste Sécurité Cloud & SSDLC - Stage", co: "Banque de Développement du Canada (BDC)", desc: "[A venir]" },
            { date: "JUIN 2025 — AOÛT 2025", title: "Pentester - Stage", co: "BNP Paribas", desc: "<b>• Audits Offensifs (Web & API) :</b> Réalisation de tests d’intrusion sur des applications bancaires en environnement de qualification pour identifier des failles critiques.<br><b>• Analyse de Logique Métier :</b> Détection de vulnérabilités via des tests manuels et automatisés (Burp Suite, OWASP ZAP) visant les flux de données sensibles.<br><b>• Expertise Conseil & Remédiation :</b> Accompagnement technique des équipes de développement pour l'implémentation de correctifs de sécurité et le renforcement du code.<br><b>• Validation de Sécurité :</b> Réalisation de contre-audits systématiques pour certifier la résolution effective des failles avant la mise en production des services.<br>" },
            { date: "2022 — 2025", 
              title: "Professeur Particulier Scientifique", 
              co: "Indépendant", 
              desc: "<b>• Enseignement Multidisciplinaire :</b> Dispense de cours de Mathématiques, Physique-Chimie et Informatique pour des élèves de niveau Collège et Lycée.<br><b>• Préparation aux Examens :</b> Élaboration de programmes de révision intensifs et de sessions d'entraînement ciblées pour la réussite du Brevet et du Baccalauréat.<br><b>• Pédagogie Adaptative :</b> Conception de supports didactiques personnalisés visant à simplifier des concepts complexes (algorithmique, mécanique, analyse mathématique).<br><b>• Suivi de Performance :</b> Analyse régulière de la progression des élèves et renforcement des méthodologies de travail pour accroître l'autonomie et les résultats académiques.<br>" 
            },
        ],
        edu: [
            { date: "2025 — 2026", title: "Maitrise en Cybersécurité", co: "Université de Sherbrooke - Montréal, Canada", desc: "Double diplôme et mobilité internationale." },
            { date: "2023 — 2026", title: "Diplôme d'Ingénieur en Informatique", co: "ENSSAT - Lannion, France", desc: "École d'ingénieur en informatique appartenant au concours Mines Telecom." },
            { date: "2021 — 2023", title: "Classe Préparatoire aux Grandes Écoles (CPGE) - Filière PCSI-PC", co: "Lycée Marceau - Chartres, France", desc: "Formation intensive de deux ans préparant aux concours d'entrée des grandes écoles d'ingénieurs."},
            { date: "2021", title: "Baccalauréat Mathématiques, Physique-Chimie, Option Mathématiques Expertes", co: "Lycée Jean Baptiste Corot - Savigny sur Orge, France", desc: "Formation intensive de deux ans préparant aux concours d'entrée des grandes écoles d'ingénieurs."}
        ],
        projects: [
            { 
                title: "Analyseur de Politiques pour Escalation AWS", 
                desc: "<b>2026</b><br><br>Outil d'analyse statique des politiques AWS IAM pour détecter les méthodes d'escalade de privilèges connues.", 
                github: "https://github.com/ShawnDeLaTV/AWS-IAM-privilege-escalation-policy-scanner", 
                demo: "https://matthieusonzogni.com/AWS-IAM-privilege-escalation-policy-scanner/", 
                url: "projects/build-in-progress.html",
                tags: ["IAM", "AWS", "ZeroTrust", "JavaScript"], 
                image: "images/p-aws-iam-privilege-escalation-policy-scanner.png" 
            },
            { 
                title: "Architecture Cloud AWS Zero Trust en Terraform", 
                desc: "<b>2026</b><br><br>Infrastructure Multi-AZ isolée via Terraform. Sécurisation via ALB/CloudFront.", 
                github: "https://github.com/ShawnDeLaTV/terraform-aws-secure-multi-az-infra", 
                url: "projects/build-in-progress.html",
                tags: ["Terraform", "AWS", "ZeroTrust", "IaC"], 
                image: "images/p-architecture-zero-trust.png" 
            },
            { 
                title: "Implémentation d'un SSO Dockerisé avec Authelia", 
                desc: "<b>2026</b><br><br>Centralisation OIDC et application du MFA sur l'ensemble des services.<br><br>", 
                github: "https://github.com/ShawnDeLaTV/ProjetSystemeEtReseaux", 
                url: "projects/build-in-progress.html",
                tags: ["Docker", "SSO", "Authelia", "Nginx"], 
                image: "images/p-sso-authelia.png" 
            },
            { 
                title: "Décodeur de trame 4G", 
                desc: "<b>2025</b><br><br>Décodeur de trames 4G permettant l'analyse des communications mobiles.<br><br>", 
                github: "https://github.com/ShawnDeLaTV/python-4g-frame-decoder", 
                url: "projects/build-in-progress.html",
                tags: ["Python", "Network", "SignalProcessing"], 
                image: "images/p-4G-frame-decoder.png" 
            },
            { 
                title: "Compilateur de langage NilNovi", 
                desc: "<b>2025</b><br><br>Compilateur pour un langage de programmation procédural et fonctionnel simplifié.<br><br>", 
                github: "https://github.com/ShawnDeLaTV/python-nilnovi-compiler/", 
                url: "projects/build-in-progress.html",
                tags: ["Python", "Compiler"], 
                image: "images/p-nilnovi-compiler.png" 
            },
            { 
                title: "Développement associatif de mods Minecraft", 
                desc: "<b>2021-2023</b><br><br>Développement de mods pour l'association BuildYourStory dans un thème Harry Potter<br>(Accès perdu à ce compte GitHub)", 
                github: "https://github.com/ShawnDeLaTV/minecraft-mods", 
                url: "projects/build-in-progress.html",
                tags: ["Java", "Minecraft"], 
                image: "images/p-minecraft-mods.png" 
            }
        ],
        certs: [
            { name: "AWS Solutions Architect", date: "Associate", img: "images/certifications/AWSSAA.png" },
            { name: "HashiCorp Terraform", date: "Associate <br>(En cours de préparation)", img: "images/certifications/TFA.png" },
            { name: "TOEIC Anglais", date: "Niveau B2", img: "images/certifications/TOEIC.png" }
        ]
    },
    en: {
        nav_about: "ABOUT", nav_exp: "MY JOURNEY", nav_work: "MY PROJECTS", nav_certs: "MY CERTIFICATIONS",
        sec_about: "Profile", sec_exp: "Professional Experience", sec_work: "My Projects", sec_certs: "My Certifications", sec_stack: "Technical Expertise",
        btn_cv: "DOWNLOAD RESUME ↓",
        btn_github: "Code", btn_demo: "Link",
        btn_more: "SEE MORE PROJECTS ↓",
        btn_less: "COLLAPSE ↑",
        footer_text: "Designed & Developed by Matthieu Sonzogni with Gemini's help.",
        about_bio: "As a future Graduate Engineer (completing in August 2026), my academic path is shaped by a demanding dual degree and international mobility that has deeply enriched both my technical and personal perspective. This experience abroad allowed me to develop strong adaptability and test my methodologies against global standards, strengthening my ability to operate within complex environments.<br><br>Today, I specialize in securing infrastructures on Amazon Web Services. Moving beyond the knowledge built during my internships, I constantly sharpen my expertise by developing concrete personal projects. I master automation via Terraform to build immutable environments within the AWS ecosystem, placing a strict emphasis on network isolation and rigorous identity management.<br><br>My objective is to transform security and compliance requirements into true drivers of business agility. Passionate about defending modern architectures, I am steering my career toward Cloud Security Engineering and am actively seeking my first professional challenge starting September 2026.<br><br>I hope you enjoy exploring my portfolio.",
        exp: [
            { date: "MAY 2026 — AUGUST 2026", title: "Cloud Security & SSDLC Analyst - Internship", co: "Business Development Bank of Canada (BDC)", desc: "[Coming soon]" },
            { date: "JUNE 2025 — AUGUST 2025", title: "Pentester - Internship", co: "BNP Paribas", desc: "<b>• Offensive Audits (Web & API):</b> Conducted penetration testing on banking applications within staging environments to identify critical vulnerabilities.<br><b>• Business Logic Analysis:</b> Detected security flaws using manual and automated testing tools (Burp Suite, OWASP ZAP) targeting sensitive data flows.<br><b>• Remediation Advisory:</b> Provided technical guidance to development teams for implementing security patches and hardening code repositories.<br><b>• Security Validation:</b> Performed systematic re-testing to certify effective vulnerability resolution prior to production deployments.<br>" },
            { date: "2022 — 2025", 
              title: "Private STEM Tutor", 
              co: "Freelance", 
              desc: "<b>• Multidisciplinary Teaching:</b> Provided Mathematics, Physics, Chemistry, and Computer Science tutoring for Middle School and High School students.<br><b>• Exam Preparation:</b> Designed intensive revision programs and targeted practice sessions for success in national graduation exams.<br><b>• Adaptive Pedagogy:</b> Created customized learning materials to simplify complex concepts (algorithms, mechanics, mathematical analysis).<br><b>• Performance Tracking:</b> Regularly assessed student progress and reinforced study methodologies to boost academic autonomy and results.<br>" 
            }
        ],
        edu: [
            { date: "2025 — 2026", title: "Master's Degree in Cybersecurity", co: "Université de Sherbrooke - Montreal, Canada", desc: "Double degree program and international academic mobility." },
            { date: "2023 — 2026", title: "Engineering Degree in Computer Science", co: "ENSSAT - Lannion, France", desc: "Graduate Engineering School, part of the Mines-Télécom Concours." },
            { date: "2021 — 2023", title: "Classes Préparatoires aux Grandes Écoles (CPGE) - PCSI-PC Pathway", co: "Lycée Marceau - Chartres, France", desc: "A highly selective two-year intensive undergraduate program preparing for the competitive entrance exams of top-tier engineering schools." },
            { date: "2021", title: "French Baccalaureate - Mathematics, Physics & Chemistry, Expert Mathematics Option", co: "Lycée Jean Baptiste Corot - Savigny sur Orge, France", desc: "High School Graduation with honors, specializing in advanced sciences and complex mathematics." }
        ],
        projects: [
            { 
                title: "AWS Privilege Escalation Policy Scanner", 
                desc: "<b>2026</b><br><br>Static analysis tool for AWS IAM policies designed to detect known privilege escalation vectors.", 
                github: "https://github.com/ShawnDeLaTV/AWS-IAM-privilege-escalation-policy-scanner", 
                demo: "https://matthieusonzogni.com/AWS-IAM-privilege-escalation-policy-scanner/", 
                url: "projects/build-in-progress.html",
                tags: ["IAM", "AWS", "ZeroTrust", "JavaScript"], 
                image: "images/p-aws-iam-privilege-escalation-policy-scanner.png" 
            },
            { 
                title: "AWS Zero Trust Cloud Architecture Terraform", 
                desc: "<b>2026</b><br><br>Isolated Multi-AZ infrastructure built via Terraform. Secured traffic flows through ALB and CloudFront.", 
                github: "https://github.com/ShawnDeLaTV/terraform-aws-secure-multi-az-infra", 
                url: "projects/build-in-progress.html",
                tags: ["Terraform", "AWS", "ZeroTrust", "IaC"], 
                image: "images/p-architecture-zero-trust.png" 
            },
            { 
                title: "Dockerized Authelia SSO Implementation", 
                desc: "<b>2026</b><br><br>OIDC centralization and enforcement of Multi-Factor Authentication (MFA) across all self-hosted services.<br><br>", 
                github: "https://github.com/ShawnDeLaTV/ProjetSystemeEtReseaux", 
                url: "projects/build-in-progress.html",
                tags: ["Docker", "SSO", "Authelia", "Nginx"], 
                image: "images/p-sso-authelia.png" 
            }
        ],
        certs: [
            { name: "AWS Solutions Architect", date: "Associate", img: "images/certifications/AWSSAA.png" },
            { name: "HashiCorp Terraform", date: "Associate <br>(Currently preparing)", img: "images/certifications/TFA.png" },
            { name: "TOEIC English", date: "B2 Level", img: "images/certifications/TOEIC.png" }
        ]
    }
};

const STACK_DATA = [
    { cat: "Cloud & Infra", items: [{ name: "AWS", icon: "images/logo/aws.png" }, { name: "Azure", icon: "images/logo/azure.png" }, { name: "Terraform", icon: "images/logo/terraform.png" }] },
    { cat: "Sécurité & Défense", items: [{ name: "Burp Suite", icon: "https://cdn.simpleicons.org/burpsuite/white" }] },
    { cat: "Automation & DevOps", items: [{ name: "Python", icon: "https://cdn.simpleicons.org/python/white" }, { name: "Java", icon: "images/logo/java.png" }, { name: "C", icon: "images/logo/c.png" }, { name: "Bash", icon: "https://cdn.simpleicons.org/gnubash/white" }, { name: "Docker", icon: "https://cdn.simpleicons.org/docker/white" }, { name: "GitHub", icon: "https://cdn.simpleicons.org/githubactions/white" }] }
];