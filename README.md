# CV interactif — Aurélien Bertheaume

Site statique (HTML / CSS / JS, aucun framework, aucune dépendance à installer)
présentant un CV interactif : projets pro, compétences reliées entre elles,
projets personnels façon articles, vidéo de présentation, posts LinkedIn.

## Voir le site en local

Aucune installation nécessaire. Depuis ce dossier :

```bash
python3 -m http.server 8000
```

puis ouvre http://localhost:8000 dans ton navigateur.

(Ouvrir directement `index.html` en double-cliquant fonctionne aussi dans la
plupart des cas, mais un petit serveur local évite certains soucis de
sécurité navigateur.)

## Où modifier le contenu

**Un seul fichier à éditer pour tout le texte : `assets/js/data.js`.**
La mise en page ne bouge pas — tout se régénère automatiquement depuis ce
fichier. Chaque bloc `[ENTRE CROCHETS]` est un espace réservé à remplacer.

Dans `data.js`, tu trouveras, dans l'ordre :

1. **`profile`** — nom, intitulés de poste (qui défilent en haut de page),
   accroche, bio (2-3 paragraphes), coordonnées.
2. **`photo`** — laisse `src: null` pour garder l'avatar avec tes initiales,
   ou renseigne `src: "assets/img/photo/ton-fichier.jpg"` une fois ta photo
   ajoutée dans `assets/img/photo/`.
3. **`video`** — colle un lien YouTube ou Vimeo dans `url`. Tant que c'est
   vide, un emplacement réservé élégant s'affiche à la place.
4. **`skillCategories` / `skills`** — la liste de tes compétences, groupées
   par thème. Chaque compétence a un `id` unique.
5. **`projects`** — tes projets professionnels. Le champ `skills` (liste
   d'`id`) relie chaque projet aux compétences utilisées : c'est ce qui
   permet, en cliquant sur une compétence, de voir tous les autres projets
   (pro ou perso) qui la mobilisent aussi.
6. **`personalProjects`** — tes projets perso, présentés façon article
   (photo + texte). Ajoute tes photos dans `assets/img/personal/` puis
   référence-les dans `image`.
7. **`linkedinPosts`** — cartes qui renvoient vers tes vrais posts LinkedIn
   (l'utilisateur clique et part sur LinkedIn dans un nouvel onglet).

Après modification, il suffit de recharger la page : aucune compilation
n'est nécessaire.

## Comment fonctionne la navigation par compétences

- Chaque carte "projet" et "projet perso" affiche les compétences utilisées.
- Cliquer sur une compétence (dans une carte, dans un projet ouvert, ou dans
  la section "Compétences") ouvre une fenêtre listant **tout** ce qui a été
  fait avec cette compétence — projets pro et perso confondus — avec un
  lien direct vers chaque réalisation.

C'est cette relation `skills: [...]` dans `data.js` qui construit tout le
réseau : plus tu es précis sur les compétences de chaque projet, plus la
navigation est riche.

## Déploiement — GitHub Pages + domaine `aurelienbertheaume.me`

Ce dépôt contient déjà un fichier `CNAME` avec `aurelienbertheaume.me`,
utilisé par GitHub Pages pour savoir sur quel domaine personnalisé publier.

1. Sur GitHub : **Settings → Pages**.
   - Source : `Deploy from a branch`.
   - Branch : la branche à publier (typiquement `main`), dossier `/ (root)`.
   - Enregistre. GitHub Pages va détecter le fichier `CNAME` et configurer
     le domaine personnalisé automatiquement.
2. Chez ton registrar (là où tu as acheté `aurelienbertheaume.me`), configure
   les DNS :
   - Pour le domaine racine (`aurelienbertheaume.me`), ajoute 4 enregistrements
     **A** pointant vers les IP de GitHub Pages :
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
   - Si tu préfères utiliser `www.aurelienbertheaume.me`, ajoute plutôt un
     enregistrement **CNAME** pointant vers `<ton-compte>.github.io`.
3. Dans **Settings → Pages**, coche **Enforce HTTPS** une fois le certificat
   généré (peut prendre jusqu'à quelques heures après la config DNS).

Le site sera alors accessible sur `https://aurelienbertheaume.me`.

## Structure du projet

```
index.html              structure de la page (une seule page, plusieurs sections)
assets/css/style.css    design system (couleurs, typographie, composants)
assets/js/data.js       TOUT LE CONTENU — c'est le fichier à éditer
assets/js/app.js        logique de rendu et d'interactions (pas besoin d'y toucher)
assets/img/photo/       ta photo de portrait
assets/img/personal/    photos de tes projets personnels
assets/video/           (optionnel) si tu préfères héberger une vidéo toi-même
CNAME                   domaine personnalisé pour GitHub Pages
```

## Ce qu'il reste à faire avant d'envoyer le CV à des recruteurs

- [ ] Remplacer toutes les valeurs `[ENTRE CROCHETS]` dans `assets/js/data.js`
- [ ] Ajouter ta photo (`profile.photo` / `photo.src`)
- [ ] Ajouter le lien de ta vidéo de présentation (`video.url`)
- [ ] Vérifier le lien LinkedIn (`profile.linkedinUrl`) et les liens des posts
- [ ] Relire l'ensemble sur mobile (le site est responsive, mais une relecture
      ne fait jamais de mal)
- [ ] Configurer les DNS et vérifier que `https://aurelienbertheaume.me`
      charge bien le site
