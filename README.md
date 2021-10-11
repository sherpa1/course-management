# Course management software with TypeScript

Bonnes pratiques de Programmation Orientée Objet illustrée avec TypeScript.

## Sujet

Conception et implémentation d'un logiciel fictif de _"Gestion de cours"_.

## Acteurs

- Teacher
- Student

## Entités

- Teacher
- Student
- Matter
- Course

## Modélisation des relations entre entités

- Teacher has many Courses (1/N)
- Lesson belongs to Matter (N/1)
- Student has and belongs to many Courses (N/N)
- Course has and belongs to many Students (N/N)
- Lesson has and belongs to many Students (N/N)
- Student has and belongs to many Courses (N/N)
- Matter has many Courses (1/N)
- Course belongs to one Matter (N/1)

## Spécifications techniques

### Langage de programmation

Programmation Orienté Objet en TypeScript / JavaScript.

### Runtime JavaScript

Node.js v.14.17.6 (octobre 2021).

### Vérification de la version de Node.js installée

`node -v`

v14.17.6

### Installation des dépendances NPM

_Les commandes ci-dessous doivent toutes être exécutées depuis la racine du répertoire du projet_

### Installation des dépendances NPM (avant la première utilisation)

`npm install`

### Installation globale de Nodemon pour le Hot Reloading (avant la première utilisation)

`npm install -g nodemon`

ou

`sudo npm install -g nodemon` (sur systèmes Unix)

### Exécution du logiciel (code JS déjà transpilé)

`npm start`

### Transpilation du code TypeScript vers JavaScript

`npm run build`

### Transpilation TypeScript vers JavaScript et exécution du logiciel

`npm run dev`

### Transpilation TypeScript vers JavaScript et exécution du logiciel avec activation du Hot Reloading (nodemon doit être installé)

`npm run watch`

### Exécution des tests unitaires avec Jest.js

`npm test`

### Emplacement du code TypeScript transpilé en JavaScript

`./dist`

### Consultation du résultat produit par le logiciel

Pendant son exécution, le logiciel génére des logs directement affiché dans le terminal où il est en cours d'exécution.

#### Exemple de résultat attendu

```
📂 Matter : "Italian" has a new Course : "Greetings in italian for beginners"

🤵‍ Student : "Bart Feest" has a new Course : "Greetings in italian for beginners"

📘 Course : has a new Student "Bart Feest"

🤵‍ Student : "Nannie Terry" has a new Course : "Greetings in italian for beginners"

📘 Course : has a new Student "Nannie Terry"

🤵‍ Student : "Laurence Considine" has a new Course : "Greetings in italian for beginners"

📘 Course : has a new Student "Laurence Considine"

🤵‍ Teacher "John Doe" is teaching Course "Greetings in italian for beginners"

📘 Course : "Greetings in italian for beginners" started 10/10/2021 19:00

📘 Course : "Greetings in italian for beginners" ended 10/10/2021 20:00
```

---

**Alexandre Leroux**

- _Mail_ : alex@sherpa.one
- _Github_ : sherpa1
- _Twitter_ : @_sherpa_
- _Discord_ : sherpa#3890

_Enseignant vacataire à l'Université de Lorraine_

- IUT Nancy-Charlemagne (LP Ciasie)

- Institut des Sciences du Digital, Management & Cognition (Masters Sciences Cognitives)
