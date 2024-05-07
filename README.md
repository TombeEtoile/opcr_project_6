# Titre du Projet : 
verdier_augustin_p4_tournois_echec__12/2024

## Description : 
Page HTML dynamique appelant les données d'une API (ici les tops films d'une base de plus de 1000 films)

## Cloner le dépôt :
```
git clone https://github.com/TombeEtoile/projet_6.git
```

## Installation et exécution de l'application:
Dans votre terminale : 
  1. Rendez-vous à la racine de l'API "Movies API"
```
cd votre/dossier/projet_6/OCMovies-API-EN-FR
```
  2. Activez l'environnement virtuel :

    2.1. Sous windows :
    ```
    $ env\Scripts\activate
    ```
    
    2.2. Sous macos ou linux :
    ```
    $ source env/bin/activate
    ```
  3.  Démarrez le serveur :
  ```
  $ python manage.py runserver
  ```

Le serveur de l'API fonctionne, les données se chargeront elles aussi. 

## Requirements.txt : 
asgiref==3.7.2

Django==5.0

django-cors-headers==4.3.1

django-extensions==3.2.3

django-filter==23.5

django-rest-framework==0.1.0

django-tqdm==1.3.1

djangorestframework==3.14.0

Markdown==3.5.1

pytz==2023.3.post1

sqlparse==0.4.4

tqdm==4.66.1
