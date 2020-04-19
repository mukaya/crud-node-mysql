CRUD AVEC NODEJS/EXPRESS ET MYSQL

Cet petit projet, vous permet de prendre la main sur nodejs avec mysql en realisant les fonctionnalités de base de chaque logiciel informatique : la creation, la lecture,la modification et la suppression.

Pour lancer l'application: 

Après avoir cloné le projet en local

Rassurez-vous d'avoir Mysql installer dans votre système, si cela n'est pas le cas?

Veuillez suivre ce lien pour installer Mysql:

https://www.digitalocean.com/community/tutorials/comment-installer-mysql-sur-ubuntu-18-04-fr

Après l'installation de mysql vous pouvez maintenant vous connecté:

    sudo mysql -u root -p

Après la connection, veuillez crée une base de données nommer kda et une table nommer apprenant

    CREATE DATABASE kda;

    USE kda;

    CREATE TABLE apprenant(
        id int(11) not null auto_increment,
        nom varchar(20) not null,
        prenom varchar(20) not null,
        optionApp varchar(50) not null,
        primary key(id) 
    );

Pour lancer l'application nodejs doit etre installer.

https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-18-04-fr


Installer les dependances en tapant la commande:

    npm install

Pour executer l'application est voir le rendu, veuillez tapé la commande:

    nodemon

Voir le rendu de l'application dans votre navigateur sur le lien:

http://localhost:3000


CONTRIBUTION

Si vous voulez contribuer au projet et vous ne savez pas comment le faire, je vous recommande les resources suivantes:

https://openclassrooms.com/fr/courses/2342361-gerez-votre-code-avec-git-et-github/2433731-contribuez-a-des-projets-open-source

https://akrabat.com/the-beginners-guide-to-contributing-to-a-github-project/

https://medium.com/@bolajiayodeji/how-to-test-a-pull-request-locally-before-merging-634bb205d3a6

https://dev.to/bolajiayodeji/how-to-test-a-pull-request-locally-before-merging-1h29