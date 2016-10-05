# wsf-nodejs

## Consignes :

- Comptes utilisateurs (API, Utilisateurs)
- "Tweet" (modèle de Tweet, belongsTo user)
- Follower / Following

### Facultatif

- Retweet
- Favoris
- mentions
- Hashtags
---   

## Tips
### Users
- Model user
    - username
    - first_name
    - last_name
    - password chiffré
    - email
    - biography
- Routes users
    - GET /users => liste des users
    - GET /users => création nouvel user
    - GET /users/:id => update un user spécifique
    - UPDATE /users/:id => update un user spécifique
    - DELETE /users/:id => update un user spécifique

### Tweets
- Model Tweet
    - id
    - content
    - created_at
    - updated_at
- Routes tweets
    - GET /tweets => liste des tweets
    - GET /tweets => création nouvel tweet
    - GET /tweets/:id => update un tweet spécifique
    - UPDATE /tweets/:id => update un tweet spécifique
    - DELETE /tweets/:id => update un tweet spécifique    
