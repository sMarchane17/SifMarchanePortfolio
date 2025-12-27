# Configuration EmailJS pour le formulaire de contact

## Étapes pour configurer l'envoi automatique d'emails :

### 1. Créer un compte EmailJS
- Allez sur https://www.emailjs.com/
- Créez un compte gratuit

### 2. Configurer un service email
- Dans votre dashboard EmailJS, cliquez sur "Email Services"
- Ajoutez un service (Gmail, Outlook, Yahoo, etc.)
- Suivez les instructions pour connecter votre email

### 3. Créer un template d'email
- Cliquez sur "Email Templates"
- Créez un nouveau template avec ces variables :
  - `{{from_name}}` - Nom de l'expéditeur
  - `{{from_email}}` - Email de l'expéditeur
  - `{{message}}` - Message
  - `{{to_email}}` - Votre email (sifmarchane02@gmail.com)

Exemple de template :
```
Sujet: Nouveau message depuis votre portfolio

De: {{from_name}} ({{from_email}})

Message:
{{message}}
```

### 4. Obtenir les clés API
- Service ID : Trouvé dans "Email Services"
- Template ID : Trouvé dans "Email Templates"
- Public Key : Trouvé dans "Account" > "General"

### 5. Configurer les variables d'environnement
- Copiez `.env.example` vers `.env`
- Remplacez les valeurs par vos vraies clés :

```
VITE_EMAILJS_SERVICE_ID=votre_vrai_service_id
VITE_EMAILJS_TEMPLATE_ID=votre_vrai_template_id
VITE_EMAILJS_PUBLIC_KEY=votre_vraie_clé_publique
```

### 6. Tester
- Redémarrez votre serveur de développement
- Testez le formulaire de contact
- Vous devriez recevoir les emails automatiquement !

## Note
Le formulaire envoie maintenant directement les emails à sifmarchane02@gmail.com avec le nom et le message de l'utilisateur.