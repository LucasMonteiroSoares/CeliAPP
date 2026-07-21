# CeliAPP

Aplicação para apoiar pessoas com doença celíaca: mapeamento de estabelecimentos seguros, notícias, avaliações, perfil pessoal e chatbot com RAG.

[Link do vídeo mostrando protótipo FIGMA](https://youtu.be/W5M6cFiKQZY)

## Stack

- **Frontend:** Next.js + TailwindCSS (em `frontend/`)
- **Backend:** Laravel (PHP) com PostgreSQL (em `backend/`)
- **Chatbot / IA:** Python com RAG (em `chatbot/`)
- **Infra / DevOps:** Docker, Laravel Sail, Kubernetes e AWS (em `infra-devops/`)
- **Banco de dados:** PostgreSQL 15

## Estrutura do repositório

```text
/home/lucas/Projetos/CeliAPP
├── backend/          # API Laravel: regras de negócio, autenticação, CRUDs e integrações
├── chatbot/          # Módulo Python de IA e RAG
├── frontend/         # Aplicação Next.js
├── infra-devops/     # Docker, Kubernetes, CI/CD e Terraform/Cloud
├── ObsidianCeliAPP/  # Documentação do produto e arquitetura
├── .env              # Variáveis de ambiente locais (não versionar)
├── .gitignore
├── LICENSE
└── README.md
```

## Backend (Laravel + Sail)

O backend está em `backend/` e usa o **Laravel Sail** para subir a aplicação PHP e o PostgreSQL em containers Docker.

### Requisitos

- Docker e Docker Compose
- WSL2 (se estiver no Windows)

### Subir o ambiente

```bash
cd backend
./vendor/bin/sail up -d
```

Na primeira execução, rode as migrations:

```bash
./vendor/bin/sail artisan migrate
```

### Configuração de ambiente

O arquivo `.env.example` em `backend/` contém o modelo de variáveis. Copie para `.env` e ajuste se necessário:

```bash
cd backend
cp .env.example .env
php artisan key:generate
```

Padrão do Sail:

- Banco: `pgsql`
- Host do banco: `pgsql`
- Porta: `5432`
- Database: `celiapp`
- Usuário: `sail`
- Senha: `password`

### Comandos úteis

```bash
# Parar os containers
./vendor/bin/sail down

# Rodar testes
./vendor/bin/sail artisan test

# Acessar o container da aplicação
./vendor/bin/sail shell
```

## Documentação

A documentação completa de produto, arquitetura e regras de desenvolvimento está em `ObsidianCeliAPP/CeliAPP/`.

## Licença

Este projeto é pessoal e de aprendizado. Veja `LICENSE` para mais detalhes.
