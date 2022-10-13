# Para rodar o backend da aplicação

## 1° Na pasta do backend, crie e ative a virtualenv

### Linux / MacOS

    python3 -m venv .venv
    source .venv/bin/activate

### Windows

    python -m venv .venv
    .\.venv\Scripts\activate

## 3° Instale o Django

    pip install django

## 4° Inicie o servidor

    python manage.py runserver